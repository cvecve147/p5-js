let capture;
let cam;
let t = 0;
function setup() {
  createCanvas(400, 300, WEBGL);

  // capture = createCapture(VIDEO);
  // capture.size(300, 200);
  // capture.hide();
  cam = createCamera();
  cam.camera(0, 0, 0, 0, 0, 0, 0, 1, 0);
  setCamera(cam);
  noStroke();
}

function draw() {
  background(255);

  // texture(capture);
  // rotateX(mouseY/height*TWO_PI);
  // rotateY(mouseX/width*TWO_PI);
  cam.setPosition(mouseX/height*200, mouseY/height*200, 500);
  cam.lookAt(0, 0, 0);
  cam.perspective(PI/3, width/height, 10, 1500);
  cam.tilt(0.5*sin(t));
  t+=0.01;
  directionalLight(255, 255, 255, -1, 0, -1);
  ambientMaterial(255, 0, 200);
  torus(100, 30);;

  //image(capture, 0, 0, width, height);
}
