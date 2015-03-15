var webpack = require('webpack');
var path = require('path');

module.exports = {
  
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel!decorators'}
    ]
  },

  devtool: '#inline-source-map'
}
