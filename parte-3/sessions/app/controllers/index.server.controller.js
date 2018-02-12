exports.render = function (req, res) {
//  res.send('Hello World');

  if (req.session.lastVisit) {
    console.log("last visit: " + req.session.lastVisit);
  }
  req.session.lastVisit = new Date();

  res.render('index', {
    title: 'Hello World'
  })
};

/*

The session middleware adds a
session object to all request objects in your application. Using this session object,
you can set or get any property that you wish to use in the current session. To

*/