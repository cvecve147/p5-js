class Ball{
  constructor(p, v, a, m_){
    this.position = p
    this.vel = v;
    this.accel = a;
    this.m = m_;
  }
  applyForce(f){
    this.accel.add(f);
  }
  update(){
    this.vel.add(this.accel);
    this.vel.mult(0.99);
    this.position.add(this.vel);
    this.accel.set(0,0);
  }
  display(){
    ellipse(this.position.x, this.position.y, 20, 20);
  }
}
class spring{
  constructor(p, l, k){
    this.position = p;
    this.length = l;
    this.k = k;
  }

  connect(b){
    var force = p5.Vector.sub(b.position, this.position);
    var stretch = force.mag();
    stretch = this.length-stretch;
    stretch = stretch*this.k;
    force.normalize();
    return force.mult(stretch);
  }

}

var b;
var s;
function setup(){
  createCanvas(800, 600);
  var p = createVector(400, 150);
  b = new Ball(p, createVector(0, 0), createVector(0, 0), 20);
  s = new spring(createVector(400, 0), 150, 0.04);
  fill(255, 20, 100);

}

function draw(){
  background(255);
  if(mouseIsPressed){
    var d = dist(mouseX, mouseY, b.position.x, b.position.y);
    console.log(d);
    if (d < 20)
       b.position.set(mouseX, mouseY);
  }
    b.applyForce(createVector(0, 0.1));
    b.applyForce(s.connect(b))  ;
    b.update();
    line(s.position.x, s.position.y, b.position.x, b.position.y);
    b.display();

}
