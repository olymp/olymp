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
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import sortBy from 'lodash/sortBy';
import getDecorators from './get-decorators';
export default function (WrappedComponent) {
    var WithCollectionsComponent = (function (_super) {
        __extends(WithCollectionsComponent, _super);
        function WithCollectionsComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WithCollectionsComponent.prototype.list = function () {
            var _a = this.props.data, data = _a === void 0 ? {} : _a;
            var schema = data.schema;
            return schema && schema.types
                ? schema.types.filter(function (x) {
                    return (x.interfaces || [])
                        .filter(function (y) {
                        return y.name === 'CollectionType' ||
                            y.name === 'CollectionInterface';
                    }).length;
                })
                : [];
        };
        WithCollectionsComponent.prototype.group = function () {
            var _a = this.props.data, data = _a === void 0 ? {} : _a;
            var schema = data.schema;
            var collections = this.list();
            if (!schema || !collections.length) {
                return {};
            }
            var groups = {};
            collections.map(function (_a, i) {
                var name = _a.name, description = _a.description;
                var attributes = {};
                description.split('\n').forEach(function (x) {
                    var y = x.split(':');
                    if (y.length === 2) {
                        attributes[y[0]] = y[1];
                    }
                });
                collections[i] = __assign({}, collections[i], attributes);
                if (!groups[attributes.group]) {
                    groups[attributes.group] = [];
                }
                groups[attributes.group].push(collections[i]);
            });
            Object.keys(groups).forEach(function (key) {
                groups[key] = sortBy(groups[key], ['order', 'name']);
            });
            if (groups.undefined) {
                groups.undefined.forEach(function (collection) {
                    if (!groups[collection.name]) {
                        groups[collection.name] = [];
                    }
                    groups[collection.name].push(collection);
                });
                delete groups.undefined;
            }
            return groups;
        };
        WithCollectionsComponent.prototype.render = function () {
            var _a = this.props, data = _a.data, rest = __rest(_a, ["data"]);
            var list = this.list();
            var group = this.group();
            return (React.createElement(WrappedComponent, __assign({}, rest, { collectionList: list.map(function (x) { return (__assign({}, x, { decorators: getDecorators(x.description) })); }), collectionTree: group })));
        };
        WithCollectionsComponent = __decorate([
            graphql((_a = ["\n    query schema {\n      schema: __schema {\n        types {\n          name\n          description\n          interfaces {\n            name\n          }\n          fields {\n            name\n            type {\n              kind\n              name\n            }\n          }\n        }\n      }\n    }\n  "], _a.raw = ["\n    query schema {\n      schema: __schema {\n        types {\n          name\n          description\n          interfaces {\n            name\n          }\n          fields {\n            name\n            type {\n              kind\n              name\n            }\n          }\n        }\n      }\n    }\n  "], gql(_a)))
        ], WithCollectionsComponent);
        return WithCollectionsComponent;
    }(Component));
    return WithCollectionsComponent;
    var _a;
};
//# sourceMappingURL=with-collections.js.map