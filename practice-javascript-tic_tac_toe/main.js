const gameBoard = [
  { value: "!" },
  { value: "@" },
  { value: "#" },
  { value: "$" },
  { value: "%" },
  { value: "^" },
  { value: "&" },
  { value: "*" },
  { value: "=" },
];

let scorePlayerX = 0;
let scorePlayerO = 0;

let turnOne = true;

let gameStarted = false;

function checkWinCombinations() {
  if (
    gameBoard[0].value === gameBoard[1].value &&
    gameBoard[0].value === gameBoard[2].value
  ) {
    console.log(`Winner player: ${gameBoard[0].value}`);
    gameStarted = false;
    gameOver(gameBoard[0].value);
  } else if (
    gameBoard[3].value === gameBoard[4].value &&
    gameBoard[3].value === gameBoard[5].value
  ) {
    console.log(`Winner player: ${gameBoard[3].value}`);
    gameStarted = false;
    gameOver(gameBoard[3].value);
  } else if (
    gameBoard[6].value === gameBoard[7].value &&
    gameBoard[6].value === gameBoard[8].value
  ) {
    console.log(`Winner player: ${gameBoard[6].value}`);
    gameStarted = false;
    gameOver(gameBoard[6].value);
  } else if (
    gameBoard[0].value === gameBoard[3].value &&
    gameBoard[0].value === gameBoard[6].value
  ) {
    console.log(`Winner player: ${gameBoard[0].value}`);
    gameStarted = false;
    gameOver(gameBoard[0].value);
  } else if (
    gameBoard[1].value === gameBoard[4].value &&
    gameBoard[1].value === gameBoard[7].value
  ) {
    console.log(`Winner player: ${gameBoard[1].value}`);
    gameStarted = false;
    gameOver(gameBoard[1].value);
  } else if (
    gameBoard[2].value === gameBoard[5].value &&
    gameBoard[2].value === gameBoard[8].value
  ) {
    console.log(`Winner player: ${gameBoard[2].value}`);
    gameStarted = false;
    gameOver(gameBoard[2].value);
  } else if (
    gameBoard[0].value === gameBoard[4].value &&
    gameBoard[0].value === gameBoard[8].value
  ) {
    console.log(`Winner player: ${gameBoard[0].value}`);
    gameStarted = false;
    gameOver(gameBoard[0].value);
  } else if (
    gameBoard[2].value === gameBoard[4].value &&
    gameBoard[2].value === gameBoard[6].value
  ) {
    console.log(`Winner player: ${gameBoard[2].value}`);
    gameStarted = false;
    gameOver(gameBoard[2].value);
  } else console.log("No one wins yet");
}

const turnView = document.getElementById("turn__view");

function markUP() {
  if (gameStarted) {
    turnOne ? (turnOne = !turnOne) : (turnOne = true);
    if (turnOne) {
      this.innerHTML = "x";
      this.value = 1;
      turnView.innerHTML = "PLAYER 0";
      updateGameBoard(this.dataset.index, 1);
    } else {
      this.innerHTML = "0";
      this.value = 0;
      turnView.innerHTML = "PLAYER X";
      updateGameBoard(this.dataset.index, 0);
    }
    checkWinCombinations();
    if (this.value == 1 || this.value == 0) {
      this.removeEventListener("click", markUP);
    }
  } else {
    console.log("markUp not working");
  }
}

function updateGameBoard(index, value) {
  gameBoard[index].value = value;
  console.log(gameBoard);
}

const boxes = document.querySelectorAll(".game-box");

function activeBoxes() {
  boxes.forEach((box) => {
    if (box.value != 1 && box.value != 0) {
      box.addEventListener("click", markUP);
    }

    if (turnOne) {
      turnView.innerHTML = "PLAYER 0";
    } else {
      turnView.innerHTML = "PLAYER X";
    }
  });
}

function gameOver(value) {
  let winner = "";
  if (value) {
    winner = "X";
    console.log("Wins: ", winner);
    scorePlayerX++;
  } else {
    winner = "0";
    console.log("Wins: ", winner);
    scorePlayerO++;
  }
  document.getElementById("score__o").innerText = scorePlayerO;
  document.getElementById("score__x").innerText = scorePlayerX;

  document.getElementById("winner").innerText = winner;
  document.getElementById("restart").style.display = "flex";
}

function startGame() {
  !gameStarted ? (gameStarted = !gameStarted) : (gameStarted = false);
  if (gameStarted) {
    activeBoxes();
    console.log("The game has started");
  } else {
    gameOver();
  }
}
startGame();

document
  .getElementById("restart__button")
  .addEventListener("click", restartGame);

function restartGame() {
  document.getElementById("restart").style.display = "none";

  boxes.forEach((box) => {
    box.innerText = "";
    box.value = null;
  });
  gameBoard.forEach((box) => {
    let ramdom = Math.floor(Math.random() * (25 - 5)) + 5;
    box.value = ramdom;
  });
  startGame();
}
