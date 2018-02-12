var connect = require('connect');
var app = connect();

var logger = function (req, res, next) {
  console.log(req.method, req.url);
  next();
};

var helloWorld = function (req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
};

app.use(logger);
app.use(helloWorld);
app.listen(3000);
console.log('Server running at http://localhost:3000/');

/*

Connect's dispatcher initiates the process, moving on to the
next handler using the next() method, until it gets to middleware responding with
the res.end() method, which will end the request handling.

Using the app.use() method, you'll be able to set a series of
middleware functions that will be executed in a row to achieve maximum flexibility
when writing your application.

*/