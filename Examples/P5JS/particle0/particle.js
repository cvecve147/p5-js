var Particle = class{
  constructor(x, y){
    this.p = createVector(x,y);
    this.v = createVector(0,0);
    this.a = createVector(0,0);
    this.m = 1;
  }
}
Particle.prototype.show = function(){
  ellipse(this.p.x, this.p.y, 10, 10);
}
Particle.prototype.update = function(){
    this.p.add(this.v);
    this.v.add(this.a);
    this.a.set(0,0);
}
Particle.prototype.bound = function(){
  if(this.p.x < 0 || this.p.x > w){
    if(this.p.x < 0) this.p.x = 0;
    else this.p.x = w;
    this.v.x *=-1;
  }
  if(this.p.y < 0 || this.p.y > h){
    if(this.p.y < 0) this.p.y = 0;
    else this.p.y = h;
    this.v.y *= -0.97;
  }
}
Particle.prototype.applyForce = function(f){
  this.a.add(f.div(this.m*30));
}
