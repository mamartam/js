const predictions = [
  "A beautiful, fresh chapter is about to begin.",
  "Your hard work will pay off sooner than you think.",
  "Believe in yourself and magic will happen.",
  "Expect a pleasant surprise today!",
  "Success is not a destination, it's a journey.",
  "Follow your heart and you will find the way.",
  "An unexpected gift is coming your way.",
  "Today is a perfect day to start something new.",
  "You are stronger and more capable than you know.",
  "Good things come to those who wait, but better things to those who go get them.",
];

const btn = document.getElementById("btn");
const predictionForToday = document.querySelector(".predictionForToday");

btn.addEventListener("click", function () {
  predictionForToday.textContent = predictions[getRandomPrediction()];
});

function getRandomPrediction() {
  return Math.floor(Math.random() * predictions.length);
}
