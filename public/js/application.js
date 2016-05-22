var socket = io();
$(document).ready(function(){
  $("#typing").hide()
  var username = "anonymous"
  // socket.emit('chat message', "user has connected");
  $('form#chat').on('submit', function(event){
    event.preventDefault()
    var message = username + ": " + $('#m').val()
    socket.emit('chat message', message);
    $('ul#messages').append('<li>' + message + '</li>')
    onRowAdded()
    $('#m').val('');
  })

  onRowAdded = function() {
    $('ul#messages').animate({scrollTop: $('ul#messages').prop('scrollHeight')});
  };

  socket.on('chat message', function(message){
    $('ul#messages').append('<li>' + message + '</li>')
  })

  $("input#m").data('oldVal', $(this).val());

  // // Look for changes in the value
  // $('input#m').bind("propertychange change click keyup input paste", function(event){
  //    // If value has changed...
  //    if ($(this).data('oldVal') != $(this).val()) {
  //     // Updated stored value
  //     $(this).data('oldVal', $(this).val());
  //
  //     socket.emit('typing', username + "is typing")
  //   }
  // });

  // socket.on('typing', function(message){
  //   $('ul#messages').append('<li>' + message + '</li>')
  // })



  $('form#username').on('submit', function(event){
    event.preventDefault()
    username = $("input#name").val()
  })

})
