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
import { func } from 'prop-types';
import shortId from 'shortid';
export default function (getColorFromProps) { return function (WrappedComponent) { return _a = (function (_super) {
        __extends(WithColorComponent, _super);
        function WithColorComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = shortId.generate();
            _this.color = null;
            _this.setColor = function (props) {
                if (props === void 0) { props = _this.props; }
                var setColor = _this.context.setColor;
                var newColor = getColorFromProps(props) || null;
                if (newColor !== _this.color) {
                    setColor(_this.id, newColor);
                    _this.color = newColor;
                }
            };
            return _this;
        }
        WithColorComponent.prototype.componentDidMount = function () {
            this.setColor(this.props);
        };
        WithColorComponent.prototype.componentWillUnmount = function () {
            var setColor = this.context.setColor;
            setColor(this.id, null);
        };
        WithColorComponent.prototype.componentWillReceiveProps = function (newProps) {
            this.setColor(newProps);
        };
        WithColorComponent.prototype.render = function () {
            return React.createElement(WrappedComponent, __assign({}, this.props));
        };
        return WithColorComponent;
    }(Component)),
    _a.contextTypes = {
        setColor: func,
    },
    _a; var _a; }; };
//# sourceMappingURL=with-color.js.map