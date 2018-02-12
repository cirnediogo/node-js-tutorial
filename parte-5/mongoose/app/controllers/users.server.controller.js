/* Users controller that will handle all user-related operations. */
var mongoose = require('mongoose');
/*
    Mongoose module calls the model
method that will return the User model previously defined.
*/
var User = mongoose.model('User');

/*
	A controller method named create() is defined, which will later be used 
to create new users
*/
exports.create = function (req, res, next) {
  /*
    Using the new keyword, the create() method creates a new model instance, which
  is populated using the request body
  */
  var user = new User(req.body);
  /*
	  The model instance's save() method gets called to either save the user and 
	output the user object, or fail, passing the error to the next middleware.
  */
  user.save(function (err) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
};

/*
  The find() method is a model method that retrieves multiple documents stored
in the same collection using a query and is a Mongoose implementation of the
MongoDB find() collection method.
*/
exports.list = function (req, res, next) {
  /*
      The new list() method uses the find() method to retrieve an array of
  all the documents in the users collection.
  */
  User.find({}, function (err, users) {
    if (err) {
      return next(err);
    } else {
      res.json(users);
    }
  });
};

/*
	Retrieving a single user document is done using the findOne() method, which
is very similar to the find() method, but retrieves only the first document of the
subset.
*/

/*
	The read() is just responding with a JSON representation of the req.user 
object, the userById() method is the one responsible for populating the
req.user object. The userById() method will be used as a middleware to deal with
the manipulation of single documents when performing read, delete, and update
operations.
*/
exports.read = function (req, res) {
  res.json(req.user);
};

exports.userByID = function (req, res, next, id) {
  User.findOne({
    _id: id
  }, function (err, user) {
    if (err) {
      return next(err);
    } else {
      req.user = user;
      next();
    }
  });
};

/*
	The Mongoose model has several available methods to update an existing
document. Among those are the update(), findOneAndUpdate(), and
findByIdAndUpdate() methods. Each of the methods serves a different level of
abstraction, easing the update operation when possible. In our case, and since we
already use the userById() middleware, the easiest way to update an existing
document would be to use the findByIdAndUpdate() method.
*/

exports.update = function (req, res, next) {
  /*
	  Notice how the user's id field is used to find and update the correct document. 
  */
  User.findByIdAndUpdate(req.user.id, req.body, function (err, user) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
};

/*
	The Mongoose model also has several available methods to remove an existing
document. Among those are the remove(), findOneAndRemove(), and
findByIdAndRemove() methods. In our case, and since we already use the
userById() middleware, the easiest way to remove an existing document would be
to simply use the remove() method.
*/
exports.delete = function (req, res, next) {
  req.user.remove(function (err) {
    if (err) {
      return next(err);
    } else {
      res.json(req.user);
    }
  });
};