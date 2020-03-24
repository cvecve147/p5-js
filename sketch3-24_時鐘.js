function setup() {
  createCanvas(800, 600)
  img = loadImage("image.png")
  imageMode(CENTER)
  //   pg = createGraphics(200, 200)
  //   pg.background(100, 100)
  //   pg.fill(255, 0, 0)
  //   pg.noStroke()
  //   pg.rect(40, 40, 20, 100)
  //   pg.fill(255, 255, 0)
  //   pg.noStroke()
  //   pg.ellipse(100, 100, 50, 20)
  //   px = py = 0
  //   dx = dy = 1
  min = 30
  hours = 2
  sec = 0
}
function draw() {
  background(250)
  //   image(pg, 20, 20)
  //   image(pg, 40, 40)
  //   image(pg, 60, 60)
  //   if (px + 200 > width || px < 0) dx = -dx
  //   if (py + 200 > height || py < 0) dy = -dy
  //   image(pg, px, py)
  //   px += dx
  //   py += dy
  translate(width / 2, height / 2)
  noFill()
  ellipse(0, 0, 400)
  push()
  for (let i = 0; i < 12; i++) {
    rotate(TWO_PI / 12)
    fill(0)
    line(170, 0, 200, 0)
    push()
    translate(150, 0)
    rotate((-TWO_PI / 12) * (i + 1))
    // rotate((-TWO_PI / 12) * (i - 1))
    textSize(36)
    textAlign(CENTER, CENTER)
    text(((i + 3) % 12) + 1, 0, 0)
    pop()
  }
  pop()
  ellipse(0, 0, 5)
  push()
  rotate((hours / 12) * TWO_PI)
  strokeWeight(7)
  line(0, 0, 0, -80)
  pop()
  push()
  rotate((min / 60) * TWO_PI)
  strokeWeight(3)
  line(0, 0, 0, -100)
  pop()
  push()
  rotate((sec / 60 / 60) * TWO_PI)
  strokeWeight(1)
  line(0, 10, 0, -100)
  image(img, 0, -100, 20, 20)
  pop()
  sec += 10
}
