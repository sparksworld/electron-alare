const path = require('path')
const glob = require('glob')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

function getEntries() {
  let map = {}
  const entryFiles = glob.sync(path.resolve(__dirname, 'src/main/**/*.ts'))

  entryFiles.forEach((filepath) => {
    let fileDir = /src\/main\/(.*?)\.ts/.exec(filepath)
    if (fileDir) {
      map[fileDir[1]] = filepath
    }
  })

  return map
}

module.exports = (env) => {
  return merge(common(env), {
    entry: getEntries(),
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
