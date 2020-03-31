function setup() {
  createCanvas(800, 600, WEBGL)

  background(220)
  position = createVector(0, 0)
  position2 = position.copy()
}
let position
function draw() {
  step = p5.Vector.random2D()
  if (random(100) < 2) position.add(step.mult(30))
  else position.add(step)
  if (position.x < -width / 2) {
    position.x = position.x + 400
  }
  if (position.x < -height / 2) {
    position.x = position.x + 400
  }
  line(position2.x, position2.y, position.x, position.y)
  position2.set(position)
}
