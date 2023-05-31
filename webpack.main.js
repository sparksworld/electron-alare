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
                configFile: path.resolve(__dirname, './tsconfig.main.json'),
              },
            },
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
