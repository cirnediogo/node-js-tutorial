process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');

var app = express.create();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');

/*

Another robust feature of Express is the ability to configure your application
based on the environment it's running on. For instance, you may want to use the
Express logger in your development environment and not in production, while
compressing your responses body might seem like a good idea when running in a
production environment.

The process.env
is a global variable that allows you to access predefined environment variables,
and the most common one is the NODE_ENV environment variable. The NODE_ENV
environment variable is often used for environment-specific configurations.

*/