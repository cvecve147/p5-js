var img;
function preload(){
   img = loadImage("_20190308_063914.JPG");

}

function setup(){
   createCanvas(600, 400);

}

function draw(){
  background(240);
  tint(255, frameCount%255);
  image(img, 0, 0, img.width/10, img.height/10);
  if( frameCount == 200)
    saveCanvas("a1.jpeg");
}
