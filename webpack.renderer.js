const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = (env) => {
  return merge(common(env), {
    entry: path.resolve(__dirname, 'src/renderer/index.tsx'),
    target: ['web', 'electron-renderer'],
    module: {
      rules: [
        {
          // 小于10k的图片在img下不会有图片文件，而是直接把图片的base64值写到html引入图片的地方
          // 大于10k的图片会放在img下，需要的时候通过http请求下载
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            esModule: false,
            name: 'img/[name].[hash:7].[ext]',
          },
        },
        {
          test: /(\.(eot|ttf|woff|woff2|otf)|font)$/,
          loader: 'file-loader',
          options: { outputPath: 'fonts/', esModule: false },
        },

        {
          test: /.ts(x?)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'ts-loader'],
        },
        {
          test: /\.(css|less)$/,
          exclude: [/\.module\.(css|less)/, /\.global\.less$/],
          use: [
            env.APP_ENV == 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'less-loader',
          ],
        },
        {
          test: /\.module\.(css|less)/,
          use: [
            env.APP_ENV == 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]_[chunkhash:base64:5]',
                },
              },
            },
            'postcss-loader',
            'less-loader',
          ],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, '.build/renderer'),
      filename: '[name].[chunkhash:8].js',
    },
    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash:8].css',
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, 'public/index.html'),
      }),
    ],

    devServer: {
      compress: true,
      hot: true,
      port: 3000,
      static: path.join(__dirname, '.build/renderer'),
    },
  })
}
