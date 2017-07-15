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
import { Children, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { get } from 'lodash';
import withRouter from './with-router';
var ScrollToTop = (function (_super) {
    __extends(ScrollToTop, _super);
    function ScrollToTop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScrollToTop.prototype.componentDidUpdate = function (prevProps) {
        if (get(this.props.location, 'pathname') !==
            get(prevProps.location, 'pathname')) {
            var node = findDOMNode(this);
            if (node) {
                node.scrollTop = 0;
            }
        }
    };
    ScrollToTop.prototype.render = function () {
        return Children.only(this.props.children);
    };
    ScrollToTop = __decorate([
        withRouter
    ], ScrollToTop);
    return ScrollToTop;
}(Component));
export default ScrollToTop;
//# sourceMappingURL=scroll-to-top.js.map