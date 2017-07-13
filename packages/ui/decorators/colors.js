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
import { Component } from 'react';
import PropTypes from 'prop-types';
export var withColors = function (WrappedComponent) { return _a = (function (_super) {
        __extends(WithColors, _super);
        function WithColors() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WithColors.prototype.render = function () {
            return colors = { this: .context.defaultColors };
            {
                this.props;
            }
            />;
        };
        return WithColors;
    }(Component)),
    _a.contextTypes = {
        defaultColors: PropTypes.array,
    },
    _a; var _a; };
;
;
export var useColors = function (defaultColors) {
    if (defaultColors === void 0) { defaultColors = []; }
    return function (WrappedComponent) { return _a = (function (_super) {
            __extends(UseColors, _super);
            function UseColors() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UseColors.prototype.getChildContext = function () {
                return {
                    defaultColors: defaultColors.concat((this.props.defaultColors || [])).map(function (color) {
                        return typeof color === 'string'
                            ? { color: color, name: color }
                            : __assign({ name: color.color }, color);
                    }),
                };
            };
            UseColors.prototype.render = function () {
                var _a = this.props, defaultColors = _a.defaultColors, rest = __rest(_a, ["defaultColors"]);
                return __assign({}, rest) /  > ;
            };
            return UseColors;
        }(Component)),
        _a.childContextTypes = {
            defaultColors: PropTypes.array,
        },
        _a; var _a; };
};
//# sourceMappingURL=colors.js.map