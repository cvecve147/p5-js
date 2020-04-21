let img;
function preload(){
    img = loadImage("rose-blue.jpeg");
}
function setup() {
    createCanvas(800, 600, WEBGB);
  }
  // let r = 100;
  // let n = 5;
  function draw() {
    background(220);
    translate(width / 3, height/3);
    homoPoly(100, 5);
    translate(width / 3, 0);
    star(50, 150, 5);
  }

  function homoPoly(r, n){
    beginShape();
    for(let i = 0; i < n; i++){
      let angle = TWO_PI / n *i;
      x = r * cos (angle);
      y = r * sin (angle);
      vertex(x,y);
    }
    endShape(CLOSE);
  }
  
  function star(r1, r2, n){
    texture (img);
    texttureMode(NORMAL);
    beginShape();
    for(let i = 0; i < n; i++){
      let angle = TWO_PI / n *i;
      x = r1 * cos (angle);
      y = r1 * sin (angle);
      vertex(x,y,0,0);
      let angle2 = TWO_PI / n *i + TWO_PI/n/2;
      x = r2 * cos (angle2);
      y = r2 * sin (angle2);
      vertex(x,y,1,1);
    }
    endShape(CLOSE);
  }