var img;
function preload(){

}

function setup(){
  createCanvas(200, 200);
  background(0);
  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);
}
function gotFile(file){
  createP(file.name + "..size: " + file.size);
  var img = createImg(file.data);
  img.size(200, 200);
}
function highlight(){
  dropzone.style('background-color', 'lightgrey');
}
function unhighlight(){
  dropzone.style('background-color', 'white');
}

function draw(){
}
