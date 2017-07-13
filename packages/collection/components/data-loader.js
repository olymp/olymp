var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { Spin } from 'antd';
export default function (_a) {
    var isEmpty = _a.isEmpty, _b = _a.placeholder, placeholder = _b === void 0 ? 'Keine Daten vorhanden' : _b, _c = _a.loading, loading = _c === void 0 ? 'Daten werden geladen' : _c, children = _a.children, style = _a.style, className = _a.className;
    var containerStyle = __assign({ width: '100%', minHeight: 100 }, style);
    var text = function (content) {
        return (React.createElement("div", { style: __assign({ textAlign: 'center', display: 'block', padding: '2rem', margin: 0 }, containerStyle) },
            React.createElement("h1", null, content)));
    };
    if (isEmpty) {
        return Array.isArray(isEmpty) && !isEmpty.length
            ? React.createElement("div", { style: containerStyle, className: className }, text(placeholder))
            : React.createElement("div", { style: style, className: className }, children);
    }
    return (React.createElement(Spin, { style: containerStyle, size: "large", className: className }, text(loading)));
};
//# sourceMappingURL=data-loader.js.map