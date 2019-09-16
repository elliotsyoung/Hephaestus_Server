var io = require('socket.io')();

io.on('connection', function(socket) {
  console.log("New Socketio Connection:" + socket.id);
});

module.exports = io;
