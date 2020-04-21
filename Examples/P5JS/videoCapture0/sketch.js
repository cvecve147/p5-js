var video;
var snapShots = [];
var button;
var index = 0;
function setup(){
   createCanvas(800, 400);
   video = createCapture(VIDEO,ready);
   video.size(320,240);
   button = createButton("capture");
   button.mousePressed(keepImage);
}
var go = false;
function ready(){
  // go = true;
}
function keepImage(){
  // snapShots[index]=(video.get(0,0,320,240));
  go = true
}

function draw(){
   if(go){
     snapShots[index]=(video.get(0,0,320,240));
     index ++;
     if(index == 40) index = 0;
    var w = 80;
    var h = 60;
    var x = 0;
    var y = 0;
   for(var i=0; i<snapShots.length; i++){
     var ix = (i + frameCount)%snapShots.length;
     image(snapShots[ix], x, y, w, h);
     x += 80;
     if( x > width){
       x = 0; y +=60;
     }
   }
 }
}
