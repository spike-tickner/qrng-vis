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

var data = qrand.getRandomHexOctets(16, function(err, octets) {
  console.log(octets.join(''));
});

app.get('/qrng', function(request, response){
    // run your request.js script
    // when index.html makes the ajax call to www.yoursite.com/request, this runs
    // you can also require your request.js as a module (above) and call on that:
    response.send(data); // try response.json() if getList() returns an object or array
});

// start the app
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});