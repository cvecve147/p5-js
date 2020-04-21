var img;
function preload(){
   img = loadImage("a1.jpeg");

}

function setup(){
   createCanvas(800, 600);
   image(img, 0, 0, width, height);
   tint(255, 100);
   image(img, 0, 0);
   //copy(0, 0,img.width, img.height, 100, 50,img.width, img.height);
}

function draw(){
}

function mouseClicked(){
   saveCanvas("new1.jpeg");
   println(" the canvas is being saved. ");
}
