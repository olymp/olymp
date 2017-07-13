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
import React from 'react';
import { createComponent } from 'olymp-fela';
import { Input, Icon } from 'antd';
export default createComponent(function () { return ({
    padding: 6,
    borderTop: '1px solid #eee',
    backgroundColor: 'rgba(233, 233, 233, 0.47)',
}); }, function (_a) {
    var className = _a.className, onChange = _a.onChange, children = _a.children, value = _a.value, placeholder = _a.placeholder, props = __rest(_a, ["className", "onChange", "children", "value", "placeholder"]);
    var suffix = value
        ? React.createElement(Icon, { type: "close-circle", onClick: function () { return onChange(null); } })
        : null;
    return (React.createElement("div", { className: className },
        children,
        React.createElement(Input, __assign({ placeholder: placeholder || 'Filter ...', suffix: suffix, value: value, onChange: function (e) { return onChange(e.target.value); } }, props))));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=filter.js.map