// const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports = (env) => {
  return {
    devtool: process.env.APP_ENV == 'development' ? 'source-map' : false,
    plugins: [
      new ESLintPlugin({
        emitError: true,
        failOnError: true,
        emitWarning: true,
        extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
        context: path.resolve(__dirname, '.'),
        exclude: 'node_modules',
      }),
      new Dotenv({
        path: path.join(__dirname, `.env.${env.APP_ENV}`),
      }),
    ],
    resolve: {
      alias: {
        '@src': path.join(__dirname, 'src'),
        '@alare': path.resolve(__dirname, 'alare'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    stats: 'errors-warnings',
  }
}
