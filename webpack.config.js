const path = require('path');
const webpack = require('webpack');

module.exports = {
   entry: path.resolve(__dirname, 'resources/js/index.js'),
   output: {
     filename: 'public/bundle.js'
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
      }
    ]
  },
  devtool: '#source-map',

  plugins: [
          new webpack.ProvidePlugin({
              "React": "react",
          }),
    ],

}
