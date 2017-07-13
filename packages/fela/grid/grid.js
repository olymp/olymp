var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
var Grid = createComponent(function (_a) {
    var height = _a.height;
    return ({
        height: height,
        minWidth: '100%',
        marginX: '-0.5rem',
        onAfter: {
            content: '""',
            clear: 'both',
            display: 'block',
            visibility: 'hidden',
            height: 0,
        },
    });
}, function (_a) {
    var children = _a.children, size = _a.size, height = _a.height, rest = __rest(_a, ["children", "size", "height"]);
    return (React.createElement("div", __assign({}, rest), Children.map(children, function (child) { return cloneElement(child, { gridSize: size }); })));
}, function (p) { return Object.keys(p); });
Grid.propTypes = {
    size: PropTypes.number,
};
Grid.defaultProps = {
    size: 12,
};
Grid.displayName = 'Grid';
export default Grid;
//# sourceMappingURL=grid.js.map