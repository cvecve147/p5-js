//  參考  http://single9.net/2017/12/node-js-%E8%88%87-socket-io-%E5%8D%B3%E6%99%82%E8%81%8A%E5%A4%A9%E5%AE%A4%E5%AF%A6%E4%BD%9C/amp/

const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/index.html');
  // res.send('Hello World!');
});
app.get('/index.html', (req, res)=> res.sendFile(__dirname+"/index.html"));

let onlineCount = 0;
// io.origins('http://192.168.1.213:3000');
// io.origins('http://192.168.1.213:8080');
io.on('connection', (socket)=>{
  onlineCount++;
  console.log('new Connect, total: ' + onlineCount);
  socket.on("disconnect", ()=>{
    onlineCount=(onlineCount<0)?0:onlineCount-=1;
    console.log('bye! disconnected');
    io.emit("online", onlineCount);
  });
  socket.on('greet', ()=>{
    io.emit("greet", "Hi! client.")
  });
  socket.on("send", (msg)=>{
    console.log('Message: '+ msg.name+"--"+msg.msg);
    io.emit("msg", msg);
  });
})

server.listen(3000, ()=>{
  console.log("Server started. http://localhost:3000");
});
