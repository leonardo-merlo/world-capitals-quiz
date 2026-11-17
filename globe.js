// globe.js
// globo 3d (globe.gl) + modo explorador
// o globo fica do lado direito e serve os dois modos:
// no quiz ele voa ate o pais da pergunta, no explorador da pra clicar nos paises

let globe = null; // instancia do globe.gl (fica null se a lib nao carregar)
let selectedCode = null; // pais destacado agora (codigo iso, ex: "br")
let hoverCode = null; // pais embaixo do mouse no modo explorador
let explorerCode = null; // ultimo pais aberto no explorador (separado do quiz pra nao entregar a resposta)
let appMode = "quiz"; // "quiz" ou "explorer"

// atalho pra achar o pais do data.js pelo codigo
const COUNTRY_BY_CODE = Object.fromEntries(
  CAPITALS_DATA.map((item) => [item.code, item]),
);

// paises pequenos demais pro mapa de contornos (ilhas, microestados)
// eles aparecem como um pontinho no globo
const POLYGON_CODES = new Set(
  COUNTRIES_GEO.features.map((feature) => feature.properties.code),
);
const SMALL_COUNTRIES = CAPITALS_DATA.filter(
  (item) => !POLYGON_CODES.has(item.code),
);

const COLORS = {
  land: "#2f3550",
  landHover: "#5b8dee",
  landMuted: "#1f2333",
  selected: "#e8c84a",
  globe: "#0f1118",
};

// url da bandeira no flagcdn (larguras aceitas: 20, 40, 80, 160, 320, 640, 1280)
function flagUrl(code, width) {
  return `https://flagcdn.com/w${width}/${code}.png`;
}

// ---- globo ----

function initGlobe() {
  const container = document.getElementById("globe");

  // se o cdn falhar o quiz continua funcionando, so sem o globo
  if (typeof Globe === "undefined") {
    container.classList.add("globe-error");
    container.textContent = "Não foi possível carregar o globo.";
    return;
  }

  globe = new Globe(container)
    .backgroundColor("rgba(0,0,0,0)")
    .showAtmosphere(true)
    .atmosphereColor("#5b8dee")
    .atmosphereAltitude(0.18)
    .polygonsData(COUNTRIES_GEO.features)
    .polygonSideColor(() => "rgba(232, 200, 74, 0.35)")
    .polygonStrokeColor(() => "rgba(122, 128, 160, 0.45)")
    .polygonsTransitionDuration(400)
    .polygonLabel((feature) => countryTooltip(feature.properties.code))
    .onPolygonHover((feature) => setHover(feature && feature.properties.code))
    .onPolygonClick((feature) => handleGlobeClick(feature.properties.code))
    .pointsData(SMALL_COUNTRIES)
    .pointLat((item) => COUNTRY_INFO[item.code].lat)
    .pointLng((item) => COUNTRY_INFO[item.code].lng)
    .pointRadius(0.35)
    .pointsMerge(false)
    .pointsTransitionDuration(400)
    .pointLabel((item) => countryTooltip(item.code))
    .onPointHover((item) => setHover(item && item.code))
    .onPointClick((item) => handleGlobeClick(item.code))
    .ringColor(() => (t) => `rgba(232, 200, 74, ${1 - t})`)
    .ringMaxRadius(5)
    .ringPropagationSpeed(2.5)
    .ringRepeatPeriod(1100);

  globe.globeMaterial().color.set(COLORS.globe);
  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.4;
  globe.pointOfView({ lat: 15, lng: -30, altitude: 2.4 });

  refreshGlobe();

  // o globo precisa saber o tamanho da caixa onde ele mora
  const resize = () =>
    globe.width(container.clientWidth).height(container.clientHeight);
  new ResizeObserver(resize).observe(container);
  resize();
}

// reaplica as cores e alturas (o globe.gl so recalcula quando o accessor muda)
function refreshGlobe() {
  if (!globe) return;

  globe
    .polygonCapColor((feature) => polygonColor(feature.properties.code))
    .polygonAltitude((feature) =>
      feature.properties.code === selectedCode ? 0.05 : 0.008,
    )
    .pointColor((item) => polygonColor(item.code))
    .pointAltitude((item) => (item.code === selectedCode ? 0.05 : 0.012));
}

function polygonColor(code) {
  if (code === selectedCode) return COLORS.selected;
  if (!COUNTRY_BY_CODE[code]) return COLORS.landMuted; // territorio que nao ta no quiz
  if (appMode === "explorer" && code === hoverCode) return COLORS.landHover;
  return COLORS.land;
}

// texto que aparece ao passar o mouse (so no explorador, no quiz seria cola)
function countryTooltip(code) {
  const item = COUNTRY_BY_CODE[code];
  if (appMode !== "explorer" || !item) return "";
  return `<div class="globe-tooltip">${escapeHtml(item.country)}</div>`;
}

function setHover(code) {
  if (appMode !== "explorer") return;
  hoverCode = code && COUNTRY_BY_CODE[code] ? code : null;
  document.getElementById("globe").style.cursor = hoverCode ? "pointer" : "";
  refreshGlobe();
}

// quanto mais o pais e grande, mais longe a camera fica pra ele caber na tela
function altitudeFor(code) {
  const area = COUNTRY_INFO[code].area || 0;
  return Math.min(2.4, Math.max(0.7, Math.sqrt(area) / 1700 + 0.45));
}

// destaca o pais e gira/aproxima o globo ate ele
function focusCountry(code) {
  selectedCode = code;
  if (!globe) return;

  const info = COUNTRY_INFO[code];
  globe.controls().autoRotate = false;
  globe.ringsData([{ lat: info.lat, lng: info.lng }]);
  refreshGlobe();
  globe.pointOfView(
    { lat: info.lat, lng: info.lng, altitude: altitudeFor(code) },
    1600,
  );
}

// tira o destaque e volta a girar sozinho
function clearGlobeSelection() {
  selectedCode = null;
  if (!globe) return;

  globe.ringsData([]);
  refreshGlobe();
  globe.pointOfView({ altitude: 2.4 }, 1200);
  globe.controls().autoRotate = true;
}

function handleGlobeClick(code) {
  if (appMode !== "explorer" || !COUNTRY_BY_CODE[code]) return;
  document.getElementById("explorer-search").value = "";
  exploreCountry(code);
}

// ---- modos (quiz / explorador) ----

function setMode(mode) {
  appMode = mode;
  hoverCode = null;

  document.getElementById("tab-quiz").setAttribute("aria-selected", mode === "quiz");
  document
    .getElementById("tab-explorer")
    .setAttribute("aria-selected", mode === "explorer");
  document.getElementById("app").hidden = mode !== "quiz";
  document.getElementById("explorer").hidden = mode !== "explorer";
  document.getElementById("globe-hint").textContent =
    mode === "explorer"
      ? "Clique em um país · arraste para girar · role para aproximar"
      : "Arraste para girar · role para aproximar";

  if (mode === "explorer") {
    if (explorerCode) {
      exploreCountry(explorerCode);
    } else {
      clearGlobeSelection();
    }
    return;
  }

  // voltando pro quiz: se tem pergunta na tela, o globo volta pra ela
  const quizAtivo = document
    .getElementById("screen-quiz")
    .classList.contains("active");

  if (quizAtivo && questions[currentIndex]) {
    focusCountry(questions[currentIndex].code);
  } else {
    clearGlobeSelection();
  }
}

// ---- modo explorador ----

function exploreCountry(code) {
  explorerCode = code;
  focusCountry(code);
  renderCountryInfo(code);
}

function formatPopulation(n) {
  if (n >= 1_000_000) {
    const milhoes = (n / 1_000_000).toLocaleString("pt-BR", {
      maximumFractionDigits: 1,
    });
    return `${milhoes} milhões`;
  }
  return `${n.toLocaleString("pt-BR")} hab.`;
}

function renderCountryInfo(code) {
  const item = COUNTRY_BY_CODE[code];
  const info = COUNTRY_INFO[code];

  const stats = [
    ["Capital", item.capital],
    [
      "População",
      info.population ? formatPopulation(info.population) : "Não informada",
    ],
    ["Área", `${info.area.toLocaleString("pt-BR")} km²`],
    ["Idiomas", info.languages.join(", ") || "—"],
    ["Moeda", info.currencies.join(", ") || "—"],
  ];

  document.getElementById("explorer-info").innerHTML = `
    <div class="info-head">
      <img
        class="info-flag"
        title="Clique para ampliar a bandeira"
        src="${flagUrl(code, 160)}"
        srcset="${flagUrl(code, 320)} 2x"
        alt="Bandeira de ${escapeHtml(item.country)}"
      />
      <div>
        <div class="country-label">${escapeHtml(info.subregion)}</div>
        <h2 class="info-name">${escapeHtml(item.country)}</h2>
      </div>
    </div>
    <dl class="info-grid">
      ${stats
        .map(
          ([label, value]) => `
        <div class="info-item">
          <dt>${label}</dt>
          <dd>${escapeHtml(value)}</dd>
        </div>`,
        )
        .join("")}
    </dl>
    <p class="feedback-fact">${escapeHtml(item.fact)}</p>
  `;

  document.getElementById("explorer-empty").hidden = true;
  document.getElementById("explorer-info").hidden = false;
}

// busca por nome: ajuda a achar paises pequenos que sao dificeis de clicar.
// ao tocar no campo abre a lista inteira, separada por continente, e ela
// vai filtrando conforme a pessoa digita

// mesma ordem e mesmos nomes do seletor de continente do quiz
const CONTINENT_LABELS = [
  ["Africa", "África"],
  ["Asia", "Ásia"],
  ["Europe", "Europa"],
  ["North America", "América do Norte / Central"],
  ["South America", "América do Sul"],
  ["Oceania", "Oceania"],
];

function setupExplorerSearch() {
  const input = document.getElementById("explorer-search");
  const list = document.getElementById("country-list");

  const sorted = [...CAPITALS_DATA].sort((a, b) =>
    a.country.localeCompare(b.country, "pt-BR"),
  );

  // a lista e montada uma vez so; filtrar e so esconder o que nao casa
  const groups = CONTINENT_LABELS.map(([key, label]) => {
    const items = sorted
      .filter((item) => item.continent === key)
      .map(
        (item) => `
          <li role="option" class="country-option" tabindex="-1"
              data-code="${item.code}"
              data-name="${escapeHtml(normalizeAnswer(item.country))}">
            ${escapeHtml(item.country)}
          </li>`,
      )
      .join("");
    return `
      <li class="country-group" role="presentation">
        <div class="country-group-label">${label}</div>
        <ul role="group" aria-label="${label}">${items}</ul>
      </li>`;
  }).join("");
  list.innerHTML = `${groups}<li class="country-empty" hidden>Nenhum país encontrado</li>`;

  const visibleOptions = () => [
    ...list.querySelectorAll(".country-option:not([hidden])"),
  ];

  const filter = () => {
    const typed = normalizeAnswer(input.value);
    list.querySelectorAll(".country-option").forEach((li) => {
      li.hidden = typed !== "" && !li.dataset.name.includes(typed);
    });
    list.querySelectorAll(".country-group").forEach((group) => {
      group.hidden = !group.querySelector(".country-option:not([hidden])");
    });
    list.querySelector(".country-empty").hidden = visibleOptions().length > 0;
  };

  const openList = () => {
    filter();
    list.hidden = false;
    input.setAttribute("aria-expanded", "true");
  };

  const closeList = () => {
    list.hidden = true;
    input.setAttribute("aria-expanded", "false");
  };

  const choose = (code) => {
    input.value = COUNTRY_BY_CODE[code].country;
    closeList();
    exploreCountry(code);
  };

  // enter: o pais com o nome exato, senao o primeiro da lista filtrada
  const search = () => {
    const typed = normalizeAnswer(input.value);
    if (!typed) return;
    const exact = CAPITALS_DATA.find(
      (item) => normalizeAnswer(item.country) === typed,
    );
    const first = visibleOptions()[0];
    if (exact) choose(exact.code);
    else if (first) choose(first.dataset.code);
  };

  input.addEventListener("focus", openList);
  input.addEventListener("click", openList);
  input.addEventListener("input", openList);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      search();
    } else if (event.key === "Escape") {
      closeList();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      openList();
      visibleOptions()[0]?.focus();
    }
  });

  // mousedown em vez de click: sem isso o campo perde o foco antes do click
  list.addEventListener("mousedown", (event) => event.preventDefault());
  list.addEventListener("click", (event) => {
    const option = event.target.closest(".country-option");
    if (option) choose(option.dataset.code);
  });

  // setas andam pela lista, enter escolhe, esc volta pro campo
  list.addEventListener("keydown", (event) => {
    const all = visibleOptions();
    const index = all.indexOf(document.activeElement);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      all[Math.min(index + 1, all.length - 1)]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (index <= 0) input.focus();
      else all[index - 1].focus();
    } else if (event.key === "Enter" && index >= 0) {
      event.preventDefault();
      choose(all[index].dataset.code);
    } else if (event.key === "Escape") {
      closeList();
      input.focus();
    }
  });

  // fecha ao clicar ou tocar fora do campo e da lista
  document.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".explorer-search-wrap")) closeList();
  });
}

// a bandeira do painel do explorador abre ampliada, igual a do quiz
document.getElementById("explorer-info").addEventListener("click", (event) => {
  if (event.target.closest(".info-flag") && explorerCode) {
    showFlagOverlay(explorerCode, COUNTRY_BY_CODE[explorerCode].country);
  }
});

initGlobe();
setupExplorerSearch();
