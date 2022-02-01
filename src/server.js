const { Server } = require("socket.io");

const io = new Server({
  cors: {
    methods: ["GET", "POST"]
  }
});

const messages = [];

io.on("connection", (socket) => {
  socket.emit("previousMsgs", messages);

  socket.on("msg", (dataMsg) => {
    messages.push(dataMsg);
    socket.broadcast.emit("msg", dataMsg);
  });
});

console.log('Connection Established');

io.listen(3001);
