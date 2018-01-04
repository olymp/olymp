'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gradient = exports.innerShadow = exports.boxShadow = exports.border = exports.fade = exports.spin = exports.darken = exports.lighten = undefined;

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// COLOR-TRANSFORMATIONS
var lighten = exports.lighten = function lighten(color, percent) {
  return (0, _tinycolor2.default)(color).lighten(percent || 8).toRgbString();
};
var darken = exports.darken = function darken(color, percent) {
  return (0, _tinycolor2.default)(color).darken(percent || 4).toRgbString();
};
var spin = exports.spin = function spin(color, deg) {
  return (0, _tinycolor2.default)(color).spin(deg || 180).toRgbString();
};
var fade = exports.fade = function fade(color, percent) {
  return (0, _tinycolor2.default)(color).setAlpha(percent / 100 || 0.67).toRgbString();
};

// BORDERS
var border = exports.border = function border(theme, color) {
  return theme.borderWidth + 'px ' + theme.borderStyle + ' ' + (color || theme.borderColor);
};

// SHADOWS
var boxShadow = exports.boxShadow = function boxShadow() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgba(0, 0, 0, 0.1)';
  var intense = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return '0px 0px ' + intense + 'px 0px ' + (0, _tinycolor2.default)(color).toRgbString();
};
var innerShadow = exports.innerShadow = function innerShadow(color) {
  return 'inset ' + boxShadow(color);
};

var gradient = exports.gradient = function gradient(color1, color2, deg) {
  var tColor1 = (0, _tinycolor2.default)(lighten(color1)).spin(6);
  var tColor2 = (0, _tinycolor2.default)(darken(color1)).spin(-3);
  var tDeg = deg || 90;

  if (typeof color2 === 'string') {
    // color1, color2, (deg)
    tColor1 = (0, _tinycolor2.default)(color1);
    tColor2 = (0, _tinycolor2.default)(color2);
  } else if (!deg && color2 === parseInt(color2, 10)) {
    // color1, deg
    tDeg = color2;
  }

  return 'linear-gradient(' + (tDeg + 90) + 'deg, ' + tColor1.toRgbString() + ' 0%, ' + tColor2.toRgbString() + ' 100%)';
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvdXRpbHMvdXRpbHMuZXM2Il0sIm5hbWVzIjpbImxpZ2h0ZW4iLCJjb2xvciIsInBlcmNlbnQiLCJ0b1JnYlN0cmluZyIsImRhcmtlbiIsInNwaW4iLCJkZWciLCJmYWRlIiwic2V0QWxwaGEiLCJib3JkZXIiLCJ0aGVtZSIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJDb2xvciIsImJveFNoYWRvdyIsImludGVuc2UiLCJpbm5lclNoYWRvdyIsImdyYWRpZW50IiwiY29sb3IxIiwiY29sb3IyIiwidENvbG9yMSIsInRDb2xvcjIiLCJ0RGVnIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7QUFDTyxJQUFNQSw0QkFBVSxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsT0FBUjtBQUFBLFNBQ3JCLHlCQUFVRCxLQUFWLEVBQWlCRCxPQUFqQixDQUF5QkUsV0FBVyxDQUFwQyxFQUF1Q0MsV0FBdkMsRUFEcUI7QUFBQSxDQUFoQjtBQUVBLElBQU1DLDBCQUFTLFNBQVRBLE1BQVMsQ0FBQ0gsS0FBRCxFQUFRQyxPQUFSO0FBQUEsU0FDcEIseUJBQVVELEtBQVYsRUFBaUJHLE1BQWpCLENBQXdCRixXQUFXLENBQW5DLEVBQXNDQyxXQUF0QyxFQURvQjtBQUFBLENBQWY7QUFFQSxJQUFNRSxzQkFBTyxTQUFQQSxJQUFPLENBQUNKLEtBQUQsRUFBUUssR0FBUjtBQUFBLFNBQ2xCLHlCQUFVTCxLQUFWLEVBQWlCSSxJQUFqQixDQUFzQkMsT0FBTyxHQUE3QixFQUFrQ0gsV0FBbEMsRUFEa0I7QUFBQSxDQUFiO0FBRUEsSUFBTUksc0JBQU8sU0FBUEEsSUFBTyxDQUFDTixLQUFELEVBQVFDLE9BQVI7QUFBQSxTQUNsQix5QkFBVUQsS0FBVixFQUFpQk8sUUFBakIsQ0FBMEJOLFVBQVUsR0FBVixJQUFpQixJQUEzQyxFQUFpREMsV0FBakQsRUFEa0I7QUFBQSxDQUFiOztBQUdQO0FBQ08sSUFBTU0sMEJBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVFULEtBQVI7QUFBQSxTQUNqQlMsTUFBTUMsV0FEVyxXQUNNRCxNQUFNRSxXQURaLFVBQzJCWCxTQUFTUyxNQUFNRyxXQUQxQztBQUFBLENBQWY7O0FBR1A7QUFDTyxJQUFNQyxnQ0FBWSxTQUFaQSxTQUFZO0FBQUEsTUFBQ2IsS0FBRCx1RUFBUyxvQkFBVDtBQUFBLE1BQStCYyxPQUEvQix1RUFBeUMsRUFBekM7QUFBQSxzQkFDWkEsT0FEWSxlQUNLLHlCQUFVZCxLQUFWLEVBQWlCRSxXQUFqQixFQURMO0FBQUEsQ0FBbEI7QUFFQSxJQUFNYSxvQ0FBYyxTQUFkQSxXQUFjO0FBQUEsb0JBQWtCRixVQUFVYixLQUFWLENBQWxCO0FBQUEsQ0FBcEI7O0FBRUEsSUFBTWdCLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQWlCYixHQUFqQixFQUF5QjtBQUMvQyxNQUFJYyxVQUFVLHlCQUFVcEIsUUFBUWtCLE1BQVIsQ0FBVixFQUEyQmIsSUFBM0IsQ0FBZ0MsQ0FBaEMsQ0FBZDtBQUNBLE1BQUlnQixVQUFVLHlCQUFVakIsT0FBT2MsTUFBUCxDQUFWLEVBQTBCYixJQUExQixDQUErQixDQUFDLENBQWhDLENBQWQ7QUFDQSxNQUFJaUIsT0FBT2hCLE9BQU8sRUFBbEI7O0FBRUEsTUFBSSxPQUFPYSxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzlCO0FBQ0FDLGNBQVUseUJBQVVGLE1BQVYsQ0FBVjtBQUNBRyxjQUFVLHlCQUFVRixNQUFWLENBQVY7QUFDRCxHQUpELE1BSU8sSUFBSSxDQUFDYixHQUFELElBQVFhLFdBQVdJLFNBQVNKLE1BQVQsRUFBaUIsRUFBakIsQ0FBdkIsRUFBNkM7QUFDbEQ7QUFDQUcsV0FBT0gsTUFBUDtBQUNEOztBQUVELCtCQUEwQkcsT0FDeEIsRUFERixjQUNZRixRQUFRakIsV0FBUixFQURaLGFBQ3lDa0IsUUFBUWxCLFdBQVIsRUFEekM7QUFFRCxDQWhCTSIsImZpbGUiOiJleHRlcm5hbC9mZWxhL3V0aWxzL3V0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJztcblxuLy8gQ09MT1ItVFJBTlNGT1JNQVRJT05TXG5leHBvcnQgY29uc3QgbGlnaHRlbiA9IChjb2xvciwgcGVyY2VudCkgPT5cbiAgdGlueWNvbG9yKGNvbG9yKS5saWdodGVuKHBlcmNlbnQgfHwgOCkudG9SZ2JTdHJpbmcoKTtcbmV4cG9ydCBjb25zdCBkYXJrZW4gPSAoY29sb3IsIHBlcmNlbnQpID0+XG4gIHRpbnljb2xvcihjb2xvcikuZGFya2VuKHBlcmNlbnQgfHwgNCkudG9SZ2JTdHJpbmcoKTtcbmV4cG9ydCBjb25zdCBzcGluID0gKGNvbG9yLCBkZWcpID0+XG4gIHRpbnljb2xvcihjb2xvcikuc3BpbihkZWcgfHwgMTgwKS50b1JnYlN0cmluZygpO1xuZXhwb3J0IGNvbnN0IGZhZGUgPSAoY29sb3IsIHBlcmNlbnQpID0+XG4gIHRpbnljb2xvcihjb2xvcikuc2V0QWxwaGEocGVyY2VudCAvIDEwMCB8fCAwLjY3KS50b1JnYlN0cmluZygpO1xuXG4vLyBCT1JERVJTXG5leHBvcnQgY29uc3QgYm9yZGVyID0gKHRoZW1lLCBjb2xvcikgPT5cbiAgYCR7dGhlbWUuYm9yZGVyV2lkdGh9cHggJHt0aGVtZS5ib3JkZXJTdHlsZX0gJHtjb2xvciB8fCB0aGVtZS5ib3JkZXJDb2xvcn1gO1xuXG4vLyBTSEFET1dTXG5leHBvcnQgY29uc3QgYm94U2hhZG93ID0gKGNvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMC4xKScsIGludGVuc2UgPSAxMCkgPT5cbiAgYDBweCAwcHggJHtpbnRlbnNlfXB4IDBweCAke3Rpbnljb2xvcihjb2xvcikudG9SZ2JTdHJpbmcoKX1gO1xuZXhwb3J0IGNvbnN0IGlubmVyU2hhZG93ID0gY29sb3IgPT4gYGluc2V0ICR7Ym94U2hhZG93KGNvbG9yKX1gO1xuXG5leHBvcnQgY29uc3QgZ3JhZGllbnQgPSAoY29sb3IxLCBjb2xvcjIsIGRlZykgPT4ge1xuICBsZXQgdENvbG9yMSA9IHRpbnljb2xvcihsaWdodGVuKGNvbG9yMSkpLnNwaW4oNik7XG4gIGxldCB0Q29sb3IyID0gdGlueWNvbG9yKGRhcmtlbihjb2xvcjEpKS5zcGluKC0zKTtcbiAgbGV0IHREZWcgPSBkZWcgfHwgOTA7XG5cbiAgaWYgKHR5cGVvZiBjb2xvcjIgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gY29sb3IxLCBjb2xvcjIsIChkZWcpXG4gICAgdENvbG9yMSA9IHRpbnljb2xvcihjb2xvcjEpO1xuICAgIHRDb2xvcjIgPSB0aW55Y29sb3IoY29sb3IyKTtcbiAgfSBlbHNlIGlmICghZGVnICYmIGNvbG9yMiA9PT0gcGFyc2VJbnQoY29sb3IyLCAxMCkpIHtcbiAgICAvLyBjb2xvcjEsIGRlZ1xuICAgIHREZWcgPSBjb2xvcjI7XG4gIH1cblxuICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCgke3REZWcgK1xuICAgIDkwfWRlZywgJHt0Q29sb3IxLnRvUmdiU3RyaW5nKCl9IDAlLCAke3RDb2xvcjIudG9SZ2JTdHJpbmcoKX0gMTAwJSlgO1xufTtcbiJdfQ==
