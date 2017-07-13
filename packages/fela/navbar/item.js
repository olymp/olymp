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
import { fade } from 'olymp-fela';
import Link from './link';
import { FaAngleDown, FaAngleLeft, FaAngleRight } from 'olymp-icons';
var Icon = createComponent(function (_a) {
    var theme = _a.theme, inverse = _a.inverse;
    return ({
        fill: "" + (inverse ? theme.light2 : theme.color),
        centerY: true,
        right: theme.space3,
    });
}, function (_a) {
    var className = _a.className, vertically = _a.vertically, right = _a.right;
    return !vertically
        ? React.createElement(FaAngleDown, { className: className, size: 15 })
        : right
            ? React.createElement(FaAngleLeft, { className: className, size: 15 })
            : React.createElement(FaAngleRight, { className: className, size: 15 });
}, function (p) { return Object.keys(p); });
var NavItem = createComponent(function (_a) {
    var theme = _a.theme, fill = _a.fill, inverse = _a.inverse, vertically = _a.vertically, right = _a.right, pages = _a.pages;
    return ({
        flex: fill && '1 1 auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: fill ? 'column' : right && vertically && 'row-reverse',
        width: vertically && '100%',
        float: !vertically && 'left',
        position: 'relative',
        padding: theme.space3,
        paddingRight: pages && pages.length ? theme.space4 : theme.space3,
        onHover: {
            backgroundColor: inverse && fade('#000000', 10),
            '> div': {
                display: 'block',
            },
        },
        ifMini: {
            float: 'none',
            display: 'block',
            width: '100%',
        },
    });
}, function (_a) {
    var className = _a.className, pathname = _a.pathname, children = _a.children, title = _a.title, fill = _a.fill, inverse = _a.inverse, vertically = _a.vertically, right = _a.right, pages = _a.pages, onClick = _a.onClick, onItemMouseEnter = _a.onItemMouseEnter, props = __rest(_a, ["className", "pathname", "children", "title", "fill", "inverse", "vertically", "right", "pages", "onClick", "onItemMouseEnter"]);
    return (React.createElement("div", { className: className, onMouseEnter: onItemMouseEnter ? function () { return onItemMouseEnter(props); } : undefined },
        React.createElement(Link, { to: pathname, onClick: onClick, inverse: inverse },
            title,
            pages &&
                !!pages.length &&
                React.createElement(Icon, { vertically: vertically, right: right, inverse: inverse })),
        pages &&
            !!pages.length &&
            props.renderNav(__assign({}, props, { inverse: inverse,
                vertically: vertically,
                right: right,
                pages: pages, sub: true })),
        Children.map(children, function (child) {
            return cloneElement(child, __assign({}, props, { inverse: inverse, vertically: vertically, right: right, sub: true }));
        })));
}, function (p) { return Object.keys(p); });
NavItem.displayName = 'Navbar.Item';
NavItem.propTypes = {
    title: PropTypes.node.isRequired,
    to: PropTypes.string,
    mega: PropTypes.func,
    onClick: PropTypes.func,
};
NavItem.defaultProps = {
    to: undefined,
    mega: null,
    onClick: undefined,
};
export default NavItem;
//# sourceMappingURL=item.js.map