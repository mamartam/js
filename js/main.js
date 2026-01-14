const btnMinus = document.querySelector(".btn-minus");
const btnReset = document.querySelector(".btn-reset");
const btnPlus = document.querySelector(".btn-plus");
const fontSizeValue = document.getElementById("font-size");
const textExample = document.getElementById("text");

const btns = document.querySelectorAll(".btn");
let counter = 16;

btnMinus.addEventListener("click", function () {
  if (counter > 8) {
    counter -= 2;
    fontSizeValue.textContent = counter;
    textExample.style.fontSize = `${counter}px`;
    colorChanger();
  }
});
btnReset.addEventListener("click", function () {
  counter = 16;
  fontSizeValue.textContent = counter;
  textExample.style.fontSize = `${counter}px`;
  colorChanger();
});
btnPlus.addEventListener("click", function () {
  counter += 2;
  fontSizeValue.textContent = counter;
  textExample.style.fontSize = `${counter}px`;
  colorChanger();
});

function colorChanger() {
  if (counter > 24) {
    textExample.style.color = "#E0BC00";
  } else if (counter < 12) {
    textExample.style.color = "red";
  } else {
    textExample.style.color = "black";
  }
}
