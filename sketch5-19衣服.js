class Spring {
  constructor(a, b, len) {
    this.a = a
    this.b = b
    this.len = len
    this.k = 0.2
  }
  update() {
    let f = p5.Vector.sub(this.a.position, this.b.position)
    let d = f.mag()
    let dlen = d - this.len
    f.normalize().mult(-this.k * dlen)
    this.a.applyForce(f)
    f.mult(-1)
    this.b.applyForce(f)
  }
  connect(bob) {
    let f = p5.Vector.sub(bob.position, this.anchor)
    let dl = f.mag() - this.len
    f.normalize().mult(-this.k * dl)
    bob.applyForce(f)
  }
  display() {
    console.log()

    line(
      this.a.position.x + 5,
      this.a.position.y,
      this.b.position.x - 5,
      this.b.position.y
    )
  }
}
class Bob {
  constructor(x, y) {
    this.position = createVector(x, y)
    this.vel = createVector()
    this.acc = createVector()
    this.mass = 24
    this.fag = false
    this.offx = 0
    this.offy = 0
  }
  checkEdge() {
    if (this.position.x < 5) {
      this.position.x = 5
      this.vel.x = -this.vel.x
    }
    if (this.position.x > width - 5) {
      this.position.x = width - 5
      this.vel.x = -this.vel.x
    }
    if (this.position.y < 5) {
      this.position.y = 5
      this.vel.y = -this.vel.y
    }
    if (this.position.y > height - 5) {
      this.position.y = height - 5
      this.vel.y = -this.vel.y
    }
  }
  update() {
    if (!this.fag) {
      this.vel.add(this.acc)
      this.vel.mult(0.99) // 阻尼
      this.position.add(this.vel)
      this.acc.mult(0)
    } else {
      this.position.x = mouseX + this.offx
      this.position.y = mouseY + this.offy
    }
    this.checkEdge()
  }
  applyForce(force) {
    let f = force.copy()
    f.div(this.mass)
    this.acc.add(f)
  }
  clicked(x, y) {
    let d = dist(x, y, this.position.x, this.position.y)
    if (d < 5) {
      this.fag = true
      this.offx = this.position.x - x
      this.offy = this.position.y - y
    }
  }

  stopDragging() {
    this.fag = false
  }
  display() {
    ellipse(this.position.x, this.position.y, 10)
  }
}
let bol, sprints

function setup() {
  createCanvas(600, 600)
  bol = []
  sprints = []
  for (let i = 0; i < 400; i++) {
    let temp = new Bob((i % 20) * 20 + 50, parseInt(i / 20) * 20 + 50)
    bol.push(temp)
  }
  for (let i = 0; i < 399; i++) {
    if ((i + 1) % 20 != 0) {
      sprints[i] = new Spring(bol[i], bol[i + 1], 10)
    }
  }
}

function draw() {
  background(220)
  let gravity = createVector(0, 2) // 重力場
  bol.forEach((el) => {
    el.display()
  })
  sprints.forEach((el) => {
    el.display()
  })
}
function mousePressed() {
  p.clicked(mouseX, mouseY)
  q.clicked(mouseX, mouseY)
  l.clicked(mouseX, mouseY)
}
function mouseReleased() {
  p.stopDragging()
  q.stopDragging()
  l.stopDragging()
}
