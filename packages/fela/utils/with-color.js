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
import React, { Component } from 'react';
import { setTheme } from './redux';
export default function (getColorFromProps) { return function (WrappedComponent) {
    var WithColorComponent = (function (_super) {
        __extends(WithColorComponent, _super);
        function WithColorComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.color = null;
            _this.setColor = function (props) {
                if (props === void 0) { props = _this.props; }
                var setTheme = _this.props.setTheme;
                var newColor = getColorFromProps(props) || null;
                if (newColor !== _this.color) {
                    setTheme({ color: newColor });
                    _this.color = newColor;
                }
            };
            return _this;
        }
        WithColorComponent.prototype.componentDidMount = function () {
            this.setColor(this.props);
        };
        WithColorComponent.prototype.componentWillUnmount = function () {
            var setTheme = this.props.setTheme;
            setTheme({});
        };
        WithColorComponent.prototype.componentWillReceiveProps = function (newProps) {
            this.setColor(newProps);
        };
        WithColorComponent.prototype.render = function () {
            return React.createElement(WrappedComponent, __assign({}, this.props));
        };
        WithColorComponent = __decorate([
            setTheme
        ], WithColorComponent);
        return WithColorComponent;
    }(Component));
    return WithColorComponent;
}; };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvd2l0aC1jb2xvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVuQyxlQUFlLFVBQUEsaUJBQWlCLElBQUksT0FBQSxVQUFBLGdCQUFnQjtJQUVsRDtRQUFpQyxzQ0FBUztRQUQxQztZQUFBLHFFQXdCQztZQXRCQyxXQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2IsY0FBUSxHQUFHLFVBQUMsS0FBa0I7Z0JBQWxCLHNCQUFBLEVBQUEsUUFBUSxLQUFJLENBQUMsS0FBSztnQkFDcEIsSUFBQSwrQkFBUSxDQUFnQjtnQkFDaEMsSUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDO2dCQUNsRCxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzVCLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUM5QixLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDeEIsQ0FBQztZQUNILENBQUMsQ0FBQzs7UUFjSixDQUFDO1FBYkMsOENBQWlCLEdBQWpCO1lBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELGlEQUFvQixHQUFwQjtZQUNVLElBQUEsOEJBQVEsQ0FBZ0I7WUFDaEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsQ0FBQztRQUNELHNEQUF5QixHQUF6QixVQUEwQixRQUFRO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNELG1DQUFNLEdBQU47WUFDRSxNQUFNLENBQUMsb0JBQUMsZ0JBQWdCLGVBQUssSUFBSSxDQUFDLEtBQUssRUFBSSxDQUFDO1FBQzlDLENBQUM7UUF0Qkcsa0JBQWtCO1lBRHZCLFFBQVE7V0FDSCxrQkFBa0IsQ0F1QnZCO1FBQUQseUJBQUM7S0F2QkQsQUF1QkMsQ0F2QmdDLFNBQVMsR0F1QnpDO0lBQ0QsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0FBQzVCLENBQUMsRUEzQm1DLENBMkJuQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvdXRpbHMvd2l0aC1jb2xvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzZXRUaGVtZSB9IGZyb20gJy4vcmVkdXgnO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb2xvckZyb21Qcm9wcyA9PiBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgQHNldFRoZW1lXG4gIGNsYXNzIFdpdGhDb2xvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29sb3IgPSBudWxsO1xuICAgIHNldENvbG9yID0gKHByb3BzID0gdGhpcy5wcm9wcykgPT4ge1xuICAgICAgY29uc3QgeyBzZXRUaGVtZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IG5ld0NvbG9yID0gZ2V0Q29sb3JGcm9tUHJvcHMocHJvcHMpIHx8IG51bGw7XG4gICAgICBpZiAobmV3Q29sb3IgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgICAgc2V0VGhlbWUoeyBjb2xvcjogbmV3Q29sb3IgfSk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXdDb2xvcjtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRDb2xvcih0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBjb25zdCB7IHNldFRoZW1lIH0gPSB0aGlzLnByb3BzO1xuICAgICAgc2V0VGhlbWUoe30pO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgICB0aGlzLnNldENvbG9yKG5ld1Byb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFdpdGhDb2xvckNvbXBvbmVudDtcbn07XG4iXX0=
