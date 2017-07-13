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
import { Select, Input } from 'antd';
import tinycolor from 'tinycolor2';
import { withColors } from '../decorators';
var ColorPicker = null;
if (typeof document !== 'undefined') {
}
var hasNativePicker = function () {
    if (!ColorPicker) {
        return true;
    }
    if (typeof document === 'undefined') {
        return true;
    }
    if (!document.createElement) {
        return true;
    }
    var i = document.createElement('input');
    i.setAttribute('type', 'color');
    return i.type !== 'text';
};
var ColorEditor = function (_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.colors, colors = _b === void 0 ? [] : _b, rest = __rest(_a, ["value", "onChange", "colors"]);
    var newColors = colors.slice();
    if (!value) {
        value = '#000000';
    }
    var isOwnColor;
    if (value && value !== 'other') {
        var valueIndex = colors.findIndex(function (color) {
            return tinycolor(value).toRgbString() === tinycolor(color.color).toRgbString();
        });
        isOwnColor = valueIndex === -1;
        if (isOwnColor) {
            newColors.push({ color: value, name: value });
        }
    }
    var select;
    if (colors.length) {
        select = (React.createElement(Select, __assign({ showSearch: true, value: value && tinycolor(value).toRgbString() }, rest, { filterOption: function (input, option) {
                return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
            } }),
            newColors.map(function (color, i) {
                return (React.createElement(Select.Option, { value: tinycolor(color.color).toRgbString(), key: i },
                    React.createElement("i", { className: "fa fa-square", style: { color: tinycolor(color.color).toRgbString() } }),
                    ' ',
                    color.name));
            }),
            React.createElement(Select.Option, { value: 'other', key: 'other' },
                React.createElement("span", { className: "react-custom-trigger" }, "Eigene Farbe"))));
    }
    var picker;
    if (!colors.length || value === 'other' || isOwnColor) {
        if (hasNativePicker()) {
            picker = (React.createElement(Input, { type: "color", style: { width: 100 }, value: tinycolor(value).toHexString(), defaultValue: tinycolor(value).toHexString(), onChange: onChange }));
        }
        else {
            picker = React.createElement(ColorPicker, __assign({}, rest, { value: value }));
        }
    }
    return (React.createElement("div", null,
        React.createElement("div", null, select),
        React.createElement("div", { style: { marginTop: 2 } }, picker)));
};
export default withColors(ColorEditor);
//# sourceMappingURL=color.js.map