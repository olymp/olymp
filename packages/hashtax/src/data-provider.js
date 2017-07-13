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
import { Component, PropTypes, Children } from 'react';
var DataProvider = (function (_super) {
    __extends(DataProvider, _super);
    function DataProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataProvider.prototype.getChildContext = function () {
        var hashtaxData = this.context.hashtaxData || {};
        var props = this.props;
        return {
            hashtaxData: __assign({}, hashtaxData, props),
        };
    };
    DataProvider.prototype.render = function () {
        var children = this.props.children;
        return Children.only(children);
    };
    DataProvider.childContextTypes = {
        hashtaxData: PropTypes.object,
    };
    DataProvider.contextTypes = {
        hashtaxData: PropTypes.object,
    };
    return DataProvider;
}(Component));
export default DataProvider;
//# sourceMappingURL=data-provider.js.map