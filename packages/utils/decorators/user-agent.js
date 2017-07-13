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
import UAParser2 from 'ua-parser-js';
export var UAParser = UAParser2;
var UAProvider = (function (_super) {
    __extends(UAProvider, _super);
    function UAProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UAProvider.prototype.getChildContext = function () {
        var ua = this.props.ua;
        return {
            ua: ua && typeof ua === 'string' ? new UAParser2(ua) : ua,
        };
    };
    UAProvider.prototype.render = function () {
        return Children.only(this.props.children);
    };
    UAProvider.childContextTypes = {
        ua: PropTypes.object,
    };
    return UAProvider;
}(Component));
export { UAProvider };
export default function (WrappedComponent) {
    var withUA = function (props, context) {
        return React.createElement(WrappedComponent, __assign({ ua: context.ua }, props));
    };
    withUA.contextTypes = {
        ua: PropTypes.object,
    };
    return withUA;
};
//# sourceMappingURL=user-agent.js.map