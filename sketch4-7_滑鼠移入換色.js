function setup() {
  createCanvas(800, 600)
}
function draw() {
  background(220)

  if (dist(mouseX, mouseY, 100, 100) < 25) {
    fill(255, 0, 0)
  } else {
    fill(255)
  }
  ellipse(100, 100, 50)
  if (mouseX >= 300 && mouseX <= 450 && mouseY >= 100 && mouseY <= 150) {
    fill(255, 0, 0)
  } else {
    fill(255)
  }
  rect(300, 100, 50, 50)
  //滑鼠畫圖
  // if (mouseIsPressed) {
  //     if (mouseButton == LEFT) {
  //       line(pmouseX, pmouseY, mouseX, mouseY)
  //     } else if (mouseButton == RIGHT) {
  //       noStroke()
  //       fill(220)
  //       rect(mouseX, mouseY, 10, 10)
  //     }
  //   }
}
