var img;
function preload(){
  img = loadImage("rose-blue.jpeg");
}

function setup(){
   createCanvas(600, 400, WEBGL);
}
var t1 = 0;
function draw(){
  background(240);
  rotateX(t1);
  t1 += 0.01;
  texture(img);
  plane(100, 150);
  rotateX(HALF_PI);
  translate(0, 0, 75);
  translate(0, 75, 0);
  fill(125);
  plane(100, 150);
  translate(0, 0, -150);
  fill(200, 10, 100);
  plane(100, 150);
}
