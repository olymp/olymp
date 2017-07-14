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
import { withRouter } from 'olymp-router';
import { createComponent } from 'olymp-fela';
import Image, { cloudinaryUrl } from '../components/image';
var Img = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        cursor: 'pointer',
        onHover: {
            opacity: 0.85,
        },
    });
}, function (p) { return React.createElement(Image, __assign({}, p)); }, function (p) { return Object.keys(p); });
var Lightbox = (function (_super) {
    __extends(Lightbox, _super);
    function Lightbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = Math.random().toString(36).substr(2, 9);
        _this.add = function (value) {
            var lightbox = _this.context.lightbox;
            var width = 800;
            var getSrcSet = function (w) {
                return cloudinaryUrl(value, {
                    w: Math.floor(w),
                }) + " " + Math.floor(w) + "w";
            };
            lightbox.add({
                ref: _this.ref,
                gallery: lightbox.gallery,
                src: cloudinaryUrl(value, { w: width }),
                srcset: [
                    getSrcSet(width),
                    getSrcSet(width / 4 * 3),
                    getSrcSet(width / 2),
                    getSrcSet(width / 4),
                ],
                thumbnail: cloudinaryUrl(value, {
                    w: 50,
                    h: 50,
                }),
                caption: value.caption && value.source
                    ? value.caption + " - " + value.source
                    : value.caption || value.source || '',
            });
        };
        _this.onClick = function (e) {
            var _a = _this.props, onClick = _a.onClick, router = _a.router, pathname = _a.pathname, query = _a.query;
            router.push({ pathname: pathname, query: __assign({}, query, { lightbox: _this.ref }) });
            if (onClick) {
                onClick(e);
            }
        };
        return _this;
    }
    Lightbox.prototype.componentWillMount = function () {
        var value = this.props.value;
        if (value) {
            this.add(value);
        }
    };
    Lightbox.prototype.componentWillReceiveProps = function (_a) {
        var value = _a.value;
        var lightbox = this.context.lightbox;
        if (value.id !== this.props.value.id) {
            lightbox.remove(this.ref);
            this.add(value);
        }
    };
    Lightbox.prototype.componentWillUnmount = function () {
        var lightbox = this.context.lightbox;
        lightbox.remove(this.ref);
    };
    Lightbox.prototype.render = function () {
        var _a = this.props, value = _a.value, onClick = _a.onClick, router = _a.router, pathname = _a.pathname, query = _a.query, search = _a.search, dispatch = _a.dispatch, location = _a.location, rest = __rest(_a, ["value", "onClick", "router", "pathname", "query", "search", "dispatch", "location"]);
        if (!value || !value.url) {
            return React.createElement("div", null);
        }
        return React.createElement(Img, __assign({ onClick: this.onClick, value: value }, rest));
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
//# sourceMappingURL=image.js.map