var app    = require('express')() ;
var server = require('http').Server(app);
var io     = require('socket.io')(server);

server.listen(8045);

io.on('connection',function(socket){
    console.log('Ready to accept and pass messages.');

    socket.on('message',function(msg){
        console.log('Message Received ' +  msg["lng"] + ', ' + msg["lat"]);
        io.emit('msgr',{'lng':msg["lng"], 'lat': msg["lat"]});
    });
});