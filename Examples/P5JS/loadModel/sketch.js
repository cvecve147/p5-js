let teapot;
let img;
function preload() {
  // Load model with normalise parameter set to true
  teapot = loadModel('bugatti.obj', true);
  img = loadImage('mesh.jpeg');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
  directionalLight(255, 0, 200, -1, 0, 0);
}

function draw() {
  background(200);
  // scale(0.4); // Scaled to make model fit into canvas
  // // rotateX(frameCount * 0.01);
  // // rotateY(frameCount * 0.01);
  rotateY(mouseX / width * TWO_PI);
  rotateX(mouseY / height * TWO_PI);
  //normalMaterial(); // For effect
  // texture(img)
  model(teapot);
}
