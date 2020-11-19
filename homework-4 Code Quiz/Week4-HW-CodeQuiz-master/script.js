// Setup initial variables for the quiz, timer, and the questions index.
var timer;
var theAnswer;
var questionIndex = 0;
var startQuiz = document.getElementById("startQuiz");

// Setup the questions in an array format so that we can return the correct buttons for answers. 
var questions = [
  {
    title: "Are Java and JavaScript the same language?",
    options: ["Yes!", "No.", "Only in Mac.", "What's JavaScript?"],
    answer: "No."
  },
  {
    title: "Is JavaScript a front-end, back-end, or full-stack programming language?",
    options: ["Front-end", "Back-end", "Full-stack", "What's JavaScript?"],
    answer: "Full-stack"
  },
  {
    title: "Which of the following is not a reserved word in JavaScript?",
    options: ["default", "finally", "throw", "undefined"],
    answer: "undefined"
  },
  {
    title: "True or false... 'Null' is an object.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    title: "What does the following expression return? '!false'",
    options: ["null", "true", "undefined", "false"],
    answer: "true"
  }
];

// Setup the countdown timer. 
function startTimer() {
  displayQuestion();
  
  timer = setInterval(function() {
    secondsLeft -= 1;
    console.log(secondsLeft);
    
    var timerDisplay = document.getElementById("theTimer");
    timerDisplay.textContent = secondsLeft;
    
    if (secondsLeft === 0) {
      clearInterval(timer);
      getUserName();
    }
  }, 1000);
}

// Timer starter button
startQuiz.onclick = startTimer;

var secondsLeft = questions.length * 15;
var answer = questions[answer];

// Setup the question displays for the page 
function displayQuestion() {
  document.getElementById("quizQuestion").innerHTML = "";
  document.getElementById("card-body").innerHTML = "";
  
  var titleElement = document.createElement("h1");
  var currentQuestion = questions[questionIndex].title;
  titleElement.textContent = currentQuestion;
  
  var cardHeader = document.getElementById("quizQuestion");
  cardHeader.appendChild(titleElement);
  
  var options = questions[questionIndex].options;
  
  // For loop
  for (var i = 0; i < options.length; i++) {
    var choicesElement = document.createElement("button");
    var cardBody = document.getElementById("card-body");
    cardBody.appendChild(choicesElement);
    choicesElement.textContent = options[i];
    choicesElement.onclick = isCorrectAnswer;
    $("button").css("margin", "20px").css("backgroundColor", "ltgrey").css("fontSize", "40px");
  }
  console.log(options);
}

// Find answer and determine if it is correct or incorrect 
function isCorrectAnswer() {
  var answer = questions[questionIndex].answer;
  theAnswer = this.innerHTML;

  if (theAnswer === answer) {
    console.log("answer correct");
  } else if (theAnswer !== answer) {
    removeTime();
    console.log("answer incorrect");
  }
  questionIndex++;
  if (questionIndex === questions.length) {
    console.log(getScore());
    clearInterval(timer);
  }

  displayQuestion();
  console.log("finish isCorrectAnswer");
}

// Add functions for timer and score 
function addTime() {
  secondsLeft += 15;
}

function removeTime() {
  secondsLeft -= 15;
}

function getScore() {
  return secondsLeft;
}

// Thought I'd need these but didn't. Kept in there just in case.
function getUserInfo() {}

function saveScore() {}

console.log(questions);

// Setup return of name and insertion into the localStorage.
var userName;

function getUserName() {
  userName = "Welcome " + prompt("Please Enter your Name:");
  localStorage.setItem("Name", userName);

  if ((userName = "")) {
    alert("Please enter your name");
  }
}

function getUserScore() {
  localStorage.setItem("Score", secondsLeft);
}

function displayHighscores() {
  document.getElementById("names").innerHTML = localStorage.getItem("Name");
  document.getElementById("scores").innerHTML = localStorage.getItem("Score");
}

// Enable the functions
getUserScore();
getUserName();
displayHighscores();