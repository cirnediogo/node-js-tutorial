var users = require('../../app/controllers/users.server.controller');

exports.route = function (app) {
  app.route('/users').post(users.create).get(users.list);
  /* 
      In Express, adding a colon before a substring in a route definition means
  that this substring will be handled as a request parameter.
  */
  app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);
  
  /*
	  The app.param() method defines a middleware to be executed before any other middleware 
  that uses that parameter. Here, the users.userById() method will be executed before 
  any other middleware registered with the userId parameter (users.read(), users.update() 
  and users.delete()).
  */
  app.param('userId', users.userByID);
};

/*
	Since the Express application will serve mainly as a RESTful API for the AngularJS
application, it is a best practice to build the routes according to the REST principles.
In this case, the proper way to create a new user is to use an HTTP POST request to
the base users route as defined here.
*/
