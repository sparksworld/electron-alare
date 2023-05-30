const path = require('path')
const glob = require('glob')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = (env) => {
  const entry = {}
  glob.sync(path.resolve(__dirname, `src/main/**/*`)).forEach((file_path) => {
    const split_path = file_path.split('/')
    const file_name = split_path[split_path.length - 1]
    const name = file_name.split('.')[0]
    entry[name] = file_path
  })

  return merge(common(env), {
    entry: entry,
    target: 'electron-main',
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
      ],
    },
    output: {
      path: path.resolve(__dirname, '.build/main'),
      filename: '[name].js',
    },
  })
}
