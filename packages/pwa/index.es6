exports.dev = (options = {}) => {
  require('olymp').dev({
    port: options.port || 3000,
    targets: ['web'],
    plugins: ['babel', 'pwa'],
  });
}
