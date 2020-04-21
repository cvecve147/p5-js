var capture;
var freeze;
var v0;
function setup(){
  createCanvas(320, 240);
  video = createVideo("https://www.youtube.com/watch?v=bkGf4fEHKak&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig");
  video.size(320, 240);
  var btn = createButton("取像");
  btn.mousePressed(cap);
  freeze = false;
  // capture.hide();
}
function cap(){
  
}
function draw(){
   background(200, 200, 155);

}
