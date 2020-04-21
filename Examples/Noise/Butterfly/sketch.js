function setup(){
  createCanvas(400, 400);
  background(0);
  translate(width/2, height/2);
  rotate(PI/2);
  stroke(255);
  fill(255, 50);
  beginShape();
  var xoff = 0;
  var dx = 0.4;
  var da = PI/50;
  for(var a = -PI/2; a <= PI/2; a += da){
    var n = noise(xoff);
    var r = sin(2*a) * map(n, 0, 1, 50, 150);
    var x = r * cos(a);
    var y = r * sin(a);
    xoff += dx;
    vertex(x, y);
  }
  for(var a = PI/2; a <= 3*PI/2; a += da){
    var n = noise(xoff);
    var r = sin(2*a)*map(n, 0, 1, 50, 150);
    var x = r * cos(a);
    var y = r * sin(a);
    xoff -= dx;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function draw(){
}
