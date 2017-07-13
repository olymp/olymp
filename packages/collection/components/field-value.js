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
import { Image } from 'olymp-utils';
import { Checkbox } from 'antd';
import { Plain, Raw } from 'slate';
import moment from 'moment';
var resolveFieldValue = function (value, meta, fieldProps) {
    if (!meta) {
        return null;
    }
    if ((meta.type.kind === 'SCALAR' && meta.type.name !== 'Blocks') ||
        meta.type.kind === 'ENUM') {
        switch (meta.type.name) {
            case 'Date':
                return !!value && React.createElement("span", null, moment(value).format('DD.MM.YYYY'));
            case 'DateTime':
                return (!!value &&
                    React.createElement("span", null, moment(value).format('DD.MM.YYYY, HH:mm') + " Uhr"));
            case 'Boolean':
                return (React.createElement(Checkbox, __assign({ checked: value, disabled: true }, fieldProps), value ? 'Ja' : 'Nein'));
            default:
                return value;
        }
    }
    else if (meta.type.kind === 'LIST') {
        if (value && value.length && value.map(function (x) { return x.name; }).join('').length > 0) {
            return value.map(function (x) { return x.name; }).join(', ');
        }
        if (value && value.length) {
            return value.length + " " + (value.length > 1 ? 'Elemente' : 'Element');
        }
        return null;
    }
    else {
        switch (meta.type.name) {
            case 'Image':
                return !!value && React.createElement(Image, __assign({ value: value }, fieldProps));
            case 'Blocks':
                return (!!value &&
                    Plain.serialize(Raw.deserialize(JSON.parse(JSON.stringify(value)), { terse: true }))
                        .split('\n')
                        .join(' '));
            default:
                return !!value && React.createElement("span", null, value.name || 'Ja');
        }
    }
};
var FieldValue = (function (_super) {
    __extends(FieldValue, _super);
    function FieldValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldValue.prototype.render = function () {
        var _a = this.props, value = _a.value, meta = _a.meta, fieldProps = _a.fieldProps;
        var content = resolveFieldValue(value, meta, fieldProps) || null;
        if (typeof content === 'string') {
            return React.createElement("span", null, content);
        }
        return content;
    };
    return FieldValue;
}(Component));
export default FieldValue;
//# sourceMappingURL=field-value.js.map