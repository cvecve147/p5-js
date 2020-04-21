var p1 = [];
function setup(){
   w = 300;
   h = 300;
   createCanvas(300, 300);
   stroke(255);
   p1.push(new Particle(200, 200)) ;
   p1.push(new RectParticle( 100, 100, 10));  // Polymophism
}

function draw(){
   background(0);
   for( let p of p1){
     p.move();
     p.display();
   }
}
//  Polymophism
function mouseClicked(){
  for( let p of p1){
    if( p.constructor.name == "RectParticle")  // 取得類別名稱
        p.resize(2);
  }
}
