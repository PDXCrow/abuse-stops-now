window.addEventListener('load', function () {
  let intro = document.querySelector(".intro-text");
  let question = document.querySelector(".question");
  let answer = document.querySelector(".answer");
  let result = document.querySelector(".result");
  let exitButton = document.querySelector(".get-away");
  let start = document.querySelector(".start");
  let startButton = document.querySelector(".start-button");
  let nextButton = document.querySelector(".next-button");
  let submitButton = document.querySelector(".submit-button");

  var questions = JSON.parse(data);

  let totalQuestions = questions.length;
  let currentQuestion = 0;

  function advanceQuiz() {
    nextButton.classList.add("hidden");
    submitButton.classList.remove("hidden");
    answer.classList.remove("hidden");
    result.classList.add("hidden");
    intro.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
    question.textContent = questions[currentQuestion].question;
  }
    
  function checkAnswer() {
    let radioButtons = document.querySelectorAll('input[name="answer"]')
      for (const r of radioButtons) {
        if (r.checked) {
          if (r.value == "yes") {
            result.classList.remove("hidden");
            result.textContent = questions[currentQuestion].result;
          } else {
            currentQuestion++;
            advanceQuiz();
            r.checked = false;
            break;
          }
        answer.classList.add("hidden");  
        r.checked = false;
        currentQuestion++;
        submitButton.classList.add("hidden");
        nextButton.classList.remove("hidden");
      }
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
  submitButton.addEventListener("click", checkAnswer);
  nextButton.addEventListener("click", advanceQuiz);
  
  function startQuiz() {
    start.classList.add("hidden");
    submitButton.classList.remove("hidden");
    question.classList.remove("hidden");
    answer.classList.remove("hidden");
    advanceQuiz();
  }
  
  function showResults() {
    

  }
})
