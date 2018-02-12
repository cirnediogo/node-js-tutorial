var express = require('express');

exports.create = function () {
  var app = express();
  var router = require('../app/routes/index.server.routes.js');
  router.index(app);
  return app;
};

/*

Express application object is created and bootstraped
using the controller and routing modules you just created.

CommonJS module pattern is used to define a create function that initializes the Express
application. First, it creates a new instance of an Express application, and then it
requires your routing file and calls it as a function passing it the application instance
as an argument. The routing file will use the application instance to create a new
routing configuration and will call the controller's render() method. The module
function ends by returning the application instance.

*/