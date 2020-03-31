function setup() {
  createCanvas(800, 600, WEBGL)
  ball = createVector(0, 0)
  speed = createVector(5, 5)
  noStroke()
}
let ball, speed
function draw() {
  background(220)
  arrow(speed)
  ball.add(speed)
  if (ball.x < -width / 2 || ball.x > width / 2) {
    speed.set(-speed.x, speed.y)
    ball.add(speed)
  }
  if (ball.y < -height / 2 || ball.y > height / 2) {
    speed.set(speed.x, -speed.y)
    ball.add(speed)
  }
}
function arrow(speed) {
  translate(ball.x, ball.y)
  rotate(speed.heading())
  rotate(PI)
  beginShape()
  vertex(0, 0)
  vertex(30, -30)
  vertex(30, -10)
  vertex(70, -10)
  vertex(70, 10)
  vertex(30, 10)
  vertex(30, 30)
  endShape()
}
