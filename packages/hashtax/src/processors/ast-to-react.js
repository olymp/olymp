var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { createElement } from 'react';
var defaultComponent = function (_a) {
    var componentName = _a.componentName, children = _a.children, className = _a.className, style = _a.style;
    return (React.createElement("div", { style: style, className: className },
        React.createElement("b", null,
            "Type not found: ",
            componentName),
        children));
};
export default function (_a) {
    var components = _a.components, decorators = _a.decorators, fallback = _a.fallback;
    fallback = fallback || defaultComponent;
    var cache = {};
    var create = function (name, props, children, decos) {
        var key = name + "@" + decos.map(function (x) { return x.raw; }).join('|');
        var component = cache[key] || components[name] || fallback;
        var needFallback = !components[name];
        if (needFallback) {
            props.componentName = name;
        }
        if (!cache[key]) {
            decos.forEach(function (_a) {
                var type = _a.type, args = _a.args;
                if (decorators[type]) {
                    component = decorators[type](component, args);
                }
            });
            cache[key] = component;
        }
        return createElement(component, props, children);
    };
    var compile = function (context) {
        if (context === void 0) { context = {}; }
        return function (node, key) {
            var type = node.type || 'text';
            var children = node.children || [];
            var decos = node.decorators || [];
            var props = node.args ? __assign({}, context, node.args) : __assign({}, context);
            if (key !== undefined) {
                props.key = key;
            }
            if (node.text) {
                props.text = node.text;
            }
            return create(type, props, children.map(compile(context)), decos);
        };
    };
    return compile;
};
//# sourceMappingURL=ast-to-react.js.map