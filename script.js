const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A8",
  "#A833FF",
  "#33FFF5",
  "#FFC300",
  "#FF6F61",
  "#6B5B95",
  "#88B04B",
  "#F7CAC9",
  "#92A8D1",
  "#955251",
  "#B565A7",
  "#009B77",
  "#DD4124",
  "#45B8AC",
  "#EFC050",
  "#5B5EA6",
  "#9B2335",
  "#DFCFBE",
  "#55B4B0",
  "#E15D44",
  "#7FCDCD",
  "#BC243C",
  "#C3447A",
  "#98B4D4",
  "#FF9F1C",
  "#2EC4B6",
  "#E71D36",
  "#011627",
  "#F72585",
  "#B5179E",
  "#7209B7",
  "#560BAD",
  "#480CA8",
  "#3A0CA3",
  "#3F37C9",
  "#4361EE",
  "#4895EF",
  "#4CC9F0",
  "#FFBE0B",
  "#FB5607",
  "#FF006E",
  "#8338EC",
  "#3A86FF",
  "#06D6A0",
  "#EF476F",
];
const circle = document.querySelector(".circle");
const generateBtn = document.querySelector(".generate-btn");
const circleContainer = document.querySelector(".circle-container");

for (let i = 1; i < 100; i++) {
  let circle = document.createElement("div");
  circle.classList.add(`circle-${i}`);
  circleContainer.appendChild(circle);
}
generateBtn.addEventListener("click", () => {
  for (let i = 1; i < 100; i++) {
    let circle = circleContainer.querySelector(`.circle-${i}`);
    let randomColor = Math.floor(Math.random() * 50);
    let randomTop = Math.floor(Math.random() * 100);
    let randomLeft = Math.floor(Math.random() * 100);

    circle.style.backgroundColor = `${colors[randomColor]}`;
    circle.style.top = `${randomTop}vh`;
    circle.style.left = `${randomLeft}vw`;
  }
});
