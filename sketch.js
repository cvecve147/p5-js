// let ss;
// function preload() {
//   ss = loadImage("image.png");
// }

function setup() {
  createCanvas(800, 600, WEBGL);
  // colorMode(HSB, 400, 100, 100);
  // imageMode(CENTER);

  noStroke();
}

function draw() {
  // console.log("123");
  background(220);
  fill(255, 159, 140);
  beginShape();
  // dt = TWO_PI / 16;
  // for (let theta = 0; theta <= TWO_PI + 0.1; theta += dt) {
  //   r = 100 + random() * 50;
  //   r1 = 80 + random() * 30;

  //   let x = r * cos(theta);
  //   let y = r * sin(theta);
  //   vertex(x, y);
  //   x = r1 * cos(theta);
  //   y = r1 * sin(theta);
  //   vertex(x, y);
  // }
  let r1 = 100;
  let r2 = mouseY;
  for (let i = 0; i <= 16; i++) {
    let x = r1 * sin(i * (TWO_PI / 16));
    let y = r1 * cos(i * (TWO_PI / 16));
    let xc = r2 * sin(i * (TWO_PI / 16));
    let yc = r2 * cos(i * (TWO_PI / 16));
    if (i == 0) vertex(x, y);
    else {
      quadraticVertex(xc, yc, x, y);
    }
  }
  endShape();
  // image(ss, 0, 0, 80, 50);
  // for (let index = 0; index < height; index++) {
  //   stroke(index, 70, 100);
  //   line(0, index, width, index);
  // }
  // bezier(85, 20, 10, 10, 90, 90, 15, 80);
  // 小球 來回跑
  // t = (frameCount % 240) / 240;
  // bezier(10, 300, 400, 0, 130, 600, 580, 200);
  // if (t > 0.5) {
  //   p1 = bezierPoint(580, 130, 400, 10, t * 2 - 1);
  //   p2 = bezierPoint(200, 600, 0, 300, t * 2 - 1);
  // } else {
  //   p1 = bezierPoint(10, 400, 130, 580, t * 2);
  //   p2 = bezierPoint(300, 0, 600, 200, t * 2);
  // }
  // ellipse(p1, p2, 20);
  // fill(20, 0, 0);
  // textSize(30);
  // textFont("微軟正黑體");
  // textStyle(BOLD);
  // text("正黑體 word", 100, 100);
  // noFill();
  // curve(1100, 2500, 300, 300, 310, 300, -500, 2500);
  // loadstrings
  // for (let i = 0; i < ss.length; i++) {
  //   text(ss[i], 10, 20 + i * 50);
  // }
  //loadimage
  // t = (frameCount % 120) / 120;
  // bezier(10, 300, 400, 0, 130, 600, 580, 200);
  // // if (t > 0.5) {
  // //   p1 = bezierPoint(580, 130, 400, 10, t * 2 - 1);
  // //   p2 = bezierPoint(200, 600, 0, 300, t * 2 - 1);
  // // } else {
  // //   p1 = bezierPoint(10, 400, 130, 580, t * 2);
  // //   p2 = bezierPoint(300, 0, 600, 200, t * 2);
  // // }
  // p1 = bezierPoint(10, 400, 130, 580, t);
  // p2 = bezierPoint(300, 0, 600, 200, t);
  // tx = bezierTangent(580, 130, 400, 10, t);
  // ty = bezierTangent(200, 600, 0, 300, t);
  // a = atan2(ty, tx);
  // translate(p1, p2);
  // rotate(a);
  // strokeWeight(7);
  // stroke(255, 100, 0);
  // line(0, 0, 50, 0);
  // rotate(180);
  // image(ss, 0, 0, 80, 50);
  // rect(10, 10, 100, 20);
  // push();
  // translate(width / 2, height / 2);
  // rect(-15, -15, 200, 30);
  // rotate(TWO_PI / 3);
  // rect(-15, -15, 200, 30);
  // rotate(TWO_PI / 3);
  // rect(-15, -15, 200, 30);
  // pop();
  // circle(100, 100, 10);
  // for (let x = 0; x < width; x++) {
  //   f = TWO_PI * 10;
  //   m = 100;
  //   o = 300;
  //   y = m * sin(x / f) + o;
  //   point(x, y);
  // }
  // for (let x = 0; x < width; x++) {
  //   f = TWO_PI * 10;
  //   m = 100;
  //   o = 300;
  //   y = m * sin(x / f - 0.2) + o;
  //   point(x, y);
  // }
  // stroke(255, 100, 0);
  // fill(78, 100, 200);
  // beginShape(TRIANGLE_STRIP);
  // for (let x = -width / 2; x < width / 2; x += 20) {
  //   f = TWO_PI * 10;
  //   m = 100;
  //   o = 100;
  //   y = m * sin(x / f - 0.2) + o;
  //   y1 = m * sin(x / f) + o;
  //   vertex(x, y);
  //   vertex(x, y1);
  // }
  // endShape();
  // beginShape(TRIANGLE_STRIP);
  // dt = TWO_PI / 16;
  // r = 100;
  // r1 = 80;
  // for (let theta = 0; theta <= TWO_PI + 0.1; theta += dt) {
  //   var x = r * cos(theta);
  //   var y = r * sin(theta);
  //   vertex(x, y);
  //   var x = r1 * cos(theta);
  //   var y = r1 * sin(theta);
  //   vertex(x, y);
  // }
  // endShape();
}
