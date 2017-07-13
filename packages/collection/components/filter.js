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
import React, { Component } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import upperFirst from 'lodash/upperFirst';
var getMenuItem = function (field) {
    if (['Date', 'DateTime'].includes(field.type.name)) {
        return (React.createElement(Menu.SubMenu, { key: field.name, title: upperFirst(field.name) },
            React.createElement(Menu.Item, { key: field.name + "-eq" }, "Gleich"),
            React.createElement(Menu.Item, { key: field.name + "-ne" }, "Nicht gleich"),
            React.createElement(Menu.Item, { key: field.name + "-gt" }, "Gr\u00F6\u00DFer als"),
            React.createElement(Menu.Item, { key: field.name + "-gte" }, "Gr\u00F6\u00DFer gleich"),
            React.createElement(Menu.Item, { key: field.name + "-lt" }, "Kleiner als"),
            React.createElement(Menu.Item, { key: field.name + "-lte" }, "Kleiner gleich"),
            React.createElement(Menu.Item, { key: field.name + "-day" }, "Tag"),
            React.createElement(Menu.Item, { key: field.name + "-year" }, "Jahr"),
            React.createElement(Menu.Item, { key: field.name + "-month" }, "Monat"),
            React.createElement(Menu.Item, { key: field.name + "-between" }, "Zwischen"),
            React.createElement(Menu.Item, { key: field.name + "-null" }, "Leer")));
    }
    if (['Int'].includes(field.type.name)) {
        return (React.createElement(Menu.SubMenu, { key: field.name, title: upperFirst(field.name) },
            React.createElement(Menu.Item, { key: field.name + "-eq" }, "Gleich"),
            React.createElement(Menu.Item, { key: field.name + "-ne" }, "Nicht gleich"),
            React.createElement(Menu.Item, { key: field.name + "-gt" }, "Gr\u00F6\u00DFer als"),
            React.createElement(Menu.Item, { key: field.name + "-gte" }, "Gr\u00F6\u00DFer gleich"),
            React.createElement(Menu.Item, { key: field.name + "-lt" }, "Kleiner als"),
            React.createElement(Menu.Item, { key: field.name + "-lte" }, "Kleiner gleich"),
            React.createElement(Menu.Item, { key: field.name + "-in" }, "Einer von"),
            React.createElement(Menu.Item, { key: field.name + "-nin" }, "Keiner von"),
            React.createElement(Menu.Item, { key: field.name + "-between" }, "Zwischen"),
            React.createElement(Menu.Item, { key: field.name + "-null" }, "Leer")));
    }
    if (['Float'].includes(field.type.name)) {
        return (React.createElement(Menu.SubMenu, { key: field.name, title: upperFirst(field.name) },
            React.createElement(Menu.Item, { key: field.name + "-eq" }, "Gleich"),
            React.createElement(Menu.Item, { key: field.name + "-ne" }, "Nicht gleich"),
            React.createElement(Menu.Item, { key: field.name + "-gt" }, "Gr\u00F6\u00DFer als"),
            React.createElement(Menu.Item, { key: field.name + "-gte" }, "Gr\u00F6\u00DFer gleich"),
            React.createElement(Menu.Item, { key: field.name + "-lt" }, "Kleiner als"),
            React.createElement(Menu.Item, { key: field.name + "-lte" }, "Kleiner gleich"),
            React.createElement(Menu.Item, { key: field.name + "-in" }, "Einer von"),
            React.createElement(Menu.Item, { key: field.name + "-nin" }, "Keiner von"),
            React.createElement(Menu.Item, { key: field.name + "-between" }, "Zwischen"),
            React.createElement(Menu.Item, { key: field.name + "-null" }, "Leer")));
    }
    if (['String', 'Website', 'Slug', 'Markdown', 'Color'].includes(field.type.name)) {
        return (React.createElement(Menu.SubMenu, { key: field.name, title: upperFirst(field.name) },
            React.createElement(Menu.Item, { key: field.name + "-eq" }, "Gleich"),
            React.createElement(Menu.Item, { key: field.name + "-ne" }, "Nicht gleich"),
            React.createElement(Menu.Item, { key: field.name + "-in" }, "Einer von"),
            React.createElement(Menu.Item, { key: field.name + "-nin" }, "Keiner von"),
            React.createElement(Menu.Item, { key: field.name + "-startsWith" }, "Beginnt mit"),
            React.createElement(Menu.Item, { key: field.name + "-contains" }, "Enth\u00E4lt"),
            React.createElement(Menu.Item, { key: field.name + "-null" }, "Leer")));
    }
    if (field.type && field.type.kind === 'EnumTypeDefinition') {
        return (React.createElement(Menu.SubMenu, { key: field.name, title: upperFirst(field.name) },
            React.createElement(Menu.Item, { key: field.name + "-eq" }, "Gleich"),
            React.createElement(Menu.Item, { key: field.name + "-ne" }, "Nicht gleich"),
            React.createElement(Menu.Item, { key: field.name + "-in" }, "Einer von"),
            React.createElement(Menu.Item, { key: field.name + "-nin" }, "Keiner von"),
            React.createElement(Menu.Item, { key: field.name + "-null" }, "Leer")));
    }
    return null;
};
export var handleFilterClick = function (collection, onFilter, key) {
    if (!onFilter || !key) {
        return;
    }
    var field = key.indexOf('-') !== -1 &&
        collection.fields.find(function (x) { return x.name === key.split('-')[0]; });
    if (field) {
        var type = key.split('-')[1];
        var value = prompt('Wert', '');
        if (value) {
            if (['Float', 'Date', 'DateTime'].includes(field.type.name)) {
                value = parseFloat(value);
            }
            if (['Int'].includes(field.type.name)) {
                value = parseInt(value);
            }
            var query = (_a = {}, _a[field.name] = (_b = {}, _b[type] = value, _b), _a);
            onFilter(query, field);
        }
    }
    var _a, _b;
};
export var getFilterMenu = function (collection, onFilter) {
    return (React.createElement(Menu, { onClick: function (e) { return handleFilterClick(collection, onFilter, e.key); } }, collection &&
        collection.fields.filter(function (_a) {
            var name = _a.name;
            return name !== 'id';
        }).map(getMenuItem)));
};
var FilterComponent = (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterComponent.prototype.render = function () {
        var _a = this.props, collection = _a.collection, onFilter = _a.onFilter, style = _a.style, className = _a.className;
        return (React.createElement(Dropdown, { overlay: getFilterMenu(collection, onFilter) },
            React.createElement(Button, { style: style, className: className }, "Filter")));
    };
    return FilterComponent;
}(Component));
export default FilterComponent;
//# sourceMappingURL=filter.js.map