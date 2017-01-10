const fs = require('fs');
const path = require('path');
const appRootDir = require('app-root-dir');

const command = process.argv[process.argv.length - 1];

const exists = (p, throwError) => {
  const doesExist = fs.existsSync(path.resolve(appRootDir.get(), `${p}.js`)) || fs.existsSync(path.resolve(appRootDir.get(), p, 'index.js'));
  if (!doesExist && throwError) throw new Error(`${p} not found in your root dir!`);
  else if (!doesExist) console.log(`${p} not found in your root dir!`);
  return doesExist;
};

exists('server');
exists('app', true);

if (command === 'dev') {
  require('babel-register')({
    presets: [
      [require.resolve('babel-preset-env'), { targets: { node: true } }],
      require.resolve('babel-preset-stage-3'),
      require.resolve('babel-preset-react'),
    ],
    only: path.resolve(__dirname, 'universally'),
  });
  require('./universally/tools/development').default;
} else if (command === 'build') {
  require(path.resolve(__dirname, 'universally', 'tools', 'scripts', 'build'));
} else if (command === 'analyze') {
  require(path.resolve(__dirname, 'universally', 'tools', 'scripts', 'analyze'));
} else if (command === 'start') {
  process.env.NODE_ENV = 'production';
  require(path.resolve(appRootDir.get(), '.build', 'server'));
}
