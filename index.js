var http = require('http');
var express = require('express');
var qrand = require('qrand');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// routes
app.get('/', function(request, response) {
  response.render('pages/index');
});

//Grab QRNG Data
var baseInt = 'http://qrng.anu.edu.au/API/jsonI.php?type=uint8&size=1&length='
	
//var data = qrand.getRandomHexOctets(16, function(err, octets) {
//  console.log(octets.join(''));
//});

// Very basic number gen in place of ANU's QRNG while down
var num = 0;
num = require('request').Request;

function generate(min, max) {
	var num = Math.floor((Math.random() * max) + min);
	console.log('Random number generated: ' + num);
}

function startGen(min, max) {
	setInterval(function(){ generate(min, max)}, 3000);
}

// Start Generating
app.get('/qrng', function(request, response){
    // run your vis.js script
    // when index.ejs makes the ajax call to (current_url)/qrng, this runs
    // you can also require your vis.js as a module (above) and call on that:
	// try response.json() if getList() returns an object or array
	// Starts preiodic generation
	response.send(startGen(3, 12));
	//response.send(num); //depricated
});

// start the app
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
