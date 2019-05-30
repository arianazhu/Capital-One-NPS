var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
var parks = require('../assets/parks.json').data;

module.exports = function(app){ // app is from app.js (var app = express();)
  app.get('/find-by-designation', function(req, res){
    res.render('designation');

  });

  app.post('/find-by-designation', urlencodedParser, function(req, res) {
    res.render('desig-success', {data: req.body, parkInfo: parks});
  });
};
