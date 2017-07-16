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
import { Component, Children } from 'react';
import PropTypes from 'prop-types';
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2hhc2h0YXgvc3JjL2RhdGEtcHJvdmlkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQWMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ25ELE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUduQztJQUEwQyxnQ0FBUztJQUFuRDs7SUFxQkEsQ0FBQztJQWRDLHNDQUFlLEdBQWY7UUFDRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDbkQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixNQUFNLENBQUM7WUFDTCxXQUFXLGVBQ04sV0FBVyxFQUNYLEtBQUssQ0FDVDtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0QsNkJBQU0sR0FBTjtRQUNVLElBQUEsOEJBQVEsQ0FBZ0I7UUFDaEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQW5CTSw4QkFBaUIsR0FBRztRQUN6QixXQUFXLEVBQUUsU0FBUyxDQUFDLE1BQU07S0FDOUIsQ0FBQztJQUNLLHlCQUFZLEdBQUc7UUFDcEIsV0FBVyxFQUFFLFNBQVMsQ0FBQyxNQUFNO0tBQzlCLENBQUM7SUFlSixtQkFBQztDQXJCRCxBQXFCQyxDQXJCeUMsU0FBUyxHQXFCbEQ7ZUFyQm9CLFlBQVkiLCJmaWxlIjoicGFja2FnZXMvaGFzaHRheC9zcmMvZGF0YS1wcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gRGF0YVByb3ZpZGVyOiBVc2UgaW5zaWRlIG9mIGRlY29yYXRvciB0byBoYW5kIHByb3BzIHRocm91Z2ggY29udGV4dCB0byBhbGwgY2hpbGRyZW5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBoYXNodGF4RGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBoYXNodGF4RGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIGNvbnN0IGhhc2h0YXhEYXRhID0gdGhpcy5jb250ZXh0Lmhhc2h0YXhEYXRhIHx8IHt9O1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4ge1xuICAgICAgaGFzaHRheERhdGE6IHtcbiAgICAgICAgLi4uaGFzaHRheERhdGEsXG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgfVxufVxuIl19
