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
import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { fade, border } from 'olymp-fela';
import Sub from './sub';
import Mega from './mega';
var Nav = createComponent(function (_a) {
    var theme = _a.theme, inverse = _a.inverse, vertically = _a.vertically, right = _a.right, sub = _a.sub;
    return sub && {
        backgroundColor: inverse ? fade(theme.color, 85) : '#FFFFFF',
        border: border(theme, inverse ? theme.color : theme.dark4),
        display: 'none',
        position: 'absolute',
        top: !vertically ? '100%' : -theme.borderWidth,
        left: !right && (vertically ? '100%' : 0),
        right: right && (!vertically ? 0 : '100%'),
        zIndex: 10,
        '> div': {
            textAlign: 'left',
        },
        ifMini: {
            position: 'relative',
            top: 'auto',
            left: 'auto',
            right: 'auto',
            fontSize: theme.fontSizeSmall,
            backgroundColor: inverse && theme.dark5,
            border: 'none',
        },
    };
}, function (_a) {
    var mega = _a.mega, sub = _a.sub, vertically = _a.vertically, children = _a.children, props = __rest(_a, ["mega", "sub", "vertically", "children"]);
    return mega && mega(__assign({ mega: mega, sub: sub, vertically: vertically, children: children }, props))
        ? React.createElement(Mega, __assign({}, props))
        : React.createElement(Sub, __assign({}, props, { vertically: sub || vertically }), children);
}, function (p) { return Object.keys(p); });
Nav.displayName = 'Navbar.Nav';
Nav.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        pathname: PropTypes.string,
        children: PropTypes.arrayOf(PropTypes.object),
    })),
    right: PropTypes.bool,
};
Nav.defaultProps = {
    pages: [],
    right: false,
};
export default Nav;
//# sourceMappingURL=nav.js.map