var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
var parks = require('../assets/parks.json').data;
var campgrounds = require('../assets/campgrounds.json').data;
var visitors = require('../assets/visitor.json').data;
var alerts = require('../assets/alerts.json').data;
var articles = require('../assets/articles.json').data;
var events = require('../assets/events.json').data;
var news = require('../assets/news.json').data;
var lessons = require('../assets/lessons.json').data;
var people = require('../assets/people.json').data;
var places = require('../assets/places.json').data;


module.exports = function(app){ // app is from app.js (var app = express();)
  app.get('/parks/:park', function(req, res){
    res.render('park', {
      parkInfo: parks,
      code: req.params.park,
      campInfo: campgrounds,
      visitorInfo: visitors,
      alertInfo: alerts,
      articleInfo: articles,
      eventInfo: events,
      newsInfo: news,
      lessonInfo: lessons,
      peopleInfo: people,
      placeInfo: places
    });
  });
};
