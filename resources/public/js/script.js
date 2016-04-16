var socket = io();
socket.on('value', function(data){
	var x = data.split(' ');
    $('#data-list').append($('<li class="list-group-item">').text('Power: '+x[0]));
    $('#data-list').append($('<li class="list-group-item">').text('Duration: '+x[1]));
    $('#data-list').append($('<li class="list-group-item">').text('Cost: '+x[2]));

    $('#data-list').append($('<li class="list-group-item">').text(''));
  });