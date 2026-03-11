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
      <p class="feedback-fact">${escapeHtml(question.fact)}</p>
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
}

// ---- eventos de teclado ----

// permite usar enter pra responder e pra ir pra proxima pergunta
function handleKeydown(event) {
  if (event.key !== "Enter") return;

  const nextArea = document.getElementById("next-area");

  // se o botao de proxima ja ta visivel, vai pra proxima
  if (nextArea.style.display !== "none") {
    nextQuestion();
  } else {
    submitAnswer();
  }
}

document.addEventListener("keydown", handleKeydown);
