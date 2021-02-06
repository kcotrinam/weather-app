const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


const sassRules = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    MiniCSSExtractPlugin.loader,
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    "sass-loader",
  ],
}

const imgRules = {
  test: /\.(png|jpe?g|gif)$/i,
  loader: 'file-loader',
  options: {
    outputPath: 'images',
    name: '[name].[ext]',
  },
}

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules:[
      sassRules,
      imgRules
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Weather App',
      template: './src/index.html'
    }),
    new MiniCSSExtractPlugin({
      filename: "./css/styles.css",
    }),
  ],
  devtool: 'source-map',
};
