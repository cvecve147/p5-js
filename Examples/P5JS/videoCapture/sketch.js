let capture;
function setup() {
  createCanvas(400, 300, WEBGL);
  capture = createCapture(VIDEO);

  capture.size(300, 200);
  capture.hide();
}

function draw() {
  background(255);
  texture(capture);
  rotateX(mouseY/height*TWO_PI);
  rotateY(mouseX/width*TWO_PI);
  box(100);

  //image(capture, 0, 0, width, height);
}

function funcx(){
  //var canvas1 = document.getElementById('defaultCanvas');

  canvas.toBlob(function(blob) {
  var newImg = document.createElement('img'),
  url = URL.createObjectURL(blob);
  var fr = new FileReader();
  fr.readAsDataURL(blob);
  fr.onload = function(){
    console.log(fr.result);
  }
  newImg.onload = function() {
    // no longer need to read the blob so it's revoked
    URL.revokeObjectURL(url);
  };

  newImg.src = url;
  document.body.appendChild(newImg);
});
}
