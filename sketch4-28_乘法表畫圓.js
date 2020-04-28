function setup() {
  createCanvas(800, 600)
}
function draw() {
  background(220)
  translate(width / 2, height / 2)
  N = parseInt(map(mouseX, 0, width, 10, 200))
  T = parseInt(map(mouseY, 0, height, 0, 10))
  for (let i = 0; i < N; i++) {
    p = pon(i)
    point(p.x, p.y)
  }
  strokeWeight(1)
  stroke(0, 0, 255, 30)
  for (let i = 0; i < N; i++) {
    begini = pon(i)
    endi = pon((i * T) % N)
    line(begini.x, begini.y, endi.x, endi.y)
  }
}
let N = 10,
  R = 150,
  T = 2
function pon(n) {
  x = R * cos((n * TWO_PI) / N)
  y = R * sin((n * TWO_PI) / N)
  pos = createVector(x, y)
  return pos
}
