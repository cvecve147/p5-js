var h, w;
var zoff = 0;
var simplex;
var scal;
function setup(){
   w = 300;
   h = 300;
   createCanvas(300, 300, WEBGL);
   simplex = new SimplexNoise();
   scal = 8;
   noStroke();
}

function draw(){
   background(0);
   var xoff = 0;
   var yoff = 0;
   noFill();
   stroke(255);
   translate(-w/2, 100, -300);
   rotateX(PI/2);
   for(let y = 0; y < h; y+=scal){
     xoff = 0;
     for( let x = 0; x < w; x+=scal){
      //  var z = simplex.noise3D(xoff, yoff, zoff)*125+125;
       var z = noise(xoff, yoff, zoff)*255;
      //  console.log(z);
       z = (z>125)?255:0;
      //  fill(z);
      //  rect(x, y,scal, scal);
       var z = noise(xoff, yoff) * 100;
       beginShape();
       vertex(x, y, z);
       z = noise(xoff+=0.01, yoff) * 100; xoff+=0.01;
       vertex(x, y+scal,z);
       z = noise(xoff+=0.01, yoff) * 100; xoff+=0.01;
       vertex(x+scal, y, z);
       endShape(CLOSE);
       beginShape();
       vertex(x+scal, y, z);
       vertex(x, y+scale, z);
       vertex(x+scal, y+scal, z);
       endShape(CLOSE);
       xoff += 0.1;
     }
     yoff += 0.1;
   }
   zoff += 0.1;
}
