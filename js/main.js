const darkModeBody = document.querySelector(".body");
const labelLight = document.querySelector(".label-light");

const circleLight = document.querySelector(".circle-light");
const checkboxInput = document.getElementById("checkbox");

const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".dark-mode");

lightMode.style.display = "block";
console.log(lightMode.style.display);
darkMode.style.display = "none";
console.log(darkMode.style.display);

console.log(checkboxInput.checked);
checkboxInput.addEventListener("change", () => {
  console.log(checkboxInput.checked);
  darkModeBody.classList.toggle("dark-mode-body");
  labelLight.classList.toggle("label-dark");
  circleLight.classList.toggle("circle-dark");
  if (checkboxInput.checked) {
    lightMode.style.display = "none";
    darkMode.style.display = "block";
  } else {
    lightMode.style.display = "block";
    darkMode.style.display = "none";
  }
});
