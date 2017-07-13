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
import { Form } from 'antd';
import { withRouter, withSearch, Prompt } from 'olymp';
import { SplitView } from 'olymp-ui';
import { withItems, withCollection } from '../decorators';
import Detail from './detail';
import Sidebar from './sidebar';
var CollectionView = (function (_super) {
    __extends(CollectionView, _super);
    function CollectionView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionView.prototype.render = function () {
        var _this = this;
        var _a = this.props, collection = _a.collection, fieldNames = _a.fieldNames, onClose = _a.onClose, location = _a.location, items = _a.items, typeName = _a.typeName, router = _a.router, performSearch = _a.performSearch, searchText = _a.searchText, form = _a.form;
        var query = location.query, pathname = location.pathname;
        var id = location.query && location.query["@" + typeName.toLowerCase()];
        return (React.createElement(SplitView, null,
            React.createElement(Prompt, { when: form.isFieldsTouched(), message: function () { return 'Änderungen verwerfen?'; } }),
            React.createElement(Sidebar, { id: id, collection: collection, typeName: typeName, items: items, onClose: onClose, filter: [], onFilter: function (filter, filteredItems) {
                    return _this.setState({ filter: filter, filteredItems: filteredItems });
                }, searchText: searchText, onSearch: performSearch, onClick: function (item) {
                    return router.push({
                        pathname: pathname,
                        query: __assign({}, query, (_a = {}, _a["@" + typeName.toLowerCase()] = item.id, _a)),
                    });
                    var _a;
                } }),
            id !== undefined &&
                React.createElement(Detail, { id: id === 'new' ? null : id, fieldNames: fieldNames, collection: collection, form: form, typeName: typeName })));
    };
    CollectionView = __decorate([
        withRouter,
        withSearch('search'),
        withCollection,
        withItems,
        Form.create()
    ], CollectionView);
    return CollectionView;
}(Component));
export default CollectionView;
//# sourceMappingURL=view.js.map