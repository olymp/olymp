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
import React, { Component, Children } from 'react';
import { func } from 'prop-types';
import { get } from 'lodash';
var LocaleProvider = (function (_super) {
    __extends(LocaleProvider, _super);
    function LocaleProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.caller = function (fnOrString) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            var locale = _this.props.locale;
            if (typeof fnOrString === 'function') {
                return fnOrString.apply(void 0, rest.concat([{ locale: locale }]));
            }
            else if (typeof fnOrString === 'string') {
                return get.apply(void 0, [locale, fnOrString].concat(rest));
            }
            return locale[fnOrString];
        };
        return _this;
    }
    LocaleProvider.prototype.getChildContext = function () {
        return {
            locale: this.caller,
        };
    };
    LocaleProvider.prototype.render = function () {
        var children = this.props.children;
        return Children.only(children);
    };
    LocaleProvider.childContextTypes = {
        locale: func,
    };
    return LocaleProvider;
}(Component));
export { LocaleProvider };
export default function (WrappedComponent) {
    var withLocale = function (props, context) {
        return React.createElement(WrappedComponent, __assign({ locale: context.locale }, props));
    };
    withLocale.contextTypes = {
        locale: func,
    };
    return withLocale;
};
//# sourceMappingURL=locale.js.map