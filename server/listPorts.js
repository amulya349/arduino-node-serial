var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

// list serial ports:
serialport.list(function (err, ports) {
	console.log("ports: "+ports);
  ports.forEach(function(port) {
    console.log(port);
  });
});