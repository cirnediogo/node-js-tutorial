exports.index = function (app) {
  var hello = require('../controllers/index.server.controller');
  app.get('/', hello.render);
};