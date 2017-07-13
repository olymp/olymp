var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import Portal from 'react-portal';
import { Menu, Tooltip, Icon } from 'antd';
import { createComponent } from 'react-fela';
export var Button = createComponent(function (_a) {
    var theme = _a.theme, active = _a.active;
    return ({
        paddingX: 20,
        '> svg': {
            fill: active ? theme.light : theme.light2,
            size: 16,
            marginBottom: -4,
        },
        '> div > svg': {
            fill: active ? theme.light : theme.light2,
            size: 16,
            marginBottom: -4,
        }
    });
}, function (_a) {
    var onMouseDown = _a.onMouseDown, tooltip = _a.tooltip, children = _a.children, className = _a.className;
    return (React.createElement("div", { onMouseDown: onMouseDown, className: className },
        React.createElement(Tooltip, { placement: "bottom", title: tooltip || '' }, children)));
}, function (p) { return Object.keys(p); });
var Close = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'absolute!important',
        right: 0,
    });
}, function (p) { return React.createElement(Menu.Item, __assign({}, p)); }, function (p) { return Object.keys(p); });
export default createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'fixed',
        top: 0,
        zIndex: 10,
        width: '100%',
        boxShadow: 'inset 0 -10px 10px -10px #000000',
        paddingX: theme.space2,
        justifyContent: 'center',
        display: 'flex',
        '> li': {
            padding: 0,
        },
    });
}, function (props) {
    var isOpened = props.isOpened, className = props.className, children = props.children, show = props.show;
    if (!isOpened) {
        return React.createElement("div", null);
    }
    return (React.createElement(Portal, { isOpened: !!isOpened },
        React.createElement(Menu, { style: !show ? { display: 'none' } : null, selectedKeys: [], className: className, mode: "horizontal", theme: "dark" },
            children,
            React.createElement(Close, null,
                React.createElement(Icon, { type: "close" })))));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=toolbar.js.map