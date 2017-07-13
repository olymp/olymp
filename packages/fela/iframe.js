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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FrameComponent from 'react-frame-component';
import { createComponent } from 'react-fela';
var StyledFrameComponent = createComponent(function () { return ({
    border: 0,
    width: '100%',
    height: '100%',
}); }, FrameComponent, function (p) { return Object.keys(p); });
var FrameInner = (function (_super) {
    __extends(FrameInner, _super);
    function FrameInner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FrameInner.prototype.componentDidMount = function () {
        var parent = window;
        var document = this.context.document;
        setTimeout(function () {
            var style = document.createElement('style');
            style.id = 'iframe-styles';
            style.type = 'text/css';
            style.appendChild(document.createTextNode("\n        .frame-root { height: 100%; }\n        .frame-content { height: 100%; }\n      "));
            var oHead = document.getElementsByTagName('head')[0];
            var arrStyleSheets = parent.document.getElementsByTagName('style').concat(parent.document.getElementsByTagName('link'));
            for (var i = 0; i < arrStyleSheets.length; i++) {
                oHead.appendChild(arrStyleSheets[i].cloneNode(true));
            }
            oHead.appendChild(style);
        }, 0);
    };
    FrameInner.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return React.Children.only(children);
    };
    FrameInner.contextTypes = {
        window: PropTypes.any,
        document: PropTypes.any,
    };
    return FrameInner;
}(Component));
export default function (_a) {
    var children = _a.children, disabled = _a.disabled;
    return disabled
        ? React.Children.only(children)
        : React.createElement(StyledFrameComponent, null,
            React.createElement(FrameInner, null, children));
};
//# sourceMappingURL=iframe.js.map