function setup() {
  createCanvas(800, 600, WEBGL)
}
let theta = 0
function draw() {
  background(220)
  orbitControl()
  push()
  translate(0, 0, sin(theta / 5) * 700 - 500)
  bird()
  pop()
  push()
  translate(100, 100, sin(theta / 5) * 700 - 500)
  bird()
  pop()
  push()
  translate(200, 100, sin(theta / 5) * 700 - 500)
  bird()
  pop()
  push()
  translate(200, 200, sin(theta / 5) * 700 - 500)
  bird()
  pop()
  theta += 0.1
}

function bird() {
  box(20, 20, 100)
  push()
  translate(10, 0, 0)
  rotate(sin(theta))
  translate(50, 0, 0)
  box(100, 10, 100)
  pop()
  push()
  translate(-10, 0, 0)
  rotate(sin(-theta))
  translate(-50, 0, 0)
  box(100, 10, 100)
  pop()
}
