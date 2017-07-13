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
import NavLink from 'react-router-dom/NavLink';
var Brand = createComponent(function (_a) {
    var theme = _a.theme, inverse = _a.inverse;
    return ({
        color: inverse ? theme.light : theme.dark,
        centerY: true,
        paddingX: theme.space3,
        paddingY: theme.space2,
        '> *': {
            marginX: "-" + theme.space3,
        },
        onHover: {
            color: inverse ? theme.light2 : theme.dark2,
        },
    });
}, function (_a) {
    var children = _a.children, p = __rest(_a, ["children"]);
    return (React.createElement(NavLink, __assign({ to: "/" }, p), children));
}, function (_a) {
    var inverse = _a.inverse, vertically = _a.vertically, p = __rest(_a, ["inverse", "vertically"]);
    return Object.keys(p);
});
var Inner = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        visibility: 'hidden',
        paddingX: theme.space3,
        '> *': {
            marginX: "-" + theme.space3,
        },
    });
}, 'div', ['className']);
var NavbarBrand = createComponent(function (_a) {
    var theme = _a.theme, vertically = _a.vertically;
    return ({
        position: 'relative',
        fontSize: "calc(" + theme.fontSize + " + 4px)",
        whiteSpace: 'nowrap',
        float: vertically ? 'none' : 'left',
    });
}, function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement("div", { className: className },
        React.createElement(Brand, __assign({}, props), children),
        React.createElement(Inner, null, children)));
}, function (p) { return Object.keys(p); });
NavbarBrand.displayName = 'Navbar.Brand';
NavbarBrand.propTypes = {
    inverse: PropTypes.bool,
};
NavbarBrand.defaultProps = {
    inverse: false,
};
export default NavbarBrand;
//# sourceMappingURL=brand.js.map