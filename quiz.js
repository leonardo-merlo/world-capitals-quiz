// quiz.js
// logica principal do quiz de capitais
// feito por mim :)

// ---- variaveis que guardam o estado do jogo ----

let questions = []; // perguntas do quiz atual
let currentIndex = 0; // qual pergunta estamos agora
let score = 0; // quantas o usuario acertou
let wrongAnswers = []; // lista das que errou

let isReviewMode = false; // flag pra saber se ta no modo revisao
let reviewCount = 0; // quantas rodadas de revisao ja fez
let totalScore = 0; // soma de todos os acertos (quiz + revisoes)
let originalTotal = 0; // total de perguntas do quiz original

// ---- funcoes utilitarias ----

// essa funcao limpa a resposta do usuario pra comparar direito
// tira espacos, deixa tudo minusculo e remove acentos
function normalizeAnswer(str) {
  // isso aqui transforma letra acentuada em letra + acento separados
  // ai da pra remover so o acento com o replace logo abaixo
  return str
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// compara o que o usuario digitou com a resposta certa
function checkAnswer(userInput, correctAnswer) {
  return normalizeAnswer(userInput) === normalizeAnswer(correctAnswer);
}

// embaralha um array - algoritmo fisher-yates
// vi esse algoritmo num tutorial e funciona muito bem
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // troca os elementos de lugar
  }
  return arr;
}

// cria a lista de perguntas baseado no continente e quantidade escolhida
function buildQuestions(continent, count) {
  // filtra por continente (ou pega tudo se for "all")
  let filtered = CAPITALS_DATA.filter((item) => {
    return continent === "all" || item.continent === continent;
  });

  // embaralha pra nao ser sempre na mesma ordem
  shuffleArray(filtered);

  // limita o numero de perguntas se necessario
  if (count !== "all") {
    const limit = parseInt(count);
    filtered = filtered.slice(0, limit);
  }

  return filtered;
}

// funcao pra escapar html e nao ter problema de segurança
// aprendi que tem que fazer isso quando coloca texto do usuario na tela
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ---- carrossel de curiosidades ----
// cada pais tem 3 itens em COUNTRY_FACTS (curiosities.js): { type, title, text }
// os itens ficam lado a lado numa faixa com scroll-snap, entao arrastar o dedo
// funciona nativamente. as setas e os pontos so controlam essa mesma faixa.

function renderFactsCarousel(code) {
  const facts = (typeof COUNTRY_FACTS !== "undefined" && COUNTRY_FACTS[code]) || [];
  if (facts.length === 0) return "";

  const slides = facts
    .map(
      (fact, i) => `
      <article class="facts-slide" aria-label="Curiosidade ${i + 1} de ${facts.length}">
        <span class="facts-tag ${fact.type === "do" ? "facts-tag-do" : ""}">${
          fact.type === "do" ? "Para fazer" : "Você sabia?"
        }</span>
        <h3 class="facts-title">${escapeHtml(fact.title)}</h3>
        <p class="facts-text">${escapeHtml(fact.text)}</p>
      </article>`,
    )
    .join("");

  const dots = facts
    .map((_, i) => `<span class="facts-dot${i === 0 ? " active" : ""}"></span>`)
    .join("");

  return `
    <section class="facts-carousel" aria-roledescription="carrossel" aria-label="Curiosidades">
      <button type="button" class="facts-arrow facts-prev is-hidden" aria-label="Curiosidade anterior" data-dir="-1">‹</button>
      <div class="facts-track" tabindex="0">${slides}</div>
      <button type="button" class="facts-arrow facts-next" aria-label="Próxima curiosidade" data-dir="1">›</button>
      <div class="facts-dots" aria-hidden="true">${dots}</div>
    </section>
  `;
}

// um unico listener para todos os carrosseis (o html deles e recriado a toda hora)
document.addEventListener("click", (event) => {
  const arrow = event.target.closest(".facts-arrow");
  if (!arrow) return;
  const carousel = arrow.closest(".facts-carousel");
  const track = carousel.querySelector(".facts-track");
  track.scrollBy({ left: Number(arrow.dataset.dir) * track.clientWidth, behavior: "smooth" });
});

// scroll nao borbulha, entao usa captura para atualizar os pontos e as setas
document.addEventListener(
  "scroll",
  (event) => {
    const track = event.target;
    if (!track.classList || !track.classList.contains("facts-track")) return;
    const carousel = track.closest(".facts-carousel");
    const count = track.children.length;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    carousel.querySelectorAll(".facts-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    carousel.querySelector(".facts-prev").classList.toggle("is-hidden", index === 0);
    carousel.querySelector(".facts-next").classList.toggle("is-hidden", index === count - 1);
  },
  true,
);

// setas do teclado quando a faixa esta focada
document.addEventListener("keydown", (event) => {
  if (!event.target.classList || !event.target.classList.contains("facts-track")) return;
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  event.stopPropagation();
  const dir = event.key === "ArrowRight" ? 1 : -1;
  event.target.scrollBy({ left: dir * event.target.clientWidth, behavior: "smooth" });
});

// ---- navegacao entre telas ----

// mostra uma tela e esconde todas as outras
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((tela) => {
    tela.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
}

// ---- controle do quiz ----

// inicia o quiz quando o usuario clica em "comecar desafio"
function startQuiz() {
  const continent = document.getElementById("sel-continent").value;
  const count = document.getElementById("sel-count").value;

  const pool = buildQuestions(continent, count);

  if (pool.length === 0) {
    alert("Nenhuma pergunta disponivel para essa opcao!");
    return;
  }

  // reseta tudo pro estado inicial
  questions = pool;
  currentIndex = 0;
  score = 0;
  wrongAnswers = [];
  isReviewMode = false;
  reviewCount = 0;
  totalScore = 0;
  originalTotal = pool.length;

  // esconde o banner de revisao (pode estar visivel de uma partida anterior)
  document.getElementById("review-banner").style.display = "none";

  showScreen("screen-quiz");
  renderQuestion();
}

// mostra a pergunta atual na tela
function renderQuestion() {
  const q = questions[currentIndex];
  const total = questions.length;

  // atualiza o nome do pais
  document.getElementById("country-name").textContent = q.country;

  // bandeira do pais (flagcdn) e globo voando ate ele
  const flag = document.getElementById("country-flag");
  flag.src = flagUrl(q.code, 160);
  flag.srcset = `${flagUrl(q.code, 320)} 2x`;
  flag.alt = `Bandeira de ${q.country}`;
  focusCountry(q.code);

  // atualiza o contador de perguntas ex: "3 / 10"
  document.getElementById("question-counter").textContent =
    `${currentIndex + 1} / ${total}`;

  // atualiza a barra de progresso
  const percent = (currentIndex / total) * 100;
  document.getElementById("progress-fill").style.width = `${percent}%`;

  // atualiza o score
  document.getElementById("score-display").textContent =
    `${score} / ${currentIndex}`;

  // limpa o campo de texto e coloca o foco nele
  const input = document.getElementById("answer-input");
  input.value = "";
  input.disabled = false;
  input.focus();

  // mostra o botao responder, esconde o botao de proxima e o feedback
  document.getElementById("input-area").style.display = "block";
  document.getElementById("btn-answer").style.display = "block";
  document.getElementById("btn-answer").disabled = false;
  document.getElementById("feedback-area").style.display = "none";
  document.getElementById("next-area").style.display = "none";
  document.getElementById("input-hint").textContent =
    "Pressione Enter ou clique em Responder";
}

// chamado quando o usuario clica em "responder" ou aperta enter
function submitAnswer() {
  const input = document.getElementById("answer-input");
  const userAnswer = input.value.trim();

  // nao faz nada se o campo ta vazio
  if (userAnswer === "") {
    input.focus();
    return;
  }

  const q = questions[currentIndex];
  const isCorrect = checkAnswer(userAnswer, q.capital);

  // desabilita o input pra nao poder editar depois de responder
  input.disabled = true;

  // esconde o botao "responder" e mostra o botao "proxima pergunta"
  // faz sentido porque o usuario ja respondeu, nao tem mais o que fazer aqui
  document.getElementById("btn-answer").style.display = "none";
  document.getElementById("next-area").style.display = "block";

  // muda o hint do input pra orientar o proximo passo
  document.getElementById("input-hint").textContent =
    "Pressione Enter para continuar";

  if (isCorrect) {
    score++;
    totalScore++;
    showFeedback(true, q, userAnswer);
  } else {
    // adiciona na lista de erros se ainda nao estiver la
    const jaEstaNaLista = wrongAnswers.some(
      (item) => item.country === q.country,
    );

    if (!jaEstaNaLista) {
      wrongAnswers.push(q);
    }

    showFeedback(false, q, userAnswer);
  }

  // atualiza o score com +1 na contagem total
  document.getElementById("score-display").textContent =
    `${score} / ${currentIndex + 1}`;

  // mostra o feedback
  document.getElementById("feedback-area").style.display = "block";
}

// monta e exibe o feedback depois da resposta
function showFeedback(isCorrect, question, userAnswer) {
  const area = document.getElementById("feedback-area");

  const cssClass = isCorrect ? "correct" : "wrong";
  const icon = isCorrect ? "✓" : "✗";
  const titulo = isCorrect ? "Você acertou!" : "Errado!";

  // monta a linha mostrando a resposta errada e a certa
  let answerLine = "";
  if (!isCorrect) {
    answerLine = `
      <p class="feedback-answer">
        Sua resposta: <strong>${escapeHtml(userAnswer)}</strong> —
        Capital correta: <strong style="color:var(--accent)">${escapeHtml(question.capital)}</strong>
      </p>
    `;
  }

  area.innerHTML = `
    <div class="feedback ${cssClass}">
      <div class="feedback-header">
        <div class="feedback-icon">${icon}</div>
        <span class="feedback-title">${titulo}</span>
      </div>
      ${answerLine}
      ${renderFactsCarousel(question.code)}
    </div>
  `;
}

// vai pra proxima pergunta ou mostra o resultado final
function nextQuestion() {
  currentIndex++;

  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

// ---- tela de resultados ----

function showResults() {
  const total = questions.length;
  const correct = score;

  // mostra o placar ex: "7 / 10"
  document.getElementById("result-score-display").textContent =
    `${correct} / ${total}`;

  // texto embaixo do placar
  let labelText = "perguntas corretas";
  if (correct === total) labelText = "perfeito! 🎉";
  if (correct === 1) labelText = "pergunta correta";

  document.getElementById("result-label-text").textContent = labelText;

  const wrongSection = document.getElementById("wrong-list-section");
  const noWrongSection = document.getElementById("no-wrong-section");

  if (wrongAnswers.length > 0) {
    // monta a lista de paises que errou usando map
    const itens = wrongAnswers.map(
      (item) => `
      <div class="wrong-item">
        <span class="wrong-country">${escapeHtml(item.country)}</span>
        <span class="wrong-capital">${escapeHtml(item.capital)}</span>
      </div>
    `,
    );

    document.getElementById("wrong-list").innerHTML = itens.join("");

    wrongSection.style.display = "block";
    noWrongSection.style.display = "none";
  } else {
    // se zerou todos os erros no modo revisao, vai pra celebracao
    if (isReviewMode) {
      showCelebration();
      return;
    }

    wrongSection.style.display = "none";
    noWrongSection.style.display = "block";
  }

  showScreen("screen-results");
}

// ---- sistema de revisao inteligente de erros ----

// inicia o mini-quiz so com as perguntas que errou
function startReview() {
  reviewCount++;

  // copia a lista de erros e embaralha
  const perguntasRevisao = shuffleArray([...wrongAnswers]);

  // reseta pra nova rodada de revisao
  questions = perguntasRevisao;
  wrongAnswers = []; // vai ser preenchido de novo com os que errar nessa rodada
  currentIndex = 0;
  score = 0;
  isReviewMode = true;

  // mostra o banner informando que ta em modo revisao
  const banner = document.getElementById("review-banner");
  banner.style.display = "flex";
  banner.querySelector(".review-banner-text").innerHTML =
    `<strong>Modo Revisão (nº ${reviewCount})</strong> — Acerte todos para concluir!`;

  showScreen("screen-quiz");
  renderQuestion();
}

// mostra a tela de celebracao quando zerou todos os erros
function showCelebration() {
  document.getElementById("final-score").textContent = totalScore;
  document.getElementById("final-reviews").textContent = reviewCount;
  showScreen("screen-celebration");
}

// botao finalizar - vai pra celebracao sem revisar
function finishAll() {
  showCelebration();
}

// reseta tudo e volta pra tela inicial
// essa funcao e chamada tanto pelo botao "jogar novamente" quanto pelo botao de reset no quiz
function goHome() {
  questions = [];
  currentIndex = 0;
  score = 0;
  wrongAnswers = [];
  isReviewMode = false;
  reviewCount = 0;
  totalScore = 0;
  originalTotal = 0;

  document.getElementById("review-banner").style.display = "none";
  showScreen("screen-start");
  clearGlobeSelection();
}

// ---- eventos de teclado ----

// permite usar enter pra responder e pra ir pra proxima pergunta
function handleKeydown(event) {
  if (event.key !== "Enter") return;

  // so responde ao enter quando a tela de pergunta do quiz ta aberta
  const quizNaTela =
    appMode === "quiz" &&
    document.getElementById("screen-quiz").classList.contains("active");
  if (!quizNaTela) return;

  const nextArea = document.getElementById("next-area");

  // se o botao de proxima ja ta visivel, vai pra proxima
  if (nextArea.style.display !== "none") {
    nextQuestion();
  } else {
    submitAnswer();
  }
}

document.addEventListener("keydown", handleKeydown);

// ---- bandeira ampliada ----

// abre a bandeira quase em tela cheia (pra desenhar olhando).
// serve pro quiz e pro explorador
function showFlagOverlay(code, country) {
  // a flagcdn so tem larguras fixas; 2560 e a maior
  const img = document.getElementById("flag-overlay-img");
  img.src = flagUrl(code, 1280);
  img.srcset = `${flagUrl(code, 640)} 640w, ${flagUrl(code, 1280)} 1280w, ${flagUrl(code, 2560)} 2560w`;
  img.sizes = "(max-width: 1312px) calc(100vw - 32px), 1280px";
  img.alt = `Bandeira de ${country}, ampliada`;

  document.getElementById("flag-overlay").hidden = false;
  document.getElementById("flag-overlay-close").focus();
}

function openQuizFlag() {
  const q = questions[currentIndex];
  if (q) showFlagOverlay(q.code, q.country);
}

function closeFlagOverlay() {
  const overlay = document.getElementById("flag-overlay");
  if (overlay.hidden) return;
  overlay.hidden = true;

  // o foco nao pode ficar no X escondido
  const input = document.getElementById("answer-input");
  if (appMode === "quiz" && !input.disabled) input.focus();
  else document.activeElement.blur();
}

// qualquer clique no overlay fecha: na bandeira, fora dela ou no X
document.getElementById("country-flag").addEventListener("click", openQuizFlag);
document.getElementById("flag-overlay").addEventListener("click", closeFlagOverlay);

// capture: o Esc e o Enter com o overlay aberto nao chegam no quiz
document.addEventListener(
  "keydown",
  (event) => {
    if (document.getElementById("flag-overlay").hidden) return;
    if (event.key === "Escape" || event.key === "Enter") {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeFlagOverlay();
    }
  },
  true,
);
