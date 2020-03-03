let ss;
function preload() {
  ss = loadImage("image.png");
}

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 400, 100, 100);
  imageMode(CENTER);
}

function draw() {
  console.log("123");

  background(220);
  image(ss, 0, 0, 80, 50);
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

  t = (frameCount % 120) / 120;
  bezier(10, 300, 400, 0, 130, 600, 580, 200);
  // if (t > 0.5) {
  //   p1 = bezierPoint(580, 130, 400, 10, t * 2 - 1);
  //   p2 = bezierPoint(200, 600, 0, 300, t * 2 - 1);
  // } else {
  //   p1 = bezierPoint(10, 400, 130, 580, t * 2);
  //   p2 = bezierPoint(300, 0, 600, 200, t * 2);
  // }
  p1 = bezierPoint(10, 400, 130, 580, t);
  p2 = bezierPoint(300, 0, 600, 200, t);
  tx = bezierTangent(580, 130, 400, 10, t);
  ty = bezierTangent(200, 600, 0, 300, t);
  a = atan2(ty, tx);
  translate(p1, p2);
  rotate(a);
  strokeWeight(7);
  stroke(255, 100, 0);

  line(0, 0, 50, 0);
  rotate(180);
  // image(ss, 0, 0, 80, 50);
}
