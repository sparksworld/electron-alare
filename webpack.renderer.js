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
          test: /.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                babelrc: false,
                presets: [['@babel/preset-env'], '@babel/preset-react'],
                plugins: [require.resolve('babel-plugin-syntax-dynamic-import')],
              },
            },
            'ts-loader',
          ],
        },
        {
          test: /\.(css|less)$/,
          exclude: [/\.module\.(css|less)/, /\.global\.less$/],
          use: [
            {
              //css单独分离文件加载
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false,
              },
            },
            'css-loader',
            'postcss-loader',
            'less-loader',
          ],
        },
        {
          test: /\.module\.(css|less)/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  // importLoaders: 1,
                  localIdentName: '[local]_[chunkhash:base64:5]',
                },
              },
            },
            'postcss-loader',
          ],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, '.build/renderer'),
      filename: '[name].[chunkhash:8].js',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash:8].css',
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, 'public/index.html'),
      }),
    ],

    devServer: {
      compress: false,
      hot: true,
      port: 3000,
      static: path.join(__dirname, '.build/renderer'),
    },
  })
}
