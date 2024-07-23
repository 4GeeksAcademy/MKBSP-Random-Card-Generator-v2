/* eslint-disable */
import "bootstrap";
import "./style.css";

import rigoBaby from "./assets/img/rigo-baby.jpg";
import fourGeeksIcon from "./assets/img/4geeks.ico";
import clubImage from "./assets/img/club.png";
import heartImage from "./assets/img/heart.png";
import diamondImage from "./assets/img/diamond.png";
import spadeImage from "./assets/img/spade.png";
import { eventListeners } from "@popperjs/core";

const cardSuits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const cardNumbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const randomCardNumber = () => {
  let cardNumberCalc = Math.floor(Math.random() * cardNumbers.length);
  return cardNumbers[cardNumberCalc];
};

const randomCardSuit = () => {
  let cardSuitCalc = Math.floor(Math.random() * cardSuits.length);
  return cardSuits[cardSuitCalc];
};

const updateCard = () => {
  const cardNumber = randomCardNumber();
  const cardSuit = randomCardSuit();

  document.querySelector("#cardNumber").innerHTML = cardNumber;

  if (cardSuit === "Clubs") {
    document.querySelector("#cardSuitIconTopLeft").src = clubImage;
    document.querySelector("#cardSuitIconTopLeft").style.display = "block";
    document.querySelector("#cardSuitIconBottomRight").src = clubImage;
    document.querySelector("#cardSuitIconBottomRight").style.display = "block";
  } else if (cardSuit === "Hearts") {
    document.querySelector("#cardSuitIconTopLeft").src = heartImage;
    document.querySelector("#cardSuitIconTopLeft").style.display = "block";
    document.querySelector("#cardSuitIconBottomRight").src = heartImage;
    document.querySelector("#cardSuitIconBottomRight").style.display = "block";
  } else if (cardSuit === "Diamonds") {
    document.querySelector("#cardSuitIconTopLeft").src = diamondImage;
    document.querySelector("#cardSuitIconTopLeft").style.display = "block";
    document.querySelector("#cardSuitIconBottomRight").src = diamondImage;
    document.querySelector("#cardSuitIconBottomRight").style.display = "block";
  } else if (cardSuit === "Spades") {
    document.querySelector("#cardSuitIconTopLeft").src = spadeImage;
    document.querySelector("#cardSuitIconTopLeft").style.display = "block";
    document.querySelector("#cardSuitIconBottomRight").src = spadeImage;
    document.querySelector("#cardSuitIconBottomRight").style.display = "block";
  } else {
    document.querySelector("#cardSuitIconTopLeft").style.display = "none";
    document.querySelector("#cardSuitIconBottomRight").style.display = "none";
  }
};

const buttonUpdate = () => {
  eventListeners;
};

window.onload = function() {
  updateCard();

  setInterval(updateCard, 10000);
  document.getElementById("updateCard").addEventListener("click", updateCard);
};
