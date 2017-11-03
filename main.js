var http = require('http');
var qrand = require('./lib/qrand.js');
var qrand = require('./lib/qrand.js');

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	qrand.getRandomInt(1, function(err, ints) {
		console.log(ints.join(''));
	});
}).listen(5000);

//https://qrng.anu.edu.au/API/jsonI.php?length=[array length]&type=[data type]&size=[block size]