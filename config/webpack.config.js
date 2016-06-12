var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'main': './src/client/app/app.js',
  },
  output: {
    filename: 'main.js',
    path: './src/client/'
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.css$/, loader: 'style!css' },
       { test: /\.less$/, loader: 'style!css!less' },
       { test: /\.jade$/, loader: 'jade' },
    ],
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    
  ]
};
