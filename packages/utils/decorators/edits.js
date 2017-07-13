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
export var withEdits = function (WrappedComponent) { return _a = (function (_super) {
        __extends(WithEdits, _super);
        function WithEdits() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WithEdits.prototype.render = function () {
            return React.createElement(WrappedComponent, __assign({ edits: this.context.edits }, this.props));
        };
        return WithEdits;
    }(Component)),
    _a.contextTypes = {
        edits: PropTypes.array,
    },
    _a; var _a; };
export var useEdits = function (edits) {
    if (edits === void 0) { edits = []; }
    return function (WrappedComponent) { return _a = (function (_super) {
            __extends(UseEdits, _super);
            function UseEdits() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UseEdits.prototype.getChildContext = function () {
                return {
                    edits: edits.concat((this.props.edits || [])),
                };
            };
            UseEdits.prototype.render = function () {
                var _a = this.props, edits = _a.edits, rest = __rest(_a, ["edits"]);
                return React.createElement(WrappedComponent, __assign({}, rest));
            };
            return UseEdits;
        }(Component)),
        _a.childContextTypes = {
            edits: PropTypes.array,
        },
        _a; var _a; };
};
//# sourceMappingURL=edits.js.map