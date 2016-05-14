var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Create routes
var routes = require('./routes')(app);


// create PORT
var port = process.env.PORT || 3055;
var server = app.listen(port, function () {
  var dPort = server.address().port;
  console.log("SongForYou is running on port: ", dPort);
});