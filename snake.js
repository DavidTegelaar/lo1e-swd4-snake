const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

let snakeX = 190;
let snakeY = 190;
let direction = "down";

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



drawBackground();
drawSnake();
setInterval(update, 1000);