var config = require('./config');
var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');

exports.create = function () {
  var app = express();

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  var route = require('../app/routes/index.server.routes.js');
  route.index(app);

  app.use(express.static('./public'));

  return app;
};

/*

The express-session module
will use a cookie-stored, signed identifier to identify the current user. To sign the
session identifier, it will use a secret string, which will help prevent malicious session
tampering. For security reasons, it is recommended that the cookie secret be different
for each environment, which means this would be an appropriate place to use the 
environment configuration file.

*/