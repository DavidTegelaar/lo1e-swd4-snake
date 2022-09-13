const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

let snakeX = 190;
let snakeY = 190;
let direction = null;

function drawBackground() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 400, 400);
}

function drawSnake() {
    ctx.fillStyle = "white";
    ctx.fillRect(snakeX, snakeY, 20, 20);
}


function update() {
    if (direction == "right") {
        snakeX += 20;
    } else if (direction == "left") {
        snakeX -= 20;
    } else if (direction == "up") {
        snakeY -= 20;
    } else if (direction == "down") {
        snakeY += 20;
    }

    drawBackground();
    drawSnake();
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

drawBackground();
drawSnake();
setInterval(update, 300);
addEventListener("keydown", changeDirection);