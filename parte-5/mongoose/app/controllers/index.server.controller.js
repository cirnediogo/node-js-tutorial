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