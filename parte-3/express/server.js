var express = require('express');
var app = express();

app.use('/', function (req, res, next) {
  console.log("query:" + req.query);
  console.log("params:" + req.params);
  console.log("body:" + req.body);
  console.log("path:" + req.path);
  console.log("hostname:" + req.hostname);
  console.log("ip:" + req.ip);
  console.log("cookies:" + req.cookies);
  res.send('Hello World');
});
app.listen(3000);

console.log('Server running at http://localhost:3000/');
module.exports = app;

/*

The Express framework is a small set of common web application features. 
Its features extend Connect to allow a variety of common
web applications' use cases.

app.use() method is used to mount a middleware
function, which will respond to any HTTP request made to the root path. 

res.send() method is then used to send the response back using the Connect res.end() method.

*/