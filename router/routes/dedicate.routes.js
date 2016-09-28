var express = require('express');
var router = express.Router();
var dedicateModel = require('./../../app/models/dedicate.models');

router.post('/', function(req, res) {

  dedicateModel.create(req.body, function(err, result) {
    if (!err) {
      res.location('/api/dedicate/'+ result._id);
      res.sendStatus(201);
    } else {
      res.sendStatus(500);
    }
  });
  
});

router.get('/:id', function(req, res) {
  dedicateModel.getById(req.params.id, function(err, result) {
    if (!err) {
      // res.sendStatus(201);
      res.json(result);
    } else {
      res.sendStatus(500);
    }
  })
});

module.exports = router;
