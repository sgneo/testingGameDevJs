const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  output: {
    publicPath: '/',
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: './build' //where contents are served from
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // name of html file to be created
      template: './src/index.html' // source from which html file would be created
    }),
    new CopyPlugin({
      patterns: [
        {from: './src/assets', to: './assets'},
      ],
    }),
  ]
}