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
import PropTypes from 'prop-types';
var AmpProvider = (function (_super) {
    __extends(AmpProvider, _super);
    function AmpProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AmpProvider.prototype.getChildContext = function () {
        return {
            amp: this.props.amp,
        };
    };
    AmpProvider.prototype.render = function () {
        return Children.only(this.props.children);
    };
    AmpProvider.childContextTypes = {
        amp: PropTypes.bool,
    };
    return AmpProvider;
}(Component));
export { AmpProvider };
export default function (WrappedComponent) {
    var withAmp = function (props, context) {
        return React.createElement(WrappedComponent, __assign({}, context, props));
    };
    withAmp.contextTypes = {
        amp: PropTypes.bool,
    };
    return withAmp;
};
//# sourceMappingURL=amp.js.map