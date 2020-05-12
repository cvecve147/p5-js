let mover, gravity, p

function setup() {
  createCanvas(800, 600)

  p = createVector(width / 2, height / 2)
  x = createVector(1, 2)
  mover = new Mover(p, x, random(5))
  gravity = createVector(0, 0.1)
  wind = createVector(0.1, 0)
}
let r = 0,
  ppx = 0,
  ppy = 0
function draw() {
  background(220)

  mover.applyForce(p5.Vector.mult(gravity, mover.m))
  mover.update()
  mover.checkEdge()
  mover.display()
  //   theta = frameCount / 10
  //   r += 0.05
  //   px = r * cos(theta)
  //   py = r * sin(theta)
  //   line(px, py, ppx, ppy)
  //   ppx = px
  //   ppy = py
  //   noFill()
  //   r = 10
  //   beginShape()
  //   for (let i = 0; i < TWO_PI * 8; i += 0.2) {
  //     let px = r * cos(i)
  //     let py = r * sin(i)
  //     vertex(px, py)
  //     r += 0.5
  //   }
  //   endShape()
}
