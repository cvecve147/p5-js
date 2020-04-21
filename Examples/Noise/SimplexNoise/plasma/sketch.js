var h, w;
var zoff = 0;
var simplex;
var scal;
function setup(){
   w = 300;
   h = 300;
   createCanvas(300, 300);
   simplex = new SimplexNoise();
   scal = 4;
   noStroke();
}

function draw(){
   background(0);
   var xoff = 0;
   var yoff = 0;
   for(let y = 0; y < h; y+=scal){
     xoff = 0;
     for( let x = 0; x < w; x+=scal){
       var z = simplex.noise3D(xoff, yoff, zoff)*125+125;
       fill(z);
       rect(x, y,scal, scal);
       xoff += 0.1;
     }
     yoff += 0.1;
   }
   zoff += 0.1;
}
