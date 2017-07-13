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
import React, { Component } from 'react';
import { Form } from 'antd';
import FormItem from './item';
var excludedFields = [
    'id',
    'createdBy',
    'createdAt',
    'updatedBy',
    'updatedAt',
    'updatedById',
    'createdById',
];
var FormComponent = (function (_super) {
    __extends(FormComponent, _super);
    function FormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormComponent.prototype.render = function () {
        var _a = this.props, _b = _a.fields, fields = _b === void 0 ? [] : _b, inline = _a.inline, vertical = _a.vertical, children = _a.children, item = _a.item, style = _a.style, className = _a.className, validateFields = _a.validateFields, form = _a.form, rest = __rest(_a, ["fields", "inline", "vertical", "children", "item", "style", "className", "validateFields", "form"]);
        var mappedFields = fields.reduce(function (result, field) {
            if (excludedFields.includes(field.name)) {
                return result;
            }
            if (field['@'].disabled) {
                return result;
            }
            if (field.name.endsWith('Id') || field.name.endsWith('Ids')) {
                if (field.name.endsWith('Id')) {
                    field['@'].idField = fields.find(function (_a) {
                        var name = _a.name;
                        return name + "Id" === field.name;
                    });
                }
                else if (field.name.endsWith('Ids')) {
                    field['@'].idField = fields.find(function (_a) {
                        var name = _a.name;
                        return name + "Ids" === field.name;
                    });
                }
                result.splice(result.findIndex(function (_a) {
                    var name = _a.name;
                    return name === field['@'].idField.name;
                }), 1);
            }
            if (field['@'].end) {
                return result;
            }
            if (field['@'].start) {
                var end = fields.find(function (x) { return x['@'].end; });
                field['@'].endField = end;
            }
            result.push(field);
            return result;
        }, []);
        return (React.createElement(Form, { layout: (vertical && 'vertical') || (inline && 'inline'), style: style, className: className },
            mappedFields.map(function (field) {
                return React.createElement(FormItem, __assign({}, rest, { form: form, field: field, item: item, key: field.name }));
            }),
            children));
    };
    return FormComponent;
}(Component));
export default FormComponent;
//# sourceMappingURL=form.js.map