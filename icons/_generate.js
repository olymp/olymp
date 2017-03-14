const fs = require('fs');
const path = require('path');
const { upperFirst, camelCase } = require('lodash');

let index = ``;
fs.readdir(path.resolve(__dirname, 'white'), (err, files) => {
  files.forEach(file => {
    let fileName = file.split('.')[0];
    if (fileName === '500px') fileName = 'px500';
    const name = `${upperFirst(camelCase(fileName))}`;
    const content = fs.readFileSync(path.resolve(__dirname, 'white', file), { encoding: 'utf8' });
    fs.writeFileSync(path.resolve(__dirname, 'lib', `${fileName}.js`), `
import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  ${content
    .split('fill="#fff"').join('fill={color}')
    .split('width="1792"').join('width={size || width}')
    .split('height="1792"').join('height={size || height}')
    .split('xmlns="http://www.w3.org/2000/svg"').join('{...rest}')
  }
);
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
`.trim());
    index += `
export { default as ${name} } from './lib/${fileName}';
    `
  });
  fs.writeFileSync(path.resolve(__dirname, 'index.js'), index);
});
