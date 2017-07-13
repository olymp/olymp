var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { Grid } from '../index';
import Link from './link';
var Column = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        padding: theme.space3,
        fontFamily: theme.fontFamily,
    });
}, 'div', function (p) { return Object.keys(p); });
var Title = createComponent(function (_a) {
    var theme = _a.theme, inverse = _a.inverse;
    return ({
        display: 'block',
        fontWeight: 'bold',
        marginBottom: theme.space3,
        padding: theme.space0,
        color: inverse ? theme.light : theme.dark,
    });
}, function (p) {
    return (React.createElement("h4", null,
        React.createElement(Link, __assign({}, p))));
}, function (p) { return Object.keys(p); });
var PaddingLink = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        padding: theme.space1 + " " + theme.space0,
    });
}, function (p) { return React.createElement(Link, __assign({}, p)); }, function (p) { return Object.keys(p); });
var Item = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        onHover: {
            '> div': {
                display: 'block',
            },
        },
    });
}, 'div', function (p) { return Object.keys(p); });
var SubMenu = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'none',
        paddingLeft: theme.space3,
        paddingY: theme.space1,
        fontSize: theme.fontSizeSmall,
    });
}, 'div', function (p) { return Object.keys(p); });
var MegaNav = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        width: 700,
        paddingX: theme.space3,
        paddingY: theme.space1,
        ifMini: {
            padding: 0,
        },
    });
}, function (_a) {
    var className = _a.className, pages = _a.pages, inverse = _a.inverse;
    return (React.createElement("div", { className: className },
        React.createElement(Grid, { size: pages.length }, pages.map(function (_a, i) {
            var id = _a.id, name = _a.name, children = _a.children, pathname = _a.pathname, onClick = _a.onClick;
            return (React.createElement(Grid.Item, { small: 1, key: id || i },
                React.createElement(Column, null,
                    React.createElement(Title, { to: pathname, inverse: inverse }, name),
                    children.map(function (child, cI) {
                        return (React.createElement(Item, { key: child.id || cI },
                            React.createElement(PaddingLink, { to: child.pathname, inverse: inverse }, child.name),
                            child.children &&
                                !!child.children.length &&
                                React.createElement(SubMenu, null, child.children.map(function (c, ccI) {
                                    return (React.createElement(PaddingLink, { to: c.pathname, inverse: inverse, key: c.id || ccI }, c.name));
                                }))));
                    }))));
        }))));
}, function (p) { return Object.keys(p); });
MegaNav.displayName = 'Navbar.Mega';
MegaNav.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        pathname: PropTypes.string,
        children: PropTypes.arrayOf(PropTypes.object),
    })),
    right: PropTypes.bool,
};
MegaNav.defaultProps = {
    pages: [],
    right: false,
};
export default MegaNav;
//# sourceMappingURL=mega.js.map