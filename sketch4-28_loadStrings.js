function preload() {}
function setup() {
  createCanvas(800, 600)
}
function draw() {
  background(220)
}
async function mousePressed() {
  result = await loadStrings("./1.txt", pl)
}
function pl() {
  for (let i = 0; i < result.length; i += 2) {
    console.log(result[i])
  }
}
