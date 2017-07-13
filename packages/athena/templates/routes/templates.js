var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { Templates } from '../views';
export default function (_a) {
    var query = _a.query, pathname = _a.pathname, router = _a.router;
    return (React.createElement(Templates, { handleListClick: function (template) {
            return router.push({ pathname: pathname, query: __assign({}, query, { '@template': template.id }) });
        }, id: query['@template'], onClose: function () {
            return router.push({ pathname: pathname, query: __assign({}, query, { '@template': undefined }) });
        } }));
};
//# sourceMappingURL=templates.js.map