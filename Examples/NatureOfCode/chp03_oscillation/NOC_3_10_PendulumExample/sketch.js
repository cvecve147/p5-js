// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Pendulum

// A simple pendulum simulation
// Given a pendulum with an angle theta (0 being the pendulum at rest) and a radius r
// we can use sine to calculate the angular component of the gravitational force.

// Gravity Force = Mass * Gravitational Constant;
// Pendulum Force = Gravity Force * sine(theta)
// Angular Acceleration = Pendulum Force / Mass = gravitational acceleration * sine(theta);

// Note this is an ideal world scenario with no tension in the
// pendulum arm, a more realistic formula might be:
// Angular Acceleration = (g / R) * sine(theta)

// For a more substantial explanation, visit:
// http://www.myphysicslab.com/pendulum1.html
let pendulum;

function setup() {
  createCanvas(640, 360);
  // Make a new Pendulum with an origin position and armlength
  pendulum = new Pendulum(width / 2, 0, 175);
}

function draw() {
  background(51);
  pendulum.update();
  pendulum.drag(); // for user interaction
  pendulum.display();
}

function mousePressed() {
  pendulum.clicked(mouseX, mouseY);
}

function mouseReleased() {
  pendulum.stopDragging();
}