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
      this.a.position.x,
      this.a.position.y,
      this.b.position.x,
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
    if (this.position.x < 25) {
      this.position.x = 25
      this.vel.x = -this.vel.x
    }
    if (this.position.x > width - 25) {
      this.position.x = width - 25
      this.vel.x = -this.vel.x
    }
    if (this.position.y < 25) {
      this.position.y = 25
      this.vel.y = -this.vel.y
    }
    if (this.position.y > height - 25) {
      this.position.y = height - 25
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
    if (d < 25) {
      this.fag = true
      this.offx = this.position.x - x
      this.offy = this.position.y - y
    }
  }

  stopDragging() {
    this.fag = false
  }
  display() {
    ellipse(this.position.x, this.position.y, 50)
  }
}

let s, p, q, l, s1, s2

function setup() {
  createCanvas(400, 600)
  p = new Bob(width / 2 + 50, 220)
  l = new Bob(width / 2, 300)
  q = new Bob(width / 2 - 50, 100)
  s = new Spring(p, q, 100)
  s1 = new Spring(q, l, 100)
  s2 = new Spring(p, l, 100)
}

function draw() {
  background(220)
  let gravity = createVector(0, 2) // 重力場
  p.applyForce(gravity)
  q.applyForce(gravity)
  l.applyForce(gravity)
  p.update()
  q.update()
  l.update()
  s.update()
  s1.update()
  s2.update()
  s.display()
  s1.display()
  s2.display()
  p.display()
  l.display()
  q.display()
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
