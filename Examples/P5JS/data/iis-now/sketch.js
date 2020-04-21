var issx, issy;
function preload(){

}
var issurl = "http://api.open-notify.org/iss-now.json";
function setup(){
   createCanvas(800, 600);
   setInterval(ask, 1000);
   stroke(255);
}
function ask(){
  loadJSON(issurl, getData);
}
function getData( data ){
  var lo = data.iss_position.longitude;
  var la = data.iss_position.latitude;
  issx = map(la, -80, 80, 0, height);
  issy = map(lo, -179, 179, 0, width);
}
var t1 = 10;
function draw(){
  background(0);
  line(t1, 0, t1, height);
  t1 = (t1+1)%width;
  ellipse(issx, issy, 20, 20);
}
