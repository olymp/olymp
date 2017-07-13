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
import NavLink from 'react-router-dom/NavLink';
import { createComponent } from 'react-fela';
var Link = createComponent(function (_a) {
    var theme = _a.theme, inverse = _a.inverse;
    return ({
        cursor: 'pointer',
        onHover: {
            color: inverse ? theme.light : theme.dark,
            textDecoration: "underline solid " + (inverse ? theme.light : theme.color),
        },
        '&.active': {
            textDecoration: "underline solid " + (inverse ? theme.light : theme.color),
        },
    });
}, function (_a) {
    var inverse = _a.inverse, onClick = _a.onClick, rest = __rest(_a, ["inverse", "onClick"]);
    return onClick ? React.createElement("span", __assign({ onClick: onClick }, rest)) : React.createElement(NavLink, __assign({}, rest));
}, function (p) { return Object.keys(p); });
var Placeholder = createComponent(function () { return ({
    cursor: 'default',
}); }, 'span', function (_a) {
    var inverse = _a.inverse, p = __rest(_a, ["inverse"]);
    return Object.keys(p);
});
var NavbarLink = createComponent(function (_a) {
    var theme = _a.theme, inverse = _a.inverse;
    return ({
        color: inverse ? theme.light2 : theme.dark2,
        display: 'block',
        fontFamily: theme.fontFamily,
        textDecoration: 'none',
        ellipsis: true,
    });
}, function (_a) {
    var to = _a.to, onClick = _a.onClick, rest = __rest(_a, ["to", "onClick"]);
    return to || onClick
        ? React.createElement(Link, __assign({ to: to, onClick: onClick }, rest))
        : React.createElement(Placeholder, __assign({}, rest));
}, function (p) { return Object.keys(p); });
NavbarLink.displayName = 'Navbar.Link';
NavbarLink.propTypes = {
    to: PropTypes.string,
    onClick: PropTypes.func,
};
NavbarLink.defaultProps = {
    to: undefined,
    onClick: undefined,
};
export default NavbarLink;
//# sourceMappingURL=link.js.map