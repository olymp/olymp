'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _reactFela = require('react-fela');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Header = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return {
    // height: 80,
    minHeight: 80,
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    alignItems: 'center',
    fontSize: '120%',
    marginX: -9,
    paddingX: 9,
    marginTop: '-' + theme.space2,
    paddingTop: theme.space2,
    marginBottom: theme.space2,
    paddingBottom: theme.space2,
    backgroundColor: color === true && theme.color || theme[color] || color,
    color: theme.inverted ? theme.light : theme.dark,
    '& svg': {
      size: 40
    },
    '& img': {
      size: 50,
      borderRadius: theme.borderRadius
    }
  };
}, 'div');

exports.default = (0, _theme2.default)(function (_ref2) {
  var inverted = _ref2.inverted,
      color = _ref2.color,
      theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ['inverted', 'color', 'theme']);

  return _react2.default.createElement(
    _reactFela.ThemeProvider,
    { theme: theme },
    _react2.default.createElement(Header, _extends({ color: color }, props))
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9oZWFkZXIuZXM2Il0sIm5hbWVzIjpbIkhlYWRlciIsInRoZW1lIiwiY29sb3IiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXhTaHJpbmsiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJtYXJnaW5YIiwicGFkZGluZ1giLCJtYXJnaW5Ub3AiLCJzcGFjZTIiLCJwYWRkaW5nVG9wIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImludmVydGVkIiwibGlnaHQiLCJkYXJrIiwic2l6ZSIsImJvcmRlclJhZGl1cyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxnQ0FDYjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLFNBQXVCO0FBQ3JCO0FBQ0FDLGVBQVcsRUFGVTtBQUdyQkMsYUFBUyxNQUhZO0FBSXJCQyxtQkFBZSxRQUpNO0FBS3JCQyxnQkFBWSxDQUxTO0FBTXJCQyxnQkFBWSxRQU5TO0FBT3JCQyxjQUFVLE1BUFc7QUFRckJDLGFBQVMsQ0FBQyxDQVJXO0FBU3JCQyxjQUFVLENBVFc7QUFVckJDLHFCQUFlVixNQUFNVyxNQVZBO0FBV3JCQyxnQkFBWVosTUFBTVcsTUFYRztBQVlyQkUsa0JBQWNiLE1BQU1XLE1BWkM7QUFhckJHLG1CQUFlZCxNQUFNVyxNQWJBO0FBY3JCSSxxQkFBa0JkLFVBQVUsSUFBVixJQUFrQkQsTUFBTUMsS0FBekIsSUFBbUNELE1BQU1DLEtBQU4sQ0FBbkMsSUFBbURBLEtBZC9DO0FBZXJCQSxXQUFPRCxNQUFNZ0IsUUFBTixHQUFpQmhCLE1BQU1pQixLQUF2QixHQUErQmpCLE1BQU1rQixJQWZ2QjtBQWdCckIsYUFBUztBQUNQQyxZQUFNO0FBREMsS0FoQlk7QUFtQnJCLGFBQVM7QUFDUEEsWUFBTSxFQURDO0FBRVBDLG9CQUFjcEIsTUFBTW9CO0FBRmI7QUFuQlksR0FBdkI7QUFBQSxDQURhLEVBeUJiLEtBekJhLENBQWY7O2tCQTRCZSxxQkFBUztBQUFBLE1BQUdKLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFmLEtBQWIsU0FBYUEsS0FBYjtBQUFBLE1BQW9CRCxLQUFwQixTQUFvQkEsS0FBcEI7QUFBQSxNQUE4QnFCLEtBQTlCOztBQUFBLFNBQ3RCO0FBQUE7QUFBQSxNQUFlLE9BQU9yQixLQUF0QjtBQUNFLGtDQUFDLE1BQUQsYUFBUSxPQUFPQyxLQUFmLElBQTBCb0IsS0FBMUI7QUFERixHQURzQjtBQUFBLENBQVQsQyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL21lbnUvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4vdGhlbWUnO1xuXG5jb25zdCBIZWFkZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBjb2xvciB9KSA9PiAoe1xuICAgIC8vIGhlaWdodDogODAsXG4gICAgbWluSGVpZ2h0OiA4MCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZmxleFNocmluazogMCxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmb250U2l6ZTogJzEyMCUnLFxuICAgIG1hcmdpblg6IC05LFxuICAgIHBhZGRpbmdYOiA5LFxuICAgIG1hcmdpblRvcDogYC0ke3RoZW1lLnNwYWNlMn1gLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNlMixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNlMixcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjZTIsXG4gICAgYmFja2dyb3VuZENvbG9yOiAoY29sb3IgPT09IHRydWUgJiYgdGhlbWUuY29sb3IpIHx8IHRoZW1lW2NvbG9yXSB8fCBjb2xvcixcbiAgICBjb2xvcjogdGhlbWUuaW52ZXJ0ZWQgPyB0aGVtZS5saWdodCA6IHRoZW1lLmRhcmssXG4gICAgJyYgc3ZnJzoge1xuICAgICAgc2l6ZTogNDAsXG4gICAgfSxcbiAgICAnJiBpbWcnOiB7XG4gICAgICBzaXplOiA1MCxcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2Jyxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRoZW1lKCh7IGludmVydGVkLCBjb2xvciwgdGhlbWUsIC4uLnByb3BzIH0pID0+IChcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8SGVhZGVyIGNvbG9yPXtjb2xvcn0gey4uLnByb3BzfSAvPlxuICA8L1RoZW1lUHJvdmlkZXI+XG4pKTtcbiJdfQ==
