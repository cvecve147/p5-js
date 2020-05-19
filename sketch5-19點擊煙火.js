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

  // Method to update position
  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.lifespan -= 2
  }

  // Method to display
  display() {
    stroke(255, this.lifespan)
    strokeWeight(2)
    fill(127, this.lifespan)
    ellipse(this.position.x, this.position.y, 12, 12)
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
class ParticleSystem {
  constructor(position) {
    this.origin = position.copy()
    this.ps = []
  }
  addParticle() {
    this.ps.push(new Particle(this.origin))
  }
  run() {
    for (let p of this.ps) p.run()

    this.ps = this.ps.filter((p) => !p.isDead())
  }
}

let systems = []

function setup() {
  let text = createP("click to add particle systems")
  text.position(10, 365)

  createCanvas(640, 360)
}

function draw() {
  background(51)
  for (let i = 0; i < systems.length; i++) {
    systems[i].addParticle()
    systems[i].run()
  }
}

function mousePressed() {
  systems.push(new ParticleSystem(createVector(mouseX, mouseY)))
}
