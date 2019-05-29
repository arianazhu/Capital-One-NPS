var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});

var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb+srv://test:test@parkinfo-lpisn.mongodb.net/test?retryWrites=true', {useNewUrlParser: true });


// Create schema - this is like a blueprint
var parkSchema = new mongoose.Schema({
  states: String,
  latLong: String,
  description: String,
  designation: String,
  parkCode: String,
  id: String,
  directionsInfo: String,
  directionsUrl: String,
  fullName: String,
  url: String,
  weatherInfo: String,
  name: String
});

// Create model and base it on Schema
var Park = mongoose.model('Park', parkSchema);

// // Creating an item to add to database
// var item = Park({states: 'CA', latLong: '12:21'}).save(function(err){
//   if (err) throw err;
//   console.log('item saved');
// });



var parks = require('../assets/parks.json').data;

module.exports = function(app){ // app is from app.js (var app = express();)
  app.get('/find-by-state', function(req, res){
    res.render('state');
    // // Get data from MongoDB and pass it to the view
    // Park.find({}, function(err, data){ // empty bracket means all items, can also specify one item like {states: "CA"}
    //   if (err) throw err;
    //   res.render('state', {parks: data});
    // });
  });

  app.post('/find-by-state', urlencodedParser, function(req, res) {
    res.render('state-success', {data: req.body, parkInfo: parks});
  });
};
