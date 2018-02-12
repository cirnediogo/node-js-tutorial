/*
	Notice how the Mongoose module is required and connected to the MongoDB
instance using the db property of your configuration object.
*/
var config = require('./config');
var mongoose = require('mongoose');

exports.configure = function () {
  var db = mongoose.connect(config.db);
  /*
  The user.server.model.js file is included in order to register the User model.
  */
  require('../app/models/users.server.model');
  return db;
};