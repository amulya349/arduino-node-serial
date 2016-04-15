var socket = io();
socket.on('value', function(data){
    $('#data-list').append($('<li class="list-group-item">').text(data));
  });