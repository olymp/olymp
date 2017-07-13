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
var Layout = createComponent(function (_a) {
    var fullHeight = _a.fullHeight, affix = _a.affix;
    return ({
        display: 'flex',
        alignItems: 'stretch',
        height: fullHeight || affix ? '100vh' : '100%',
        minHeight: '100%',
        maxHeight: affix && '100vh',
        flexDirection: 'column',
    });
}, function (_a) {
    var children = _a.children, affix = _a.affix, rest = __rest(_a, ["children", "affix"]);
    return (React.createElement("div", __assign({}, rest), Children.map(children, function (child) { return child && cloneElement(child, { affix: affix }); })));
}, function (_a) {
    var fullHeight = _a.fullHeight, p = __rest(_a, ["fullHeight"]);
    return Object.keys(p);
});
Layout.displayName = 'Layout';
Layout.propTypes = {
    fullHeight: PropTypes.bool,
    affix: PropTypes.bool,
};
Layout.defaultProps = {
    fullHeight: false,
    affix: false,
};
export default Layout;
//# sourceMappingURL=layout.js.map