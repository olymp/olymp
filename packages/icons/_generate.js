var fs = require('fs');
var path = require('path');
var _a = require('lodash'), upperFirst = _a.upperFirst, camelCase = _a.camelCase;
var base = 'fa5';
var readFrom = path.resolve('/Users/bkniffler/Downloads/fontawesome-5.0.0-alpha1-mac/svgs/light');
var index = '';
fs.readdir(readFrom, function (err, files) {
    files.forEach(function (file) {
        var fileName = "fa-" + file.split('.')[0];
        var name = "" + upperFirst(camelCase(fileName));
        var content = fs.readFileSync(path.resolve(readFrom, file), {
            encoding: 'utf8',
        });
        if (content.indexOf('<style>') !== -1) {
            return;
        }
        fs.writeFileSync(path.resolve(__dirname, base, 'lib', fileName + ".js"), generate2(content).trim());
        index += "\nexport { default as " + name + " } from './lib/" + fileName + "';";
    });
    fs.writeFileSync(path.resolve(__dirname, base, 'index.js'), index);
});
var generate1 = function (content) { return "\nimport React from 'react';\nimport styled from '../styled';\nconst icon = ({ color, width, height, size, ...rest }) => (\n  " + content
    .split('fill="#fff"')
    .join('fill={color}')
    .split('width="1792"')
    .join('width={size || width}')
    .split('height="1792"')
    .join('height={size || height}')
    .split('xmlns="http://www.w3.org/2000/svg"')
    .join('{...rest}') + "\n);\nicon.defaultProps = { width: 100, height: 100 };\nexport default styled(icon);\n"; };
var generate2 = function (content) { return "\nimport React from 'react';\nimport styled from '../styled';\nconst icon = ({ color, width, height, size, ...rest }) => (\n  " + content
    .split('<svg ')
    .join('<svg fill={color} width={size || width} height={size || height} {...rest} ') + "\n);\nicon.defaultProps = { width: 100, height: 100 };\nexport default styled(icon);\n"; };
//# sourceMappingURL=_generate.js.map