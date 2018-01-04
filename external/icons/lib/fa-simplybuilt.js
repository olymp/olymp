'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ref2 = _react2.default.createElement('path', { d: 'M863 1032q0-112-79.5-191.5t-191.5-79.5-191 79.5-79 191.5 79 191 191 79 191.5-79 79.5-191zm863-1q0-112-79-191t-191-79-191.5 79-79.5 191q0 113 79.5 192t191.5 79 191-79.5 79-191.5zm322-809v1348q0 44-31.5 75.5t-76.5 31.5h-1832q-45 0-76.5-31.5t-31.5-75.5v-1348q0-44 31.5-75.5t76.5-31.5h431q44 0 76 31.5t32 75.5v161h754v-161q0-44 32-75.5t76-31.5h431q45 0 76.5 31.5t31.5 75.5z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { viewBox: '0 0 2048 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaSimplybuilt';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zaW1wbHlidWlsdC5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBR3dJLHdDQUFNLEdBQUUsbVhBQVIsRzs7QUFEeEksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEyRSxTQUFRLGVBQW5GLEVBQW1HLE9BQU0sNEJBQXpHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsZUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtc2ltcGx5YnVpbHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuXG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9ICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTg2MyAxMDMycTAtMTEyLTc5LjUtMTkxLjV0LTE5MS41LTc5LjUtMTkxIDc5LjUtNzkgMTkxLjUgNzkgMTkxIDE5MSA3OSAxOTEuNS03OSA3OS41LTE5MXptODYzLTFxMC0xMTItNzktMTkxdC0xOTEtNzktMTkxLjUgNzktNzkuNSAxOTFxMCAxMTMgNzkuNSAxOTJ0MTkxLjUgNzkgMTkxLTc5LjUgNzktMTkxLjV6bTMyMi04MDl2MTM0OHEwIDQ0LTMxLjUgNzUuNXQtNzYuNSAzMS41aC0xODMycS00NSAwLTc2LjUtMzEuNXQtMzEuNS03NS41di0xMzQ4cTAtNDQgMzEuNS03NS41dDc2LjUtMzEuNWg0MzFxNDQgMCA3NiAzMS41dDMyIDc1LjV2MTYxaDc1NHYtMTYxcTAtNDQgMzItNzUuNXQ3Ni0zMS41aDQzMXE0NSAwIDc2LjUgMzEuNXQzMS41IDc1LjV6XCIgLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFTaW1wbHlidWlsdCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
