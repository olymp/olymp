const path = require('path');
const { get } = require('lodash');

const dir = path.dirname(require.resolve('olymp-webpack-electron'));
const dependecies = require(path.resolve(dir, 'package.json')).dependencies;
const packageJson = require(path.resolve(process.cwd(), 'package.json'));

module.exports = () => ({
  name: packageJson.name,
  description: packageJson.description,
  author: packageJson.author,
  version: packageJson.version,
  main: 'main.js',
  dependencies: Object.assign(
    {},
    {
      devtron: dependecies.devtron,
      'electron-debug': dependecies['electron-debug'],
      'electron-log': dependecies['electron-log'],
      'electron-updater': dependecies['electron-updater'],
    },
    get(packageJson, 'electronDependencies', {}),
  ),
});
