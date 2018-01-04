'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.SectionHeading = exports.Heading = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Heading = (0, _reactFela.createComponent)(function (_ref) {
  var fontSize = _ref.fontSize,
      theme = _ref.theme,
      padding = _ref.padding,
      marginBottom = _ref.marginBottom,
      marginTop = _ref.marginTop,
      textAlign = _ref.textAlign,
      thin = _ref.thin,
      color = _ref.color,
      center = _ref.center;
  return {
    color: color && (color === true ? theme.color : theme[color] || color),
    textAlign: center ? 'center' : textAlign,
    fontWeight: thin && 200,
    padding: padding,
    fontSize: fontSize,
    lineHeight: fontSize ? fontSize + 'px' : undefined,
    marginTop: marginTop !== undefined ? marginTop : undefined,
    marginBottom: marginBottom !== undefined ? marginBottom : 15
  };
}, function (_ref2) {
  var level = _ref2.level,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ['level', 'children']);

  if (!level) {
    level = 1;
  }
  return _react2.default.createElement('h' + level, rest, children);
}, ['level', 'itemProp']);

exports.Heading = Heading;
var SectionHeading = exports.SectionHeading = function SectionHeading(_ref3) {
  var title = _ref3.title,
      description = _ref3.description,
      children = _ref3.children,
      _ref3$level = _ref3.level,
      level = _ref3$level === undefined ? 0 : _ref3$level;
  return _react2.default.createElement(
    'div',
    { key: 0 },
    _react2.default.createElement(
      Heading,
      {
        level: 1 + level,
        marginBottom: 0,
        textAlign: 'center',
        light: true,
        color: true,
        thin: true
      },
      title || children
    ),
    description && _react2.default.createElement(
      Heading,
      { level: 3 + level, marginTop: 0, textAlign: 'center', thin: true },
      description
    )
  );
};

var H1 = exports.H1 = function H1(props) {
  return _react2.default.createElement(Heading, _extends({}, props, { level: 1 }));
};
var H2 = exports.H2 = function H2(props) {
  return _react2.default.createElement(Heading, _extends({}, props, { level: 2 }));
};
var H3 = exports.H3 = function H3(props) {
  return _react2.default.createElement(Heading, _extends({}, props, { level: 3 }));
};
var H4 = exports.H4 = function H4(props) {
  return _react2.default.createElement(Heading, _extends({}, props, { level: 4 }));
};
var H5 = exports.H5 = function H5(props) {
  return _react2.default.createElement(Heading, _extends({}, props, { level: 5 }));
};
var H6 = exports.H6 = function H6(props) {
  return _react2.default.createElement(Heading, _extends({}, props, { level: 6 }));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvaGVhZGluZy5lczYiXSwibmFtZXMiOlsiSGVhZGluZyIsImZvbnRTaXplIiwidGhlbWUiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwidGhpbiIsImNvbG9yIiwiY2VudGVyIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJ1bmRlZmluZWQiLCJsZXZlbCIsImNoaWxkcmVuIiwicmVzdCIsImNyZWF0ZUVsZW1lbnQiLCJTZWN0aW9uSGVhZGluZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJIMSIsInByb3BzIiwiSDIiLCJIMyIsIkg0IiwiSDUiLCJINiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsVUFBVSxnQ0FDckI7QUFBQSxNQUNFQyxRQURGLFFBQ0VBLFFBREY7QUFBQSxNQUVFQyxLQUZGLFFBRUVBLEtBRkY7QUFBQSxNQUdFQyxPQUhGLFFBR0VBLE9BSEY7QUFBQSxNQUlFQyxZQUpGLFFBSUVBLFlBSkY7QUFBQSxNQUtFQyxTQUxGLFFBS0VBLFNBTEY7QUFBQSxNQU1FQyxTQU5GLFFBTUVBLFNBTkY7QUFBQSxNQU9FQyxJQVBGLFFBT0VBLElBUEY7QUFBQSxNQVFFQyxLQVJGLFFBUUVBLEtBUkY7QUFBQSxNQVNFQyxNQVRGLFFBU0VBLE1BVEY7QUFBQSxTQVVPO0FBQ0xELFdBQU9BLFVBQVVBLFVBQVUsSUFBVixHQUFpQk4sTUFBTU0sS0FBdkIsR0FBK0JOLE1BQU1NLEtBQU4sS0FBZ0JBLEtBQXpELENBREY7QUFFTEYsZUFBV0csU0FBUyxRQUFULEdBQW9CSCxTQUYxQjtBQUdMSSxnQkFBWUgsUUFBUSxHQUhmO0FBSUxKLG9CQUpLO0FBS0xGLHNCQUxLO0FBTUxVLGdCQUFZVixXQUFjQSxRQUFkLFVBQTZCVyxTQU5wQztBQU9MUCxlQUFXQSxjQUFjTyxTQUFkLEdBQTBCUCxTQUExQixHQUFzQ08sU0FQNUM7QUFRTFIsa0JBQWNBLGlCQUFpQlEsU0FBakIsR0FBNkJSLFlBQTdCLEdBQTRDO0FBUnJELEdBVlA7QUFBQSxDQURxQixFQXFCckIsaUJBQWtDO0FBQUEsTUFBL0JTLEtBQStCLFNBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxRQUF3QixTQUF4QkEsUUFBd0I7QUFBQSxNQUFYQyxJQUFXOztBQUNoQyxNQUFJLENBQUNGLEtBQUwsRUFBWTtBQUNWQSxZQUFRLENBQVI7QUFDRDtBQUNELFNBQU8sZ0JBQU1HLGFBQU4sT0FBd0JILEtBQXhCLEVBQWlDRSxJQUFqQyxFQUF1Q0QsUUFBdkMsQ0FBUDtBQUNELENBMUJvQixFQTJCckIsQ0FBQyxPQUFELEVBQVUsVUFBVixDQTNCcUIsQ0FBaEI7OztBQThCQSxJQUFNRywwQ0FBaUIsU0FBakJBLGNBQWlCO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVUMsV0FBVixTQUFVQSxXQUFWO0FBQUEsTUFBdUJMLFFBQXZCLFNBQXVCQSxRQUF2QjtBQUFBLDBCQUFpQ0QsS0FBakM7QUFBQSxNQUFpQ0EsS0FBakMsK0JBQXlDLENBQXpDO0FBQUEsU0FDNUI7QUFBQTtBQUFBLE1BQUssS0FBSyxDQUFWO0FBQ0U7QUFBQyxhQUFEO0FBQUE7QUFDRSxlQUFPLElBQUlBLEtBRGI7QUFFRSxzQkFBYyxDQUZoQjtBQUdFLG1CQUFVLFFBSFo7QUFJRSxtQkFKRjtBQUtFLG1CQUxGO0FBTUU7QUFORjtBQVFHSyxlQUFTSjtBQVJaLEtBREY7QUFXR0ssbUJBQ0M7QUFBQyxhQUFEO0FBQUEsUUFBUyxPQUFPLElBQUlOLEtBQXBCLEVBQTJCLFdBQVcsQ0FBdEMsRUFBeUMsV0FBVSxRQUFuRCxFQUE0RCxVQUE1RDtBQUNHTTtBQURIO0FBWkosR0FENEI7QUFBQSxDQUF2Qjs7QUFvQkEsSUFBTUMsa0JBQUssU0FBTEEsRUFBSztBQUFBLFNBQVMsOEJBQUMsT0FBRCxlQUFhQyxLQUFiLElBQW9CLE9BQU8sQ0FBM0IsSUFBVDtBQUFBLENBQVg7QUFDQSxJQUFNQyxrQkFBSyxTQUFMQSxFQUFLO0FBQUEsU0FBUyw4QkFBQyxPQUFELGVBQWFELEtBQWIsSUFBb0IsT0FBTyxDQUEzQixJQUFUO0FBQUEsQ0FBWDtBQUNBLElBQU1FLGtCQUFLLFNBQUxBLEVBQUs7QUFBQSxTQUFTLDhCQUFDLE9BQUQsZUFBYUYsS0FBYixJQUFvQixPQUFPLENBQTNCLElBQVQ7QUFBQSxDQUFYO0FBQ0EsSUFBTUcsa0JBQUssU0FBTEEsRUFBSztBQUFBLFNBQVMsOEJBQUMsT0FBRCxlQUFhSCxLQUFiLElBQW9CLE9BQU8sQ0FBM0IsSUFBVDtBQUFBLENBQVg7QUFDQSxJQUFNSSxrQkFBSyxTQUFMQSxFQUFLO0FBQUEsU0FBUyw4QkFBQyxPQUFELGVBQWFKLEtBQWIsSUFBb0IsT0FBTyxDQUEzQixJQUFUO0FBQUEsQ0FBWDtBQUNBLElBQU1LLGtCQUFLLFNBQUxBLEVBQUs7QUFBQSxTQUFTLDhCQUFDLE9BQUQsZUFBYUwsS0FBYixJQUFvQixPQUFPLENBQTNCLElBQVQ7QUFBQSxDQUFYIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvaGVhZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7XG4gICAgZm9udFNpemUsXG4gICAgdGhlbWUsXG4gICAgcGFkZGluZyxcbiAgICBtYXJnaW5Cb3R0b20sXG4gICAgbWFyZ2luVG9wLFxuICAgIHRleHRBbGlnbixcbiAgICB0aGluLFxuICAgIGNvbG9yLFxuICAgIGNlbnRlcixcbiAgfSkgPT4gKHtcbiAgICBjb2xvcjogY29sb3IgJiYgKGNvbG9yID09PSB0cnVlID8gdGhlbWUuY29sb3IgOiB0aGVtZVtjb2xvcl0gfHwgY29sb3IpLFxuICAgIHRleHRBbGlnbjogY2VudGVyID8gJ2NlbnRlcicgOiB0ZXh0QWxpZ24sXG4gICAgZm9udFdlaWdodDogdGhpbiAmJiAyMDAsXG4gICAgcGFkZGluZyxcbiAgICBmb250U2l6ZSxcbiAgICBsaW5lSGVpZ2h0OiBmb250U2l6ZSA/IGAke2ZvbnRTaXplfXB4YCA6IHVuZGVmaW5lZCxcbiAgICBtYXJnaW5Ub3A6IG1hcmdpblRvcCAhPT0gdW5kZWZpbmVkID8gbWFyZ2luVG9wIDogdW5kZWZpbmVkLFxuICAgIG1hcmdpbkJvdHRvbTogbWFyZ2luQm90dG9tICE9PSB1bmRlZmluZWQgPyBtYXJnaW5Cb3R0b20gOiAxNSxcbiAgfSksXG4gICh7IGxldmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiB7XG4gICAgaWYgKCFsZXZlbCkge1xuICAgICAgbGV2ZWwgPSAxO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChgaCR7bGV2ZWx9YCwgcmVzdCwgY2hpbGRyZW4pO1xuICB9LFxuICBbJ2xldmVsJywgJ2l0ZW1Qcm9wJ10sXG4pO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbkhlYWRpbmcgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGNoaWxkcmVuLCBsZXZlbCA9IDAgfSkgPT4gKFxuICA8ZGl2IGtleT17MH0+XG4gICAgPEhlYWRpbmdcbiAgICAgIGxldmVsPXsxICsgbGV2ZWx9XG4gICAgICBtYXJnaW5Cb3R0b209ezB9XG4gICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgbGlnaHRcbiAgICAgIGNvbG9yXG4gICAgICB0aGluXG4gICAgPlxuICAgICAge3RpdGxlIHx8IGNoaWxkcmVufVxuICAgIDwvSGVhZGluZz5cbiAgICB7ZGVzY3JpcHRpb24gJiYgKFxuICAgICAgPEhlYWRpbmcgbGV2ZWw9ezMgKyBsZXZlbH0gbWFyZ2luVG9wPXswfSB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0aGluPlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L0hlYWRpbmc+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgSDEgPSBwcm9wcyA9PiA8SGVhZGluZyB7Li4ucHJvcHN9IGxldmVsPXsxfSAvPjtcbmV4cG9ydCBjb25zdCBIMiA9IHByb3BzID0+IDxIZWFkaW5nIHsuLi5wcm9wc30gbGV2ZWw9ezJ9IC8+O1xuZXhwb3J0IGNvbnN0IEgzID0gcHJvcHMgPT4gPEhlYWRpbmcgey4uLnByb3BzfSBsZXZlbD17M30gLz47XG5leHBvcnQgY29uc3QgSDQgPSBwcm9wcyA9PiA8SGVhZGluZyB7Li4ucHJvcHN9IGxldmVsPXs0fSAvPjtcbmV4cG9ydCBjb25zdCBINSA9IHByb3BzID0+IDxIZWFkaW5nIHsuLi5wcm9wc30gbGV2ZWw9ezV9IC8+O1xuZXhwb3J0IGNvbnN0IEg2ID0gcHJvcHMgPT4gPEhlYWRpbmcgey4uLnByb3BzfSBsZXZlbD17Nn0gLz47XG4iXX0=
