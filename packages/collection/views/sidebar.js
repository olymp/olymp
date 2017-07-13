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
import { withRouter, Link } from 'olymp-utils';
import { Dropdown, Menu, Icon, Button, Tabs } from 'antd';
import { Image } from 'olymp-cloudinary';
import { FieldValue } from '../components';
import { Sidebar, List } from 'olymp-ui';
var states = {
    PUBLISHED: 'Öffentlich',
    DRAFT: 'Ablage',
    REMOVED: 'Papierkorb',
};
var CollectionListSidebar = (function (_super) {
    __extends(CollectionListSidebar, _super);
    function CollectionListSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getLink = function (_a) {
            var id = _a.id;
            var _b = _this.props, typeName = _b.typeName, location = _b.location;
            var pathname = location.pathname;
            return {
                pathname: pathname,
                query: __assign({}, location.query, (_c = {}, _c["@" + typeName.toLowerCase()] = id, _c)),
            };
            var _c;
        };
        _this.resolveFieldValue = function (item, field, _a, fieldProps) {
            var defaultFieldName = _a.defaultFieldName, defaultValue = _a.defaultValue;
            var fieldName = _this.resolveFieldName(item, field, defaultFieldName);
            var meta = _this.resolveField(fieldName);
            var startField = _this.resolveFieldName(item, 'start');
            var endField = _this.resolveFieldName(item, 'end');
            if (startField && endField && fieldName === startField) {
                var start = !!item[startField] &&
                    React.createElement(FieldValue, { value: item[startField], meta: meta, fieldProps: fieldProps });
                var end = !!item[endField] &&
                    React.createElement(FieldValue, { value: item[endField], meta: meta, fieldProps: fieldProps });
                if (start && end) {
                    return (React.createElement("span", null,
                        start,
                        " bis",
                        React.createElement("br", null),
                        end));
                }
                else if (start) {
                    return (React.createElement("span", null,
                        "Ab ",
                        start));
                }
                if (end) {
                    return (React.createElement("span", null,
                        "Bis ",
                        end));
                }
            }
            return (React.createElement(FieldValue, { value: item[fieldName] || defaultValue, meta: meta, fieldProps: fieldProps }));
        };
        _this.resolveFieldName = function (item, field, defaultFieldName) {
            var collection = _this.props.collection;
            var specialFields = collection.specialFields;
            return ((!!specialFields[field] && specialFields[field].field) || defaultFieldName);
        };
        _this.resolveField = function (fieldName) {
            var collection = _this.props.collection;
            var fields = collection.fields;
            return fields.find(function (x) { return x.name === fieldName; });
        };
        _this.renderMenu = function (_a) {
            var id = _a.id, state = _a.state;
            return (React.createElement(Menu, null,
                React.createElement(Menu.Item, null,
                    React.createElement(Link, { to: _this.getLink({ id: id }) }, "Bearbeiten")),
                React.createElement(Menu.Item, { disabled: true }, "Kopieren"),
                React.createElement(Menu.Item, { disabled: true }, state !== 'REMOVED' ? 'Löschen' : 'Wiederherstellen')));
        };
        return _this;
    }
    CollectionListSidebar.prototype.render = function () {
        var _this = this;
        var _a = this.props, router = _a.router, id = _a.id, pathname = _a.pathname, query = _a.query, collection = _a.collection, onSearch = _a.onSearch, searchText = _a.searchText, onClose = _a.onClose;
        var items = (this.props.items || []).map(function (item) {
            var name = _this.resolveFieldValue(item, 'name', {
                defaultFieldName: 'name',
                defaultValue: item.kurz || item.name || 'Kein Titel',
            });
            var description = _this.resolveFieldValue(item, 'description', {});
            var image = item[_this.resolveFieldName(item, 'image', 'bild')];
            var color = (collection.specialFields &&
                collection.specialFields.color &&
                !!item[collection.specialFields.color.field] &&
                collection.specialFields.color.arg0) ||
                item[_this.resolveFieldName(item, 'color', 'color')];
            return {
                id: item.id,
                name: name,
                description: description,
                image: image,
                color: color,
                extra: (React.createElement(Dropdown, { overlay: _this.renderMenu(item) },
                    React.createElement(Icon, { type: "edit" }))),
                isActive: item.id === id,
                onClick: function () { return router.push(_this.getLink(item)); },
            };
        });
        var childs = items.map(function (item) {
            return (React.createElement(List.Item, { image: (item.image || item.bild) &&
                    React.createElement(Image, { value: item.image || item.bild, width: 37, height: 37 }), active: item.id === id, label: item.name, onClick: item.onClick, key: item.id }));
        });
        return (React.createElement(Sidebar, { header: React.createElement(List.Filter, { placeholder: "Filter ...", onChange: onSearch, value: searchText }), leftButtons: onClose &&
                React.createElement(Button.Group, null,
                    React.createElement(Sidebar.Button, { onClick: onClose, shape: "circle", icon: "close" })), rightButtons: React.createElement(Sidebar.Button, { onClick: function () { return router.push(_this.getLink({ id: null })); }, shape: "circle", icon: "plus" }), isOpen: true, padding: 0, title: collection.name, subtitle: collection.name + " sichten und verwalten" }, !searchText ? React.createElement(Tabs, { size: "small", defaultActiveKey: query.state || 'PUBLISHED', onChange: function (state) { return router.push({ pathname: pathname, query: __assign({}, query, { state: state }) }); } }, Object.keys(states).map(function (key) { return (React.createElement(Tabs.TabPane, { tab: states[key], key: key }, childs)); })) : childs));
    };
    CollectionListSidebar = __decorate([
        withRouter
    ], CollectionListSidebar);
    return CollectionListSidebar;
}(Component));
export default CollectionListSidebar;
//# sourceMappingURL=sidebar.js.map