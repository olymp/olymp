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
import React, { Component, createElement, PropTypes } from 'react';
import { throttle, interpolate } from './utils';
import { textToAst, astToReact } from './processors';
import connect from './connect';
export default function (options) {
    var createTemplate = function (text) {
        var ast = textToAst(text);
        var component = function (_a) {
            var children = _a.children, value = _a.value, props = __rest(_a, ["children", "value"]);
            return (React.createElement("div", null, ast.map(toReact(__assign({}, props, { value: value, arg0: value, content: children })))));
        };
        component.propTypes = {};
        interpolate(text, function (v) { return component.propTypes[v] = PropTypes.string; });
        return component;
    };
    var components = options.components ? Object.keys(options.components).reduce(function (store, key) {
        store[key] = typeof options.components[key] === 'string'
            ? connect(createTemplate(options.components[key]))
            : connect(options.components[key]);
        return store;
    }, {}) : {};
    var decorators = options.decorators || {};
    var fallback = options.fallback;
    var toReact = astToReact({ components: components, decorators: decorators, fallback: fallback });
    var Hashtax = (function (_super) {
        __extends(Hashtax, _super);
        function Hashtax() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Hashtax.prototype.shouldComponentUpdate = function (newProps) {
            var _this = this;
            var newThrottle = newProps.throttle;
            var oldThrottle = this.props.throttle;
            if (newThrottle) {
                if (!this.throttler || newThrottle !== oldThrottle) {
                    this.throttler = throttle(newThrottle);
                }
                this.throttler(function () {
                    if (_this.unmounting)
                        return;
                    _this.forceUpdate();
                });
                return false;
            }
            delete this.throttler;
            return true;
        };
        Hashtax.prototype.componentWillUnmount = function () {
            this.unmounting = true;
        };
        Hashtax.prototype.render = function () {
            var _a = this.props, value = _a.value, className = _a.className, style = _a.style, type = _a.type, context = __rest(_a, ["value", "className", "style", "type"]);
            if (!value)
                return null;
            var ast = textToAst(value);
            return createElement(type, { className: className, style: style }, ast.map(toReact(context)));
        };
        Hashtax.propTypes = {
            type: PropTypes.string,
            throttle: PropTypes.number,
            value: PropTypes.string,
        };
        Hashtax.defaultProps = {
            type: 'div',
            throttle: null,
            value: '',
        };
        return Hashtax;
    }(Component));
    Hashtax.render = function (value, context) { return textToAst(value).map(toReact(context)); };
    Hashtax.components = components;
    Hashtax.decorators = decorators;
    Hashtax.addComponent = function (key, component) {
        components[key] = typeof component === 'string'
            ? connect(createTemplate(component))
            : connect(component);
        toReact = astToReact({ components: components, decorators: decorators, templates: templates, fallback: fallback });
    };
    Hashtax.addDecorator = function (key, decorator) {
        decorators[key] = decorator;
        toReact = astToReact({ components: components, decorators: decorators, templates: templates, fallback: fallback });
    };
    return Hashtax;
};
//# sourceMappingURL=hashtax.1.js.map