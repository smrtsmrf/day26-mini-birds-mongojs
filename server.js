var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;

var app = express();
app.use(bodyParser.json());

var port = 3000;

var db = mongojs('birds');

var sightings = db.collection('sightings');

app.post('/api/sighting', function(req, res) {
  // console.log('POST sighting');
  // res.end();
  sightings.insert(req.body, function(err, sighting) {
    res.send(sighting);
  });
});
 
app.get('/api/sighting', function(req, res) {
  // console.log('GET sighting');
  // res.end();
  sightings.find({status: req.query.status}, function (err, sightings) {
  	res.send(sightings)
  })
});
 
app.delete('/api/sighting', function(req, res) {
  // console.log('DELETE sighting');
  // res.end();
  sightings.remove({_id: ObjectId(req.query.id)}, function (err, sighting) {
  	res.send(sighting)
  })

});
 
app.put('/api/sighting', function(req, res) {
  // console.log('PUT sighting');
  // res.end();
  sightings.update({_id: ObjectId(req.query.id)}, {$set: {order: req.body.order}}, function (err, sighting) {
  	res.send(sighting);
  })
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
