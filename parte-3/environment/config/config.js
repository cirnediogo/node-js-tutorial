module.exports = require('./env/' + process.env.NODE_ENV + '.js');

/*

During your application development, you will often need to configure third-party
modules to run differently in various environments. To solve this issue, you can manage a set
of environment configuration files that holds these properties. You will then be
able to use the process.env.NODE_ENV environment variable to determine which
configuration file to load, thus keeping your code shorter and easier to maintain.

This file simply loads the correct configuration file according to the
process.env.NODE_ENV environment variable.

*/