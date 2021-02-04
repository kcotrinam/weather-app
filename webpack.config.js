const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const sassRules = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    "style-loader",
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    "sass-loader",
  ],
}

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules:[sassRules]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Weather App',
      template: './src/index.html'
    })
  ],
  devtool: 'source-map',
};
