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
import { Component, createElement } from 'react';
import { gql, graphql, SimpleRoute, unflatten } from 'olymp-utils';
import { orderBy, sortBy } from 'lodash';
import { queryPages } from './gql';
import { get, upperFirst, lowerFirst } from 'lodash';
var interpolate = function (value, propsOrFunc) {
    if (typeof value !== 'string') {
        return value;
    }
    if (value.indexOf('{') === -1) {
        return value;
    }
    return value.replace(/\{\{?\:?(.+?)\}?\}/g, function (m, v) {
        return typeof propsOrFunc === 'function'
            ? propsOrFunc(v, v)
            : get(propsOrFunc, v, v);
    });
};
var NavCache = {};
export var withNavigation = function (Wrapped) {
    var withNavigationPrepare = function (Wrapped) {
        var WithNavPrepareInner = (function (_super) {
            __extends(WithNavPrepareInner, _super);
            function WithNavPrepareInner() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WithNavPrepareInner.prototype.render = function () {
                var items = this.props.items;
                var deco = items.filter(function (item) { return item.binding; });
                var key = deco.map(function (x) { return x.id + "-" + x.binding; }).join('|');
                if (!NavCache[key]) {
                    NavCache[key] = items
                        .filter(function (item) { return item.binding && item.binding.type; })
                        .reduce(function (store, value) {
                        var _a = value.binding, type = _a.type, fields = _a.fields, _b = _a.query, query = _b === void 0 ? {} : _b;
                        var sort = value.sorting
                            ? value.sorting.reduce(function (store, item) {
                                var _a = item.split(''), c = _a[0], rest = _a.slice(1);
                                store[rest.join('')] = c === '-' ? 'DESC' : 'ASC';
                                return store;
                            }, {})
                            : {};
                        return graphql((_c = ["\n                  query ", "List(\n                    $query: ", "Query,\n                    $sort: ", "Sort\n                  ) {\n                    items: ", "List(query: $query, sort: $sort) {\n                      ", "\n                    }\n                  }\n                "], _c.raw = ["\n                  query ", "List(\n                    $query: ", "Query,\n                    $sort: ", "Sort\n                  ) {\n                    items: ", "List(query: $query, sort: $sort) {\n                      ", "\n                    }\n                  }\n                "], gql(_c, lowerFirst(type), upperFirst(type), upperFirst(type), lowerFirst(type), fields || 'id name slug')), {
                            name: "nav_" + value.id,
                            options: function () { return ({ variables: { query: __assign({}, query, { state: { eq: 'PUBLISHED' } }), sort: sort } }); },
                        })(store);
                        var _c;
                    }, Wrapped);
                }
                var Comp = NavCache[key];
                return Comp ? __assign({}, this.props) /  >  : __assign({}, this.props) /  > ;
            };
            WithNavPrepareInner = __decorate([
                queryPages
            ], WithNavPrepareInner);
            return WithNavPrepareInner;
        }(Component));
        return WithNavPrepareInner;
    };
    var WithNavInner = (function (_super) {
        __extends(WithNavInner, _super);
        function WithNavInner() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.flatNavigation = {};
            _this.loading = flatNavigation;
            return _this;
        }
        WithNavInner.prototype.render = function () {
            var _this = this;
            var data = this.props.data;
            var items = (data && data.items) || [];
            var flatNavigation = [];
            var loading = false;
            var navigation = unflatten(items, {
                pathProp: 'pathname',
                sort: function (children, parent) {
                    var newChildren = children.reduce(function (state, child) {
                        var data = _this.props["nav_" + child.id];
                        if (data) {
                            loading = loading && data.loading;
                            (data.items || []).forEach(function (item) {
                                var slug = child.slug
                                    ? interpolate(child.slug, item)
                                    : item.slug;
                                state.push(__assign({}, child, { pageId: child.id, bindingId: item.id, bindingObj: item, slug: slug, name: item.name, id: item.id }));
                            });
                        }
                        else {
                            state.push(child);
                        }
                        return state;
                    }, []);
                    if (!parent || !parent.sorting) {
                        return orderBy(newChildren, ['order'], ['asc']);
                    }
                    var sortIndex = parent.sorting;
                    return sortBy(newChildren, [
                        function (o) {
                            var index = sortIndex.indexOf(o.id);
                            if (index === -1) {
                                return 99;
                            }
                            return index;
                        },
                    ]);
                },
                setPath: function (current, _a) {
                    var slug = _a.slug, rest = __rest(_a, ["slug"]);
                    var pathname = ("" + (current || '') + (slug || '')).replace('//', '/');
                    flatNavigation.push(__assign({}, rest, { slug: slug, pathname: pathname }));
                    return pathname;
                },
            });
            return __assign({}, this.props);
            loading = { loading: loading };
            navigation = {};
            loading ? navigation : [];
        };
        WithNavInner = __decorate([
            withNavigationPrepare
        ], WithNavInner);
        return WithNavInner;
    }(Component));
    />;
};
;
return WithNavInner;
;
var cache = {};
var lastType;
export var DataRoute = function (_a) {
    var binding = _a.binding, component = _a.component, rest = __rest(_a, ["binding", "component"]);
    if (!binding || !binding.type) {
        return createElement(component || SimpleRoute, rest);
    }
    var type = binding.type, fields = binding.fields, query = binding.query;
    var key = "route-" + type + "-" + (fields || 'id name slug');
    if (lastType !== (component || SimpleRoute)) {
        cache = {};
        lastType = component || SimpleRoute;
    }
    if (!cache[key]) {
        cache[key] = withData(component || SimpleRoute, { fields: fields, type: type });
    }
    return createElement(cache[key], rest);
};
export var withData = function (Wrapped, _a) {
    var type = _a.type, fields = _a.fields;
    return graphql((_b = ["\n    query ", "($id: String) {\n      item: ", "(id: $id) {\n        ", "\n      }\n    }\n  "], _b.raw = ["\n    query ", "($id: String) {\n      item: ", "(id: $id) {\n        ", "\n      }\n    }\n  "], gql(_b, type || 'page', type || 'page', fields || 'id name')), {
        options: function (_a) {
            var bindingId = _a.bindingId;
            return ({
                variables: {
                    id: bindingId,
                },
            });
        },
        name: 'nav_data',
    })(function (_a) {
        var nav_data = _a.nav_data, rest = __rest(_a, ["nav_data"]);
        return (__assign({}, rest));
    }, binding = { nav_data: .item } /  > );
    var _b;
};
//# sourceMappingURL=with-data.js.map