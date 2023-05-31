const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = (env) => {
  return {
    devtool: process.env.APP_ENV == 'development' ? 'source-map' : false,
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            to: path.resolve(__dirname, '.build/renderer'),
            globOptions: {
              ignore: ['**/index.html'],
            },
          },
        ],
      }),
      new Dotenv({
        path: path.resolve(__dirname, `.env.${env.APP_ENV}`),
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    stats: 'errors-only',
  }
}
