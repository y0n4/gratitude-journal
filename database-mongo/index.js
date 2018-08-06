var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

//tabe template
var itemSchema = mongoose.Schema({
  name: String,
  gratitude: Array
});

//table name is item
var Item = mongoose.model('Item', itemSchema);

//fetch info from database schema table
var selectAll = function(callback) {
  Item.find({}, function(err, items) { //stuff from first paramenter {}
    if(err) {
      callback(err, null);
    } else {
      callback(null, items); //return server info
    }
  });
};

//store info into database schema table
var save = function(userInfo, callback) {
  //instantiate schema database Item
  var journalInfo = new Item({
    name: userInfo.name,
    gratitude: userInfo.gratitude
  });

  journalInfo.save(function(err) {
    if(err) {
      console.log('error');
    } else {
      console.log('journal is saved!')
    }
  });
}

//update database?
var update = function(userInfo, callback) {
  Item.update(
    { name: userInfo.name },
    { $set: { gratitude: userInfo.gratitude }},
    function(err, raw) {
      if (err) {
        res.send(err);
      }
      res.send(raw);
  });
}

module.exports.save = save; //use func in server to 'post' information
module.exports.selectAll = selectAll; //use function in server to 'get' information