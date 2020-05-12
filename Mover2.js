class Mover {
  constructor(p, v, m) {
    this.po = createVector(p.x, p.y)
    this.ve = createVector(v.x, v.y)
    this.ac = createVector(0, 0)
    this.m = m
    this.r = 10
    this.ave = 0.1
    this.aac = 0
    this.len = 20
    this.theta = 0
  }
  update() {
    this.ve.add(this.ac)
    this.po.add(this.ve)
    this.ac.mult(0)
    this.theta += this.ave
  }
  applyForce(forec) {
    this.ac = p5.Vector.div(forec, this.m)
  }
  checkEdge() {
    let dx = abs(this.len * cos(this.theta))
    let dy = abs(this.len * sin(this.theta))
    if (this.po.x < dx) {
      this.ve.x = -this.ve.x
      this.ave = -this.ave
      this.po.x = dx
    }
    if (this.po.x > width - dx) {
      this.ve.x = -this.ve.x
      this.ave = -this.ave
      this.po.x = width - dx
    }
    if (this.po.y < dy) {
      this.ve.y = -this.ve.y
      this.ave = -this.ave
      this.po.y = dy
    }
    if (this.po.y > height - dy) {
      this.ve.y = -this.ve.y
      this.ave = -this.ave
      this.po.y = height - dy
    }
  }

  display() {
    let alpa = map(this.m, 0, 5, 0, 255)
    fill(127, alpa)

    ellipse(this.po.x, this.po.y, 10)

    // push()
    // translate(this.po.x, this.po.y)
    // rotate(this.theta)
    // ellipse(0 - 20, 0, this.r * 2)
    // line(0 - 10, 0, 0 + 10, 0)
    // ellipse(0 + 20, 0, this.r * 2)
    // pop()
  }
}
