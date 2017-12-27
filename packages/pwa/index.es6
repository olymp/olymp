const path = require('path');

exports.dev = (options = {}) => require('olymp').dev({
    entry: 'olymp-pwa/entry',
    port: options.port || 3000,
    targets: ['web'],
    plugins: ['babel', 'pwa'],
  });

exports.prerender = (options = {}) => {
  const compiler = require('olymp').build([{
    ssr: true,
    entry: 'olymp-pwa/prerender',
    target: 'node',
    plugins: ['babel', 'pwa'],
  }, {
    ssr: true,
    entry: 'olymp-pwa/entry',
    target: 'web',
    plugins: ['babel', 'pwa'],
  }]);
  compiler.then((stats) => {
    const prerender = require(path.resolve(process.cwd(), '.dist', 'node', 'app')).default;
    return prerender(path.resolve(process.cwd(), '.dist', 'web'), ['/', '/bye'], {
      js: [`/${stats[1].toJson().assetsByChunkName.app}`]
    });
  }).then(() => {
    console.log('DONE');
  }).catch(err => console.error(err));
}
