const path = require('path');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');
const { name, version } = require('./package.json');

module.exports = {
  title: `${name} ${version}`,
  showUsage: true,
  showCode: true,
  verbose: true,
  webpackConfig: require('./styleguide.webpack.js'),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide.provider.js'),
  },
  sections: [
    {
      name: 'Nav',
      components: () => [
        path.resolve(__dirname, 'nav/navbar', 'navbar.js'),
        path.resolve(__dirname, 'nav/button', 'button.js'),
      ],
    },
  ],
  getComponentPathLine: componentPath => {
    const dirname = path.dirname(componentPath, '.js');
    const filename = dirname.split('/').slice(-1)[0];
    const componentName = upperFirst(camelCase(filename));

    return `import { ${componentName} } from 'olymp-fela'`;
  },
};
