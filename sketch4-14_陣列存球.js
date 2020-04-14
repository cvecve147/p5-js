class Mover {
  constructor() {
    this.position = createVector(random(width), random(height))
    this.velocity = createVector(random(-10, 10), random(-10, 10))
    this.r = random(10, 50)
  }

  update() {
    this.position.add(this.velocity)
  }

  display() {
    stroke(0)
    strokeWeight(2)
    fill(127)
    ellipse(this.position.x, this.position.y, this.r)
  }

  checkEdges() {
    if (
      this.position.x + this.r / 2 > width ||
      this.position.x - this.r / 2 < 0
    ) {
      this.velocity.x = -this.velocity.x
    }

    if (
      this.position.y + this.r / 2 > height ||
      this.position.y - this.r / 2 < 0
    ) {
      this.velocity.y = -this.velocity.y
    }
  }
}
let marr = []
function setup() {
  createCanvas(800, 600)
  for (let i = 0; i < 10; i++) {
    marr.push(new Mover())
  }
}
function draw() {
  background(220)
  for (let i = 0; i < 10; i++) {
    marr[i].display()
    marr[i].update()
    marr[i].checkEdges()
  }
}
