var cx ;
var cy ;
var lx  = 0 ;
var ly  = 0;
var ME ;
var widthOL = 5 ;
var Radius = 3;
var Red = document.getElementById("Red").value;
var Green = document.getElementById("Green").value;
var Blue = document.getElementById("Blue").value;
var A = document.getElementById("Alpha").value;
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var gradient = ctx.createLinearGradient(50,20,30,0);
var width =  screen.width ;
var new_Width;
var new_Height;
if(width < 992){
    new_Height = screen.height - 300;
    new_Width = screen.width - 70;
    document.getElementById("myCanvas").style.width = new_Width;
    document.getElementById("myCanvas").style.height = new_Height;
}
gradient.addColorStop(0,"red");
gradient.addColorStop(1,"white");
var colour = "black";
canvas.addEventListener("touchstart",my_MouseDown);
function my_MouseDown(e){
    colour = document.getElementById("Colour-Name").value;
    widthOL = document.getElementById("Width").value ;
    radius = document.getElementById("Radius").value;
    ME =    "MouseDown";
    lx = e.touches[0].clientX - canvas.offsetLeft;
    ly = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_MouseMove);
function my_MouseMove(e){
    cx = e.touches[0].clientX - canvas.offsetLeft ;
    cy = e.touches[0].clientY - canvas.offsetTop ;
    if(ME == "MouseDown"){
        Red = document.getElementById("Red").value;
        Green = document.getElementById("Green").value;
        Blue = document.getElementById("Blue").value;
        A = document.getElementById("Alpha").value;
        colour = document.getElementById("Colour-Name").value;
        radius = document.getElementById("Radius").value;
        widthOL = document.getElementById("Width").value ;
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = widthOL;
        ctx.arc(cx,cy,widthOL,0,360);
        ctx.stroke();
    }
    lx = cx ;
    ly = cy ;
}
function Clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

