function setup() {
  createCanvas(800, 600, WEBGL)
  noStroke()
}
function draw() {
  background(220)
  let theta = frameCount / 30
  translate(-width / 2, -height / 2)
  translate(100, 100)
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      push()
      translate(100 * i, 100 * j, 0)
      star(theta - j * 0.5 - i * 0.5)
      pop()
    }
  }
  star(theta)
  theta += 0.02
}
function star(theta) {
  beginShape()
  scale(0.5)
  vertex(-100, -100)
  vertex(0, -50 * sin(theta) - 50)
  vertex(100, -100)
  vertex(50 * sin(theta) + 50, 0)
  vertex(100, 100)
  vertex(0, 50 * sin(theta) + 50)
  vertex(-100, 100)
  vertex(-50 * sin(theta) - 50, 0)
  endShape()
}
