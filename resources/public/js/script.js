var socket = io();
socket.on('value', function(data){
	var x = data.split(' ');
    $('#data-list').append($('<li class="list-group-item">').text('Power: '+x[0]+' KW'));
    $('#data-list').append($('<li class="list-group-item">').text('Duration: '+x[1]+ ' Hours'));
    $('#data-list').append($('<li class="list-group-item">').text('Cost: '+x[2] +' INR'));

    $('#data-list').append($('<li class="list-group-item">').text(''));
  });
