export default ({ transform = {}, isProd, isNode, isDev }) => {
  const babelOptions = {
    presets: ['react'],
    plugins: [
      'syntax-dynamic-import',
      'transform-object-rest-spread',
      // 'transform-es2015-destructuring',
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-es2015-classes',
      // 'babel-plugin-fela',
      ['import', { libraryName: 'antd', style: true }]
    ]
  };

  babelOptions.presets.push([
    'env',
    {
      modules: false,
      loose: true,
      targets: { node: 'current', browsers: ['last 2 versions'] },
      es2015: {
        modules: false,
        loose: true
      }
    }
  ]);

  if (isProd) {
    babelOptions.plugins.push('graphql-tag');
  }

  if (!isNode && isDev) {
    babelOptions.plugins.push('extract-hoc/babel');
    babelOptions.plugins.push('react-hot-loader/babel');
  } else if (!isNode && isProd) {
    babelOptions.plugins.push('lodash');
    babelOptions.plugins.push([
      'transform-imports',
      {
        antd: {
          transform: 'antd/lib/${member}',
          kebabCase: true,
          preventFullImport: true
        },
        'date-fns': {
          transform: 'date-fns/${member}',
          camelCase: true,
          preventFullImport: true
        },
        'olymp-icons': {
          transform: 'olymp-icons/lib/${member}',
          kebabCase: true,
          preventFullImport: true
        },
        'olymp-cloudinary': {
          transform: 'olymp-cloudinary/${member}',
          kebabCase: true,
          preventFullImport: true
        },
        'olymp-slate': {
          transform: 'olymp-slate/${member}',
          kebabCase: true,
          preventFullImport: true
        },
        /* 'olymp-auth': {
          transform: 'olymp-auth/${member}',
          kebabCase: true,
          preventFullImport: true,
        }, */
        'olymp-pages': {
          transform: 'olymp-pages/${member}',
          kebabCase: true,
          preventFullImport: true
        },
        'olymp-collection': {
          transform: 'olymp-collection/${member}',
          kebabCase: true,
          preventFullImport: true
        },
        ...transform
      }
    ]);
    // babelOptions.plugins.push('transform-react-constant-elements');
    // babelOptions.plugins.push('transform-react-pure-class-to-function');
    // babelOptions.plugins.push('transform-react-inline-elements');
    // babelOptions.plugins.push('transform-react-remove-prop-types');
    // babelOptions.presets.push(['react-optimize']);
  }
  return babelOptions;
};
