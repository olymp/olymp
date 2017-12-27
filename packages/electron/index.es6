exports.dev = (options = {}) => {
  require('olymp').dev({
    port: options.port || 3000,
    targets: ['electron-main', 'electron-renderer'],
    plugins: ['babel', 'electron'],
  });
}
