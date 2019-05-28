var express = require('express');
var path = require('path');
var app = express();
var stateController = require('../controllers/stateController');

// set up template engine
app.set('view engine', 'ejs');

// Middleware for static files, pass in path to folder in express.static()
app.use(express.static('../assets'));

app.get('/', function(req, res) {
  res.render('index');
});


// fire controllers
stateController(app);

// ========
// STATE CONTROLLER (get, post)
// ========
// app.get('/find-by-state', function(req, res) {
//   console.log('error');
//   res.render('state', {qs: req.query});
// });
//
// app.post('/find-by-state', urlencodedParser, function(req, res) {
//   console.log(req.body);
//   res.render('state-success', {data: req.body});
// });

app.get('/find-by-designation', function(req, res) {
  res.render('designation');
});

app.get('/search', function(req, res) {
  res.render('search');
});


app.listen(3000);

// // Read/write a file
// var fs = require('fs');
//
// var parkInfo = fs.readFileSync('../textfiles/parkInfo.txt', 'utf8');
//fs.writeFileSync('new.txt', parkInfo);

// var events = require('events');
//
// // EMITS
// // var myEmitter = new events.EventEmitter();
// // myEmitter.on('someEvent', function(msg){
// //   console.log(msg);
// // });
// //
// // myEmitter.emit('someEvent', 'the event was emitted');
//
// // REQUIRE
// var util = require('util');
//
// var Person = function(name) {
//   this.name = name;
// };
//
// util.inherits(Person, events.EventEmitter);
//
// var james = new Person('james');
// var mary = new Person('mary');
//
// var people = [james, mary];
//
// people.forEach(function(person) {
//   person.on('speak', function(msg) {
//     console.log(person.name + ' said: ' + msg);
//   });
// });
//
// james.emit('speak', "hey i'm james");
// mary.emit('speak', "hey i'm mary");
