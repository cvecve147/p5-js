function setup() {
  createCanvas(800, 600, WEBGL)
  // beginShape()
  // for (let i = 0; i < width; i += 10) {
  //   y = random(100, 200)
  //   vertex(i, y)
  // }
  // endShape()
  // let xoff = 0.0
  // beginShape()
  // for (let x = 0; x < width; x += 10) {
  //   y = 200 + 100 * noise(xoff)
  //   vertex(x, y)
  //   xoff += 0.1
  // }
  // endShape()
  let xoff = 0.0
  colorMode(HSB, 255)
}
let xoff = 0.0,
  toff = 0.0
function draw() {
  for (let i = 0; i < width; i++) {
    c = random(0, 255)
    c = noise(xoff, toff) * 255
    stroke(c, 200, 200)
    line(i, 0, i, 600)
    xoff += 0.02
  }
  toff = 0.005
}
