import { traverse } from '../utils';
var defaultRenderer = function (name, _a) {
    var value = _a.value, children = _a.children, href = _a.href;
    if (name === 'paragraph' && value === '') {
        return '';
    }
    else if (name === 'paragraph' && !value) {
        return '<br />';
    }
    else if (name === 'paragraph') {
        return "<span>" + value + "</span>";
    }
    else if (name === 'h1') {
        return "<h1>" + value + "</h1>";
    }
    else if (name === 'link') {
        return "<a href=" + href + ">" + value + "</a>";
    }
};
export default function (ast, _a) {
    var renderer = _a.renderer, context = _a.context;
    var render = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var v = renderer ? renderer.apply(void 0, args) : undefined;
        if (v !== undefined) {
            return v;
        }
        return defaultRenderer.apply(void 0, args);
    };
    var create = function (name, props, decos) {
        if (props.value) {
            props.value = props.value.trim();
        }
        if (props.children) {
            props.children = props.children.join('');
        }
        var text = render(name, props);
        decos.forEach(function (_a) {
            var type = _a.type, args = _a.args;
            var newText = render('@{type}', props, text);
            if (newText !== undefined) {
                text = newText;
            }
        });
        return text;
    };
    return ast.map(traverse(create)(context)).join('');
};
//# sourceMappingURL=ast-to-html.js.map