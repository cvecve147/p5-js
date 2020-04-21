function setup(){
    createCanvas(400, 400);
    push();
    translate(0, 200);
    scale(0.5);
    t1(4, 200, 400, 100);
    pop();
    ellipseMode(CENTER);
    scale(0.5);
    noStroke();
    fill(100, 50);
    t2(4, 200, 200, 100);
}

function t1(n, x, y, l){
  if( n < 0 ) return;
  line(x, y, x, y-l);
  line(x - l, y-l, x+l, y-l);
  t1(n-1,x-l, y-l, l / 2);
  t1(n-1,x+l, y-l, l / 2);
}

function t2(n, x, y, r){
  if( n < 0) return ;
  ellipse(x, y, 2*r);
  t2(n-1, x-r/2, y, r/2);
  t2(n-1, x+r/2, y, r/2);
}
function draw(){

}
