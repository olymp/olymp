const path = require('path');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');
const { name, version } = require('./package.json');

module.exports = {
  title: `${name} ${version}`,
  defaultExample: true,
  showUsage: true,
  webpackConfig: require('./styleguide.webpack.js'),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide.provider.js'),
  },
  sections: [
    {
      name: 'Nav',
      components: () => [
        path.resolve(__dirname, 'nav', 'navbar', 'navbar.js'),
        path.resolve(__dirname, 'nav', 'brand', 'brand.js'),
        path.resolve(__dirname, 'nav', 'nav', 'nav.js'),
        path.resolve(__dirname, 'nav', 'item', 'item.js'),
      ],
    },
  ],
  getComponentPathLine: componentPath => {
    const dirname = path.dirname(componentPath, '.js');
    const component = dirname.split('/')[0];
    const componentName = upperFirst(camelCase(component));
    const subComponent = dirname.split('/').slice(-1)[0];
    const subComponentName = upperFirst(camelCase(subComponent));

    if (subComponentName === componentName) {
      return `import { ${componentName} } from 'olymp-fela';`;
    }

    return `
      import { ${componentName} } from 'olymp-fela';\n
      const { ${subComponentName} } = ${componentName};
    `;
  },
};
