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
import Toggler from './toggler';
import Container from '../container';
import Nav from './nav';
import Item from './item';
import Sub from './sub';
import Brand from './brand';
var renderItem = function (props) { return React.createElement(Item, __assign({}, props)); };
var renderNav = function (props) { return React.createElement(Nav, __assign({}, props, { sub: true })); };
var WithContainer = function (_a) {
    var container = _a.container, rest = __rest(_a, ["container"]);
    return container ? React.createElement(Container, __assign({}, rest)) : React.createElement("div", __assign({}, rest));
};
var Inner = createComponent(function (_a) {
    var vertically = _a.vertically;
    return ({
        display: 'flex',
        flexDirection: vertically ? 'column' : 'row',
        alignItems: vertically ? 'flex-start' : 'stretch',
        clearfix: true,
        ifMini: {
            flexDirection: 'column',
        },
    });
}, 'div', ['className']);
var Navbar = createComponent(function (_a) {
    var theme = _a.theme, inverse = _a.inverse, vertically = _a.vertically, full = _a.full;
    return ({
        backgroundColor: inverse && theme.color,
        background: inverse && theme.color,
        borderRadius: !full && theme.borderRadius,
        margin: !full && theme.space2,
        width: full && '100%',
        minWidth: vertically && 200,
        ifMini: {
            margin: theme.space0,
        },
    });
}, function (_a) {
    var className = _a.className, brand = _a.brand, children = _a.children, pages = _a.pages, container = _a.container, inverse = _a.inverse, vertically = _a.vertically, props = __rest(_a, ["className", "brand", "children", "pages", "container", "inverse", "vertically"]);
    return (React.createElement("nav", { className: className },
        React.createElement(WithContainer, { container: container },
            React.createElement(Inner, { vertically: vertically },
                brand &&
                    React.createElement(Brand, { inverse: inverse, vertically: vertically }, brand),
                pages &&
                    !!pages.length &&
                    React.createElement(Toggler, __assign({}, props, { inverse: inverse, vertically: vertically, pages: pages, renderItem: renderItem, renderNav: renderNav }),
                        React.createElement(Sub, null)),
                Children.map(children, function (child) {
                    return cloneElement(child, __assign({}, props, { inverse: inverse,
                        vertically: vertically,
                        renderItem: renderItem,
                        renderNav: renderNav }));
                })))));
}, function (p) { return Object.keys(p); });
Navbar.displayName = 'Navbar';
Navbar.propTypes = {
    brand: PropTypes.node,
    vertically: PropTypes.bool,
    inverse: PropTypes.bool,
    full: PropTypes.bool,
    fill: PropTypes.bool,
};
Navbar.defaultProps = {
    brand: undefined,
    vertically: false,
    inverse: false,
    full: false,
    fill: false,
};
export default Navbar;
//# sourceMappingURL=navbar.js.map