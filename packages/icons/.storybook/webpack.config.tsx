const path = require('path');
const fs = require('fs');

const appRoot = process.cwd();
const olympRoot = path.resolve(__dirname, '..', '..', '..');

module.exports = function (storybookBaseConfig) {
  if (!storybookBaseConfig.resolve.modules) {
    storybookBaseConfig.resolve.modules = [];
  }
  if (!storybookBaseConfig.resolve.alias) {
    storybookBaseConfig.resolve.alias = {};
  }
  storybookBaseConfig.resolve.modules.push(
    path.resolve(olympRoot, 'node_modules')
  );
  storybookBaseConfig.resolve.modules.push(
    path.resolve(appRoot, 'node_modules')
  );
  storybookBaseConfig.resolve.alias.olymp = olympRoot;
  fs.readdirSync(path.resolve(olympRoot, 'packages')).reduce((obj, item) => {
    // get all folders in src and create 'olymp-xxx' alias
    storybookBaseConfig.resolve.alias[`olymp-${item}`] = path.resolve(
      olympRoot,
      'packages',
      item
    );
    return obj;
  }, {});

  storybookBaseConfig.module.rules[0].query.plugins.push(
    'transform-decorators-legacy'
  );
  storybookBaseConfig.module.rules[0].include[0] = path.resolve(
    olympRoot,
    'packages'
  );
  storybookBaseConfig.module.rules.push({ test: /\.md$/, loader: 'raw' });
  return storybookBaseConfig;
};
