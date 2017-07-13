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
import React, { Component } from 'react';
import { createComponent } from 'olymp-fela';
var Logo = (function (_super) {
    __extends(Logo, _super);
    function Logo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logo.prototype.render = function () {
        var _a = this.props, title = _a.title, text = _a.text, icon = _a.icon, color = _a.color;
        if (icon) {
            return React.createElement(Icon, { color: color, width: icon, height: icon, icon: true });
        }
        return (React.createElement(Icon, { color: color, width: 190, height: 36 },
            React.createElement(Title, { color: color }, title),
            React.createElement(SubTitle, { color: color }, text)));
    };
    Logo.defaultProps = {
        title: 'OP Zentrum',
        text: 'Im GesundheitsZentrum',
    };
    return Logo;
}(Component));
export default Logo;
var LogoBig = createComponent(function (_a) {
    var color = _a.color;
    return ({
        fill: color,
    });
}, function (_a) {
    var className = _a.className;
    return (React.createElement("path", { className: className, d: "M23.9999995 24 L24 2.7 C24 2.7 23.3 0.7 21.9 1 C18.4139693 1.9 12 4 8.2 8 C4.5754908 11.8 1.7 18.9 1 22.3 C0.709504296 24.1 3.1 24 3.1 24 L23.9999995 24 Z" }));
}, function (p) { return Object.keys(p); });
var LogoSmall = createComponent(function () { return ({
    fill: '#828282',
}); }, function (_a) {
    var className = _a.className;
    return (React.createElement("path", { className: className, d: "M0 0.2 L0 9 C0 9 0.3 9.8 0.9 9.6 C2.4 9.3 5.2 8.4 6.8 6.8 C8.3 5.2 9.6 2.3 9.8 0.9 C10 0.2 9 0.2 9 0.2 L0 0.2 Z" }));
}, function (p) { return Object.keys(p); });
var Icon = createComponent(function (_a) {
    var theme = _a.theme, color = _a.color, width = _a.width, height = _a.height, icon = _a.icon;
    return ({
        width: width,
        height: height,
        fill: color || theme.color,
        maxWidth: icon ? 'auto' : 999,
        overflow: 'initial',
        display: 'block',
        position: icon && 'absolute',
        top: icon && '50%',
        bottom: icon && '50%',
        transform: icon && 'translate(-50%, -50%)',
        onHover: {
            transform: icon
                ? 'translate(-50%, -50%) perspective(500px) translate3d(0,0,100px)'
                : 'perspective(500px) translate3d(0,0px,20px)',
        },
        transition: 'fill 1s ease-in-out, transform 100ms ease-out',
    });
}, function (_a) {
    var className = _a.className, children = _a.children, color = _a.color, icon = _a.icon;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, viewBox: "0 0 " + (icon ? 36 : 191) + " 36", version: "1.1" },
        React.createElement("g", { transform: "scale(1.5)" },
            React.createElement(LogoBig, { color: color }),
            React.createElement(LogoSmall, null),
            children)));
}, function (p) { return Object.keys(p); });
var Title = createComponent(function () { return ({
    fontSize: 11,
    fontFamily: 'Times New Roman',
    fontStyle: 'italic',
    fontWeight: 700,
    fill: '#94828B',
}); }, function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement("text", { className: className },
        React.createElement("tspan", { x: "31", y: "11" }, children)));
}, function (p) { return Object.keys(p); });
var SubTitle = createComponent(function (_a) {
    var theme = _a.theme, color = _a.color;
    return ({
        fontSize: 10,
        fontFamily: 'Arial',
        fill: color || theme.color,
    });
}, function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement("text", { className: className },
        React.createElement("tspan", { x: "31", y: "22" }, children)));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=logo.js.map