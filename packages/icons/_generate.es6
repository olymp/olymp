const fs = require('fs');
const path = require('path');
const { upperFirst, camelCase } = require('lodash');

const base = 'fa5';
const readFrom = path.resolve(
  '/Users/bkniffler/Downloads/fontawesome-5.0.0-alpha6-mac/svgs/light'
);

let index = '';
fs.readdir(readFrom, (err, files) => {
  files.forEach((file) => {
    const fileName = `fa-${file.split('.')[0]}`;
    const name = `${upperFirst(camelCase(fileName))}`;
    const content = fs.readFileSync(path.resolve(readFrom, file), {
      encoding: 'utf8',
    });
    if (content.indexOf('<style>') !== -1) {
      return;
    }
    fs.writeFileSync(
      path.resolve(__dirname, base, 'lib', `${fileName}.es6`),
      generate2(content).trim()
    );
    index += `\nexport { default as ${name} } from './lib/${fileName}';`;
  });
  fs.writeFileSync(path.resolve(__dirname, base, 'index.es6'), index);
});

const generate1 = content => `
import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  ${content
    .split('fill="#fff"')
    .join('fill={color}')
    .split('width="1792"')
    .join('width={size || width}')
    .split('height="1792"')
    .join('height={size || height}')
    .split('xmlns="http://www.w3.org/2000/svg"')
    .join('{...rest}')}
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
`;
const generate2 = content => `
import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  ${content
    .split('<svg ')
    .join(
      '<svg fill={color} width={size || width} height={size || height} {...rest} '
    )}
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
`;
