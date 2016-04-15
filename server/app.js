// var serialport = require('serialport');
// var SerialPort = serialport.SerialPort;
var port    = process.env.PORT || 8080;
var path    = require('path');
var express = require('express');
var app = express();
var io = require('socket.io').listen(app.listen(port));
var op = '';
var portName = process.argv[2];



app.use(express.static(path.join(__dirname, '../resources/public')));
app.set('views', path.join(__dirname, '../resources/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// var myPort = new SerialPort(portName, {
//    baudRate: 9600,
//    // look for return and newline at the end of each data packet:
//    parser: serialport.parsers.readline("\n")
//  });

// myPort.on('open', showPortOpen);
// myPort.on('data', sendSerialData);
// myPort.on('close', showPortClose);
// myPort.on('error', showError);

// function showPortOpen() {
//    console.log('port open. Data rate: ' + myPort.options.baudRate);
// }
 
// function sendSerialData(data) {
//    console.log(data);
//    // op = data;
//    io.emit('value', data);
// }
 
// function showPortClose() {
//    console.log('port closed.');
// }
 
// function showError(error) {
//    console.log('Serial port error: ' + error);
// }

// app.listen(port);
console.log("server running on port "+port);

app.get('/', function(req, res){
	res.render('index.html');

})

app.get('/value/:val', function(req, res) {
   console.log(req.params.val);
   io.emit('value', req.params.val);
   res.sendStatus(200);
})

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
    
  });
});
