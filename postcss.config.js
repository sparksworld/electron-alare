module.exports = {
  plugins: [
    require.resolve('postcss-import'),
    require.resolve('tailwindcss'),
    require.resolve('postcss-preset-env'),
    require.resolve('autoprefixer'),
    // [
    //   require.resolve('postcss-pxtorem'),
    //   {
    //     rootValue: 192,
    //     unitPrecision: 2,
    //     selectorBlackList: [], //过滤
    //     minPixelValue: 2,
    //     propList: ['*'],
    //     exclude: /node_modules/i,
    //   },
    // ],
  ],
}
