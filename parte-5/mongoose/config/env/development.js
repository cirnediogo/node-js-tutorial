module.exports = {
  /*
	  To connect to MongoDB, you will need to use the MongoDB connection URI. The
  MongoDB connection URI is a string URL that tells the MongoDB drivers how to
  connect to the database instance. The proper way to store application
  variables is to use your enviornment configuration file and request it inside the
  configuration file (config/mongoose.js).
  */
  db: 'mongodb://localhost/mean-book',
  sessionSecret: 'developmentSessionSecret'
};