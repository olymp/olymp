const path = require('path');

exports.dev = ({ paths, plugins, port } = {}) =>
  require('olymp').dev(
    {
      entry: 'olymp-pwa/entry',
      target: 'web',
      plugins: ['babel', 'pwa'].concat(plugins || []),
      paths
    },
    port || 3000
  );

exports.prerender = ({ paths } = {}) => {
  const compiler = require('olymp').build([
    {
      ssr: true,
      entry: 'olymp-pwa/prerender',
      target: 'node',
      plugins: ['babel', 'pwa'],
      paths
    },
    {
      ssr: true,
      entry: 'olymp-pwa/entry',
      target: 'web',
      plugins: ['babel', 'pwa'],
      paths
    }
  ]);
  compiler
    .then(stats => {
      const prerender = require(path.resolve(
        process.cwd(),
        '.dist',
        'node',
        'app'
      )).default;
      return prerender(
        path.resolve(process.cwd(), '.dist', 'web'),
        ['/', '/bye'],
        {
          js: [`/${stats[1].toJson().assetsByChunkName.app}`]
        }
      );
    })
    .then(() => {
      console.log('DONE');
    })
    .catch(err => console.error(err));
};
