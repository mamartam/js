let closeBtn = document.getElementById("close-btn");
let menuBtn = document.getElementById("menu-btn");
let navigationContainer = document.getElementById("navigation-container");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("hide-btn");
  navigationContainer.classList.toggle("show-nav");
});
closeBtn.addEventListener("click", () => {
  menuBtn.classList.remove("hide-btn");
  navigationContainer.classList.remove("show-nav");
});
