// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 600px)");
// get the divs
var afterClicked = document.getElementById("after-clicked");
var beforeClicked = document.getElementById("before-clicked");

// get the images
var lightShare = document.querySelector("#before-clicked .share-button-light");
var darkShare = document.querySelector("#after-clicked .share-button-dark");
var activate = false;

if (x.matches) {
  // hide the light bar, and show the dark one
  lightShare.addEventListener("click", function () {
    beforeClicked.classList.add("hide");
    afterClicked.classList.add("show");
  });

  darkShare.addEventListener("click", function () {
    afterClicked.classList.remove("show");
    beforeClicked.classList.remove("hide");
  });
} else {
  lightShare.addEventListener("click", function () {
    if (!activate) {
      // Show the dark bar
      afterClicked.classList.add("show");
      activate = true;
    } else {
      // Hide the dark bar
      afterClicked.classList.remove("show");
      activate = false;
    }
  });
}
