let mover, gravity

function setup() {
  createCanvas(800, 600)

  mover = []
  for (let i = 0; i < 1; i++) {
    p = createVector(i * 50, height)
    x = createVector(0, 0)
    mover[i] = new Mover(p, x, 1)
  }
  gravity = createVector(0, 0.3)
  wind = createVector(0.1, 0)
}
function mouseClicked() {
  let ban = createVector(10, -10)
  console.log("123")

  mover[0].applyForce(ban)
}
function draw() {
  background(220)
  for (let i = 0; i < 1; i++) {
    let friction = p5.Vector.mult(mover[i].ve, -1)
    friction.normalize().mult(0.01)
    mover[i].applyForce(friction)
    mover[i].applyForce(p5.Vector.mult(gravity, mover[i].m))
    // mover[i].applyForce(wind)
    mover[i].checkEdge()
    mover[i].update()
    mover[i].display()
  }
}
