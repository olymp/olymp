var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var flatten = function (items, options) {
    if (items === void 0) { items = []; }
    if (options === void 0) { options = {}; }
    var flattenArr = [];
    var helper = function (node, parent, order) {
        var newNode = __assign({}, node, (_a = {}, _a[options.parentId] = parent && parent[options.id], _a.order = order, _a));
        newNode.children.forEach(function (node, index) { return helper(node, newNode, index); });
        delete newNode.children;
        flattenArr.push(newNode);
        var _a;
    };
    items.forEach(function (item, index) {
        return helper(item, null, index, __assign({ parentId: 'parentId', id: 'id' }, options));
    });
    return flattenArr;
};
export default function (items, options) { return flatten(items, options); };
//# sourceMappingURL=flatten.js.map