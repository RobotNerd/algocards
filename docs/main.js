function getAnswerElement() {
  return document.getElementById('answer');
}

function getQuestionElement() {
  return document.getElementById('question');
}

function loadQuestion() {
  let answer = getAnswerElement();
  let question = getQuestionElement();
  let index = Math.floor(Math.random() * algorithms.length);
  answer.style.display = "none";
  answer.innerHTML = algorithms[index].answer;
  question.innerHTML = algorithms[index].question;
}

function nextQuestion() {
  loadQuestion();
}

function showAnswer() {
  let answer = getAnswerElement();
  answer.style.display = "block";
  Prism.highlightElement(answer);
}
