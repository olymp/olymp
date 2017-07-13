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
import React, { Component } from 'react';
import { withCollection } from '../decorators';
import { Button, Collapse } from 'antd';
import Form from './form';
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
        _this.mouseDown = function (index) { return function (e) {
            e.preventDefault();
            _this.removeItem(index);
        }; };
        _this.onRemove = function (index) {
            var _a = _this.props, onChange = _a.onChange, value = _a.value;
            onChange((value || []).filter(function (x, i) { return i !== index; }));
        };
        _this.createItem = function () {
            var _a = _this.props, onChange = _a.onChange, value = _a.value;
            onChange((value || []).concat([{}]));
        };
        _this.getHeader = function (title, index) {
            return (React.createElement("div", null,
                title,
                React.createElement("i", { className: "fa fa-close pull-right", onMouseDown: _this.mouseDown(index) })));
        };
        _this.onChangeItem = function (index, nestedValue) {
            var _a = _this.props, onChange = _a.onChange, value = _a.value;
            nestedValue = __assign({}, (value[index] || {}), nestedValue);
            onChange((value || []).map(function (x, i) { return (i === index ? nestedValue : x); }));
        };
        return _this;
    }
    SubForm.prototype.render = function () {
        var _this = this;
        var _a = this.props, value = _a.value, collection = _a.collection;
        return (React.createElement("div", null,
            React.createElement(Collapse, { accordion: true }, (value || []).map(function (value, i) {
                return (React.createElement(Collapse.Panel, { header: _this.getHeader(value.name || "Eintrag " + i, i), key: i },
                    React.createElement(Form, { onRemove: function () { return _this.onRemove(i); }, collection: collection, value: value, onChange: function (item) { return _this.onChangeItem(i, item); } })));
            })),
            React.createElement(Button, { onClick: this.createItem }, "Erstellen")));
    };
    SubForm = __decorate([
        withCollection
    ], SubForm);
    return SubForm;
}(Component));
export default SubForm;
//# sourceMappingURL=form-list.js.map