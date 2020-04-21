function setup() {
  createCanvas(800, 800)
  background(0)
  translate(width / 2, height / 2)
  rotate(PI / 2)
  stroke(255)
  fill(255, 50)
  beginShape()
  var xoff = 0
  var dx = 0.4
  var da = PI / 50
  for (let i = -PI / 2; i < PI / 2; i += da) {
    // r = 150

    r = sin(2 * i) * map(noise(xoff), 0, 1, 100, 150)
    y = sin(i) * r
    x = cos(i) * r
    vertex(x, y)
    xoff += 1
  }
  for (let i = PI / 2; i < (3 * PI) / 2; i += da) {
    r = sin(2 * i) * map(noise(xoff), 0, 1, 100, 150)
    y = sin(i) * r
    x = cos(i) * r
    vertex(x, y)
    xoff -= 1
  }
  endShape(CLOSE)
}

function draw() {}
