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
import { ThemeProvider as FelaThemeProvider } from 'react-fela';
import { func } from 'prop-types';
var WithColorProvider = (function (_super) {
    __extends(WithColorProvider, _super);
    function WithColorProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colors = {};
        _this.setColor = function (id, color) {
            if (!id) {
                return;
            }
            var colors = __assign({}, _this.colors);
            if (color) {
                _this.colors = __assign({}, colors, (_a = {}, _a[id] = color, _a));
            }
            else {
                delete colors[id];
                _this.colors = colors;
            }
            _this.forceUpdate();
            var _a;
        };
        return _this;
    }
    WithColorProvider.prototype.getChildContext = function () {
        return {
            setColor: this.setColor,
        };
    };
    WithColorProvider.prototype.render = function () {
        var children = this.props.children;
        var color = this.colors[Object.keys(this.colors).reverse()[0]];
        var theme = {};
        if (color) {
            theme.color = color;
        }
        return (React.createElement(FelaThemeProvider, { theme: theme }, children));
    };
    WithColorProvider.childContextTypes = {
        setColor: func,
    };
    return WithColorProvider;
}(Component));
export default WithColorProvider;
//# sourceMappingURL=with-color-provider.js.map