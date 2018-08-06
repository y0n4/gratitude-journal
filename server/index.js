//server
var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo'); //database

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //?

//get request
app.get('/items', function (req, res) {
  //selectAll func from /database/index.js to fetch
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data); //same as res.end()??
    }
  });
});

//post request
app.post('/items', function (req, rest) { //callback func
  console.log(req.body);
  var gratitudeInfo = req.body; //has info of name and array of 3 things he/she is thankful about

  //call save func to pass this data into database
  items.save(gratitudeInfo);
});

//put request
app.put('/items', function (req, res) {
  var gratitudeInfo = req.body;

  console.log('gotta implement put request l8r');
  //call update func to pass this data into database
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
