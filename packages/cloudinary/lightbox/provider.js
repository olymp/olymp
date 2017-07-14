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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'olymp-router';
var LightboxProvider = (function (_super) {
    __extends(LightboxProvider, _super);
    function LightboxProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.images = [];
        _this.state = {
            images: [],
        };
        _this.add = function (image) {
            _this.images.push(image);
        };
        _this.remove = function (ref) {
            _this.images = _this.images.filter(function (image) { return image.ref !== ref; });
        };
        return _this;
    }
    LightboxProvider.prototype.getChildContext = function () {
        var images = this.state.images;
        return {
            lightbox: {
                add: this.add,
                remove: this.remove,
                gallery: 0,
                images: images,
            },
        };
    };
    LightboxProvider.prototype.componentWillReceiveProps = function (_a) {
        var query = _a.query;
        var images = this.state.images;
        if (query.lightbox !== this.props.query.lightbox) {
            this.setState({ images: this.images });
        }
    };
    LightboxProvider.prototype.render = function () {
        var children = this.props.children;
        return children;
    };
    LightboxProvider.childContextTypes = {
        lightbox: PropTypes.object,
    };
    LightboxProvider = __decorate([
        withRouter
    ], LightboxProvider);
    return LightboxProvider;
}(Component));
export default LightboxProvider;
//# sourceMappingURL=provider.js.map