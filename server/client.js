var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var request = require('request')

// var op = '';
var portName = process.argv[2];

var myPort = new SerialPort(portName, {
   baudRate: 9600,
   // look for return and newline at the end of each data packet:
   parser: serialport.parsers.readline("\n")
 });

myPort.on('open', showPortOpen);
myPort.on('data', sendSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.options.baudRate);
}
 
function sendSerialData(data) {
   console.log(data);
   // op = data;
   request('http://52.11.17.233/value/'+data, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    // console.log() // Show the HTML for the Google homepage.
	    console.log(body);
	  }
	})
   
}
 
function showPortClose() {
   console.log('port closed.');
}
 
function showError(error) {
   console.log('Serial port error: ' + error);
}
