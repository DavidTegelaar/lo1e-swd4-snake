const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, 400, 400);

ctx.fillStyle = "white";
ctx.fillRect(190, 190, 20, 20);


function update() {
    console.log("Update");
}
setInterval(update, 1000);