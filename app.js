const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const offCanvas = new OffscreenCanvas(window.innerWidth, window.innerHeight);

const rect = {
    x:canvas.width / 2 - 50,
    y:canvas.height / 2 - 50,
    width:100,
    height:100
};

const ctx = offCanvas.getContext("2d");

function draw(){
    c.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "lime";
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);


    const imageBitmap = offCanvas.transferToImageBitmap();
    c.drawImage(imageBitmap, 0, 0);
}

draw();

window.addEventListener("mousemove",(e) => {
    rect.x = e.clientX - 50;
    rect.y = e.clientY - 50;

    draw();
})

