function setup() {
  createCanvas(800, 600)
}
let theta = 0,
  theta2 = 0
function draw() {
  background(220)
  translate(width / 2, height / 2)
  rect(-25, height / 2 - 150, 50, 150)
  translate(0, 170)
  rotate(sin(theta))
  rect(-20, 0, 40, -100)
  ellipse(0, -10, 5)
  translate(0, -80)
  rotate(sin(theta2))
  rect(-15, 0, 30, -50)
  ellipse(0, -10, 5)
  theta += 0.1
  theta2 += 0.08
}
