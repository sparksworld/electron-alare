// const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports =
  (
    env
  ) => {
    return {
      devtool:
        process
          .env
          .APP_ENV ==
        'development'
          ? 'source-map'
          : false,
      plugins:
        [
          new ESLintPlugin(),
          new Dotenv(
            {
              path: path.resolve(
                __dirname,
                `.env.${env.APP_ENV}`
              ),
            }
          ),
        ],
      resolve:
        {
          extensions:
            [
              '.ts',
              '.tsx',
              '.js',
              '.json',
            ],
        },
      stats:
        'errors-only',
    }
  }
