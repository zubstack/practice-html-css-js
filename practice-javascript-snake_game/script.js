//Screen
let blockSize = 25;
let rows = 20;
let colum = 20;
let screen;
let context;

// Snake Head
let snakeX = 250;
let snakeY = 250;

let velocityX = 0;
let velocityY = 0;

//Body
let snakeBody = [];

//Food
let foodX;
let foodY;

//Score
let score = 0;
let highScore = 0;

//Game Over
let gameIsOver = false;

//Colors:
const colors = {
  background: "black",
  snake: "green",
  food: "red",
};

window.onload = function () {
  screen = document.getElementById("screen");
  screen.height = blockSize * rows;
  screen.width = blockSize * colum;
  context = screen.getContext("2d");

  placeFood();
  document.addEventListener("keyup", changeDirection);

  setInterval(update, 12000 / 100);
};

function update() {
  if (gameIsOver) {
    return;
  }

  context.fillStyle = colors.background;
  context.fillRect(0, 0, screen.width, screen.height); // fillRect(positionX, positionY, width, height)

  context.fillStyle = colors.food;
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
    collectPoints();
  }
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }
  context.fillStyle = colors.snake;
  snakeX += velocityX;
  snakeY += velocityY;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

  if (
    snakeX < 0 ||
    snakeX > colum * blockSize - 1 ||
    snakeY < 0 ||
    snakeY > rows * blockSize - 1
  ) {
    gameOver();
  }
  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver();
    }
  }
  //   console.log(snakeX, snakeY);
}

function gameOver() {
  document.getElementById("restart").style.display = "block";
  gameIsOver = true;
}

function placeFood() {
  foodX = Math.floor(Math.random() * colum) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}

function changeDirection(e) {
  if (e.code == "ArrowUp" && velocityY != blockSize) {
    velocityX = 0;
    velocityY = -blockSize;
  } else if (e.code == "ArrowDown" && velocityY != -blockSize) {
    velocityX = 0;
    velocityY = blockSize;
  } else if (e.code == "ArrowRight" && velocityX != -blockSize) {
    velocityX = blockSize;
    velocityY = 0;
  } else if (e.code == "ArrowLeft" && velocityX != blockSize) {
    velocityX = -blockSize;
    velocityY = 0;
  }
}

const scoreboard = document.getElementById("score");
const highScoreboard = document.getElementById("high__score");

function collectPoints() {
  score++;
  scoreboard.innerText = score;
  if (score > highScore) {
    highScore = score;
  }
  highScoreboard.innerText = highScore;
}

document.getElementById("restart__button").addEventListener("click", restart);

function restart() {
  snakeX = 250;
  snakeY = 250;
  velocityX = 0;
  velocityY = 0;
  gameIsOver = false;
  snakeBody = [];
  score = 0;
  scoreboard.innerText = score;
  document.getElementById("restart").style.display = "none";
  placeFood();
}
