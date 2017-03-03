module.exports = () => ({
  presets: [
    require.resolve('babel-preset-kyt-react'),
  ],
  plugins: [
    require.resolve('babel-plugin-transform-object-rest-spread'),
    require.resolve('babel-plugin-transform-es2015-destructuring'),
    require.resolve('babel-plugin-transform-decorators-legacy'),
    require.resolve('babel-plugin-transform-class-properties'),
    [require.resolve('babel-plugin-import'), { libraryName: 'antd', style: true }],
  ],
  env: {
    development: {
      plugins: [],
    },
    production: {
      plugins: [],
    },
  },
});
