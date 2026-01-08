console.log("Script Running");

const changePosition = (horse, position) => {
  if (position <= 5) {
    horse.style.setProperty("grid-column", position);
  }
};

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;

// Query Selectors
const blueButton = document.querySelector("#blue-button");
const brownButton = document.querySelector("#brown-button");
const pinkButton = document.querySelector("#pink-button");
const blueHorse = document.querySelector("#blue-horse");
const brownHorse = document.querySelector("#brown-horse");
const pinkHorse = document.querySelector("#pink-horse");
const winnerButton = document.querySelector("#winner");

const handleWin = (color) => {
  winnerButton.textContent = `${color} wins the race `;

  blueButton.disabled = true;
  pinkButton.disabled = true;
  brownButton.disabled = true;
};

// Check Winner
const checkWinner = (position, color) => {
  if (position >= 5) {
    handleWin(color);
  }
};

// Advance Functions
const advanceBlue = () => {
  blue_position++;
  changePosition(blueHorse, blue_position);
  checkWinner(blue_position, "Blue");
};

const advancePink = () => {
  pink_position++;
  changePosition(pinkHorse, pink_position);
  checkWinner(pink_position, "Pink");
};

const advanceBrown = () => {
  brown_position++;
  changePosition(brownHorse, brown_position);
  checkWinner(brown_position, "Brown");
};

// Event Listeners
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advanceBrown);
