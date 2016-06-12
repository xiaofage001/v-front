const webpack = require('webpack');
const path    = require('path');
const config  = require('./webpack.config');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const yaml = require('js-yaml');
const fs = require('fs');

const sysConfig = yaml.safeLoad(fs.readFileSync('./config/config.yml', 'utf8'));

config.plugins = config.plugins.concat([

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  // new webpack.HotModuleReplacementPlugin(),

  new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 3001,
      proxy: `localhost:${sysConfig.port || '3000'}`,
    }, {
      reload: true
    })
]);

module.exports = config;
