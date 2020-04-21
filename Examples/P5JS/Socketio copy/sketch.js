let socket;
function setup() {
  createCanvas(400, 400);
	socket = io.connect("http://localhost:8080/");
  socket.on('mouse',function(data){
    fill(100, 0, 200, 100);
    noStroke();
    ellipse(data.x, data.y, 2, 2);
  })
}

function draw() {
  //background(220);
}

function mouseDragged() {
  // Make a little object with mouseX and mouseY
  let data = {
    x: mouseX,
    y: mouseY
  };
  // Send that object to the socket
  socket.emit('mouse',data);
}
