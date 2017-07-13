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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
import { withCollection } from '../decorators';
import { getEditor, getInitialValue, getValidationRules, } from '../components/form/utils';
import { Button, Form } from 'antd';
import { throttle } from 'lodash';
var fieldNames = [
    'createdBy',
    'createdAt',
    'updatedBy',
    'updatedAt',
    'updatedById',
    'createdById',
];
var formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 14 } };
var formItemLayout0 = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };
var SubForm = (function (_super) {
    __extends(SubForm, _super);
    function SubForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.removeItem = function (index) {
            var _a = _this.props, onChange = _a.onChange, value = _a.value;
            return onChange((value || []).filter(function (x, i) { return i !== index; }));
        };
        _this.createItem = function () {
            var _a = _this.props, onChange = _a.onChange, value = _a.value;
            return onChange((value || []).concat([{}]));
        };
        _this.patchItem = function (index, nestedValue) {
            var _a = _this.props, onChange = _a.onChange, value = _a.value;
            return onChange((value || []).map(function (x, i) { return (i === index ? nestedValue : x); }));
        };
        _this.mouseDown = function (index) { return function (e) {
            e.preventDefault();
            _this.removeItem(index);
        }; };
        _this.getHeader = function (title, index) {
            return (React.createElement("div", null,
                title,
                React.createElement("i", { className: "fa fa-close pull-right", onMouseDown: _this.mouseDown(index) })));
        };
        return _this;
    }
    SubForm.prototype.render = function () {
        var _this = this;
        var _a = this.props, value = _a.value, collection = _a.collection, onChange = _a.onChange, form = _a.form, onRemove = _a.onRemove, rest = __rest(_a, ["value", "collection", "onChange", "form", "onRemove"]);
        return (React.createElement("div", { className: "ant-form" },
            (collection ? collection.fields : [])
                .filter(function (_a) {
                var name = _a.name;
                return name !== 'id' && fieldNames.indexOf(name) === -1;
            })
                .map(function (field) {
                return (React.createElement(Form.Item, __assign({ label: field.name, key: field.name, hasFeedback: true }, (field.type.name === 'Blocks'
                    ? formItemLayout0
                    : formItemLayout)), form.getFieldDecorator(field.name, {
                    initialValue: getInitialValue({ item: value, form: form }, field),
                    rules: getValidationRules(field),
                    valuePropName: field.type.name === 'Boolean'
                        ? 'checked'
                        : 'value',
                    disabled: name === 'createdAt' ||
                        name === 'createdBy' ||
                        name === 'updatedAt' ||
                        name === 'updatedBy',
                })(getEditor({
                    field: field,
                    item: value,
                    onChange: function (v) {
                        return _this.patchItem(i, __assign({}, value, (_a = {}, _a[field.name] = v && v.target ? v.target.value : v, _a)));
                        var _a;
                    },
                }))));
            }),
            onRemove && React.createElement(Button, { onClick: onRemove, type: "danger" }, "L\u00F6schen")));
    };
    SubForm = __decorate([
        withCollection,
        Form.create({
            onValuesChange: throttle(function (props, values) {
                props.onChange(values);
            }, 800, { trailing: true, leading: false })
        })
    ], SubForm);
    return SubForm;
}(Component));
export default SubForm;
//# sourceMappingURL=form.js.map