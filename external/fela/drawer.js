'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getColor = function getColor(theme, color) {
  if (color === true) {
    return theme.color;
  } else if (typeof color === 'string') {
    return theme[color] || color;
  }
  return theme.inverted ? theme.light : theme.dark;
};

var Drawer = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 312 : _ref$width,
      right = _ref.right,
      left = _ref.left,
      open = _ref.open,
      _ref$collapsed = _ref.collapsed,
      collapsed = _ref$collapsed === undefined ? true : _ref$collapsed,
      flex = _ref.flex,
      dim = _ref.dim;
  return {
    pointerEvents: 'initial',
    position: flex ? 'absolute' : 'fixed',
    top: 0,
    paddingTop: top,
    extend: right !== undefined ? {
      right: right !== true && right || 0,
      justifyContent: 'flex-end',
      transform: open ? null : 'translateX(100%)'
    } : {
      left: left !== true && left || 0,
      transform: open ? null : 'translateX(-100%)'
    },
    height: '100%',
    minWidth: width,
    zIndex: dim ? 15 : 12,
    boxShadow: !collapsed ? theme.boxShadow : undefined,
    transition: 'transform 200ms ease-out, min-width 200ms ease-out',
    backgroundColor: getColor(theme, color),
    display: 'flex'
  };
}, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      open = _ref2.open,
      onClose = _ref2.onClose,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? 312 : _ref2$width,
      _onClick = _ref2.onClick,
      rest = _objectWithoutProperties(_ref2, ['className', 'children', 'open', 'onClose', 'width', 'onClick']);

  return _react2.default.createElement(
    'aside',
    _extends({
      className: className
    }, rest, {
      onClick: function onClick(e) {
        e.stopPropagation();
        if (_onClick) _onClick(e);
      }
    }),
    _react.Children.map(children, function (child) {
      return child ? (0, _react.cloneElement)(child, { width: width }) : child;
    })
  );
}, function (_ref3) {
  var inverted = _ref3.inverted,
      right = _ref3.right,
      top = _ref3.top,
      left = _ref3.left,
      collapsed = _ref3.collapsed,
      dim = _ref3.dim,
      p = _objectWithoutProperties(_ref3, ['inverted', 'right', 'top', 'left', 'collapsed', 'dim']);

  return Object.keys(p);
});

var Dimmer = (0, _reactFela.createComponent)(function (_ref4) {
  var theme = _ref4.theme,
      _ref4$top = _ref4.top,
      top = _ref4$top === undefined ? 0 : _ref4$top,
      open = _ref4.open,
      inverted = _ref4.inverted;
  return {
    height: '100%',
    position: 'fixed',
    top: 0,
    paddingTop: top,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: inverted ? theme.light2 : theme.dark3,
    zIndex: 14,
    opacity: !open ? 0 : 1,
    transition: 'opacity 200ms ease-out',
    pointerEvents: !open ? 'none' : undefined
  };
}, 'div', ['onClick']);

exports.default = function (_ref5) {
  var _ref5$dim = _ref5.dim,
      dim = _ref5$dim === undefined ? true : _ref5$dim,
      children = _ref5.children,
      onClose = _ref5.onClose,
      props = _objectWithoutProperties(_ref5, ['dim', 'children', 'onClose']);

  return [dim && _react2.default.createElement(Dimmer, _extends({}, props, { onClick: onClose, key: 'dim' })), _react2.default.createElement(
    Drawer,
    _extends({}, props, { dim: dim, key: 'draw' }),
    children
  )];
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvZHJhd2VyLmVzNiJdLCJuYW1lcyI6WyJnZXRDb2xvciIsInRoZW1lIiwiY29sb3IiLCJpbnZlcnRlZCIsImxpZ2h0IiwiZGFyayIsIkRyYXdlciIsInRvcCIsIndpZHRoIiwicmlnaHQiLCJsZWZ0Iiwib3BlbiIsImNvbGxhcHNlZCIsImZsZXgiLCJkaW0iLCJwb2ludGVyRXZlbnRzIiwicG9zaXRpb24iLCJwYWRkaW5nVG9wIiwiZXh0ZW5kIiwidW5kZWZpbmVkIiwianVzdGlmeUNvbnRlbnQiLCJ0cmFuc2Zvcm0iLCJoZWlnaHQiLCJtaW5XaWR0aCIsInpJbmRleCIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJvbkNsb3NlIiwib25DbGljayIsInJlc3QiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwibWFwIiwiY2hpbGQiLCJwIiwiT2JqZWN0Iiwia2V5cyIsIkRpbW1lciIsImJvdHRvbSIsImxpZ2h0MiIsImRhcmszIiwib3BhY2l0eSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDakMsTUFBSUEsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLFdBQU9ELE1BQU1DLEtBQWI7QUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQ3BDLFdBQU9ELE1BQU1DLEtBQU4sS0FBZ0JBLEtBQXZCO0FBQ0Q7QUFDRCxTQUFPRCxNQUFNRSxRQUFOLEdBQWlCRixNQUFNRyxLQUF2QixHQUErQkgsTUFBTUksSUFBNUM7QUFDRCxDQVBEOztBQVNBLElBQU1DLFNBQVMsZ0NBQ2I7QUFBQSxNQUNFTCxLQURGLFFBQ0VBLEtBREY7QUFBQSxNQUVFQyxLQUZGLFFBRUVBLEtBRkY7QUFB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MkI7QUFLdkNFLFdBQU8sQ0FMZ0M7QUFNdkNpQyxZQUFRLENBTitCO0FBT3ZDaEMsVUFBTSxDQVBpQztBQVF2Q2lCLHFCQUFpQnhCLFdBQVdGLE1BQU0wQyxNQUFqQixHQUEwQjFDLE1BQU0yQyxLQVJWO0FBU3ZDcEIsWUFBUSxFQVQrQjtBQVV2Q3FCLGFBQVMsQ0FBQ2xDLElBQUQsR0FBUSxDQUFSLEdBQVksQ0FWa0I7QUFXdkNlLGdCQUFZLHdCQVgyQjtBQVl2Q1gsbUJBQWUsQ0FBQ0osSUFBRCxHQUFRLE1BQVIsR0FBaUJRO0FBWk8sR0FBekM7QUFBQSxDQURhLEVBZWIsS0FmYSxFQWdCYixDQUFDLFNBQUQsQ0FoQmEsQ0FBZjs7a0JBbUJlO0FBQUEsd0JBQUdMLEdBQUg7QUFBQSxNQUFHQSxHQUFILDZCQUFTLElBQVQ7QUFBQSxNQUFlZ0IsUUFBZixTQUFlQSxRQUFmO0FBQUEsTUFBeUJDLE9BQXpCLFNBQXlCQSxPQUF6QjtBQUFBLE1BQXFDZSxLQUFyQzs7QUFBQSxTQUFpRCxDQUM5RGhDLE9BQU8sOEJBQUMsTUFBRCxlQUFZZ0MsS0FBWixJQUFtQixTQUFTZixPQUE1QixFQUFxQyxLQUFJLEtBQXpDLElBRHVELEVBRTlEO0FBQUMsVUFBRDtBQUFBLGlCQUFZZSxLQUFaLElBQW1CLEtBQUtoQyxHQUF4QixFQUE2QixLQUFJLE1BQWpDO0FBQ0dnQjtBQURILEdBRjhELENBQWpEO0FBQUEsQyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL2RyYXdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmNvbnN0IGdldENvbG9yID0gKHRoZW1lLCBjb2xvcikgPT4ge1xuICBpZiAoY29sb3IgPT09IHRydWUpIHtcbiAgICByZXR1cm4gdGhlbWUuY29sb3I7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0aGVtZVtjb2xvcl0gfHwgY29sb3I7XG4gIH1cbiAgcmV0dXJuIHRoZW1lLmludmVydGVkID8gdGhlbWUubGlnaHQgOiB0aGVtZS5kYXJrO1xufTtcblxuY29uc3QgRHJhd2VyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoe1xuICAgIHRoZW1lLFxuICAgIGNvbG9yLFxuICAgIHRvcCA9IDAsXG4gICAgd2lkdGggPSAzMTIsXG4gICAgcmlnaHQsXG4gICAgbGVmdCxcbiAgICBvcGVuLFxuICAgIGNvbGxhcHNlZCA9IHRydWUsXG4gICAgZmxleCxcbiAgICBkaW0sXG4gIH0pID0+ICh7XG4gICAgcG9pbnRlckV2ZW50czogJ2luaXRpYWwnLFxuICAgIHBvc2l0aW9uOiBmbGV4ID8gJ2Fic29sdXRlJyA6ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIHBhZGRpbmdUb3A6IHRvcCxcbiAgICBleHRlbmQ6XG4gICAgICByaWdodCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8ge1xuICAgICAgICAgICAgcmlnaHQ6IChyaWdodCAhPT0gdHJ1ZSAmJiByaWdodCkgfHwgMCxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBvcGVuID8gbnVsbCA6ICd0cmFuc2xhdGVYKDEwMCUpJyxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgbGVmdDogKGxlZnQgIT09IHRydWUgJiYgbGVmdCkgfHwgMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogb3BlbiA/IG51bGwgOiAndHJhbnNsYXRlWCgtMTAwJSknLFxuICAgICAgICAgIH0sXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgbWluV2lkdGg6IHdpZHRoLFxuICAgIHpJbmRleDogZGltID8gMTUgOiAxMixcbiAgICBib3hTaGFkb3c6ICFjb2xsYXBzZWQgPyB0aGVtZS5ib3hTaGFkb3cgOiB1bmRlZmluZWQsXG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAyMDBtcyBlYXNlLW91dCwgbWluLXdpZHRoIDIwMG1zIGVhc2Utb3V0JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGdldENvbG9yKHRoZW1lLCBjb2xvciksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgb3Blbiwgb25DbG9zZSwgd2lkdGggPSAzMTIsIG9uQ2xpY2ssIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxhc2lkZVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB7Li4ucmVzdH1cbiAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAob25DbGljaykgb25DbGljayhlKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAge0NoaWxkcmVuLm1hcChcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGNoaWxkID0+IChjaGlsZCA/IGNsb25lRWxlbWVudChjaGlsZCwgeyB3aWR0aCB9KSA6IGNoaWxkKSxcbiAgICAgICl9XG4gICAgPC9hc2lkZT5cbiAgKSxcbiAgKHsgaW52ZXJ0ZWQsIHJpZ2h0LCB0b3AsIGxlZnQsIGNvbGxhcHNlZCwgZGltLCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgRGltbWVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgdG9wID0gMCwgb3BlbiwgaW52ZXJ0ZWQgfSkgPT4gKHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgcGFkZGluZ1RvcDogdG9wLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogaW52ZXJ0ZWQgPyB0aGVtZS5saWdodDIgOiB0aGVtZS5kYXJrMyxcbiAgICB6SW5kZXg6IDE0LFxuICAgIG9wYWNpdHk6ICFvcGVuID8gMCA6IDEsXG4gICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMjAwbXMgZWFzZS1vdXQnLFxuICAgIHBvaW50ZXJFdmVudHM6ICFvcGVuID8gJ25vbmUnIDogdW5kZWZpbmVkLFxuICB9KSxcbiAgJ2RpdicsXG4gIFsnb25DbGljayddLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgKHsgZGltID0gdHJ1ZSwgY2hpbGRyZW4sIG9uQ2xvc2UsIC4uLnByb3BzIH0pID0+IFtcbiAgZGltICYmIDxEaW1tZXIgey4uLnByb3BzfSBvbkNsaWNrPXtvbkNsb3NlfSBrZXk9XCJkaW1cIiAvPixcbiAgPERyYXdlciB7Li4ucHJvcHN9IGRpbT17ZGltfSBrZXk9XCJkcmF3XCI+XG4gICAge2NoaWxkcmVufVxuICA8L0RyYXdlcj4sXG5dO1xuIl19
