color="purple";
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
    circle(x,y);
}

function circle(x,y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(x,y,40,0,2*Math.PI);
ctx.stroke();
}