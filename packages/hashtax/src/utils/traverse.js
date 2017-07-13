var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var traverse = function (fn) { return function (context) {
    if (context === void 0) { context = {}; }
    return function (node, key) {
        var type = node.type || 'text';
        var children = node.children || [];
        var decos = node.decorators || [];
        var value = node.value;
        var props = node.props ? __assign({}, context, node.props) : __assign({}, context);
        if (key !== undefined) {
            props.key = key;
        }
        if (node.text) {
            props.text = node.text;
        }
        return fn(type, __assign({}, props, { value: value, children: children.map(traverse(context)) }), decos);
    };
}; };
export default traverse;
//# sourceMappingURL=traverse.js.map