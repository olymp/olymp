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
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
export var purify = function (Wrapped, types) {
    if (types) {
        Wrapped.propTypes = types;
    }
    var propTypes = Object.keys(Wrapped.propTypes || {}).map(function (x) { return x; });
    var FinalComponent = (function (_super) {
        __extends(FinalComponent, _super);
        function FinalComponent(props, context) {
            var _this = _super.call(this, props) || this;
            _this.filteredProps = getPropTypes(propTypes, props);
            return _this;
        }
        FinalComponent.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
            var filteredProps = getPropTypes(propTypes, this.props);
            var shouldUpdate = !shallowEqual(this.filteredProps, filteredProps) ||
                !shallowEqual(this.context, nextContext);
            if (!shouldUpdate) {
                return false;
            }
            this.filteredProps = filteredProps;
            return true;
        };
        FinalComponent.prototype.render = function () {
            return React.createElement(Wrapped, __assign({}, this.filteredProps));
        };
        FinalComponent.contextTypes = __assign({}, Wrapped.contextTypes, { theme: PropTypes.object });
        FinalComponent.propTypes = types;
        return FinalComponent;
    }(Component));
    return FinalComponent;
};
var getPropTypes = function (propTypes, props) {
    var newProps = {};
    Object.keys(props).forEach(function (key) {
        if (propTypes.indexOf(key) !== -1) {
            newProps[key] = props[key];
        }
    });
    return newProps;
};
export var pureStyled = function (styles, Wrapped, types) {
    if (types) {
        Wrapped.propTypes = types;
    }
    var propTypes = Object.keys(Wrapped.propTypes || {}).map(function (x) { return x; });
    var Styled = createComponent(styles, Wrapped, propTypes);
    var FinalComponent = (function (_super) {
        __extends(FinalComponent, _super);
        function FinalComponent(props, context) {
            var _this = _super.call(this, props) || this;
            _this.filteredProps = getPropTypes(propTypes, props);
            return _this;
        }
        FinalComponent.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
            var filteredProps = getPropTypes(propTypes, this.props);
            var shouldUpdate = !shallowEqual(this.filteredProps, filteredProps) ||
                !shallowEqual(this.context, nextContext);
            if (!shouldUpdate) {
                return false;
            }
            this.filteredProps = filteredProps;
            return true;
        };
        FinalComponent.prototype.render = function () {
            return React.createElement(Styled, __assign({}, this.filteredProps));
        };
        FinalComponent.contextTypes = __assign({}, Wrapped.contextTypes, { theme: PropTypes.object });
        FinalComponent.propTypes = types;
        return FinalComponent;
    }(Component));
    return FinalComponent;
};
function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' ||
        objA === null ||
        typeof objB !== 'object' ||
        objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
        if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=purify.js.map