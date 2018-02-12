process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var express = require('./config/express');

/*
	To initialize the Mongoose configuration,
Mongoose configuration must be created before Express 
so that the models can be used.
	This is important since any module that is loaded
after this module will be able to use the models without 
loading it by itself.
*/
var db = mongoose.configure();
var app = express.configure();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');