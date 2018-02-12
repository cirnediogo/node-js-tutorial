var passport = require('passport');
var mongoose = require('mongoose');

exports.configure = function () {

  var User = mongoose.model('User');

  passport.serializeUser(
          function (user, done) {
            done(null, user.id);
          }
  );

  passport.deserializeUser(
          function (id, done) {
            User.findOne({
              _id: id
            }, '-password -salt', function (err, user) {
              done(err, user);
            });
          }
  );

  var localStrategy = require('./strategies/local.js');
  localStrategy.configure();

};