class Particle {
  constructor(position) {
    this.acceleration = createVector(0, 0.05)
    this.velocity = createVector(random(-1, 1), random(-1, 0))
    this.position = position.copy()
    this.lifespan = 255.0
  }
  run() {
    this.update()
    this.display()
  }

  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.acceleration.mult(0)
    this.lifespan -= 2.0
  }
  // Method to update position

  // Method to display
  display() {
    stroke(255, this.lifespan)
    strokeWeight(2)
    fill(127, this.lifespan)
    ellipse(this.position.x, this.position.y, 12, 12)
  }
  applyForce(force) {
    let f = force.copy()
    this.acceleration.add(f)
  }
  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true
    } else {
      return false
    }
  }
}
class Confetti extends Particle {
  // Override the display method
  display() {
    rectMode(CENTER)
    fill(255, this.lifespan)
    stroke(255, this.lifespan)
    strokeWeight(2)
    push()
    translate(this.position.x, this.position.y)
    var theta = map(this.position.x, 0, width, 0, TWO_PI * 2)
    rotate(theta)
    rect(0, 0, 12, 12)
    pop()
  }
}
class ParticleSystem {
  constructor(position) {
    this.origin = position.copy()
    this.ps = []
  }
  addParticle(x, y) {
    var points = createVector(x, y)
    let r = random(1)
    if (r < 0.5) {
      this.ps.push(new Particle(points))
    } else {
      this.ps.push(new Confetti(points))
    }
  }
  run() {
    for (let p of this.ps) p.run()

    this.ps = this.ps.filter((p) => !p.isDead())
  }
  applyForce(f) {
    for (let i = 0; i < this.ps.length; i++) {
      this.ps[i].applyForce(f)
    }
  }
  applyRepeller(r) {
    for (let particle of this.ps) {
      let force = r.repel(particle)
      particle.applyForce(force)
    }
  }
}

class Repeller {
  constructor(x, y) {
    this.power = 150
    this.position = createVector(x, y)
  }

  display() {
    stroke(255)
    strokeWeight(2)
    fill(127)
    ellipse(this.position.x, this.position.y, 32, 32)
  }

  repel(p) {
    let dir = p5.Vector.sub(this.position, p.position) // Calculate direction of force
    let d = dir.mag() // Distance between objects
    dir.normalize()
    d = constrain(d, 1, 100) // Keep distance within a reasonable range
    let force = (-1 * this.power) / (d * d) // 距離平方成反比
    dir.mult(force) // Get force vector --> magnitude * direction
    return dir
  }
}
let ps
let repeller

function setup() {
  createCanvas(640, 360)
  ps = new ParticleSystem(createVector(width / 2, 50))
  repeller = new Repeller(width / 2, height / 2)
}

function draw() {
  background(51)
  //   ps.addParticle(mouseX, mouseY)
  ps.addParticle(mouseX, mouseY)

  // Apply gravity force to all Particles
  let gravity = createVector(0, 0.02)
  ps.applyForce(gravity)

  ps.applyRepeller(repeller)

  repeller.display()
  ps.run()
}
