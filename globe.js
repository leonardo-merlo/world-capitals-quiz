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

// busca por nome: ajuda a achar paises pequenos que sao dificeis de clicar
function setupExplorerSearch() {
  const input = document.getElementById("explorer-search");
  const list = document.getElementById("country-list");

  list.innerHTML = [...CAPITALS_DATA]
    .sort((a, b) => a.country.localeCompare(b.country, "pt-BR"))
    .map((item) => `<option value="${escapeHtml(item.country)}"></option>`)
    .join("");

  const search = () => {
    const typed = normalizeAnswer(input.value);
    if (!typed) return;

    const found = CAPITALS_DATA.find(
      (item) => normalizeAnswer(item.country) === typed,
    );
    if (found) exploreCountry(found.code);
  };

  input.addEventListener("change", search);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") search();
  });
}

initGlobe();
setupExplorerSearch();
