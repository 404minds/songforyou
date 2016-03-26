var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// create PORT
var port = process.env.PORT || 3011;
var server = app.listen(port, function () {
	var dPort = server.address().port;
	console.log("Song 4 u is running on port: ", dPort);
});