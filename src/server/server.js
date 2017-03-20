"use strict";

var express = require('express');
var path = require('path');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');
var passport = require('passport');
var config = require('./config/main');  

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

var mongoose = require('mongoose');
mongoose.connect(config.database);
var db = mongoose.connection;
mongoose.Promise = global.Promise;


require('./config/passport');


const jwtAuthGuard = passport.authenticate('jwt', { session: false })
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');

  app.use('/api', require('./users/router'));
 
  // all other routes are handled by Angular
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/../../dist/index.html'));
  });

  app.listen(app.get('port'), function() {
    console.log('Stead Authentication App Backend listening on port '+app.get('port'));
  });
});

module.exports = app;