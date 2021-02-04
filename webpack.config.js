const path = require('path');

const  javascriptRules = {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename:'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      javascriptRules
    ]
  },

  devtool: "source-map",
};