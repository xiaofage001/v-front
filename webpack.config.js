// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    console.log(' Using Production Mode');
    module.exports = require('./config/webpack.dist.config');
    break;
  case 'dev':
  case 'development':
  default:
    console.log(' Using Development Mode');
    module.exports = require('./config/webpack.dev.config');
}
