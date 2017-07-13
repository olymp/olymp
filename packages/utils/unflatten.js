var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var sortBy = require('lodash/sortBy');
var unflatten = function (items, _a, parentItem, level, currentPath) {
    var id = _a.id, parentId = _a.parentId, setPath = _a.setPath, pathProp = _a.pathProp, mapper = _a.mapper, sort = _a.sort;
    var parent = parentItem ? parentItem[id] : null;
    var children = items
        .filter(function (item) { return item[parentId] === parent; })
        .map(function (item) {
        return mapper(item, parent ? items.find(function (x) { return x[id] === parent; }) : null);
    });
    if (sort) {
        children = sort(children, parentItem);
    }
    else {
        children = sortBy(children, [function (item) { return item.order; }]);
    }
    return children.map(function (item) {
        var path = setPath ? setPath(currentPath, item) : undefined;
        return __assign({}, item, (_a = {}, _a[pathProp] = path, _a.children = unflatten(items, { id: id, parentId: parentId, setPath: setPath, pathProp: pathProp, mapper: mapper, sort: sort }, item, level + 1, path), _a));
        var _a;
    });
};
export default function (items, _a, parent, level, currentPath) {
    var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? 'id' : _c, _d = _b.parentId, parentId = _d === void 0 ? 'parentId' : _d, setPath = _b.setPath, _e = _b.pathProp, pathProp = _e === void 0 ? 'path' : _e, _f = _b.mapper, mapper = _f === void 0 ? function (item) { return item; } : _f, sort = _b.sort;
    if (parent === void 0) { parent = null; }
    if (level === void 0) { level = 0; }
    if (currentPath === void 0) { currentPath = ''; }
    return unflatten(items, { id: id, parentId: parentId, setPath: setPath, pathProp: pathProp, mapper: mapper, sort: sort }, parent, level, currentPath);
};
//# sourceMappingURL=unflatten.js.map