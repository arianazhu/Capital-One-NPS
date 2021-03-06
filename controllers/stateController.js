var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
var parks = require('../assets/parks.json').data;

module.exports = function(app){ // app is from app.js (var app = express();)
  app.get('/find-by-state', function(req, res){
    res.render('state');

  });

  app.post('/find-by-state', urlencodedParser, function(req, res) {
    res.render('state-success', {data: req.body, parkInfo: parks});
  });
};
