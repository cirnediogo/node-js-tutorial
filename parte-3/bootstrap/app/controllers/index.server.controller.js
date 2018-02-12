exports.render = function (req, res) {
  res.send('Hello World');
};

/*

Controller for index ("/").

What you do here is using the CommonJS module pattern
to define a function named render(). Later on, you'll be able to require this module
and use this function. Once you've created a controller, you'll need to use Express
routing functionality to utilize the controller.

*/