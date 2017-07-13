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
import { withRouter } from 'olymp';
import { Menu, Icon, Button } from 'antd';
import { ContentLoader, createComponent } from 'olymp-fela';
import { upperFirst } from 'lodash';
import { Gateway } from 'react-gateway';
import { withItem } from '../decorators';
import { DetailForm } from '../components';
var getFormSchema = function (_a) {
    var fields = _a.fields;
    return fields.reduce(function (result, field) {
        var label = !!field['@'] && !!field['@'].label && field['@'].label.arg0;
        if (field.type.name === 'Blocks') {
            result[label || upperFirst(field.name)] = [field];
        }
        else if (field.type.name === 'Image') {
            result[label || upperFirst(field.name)] = [field];
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
        paddingX: theme.space3,
        '> ul': {
            zIndex: 1,
        },
        '> form': {
            overflow: 'auto',
        },
    });
}, 'div', []);
var HiddenForm = createComponent(function (_a) {
    var visible = _a.visible;
    return ({
        display: visible ? 'block' : 'none',
    });
}, function (p) { return React.createElement(DetailForm, __assign({}, p)); }, function (p) { return Object.keys(p); });
var CollectionDetail = (function (_super) {
    __extends(CollectionDetail, _super);
    function CollectionDetail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { tab: null };
        return _this;
    }
    CollectionDetail.prototype.render = function () {
        var _this = this;
        var _a = this.props, id = _a.id, item = _a.item, collection = _a.collection, onSave = _a.onSave, onClone = _a.onClone, pathname = _a.pathname, query = _a.query;
        var schema = getFormSchema(collection);
        var keys = Object.keys(schema);
        var currentTab = this.state.tab || Object.keys(schema)[0];
        return (React.createElement(ContentLoader, { isLoading: id && !item },
            React.createElement(Flex, null,
                React.createElement(Gateway, { into: "navigation" },
                    React.createElement(Menu.Item, { key: "save" },
                        React.createElement("a", { href: "javascript:;", onClick: onSave },
                            React.createElement(Button, { type: "primary", style: { margin: '0 -15px' } },
                                React.createElement(Icon, { type: "save" }),
                                " Speichern"))),
                    React.createElement(Menu.Item, { key: "clone" },
                        React.createElement("a", { href: "javascript:;", onClick: onClone },
                            React.createElement(Button, { type: "primary", style: { margin: '0 -15px' } },
                                React.createElement(Icon, { type: "copy" })))),
                    keys.map(function (tab) {
                        return (React.createElement(Menu.Item, { key: tab, className: tab === currentTab && 'ant-menu-item-selected' },
                            React.createElement("a", { onClick: function () { return _this.setState({ tab: tab }); } }, tab)));
                    })),
                Object.keys(schema).map(function (tab) {
                    return React.createElement(HiddenForm, __assign({}, _this.props, { item: item || {}, fields: schema[tab], key: tab, visible: tab === currentTab, onCreate: onSave }));
                }))));
    };
    CollectionDetail = __decorate([
        withRouter,
        withItem
    ], CollectionDetail);
    return CollectionDetail;
}(Component));
export default CollectionDetail;
//# sourceMappingURL=detail.js.map