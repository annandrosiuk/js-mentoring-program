const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const dev = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    host: 'localhost',
    watchContentBase: true,
    port: 9000,
    hot: dev,
  }
});
