function setup() {
  createCanvas(800, 600)
  center = createVector(width / 2, height / 2)
}
let center, mouse
function draw() {
  background(220)
  mouse = createVector(mouseX, mouseY)
  mouse.sub(center) //減vector
  w = mouse.mag() //計算vector長度
  rect(0, 0, w, 20)
  mouse.normalize().mult(30)
  translate(center.x, center.y)
  line(0, 0, mouse.x, mouse.y)
}
