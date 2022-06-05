window.addEventListener('load', function () {
  let intro = document.querySelector(".intro-text");
  let question = document.querySelector(".question");
  let answer = document.querySelector(".answer");
  let exitButton = document.querySelector(".get-away");
  let start = document.querySelector(".start");
  let startButton = document.querySelector(".start-button");
  let nextButton = document.querySelector(".next-button");

  var questions = JSON.parse(data);

  let totalQuestions = questions.length;
  let currentQuestion = 0;
  let quizStatus = "questions";
  let resultArray = [];

  function advanceQuiz() {
    if (currentQuestion == totalQuestions) {
      showResults();
      currentQuestion = 0;
    } else if (quizStatus == "questions") {
      let radioButtons = document.querySelectorAll('input[name="answer"]')
      for (const r of radioButtons) {
        if (r.checked) {
          if (r.value == "yes") {
            resultArray.push(currentQuestion);
          }
          console.log(resultArray);
          r.checked = false;
        }
      }
      intro.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
      question.textContent = questions[currentQuestion].question;
      currentQuestion++;
    } else {
      intro.textContent = "Here are your results";
    }
  }

  function getAway() {
    // Open new tab with generic safe site content
    window.open("http://weather.com", "_newtab");
    // Replace current site with another safe site
    window.location.replace('http://google.com');
  }

  exitButton.addEventListener("click", getAway);
  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", advanceQuiz);
  
  function startQuiz() {
    start.classList.add("hidden");
    nextButton.classList.remove("hidden");
    question.classList.remove("hidden");
    answer.classList.remove("hidden");
    advanceQuiz();
  }
  
  function showResults() {
    intro.textContent = "You Finished! Contrats!!";
    question.textContent = "Click the button below to see your results";
    nextButton.textContent = "Next Result";
    answer.classList.add("hidden");
    quizStatus = "results";
  }
})
