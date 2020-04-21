var h, w;
var zoff = 0;
var simplex;
function setup(){
   w = window.innerWidth;
   h = window.innerHeight;
   createCanvas(w, h);
   simplex = new SimplexNoise();
}

function draw(){
  background(0);
  noFill();

  zoff += 0.02;
  for(let y = -20; y < 20; y+=0.5){
    beginShape();
    colorMode(HSB, 100);
    h = sin(zoff)*50+50;
    stroke(h, 255, 200, 30);
    for(let x = -100; x < innerWidth; x+=5){
      // var n = simplex.noise3D(x/100, y/100, zoff);
      // var n1 = simplex.noise3D(x/100+1000,y/100+1000, zoff+1000);
      var n = noise(x/50, y/50, zoff);
       var n1 = noise(x/50+1000,y/50+1000, zoff+1000);
      var y1 = y +h/2 + map(n, -1, 1, -200, 200);
       var x1 = x + map(n1, -1, 1, -40, 40);
      vertex(x1, y1);
    }
    endShape();
  }
  console.log(h+".."+w);
}
