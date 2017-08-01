const path = require('path');
const fs = require('fs');
const babel = require('olymp-webpack-babel');

const appRoot = process.cwd();
const olympRoot = path.resolve(__dirname, '..', '..', '..');

module.exports = function(storybookBaseConfig) {
  if (!storybookBaseConfig.resolve.modules) {
    storybookBaseConfig.resolve.modules = [];
  }
  if (!storybookBaseConfig.resolve.alias) {
    storybookBaseConfig.resolve.alias = {};
  }
  storybookBaseConfig.resolve.modules.push(path.resolve(olympRoot, 'node_modules'));
  storybookBaseConfig.resolve.modules.push(path.resolve(appRoot, 'node_modules'));
  storybookBaseConfig.resolve.alias['@history'] = 'history/createMemoryHistory';
  fs.readdirSync(path.resolve(olympRoot, 'packages')).reduce((obj, item) => {
    // get all folders in src and create 'olymp-xxx' alias
    storybookBaseConfig.resolve.alias[`olymp-${item}`] = path.resolve(olympRoot, 'packages', item);
    return obj;
  }, {});

  return storybookBaseConfig;
};
