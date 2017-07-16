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
        connect(null, function (dispatch) { return ({
            push: createPush(dispatch),
        }); })
    ], Link);
    return Link;
}(Component));
export default Link;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3JvdXRlci9saW5rLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFLdkM7SUFBa0Msd0JBQVM7SUFDekMsY0FBWSxLQUFLO1FBQWpCLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBRWI7UUFJRCxhQUFPLEdBQUcsVUFBQSxDQUFDO1lBQ0gsSUFBQSxnQkFBa0MsRUFBaEMsVUFBRSxFQUFFLGNBQUksRUFBRSxvQkFBTyxDQUFnQjtZQUN6QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDWixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBYkEsS0FBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDOztJQUMxQyxDQUFDO0lBQ0Qsd0NBQXlCLEdBQXpCLFVBQTBCLEtBQUs7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFVRCxxQkFBTSxHQUFOO1FBQ1EsSUFBQSxlQUFxRCxFQUFuRCxVQUFFLEVBQUUsY0FBSSxFQUFFLHdCQUFTLEVBQUUsZ0JBQUssRUFBRSxzQkFBUSxDQUFnQjtRQUM1RCxNQUFNLENBQUMsQ0FDTCwyQkFDRSxTQUFTLEVBQUUsU0FBUyxFQUNwQixLQUFLLEVBQUUsS0FBSyxFQUNaLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQ3JCLFFBQVEsRUFBRSxRQUFRLEdBQ2xCLENBQ0gsQ0FBQztJQUNKLENBQUM7SUE1QmtCLElBQUk7UUFIeEIsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUM7WUFDMUIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDM0IsQ0FBQyxFQUZ5QixDQUV6QixDQUFDO09BQ2tCLElBQUksQ0E2QnhCO0lBQUQsV0FBQztDQTdCRCxBQTZCQyxDQTdCaUMsU0FBUyxHQTZCMUM7ZUE3Qm9CLElBQUkiLCJmaWxlIjoicGFja2FnZXMvcm91dGVyL2xpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVybFRvTG9jYXRpb24gfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNyZWF0ZVB1c2ggfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5AY29ubmVjdChudWxsLCBkaXNwYXRjaCA9PiAoe1xuICBwdXNoOiBjcmVhdGVQdXNoKGRpc3BhdGNoKSxcbn0pKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMubG9jYXRpb24gPSB1cmxUb0xvY2F0aW9uKHByb3BzLnRvKTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5sb2NhdGlvbiA9IHVybFRvTG9jYXRpb24ocHJvcHMudG8pO1xuICB9XG4gIG9uQ2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCB7IHRvLCBwdXNoLCBvbkNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAob25DbGljaykge1xuICAgICAgb25DbGljayhlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHVzaCh0aGlzLmxvY2F0aW9uKTtcbiAgICB9XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvLCBwdXNoLCBjbGFzc05hbWUsIHN0eWxlLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgaHJlZj17dGhpcy5sb2NhdGlvbi51cmx9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cbiAgICAgICAgY2hpbGRyZW49e2NoaWxkcmVufVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=
