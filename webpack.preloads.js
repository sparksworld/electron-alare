const path = require('path')
const glob = require('glob')
const {
  merge,
} = require('webpack-merge')
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin')
const common = require('./webpack.common')

function getEntries() {
  const map =
    {}
  const entryFiles =
    glob.sync(
      path.resolve(
        __dirname,
        'electron/preloads/**/*.ts'
      )
    )

  entryFiles.forEach(
    (
      filepath
    ) => {
      const fileDir =
        /electron\/preloads\/(.*?)\.ts/.exec(
          filepath
        )
      if (
        fileDir
      ) {
        map[
          fileDir[1]
        ] =
          filepath
      }
    }
  )

  return map
}

module.exports =
  (
    env
  ) => {
    return merge(
      common(
        env
      ),
      {
        entry:
          getEntries(),
        target:
          'electron-preload',
        devtool:
          'inline-source-map',
        module:
          {
            rules:
              [
                {
                  test: /.ts(x?)$/,
                  exclude:
                    /node_modules/,
                  use: [
                    {
                      loader:
                        'ts-loader',
                      options:
                        {
                          configFile:
                            path.resolve(
                              __dirname,
                              './tsconfig.node.json'
                            ),
                        },
                    },
                  ],
                },
              ],
          },
        plugins:
          [
            new CleanWebpackPlugin(),
          ],
        output:
          {
            path: path.resolve(
              __dirname,
              'electron-build/preloads'
            ),
            filename:
              '[name].js',
          },
      }
    )
  }
