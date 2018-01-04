'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

var _olympRouter = require('olymp-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Brand = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      inverse = _ref.inverse;
  return {
    color: inverse ? theme.light : theme.dark,
    // centerY: true,
    paddingRight: theme.space3,
    paddingY: theme.space2,
    display: 'inline-block',
    '> img': {
      marginY: 0,
      marginX: 0
    },
    onHover: {
      color: inverse ? theme.light2 : theme.dark2
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      p = _objectWithoutProperties(_ref2, ['children', 'className']);

  return _react2.default.createElement(
    _olympRouter.NavLink,
    _extends({ to: '/', className: (0, _classnames2.default)(className, 'o-nav-item-brand') }, p),
    children
  );
}, function (_ref3) {
  var inverse = _ref3.inverse,
      vertically = _ref3.vertically,
      p = _objectWithoutProperties(_ref3, ['inverse', 'vertically']);

  return Object.keys(p);
});

var Inner = (0, _reactFela.createComponent)(function (_ref4) {
  var theme = _ref4.theme;
  return {
    visibility: 'hidden',
    paddingX: theme.space3,
    '> *': {
      marginX: '-' + theme.space3
    }
  };
}, 'div', ['className']);

var NavbarBrand = (0, _reactFela.createComponent)(function (_ref5) {
  var theme = _ref5.theme,
      vertically = _ref5.vertically;
  return {
    position: 'relative',
    fontSize: 'calc(' + theme.fontSize + ' + 4px)',
    whiteSpace: 'nowrap',
    float: vertically ? 'none' : 'left'
  };
}, function (_ref6) {
  var className = _ref6.className,
      children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ['className', 'children']);

  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      Brand,
      props,
      children
    )
  );
}, function (p) {
  return Object.keys(p);
});
NavbarBrand.displayName = 'Navbar.Brand';
NavbarBrand.propTypes = {
  /** inverse theme with primary-color background */
  inverse: _propTypes2.default.bool
};
NavbarBrand.defaultProps = {
  inverse: false
};
exports.default = NavbarBrand;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbmF2YmFyL2JyYW5kLmVzNiJdLCJuYW1lcyI6WyJCcmFuZCIsInRoZW1lIiwiaW52ZXJzZSIsImNvbG9yIiwibGlnaHQiLCJkYXJrIiwicGFkZGluZ1JpZ2h0Iiwic3BhY2UzIiwicGFkZGluZ1kiLCJzcGFjZTIiLCJkaXNwbGF5IiwibWFyZ2luWSIsIm1hcmdpblgiLCJvbkhvdmVyIiwibGlnaHQyIiwiZGFyazIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInAiLCJ2ZXJ0aWNhbGx5IiwiT2JqZWN0Iiwia2V5cyIsIklubmVyIiwidmlzaWJpbGl0eSIsInBhZGRpbmdYIiwiTmF2YmFyQnJhbmQiLCJwb3NpdGlvbiIsImZvbnRTaXplIiwid2hpdGVTcGFjZSIsImZsb2F0IiwicHJvcHMiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVEsZ0NBQ1o7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxPQUFWLFFBQVVBLE9BQVY7QUFBQSxTQUF5QjtBQUN2QkMsV0FBT0QsVUFBVUQsTUFBTUcsS0FBaEIsR0FBd0JILE1BQU1JLElBRGQ7QUFFdkI7QUFDQUMsa0JBQWNMLE1BQU1NLE1BSEc7QUFJdkJDLGNBQVVQLE1BQU1RLE1BSk87QUFLdkJDLGFBQVMsY0FMYztBQU12QixhQUFTO0FBQ1BDLGVBQVMsQ0FERjtBQUVQQyxlQUFTO0FBRkYsS0FOYztBQVV2QkMsYUFBUztBQUNQVixhQUFPRCxVQUFVRCxNQUFNYSxNQUFoQixHQUF5QmIsTUFBTWM7QUFEL0I7QUFWYyxHQUF6QjtBQUFBLENBRFksRUFlWjtBQUFBLE1BQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFDLFNBQWIsU0FBYUEsU0FBYjtBQUFBLE1BQTJCQyxDQUEzQjs7QUFBQSxTQUNFO0FBQUE7QUFBQSxlQUFTLElBQUcsR0FBWixFQUFnQixXQUFXLDBCQUFHRCxTQUFILEVBQWMsa0JBQWQsQ0FBM0IsSUFBa0VDLENBQWxFO0FBQ0dGO0FBREgsR0FERjtBQUFBLENBZlksRUFvQlo7QUFBQSxNQUFHZCxPQUFILFNBQUdBLE9BQUg7QUFBQSxNQUFZaUIsVUFBWixTQUFZQSxVQUFaO0FBQUEsTUFBMkJELENBQTNCOztBQUFBLFNBQW1DRSxPQUFPQyxJQUFQLENBQVlILENBQVosQ0FBbkM7QUFBQSxDQXBCWSxDQUFkOztBQXVCQSxJQUFNSSxRQUFRLGdDQUNaO0FBQUEsTUFBR3JCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RzQixnQkFBWSxRQURFO0FBRWRDLGNBQVV2QixNQUFNTSxNQUZGO0FBR2QsV0FBTztBQUNMSyxxQkFBYVgsTUFBTU07QUFEZDtBQUhPLEdBQWhCO0FBQUEsQ0FEWSxFQVFaLEtBUlksRUFTWixDQUFDLFdBQUQsQ0FUWSxDQUFkOztBQVlBLElBQU1rQixjQUFjLGdDQUNsQjtBQUFBLE1BQUd4QixLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFVa0IsVUFBVixTQUFVQSxVQUFWO0FBQUEsU0FBNEI7QUFDMUJPLGNBQVUsVUFEZ0I7QUFFMUJDLHdCQUFrQjFCLE1BQU0wQixRQUF4QixZQUYwQjtBQUcxQkMsZ0JBQVksUUFIYztBQUkxQkMsV0FBT1YsYUFBYSxNQUFiLEdBQXNCO0FBSkgsR0FBNUI7QUFBQSxDQURrQixFQU9sQjtBQUFBLE1BQUdGLFNBQUgsU0FBR0EsU0FBSDtBQUFBLE1BQWNELFFBQWQsU0FBY0EsUUFBZDtBQUFBLE1BQTJCYyxLQUEzQjs7QUFBQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVdiLFNBQWhCO0FBQ0U7QUFBQyxXQUFEO0FBQVdhLFdBQVg7QUFBbUJkO0FBQW5CO0FBREYsR0FERjtBQUFBLENBUGtCLEVBZWxCO0FBQUEsU0FBS0ksT0FBT0MsSUFBUCxDQUFZSCxDQUFaLENBQUw7QUFBQSxDQWZrQixDQUFwQjtBQWlCQU8sWUFBWU0sV0FBWixHQUEwQixjQUExQjtBQUNBTixZQUFZTyxTQUFaLEdBQXdCO0FBQ3RCO0FBQ0E5QixXQUFTLG9CQUFVK0I7QUFGRyxDQUF4QjtBQUlBUixZQUFZUyxZQUFaLEdBQTJCO0FBQ3pCaEMsV0FBUztBQURnQixDQUEzQjtrQkFHZXVCLFciLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9uYXZiYXIvYnJhbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IEJyYW5kID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgaW52ZXJzZSB9KSA9PiAoe1xuICAgIGNvbG9yOiBpbnZlcnNlID8gdGhlbWUubGlnaHQgOiB0aGVtZS5kYXJrLFxuICAgIC8vIGNlbnRlclk6IHRydWUsXG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjZTMsXG4gICAgcGFkZGluZ1k6IHRoZW1lLnNwYWNlMixcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAnPiBpbWcnOiB7XG4gICAgICBtYXJnaW5ZOiAwLFxuICAgICAgbWFyZ2luWDogMCxcbiAgICB9LFxuICAgIG9uSG92ZXI6IHtcbiAgICAgIGNvbG9yOiBpbnZlcnNlID8gdGhlbWUubGlnaHQyIDogdGhlbWUuZGFyazIsXG4gICAgfSxcbiAgfSksXG4gICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnAgfSkgPT4gKFxuICAgIDxOYXZMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCAnby1uYXYtaXRlbS1icmFuZCcpfSB7Li4ucH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9OYXZMaW5rPlxuICApLFxuICAoeyBpbnZlcnNlLCB2ZXJ0aWNhbGx5LCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgSW5uZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMyxcbiAgICAnPiAqJzoge1xuICAgICAgbWFyZ2luWDogYC0ke3RoZW1lLnNwYWNlM31gLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgWydjbGFzc05hbWUnXSxcbik7XG5cbmNvbnN0IE5hdmJhckJyYW5kID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgdmVydGljYWxseSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGZvbnRTaXplOiBgY2FsYygke3RoZW1lLmZvbnRTaXplfSArIDRweClgLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIGZsb2F0OiB2ZXJ0aWNhbGx5ID8gJ25vbmUnIDogJ2xlZnQnLFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPEJyYW5kIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvQnJhbmQ+XG4gICAgICB7LyogPElubmVyPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC9Jbm5lcj4gKi99XG4gICAgPC9kaXY+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuTmF2YmFyQnJhbmQuZGlzcGxheU5hbWUgPSAnTmF2YmFyLkJyYW5kJztcbk5hdmJhckJyYW5kLnByb3BUeXBlcyA9IHtcbiAgLyoqIGludmVyc2UgdGhlbWUgd2l0aCBwcmltYXJ5LWNvbG9yIGJhY2tncm91bmQgKi9cbiAgaW52ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuTmF2YmFyQnJhbmQuZGVmYXVsdFByb3BzID0ge1xuICBpbnZlcnNlOiBmYWxzZSxcbn07XG5leHBvcnQgZGVmYXVsdCBOYXZiYXJCcmFuZDtcbiJdfQ==
