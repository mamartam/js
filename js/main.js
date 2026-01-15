const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");

const filmPoster = document.getElementById("film-poster");
const filmName = document.getElementById("film-name");
const genre = document.getElementById("genre");
const rating = document.getElementById("rating");
const description = document.getElementById("description");
const bgFilter = document.querySelector(".bg-filter");

const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    description:
      "A skilled thief enters people's dreams to steal secrets, but this time he must plant an idea instead.",
    poster: "images/Inception-img.jpg",
    bg: "url(../images/inception-bg.webp)",
  },
  {
    id: 2,
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    rating: 8.1,
    description:
      "The adventures of a legendary hotel concierge and his trusted lobby boy.",
    poster: "images/TheGrandBudapestHotel.jpg",
    bg: "url(../images/TheGrandBudapestHotel-bg.jpg)",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Drama",
    rating: 8.6,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to save humanity.",
    poster: "images/Interstellar.jpg",
    bg: "url(../images/Interstellar-bg.jpg)",
  },
  {
    id: 4,
    title: "Spirited Away",
    genre: "Animation",
    rating: 8.6,
    description:
      "A young girl enters a mysterious spirit world and must find a way to save her parents.",
    poster: "images/SpiritedAway.jpg",
    bg: "url(../images/SpiritedAway-bg.jpg)",
  },
];
filmPoster.setAttribute("src", `${movies[0].poster}`);
filmName.textContent = movies[0].title;
genre.textContent = movies[0].genre;
rating.textContent = movies[0].rating;
description.textContent = movies[0].description;
bgFilter.style.backgroundImage = movies[0].bg;

let counter = 0;

rightBtn.addEventListener("click", function () {
  if (counter == movies.length - 1) {
    counter = counter - movies.length;
  }
  counter++;
  filmPoster.setAttribute("src", `${movies[counter].poster}`);
  filmName.textContent = movies[counter].title;
  genre.textContent = movies[counter].genre;
  rating.textContent = movies[counter].rating;
  description.textContent = movies[counter].description;
  bgFilter.style.backgroundImage = movies[counter].bg;
});

leftBtn.addEventListener("click", function () {
  if (counter == 0) {
    counter = counter + movies.length;
  }
  counter--;
  filmPoster.setAttribute("src", `${movies[counter].poster}`);
  filmName.textContent = movies[counter].title;
  genre.textContent = movies[counter].genre;
  rating.textContent = movies[counter].rating;
  description.textContent = movies[counter].description;
  bgFilter.style.backgroundImage = movies[counter].bg;
});
