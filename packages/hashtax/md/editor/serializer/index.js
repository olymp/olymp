import Raw from './raw';
import shortID from 'shortid';
function deserialize(string, options) {
    if (options === void 0) { options = {}; }
    var getInnerTextNode = function (text) { return ({
        kind: 'text',
        ranges: [{
                text: text,
                marks: [],
            }],
    }); };
    var getTextNode = function (text) { return ({
        kind: 'block',
        type: 'paragraph',
        nodes: text !== undefined ? [getInnerTextNode(text)] : [],
    }); };
    var nodes = [];
    var deserializeNode = function (line) {
        var node = getTextNode();
        var split = line.split('{').forEach(function (x, i) {
            if (x.indexOf('}') !== -1) {
                var _a = x.split('}'), key = _a[0], line_1 = _a[1];
                node.nodes.push({
                    kind: 'block',
                    type: 'select',
                    nodes: [getTextNode(key)],
                    data: {
                        key: key,
                        id: shortID.generate()
                    },
                });
                node.nodes.push(getInnerTextNode(line_1));
            }
            else {
                node.nodes.push(getInnerTextNode(x));
            }
        });
        nodes.push(node);
    };
    string.split('\n').forEach(deserializeNode);
    var raw = {
        kind: 'state',
        document: {
            kind: 'document',
            nodes: nodes,
        },
    };
    return options.toRaw ? raw : Raw.deserialize(raw);
}
function gather(state, filter) {
    var nodes = [];
    function runner(node, level) {
        if (level === void 0) { level = 0; }
        if (filter(node, level))
            nodes.push(node);
        if (node.nodes)
            node.nodes.map(function (node) { return runner(node, level++); });
    }
    state.document.nodes.map(runner);
    return nodes;
}
function getNode(state, criteria) {
    var found;
    function runner(nodes) {
        nodes.some(function (node) {
            if (criteria(node)) {
                found = node;
                return true;
            }
            else if (node.nodes) {
                runner(node.nodes);
                if (found)
                    return true;
            }
            return false;
        });
    }
    runner(state.document.nodes);
    return found;
}
function serializeNode(node) {
    if (node.nodes)
        return node.nodes.map(serializeNode).join('\n');
    return node.text;
}
function serialize(state) {
    return state.document.nodes.map(serializeNode).join('\n');
}
export default {
    deserialize: deserialize,
    serializeNode: serializeNode,
    serialize: serialize,
    gather: gather,
    getNode: getNode,
};
//# sourceMappingURL=index.js.map