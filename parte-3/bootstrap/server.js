var express = require('./config/express');

var app = express.create();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');

/*

All the loose ends are connected by requiring
the Express configuration module and then using it to retrieve your application
object instance, and listen to the 3000 port.

*/