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
import LightBox from 'react-images';
import { withRouter } from 'olymp-router';
var Lightbox = (function (_super) {
    __extends(Lightbox, _super);
    function Lightbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lightbox.prototype.render = function () {
        var _a = this.props, router = _a.router, query = _a.query, pathname = _a.pathname, rest = __rest(_a, ["router", "query", "pathname"]);
        var lightbox = this.context.lightbox;
        var queryLightbox = query.lightbox, queryRest = __rest(query, ["lightbox"]);
        var image = lightbox.images.find(function (img) { return img.ref === queryLightbox; });
        var images = (image && lightbox.images.filter(function (img) { return img.gallery === image.gallery; })) ||
            [];
        var currIndex = images.findIndex(function (img) { return img.ref === queryLightbox; });
        var prevIndex = currIndex > 0 ? currIndex - 1 : images.length - 1;
        var nextIndex = currIndex < images.length - 1 ? currIndex + 1 : 0;
        return (React.createElement(LightBox, __assign({ images: images, currentImage: currIndex, isOpen: currIndex >= 0, onClose: function () { return router.push({ pathname: pathname, query: __assign({}, queryRest) }); }, onClickPrev: function () {
                return router.push({
                    pathname: pathname,
                    query: __assign({}, query, { lightbox: images[prevIndex].ref }),
                });
            }, onClickNext: function () {
                return router.push({
                    pathname: pathname,
                    query: __assign({}, query, { lightbox: images[nextIndex].ref }),
                });
            }, onClickThumbnail: function (i) {
                return router.push({
                    pathname: pathname,
                    query: __assign({}, query, { lightbox: images[i].ref }),
                });
            }, imageCountSeparator: " von ", backdropClosesModal: true, showThumbnails: images.length !== 1 }, rest)));
    };
    Lightbox.contextTypes = {
        lightbox: PropTypes.object,
    };
    Lightbox = __decorate([
        withRouter
    ], Lightbox);
    return Lightbox;
}(Component));
export default Lightbox;
//# sourceMappingURL=lightbox.js.map