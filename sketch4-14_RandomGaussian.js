let points = []
function setup() {
  createCanvas(800, 600, WEBGL)
  for (let x = 0; x < width; x++) {
    points.push(0)
  }
}
function draw() {
  background(220)
  translate(-width / 2, -height / 2)
  points[ceil(randomGaussian(50, 30))] += 10
  for (let x = 0; x < width; x++) {
    line(x * 4, height, x * 4, height - points[x])
  }
}
