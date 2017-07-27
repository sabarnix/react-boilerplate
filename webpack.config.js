const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: path.resolve(__dirname, 'resources/js/index.js'),
   output: {
     path: path.resolve(__dirname, './public'),
     publicPath: '/',
     filename: 'bundle.[hash].js'
   },
   module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      }
    ]
  },
  devtool: '#source-map',

  plugins: [
      new webpack.ProvidePlugin({
          "React": "react",
      }),
      
      new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'React Demo',
        template: 'resources/index.html',
      }),
          
    ],

}
