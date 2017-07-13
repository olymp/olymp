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
import React, { Component, PropTypes } from 'react';
import { interpolate } from './utils';
import Hashtax from './hashtax-provided';
import { get } from 'lodash';
export default function (WrappedComponent) { return _a = (function (_super) {
        __extends(DataConnector, _super);
        function DataConnector() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DataConnector.prototype.render = function () {
            var _this = this;
            var hashtaxData = this.context.hashtaxData || {};
            var all = __assign({}, hashtaxData, this.props);
            var props = Object.keys(this.props).reduce(function (store, key) {
                var value = _this.props[key];
                if (value && typeof value === 'string' && value.indexOf('{{') !== -1) {
                    var text = interpolate(value, all);
                    if (text)
                        store[key] = React.createElement(Hashtax, { value: text });
                }
                else if (value && typeof value === 'string' && value.indexOf('{:') !== -1) {
                    var k_1;
                    interpolate(value, function (v) { return k_1 = v; });
                    store[key] = get(all, k_1);
                }
                else if (value && typeof value === 'string' && value.indexOf('{') !== -1) {
                    store[key] = interpolate(value, all);
                }
                else {
                    store[key] = all[key];
                }
                return store;
            }, {});
            return React.createElement(WrappedComponent, __assign({}, hashtaxData, props));
        };
        return DataConnector;
    }(Component)),
    _a.contextTypes = {
        hashtaxData: PropTypes.object,
    },
    _a.propTypes = WrappedComponent
        ? WrappedComponent.propTypes
        : {},
    _a; var _a; };
//# sourceMappingURL=connect.js.map