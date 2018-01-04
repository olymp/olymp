exports.dev = (options = {}) => {
  require('olymp').dev({
    port: options.port || 3000,
    entry: 'olymp-electron/entry',
    targets: ['electron-main', 'electron-renderer'],
    plugins: ['babel', 'electron'],
  });
}
