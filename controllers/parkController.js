var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
var parks = require('../assets/parks.json').data;
var campgrounds = require('../assets/campgrounds.json').data;
var visitors = require('../assets/visitor.json').data;


module.exports = function(app){ // app is from app.js (var app = express();)
  app.get('/parks/:park', function(req, res){
    res.render('park', {
      parkInfo: parks,
      code: req.params.park,
      campInfo: campgrounds,
      visitorInfo: visitors
    });
  });
};
