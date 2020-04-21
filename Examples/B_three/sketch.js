let img;
let img2;
function preload(){
    img = loadImage("rose-blue.jpeg")
    w = image.width;
    h = image.height;
}
function setup(){
    createCanvas(600, 400, WEBGL );
    img.copy(0,0,600, 400, img2, 0,0, 600, 400);
}

function draw(){

    background( 225);
    fill (100, 200, 100); noStroke();
    texture (img2);
    plane (200, 100);

}