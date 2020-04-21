// This function handles an incoming "request"
// And sends back out a "response";
let handleRequest = function (request, response) {
  // response.writeHead(200, {'Content-Type': 'text/plain'});
  // response.end('Hello World\n');
};

// HTTP module
let http = require('http');

// Create a server with the handleRequest callback
let server = http.createServer(handleRequest);
// Listen on port 8080
server.listen(8080);

console.log('Server started on port 8080');

let io = require('socket.io').listen(server);
io.sockets.on('connection',
  function (socket) {
    console.log("We have a new client: " + socket.id);
    socket.on('disconnect', function() {
      console.log("Client has disconnected");
      });
    socket.on('mouse', function(data){
      console.log("Received: 'mouse '" + data.x + " " + data.y);
      socket.broadcast.emit('mouse', data);
      // data.x += 10; data.y += 20;
      io.sockets.emit('mouse', data);
      });
  });
