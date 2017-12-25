const path = require('path');

module.exports = (config, {
  isWeb,
  isElectronMain,
  isElectronRenderer,
  isDev,
  isNode,
}) => {
  if (isWeb || isElectronRenderer) {
    if (isDev) {
      config.entry.app = [
        'react-hot-loader/patch',
        `webpack-dev-server/client?${config.output.publicPath}`,
        'webpack/hot/only-dev-server',
        'olymp-pwa/entry',
      ];
    } else {
      config.entry.app = [
        'olymp-pwa/entry',
      ];
    }
  } else if (isElectronMain) {
    if (isDev) {
      config.entry.main = [
        'webpack/hot/poll?1000',
        'olymp-electron/main',
      ];
    } else {
      config.entry.main = [
        'olymp-electron/main',
      ];
    }
  } else if (isNode) {
    if (isDev) {
      config.entry.app = [
        'webpack/hot/poll?1000',
        'olymp-server/entry',
      ];
    } else {
      config.entry.app = [
        'olymp-server/entry',
      ];
    }
  }
  return config;
};
