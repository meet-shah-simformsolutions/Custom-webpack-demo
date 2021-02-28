var path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', "./app/index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      { test: /\.js$/, use: {
            loader:'babel-loader'
      } },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],  
  },

  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
  ],
};