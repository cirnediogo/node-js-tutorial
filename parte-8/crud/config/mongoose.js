var config = require('./config');
var mongoose = require('mongoose');

exports.configure = function () {
  var db = mongoose.connect(config.db);
  require('../app/models/users.server.model');
  require('../app/models/article.server.model');
  return db;
};