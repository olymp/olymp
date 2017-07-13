var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
var Button = createComponent(function (_a) {
    var theme = _a.theme, open = _a.open, inverse = _a.inverse, _b = _a.size, size = _b === void 0 ? 20 : _b;
    return ({
        position: 'absolute',
        top: 10,
        right: theme.space3,
        width: Math.round(size * 1.3),
        height: size,
        cursor: 'pointer',
        ifSmallUp: {
            display: 'none',
        },
        '> span': {
            display: 'block',
            position: 'absolute',
            height: Math.round(size / 6),
            borderRadius: Math.round(size / 6),
            width: '100%',
            background: inverse ? theme.light : theme.color,
            left: 0,
            transform: 'rotate(0deg)',
            transition: '.25s ease-in-out',
            ':nth-child(1)': {
                top: open ? Math.round(size / 3) : 0,
                width: open && '0%',
                left: open && '50%',
            },
            ':nth-child(2)': {
                top: Math.round(size / 3),
                transform: open && 'rotate(45deg)',
            },
            ':nth-child(3)': {
                top: Math.round(size / 3),
                transform: open && 'rotate(-45deg)',
            },
            ':nth-child(4)': {
                top: open ? Math.round(size / 3) : Math.round(size / 3) * 2,
                width: open && '0%',
                left: open && '50%',
            },
        },
    });
}, function (_a) {
    var className = _a.className, onClick = _a.onClick;
    return (React.createElement("div", { className: className, onClick: onClick },
        React.createElement("span", null),
        React.createElement("span", null),
        React.createElement("span", null),
        React.createElement("span", null)));
}, function (p) { return Object.keys(p); });
var Container = createComponent(function (_a) {
    var open = _a.open;
    return ({
        width: '100%',
        ifMini: {
            '> div:nth-child(2)': {
                clear: 'both',
                transform: open ? 'scaleY(1)' : 'scaleY(0)',
                maxHeight: open ? 500 : 0,
                overflow: 'auto',
                transformOrigin: 'top',
                transition: 'all 0.25s ease-in-out',
            },
        },
    });
}, 'div', function (p) { return Object.keys(p); });
var Toggler = (function (_super) {
    __extends(Toggler, _super);
    function Toggler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { open: false };
        return _this;
    }
    Toggler.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, children = _a.children, isOpen = _a.isOpen, props = __rest(_a, ["className", "children", "isOpen"]);
        var open = this.state.open;
        var toggleState = function () { return _this.setState({ open: !open }); };
        var toggleMenu = this.props.toggleMenu || toggleState;
        return (React.createElement(Container, { className: className, open: isOpen || open },
            React.createElement(Button, __assign({}, props, { open: isOpen || open, onClick: toggleMenu })),
            Children.map(children, function (child) { return cloneElement(child, props); })));
    };
    return Toggler;
}(Component));
Toggler.PropTypes = {
    toggleMenu: PropTypes.func,
    isOpen: PropTypes.bool,
};
Toggler.defaultProps = {
    toggleMenu: undefined,
    isOpen: false,
};
export default Toggler;
//# sourceMappingURL=toggler.js.map