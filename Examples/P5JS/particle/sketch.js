var h, w;
var zoff = 0;
var scal;

var p1 = [];
function createParticle(x, y){
  return new Particle(x, y);
}
function setup(){
   w = 300;
   h = 300;
   createCanvas(300, 300);
   scal = 4;
   noStroke();
   for( var n = 0; n < 10; n++){
     let x = Math.random()*300;
     console.log(x);
     // let p = new Particle(x, 100);
     p = createParticle(x, 100);
     p.v.set(Math.random()*2,Math.random()*1.5);
     p1.push(p);
   }
}

function draw(){
   background(0);
   for(p of p1){
     p.bound();
     p.applyForce(createVector(0, 1));
     if( frameCount % 60 == 0){
       p.applyForce(createVector(0.5, -22.5));
     }
     p.update();
     p.show();
   }
}
function mouseClicked(){

}
