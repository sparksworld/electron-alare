const path = require('path')
// const glob = require('glob')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common')

module.exports = (env) => {
  return merge(common(env), {
    entry: path.resolve(__dirname, 'electron/index.ts'),
    target: 'electron-main',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, './tsconfig.node.json'),
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!preloads*', '!preloads/*'],
      }),
    ],
    output: {
      path: path.resolve(__dirname, 'electron-build'),
      filename: '[name].js',
    },
  })
}
