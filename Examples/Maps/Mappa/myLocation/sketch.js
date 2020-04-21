let myMap;
let canvas;
const mappa = new Mappa('Leaflet');

const options = {
  lat: 24.805058,
  lng: 120.971567,
  zoom: 14,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(640,640);
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas) 

  fill(200, 100, 100);

  myMap.onChange(drawPoint);
}

function draw(){
  // Clear the previous canvas on every frame
  // clear();

  // const nigeria = myMap.latLngToPixel(24.805058, 120.971567); 
  // ellipse(nigeria.x, nigeria.y, 20, 20);
}

function drawPoint(){
  // Clear the previous canvas on every frame
  clear();

  const hsinchu = myMap.latLngToPixel(24.805058, 120.971567); 
  ellipse(hsinchu.x, hsinchu.y, 20, 20);
}