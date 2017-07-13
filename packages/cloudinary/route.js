var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { Cloudinary } from './views';
export default function (_a) {
    var query = _a.query, pathname = _a.pathname, router = _a.router;
    return (React.createElement(Cloudinary, { selected: (query['@media'] || '')
            .split(',')
            .filter(function (x) { return x; })
            .map(function (x) { return ({ id: x, crop: undefined }); }), handleSelection: function (selected) {
            return router.push({
                pathname: pathname,
                query: __assign({}, query, { '@media': selected.map(function (item) { return item.id; }).join(',') }),
            });
        } }));
};
//# sourceMappingURL=route.js.map