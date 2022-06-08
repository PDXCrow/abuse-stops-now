window.addEventListener('load', function () {
  let intro = document.querySelector(".intro-text");
  let question = document.querySelector(".question");
  let answer = document.querySelector(".answer");
  let result = document.querySelector(".result");
  let exitButton = document.querySelector(".get-away");
  let start = document.querySelector(".start");
  let startText = document.querySelector(".start-text");
  let startButton = document.querySelector(".start-button");
  let nextButton = document.querySelector(".next-button");
  let submitButton = document.querySelector(".submit-button");

  var questions = JSON.parse(data);

  let totalQuestions = questions.length;
  let currentQuestion = 0;
  let yesAnswers = 0;

  function advanceQuiz() {
    if (currentQuestion < totalQuestions) {
      nextButton.classList.add("hidden");
      submitButton.classList.remove("hidden");
      answer.classList.remove("hidden");
      result.classList.add("hidden");
      intro.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
      question.textContent = questions[currentQuestion].question;
    } else {
      intro.textContent = `You answered 'Yes' to ${yesAnswers} question(s).`
      if (yesAnswers == 0) {
        question.textContent = "Since you answered 'No' to all questions, chances are you are not in an abuse relationship. However, please reach out for help if at any time you are concerned, even if your answers were 'No'";
      } else if (yesAnswers < 3) {
        question.textContent = "Since you answered 'Yes' to less than three questions, you may be in an abuse relationship, and we highly recommend you reach out to a trusted friend, family member or any of the resources listed on this site to get more guidance. There is no harm or shame in finding out more."
      } else {
        question.textContent = "Since you answered 'Yes' to three or more questions, your relationship is showing plenty of warning signs that it is at least unhealthy, if not actually abusive. Please reach out to any of the resources listed on our site to get more information and help. There is no harm or shame in finding out more. "
      }
      submitButton.classList.add("hidden");
      start.classList.remove("hidden");
      startButton.textContent = "Take Quiz Again";
      answer.classList.add("hidden");
      startText.textContent = "";
    }
  }
    
  function checkAnswer() {
    let radioButtons = document.querySelectorAll('input[name="answer"]')
      for (const r of radioButtons) {
        if (r.checked) {
          if (r.value == "yes") {
            yesAnswers++;
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
  
  function startQuiz() {
    currentQuestion = 0;
    yesAnswers = 0;
    start.classList.add("hidden");
    submitButton.classList.remove("hidden");
    question.classList.remove("hidden");
    answer.classList.remove("hidden");
    advanceQuiz();
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
})
