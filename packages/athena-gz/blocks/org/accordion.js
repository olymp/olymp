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
import React, { Component } from 'react';
import { createComponent, border } from 'olymp-fela';
import { FaAngleRight, FaAngleLeft } from 'olymp-icons';
import { SlateMate } from 'olymp-slate';
var Icon = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        float: 'right',
    });
}, function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement("span", { className: className }, children));
}, function (p) { return Object.keys(p); });
var Link = createComponent(function (_a) {
    var theme = _a.theme, color = _a.color, active = _a.active;
    return ({
        paddingTop: theme.space1,
        cursor: 'pointer',
        display: 'block',
        borderBottom: active ? border(theme, color) : border(theme, 'transparent'),
        onHover: {
            backgroundColor: theme.dark5,
            borderRadius: theme.borderRadius,
            paddingX: theme.space2,
            marginX: "-" + theme.space2,
        },
    });
}, function (_a) {
    var className = _a.className, children = _a.children, color = _a.color, active = _a.active, onClick = _a.onClick;
    return (React.createElement("div", { className: className, onClick: onClick },
        children,
        React.createElement(Icon, null, !active
            ? React.createElement(FaAngleRight, { size: 14, color: color })
            : React.createElement(FaAngleLeft, { size: 14, color: color }))));
}, function (p) { return Object.keys(p); });
var Text = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        padding: theme.space2,
        color: theme.dark2,
        hyphens: 'auto',
        textAlign: 'justify',
    });
}, function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement("div", { className: className },
        React.createElement(SlateMate, { value: children, readOnly: true })));
}, function (p) { return Object.keys(p); });
var Container = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        marginY: 0,
    });
}, function (_a) {
    var className = _a.className, name = _a.name, color = _a.color, text = _a.text, active = _a.active, onClick = _a.onClick;
    return (React.createElement("div", { className: className },
        React.createElement(Link, { onClick: onClick, color: color, active: active }, name),
        active &&
            React.createElement(Text, null, text)));
}, function (p) { return Object.keys(p); });
var Accordion = (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { active: false };
        return _this;
    }
    Accordion.prototype.render = function () {
        var _this = this;
        var active = this.state.active;
        return (React.createElement(Container, __assign({}, this.props, { active: active, onClick: function () { return _this.setState({ active: !active }); } })));
    };
    return Accordion;
}(Component));
export default Accordion;
//# sourceMappingURL=accordion.js.map