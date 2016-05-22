var express = require('express')
var app = express()
var routes = require('./routes.js')(app)
var Message = require('./app/models/message.js')
var http = require('http').Server(app)
var io = require('socket.io')(http);
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost/webchat');



http.listen(3000, function(){
  console.log('listening on *:3000')
})

io.on('connection', function(socket){
  console.log('user connected')
  socket.on('chat message', function(message){
    var newMessage = new Message
    newMessage.body = message
    newMessage.save
    Message.find({}, function(err, msg){
      console.log(msg)
    })
    socket.broadcast.emit('chat message', message)
  })
  socket.on('typing', function(message){
    socket.broadcast.emit('typing', message)
  })
  socket.on('disconnect', function(){
    console.log('user disconnected')
  })
})

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
