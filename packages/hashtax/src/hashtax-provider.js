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
import { Component, PropTypes, Children } from 'react';
import hashtax from './hashtax';
var HashtaxProvider = (function (_super) {
    __extends(HashtaxProvider, _super);
    function HashtaxProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.Hashtax = hashtax(props);
        return _this;
    }
    HashtaxProvider.prototype.shouldComponentUpdate = function (newProps) {
        this.Hashtax = hashtax(newProps);
        return true;
    };
    HashtaxProvider.prototype.getChildContext = function () {
        return {
            Hashtax: this.Hashtax,
        };
    };
    HashtaxProvider.prototype.render = function () {
        var children = this.props.children;
        return Children.only(children);
    };
    HashtaxProvider.childContextTypes = {
        Hashtax: PropTypes.func.isRequired,
    };
    return HashtaxProvider;
}(Component));
export default HashtaxProvider;
//# sourceMappingURL=hashtax-provider.js.map