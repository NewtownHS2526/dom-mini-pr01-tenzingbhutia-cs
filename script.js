console.log("Script Running");

const positions = {
  blue: 1,
  pink: 1,
  brown: 1
};

const changePosition = (horse, position) => {
  if (position <= 5) {
    horse.style.setProperty("grid-column", position);
  }
};

// Query selectors
const blueButton = document.querySelector("#blue-button");
const pinkButton = document.querySelector("#pink-button");
const brownButton = document.querySelector("#brown-button");

const horses = {
  blue: document.querySelector("#blue-horse"),
  pink: document.querySelector("#pink-horse"),
  brown: document.querySelector("#brown-horse")
};

const winnerText = document.querySelector("#winner");

const advanceHorse = (e) => {
  const color = e.target.value;

  positions[color] += 1;
  changePosition(horses[color], positions[color]);

  horses[color].alt = `${color} horse at position ${positions[color]} out of 5`;

  checkWinner(positions[color], color);
};

// Check winner
const checkWinner = (position, color) => {
  if (position === 5) {
    winnerText.innerHTML = `${color} is the Winner!`;
    disableButtons();
  }
};

const disableButtons = () => {
  blueButton.disabled = true;
  pinkButton.disabled = true;
  brownButton.disabled = true;
};

const restartRace = () => {
  winnerText.innerHTML = "";

  for (let color in positions) {
    positions[color] = 1;
    changePosition(horses[color], 1);
  }

  blueButton.disabled = false;
  pinkButton.disabled = false;
  brownButton.disabled = false;
};

// Event listeners
blueButton.addEventListener("click", advanceHorse);
pinkButton.addEventListener("click", advanceHorse);
brownButton.addEventListener("click", advanceHorse);

const restartButton = document.createElement("button");
restartButton.innerText = "Restart Race";
document.querySelector(".container").appendChild(restartButton);
restartButton.addEventListener("click", restartRace);
