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
import { createComponent } from 'react-fela';
import LazyLoad from './lazy';
import { ContentLoaderStyles } from '../loader';
var containerStyle = function (_a) {
    var ratio = _a.ratio, width = _a.width, minWidth = _a.minWidth, maxWidth = _a.maxWidth, minHeight = _a.minHeight, maxHeight = _a.maxHeight, rounded = _a.rounded;
    return ({
        position: 'relative',
        overflow: 'hidden',
        width: width,
        minWidth: minWidth,
        maxWidth: maxWidth,
        minHeight: minHeight,
        maxHeight: maxHeight,
        borderRadius: rounded && '50%',
        onBefore: {
            display: 'block',
            content: '""',
            width: '100%',
            height: 0,
            paddingTop: ratio * 100 + "%",
        },
        '> img': {
            center: true,
            borderRadius: rounded && '50%',
        },
    });
};
var Container = createComponent(containerStyle, 'div', function (_a) {
    var ratio = _a.ratio, rounded = _a.rounded, width = _a.width, maxResolution = _a.maxResolution, srcRatio = _a.srcRatio, minWidth = _a.minWidth, minHeight = _a.minHeight, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, p = __rest(_a, ["ratio", "rounded", "width", "maxResolution", "srcRatio", "minWidth", "minHeight", "maxWidth", "maxHeight"]);
    return Object.keys(p);
});
var LazyContainer = createComponent(function (_a) {
    var visible = _a.visible, rest = __rest(_a, ["visible"]);
    return (__assign({}, containerStyle(rest), (!visible ? ContentLoaderStyles : {})));
}, function (p) { return React.createElement(LazyLoad, __assign({}, p)); }, function (_a) {
    var ratio = _a.ratio, rounded = _a.rounded, visible = _a.visible, width = _a.width, maxResolution = _a.maxResolution, srcRatio = _a.srcRatio, minWidth = _a.minWidth, minHeight = _a.minHeight, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, p = __rest(_a, ["ratio", "rounded", "visible", "width", "maxResolution", "srcRatio", "minWidth", "minHeight", "maxWidth", "maxHeight"]);
    return Object.keys(p);
});
var ImageContainer = (function (_super) {
    __extends(ImageContainer, _super);
    function ImageContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { visible: false, canHandleState: false };
        return _this;
    }
    ImageContainer.prototype.componentDidMount = function () {
        this.setState({ canHandleState: true });
    };
    ImageContainer.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, children = _a.children, width = _a.width, ratio = _a.ratio, rounded = _a.rounded, lazy = _a.lazy, containerProps = __rest(_a, ["className", "children", "width", "ratio", "rounded", "lazy"]);
        var _b = this.state, visible = _b.visible, canHandleState = _b.canHandleState;
        if (!canHandleState || !lazy) {
            return (React.createElement(Container, __assign({}, containerProps, { className: className, width: width, ratio: ratio, rounded: rounded }), children));
        }
        return (React.createElement(LazyContainer, __assign({}, containerProps, { className: className, width: width, ratio: ratio, rounded: rounded, visible: visible, onContentVisible: function () { return _this.setState({ visible: true }); } }), children));
    };
    return ImageContainer;
}(Component));
ImageContainer.displayName = 'Image.Container';
ImageContainer.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    ratio: PropTypes.number.isRequired,
    lazy: PropTypes.bool,
    rounded: PropTypes.bool,
};
ImageContainer.defaultProps = {
    lazy: true,
    rounded: false,
};
export default ImageContainer;
//# sourceMappingURL=container.js.map