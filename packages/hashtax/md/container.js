import { PropTypes } from 'react';
import repeat from 'lodash/repeat';
var MARKER = '+';
var LINE = '\n';
var EXPRESSION = /^((\+{1,}) ([^\n\+]+)?[ \t]*)(?:\n([\s\S]*?)(\n\2[ \t]*(?=\n|$)))?/;
function attacher(_a) {
    var components = _a.components, props = _a.props;
    var getArgsFromStr = function (str, allowed) {
        var match = str ? str.match(/(?:[^\s"'\]\[]+|"[^"]*"|'[^']*'|\[[^']*\])+/g) : null;
        if (match) {
            return match.reduce(function (state, current) {
                var _a = current.split('='), x = _a[0], y = _a[1];
                if (y && y.indexOf('{') === 0)
                    y = props[y.substr(1).slice(0, -1)];
                if (y && y.indexOf('"') === 0)
                    y = y.substr(1).slice(0, -1);
                if (allowed && !allowed[x])
                    return state;
                else if (!allowed)
                    state[x] = y;
                else if (allowed[x] === PropTypes.number)
                    state[x] = y !== null && y !== undefined ? parseInt(y) : null;
                else if (allowed[x] === PropTypes.bool)
                    state[x] = y === 'true' ? true : y === 'false' ? false : null;
                else
                    state[x] = y;
                return state;
            }, {});
        }
        return {};
    };
    function parse(eat, value, silent) {
        var match = value.match(EXPRESSION);
        if (match) {
            var full = match[0], start = match[1], arg = match[3], content = match[4], end = match[5];
            if (!arg)
                return;
            if (!end)
                full = full.split('\n')[0];
            var tag = arg.trim().split(' ')[0];
            if (!components[tag])
                return;
            if (silent)
                return true;
            var props_1 = getArgsFromStr(arg.trim().substr(tag.length + 1), components[tag].propTypes);
            var node = eat(full).reset({
                props: props_1,
                type: 'react',
                tag: tag,
            });
            eat(start + (content ? LINE : ''));
            if (!content || !end)
                return node;
            var now = eat.now();
            node.children = this.tokenizeBlock(content, now);
            eat(content)(node.children);
            eat(end);
            return node;
        }
    }
    function compile(token) {
        var value = this.block(token);
        var flag = this.encode(token.size || '', token);
        var fence = repeat(MARKER, 3);
        return fence + flag + (value ? LINE + value : '') + LINE + fence;
    }
    var proto = this.Parser.prototype;
    proto.blockTokenizers.react = parse;
    proto.blockMethods.splice(proto.blockMethods.indexOf('fences') + 1, 0, 'react');
    this.Compiler.prototype.react = compile;
}
export default attacher;
//# sourceMappingURL=container.js.map