var spaceStation;
var issX  =0;
var issY = 0;
var url = "http://api.open-notify.org/iss-now.json";
var issData;
function setup(){
   createCanvas(600, 400);
   //setInterval(getData, 1000);
   issData = loadJSON(url);
}
function iss(data){
    print("data");
    var long = data.iss_position.longitude;
    var lat = data.iss_position.latitude;
    issX = map(lat, -90, 90, 0, width);
    issY = map(long, -90, 90, 0, height);
    print(long + " " + lat);
 }
function getData(){
   print( "getdata");
   loadJSON(url, iss);
   print("load");
 }
x = 0;
function draw(){
  background(0);
  fill(255);
  ellipse(issX, issY, 24, 24);
  line(x, 0, x, height);
  x = (x+1)%width;
}
