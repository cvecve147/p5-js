let mover, gravity

function setup() {
  createCanvas(800, 600)

  mover = []
  for (let i = 0; i < 6; i++) {
    p = createVector(width / 2 + i * 50, height / 2)
    x = createVector(0, 0)
    mover[i] = new Mover(p, x, random(5))
  }
  gravity = createVector(0, 0.1)
  wind = createVector(0.1, 0)
}
function draw() {
  background(220)
  for (let i = 0; i < 6; i++) {
    let friction = p5.Vector.mult(mover[i].ve, -1)
    friction.normalize().mult(0.01)
    mover[i].applyForce(friction)
    mover[i].applyForce(p5.Vector.mult(gravity, mover[i].m))
    mover[i].applyForce(wind)
    mover[i].checkEdge()
    mover[i].update()
    mover[i].display()
  }
}
