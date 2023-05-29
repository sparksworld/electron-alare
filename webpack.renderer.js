const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = [
  {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/renderer/index.tsx'),
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: /src\/renderer/,
          use: [{ loader: 'ts-loader' }],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, '.build/renderer'),
      filename: 'renderer.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
  },
]
