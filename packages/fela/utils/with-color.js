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
        function WithColorComponent(props) {
            var _this = _super.call(this, props) || this;
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
            _this.setColor(props);
            return _this;
        }
        WithColorComponent.prototype.componentWillUnmount = function () {
            var setTheme = this.props.setTheme;
            setTheme({});
        };
        WithColorComponent.prototype.componentWillReceiveProps = function (props) {
            this.setColor(props);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvd2l0aC1jb2xvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVuQyxlQUFlLFVBQUEsaUJBQWlCLElBQUksT0FBQSxVQUFBLGdCQUFnQjtJQUVsRDtRQUFpQyxzQ0FBUztRQUV4Qyw0QkFBWSxLQUFLO1lBQWpCLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBRWI7WUFKRCxXQUFLLEdBQUcsSUFBSSxDQUFDO1lBS2IsY0FBUSxHQUFHLFVBQUMsS0FBa0I7Z0JBQWxCLHNCQUFBLEVBQUEsUUFBUSxLQUFJLENBQUMsS0FBSztnQkFDcEIsSUFBQSwrQkFBUSxDQUFnQjtnQkFDaEMsSUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDO2dCQUNsRCxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzVCLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUM5QixLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDeEIsQ0FBQztZQUNILENBQUMsQ0FBQztZQVRBLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBQ3ZCLENBQUM7UUFTRCxpREFBb0IsR0FBcEI7WUFDVSxJQUFBLDhCQUFRLENBQWdCO1lBQ2hDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLENBQUM7UUFDRCxzREFBeUIsR0FBekIsVUFBMEIsS0FBSztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxtQ0FBTSxHQUFOO1lBQ0UsTUFBTSxDQUFDLG9CQUFDLGdCQUFnQixlQUFLLElBQUksQ0FBQyxLQUFLLEVBQUksQ0FBQztRQUM5QyxDQUFDO1FBdkJHLGtCQUFrQjtZQUR2QixRQUFRO1dBQ0gsa0JBQWtCLENBd0J2QjtRQUFELHlCQUFDO0tBeEJELEFBd0JDLENBeEJnQyxTQUFTLEdBd0J6QztJQUNELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztBQUM1QixDQUFDLEVBNUJtQyxDQTRCbkMsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL3V0aWxzL3dpdGgtY29sb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2V0VGhlbWUgfSBmcm9tICcuL3JlZHV4JztcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29sb3JGcm9tUHJvcHMgPT4gV3JhcHBlZENvbXBvbmVudCA9PiB7XG4gIEBzZXRUaGVtZVxuICBjbGFzcyBXaXRoQ29sb3JDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbG9yID0gbnVsbDtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zZXRDb2xvcihwcm9wcyk7XG4gICAgfVxuICAgIHNldENvbG9yID0gKHByb3BzID0gdGhpcy5wcm9wcykgPT4ge1xuICAgICAgY29uc3QgeyBzZXRUaGVtZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IG5ld0NvbG9yID0gZ2V0Q29sb3JGcm9tUHJvcHMocHJvcHMpIHx8IG51bGw7XG4gICAgICBpZiAobmV3Q29sb3IgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgICAgc2V0VGhlbWUoeyBjb2xvcjogbmV3Q29sb3IgfSk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXdDb2xvcjtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgY29uc3QgeyBzZXRUaGVtZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHNldFRoZW1lKHt9KTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgdGhpcy5zZXRDb2xvcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICB9XG4gIHJldHVybiBXaXRoQ29sb3JDb21wb25lbnQ7XG59O1xuIl19
