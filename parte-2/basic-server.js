var http = require('http');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World');
});
server.listen(3000);
console.log('Server running at http://localhost:3000/');

/* 

In this example, the http module is used to create a small
web server listening to the 3000 port. You begin by requiring the http module and
use the createServer() method to return a new server object. The listen()
method is then used to listen to the 3000 port. Notice the callback function that is
passed as an argument to the createServer() method. 

The callback function gets called whenever there's an HTTP request sent to the web
server. The server object will then pass the req and res arguments, which contain
the information and functionality needed to send back an HTTP response.

writeHead() is used to set the response HTTP headers.

end() method is used to finalize the response. Another common way
of writing this is to add a write() method before the end() method and then
call the end() method, as follows:
res.write('Hello World');
res.end();

Fortunately, a company 
called Sencha has already created this scaffolding code for you in the form of a Node
module called Connect.

*/