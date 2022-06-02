window.addEventListener('load', function () {
  let question = document.querySelector(".question");
  let answer = document.querySelector(".answer");
  let exitButton = document.querySelector(".get-away");
  let start = document.querySelector(".start");
  let startButton = document.querySelector(".start-button");
  let nextButton = document.querySelector(".next-button");

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
    question.textContent="The question is somewhat long so it will take up multiple lines and go on and on and not stop after just a few letters, etc. So here we are seeing multiple sentences.";
    question.classList.remove("hidden");
    answer.classList.remove("hidden");
  }

  function advanceQuiz() {

  }
})
