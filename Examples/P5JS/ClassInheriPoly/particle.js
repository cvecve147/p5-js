class Particle{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  display(){
    ellipse(this.x, this.y,10, 10);
  }
  move(){
    this.x += random(-1,1);
    this.y += random(-1,1);
  }
}

class RectParticle extends Particle{
  constructor(x, y, s){
    super(x, y);
    this.size = s;
  }
  display(){
    rect(this.x, this.y, this.size, this.size);
  }
}

RectParticle.prototype.resize = function(s){
  this.size += s;
}
