var request = require('request');

var routes = function (app) {
  app.get('/search', function(req, res) {

    request.post('https://api.soundcloud.com/tracks?client_id=e56e1b98619fbae9e4bc1c7e0e83e050', function(error, response, body) {
      console.log(body);
      res.json(body);
    });
  });
}

module.exports = routes;