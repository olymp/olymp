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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar, List } from 'olymp-ui';
import { queryTemplates } from '../gql';
var ListSidebar = (function (_super) {
    __extends(ListSidebar, _super);
    function ListSidebar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListSidebar.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, onClose = _a.onClose, search = _a.search, onSearch = _a.onSearch, id = _a.id;
        var items = this.props.items.filter(function (item) {
            return !search || item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return (React.createElement(Sidebar, { leftButtons: React.createElement(Sidebar.Button, { shape: "circle", onClick: onClose, icon: "close" }), rightButtons: React.createElement(Sidebar.Button, { onClick: function () { return onClick({ id: null }); }, shape: "circle", icon: "plus" }), header: React.createElement(List.Filter, { placeholder: "Filter ...", onChange: onSearch, value: search }), isOpen: true, padding: 0, title: "Templates", subtitle: "Templates sichten und verwalten" }, items.map(function (item) {
            return (React.createElement(List.Item, { active: item.id === id, label: item.name, onClick: function () { return onClick(item); }, key: item.id }));
        })));
    };
    ListSidebar = __decorate([
        queryTemplates
    ], ListSidebar);
    return ListSidebar;
}(Component));
ListSidebar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func,
};
export default ListSidebar;
//# sourceMappingURL=list.js.map