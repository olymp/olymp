var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { createComponent } from 'react-fela';
export default function (WrappedComponent) {
    return createComponent(function () { return ({
        animationName: {
            '0%': {
                opacity: 0.8,
            },
            '50%': {
                opacity: 0.4,
            },
            '100%': {
                opacity: 0.8,
            },
        },
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
    }); }, function (props) { return React.createElement(WrappedComponent, __assign({}, props)); }, function (props) { return Object.keys(props); });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvd2l0aC1wdWxzZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUU3QyxlQUFlLFVBQUEsZ0JBQWdCO0lBQzdCLE9BQUEsZUFBZSxDQUNiLGNBQU0sT0FBQSxDQUFDO1FBQ0wsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxHQUFHO2FBQ2I7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLEdBQUc7YUFDYjtZQUNELE1BQU0sRUFBRTtnQkFDTixPQUFPLEVBQUUsR0FBRzthQUNiO1NBQ0Y7UUFDRCxpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLHVCQUF1QixFQUFFLFVBQVU7UUFDbkMsdUJBQXVCLEVBQUUsUUFBUTtLQUNsQyxDQUFDLEVBZkksQ0FlSixFQUNGLFVBQUEsS0FBSyxJQUFJLE9BQUEsb0JBQUMsZ0JBQWdCLGVBQUssS0FBSyxFQUFJLEVBQS9CLENBQStCLEVBRXhDLFVBQUEsS0FBSyxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDNUI7QUFwQkQsQ0FvQkMsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL3V0aWxzL3dpdGgtcHVsc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWRDb21wb25lbnQgPT5cbiAgY3JlYXRlQ29tcG9uZW50KFxuICAgICgpID0+ICh7XG4gICAgICBhbmltYXRpb25OYW1lOiB7XG4gICAgICAgICcwJSc6IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjgsXG4gICAgICAgIH0sXG4gICAgICAgICc1MCUnOiB7XG4gICAgICAgICAgb3BhY2l0eTogMC40LFxuICAgICAgICB9LFxuICAgICAgICAnMTAwJSc6IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjgsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjVzJyxcbiAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgIH0pLFxuICAgIHByb3BzID0+IDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz4sXG4gICAgLy8gJ2ltZycsXG4gICAgcHJvcHMgPT4gT2JqZWN0LmtleXMocHJvcHMpXG4gICk7XG4iXX0=
