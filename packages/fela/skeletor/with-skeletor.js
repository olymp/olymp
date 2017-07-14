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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default (WrappedComponent = function (color) { return _a = (function (_super) {
        __extends(WithSkeletor, _super);
        function WithSkeletor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WithSkeletor.prototype.getChildContext = function () {
            var isLoading = this.props.isLoading;
            return { skeletorLoading: isLoading, skeletorColor: color };
        };
        WithSkeletor.prototype.render = function () {
            return React.createElement(WrappedComponent, __assign({}, this.props));
        };
        return WithSkeletor;
    }(Component)),
    _a.childContextTypes = {
        skeletorLoading: PropTypes.bool,
        skeletorColor: PropTypes.string,
    },
    _a; var _a; });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvc2tlbGV0b3Ivd2l0aC1za2VsZXRvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBRW5DLGVBQWUsQ0FBQyxnQkFBZ0IsR0FBRyxVQUFBLEtBQUs7UUFDWCxnQ0FBUztRQUFwQzs7UUFlQSxDQUFDO1FBVEMsc0NBQWUsR0FBZjtZQUNVLElBQUEsZ0NBQVMsQ0FBZ0I7WUFFakMsTUFBTSxDQUFDLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDOUQsQ0FBQztRQUVELDZCQUFNLEdBQU47WUFDRSxNQUFNLENBQUMsb0JBQUMsZ0JBQWdCLGVBQUssSUFBSSxDQUFDLEtBQUssRUFBSSxDQUFDO1FBQzlDLENBQUM7UUFDSCxtQkFBQztJQUFELENBZkEsQUFlQyxDQWYwQixTQUFTO0lBQzNCLG9CQUFpQixHQUFHO1FBQ3pCLGVBQWUsRUFBRSxTQUFTLENBQUMsSUFBSTtRQUMvQixhQUFhLEVBQUUsU0FBUyxDQUFDLE1BQU07S0FDL0I7aUJBV0gsQ0FBQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvc2tlbGV0b3Ivd2l0aC1za2VsZXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoV3JhcHBlZENvbXBvbmVudCA9IGNvbG9yID0+XG4gIGNsYXNzIFdpdGhTa2VsZXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgc2tlbGV0b3JMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHNrZWxldG9yQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfTtcblxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIGNvbnN0IHsgaXNMb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4geyBza2VsZXRvckxvYWRpbmc6IGlzTG9hZGluZywgc2tlbGV0b3JDb2xvcjogY29sb3IgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbiAgfSk7XG4iXX0=
