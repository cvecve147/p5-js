var img;
function preload(){


}
var slider;
var label;
var inp;
function setup(){
   createCanvas(1, 1);

    createP("Hello World!");
    var b = createButton("clock");
    b.mouseClicked(clock);
    inp = createInput();
    inp.input(myEvent);
    label = createP();
}
function myEvent(){
  label.html(inp.value());
}
function clock(){
  var div = createDiv();
  div.style("width: 400px; height: 400px; background: lightyellow;");
  div.html("Clock!");
  div.id("divx");
  div.class("div");
}
var theta = 0;
var t1=0, t2=0;
var v = 0.02;
function draw(){
  // background(240);
  // translate(width/2, height/2);
  // rotate(theta);
  // scale(2, 1);
  // ellipse(0, 0, 100, 100);
  // theta+=0.1;
}
