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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
import { withAmp } from 'olymp-utils';
import Container from './container';
import Img from './img';
import Amp from './amp';
var Image = (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initVals = function () {
            var _a = _this.props, height = _a.height, maxResolution = _a.maxResolution;
            var _b = _this.props, width = _b.width, ratio = _b.ratio;
            var isPercentage = false;
            if (!ratio) {
                ratio = 0.75;
            }
            if (typeof width === 'string') {
                width = undefined;
                isPercentage = true;
            }
            if (height) {
                if (width) {
                    ratio = height / width;
                }
                else {
                    width = height / ratio;
                }
            }
            if (!width && !height) {
                width = Math.sqrt(maxResolution / ratio);
            }
            return {
                width: width,
                ratio: ratio,
                isPercentage: isPercentage,
            };
        };
        _this.limitWidth = function (w, ratio, isPercentage) {
            var _a = _this.props, minWidth = _a.minWidth, minHeight = _a.minHeight, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, maxResolution = _a.maxResolution;
            var width = w;
            if (minWidth && width < minWidth) {
                width = minWidth;
            }
            if (!isPercentage && minHeight && width * ratio < minHeight) {
                width = minHeight / ratio;
            }
            if (maxWidth && width > maxWidth) {
                width = maxWidth;
            }
            if (!isPercentage && maxHeight && width * ratio > maxHeight) {
                width = maxHeight / ratio;
            }
            if (Math.pow(width, 2) * ratio > maxResolution) {
                width = Math.sqrt(maxResolution / ratio);
            }
            return Math.round(width);
        };
        _this.getMode = function (width, ratio, isPercentage) {
            var mode = _this.props.mode;
            var srcRatio = _this.props.srcRatio || ratio;
            var w = _this.limitWidth(width, ratio, isPercentage);
            var defaultResult = {
                layout: 'fill',
                w: w,
                h: Math.round(w * ratio),
            };
            switch (mode) {
                case 'filled':
                    return defaultResult;
                case 'padded':
                    return {
                        layout: 'fixed-height',
                        w: w,
                        h: Math.round(w * srcRatio),
                    };
                default:
                    return defaultResult;
            }
        };
        return _this;
    }
    Image.prototype.render = function () {
        var _a = this.props, className = _a.className, lazy = _a.lazy, mode = _a.mode, amp = _a.amp, src = _a.src, alt = _a.alt, onClick = _a.onClick, children = _a.children, containerProps = __rest(_a, ["className", "lazy", "mode", "amp", "src", "alt", "onClick", "children"]);
        var _b = this.initVals(), width = _b.width, ratio = _b.ratio, isPercentage = _b.isPercentage;
        var _c = this.getMode(width, ratio, isPercentage), layout = _c.layout, w = _c.w, h = _c.h;
        var url = typeof src === 'function' ? src(w, h) : src;
        var image = (React.createElement(Img, { src: url, alt: alt, width: w >= h ? '100%' : 'auto', height: w < h ? '100%' : 'auto', onClick: onClick }));
        return (React.createElement(Container, __assign({}, containerProps, { className: className, width: isPercentage ? this.props.width : w, ratio: ratio, lazy: !amp && lazy }),
            amp
                ? React.createElement(Amp, { layout: layout, src: url, alt: alt, width: w, height: h }, image)
                : image,
            children));
    };
    Image = __decorate([
        withAmp
    ], Image);
    return Image;
}(Component));
Image.displayName = 'Image';
Image.propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    ratio: PropTypes.number.isRequired,
    srcRatio: PropTypes.number.isRequired,
    mode: PropTypes.oneOf(['filled', 'padded']).isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.number,
    minWidth: PropTypes.number,
    minHeight: PropTypes.number,
    maxWidth: PropTypes.number,
    maxHeight: PropTypes.number,
    maxResolution: PropTypes.number,
    lazy: PropTypes.bool,
    alt: PropTypes.string,
    onClick: PropTypes.func,
};
Image.defaultProps = {
    src: function (w, h) { return "https://lorempixel.com/" + w + "/" + h + "/cats/" + w + "x" + h; },
    ratio: 0.75,
    srcRatio: 0.75,
    mode: 'filled',
    width: undefined,
    height: undefined,
    minWidth: undefined,
    minHeight: undefined,
    maxWidth: undefined,
    maxHeight: undefined,
    maxResolution: 111000,
    lazy: true,
    alt: '',
    onClick: function () { },
};
export default Image;
//# sourceMappingURL=image.js.map