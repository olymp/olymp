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
import { ThemeProvider as FelaThemeProvider } from 'react-fela';
import { func } from 'prop-types';
var WithColorProvider = (function (_super) {
    __extends(WithColorProvider, _super);
    function WithColorProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colors = {};
        _this.setColor = function (id, color) {
            if (!id) {
                return;
            }
            var colors = __assign({}, _this.colors);
            if (color) {
                _this.colors = __assign({}, colors, (_a = {}, _a[id] = color, _a));
            }
            else {
                delete colors[id];
                _this.colors = colors;
            }
            _this.forceUpdate();
            var _a;
        };
        return _this;
    }
    WithColorProvider.prototype.getChildContext = function () {
        return {
            setColor: this.setColor,
        };
    };
    WithColorProvider.prototype.render = function () {
        var children = this.props.children;
        var color = this.colors[Object.keys(this.colors).reverse()[0]];
        var theme = {};
        if (color) {
            theme.color = color;
        }
        return (React.createElement(FelaThemeProvider, { theme: theme }, children));
    };
    WithColorProvider.childContextTypes = {
        setColor: func,
    };
    return WithColorProvider;
}(Component));
export default WithColorProvider;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvd2l0aC1jb2xvci1wcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsSUFBSSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNoRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRWxDO0lBQStDLHFDQUFTO0lBQXhEO1FBQUEscUVBdUNDO1FBdENDLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFTWixjQUFRLEdBQUcsVUFBQyxFQUFFLEVBQUUsS0FBSztZQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELElBQU0sTUFBTSxnQkFBUSxLQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7WUFDbEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDVixLQUFJLENBQUMsTUFBTSxnQkFBUSxNQUFNLGVBQUcsRUFBRSxJQUFHLEtBQUssTUFBRSxDQUFDO1lBQzNDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDdkIsQ0FBQztZQUVELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7UUFDckIsQ0FBQyxDQUFDOztJQWdCSixDQUFDO0lBbENDLDJDQUFlLEdBQWY7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQztJQUNKLENBQUM7SUFlRCxrQ0FBTSxHQUFOO1FBQ1UsSUFBQSw4QkFBUSxDQUFnQjtRQUNoQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWpCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBRUQsTUFBTSxDQUFDLENBQ0wsb0JBQUMsaUJBQWlCLElBQUMsS0FBSyxFQUFFLEtBQUssSUFDNUIsUUFBUSxDQUNTLENBQ3JCLENBQUM7SUFDSixDQUFDO0lBcENNLG1DQUFpQixHQUFHO1FBQ3pCLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQztJQW1DSix3QkFBQztDQXZDRCxBQXVDQyxDQXZDOEMsU0FBUyxHQXVDdkQ7ZUF2Q29CLGlCQUFpQiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL3V0aWxzL3dpdGgtY29sb3ItcHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciBhcyBGZWxhVGhlbWVQcm92aWRlciB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXRoQ29sb3JQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbG9ycyA9IHt9O1xuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgc2V0Q29sb3I6IGZ1bmMsXG4gIH07XG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2V0Q29sb3I6IHRoaXMuc2V0Q29sb3IsXG4gICAgfTtcbiAgfVxuICBzZXRDb2xvciA9IChpZCwgY29sb3IpID0+IHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbG9ycyA9IHsgLi4udGhpcy5jb2xvcnMgfTtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIHRoaXMuY29sb3JzID0geyAuLi5jb2xvcnMsIFtpZF06IGNvbG9yIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBjb2xvcnNbaWRdO1xuICAgICAgdGhpcy5jb2xvcnMgPSBjb2xvcnM7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3JzW09iamVjdC5rZXlzKHRoaXMuY29sb3JzKS5yZXZlcnNlKClbMF1dO1xuICAgIGNvbnN0IHRoZW1lID0ge307XG5cbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIHRoZW1lLmNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGZWxhVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0ZlbGFUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
