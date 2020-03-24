let n = 24,
  R1 = 170,
  R2 = 150
function setup() {
  createCanvas(800, 600)
  noStroke()
}
let theta = 0
function draw() {
  background(220)
  translate(width / 2, height / 2)
  fill(255, 255, 0)
  rotate((theta += 0.01))
  beginShape()
  for (let i = 0; i < n; i += 2) {
    dx = R1 * cos((TWO_PI / n) * i)
    dy = R1 * sin((TWO_PI / n) * i)
    vertex(dx, dy)
    dx = R2 * cos((TWO_PI / n) * i)
    dy = R2 * sin((TWO_PI / n) * i)
    vertex(dx, dy)
    dx = R2 * cos((TWO_PI / n) * (i + 1))
    dy = R2 * sin((TWO_PI / n) * (i + 1))
    vertex(dx, dy)
    dx = R1 * cos((TWO_PI / n) * (i + 1))
    dy = R1 * sin((TWO_PI / n) * (i + 1))
    vertex(dx, dy)
  }
  endShape()
  fill(0)
  ellipse(0, 0, 10)
}
