const path = require('path');

module.exports = (config, {
  isWeb,
  isElectronMain,
  isElectronRenderer,
  isDev,
  isNode,
  entry,
}) => {
  if (isWeb) {
    if (isDev) {
      config.entry.app = [
        'react-hot-loader/patch',
        `webpack-dev-server/client?${config.output.publicPath}`,
        'webpack/hot/only-dev-server',
        entry || 'olymp-pwa/entry',
      ];
    } else {
      config.entry.app = [
        entry || 'olymp-pwa/entry',
      ];
    }
  } else if (isElectronRenderer) {
    if (isDev) {
      config.entry.app = [
        'react-hot-loader/patch',
        `webpack-dev-server/client?${config.output.publicPath}`,
        'webpack/hot/only-dev-server',
        config.entry || 'olymp-electron/entry',
      ];
    } else {
      config.entry.app = [
        entry || 'olymp-electron/entry',
      ];
    }
  } else if (isElectronMain) {
    if (isDev) {
      config.entry.main = [
        'webpack/hot/poll?1000',
        entry || 'olymp-electron/main',
      ];
    } else {
      config.entry.main = [
        entry || 'olymp-electron/main',
      ];
    }
  } else if (isNode) {
    if (isDev) {
      config.entry.app = [
        'webpack/hot/poll?1000',
        entry || 'olymp-server/entry',
      ];
    } else {
      config.entry.app = [
        entry || 'olymp-server/entry',
      ];
    }
    console.log(config.entry.app);
  }
  return config;
};
