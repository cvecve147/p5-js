function preload(){

}
var xx=100;
var xy=200;
var url_iss = "http://api.open-notify.org/iss-now.json";
function setup(){
  var map = L.map('mapid').setView([0, 0], 2);
  var attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  var tile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution });
  tile.addTo(map);

  L.marker([0, 0]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  p = createP("ISS");
  p.style("z-index", 1000);
  setInterval(lj, 1000);  // 持續讀取
  q = createP("iss_position");
}
var issx;
var issy;
function lj(){
  loadJSON(url_iss, askiss, 'jsonp');
}
function askiss(data){
  let px = float(data.iss_position.longitude);
  let py = float(data.iss_position.latitude);
  console.log(px);
  issx = map(px, -180, 180, 0, 800);
  issy = map(py, -90, 90, 0, 400);
   q.html("Long: "+px + "  Lat: " + py);
   q.position(0, 500);
//   p.html(data.longitude.longitude+" "+data.position.latitude)
}
function draw(){
   p.position(issx, issy);
}
