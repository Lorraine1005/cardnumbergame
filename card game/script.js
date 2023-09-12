const playerTwoNameDisplayEl = document.getElementById(
  "player-two-name-display"
);
const playerOneNameDisplayEl = document.getElementById(
  "player-one-name-display"
);
const playerOneNewGameBtn = document.getElementById("player-one-new-card-btn");
const playerTwoNewGameBtn = document.getElementById("player-two-new-card-btn");
const startGameBtn = document.getElementById("start-game-btn");
const noteEl = document.getElementById("note");
const resetBtn = document.getElementById("reset-btn");
let playerTwoCardsDisplayEl = document.getElementById(
  "player-two-cards-display"
);
let playerOneCardsDisplayEl = document.getElementById(
  "player-one-cards-display"
);
let playerTwoSumDisplayEl = document.getElementById(
  "player-two-sum-display-el"
);
let playerOneSumDisplayEl = document.getElementById(
  "player-one-sum-display-el"
);
let playerOneSum = 0;
let playerOneCards = [];
let playerTwoSum = 0;
let playerTwoCards = [];
let hasBlackJack = false;

startGameBtn.addEventListener("click", function () {
  let playerOneName = "";
  let playerTwoName = "";
  playerOneName = prompt("Please enter Player 1's name");
  playerTwoName = prompt("Please enter Player 2's name");
  playerOneNameDisplayEl.textContent = playerOneName;
  playerTwoNameDisplayEl.textContent = playerTwoName;
  renderGame();
});
function renderGame() {
  for (i = 0; i < 2; i++) {
    playerOneCards.push(randomNumberGenerator());
    playerTwoCards.push(randomNumberGenerator());
    playerOneSum += playerOneCards[i];
    playerTwoSum += playerTwoCards[i];
    playerOneCardsDisplayEl.textContent += playerOneCards[i] + "  ";
    playerTwoCardsDisplayEl.textContent += playerTwoCards[i] + " " + " ";
    playerOneSumDisplayEl.textContent = playerOneSum;
    playerTwoSumDisplayEl.textContent = playerTwoSum;
  }
}
function randomNumberGenerator() {
  let randomIndex = Math.floor(Math.random() * 12) + 1;
  if (randomIndex === 1) {
    return 11;
  } else if (randomIndex > 10) {
    return 10;
  } else {
    return randomIndex;
  }
}
playerOneNewGameBtn.addEventListener("click", function () {
  if (playerOneSum === 21) {
    hasBlackJack = true;
  } else if (playerOneSum > 21) {
    noteEl.textContent =
      "Oh no! You are out of the game. Want to play again? Click Reset and Start A new Game";
  } else {
    let newCard = randomNumberGenerator();
    playerOneCards.push(newCard);
    playerOneSum += newCard;
    playerOneCardsDisplayEl.textContent += newCard + " ";
    playerOneSumDisplayEl.textContent = playerOneSum;
    if (playerOneSum === 21) {
      alert(
        "Congratulations Player 2 you have BlackJack! Want to play again? Click Reset and Start A new Game"
      );
      noteEl.textContent = "";
    }
  }
});
playerTwoNewGameBtn.addEventListener("click", function () {
  if (playerTwoSum === 21) {
    hasBlackJack = true;
  } else if (playerTwoSum > 21) {
    noteEl.textContent =
      "Oh no! You are out of the game. Want to play again? Click Reset and Start A new Game";
  } else {
    let newCard = randomNumberGenerator();
    playerTwoCards.push(newCard);
    playerTwoSum += newCard;
    playerTwoCardsDisplayEl.textContent += newCard + " ";
    playerTwoSumDisplayEl.textContent = playerTwoSum;
    if (playerTwoSum === 21) {
      alert(
        "Congratulations Player 2 you have BlackJack! Want to play again? Click Reset and Start A new Game"
      );
      noteEl.textContent = "";
    }
  }
});
resetBtn.addEventListener("click", function () {
  playerOneSum = 0;
  playerOneCards = [];
  playerTwoSum = 0;
  playerTwoCards = [];
  hasBlackJack = false;
  playerTwoCardsDisplayEl.textContent = "";
  playerOneCardsDisplayEl.textContent = "";
  playerTwoSumDisplayEl.textContent = "";
  playerOneSumDisplayEl.textContent = "";
  playerOneNameDisplayEl.textContent = "";
  playerTwoNameDisplayEl.textContent = "";
});
