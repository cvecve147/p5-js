var Circle = class{
  constructor(x, y){
    this.p = createVector(x,y);
    this.r = 1;
    this.growing = true;
  }
}
Circle.prototype.show = function(){
  ellipse(this.p.x, this.p.y, 2*this.r, 2*this.r);
}
Circle.prototype.grow = function(){
    this.r = this.r +1;
}
Circle.prototype.edge = function(){
  if(this.p.x-this.r < 0 || this.p.x+this.r > w || this.p.y-this.r < 0 || this.p.y+this.r > h){
      return false;
  }
  else return true;
}
Circle.prototype.edgec = function( c ){
   let d = dist(this.p.x, this.p.y, c.p.x, c.p.y);
   if(this.r + c.r > d) return false;
   return true;
}
