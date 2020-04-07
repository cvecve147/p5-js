function setup() {
  createCanvas(800, 600)
}
function draw() {
  background(220)
  //
  if (toggle) fill(255, 0, 0)
  else fill(255)
  ellipse(100, 100, 50)
}
toggle = true
function mousePressed() {
  if (dist(mouseX, mouseY, 100, 100) < 25) {
    toggle = !toggle
  }
}
