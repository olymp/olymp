const path = require('path');
const appRoot = process.cwd();
const olympRoot = path.resolve(__dirname, '..', '..', '..');

module.exports = function(storybookBaseConfig, configType) {
  if (!storybookBaseConfig.resolve.modules) storybookBaseConfig.resolve.modules = [];
  if (!storybookBaseConfig.resolve.alias) storybookBaseConfig.resolve.alias = {};
  storybookBaseConfig.resolve.modules.push(
    path.resolve(olympRoot, 'node_modules')
  );
  storybookBaseConfig.resolve.modules.push(
    path.resolve(appRoot, 'node_modules')
  );
  storybookBaseConfig.resolve.alias.olymp = olympRoot;
  storybookBaseConfig.resolve.alias.hashtax = path.resolve(olympRoot, 'src', 'hashtax');
  storybookBaseConfig.resolve.alias['olymp-icons'] = path.resolve(olympRoot, 'src', 'icons');

  storybookBaseConfig.module.loaders[0].query.plugins.push('transform-decorators-legacy');
  storybookBaseConfig.module.loaders[0].include[0] = path.resolve(olympRoot, 'src');
  storybookBaseConfig.module.loaders.push({ test: /\.md$/, loader: 'raw' });
  return storybookBaseConfig;
};

