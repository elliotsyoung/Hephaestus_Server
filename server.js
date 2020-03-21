const express = require('express');
const app = express();
const server = require('http').createServer(app);
app.set('port', process.env.PORT || 3000);
const io = require(__dirname + '/socketio_custom_setup.js');

app.use(express.static(__dirname + "/build"))

app.use("/public", express.static(__dirname + "/public"))

server.listen(app.get('port'), function() {
  console.log(`listening on ${app.get('port')}`);
});
io.attach(server); //activates websockets for server.
