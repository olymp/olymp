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
import { func } from 'prop-types';
import shortId from 'shortid';
export default function (getColorFromProps) { return function (WrappedComponent) { return _a = (function (_super) {
        __extends(WithColorComponent, _super);
        function WithColorComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = shortId.generate();
            _this.color = null;
            _this.setColor = function (props) {
                if (props === void 0) { props = _this.props; }
                var setColor = _this.context.setColor;
                var newColor = getColorFromProps(props) || null;
                if (newColor !== _this.color) {
                    setColor(_this.id, newColor);
                    _this.color = newColor;
                }
            };
            return _this;
        }
        WithColorComponent.prototype.componentDidMount = function () {
            this.setColor(this.props);
        };
        WithColorComponent.prototype.componentWillUnmount = function () {
            var setColor = this.context.setColor;
            setColor(this.id, null);
        };
        WithColorComponent.prototype.componentWillReceiveProps = function (newProps) {
            this.setColor(newProps);
        };
        WithColorComponent.prototype.render = function () {
            return React.createElement(WrappedComponent, __assign({}, this.props));
        };
        return WithColorComponent;
    }(Component)),
    _a.contextTypes = {
        setColor: func,
    },
    _a; var _a; }; };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvd2l0aC1jb2xvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNsQyxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFFOUIsZUFBZSxVQUFBLGlCQUFpQixJQUFJLE9BQUEsVUFBQSxnQkFBZ0I7UUFDakIsc0NBQVM7UUFBMUM7WUFBQSxxRUEyQkM7WUF2QkMsUUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixXQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2IsY0FBUSxHQUFHLFVBQUMsS0FBa0I7Z0JBQWxCLHNCQUFBLEVBQUEsUUFBUSxLQUFJLENBQUMsS0FBSztnQkFDcEIsSUFBQSxpQ0FBUSxDQUFrQjtnQkFDbEMsSUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDO2dCQUNsRCxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzVCLFFBQVEsQ0FBQyxLQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUM1QixLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDeEIsQ0FBQztZQUNILENBQUMsQ0FBQzs7UUFjSixDQUFDO1FBYkMsOENBQWlCLEdBQWpCO1lBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELGlEQUFvQixHQUFwQjtZQUNVLElBQUEsZ0NBQVEsQ0FBa0I7WUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNELHNEQUF5QixHQUF6QixVQUEwQixRQUFRO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNELG1DQUFNLEdBQU47WUFDRSxNQUFNLENBQUMsb0JBQUMsZ0JBQWdCLGVBQUssSUFBSSxDQUFDLEtBQUssRUFBSSxDQUFDO1FBQzlDLENBQUM7UUFDSCx5QkFBQztJQUFELENBM0JBLEFBMkJDLENBM0JnQyxTQUFTO0lBQ2pDLGVBQVksR0FBRztRQUNwQixRQUFRLEVBQUUsSUFBSTtLQUNkO2lCQXdCSCxFQTVCaUMsQ0E0QmpDLENBQUMiLCJmaWxlIjoicGFja2FnZXMvZmVsYS91dGlscy93aXRoLWNvbG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZ1bmMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb2xvckZyb21Qcm9wcyA9PiBXcmFwcGVkQ29tcG9uZW50ID0+XG4gIGNsYXNzIFdpdGhDb2xvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgIHNldENvbG9yOiBmdW5jLFxuICAgIH07XG4gICAgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XG4gICAgY29sb3IgPSBudWxsO1xuICAgIHNldENvbG9yID0gKHByb3BzID0gdGhpcy5wcm9wcykgPT4ge1xuICAgICAgY29uc3QgeyBzZXRDb2xvciB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgY29uc3QgbmV3Q29sb3IgPSBnZXRDb2xvckZyb21Qcm9wcyhwcm9wcykgfHwgbnVsbDtcbiAgICAgIGlmIChuZXdDb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICBzZXRDb2xvcih0aGlzLmlkLCBuZXdDb2xvcik7XG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXdDb2xvcjtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRDb2xvcih0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBjb25zdCB7IHNldENvbG9yIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICBzZXRDb2xvcih0aGlzLmlkLCBudWxsKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgdGhpcy5zZXRDb2xvcihuZXdQcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICB9O1xuIl19
