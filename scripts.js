window.addEventListener('load', function () {
  let exitButton = document.querySelector(".get-away");

  function getAway() {
    // Get away right now
    window.open("http://weather.com", "_newtab");
    // Replace current site with another benign site
    window.location.replace('http://google.com');
  }

  exitButton.addEventListener("click", getAway);
})