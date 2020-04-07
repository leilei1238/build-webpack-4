const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const path = require('path')

const ssrConfig = {
  mode: 'production',
  output: {
    filename: '[name]-server.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: 'ignore-loader',
      },
      {
        test: /\.less?$/,
        use: 'ignore-loader',
      },
    ],
  },
}

module.exports = merge(baseConfig, ssrConfig)
