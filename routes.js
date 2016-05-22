var Message = require('./app/models/message.js')

module.exports = function(app) {

  app.get('/', function(req, res){
    console.log(Message)
    Message.find({}, function(err, messages){
      if (err){
        console.log(err)
      }
      console.log(messages)
      res.render('index', {messages: messages})
    })
  })

}
