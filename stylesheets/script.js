/* JavaScript function to toggle responsive navigation */
function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // JavaScript to toggle the navigation on hamburger click
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".navbar ul");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});
