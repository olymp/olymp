var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var attribs = ['eq', 'ne', 'lt', 'gt', 'gte', 'lte', 'in', 'nin'];
var adaptQuery = function (obj) {
    obj = __assign({}, obj);
    if (obj.skipQuery) {
        return {};
    }
    delete obj.skipQuery;
    Object.keys(obj).forEach(function (key) {
        if (obj[key] && Array.isArray(obj[key])) {
            obj[key] = obj[key].map(function (item) { return (typeof item === 'object' ? adaptQuery(item) : item); });
        }
        else if (obj[key] && typeof obj[key] === 'object') {
            obj[key] = adaptQuery(obj[key]);
        }
        if (key === 'and') {
            obj.$and = obj.and;
            delete obj.and;
            return;
        }
        if (key === 'or') {
            obj.$or = obj.or;
            delete obj.or;
            return;
        }
        if (key === 'between') {
            obj.$gte = obj[key][0];
            obj.$lt = obj[key][1];
            delete obj[key];
            return;
        }
        if (key === 'startsWith') {
            obj.$regex = new RegExp("^" + obj[key] + ".*", 'i');
            delete obj[key];
            return;
        }
        if (key === 'contains') {
            obj.$regex = new RegExp(".*" + obj[key] + ".*", 'i');
            delete obj[key];
            return;
        }
        if (key === 'null') {
            if (obj.null) {
                obj.$eq = null;
            }
            if (!obj.null) {
                obj.$ne = null;
            }
            delete obj.null;
            return;
        }
        if (attribs.indexOf(key) !== -1) {
            obj["$" + key] = obj[key];
            delete obj[key];
        }
    });
    return obj;
};
export default adaptQuery;
//# sourceMappingURL=adapt-query.js.map