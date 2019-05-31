var express = require('express');
var path = require('path');
var app = express();

var stateController = require('../controllers/stateController');
var parkController = require('../controllers/parkController');
var desigController = require('../controllers/desigController');
var searchController = require('../controllers/searchController');

// set up template engine
app.set('view engine', 'ejs');

// Middleware for static files, pass in path to folder in express.static()
app.use(express.static('../assets'));

app.get('/', function(req, res) {
  res.render('index');
});

// fire controllers
stateController(app);
parkController(app);
desigController(app);
searchController(app);

app.listen(process.env.PORT || 5000);
