const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

let snakeX = 200;
let snakeY = 200;
let snake = [{
        x: 200,
        y: 200
    },
    {
        x: 220,
        y: 200
    }
];

let foodX;
let foodY;

let direction = null;

function drawBackground() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 400, 400);
}

function drawSnake() {
    ctx.fillStyle = "white";
    for (let index = 0; index < snake.length; index++) {
        ctx.fillRect(snake[index].x, snake[index].y, 20, 20);
    }
}


function update() {

    for (let index = snake.length - 1; index > 0; index--) {

    }
    if (direction == "right") {
        if (snake[0].x < 380) {
            snake[0].x += 20;
        } else {
            gameOver();
        }
    } else if (direction == "left") {
        if (snake[0].x > 0) {
            snake[0].x -= 20;
        } else {
            gameOver();
        }
    } else if (direction == "up") {
        if (snake[0].y > 0) {
            snake[0].y -= 20;
        } else {
            gameOver();
        }
    } else if (direction == "down") {
        if (snake[0].y < 380) {
            snake[0].y += 20;
        } else {
            gameOver();
        }
    }

    if (foodX == snakeX && foodY == snakeY) {
        spawnFood();
    }


    drawBackground();
    drawSnake();
    drawFood();
}

function changeDirection(event) {
    if (event.code == "ArrowUp") {
        direction = "up"
    } else if (event.code == "ArrowDown") {
        direction = "down"
    } else if (event.code == "ArrowLeft") {
        direction = "left"
    } else if (event.code == "ArrowRight") {
        direction = "right"
    }
}

function gameOver() {
    direction = null;
    alert("Game Over");
}

function spawnFood() {
    foodX = Math.floor(Math.random() * 20) * 20;
    foodY = Math.floor(Math.random() * 20) * 20;
}

function drawFood() {
    ctx.fillStyle = "Red";
    ctx.fillRect(foodX, foodY, 20, 20);
}

drawBackground();
drawSnake();
setInterval(update, 300);
addEventListener("keydown", changeDirection);
drawFood();
spawnFood();