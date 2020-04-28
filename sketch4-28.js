const mappa = new Mappa("Leaflet")
let mymap
const api_url = "https://api.wheretheiss.at/v1/satellites/25544"

let canvas
let issImg
const options = {
  lat: 0,
  lng: 0,
  zoom: 1.5,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
}
let x = 0
let y = 0

function preload() {
  // issImg = loadImage("iss200.png") // 太空站的小圖示
}

function setup() {
  canvas = createCanvas(800, 600)
  mymap = mappa.tileMap(options) // 宣告 mappa 地圖
  mymap.overlay(canvas) // 疊在 canvas 上
  getData()
  setInterval(getData, 1000)
}

function getData() {
  loadJSON(api_url, gotData) // callback function: gotData
}

function gotData(data) {
  console.log(data)
  const pix = mymap.latLngToPixel(data.latitude, data.longitude) // GPS 對應 畫面 x, y
  x = pix.x
  y = pix.y
}

function draw() {
  clear()
  ellipse(x, y, 20)
}
