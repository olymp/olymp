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
import { Component } from 'react';
import capitalize from 'lodash/upperFirst';
export default function (propertyName, defaultValue) { return function (WrappedComponent) {
    var properties = typeof propertyName !== 'object'
        ? (_a = {}, _a[propertyName] = defaultValue, _a) : propertyName;
    var WithStateComponent = (function (_super) {
        __extends(WithStateComponent, _super);
        function WithStateComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = properties;
            return _this;
        }
        WithStateComponent.prototype.render = function () {
            var _this = this;
            var more = Object.keys(properties).reduce(function (state, key) {
                state[key] = _this.state[key];
                state["set" + capitalize(key)] = function (v) {
                    return _this.setState((_a = {}, _a[key] = v, _a));
                    var _a;
                };
                return state;
            }, {});
            return __assign({}, this.props);
            {
                more;
            }
            />;;
        };
        return WithStateComponent;
    }(Component));
    return WithStateComponent;
    var _a;
}; };
//# sourceMappingURL=state.js.map