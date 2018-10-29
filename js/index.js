var menuToggle = document.querySelector(".fa-bars");
var menuPopUp = document.querySelector(".hamburger-container");
var link = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", function () {
  menuPopUp.classList.toggle("active");
  menuPopUp.classList.toggle("hidden");
});

link.forEach(function (e) {
  e.addEventListener("click", function () {
    menuPopUp.classList.add("hidden");
    menuPopUp.classList.remove("active");
  });
});