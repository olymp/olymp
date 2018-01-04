exports.dev = ({
  paths,
  plugins,
  port,
}) => require('olymp').dev([{
  ssr: false,
  entry: 'olymp-pwa/entry',
  target: 'web',
  plugins: ['babel', 'pwa'].concat(plugins || []),
  paths,
}, {
  ssr: false,
  entry: 'olymp-server/entry',
  target: 'node',
  plugins: ['babel'].concat(plugins || []),
  paths,
}], port || 3000);
