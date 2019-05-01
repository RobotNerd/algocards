// Order in which the questions are displayed.
// Contains indicies in algorithms array.
let order = [];

// Index in the order array of the currently displayed question.
let current = 0;

/** Build a random order for showing questions. */
function generateOrder() {
  // see: https://stackoverflow.com/a/12646864/241025
  order = [...Array(algorithms.length).keys()];
  for (var i = order.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = order[i];
    order[i] = order[j];
    order[j] = temp;
  }
}

function getAnswerElement() {
  return document.getElementById('answer');
}

function getNextIndex() {
  current++;
  if (current >= algorithms.length) {
    current = 0;
  }
  return current;
}

function getQuestionElement() {
  return document.getElementById('question');
}

function getTagsElement() {
  return document.getElementById('tags');
}

function loadQuestion() {
  let answer = getAnswerElement();
  let question = getQuestionElement();
  let tags = getTagsElement();
  let index = getNextIndex();
  answer.style.display = "none";
  answer.innerHTML = algorithms[index].answer;
  question.innerHTML = algorithms[index].question;
  tags.innerHTML = algorithms[index].tags.join(', ');
}

function onPageLoad() {
  generateOrder();
  loadQuestion();
}

function nextQuestion() {
  loadQuestion();
}

function showAnswer() {
  let answer = getAnswerElement();
  answer.style.display = "block";
  Prism.highlightElement(answer);
}
