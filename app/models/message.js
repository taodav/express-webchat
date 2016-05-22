var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');



var messageSchema = new mongoose.Schema({
  body: {type: String}
})

var Message = mongoose.model('Message', messageSchema)

module.exports = Message
