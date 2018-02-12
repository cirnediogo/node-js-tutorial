var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

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

  var route = require('../app/routes/index.server.routes.js');
  route.index(app);
  
  return app;
};

/*

The morgan module provides a simple logger
middleware, the compression module will provides response compression, the
body-parser module provides several middleware to handle request data, and the
method-override module provides DELETE and PUT HTTP verbs legacy support.

We simply used the
app.use() method to load the morgan() middleware in a development environment
and the compress() middleware in a production environment.

*/