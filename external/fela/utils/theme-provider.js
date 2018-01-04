'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = function (_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return _react2.default.createElement(
    _reactFela.ThemeProvider,
    { theme: getTheme(theme) },
    _react2.default.createElement(
      _reactFela.ThemeProvider,
      { theme: {} },
      children
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvdXRpbHMvdGhlbWUtcHJvdmlkZXIuZXM2Il0sIm5hbWVzIjpbImdldFRoZW1lIiwidGhlbWUiLCJjb2xvciIsImNvbG9yU2Vjb25kYXJ5IiwiY29sb3JTdWNjZXNzIiwiY29sb3JJbmZvIiwiY29sb3JXYXJuaW5nIiwiY29sb3JEYW5nZXIiLCJjb2xvck11dGVkIiwibGlnaHQiLCJsaWdodDEiLCJsaWdodDIiLCJsaWdodDMiLCJsaWdodDQiLCJsaWdodDUiLCJkYXJrIiwiZGFyazEiLCJkYXJrMiIsImRhcmszIiwiZGFyazQiLCJkYXJrNSIsInNwYWNlMCIsInNwYWNlMSIsInNwYWNlMiIsInNwYWNlMyIsInNwYWNlNCIsInNwYWNlNSIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsImJveFNoYWRvdyIsImlubmVyU2hhZG93IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFNpemVTbWFsbCIsImZvbnRTaXplSDEiLCJmb250U2l6ZUgyIiwiZm9udFNpemVIMyIsImZvbnRTaXplSDQiLCJmb250U2l6ZUg1IiwiZm9udFNpemVINiIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxNQUFDQyxLQUFELHVFQUFTLEVBQVQ7QUFBQTtBQUNmO0FBQ0FDLFdBQU8sU0FGUTtBQUdmQyxvQkFBZ0IsU0FIRDtBQUlmQyxrQkFBYyxTQUpDO0FBS2ZDLGVBQVcsU0FMSTtBQU1mQyxrQkFBYyxTQU5DO0FBT2ZDLGlCQUFhLFNBUEU7QUFRZkMsZ0JBQVksU0FSRztBQVNmQyxXQUFPLFNBVFE7QUFVZkMsWUFBUSwyQkFWTztBQVdmQyxZQUFRLDBCQVhPO0FBWWZDLFlBQVEsMEJBWk87QUFhZkMsWUFBUSwyQkFiTztBQWNmQyxZQUFRLDJCQWRPO0FBZWZDLFVBQU0scUJBZlM7QUFnQmZDLFdBQU8sb0JBaEJRO0FBaUJmQyxXQUFPLHFCQWpCUTtBQWtCZkMsV0FBTyxxQkFsQlE7QUFtQmZDLFdBQU8scUJBbkJRO0FBb0JmQyxXQUFPLHFCQXBCUTs7QUFzQmY7QUFDQUMsWUFBUSxDQXZCTztBQXdCZkMsWUFBUSxTQXhCTztBQXlCZkMsWUFBUSxRQXpCTztBQTBCZkMsWUFBUSxNQTFCTztBQTJCZkMsWUFBUSxNQTNCTztBQTRCZkMsWUFBUSxNQTVCTzs7QUE4QmY7QUFDQUMsaUJBQWEsQ0EvQkU7QUFnQ2ZDLGlCQUFhLE9BaENFO0FBaUNmQyxrQkFBYyxDQWpDQztBQWtDZkMsaUJBQWEscUJBbENFOztBQW9DZjtBQUNBO0FBQ0FDLGVBQVcsa0VBdENJO0FBdUNmQyxpQkFBYSw0Q0F2Q0U7O0FBeUNmO0FBQ0FDLGdCQUNFLDRGQTNDYTtBQTRDZkMsY0FBVSxNQTVDSztBQTZDZkMsbUJBQWUsUUE3Q0E7QUE4Q2ZDLGdCQUFZLFVBOUNHO0FBK0NmQyxnQkFBWSxRQS9DRztBQWdEZkMsZ0JBQVksVUFoREc7QUFpRGZDLGdCQUFZLFNBakRHO0FBa0RmQyxnQkFBWSxVQWxERztBQW1EZkMsZ0JBQVk7QUFuREcsS0FvRFp4QyxLQXBEWTtBQUFBLENBQWpCOztrQkF1RGU7QUFBQSxNQUFHQSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVeUMsUUFBVixRQUFVQSxRQUFWO0FBQUEsU0FDYjtBQUFBO0FBQUEsTUFBbUIsT0FBTzFDLFNBQVNDLEtBQVQsQ0FBMUI7QUFDRTtBQUFBO0FBQUEsUUFBbUIsT0FBTyxFQUExQjtBQUErQnlDO0FBQS9CO0FBREYsR0FEYTtBQUFBLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS91dGlscy90aGVtZS1wcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIGFzIEZlbGFUaGVtZVByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmNvbnN0IGdldFRoZW1lID0gKHRoZW1lID0ge30pID0+ICh7XG4gIC8vIENvbG9yc1xuICBjb2xvcjogJyM4ZTQ0YWQnLFxuICBjb2xvclNlY29uZGFyeTogJyNlNjdlMjInLFxuICBjb2xvclN1Y2Nlc3M6ICcjMmVjYzcxJyxcbiAgY29sb3JJbmZvOiAnIzM0OThkYicsXG4gIGNvbG9yV2FybmluZzogJyNmMzljMTInLFxuICBjb2xvckRhbmdlcjogJyNlNzRjM2MnLFxuICBjb2xvck11dGVkOiAnI2JkYzNjNycsXG4gIGxpZ2h0OiAnI0ZGRkZGRicsXG4gIGxpZ2h0MTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSknLFxuICBsaWdodDI6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICBsaWdodDM6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICBsaWdodDQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgbGlnaHQ1OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KScsXG4gIGRhcms6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgZGFyazE6ICdyZ2JhKDAsIDAsIDAsIDAuNyknLFxuICBkYXJrMjogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICBkYXJrMzogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICBkYXJrNDogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICBkYXJrNTogJ3JnYmEoMCwgMCwgMCwgMC4wNSknLFxuXG4gIC8vIFNwYWNlc1xuICBzcGFjZTA6IDAsXG4gIHNwYWNlMTogJzAuMjVyZW0nLFxuICBzcGFjZTI6ICcwLjVyZW0nLFxuICBzcGFjZTM6ICcxcmVtJyxcbiAgc3BhY2U0OiAnMnJlbScsXG4gIHNwYWNlNTogJzRyZW0nLFxuXG4gIC8vIEJvcmRlcnNcbiAgYm9yZGVyV2lkdGg6IDEsXG4gIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICBib3JkZXJSYWRpdXM6IDQsXG4gIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG5cbiAgLy8gU2hhZG93c1xuICAvLyBib3hTaGFkb3c6ICcwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCknLFxuICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCAxcHggM3B4JyxcbiAgaW5uZXJTaGFkb3c6ICdpbnNldCAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSknLFxuXG4gIC8vIEZvbnRcbiAgZm9udEZhbWlseTpcbiAgICAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZicsXG4gIGZvbnRTaXplOiAnMXJlbScsXG4gIGZvbnRTaXplU21hbGw6ICcwLjhyZW0nLFxuICBmb250U2l6ZUgxOiAnMS42MjVyZW0nLFxuICBmb250U2l6ZUgyOiAnMS41cmVtJyxcbiAgZm9udFNpemVIMzogJzEuMzc1cmVtJyxcbiAgZm9udFNpemVINDogJzEuMjVyZW0nLFxuICBmb250U2l6ZUg1OiAnMS4xMjVyZW0nLFxuICBmb250U2l6ZUg2OiAnMXJlbScsXG4gIC4uLnRoZW1lLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRoZW1lLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDxGZWxhVGhlbWVQcm92aWRlciB0aGVtZT17Z2V0VGhlbWUodGhlbWUpfT5cbiAgICA8RmVsYVRoZW1lUHJvdmlkZXIgdGhlbWU9e3t9fT57Y2hpbGRyZW59PC9GZWxhVGhlbWVQcm92aWRlcj5cbiAgPC9GZWxhVGhlbWVQcm92aWRlcj5cbik7XG4iXX0=
