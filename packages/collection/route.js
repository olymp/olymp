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
import React, { Component } from 'react';
import View from './views';
var CollectionRoute = (function (_super) {
    __extends(CollectionRoute, _super);
    function CollectionRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionRoute.prototype.render = function () {
        var _a = this.props, typeName = _a.typeName, collection = _a.collection, fieldNames = _a.fieldNames, onClose = _a.onClose, saving = _a.saving, children = _a.children, location = _a.location, items = _a.items, refetch = _a.refetch, collectionLoading = _a.collectionLoading;
        return React.createElement(View, __assign({}, this.props));
    };
    return CollectionRoute;
}(Component));
export default CollectionRoute;
//# sourceMappingURL=route.js.map