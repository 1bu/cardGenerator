/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let icons = ["♦", "♥", "♠", "♣"];
let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let interval;

function randomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

const intervalCounter = () => {
  return setInterval(() => {
    changeCard();
  }, 10000);
};

window.onload = function() {
  changeCard();
  intervalCounter();
};

function changeCard() {
  let topIcon = document.querySelector(".topIcon");
  let bottomIcon = document.querySelector(".bottomIcon");
  let cardValue = document.getElementById("cardValue");

  cardValue.innerHTML = cards[randomNumber(cards)];
  let icon = icons[randomNumber(icons)];
  topIcon.innerHTML = icon;
  bottomIcon.innerHTML = icon;

  if (icon === "♦" || icon === "♥") {
    topIcon.style.color = "red";
    bottomIcon.style.color = "red";
    cardValue.style.color = "red";
  } else {
    topIcon.style.color = "black";
    bottomIcon.style.color = "black";
    cardValue.style.color = "black";
  }
}

let btn = document.querySelector(".btns");
btn.addEventListener("click", e => {
  changeCard();
  clearInterval(interval);
  interval = intervalCounter();
});

let input = document.querySelectorAll("input");

function changeWidths(e) {
  let cardWitdth = document.getElementById("card");
  let size = e.target.value + "px";
  cardWitdth.style.width = size;
}

function changeHeights(e) {
  let cardHeight = document.getElementById("card");
  let size = e.target.value;
  cardHeight.style.height = size + "px";
}

input.forEach(e => {
  if ((e.className = "changeWidth")) {
    e.addEventListener("input", changeWidths);
  } else if ((e.className = "changeHeight")) {
    e.addEventListener("input", changeHeights);
  }
});
