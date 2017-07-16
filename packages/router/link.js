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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
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
            var _a = _this.props, to = _a.to, push = _a.push;
            e.preventDefault();
            push(_this.location);
        };
        _this.location = urlToLocation(props.to);
        return _this;
    }
    Link.prototype.componentWillReceiveProps = function (props) {
        this.location = urlToLocation(props.to);
    };
    Link.prototype.render = function () {
        var _a = this.props, to = _a.to, push = _a.push, rest = __rest(_a, ["to", "push"]);
        return React.createElement("a", __assign({}, rest, { href: this.location.url, onClick: this.onClick }));
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3JvdXRlci9saW5rLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVF2QztJQUFrQyx3QkFBUztJQUN6QyxjQUFZLEtBQUs7UUFBakIsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FFYjtRQUlELGFBQU8sR0FBRyxVQUFBLENBQUM7WUFDSCxJQUFBLGdCQUF5QixFQUF2QixVQUFFLEVBQUUsY0FBSSxDQUFnQjtZQUNoQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUM7UUFUQSxLQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7O0lBQzFDLENBQUM7SUFDRCx3Q0FBeUIsR0FBekIsVUFBMEIsS0FBSztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQU1ELHFCQUFNLEdBQU47UUFDRSxJQUFNLGVBQWtDLEVBQWhDLFVBQUUsRUFBRSxjQUFJLEVBQUUsaUNBQXNCLENBQUM7UUFDekMsTUFBTSxDQUFDLHNDQUFPLElBQUksSUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQztJQUN6RSxDQUFDO0lBaEJrQixJQUFJO1FBTnhCLE9BQU8sQ0FDTixVQUFDLEVBQVk7Z0JBQVYsc0JBQVE7WUFBTyxPQUFBLFFBQVE7UUFBUixDQUFRLEVBQzFCLFVBQUEsUUFBUSxJQUFJLE9BQUEsQ0FBQztZQUNYLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQzNCLENBQUMsRUFGVSxDQUVWLENBQ0g7T0FDb0IsSUFBSSxDQWlCeEI7SUFBRCxXQUFDO0NBakJELEFBaUJDLENBakJpQyxTQUFTLEdBaUIxQztlQWpCb0IsSUFBSSIsImZpbGUiOiJwYWNrYWdlcy9yb3V0ZXIvbGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXJsVG9Mb2NhdGlvbiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlUHVzaCB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbkBjb25uZWN0KFxuICAoeyBsb2NhdGlvbiB9KSA9PiBsb2NhdGlvbixcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBwdXNoOiBjcmVhdGVQdXNoKGRpc3BhdGNoKSxcbiAgfSlcbilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmxvY2F0aW9uID0gdXJsVG9Mb2NhdGlvbihwcm9wcy50byk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIHRoaXMubG9jYXRpb24gPSB1cmxUb0xvY2F0aW9uKHByb3BzLnRvKTtcbiAgfVxuICBvbkNsaWNrID0gZSA9PiB7XG4gICAgY29uc3QgeyB0bywgcHVzaCB9ID0gdGhpcy5wcm9wcztcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHVzaCh0aGlzLmxvY2F0aW9uKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG8sIHB1c2gsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxhIHsuLi5yZXN0fSBocmVmPXt0aGlzLmxvY2F0aW9uLnVybH0gb25DbGljaz17dGhpcy5vbkNsaWNrfSAvPjtcbiAgfVxufVxuIl19
