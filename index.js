//modified code works on web
"use strict";

const os = require("os");
const nodeStatic = require("node-static");
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const port = process.env.PORT || 3001;
app.use(cors());

app.get('/', function(req, res){
  res.send('Socket server is running-4');
});
var fileServer = new nodeStatic.Server();
const server = http.createServer(app, function (req, res) {
  fileServer.serve(req, res);
});

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  pingTimeout: 3000
});



io.on("connection", (socket) => {
  console.log('user connected', socket.id);

  socket.broadcast.emit('ping', {});

  socket.on('pong', (data)=>{
    console.log('pong recieved');
  })

  socket.on('coords', coords => {
    console.log(coords);
    socket.broadcast.emit('coords', coords)
  })

  socket.on('remove_object', object => {
    console.log(object);
    socket.broadcast.emit('remove_object', object)
  })

  socket.on('user_leave', message => {
    console.log(message);
  })
  
  socket.on("disconnect", () => {
    console.log("user disconnected with id:-" + socket.id);
  });
});
server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
