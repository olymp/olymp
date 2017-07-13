import { traverse } from '../utils';
var defaultRenderer = function (name, _a) {
    var value = _a.value, children = _a.children, href = _a.href;
    if (name === 'paragraph' && value === '') {
        return '';
    }
    else if (name === 'paragraph' && !value) {
        return '\n';
    }
    else if (name === 'paragraph') {
        return "" + value;
    }
    else if (name === 'h1') {
        return value + "\n";
    }
    else if (name === 'link') {
        return value + " => " + href;
    }
};
export default function (ast, _a) {
    var renderer = _a.renderer, trim = _a.trim, context = _a.context;
    renderer = renderer || defaultRenderer;
    var create = function (name, props, decos) {
        if (props.value) {
            props.value = props.value.trim();
        }
        if (props.children) {
            props.children = props.children.join('');
        }
        var text = renderer(name, props);
        decos.forEach(function (_a) {
            var type = _a.type, args = _a.args;
            var newText = renderer('@{type}', props, text);
            if (newText !== undefined) {
                text = newText;
            }
        });
        return text;
    };
    return ast.map(traverse(create)(context)).join('');
};
//# sourceMappingURL=ast-to-plain.js.map