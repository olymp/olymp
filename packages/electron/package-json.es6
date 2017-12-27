const path = require('path');
const { get } = require('lodash');

const dependecies = require(path.resolve(__dirname, 'package.json')).dependencies;
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
      'node-machine-id': dependecies['node-machine-id'],
      'electron-debug': dependecies['electron-debug'],
      'electron-log': dependecies['electron-log'],
      'electron-updater': dependecies['electron-updater'],
      'babel-polyfill': dependecies['babel-polyfill'],
    },
    get(packageJson, 'electronDependencies', {})
  ),
});
