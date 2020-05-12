class Pendulum {
  constructor(x, y, r) {
    this.origin = createVector(x, y) // 掛點
    this.position = createVector()
    this.r = r // 擺長
    this.aacc = 0
    this.avel = 0
    this.angle = PI / 4 //  一開始的位置 45度
  }
  update() {
    let gravity = 0.4
    let f = gravity * sin(this.angle)
    this.aacc = -f / this.r // 順時鐘為正，逆時鐘為負。
    this.avel += this.aacc
    this.angle += this.avel
  }
  display() {
    let mx = this.r * cos(this.angle - PI / 2)
    let my = -this.r * sin(this.angle - PI / 2)
    line(width / 2, 0, this.position.x, this.position.y)
    this.position.set(mx, my)
    this.position.add(this.origin)
    ellipse(this.position.x, this.position.y, 50, 50)
  }
}
let p
function setup() {
  createCanvas(400, 600)
  p = new Pendulum(width / 2, 0, 200)
}

function draw() {
  background(220)
  p.update()
  p.display()
}
