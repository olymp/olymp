const path = require('path');
const fs = require('fs');

const appRoot = process.cwd();
const olympRoot = path.resolve(__dirname, '..', '..');

module.exports = () => {
  const config = {
    resolve: {
      modules: [],
      alias: {},
    },
  };

  config.resolve.modules.push(path.resolve(olympRoot, 'node_modules'));
  config.resolve.modules.push(path.resolve(appRoot, 'node_modules'));
  config.resolve.alias.olymp = olympRoot;

  fs.readdirSync(path.resolve(olympRoot, 'packages')).reduce((obj, item) => {
    // get all folders in src and create 'olymp-xxx' alias
    config.resolve.modules.push(
      path.resolve(olympRoot, 'packages', item, 'node_modules')
    );
    config.resolve.alias[`olymp-${item}`] = path.resolve(
      olympRoot,
      'packages',
      item
    );

    return obj;
  }, {});

  return config;
};
