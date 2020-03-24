function setup() {
  createCanvas(800, 600)
}
let theta = 0,
  theta2 = 0
function draw() {
  background(220)
  translate(width / 2, height / 2)
  noStroke()
  fill(255, 120, 20)
  ellipse(0, 0, 50)

  fill(0, 255, 255)
  theta += 0.02
  rotate(theta)
  translate(200, 0)
  ellipse(0, 0, 30)
  rotate((theta2 -= 0.04))
  translate(60, 0)
  fill(100, 100, 100)
  ellipse(0, 0, 30)
}
