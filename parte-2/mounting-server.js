var connect = require('connect');
var app = connect();

var logger = function (req, res, next) {
  console.log(req.method, req.url);
  next();
};

var helloWorld = function (req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello World');
  res.end();
};

var goodbyeWorld = function (req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Goodbye World');
};

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.listen(3000);
console.log('Server running at http://localhost:3000/');

/*

Connect middleware supports a feature called mounting,
which enables you to determine which request path is required for the middleware
function to get executed.

*/