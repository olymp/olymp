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
import withItems from '../decorators/with-items';
import withCollection from '../decorators/with-collection';
import { Select } from 'antd';
var DetailEditor = (function (_super) {
    __extends(DetailEditor, _super);
    function DetailEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetailEditor.prototype.render = function () {
        var _a = this.props, data = _a.data, collection = _a.collection, items = _a.items, children = _a.children, value = _a.value, rest = __rest(_a, ["data", "collection", "items", "children", "value"]);
        return items && items.length
            ? React.createElement(Select, __assign({ value: value }, rest), items.map(function (item) {
                return (React.createElement(Select.Option, { key: item.id, value: item.id }, item.name));
            }))
            : React.createElement(Select, __assign({}, rest, { disabled: true }));
    };
    DetailEditor = __decorate([
        withCollection,
        withItems
    ], DetailEditor);
    return DetailEditor;
}(Component));
export default DetailEditor;
//# sourceMappingURL=detail.js.map