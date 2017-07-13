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
import { cloudinaryUrl, cn } from 'olymp-utils';
import ImageGallery from 'react-image-gallery';
import './carousel.less';
var Carousel = (function (_super) {
    __extends(Carousel, _super);
    function Carousel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderLeftNav = function (onClick, disabled) {
            return (React.createElement("button", { className: "image-gallery-left-nav", disabled: disabled, onClick: onClick },
                React.createElement("i", { className: "fa fa-angle-left" })));
        };
        _this.renderRightNav = function (onClick, disabled) {
            return (React.createElement("button", { className: "image-gallery-right-nav", disabled: disabled, onClick: onClick },
                React.createElement("i", { className: "fa fa-angle-right" })));
        };
        _this.renderPlayPauseButton = function (onClick, isPlaying) { return null; };
        _this.renderFullscreenButton = function (onClick, isFullscreen) {
            return (React.createElement("button", { type: "button", className: cn('image-gallery-play-button', isFullscreen && 'active'), onClick: onClick },
                React.createElement("i", { className: "fa fa-expand", style: { color: 'white', padding: '15px 20px' } })));
        };
        _this.getHeight = function (width) { return Math.floor(width / _this.props.ratio); };
        return _this;
    }
    Carousel.prototype.render = function () {
        var _this = this;
        var _a = this.props, items = _a.items, radius = _a.radius, thumbRadius = _a.thumbRadius;
        var images = items &&
            items.map(function (_a) {
                var url = _a.url, render = _a.render, rest = __rest(_a, ["url", "render"]);
                return ({
                    original: cloudinaryUrl(url, __assign({ width: 800, height: _this.getHeight(800), radius: radius }, rest)),
                    srcSet: "\n        " + cloudinaryUrl(url, __assign({ width: 400, height: _this.getHeight(400), radius: radius }, rest)) + " 400w,\n        " + cloudinaryUrl(url, __assign({ width: 800, height: _this.getHeight(800), radius: radius }, rest)) + " 800w,\n        " + cloudinaryUrl(url, __assign({ width: 1200, height: _this.getHeight(1200), radius: radius }, rest)) + " 1200w,\n        " + cloudinaryUrl(url, __assign({ width: 1600, height: _this.getHeight(1600), radius: radius }, rest)) + " 1600w\n      ",
                    thumbnail: cloudinaryUrl(url, __assign({ width: 150, height: 150, radius: thumbRadius }, rest)),
                    renderItem: render,
                });
            });
        return (React.createElement(ImageGallery, { renderFullscreenButton: this.renderFullscreenButton, renderPlayPauseButton: this.renderPlayPauseButton, renderRightNav: this.renderRightNav, renderLeftNav: this.renderLeftNav, autoPlay: true, items: images || [], slideInterval: this.props.slideInterval || 7000, slideDuration: 1000 }));
    };
    return Carousel;
}(Component));
export default Carousel;
//# sourceMappingURL=carousel.js.map