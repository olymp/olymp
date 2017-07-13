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
import { Component } from 'react';
import PropTypes from 'prop-types';
var LightboxGallery = (function (_super) {
    __extends(LightboxGallery, _super);
    function LightboxGallery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LightboxGallery.prototype.getChildContext = function () {
        var lightbox = this.context.lightbox;
        var gallery = this.props.gallery;
        return {
            lightbox: __assign({}, lightbox, { gallery: gallery || Math.random().toString(36).substr(2, 9) }),
        };
    };
    LightboxGallery.prototype.render = function () {
        var children = this.props.children;
        return children;
    };
    LightboxGallery.contextTypes = {
        lightbox: PropTypes.object,
    };
    LightboxGallery.childContextTypes = {
        lightbox: PropTypes.object,
    };
    return LightboxGallery;
}(Component));
export default LightboxGallery;
//# sourceMappingURL=gallery.js.map