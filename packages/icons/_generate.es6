const fs = require('fs');
const path = require('path');
const { upperFirst, camelCase } = require('lodash');

const arr = [path.resolve(__dirname, 'svg')];

let index = '';
arr.forEach(readFrom => {
  fs.readdir(readFrom, (err, files) => {
    files.forEach(file => {
      const fileName = `fa-${file.split('.')[0]}`;
      const name = `${upperFirst(camelCase(fileName))}`;
      const content = fs
        .readFileSync(path.resolve(readFrom, file), {
          encoding: 'utf8',
        })
        .replace('<?xml version="1.0" encoding="utf-8"?>', '')
        .replace(' width="2048"', '')
        .replace(' width="2304"', '')
        .replace(' width="1792"', '')
        .replace(' height="1792"', '')
        .trim();
      fs.writeFileSync(
        path.resolve(__dirname, 'lib', `${fileName}.es6`),
        generate(content, name).trim(),
      );
      index += `\nexport { default as ${name} } from './lib/${fileName}';`;
    });
    fs.writeFileSync(path.resolve(__dirname, 'index.es6'), index);
  });
});

const generate = (content, name) => `
import React from 'react';
import styled from '../styled';
const icon = ({ color, width, height, size, ...rest }) => (
  ${content
    .split('<svg ')
    .join(
      '<svg fill={color} width={size || width} height={size || height} {...rest} ',
    )}
);
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = '${name}';
export default styled(icon);

`;
