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
  constructor(a, b, l, k){
    this.a = a;
    this.b = b;
    this.length = l;
    this.k = k;
  }

  connect(){
    var force = p5.Vector.sub(this.a.position, this.b.position);
    var stretch = force.mag();
    stretch = this.length-stretch;
    stretch = stretch*this.k;
    force.normalize();
    force.mult(stretch);
    this.a.applyForce(force);
    this.b.applyForce(force.mult(-1));
  }

}

var a, b, c;
var s1,s2,s3;
function setup(){
  createCanvas(800, 600);
  b = new Ball(createVector(400, 150), createVector(0, 0), createVector(0, 0), 20);
  a = new Ball(createVector(200, 150), createVector(0, 0), createVector(0, 0), 20)
  c = new Ball(createVector(200, 350), createVector(0, 0), createVector(0, 0), 20)
  s1 = new spring(a, b, 150, 0.04);
  s2 = new spring(a, c, 150, 0.04);
  s3 = new spring(b, c, 150, 0.04);

  fill(255, 20, 100);

}

function draw(){
  background(255);
  if(mouseIsPressed){
    var d = dist(mouseX, mouseY, b.position.x, b.position.y);
    if (d < 20)
       b.position.set(mouseX, mouseY);
    var d = dist(mouseX, mouseY, a.position.x, a.position.y);
       if (d < 20)
          a.position.set(mouseX, mouseY);
  }
    s1.connect();
    s2.connect();
    s3.connect();

    line(a.position.x, a.position.y, b.position.x, b.position.y);
    line(a.position.x, a.position.y, c.position.x, c.position.y);
    line(c.position.x, c.position.y, b.position.x, b.position.y);
    a.update();
    a.display();
    b.update();
    b.display();
    c.update();
    c.display();

}
