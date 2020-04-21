
var h, w;
var zoff = 0;
var scal;

var p1 = [];
function setup(){
   w = 300;
   h = 300;
   createCanvas(300, 300);
   scal = 4;
   stroke(255);
   noFill();
   ellipseMode(CENTER);

}

function draw(){
   background(0);

   var p = new Circle(random(300), random(300));
   var available = true;
   for(var c of p1){
     if(!p.edgec(c)){
       available = false;
       break;
     }
   }
   if(available)
       p1.push(p);

   for(var p of p1){
     for( var c of p1 ){
       if( c != p ){
         p.growing = p.edgec(c);
         if( p.growing == false)
             break;
       }
     }
     if(p.growing)
        p.grow();
     p.show();
   }

}
