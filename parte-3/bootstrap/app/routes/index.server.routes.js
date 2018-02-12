exports.index = function (app) {
  var controller = require('../controllers/index.server.controller');
  app.get('/', controller.render);
};

/*

CommonJS module pattern supports both the exporting of several
functions and the use of a single module function.

The router requires the index controller and used its render()
method as a middleware to GET requests made to the root path.

*/