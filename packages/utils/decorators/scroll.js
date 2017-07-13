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
import { throttle } from 'lodash';
import cn from 'classnames';
export default function (WrappedComponent) {
    return (function (_super) {
        __extends(WithScroll, _super);
        function WithScroll() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = { top: 0 };
            _this.onScroll = throttle(function (e) {
                var top = e.target.scrollTop;
                _this.setState({ top: top });
            }, 100, { trailing: true, leading: true });
            return _this;
        }
        WithScroll.prototype.componentDidMount = function () {
            document.addEventListener('scroll', this.onScroll, true);
        };
        WithScroll.prototype.componentWillUnmount = function () {
            document.removeEventListener('scroll', this.onScroll, true);
        };
        WithScroll.prototype.render = function () {
            var className = this.state.className;
            var top = this.state.top;
            if (top && false) {
                className = cn(className, top && 'is-scrolled');
            }
            return __assign({}, this.props);
            scrollTop = { top: top } /  > ;
        };
        return WithScroll;
    }(Component));
};
//# sourceMappingURL=scroll.js.map