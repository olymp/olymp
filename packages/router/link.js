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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { urlToLocation } from './utils';
import { createPush } from './actions';
var Link = (function (_super) {
    __extends(Link, _super);
    function Link(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function (e) {
            var _a = _this.props, to = _a.to, push = _a.push, onClick = _a.onClick;
            e.preventDefault();
            if (onClick) {
                onClick(e);
            }
            else {
                push(_this.location);
            }
        };
        _this.location = urlToLocation(props.to);
        return _this;
    }
    Link.prototype.componentWillReceiveProps = function (props) {
        this.location = urlToLocation(props.to);
    };
    Link.prototype.render = function () {
        var _a = this.props, to = _a.to, push = _a.push, className = _a.className, style = _a.style, children = _a.children;
        return (React.createElement("a", { className: className, style: style, href: this.location.url, onClick: this.onClick, children: children }));
    };
    Link = __decorate([
        connect(function (_a) {
            var location = _a.location;
            return location;
        }, function (dispatch) { return ({
            push: createPush(dispatch),
        }); })
    ], Link);
    return Link;
}(Component));
export default Link;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3JvdXRlci9saW5rLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFRdkM7SUFBa0Msd0JBQVM7SUFDekMsY0FBWSxLQUFLO1FBQWpCLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBRWI7UUFJRCxhQUFPLEdBQUcsVUFBQSxDQUFDO1lBQ0gsSUFBQSxnQkFBa0MsRUFBaEMsVUFBRSxFQUFFLGNBQUksRUFBRSxvQkFBTyxDQUFnQjtZQUN6QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDWixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBYkEsS0FBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDOztJQUMxQyxDQUFDO0lBQ0Qsd0NBQXlCLEdBQXpCLFVBQTBCLEtBQUs7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFVRCxxQkFBTSxHQUFOO1FBQ1EsSUFBQSxlQUFxRCxFQUFuRCxVQUFFLEVBQUUsY0FBSSxFQUFFLHdCQUFTLEVBQUUsZ0JBQUssRUFBRSxzQkFBUSxDQUFnQjtRQUM1RCxNQUFNLENBQUMsQ0FDTCwyQkFDRSxTQUFTLEVBQUUsU0FBUyxFQUNwQixLQUFLLEVBQUUsS0FBSyxFQUNaLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQ3JCLFFBQVEsRUFBRSxRQUFRLEdBQ2xCLENBQ0gsQ0FBQztJQUNKLENBQUM7SUE1QmtCLElBQUk7UUFOeEIsT0FBTyxDQUNOLFVBQUMsRUFBWTtnQkFBVixzQkFBUTtZQUFPLE9BQUEsUUFBUTtRQUFSLENBQVEsRUFDMUIsVUFBQSxRQUFRLElBQUksT0FBQSxDQUFDO1lBQ1gsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDM0IsQ0FBQyxFQUZVLENBRVYsQ0FDSDtPQUNvQixJQUFJLENBNkJ4QjtJQUFELFdBQUM7Q0E3QkQsQUE2QkMsQ0E3QmlDLFNBQVMsR0E2QjFDO2VBN0JvQixJQUFJIiwiZmlsZSI6InBhY2thZ2VzL3JvdXRlci9saW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1cmxUb0xvY2F0aW9uIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjcmVhdGVQdXNoIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuQGNvbm5lY3QoXG4gICh7IGxvY2F0aW9uIH0pID0+IGxvY2F0aW9uLFxuICBkaXNwYXRjaCA9PiAoe1xuICAgIHB1c2g6IGNyZWF0ZVB1c2goZGlzcGF0Y2gpLFxuICB9KVxuKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMubG9jYXRpb24gPSB1cmxUb0xvY2F0aW9uKHByb3BzLnRvKTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5sb2NhdGlvbiA9IHVybFRvTG9jYXRpb24ocHJvcHMudG8pO1xuICB9XG4gIG9uQ2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCB7IHRvLCBwdXNoLCBvbkNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAob25DbGljaykge1xuICAgICAgb25DbGljayhlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHVzaCh0aGlzLmxvY2F0aW9uKTtcbiAgICB9XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvLCBwdXNoLCBjbGFzc05hbWUsIHN0eWxlLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgaHJlZj17dGhpcy5sb2NhdGlvbi51cmx9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cbiAgICAgICAgY2hpbGRyZW49e2NoaWxkcmVufVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=
