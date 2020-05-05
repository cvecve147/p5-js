class Mover {
  constructor(p, v, m) {
    this.po = createVector(p.x, p.y)
    this.ve = createVector(v.x, v.y)
    this.ac = createVector(0, 0)
    this.m = m
    this.r = 10
  }
  update() {
    this.ve.add(this.ac)
    this.po.add(this.ve)
    this.ac.mult(0)
  }
  applyForce(forec) {
    const f = p5.Vector.div(forec, this.m)

    this.ac.add(f)
  }
  checkEdge() {
    if (this.po.x < this.r) {
      this.po.x = this.r
      this.ve.x *= -1
    }
    if (this.po.x >= width - this.r) {
      this.po.x = width - this.r
      this.ve.x *= -1
    }
    if (this.po.y < this.r) {
      this.po.y = this.r
      this.ve.y *= -1
    }
    if (this.po.y >= height - this.r) {
      this.po.y = height - this.r
      this.ve.y *= -1
    }
  }
  display() {
    let alpa = map(this.m, 0, 5, 0, 255)
    fill(127, alpa)

    ellipse(this.po.x, this.po.y, this.r * 2)
  }
}
