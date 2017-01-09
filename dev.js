const path = require('path');
require('babel-register')({
  presets: [
    [require.resolve('babel-preset-env'), { targets: { node: true } }],
    require.resolve('babel-preset-stage-3'),
    require.resolve('babel-preset-react'),
  ],
  only: path.resolve(__dirname, 'universally'),
});
require('./universally/tools/development').default;
