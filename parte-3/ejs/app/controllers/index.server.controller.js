exports.render = function (req, res) {
//  res.send('Hello World');
  res.render('index', {
    title: 'Hello World'
  })
};

/*

Express has two methods for rendering views: app.render(), which is used to
render the view and then pass the HTML to a callback function, and the more
common res.render(), which renders the view locally and sends the HTML as
a response. You'll use res.render() more frequently because you usually want
to output the HTML as a response. However, if, for an instance, you'd like your
application to send HTML e-mails, you will probably use app.render().

Notice the way the res.render() method is used. The first argument is the name
of your EJS template without the .ejs extension, and the second argument is an
object containing your template variables. The res.render() method will use the
EJS template engine to look for the file in the views folder that we set in the 
config/express.js file and will then render the view using the template variables.

Inside index.ejs file, <%= %> tags are
the way to tell the EJS template engine where to render the template variables. 

*/