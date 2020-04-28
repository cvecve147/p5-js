function preload() {
  let result =
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/" +
    "summary/all_day.geojson"
  earthquakes = loadJSON(result)
}
let max = 0
function setup() {
  createCanvas(800, 600)
  console.log(earthquakes)
}
function draw() {
  background(220)
  let earthquakeMag = earthquakes.features[0].properties.mag
  let earthquakeName = earthquakes.features[0].properties.place
  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10)
  textAlign(CENTER)
  text(earthquakeName, 0, height - 30, width, 30)
}
