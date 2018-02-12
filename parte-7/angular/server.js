process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

// Mongoose configuration must be created before Express 
// so that the models can be used.
var db = mongoose.configure();
var app = express.configure();
var passport = passport.configure();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');