var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {
  var qs = {
    q: req.query.q,
    part: 'id,snippet',
    key: 'AIzaSyAnTwU5QdvU9ZaSv-eNUc5LHQG5BBKcWJ0',
    order: 'relevance',
  };

  request({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    qs: qs,
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  });

});

module.exports = router;
