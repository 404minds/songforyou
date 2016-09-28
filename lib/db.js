var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/songforyou');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error'));
db.once('open', function() {
  console.log("connected to database");
});
