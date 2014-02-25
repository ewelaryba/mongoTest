var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mongotest'
    },
    port: 3000,
    db: 'mongodb://localhost/test'
  },

  test: {
    root: rootPath,
    app: {
      name: 'mongotest'
    },
    port: 3000,
    db: 'mongodb://localhost/test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'mongotest'
    },
    port: 3000,
    db: 'mongodb://localhost/test'
  }
};

module.exports = config[env];
