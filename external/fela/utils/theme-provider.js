var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { ThemeProvider as FelaThemeProvider } from 'react-fela';

var getTheme = function getTheme() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _extends({
    // Colors
    color: '#8e44ad',
    colorSecondary: '#e67e22',
    colorSuccess: '#2ecc71',
    colorInfo: '#3498db',
    colorWarning: '#f39c12',
    colorDanger: '#e74c3c',
    colorMuted: '#bdc3c7',
    light: '#FFFFFF',
    light1: 'rgba(255, 255, 255, 0.85)',
    light2: 'rgba(255, 255, 255, 0.7)',
    light3: 'rgba(255, 255, 255, 0.5)',
    light4: 'rgba(255, 255, 255, 0.12)',
    light5: 'rgba(255, 255, 255, 0.05)',
    dark: 'rgba(0, 0, 0, 0.87)',
    dark1: 'rgba(0, 0, 0, 0.7)',
    dark2: 'rgba(0, 0, 0, 0.54)',
    dark3: 'rgba(0, 0, 0, 0.38)',
    dark4: 'rgba(0, 0, 0, 0.12)',
    dark5: 'rgba(0, 0, 0, 0.05)',

    // Spaces
    space0: 0,
    space1: '0.25rem',
    space2: '0.5rem',
    space3: '1rem',
    space4: '2rem',
    space5: '4rem',

    // Borders
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.12)',

    // Shadows
    // boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.08)',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 1px 4px, rgba(0, 0, 0, 0.15) 0px 1px 3px',
    innerShadow: 'inset 0px 0px 10px 0px rgba(0, 0, 0, 0.15)',

    // Font
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '1rem',
    fontSizeSmall: '0.8rem',
    fontSizeH1: '1.625rem',
    fontSizeH2: '1.5rem',
    fontSizeH3: '1.375rem',
    fontSizeH4: '1.25rem',
    fontSizeH5: '1.125rem',
    fontSizeH6: '1rem'
  }, theme);
};

export default (function (_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return React.createElement(
    FelaThemeProvider,
    { theme: getTheme(theme) },
    React.createElement(
      FelaThemeProvider,
      { theme: {} },
      children
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvdGhlbWUtcHJvdmlkZXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiVGhlbWVQcm92aWRlciIsIkZlbGFUaGVtZVByb3ZpZGVyIiwiZ2V0VGhlbWUiLCJ0aGVtZSIsImNvbG9yIiwiY29sb3JTZWNvbmRhcnkiLCJjb2xvclN1Y2Nlc3MiLCJjb2xvckluZm8iLCJjb2xvcldhcm5pbmciLCJjb2xvckRhbmdlciIsImNvbG9yTXV0ZWQiLCJsaWdodCIsImxpZ2h0MSIsImxpZ2h0MiIsImxpZ2h0MyIsImxpZ2h0NCIsImxpZ2h0NSIsImRhcmsiLCJkYXJrMSIsImRhcmsyIiwiZGFyazMiLCJkYXJrNCIsImRhcms1Iiwic3BhY2UwIiwic3BhY2UxIiwic3BhY2UyIiwic3BhY2UzIiwic3BhY2U0Iiwic3BhY2U1IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiYm94U2hhZG93IiwiaW5uZXJTaGFkb3ciLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250U2l6ZVNtYWxsIiwiZm9udFNpemVIMSIsImZvbnRTaXplSDIiLCJmb250U2l6ZUgzIiwiZm9udFNpemVINCIsImZvbnRTaXplSDUiLCJmb250U2l6ZUg2IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLGlCQUFpQkMsaUJBQTFCLFFBQW1ELFlBQW5EOztBQUVBLElBQU1DLFdBQVcsU0FBWEEsUUFBVztBQUFBLE1BQUNDLEtBQUQsdUVBQVMsRUFBVDtBQUFBO0FBQ2Y7QUFDQUMsV0FBTyxTQUZRO0FBR2ZDLG9CQUFnQixTQUhEO0FBSWZDLGtCQUFjLFNBSkM7QUFLZkMsZUFBVyxTQUxJO0FBTWZDLGtCQUFjLFNBTkM7QUFPZkMsaUJBQWEsU0FQRTtBQVFmQyxnQkFBWSxTQVJHO0FBU2ZDLFdBQU8sU0FUUTtBQVVmQyxZQUFRLDJCQVZPO0FBV2ZDLFlBQVEsMEJBWE87QUFZZkMsWUFBUSwwQkFaTztBQWFmQyxZQUFRLDJCQWJPO0FBY2ZDLFlBQVEsMkJBZE87QUFlZkMsVUFBTSxxQkFmUztBQWdCZkMsV0FBTyxvQkFoQlE7QUFpQmZDLFdBQU8scUJBakJRO0FBa0JmQyxXQUFPLHFCQWxCUTtBQW1CZkMsV0FBTyxxQkFuQlE7QUFvQmZDLFdBQU8scUJBcEJROztBQXNCZjtBQUNBQyxZQUFRLENBdkJPO0FBd0JmQyxZQUFRLFNBeEJPO0FBeUJmQyxZQUFRLFFBekJPO0FBMEJmQyxZQUFRLE1BMUJPO0FBMkJmQyxZQUFRLE1BM0JPO0FBNEJmQyxZQUFRLE1BNUJPOztBQThCZjtBQUNBQyxpQkFBYSxDQS9CRTtBQWdDZkMsaUJBQWEsT0FoQ0U7QUFpQ2ZDLGtCQUFjLENBakNDO0FBa0NmQyxpQkFBYSxxQkFsQ0U7O0FBb0NmO0FBQ0E7QUFDQUMsZUFBVyxrRUF0Q0k7QUF1Q2ZDLGlCQUFhLDRDQXZDRTs7QUF5Q2Y7QUFDQUMsZ0JBQ0UsNEZBM0NhO0FBNENmQyxjQUFVLE1BNUNLO0FBNkNmQyxtQkFBZSxRQTdDQTtBQThDZkMsZ0JBQVksVUE5Q0c7QUErQ2ZDLGdCQUFZLFFBL0NHO0FBZ0RmQyxnQkFBWSxVQWhERztBQWlEZkMsZ0JBQVksU0FqREc7QUFrRGZDLGdCQUFZLFVBbERHO0FBbURmQyxnQkFBWTtBQW5ERyxLQW9EWnhDLEtBcERZO0FBQUEsQ0FBakI7O0FBdURBLGdCQUFlO0FBQUEsTUFBR0EsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVXlDLFFBQVYsUUFBVUEsUUFBVjtBQUFBLFNBQ2I7QUFBQyxxQkFBRDtBQUFBLE1BQW1CLE9BQU8xQyxTQUFTQyxLQUFULENBQTFCO0FBQ0U7QUFBQyx1QkFBRDtBQUFBLFFBQW1CLE9BQU8sRUFBMUI7QUFBK0J5QztBQUEvQjtBQURGLEdBRGE7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvdXRpbHMvdGhlbWUtcHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciBhcyBGZWxhVGhlbWVQcm92aWRlciB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5jb25zdCBnZXRUaGVtZSA9ICh0aGVtZSA9IHt9KSA9PiAoe1xuICAvLyBDb2xvcnNcbiAgY29sb3I6ICcjOGU0NGFkJyxcbiAgY29sb3JTZWNvbmRhcnk6ICcjZTY3ZTIyJyxcbiAgY29sb3JTdWNjZXNzOiAnIzJlY2M3MScsXG4gIGNvbG9ySW5mbzogJyMzNDk4ZGInLFxuICBjb2xvcldhcm5pbmc6ICcjZjM5YzEyJyxcbiAgY29sb3JEYW5nZXI6ICcjZTc0YzNjJyxcbiAgY29sb3JNdXRlZDogJyNiZGMzYzcnLFxuICBsaWdodDogJyNGRkZGRkYnLFxuICBsaWdodDE6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpJyxcbiAgbGlnaHQyOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJyxcbiAgbGlnaHQzOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgbGlnaHQ0OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gIGxpZ2h0NTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSknLFxuICBkYXJrOiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gIGRhcmsxOiAncmdiYSgwLCAwLCAwLCAwLjcpJyxcbiAgZGFyazI6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgZGFyazM6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgZGFyazQ6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgZGFyazU6ICdyZ2JhKDAsIDAsIDAsIDAuMDUpJyxcblxuICAvLyBTcGFjZXNcbiAgc3BhY2UwOiAwLFxuICBzcGFjZTE6ICcwLjI1cmVtJyxcbiAgc3BhY2UyOiAnMC41cmVtJyxcbiAgc3BhY2UzOiAnMXJlbScsXG4gIHNwYWNlNDogJzJyZW0nLFxuICBzcGFjZTU6ICc0cmVtJyxcblxuICAvLyBCb3JkZXJzXG4gIGJvcmRlcldpZHRoOiAxLFxuICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBib3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuXG4gIC8vIFNoYWRvd3NcbiAgLy8gYm94U2hhZG93OiAnMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpJyxcbiAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggMXB4IDNweCcsXG4gIGlubmVyU2hhZG93OiAnaW5zZXQgMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpJyxcblxuICAvLyBGb250XG4gIGZvbnRGYW1pbHk6XG4gICAgJy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYnLFxuICBmb250U2l6ZTogJzFyZW0nLFxuICBmb250U2l6ZVNtYWxsOiAnMC44cmVtJyxcbiAgZm9udFNpemVIMTogJzEuNjI1cmVtJyxcbiAgZm9udFNpemVIMjogJzEuNXJlbScsXG4gIGZvbnRTaXplSDM6ICcxLjM3NXJlbScsXG4gIGZvbnRTaXplSDQ6ICcxLjI1cmVtJyxcbiAgZm9udFNpemVINTogJzEuMTI1cmVtJyxcbiAgZm9udFNpemVINjogJzFyZW0nLFxuICAuLi50aGVtZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCAoeyB0aGVtZSwgY2hpbGRyZW4gfSkgPT4gKFxuICA8RmVsYVRoZW1lUHJvdmlkZXIgdGhlbWU9e2dldFRoZW1lKHRoZW1lKX0+XG4gICAgPEZlbGFUaGVtZVByb3ZpZGVyIHRoZW1lPXt7fX0+e2NoaWxkcmVufTwvRmVsYVRoZW1lUHJvdmlkZXI+XG4gIDwvRmVsYVRoZW1lUHJvdmlkZXI+XG4pO1xuIl19
