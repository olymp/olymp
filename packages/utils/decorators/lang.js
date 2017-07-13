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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
var LangProvider = (function (_super) {
    __extends(LangProvider, _super);
    function LangProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LangProvider.prototype.getChildContext = function () {
        return {
            lang: this.props.lang || {},
        };
    };
    LangProvider.prototype.render = function () {
        return Children.only(this.props.children);
    };
    LangProvider.childContextTypes = {
        lang: PropTypes.object,
    };
    return LangProvider;
}(Component));
export { LangProvider };
export var withLangProvider = function (langOption) {
    if (langOption === void 0) { langOption = {}; }
    return function (WrappedComponent) {
        var withLangProvider = function (_a) {
            var lang = _a.lang, props = __rest(_a, ["lang"]);
            return (React.createElement(LangProvider, { lang: __assign({}, langOption, ({} || lang)) },
                React.createElement(WrappedComponent, __assign({}, props))));
        };
        return withLangProvider;
    };
};
export default function (WrappedComponent) {
    var withLang = function (props, context) {
        return React.createElement(WrappedComponent, __assign({ lang: context.lang }, props));
    };
    withLang.contextTypes = {
        lang: PropTypes.object,
    };
    return withLang;
};
//# sourceMappingURL=lang.js.map