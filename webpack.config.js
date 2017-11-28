const path  = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    userNew: './src/js/user-new.js',
    controllerUsers: './src/js/controllers/users-controller.js',
    modelUser: './src/js/models/user.js',
    viewUserNew: './src/js/views/user/new.js',
    serviceRemote: './src/js/services/remote.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'user-new.html',
      title: 'Enriquece.me - Cadastrar novo usuário',
      template: './src/templates/user/new.html',
      chunks: ['userNew']
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.(html)$/,
        loader: 'html-loader' 
      }
    ]
  }
}
