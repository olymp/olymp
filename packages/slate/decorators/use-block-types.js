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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import useBlockBase from '../block-decorators/base';
import { createComponent } from 'olymp-fela';
export default function (types) {
    var blockTypes = Object.keys(types).reduce(function (result, key) {
        var _a = types[key], component = _a.component, styles = _a.styles, editable = _a.editable, slate = _a.slate, rest = __rest(_a, ["component", "styles", "editable", "slate"]);
        var newKey = types[key].key || key;
        var isVoid = editable !== true;
        if (styles && typeof styles === 'object') {
            component = createComponent(function () { return styles; }, component, function (p) { return Object.keys(p); });
        }
        if (styles && typeof styles === 'function') {
            component = createComponent(styles, component, function (p) { return Object.keys(p); });
        }
        result[newKey] = useBlockBase(__assign({}, slate, rest, { isVoid: isVoid, key: newKey, isAtomic: true }))(component);
        return result;
    }, {});
    return function (WrappedComponent) { return _a = (function (_super) {
            __extends(UseBlockTypes, _super);
            function UseBlockTypes() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UseBlockTypes.prototype.getChildContext = function () {
                return {
                    blockTypes: blockTypes || this.props.blockTypes,
                };
            };
            UseBlockTypes.prototype.render = function () {
                return React.createElement(WrappedComponent, __assign({}, this.props));
            };
            return UseBlockTypes;
        }(Component)),
        _a.childContextTypes = {
            blockTypes: PropTypes.object,
        },
        _a; var _a; };
};
//# sourceMappingURL=use-block-types.js.map