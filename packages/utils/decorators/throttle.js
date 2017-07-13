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
import capitalize from 'lodash/upperFirst';
export default function (_a) {
    var prop = _a.prop, onThrottle = _a.onThrottle, throttleProp = _a.throttleProp, getInitialValue = _a.getInitialValue, initialValue = _a.initialValue, cooldown = _a.cooldown, handleUpdate = _a.handleUpdate;
    return function (WrappedComponent) {
        var WithStateComponent = (function (_super) {
            __extends(WithStateComponent, _super);
            function WithStateComponent(props) {
                var _this = _super.call(this, props) || this;
                _this.throttled = function () {
                    if (throttleProp) {
                        _this.setState((_a = {}, _a[throttleProp] = _this.state[prop], _a));
                    }
                    if (onThrottle) {
                        onThrottle(__assign({}, _this.props, _this.state));
                    }
                    var _a;
                };
                _this.set = function (v) {
                    _this.setState((_a = {}, _a[prop] = v, _a));
                    setTimeout(function () {
                        if (_this.state[prop] === v) {
                            _this.throttled();
                        }
                    }, cooldown || 500);
                    var _a;
                };
                var def;
                if (getInitialValue) {
                    def = getInitialValue(props);
                }
                else if (initialValue) {
                    def = initialValue;
                }
                else if (props[prop]) {
                    def = props[prop];
                }
                _this.state = (_a = {}, _a[prop] = def, _a);
                if (throttleProp) {
                    _this.state[throttleProp] = def;
                }
                return _this;
                var _a;
            }
            WithStateComponent.prototype.shouldComponentUpdate = function (newProps, newState) {
                if (!handleUpdate) {
                    return true;
                }
                if (newState[prop] !== this.state[prop]) {
                    return true;
                }
                return false;
            };
            WithStateComponent.prototype.componentWillReceiveProps = function (newProps) {
                if (newProps[prop] !== this.props[prop]) {
                    var newState = (_a = {},
                        _a[prop] = newProps[prop],
                        _a);
                    if (throttleProp) {
                        newState[throttleProp] = newProps[prop];
                    }
                    return this.setState(newState);
                }
                var _a;
            };
            WithStateComponent.prototype.render = function () {
                var state = __assign({}, this.state, (_a = {}, _a["set" + capitalize(prop)] = this.set, _a));
                return React.createElement(WrappedComponent, __assign({}, this.props, state));
                var _a;
            };
            return WithStateComponent;
        }(Component));
        return WithStateComponent;
    };
};
//# sourceMappingURL=throttle.js.map