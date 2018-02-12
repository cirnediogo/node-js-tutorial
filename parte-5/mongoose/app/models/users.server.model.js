/*
	Mongoose uses a Schema object to define the
document list of properties, each with its own type and constraints, to enforce the
document structure. After specifying a schema, it will be defined a Model
constructor that you'll use to create instances of MongoDB documents.
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
The UserSchema object is defined using the Schema constructor
*/
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    index: true,
    match: /.+\@.+\..+/
  },
  role: {
    type: String,
    enum: ['Admin', 'Owner', 'User']
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    validate: [
      function (password) {
        return password.length >= 6;
      },
      'Password should be longer'
    ]
  },
  created: {
    type: Date,
    default: Date.now
  },
  website: {
    type: String,
    get: function (url) {
      if (!url) {
        return url;
      } else {
        if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
          url = 'http://' + url;
        }
        return url;
      }
    }
  },
});

UserSchema.virtual('fullName')
        .get(function () {
          return this.firstName + ' ' + this.lastName;
        })
        .set(function (fullName) {
          var splitName = fullName.split(' ');
          this.firstName = splitName[0] || '';
          this.lastName = splitName[1] || '';
        });

UserSchema.set('toJSON', {getters: true, virtuals: true});

UserSchema.statics.findOneByUsername = function (username, callback) {
  this.findOne({username: new RegExp(username, 'i')}, callback);
};

UserSchema.methods.authenticate = function (password) {
  return this.password === password;
};

UserSchema.pre('save', function (next) {
  if (!this.firstName.isEmpty()) {
    next();
  } else {
    next(new Error('An Error Occured'));
  }
});

UserSchema.post('save', function (next) {
  if (this.isNew) {
    console.log('A new user was created.');
  } else {
    console.log('A user updated is details.');
  }
});

mongoose.model('User', UserSchema);