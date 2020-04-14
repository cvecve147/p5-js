function setup() {
  can = createCanvas(800, 600)
  ch1 = createCheckbox("123")
  ch2 = createCheckbox("456")
  a = createA("http://nuu.edu.tw", "nuu", "_blank")
  r1 = createRadio()
  rop1 = r1.option("1", 1)
  rop2 = r1.option("2", 2)
  rop3 = r1.option("3", 3)
  input = createInput("", "number")
  f1 = createFileInput(headle)
  drops = createDiv("file")
  drops.position(270, 150)
  drops.style("background-color", "lightgreen")
  drops.size(200, 200)
  drops.drop(headle)
  drops.mousePressed(clearimg)
  div = createDiv()
  div.size(900, 600)
  div.style("background-color", "lightgreen")
  can.parent(div)

  // can.drop(headle)
}
let img, imgname
function draw() {
  background(220)
  value = r1.value()
  if (img) {
    image(img, 0, 0, width, height)
  }
  if (imgname) {
    text(imgname, 5, 50)
  }
  text(value, 50, 50)
  if (ch1.checked()) {
    ellipse(50, 50, 50)
  }
}
function headle(e) {
  img = createImg(e.data, e.name)
  imgname = e.name
  console.log(imgname)

  img.hide()
}
function clearimg() {
  img = null
  imgname = null
}
