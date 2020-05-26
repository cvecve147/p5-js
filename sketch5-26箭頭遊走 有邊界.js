class Vehicle {
  constructor(x, y) {
    this.acceleration = createVector(0, 0)
    this.velocity = createVector(0, -2)
    this.position = createVector(x, y)
    this.r = 6
    this.maxspeed = 8
    this.maxforce = 0.2
  }

  boundaries(d) {
    let desired = null
    if (this.position.x < d) {
      desired = createVector(this.maxspeed, this.velocity.y)
    } else if (this.position.x > width - d) {
      desired = createVector(-this.maxspeed, this.velocity.y)
    }

    if (this.position.y < d) {
      desired = createVector(this.velocity.x, this.maxspeed)
    } else if (this.position.y > height - d) {
      desired = createVector(this.velocity.x, -this.maxspeed)
    }

    if (desired !== null) {
      desired.normalize()
      desired.mult(this.maxspeed)
      let steer = p5.Vector.sub(desired, this.velocity)
      steer.limit(this.maxforce)
      this.applyForce(steer)
    }
  }
  // Method to update location
  update() {
    // Update velocity
    this.velocity.add(this.acceleration)
    // Limit speed
    this.velocity.limit(this.maxspeed)
    this.position.add(this.velocity)
    // Reset accelerationelertion to 0 each cycle
    this.acceleration.mult(0)
  }

  applyForce(force) {
    this.acceleration.add(force)
  }
  seek(target) {
    var desired = p5.Vector.sub(target, this.position)
    desired.setMag(this.maxspeed)
    var steer = p5.Vector.sub(desired, this.velocity)
    steer.limit(this.maxforce)
    this.applyForce(steer)
  }
  arrive(target) {
    let desired = p5.Vector.sub(target, this.position)
    let d = desired.mag()
    if (d < 100) {
      var m = map(d, 0, 100, 0, this.maxspeed)
      desired.setMag(m)
    } else {
      desired.setMag(this.maxspeed)
    }

    let steer = p5.Vector.sub(desired, this.velocity)
    steer.limit(this.maxforce)
    this.applyForce(steer)
  }
  display() {
    let theta = this.velocity.heading() + PI / 2
    fill(127)
    stroke(200)
    strokeWeight(1)
    beginShape()
    vertex(25, width - 25)
    vertex(25, 25)
    vertex(height - 25, 25)
    vertex(height - 25, width - 25)
    endShape(CLOSE)
    push()

    translate(this.position.x, this.position.y)
    rotate(theta)
    beginShape()
    vertex(0, -this.r * 2)
    vertex(-this.r, this.r * 2)
    vertex(this.r, this.r * 2)
    endShape(CLOSE)

    pop()
  }
}

let v
function setup() {
  createCanvas(600, 600)
  v = new Vehicle(width / 2, height / 2)
}

function draw() {
  background(51)

  // var mouse = createVector(random2D, mouseY)

  // v.arrive(mouse)
  v.update()
  v.boundaries(25)
  v.display()
}

function mouseClicked() {
  target = p5.Vector.add(v.position, v.velocity)
  target.add(p5.Vector.random2D().mult(70))
  v.seek(target)
}
