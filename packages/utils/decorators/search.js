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
import throttleInput from '../throttle-input';
export default function (name) { return function (WrappedComponent) {
    return (function (_super) {
        __extends(WithSearchComponent, _super);
        function WithSearchComponent(props) {
            var _this = _super.call(this) || this;
            _this.throttle = throttleInput(500);
            _this.search = function (term) {
                var _a = _this.props, location = _a.location, router = _a.router;
                var pathname = location.pathname, query = location.query;
                _this.setState((_b = {}, _b[name] = term, _b));
                _this.throttle(function () {
                    router.push({
                        pathname: pathname,
                        query: __assign({}, query, (_a = {}, _a[name] = term || undefined, _a)),
                    });
                    var _a;
                });
                var _b;
            };
            var location = props.location;
            _this.state = (_a = {},
                _a[name] = location.query && location.query[name],
                _a);
            return _this;
            var _a;
        }
        WithSearchComponent.prototype.render = function () {
            var location = this.props.location;
            return (React.createElement(WrappedComponent, __assign({}, this.props, { performSearch: this.search, searchText: this.state[name], searchTerm: location.query && location.query[name] })));
        };
        return WithSearchComponent;
    }(Component));
}; };
//# sourceMappingURL=search.js.map