// server.js

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/public'));

io.on('conection', function(socket){
	console.log('a user connected');
	socket.emit('connected', 'why connected me?')
});

http.listen(3000, function(){
	console.log('listening on : 3000');
});