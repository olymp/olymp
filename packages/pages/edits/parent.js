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
import { TreeSelect, Form } from 'antd';
import { layout, getRules } from 'olymp-ui';
var ParentSelect = function (_a) {
    var item = _a.item, field = _a.field, label = _a.label, layout = _a.layout, initialValue = _a.initialValue, rules = _a.rules, placeholder = _a.placeholder, form = _a.form, rest = __rest(_a, ["item", "field", "label", "layout", "initialValue", "rules", "placeholder", "form"]);
    return (React.createElement(Form.Item, __assign({ key: field, label: label }, layout), form.getFieldDecorator(field, {
        initialValue: item ? item[field] : initialValue,
        rules: getRules(rules, label),
    })(React.createElement(TreeSelect, __assign({ placeholder: placeholder || label, style: { width: '100%' }, dropdownStyle: { maxHeight: 400, overflowY: 'auto' } }, rest)))));
};
ParentSelect.defaultProps = { layout: layout };
export default ParentSelect;
//# sourceMappingURL=parent.js.map