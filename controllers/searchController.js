var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
var parks = require('../assets/parks.json').data;

module.exports = function(app){ // app is from app.js (var app = express();)
  app.get('/search', function(req, res){
    res.render('search');

  });

  app.post('/search', urlencodedParser, function(req, res) {
    res.render('search-success', {data: req.body, parkInfo: parks});
  });
};
