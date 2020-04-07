function setup() {
  createCanvas(800, 600)
  fill(245, 123, 158)
  textSize(50)
}
let x, y
x = y = 100
function draw() {
  background(200)
  if (keyIsPressed) {
    if ("ArrowRight" == key) {
      x += 5
    } else if ("ArrowUp" == key) {
      y -= 5
    } else if ("ArrowLeft" == key) {
      x -= 5
    } else if ("ArrowDown" == key) {
      y += 5
    }
  }

  rect(x, y, 50, 50) // Display last key pressed.
}
