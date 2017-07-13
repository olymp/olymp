var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { createComponent, Container, Grid } from 'olymp-fela';
export default createComponent(function () { return ({
    display: 'flex',
    ifSmallDown: {
        flexDirection: 'column',
    },
}); }, function (p) {
    return (React.createElement(Container, null,
        React.createElement(Grid, __assign({ size: 12 }, p))));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=container.js.map