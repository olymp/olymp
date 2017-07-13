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
import { withRouter, Link } from 'olymp';
import { Menu, Icon } from 'antd';
import { Modal, createComponent } from 'olymp-fela';
import { upperFirst } from 'lodash';
import { Gateway } from 'react-gateway';
import { withItem } from '../decorators';
import { DetailForm } from '../components';
var getFormSchema = function (_a) {
    var fields = _a.fields;
    return fields.reduce(function (result, field) {
        if (field.type.name === 'Blocks') {
            result[upperFirst(field.name)] = [field];
        }
        else if (field.type.name === 'Image') {
            result[upperFirst(field.name)] = [field];
        }
        else {
            var group = field['@'].detail ? field['@'].detail.arg0 : 'Allgemein';
            if (!result[group]) {
                result[group] = [];
            }
            result[group].push(field);
        }
        return result;
    }, {});
};
var Flex = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.space3,
        '> ul': {
            zIndex: 1,
        },
        '> form': {
            overflow: 'auto',
        },
    });
}, 'div', []);
var CollectionDetail = (function (_super) {
    __extends(CollectionDetail, _super);
    function CollectionDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionDetail.prototype.render = function () {
        var _a = this.props, item = _a.item, collection = _a.collection, onSave = _a.onSave, pathname = _a.pathname, query = _a.query;
        var schema = getFormSchema(collection);
        var keys = Object.keys(schema);
        var currentTab = query.tab || Object.keys(schema)[0];
        return (React.createElement(Modal, null,
            React.createElement(Gateway, { into: "navigation" },
                React.createElement(Menu.Item, { key: "save" },
                    React.createElement("a", { href: "javascript:;", onClick: onSave },
                        React.createElement(Icon, { type: "save" }),
                        " Speichern")),
                keys.map(function (tab) {
                    return (React.createElement(Menu.Item, { key: tab },
                        React.createElement(Link, { to: { pathname: pathname, query: __assign({}, query, { tab: tab }) } }, tab)));
                })),
            React.createElement(DetailForm, __assign({}, this.props, { item: item || {}, fields: schema[currentTab], onCreate: onSave }))));
    };
    CollectionDetail = __decorate([
        withRouter,
        withItem
    ], CollectionDetail);
    return CollectionDetail;
}(Component));
export default CollectionDetail;
//# sourceMappingURL=modal.js.map