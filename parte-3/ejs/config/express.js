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

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  var route = require('../app/routes/index.server.routes.js');
  route.index(app);
  
  app.use(express.static('./public'));

  return app;
};

/*

In order to configure the Express view system, you will need to use the EJS template
engine. Notice how we use the app.set() method to configure the Express application
views folder and template engine.

In any web application, there is always a need to serve static files.
The express.static() middleware takes one argument to determine the location of
the static folder. Notice how the express.static() middleware is placed below the
call for the routing file. This order matters because if it were above it, Express would
first try to look for HTTP request paths in the static files folder. This would make the
response a lot slower as it would have to wait for a filesystem I/O operation.

*/