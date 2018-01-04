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

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _divider = require('./divider');

var _divider2 = _interopRequireDefault(_divider);

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _title = require('./title');

var _title2 = _interopRequireDefault(_title);

var _space = require('./space');

var _space2 = _interopRequireDefault(_space);

var _extra = require('./extra');

var _extra2 = _interopRequireDefault(_extra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Inner = (0, _olympFela.createComponent)(function () {
  return {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    overflowY: 'auto',
    overflowX: 'hidden'
    // justifyContent: 'space-between',
  };
}, 'div');

var Menu = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      _ref$paddingX = _ref.paddingX,
      paddingX = _ref$paddingX === undefined ? 9 : _ref$paddingX,
      _ref$paddingY = _ref.paddingY,
      paddingY = _ref$paddingY === undefined ? theme.space2 : _ref$paddingY;
  return {
    display: 'flex',
    flexGrow: theme.collapsed ? 0 : 1,
    flexDirection: 'column',
    width: theme.collapsed ? 72 : theme.width,
    height: '100%',
    color: theme.inverted ? theme.light1 : theme.dark1,
    backgroundColor: color,
    paddingY: paddingY,
    paddingX: paddingX,
    overflowY: 'auto',
    overflowX: 'hidden',
    transition: 'width 200ms ease-out'
  };
}, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      color = _ref2.color,
      inverted = _ref2.inverted,
      header = _ref2.header,
      headerColor = _ref2.headerColor,
      headerInverted = _ref2.headerInverted,
      p = _objectWithoutProperties(_ref2, ['className', 'children', 'color', 'inverted', 'header', 'headerColor', 'headerInverted']);

  return _react2.default.createElement(
    'div',
    _extends({ className: className }, p),
    header && _react2.default.createElement(
      _header2.default,
      {
        color: headerColor || color,
        inverted: headerInverted || inverted
      },
      header
    ),
    _react2.default.createElement(
      Inner,
      null,
      children
    )
  );
}, function (_ref3) {
  var paddingY = _ref3.paddingY,
      paddingX = _ref3.paddingX,
      p = _objectWithoutProperties(_ref3, ['paddingY', 'paddingX']);

  return Object.keys(p);
});

var Component = (0, _theme2.default)(function (_ref4) {
  var inverted = _ref4.inverted,
      color = _ref4.color,
      collapsed = _ref4.collapsed,
      theme = _ref4.theme,
      width = _ref4.width,
      props = _objectWithoutProperties(_ref4, ['inverted', 'color', 'collapsed', 'theme', 'width']);

  return _react2.default.createElement(
    _reactFela.ThemeProvider,
    { theme: theme },
    _react2.default.createElement(Menu, _extends({ color: color, inverted: inverted }, props))
  );
});

Component.Header = _header2.default;
Component.Divider = _divider2.default;
Component.Item = _item2.default;
Component.List = _list2.default;
Component.Title = _title2.default;
Component.Image = _image2.default;
Component.Space = _space2.default;
Component.Extra = _extra2.default;
exports.default = Component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9tZW51LmVzNiJdLCJuYW1lcyI6WyJJbm5lciIsImRpc3BsYXkiLCJmbGV4R3JvdyIsImZsZXhEaXJlY3Rpb24iLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJNZW51IiwidGhlbWUiLCJjb2xvciIsInBhZGRpbmdYIiwicGFkZGluZ1kiLCJzcGFjZTIiLCJjb2xsYXBzZWQiLCJ3aWR0aCIsImhlaWdodCIsImludmVydGVkIiwibGlnaHQxIiwiZGFyazEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJoZWFkZXIiLCJoZWFkZXJDb2xvciIsImhlYWRlckludmVydGVkIiwicCIsIk9iamVjdCIsImtleXMiLCJDb21wb25lbnQiLCJwcm9wcyIsIkhlYWRlciIsIkRpdmlkZXIiLCJJdGVtIiwiTGlzdCIsIlRpdGxlIiwiSW1hZ2UiLCJTcGFjZSIsIkV4dHJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVEsZ0NBQ1o7QUFBQSxTQUFPO0FBQ0xDLGFBQVMsTUFESjtBQUVMQyxjQUFVLENBRkw7QUFHTEMsbUJBQWUsUUFIVjtBQUlMQyxlQUFXLE1BSk47QUFLTEMsZUFBVztBQUNYO0FBTkssR0FBUDtBQUFBLENBRFksRUFTWixLQVRZLENBQWQ7O0FBWUEsSUFBTUMsT0FBTyxnQ0FDWDtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLDJCQUFpQkMsUUFBakI7QUFBQSxNQUFpQkEsUUFBakIsaUNBQTRCLENBQTVCO0FBQUEsMkJBQStCQyxRQUEvQjtBQUFBLE1BQStCQSxRQUEvQixpQ0FBMENILE1BQU1JLE1BQWhEO0FBQUEsU0FBOEQ7QUFDNURWLGFBQVMsTUFEbUQ7QUFFNURDLGNBQVVLLE1BQU1LLFNBQU4sR0FBa0IsQ0FBbEIsR0FBc0IsQ0FGNEI7QUFHNURULG1CQUFlLFFBSDZDO0FBSTVEVSxXQUFPTixNQUFNSyxTQUFOLEdBQWtCLEVBQWxCLEdBQXVCTCxNQUFNTSxLQUp3QjtBQUs1REMsWUFBUSxNQUxvRDtBQU01RE4sV0FBT0QsTUFBTVEsUUFBTixHQUFpQlIsTUFBTVMsTUFBdkIsR0FBZ0NULE1BQU1VLEtBTmU7QUFPNURDLHFCQUFpQlYsS0FQMkM7QUFRNURFLHNCQVI0RDtBQVM1REQsc0JBVDREO0FBVTVETCxlQUFXLE1BVmlEO0FBVzVEQyxlQUFXLFFBWGlEO0FBWTVEYyxnQkFBWTtBQVpnRCxHQUE5RDtBQUFBLENBRFcsRUFlWDtBQUFBLE1BQ0VDLFNBREYsU0FDRUEsU0FERjtBQUFBLE1BRUVDLFFBRkYsU0FFRUEsUUFGRjtBQUFBLE1BR0ViLEtBSEYsU0FHRUEsS0FIRjtBQUFBLE1BSUVPLFFBSkYsU0FJRUEsUUFKRjtBQUFBLE1BS0VPLE1BTEYsU0FLRUEsTUFMRjtBQUFBLE1BTUVDLFdBTkYsU0FNRUEsV0FORjtBQUFBLE1BT0VDLGNBUEYsU0FPRUEsY0FQRjtBQUFBLE1BUUtDLENBUkw7O0FBQUEsU0FVRTtBQUFBO0FBQUEsZUFBSyxXQUFXTCxTQUFoQixJQUErQkssQ0FBL0I7QUFDR0gsY0FDQztBQUFBO0FBQUE7QUFDRSxlQUFPQyxlQUFlZixLQUR4QjtBQUVFLGtCQUFVZ0Isa0JBQWtCVDtBQUY5QjtBQUlHTztBQUpILEtBRko7QUFTRTtBQUFDLFdBQUQ7QUFBQTtBQUFRRDtBQUFSO0FBVEYsR0FWRjtBQUFBLENBZlcsRUFxQ1g7QUFBQSxNQUFHWCxRQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFhRCxRQUFiLFNBQWFBLFFBQWI7QUFBQSxNQUEwQmdCLENBQTFCOztBQUFBLFNBQWtDQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBbEM7QUFBQSxDQXJDVyxDQUFiOztBQXdDQSxJQUFNRyxZQUFZLHFCQUNoQjtBQUFBLE1BQUdiLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFQLEtBQWIsU0FBYUEsS0FBYjtBQUFBLE1BQW9CSSxTQUFwQixTQUFvQkEsU0FBcEI7QUFBQSxNQUErQkwsS0FBL0IsU0FBK0JBLEtBQS9CO0FBQUEsTUFBc0NNLEtBQXRDLFNBQXNDQSxLQUF0QztBQUFBLE1BQWdEZ0IsS0FBaEQ7O0FBQUEsU0FDRTtBQUFBO0FBQUEsTUFBZSxPQUFPdEIsS0FBdEI7QUFDRSxrQ0FBQyxJQUFELGFBQU0sT0FBT0MsS0FBYixFQUFvQixVQUFVTyxRQUE5QixJQUE0Q2MsS0FBNUM7QUFERixHQURGO0FBQUEsQ0FEZ0IsQ0FBbEI7O0FBUUFELFVBQVVFLE1BQVY7QUFDQUYsVUFBVUcsT0FBVjtBQUNBSCxVQUFVSSxJQUFWO0FBQ0FKLFVBQVVLLElBQVY7QUFDQUwsVUFBVU0sS0FBVjtBQUNBTixVQUFVTyxLQUFWO0FBQ0FQLFVBQVVRLEtBQVY7QUFDQVIsVUFBVVMsS0FBVjtrQkFDZVQsUyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL21lbnUvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9kaXZpZGVyJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL2l0ZW0nO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vdGl0bGUnO1xuaW1wb3J0IFNwYWNlIGZyb20gJy4vc3BhY2UnO1xuaW1wb3J0IEV4dHJhIGZyb20gJy4vZXh0cmEnO1xuXG5jb25zdCBJbm5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKCkgPT4gKHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAvLyBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9KSxcbiAgJ2RpdicsXG4pO1xuXG5jb25zdCBNZW51ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgY29sb3IsIHBhZGRpbmdYID0gOSwgcGFkZGluZ1kgPSB0aGVtZS5zcGFjZTIgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleEdyb3c6IHRoZW1lLmNvbGxhcHNlZCA/IDAgOiAxLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHdpZHRoOiB0aGVtZS5jb2xsYXBzZWQgPyA3MiA6IHRoZW1lLndpZHRoLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGNvbG9yOiB0aGVtZS5pbnZlcnRlZCA/IHRoZW1lLmxpZ2h0MSA6IHRoZW1lLmRhcmsxLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgcGFkZGluZ1ksXG4gICAgcGFkZGluZ1gsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICB0cmFuc2l0aW9uOiAnd2lkdGggMjAwbXMgZWFzZS1vdXQnLFxuICB9KSxcbiAgKHtcbiAgICBjbGFzc05hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgY29sb3IsXG4gICAgaW52ZXJ0ZWQsXG4gICAgaGVhZGVyLFxuICAgIGhlYWRlckNvbG9yLFxuICAgIGhlYWRlckludmVydGVkLFxuICAgIC4uLnBcbiAgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5wfT5cbiAgICAgIHtoZWFkZXIgJiYgKFxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgY29sb3I9e2hlYWRlckNvbG9yIHx8IGNvbG9yfVxuICAgICAgICAgIGludmVydGVkPXtoZWFkZXJJbnZlcnRlZCB8fCBpbnZlcnRlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtoZWFkZXJ9XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgKX1cbiAgICAgIDxJbm5lcj57Y2hpbGRyZW59PC9Jbm5lcj5cbiAgICA8L2Rpdj5cbiAgKSxcbiAgKHsgcGFkZGluZ1ksIHBhZGRpbmdYLCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgQ29tcG9uZW50ID0gdXNlVGhlbWUoXG4gICh7IGludmVydGVkLCBjb2xvciwgY29sbGFwc2VkLCB0aGVtZSwgd2lkdGgsIC4uLnByb3BzIH0pID0+IChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPE1lbnUgY29sb3I9e2NvbG9yfSBpbnZlcnRlZD17aW52ZXJ0ZWR9IHsuLi5wcm9wc30gLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICksXG4pO1xuXG5Db21wb25lbnQuSGVhZGVyID0gSGVhZGVyO1xuQ29tcG9uZW50LkRpdmlkZXIgPSBEaXZpZGVyO1xuQ29tcG9uZW50Lkl0ZW0gPSBJdGVtO1xuQ29tcG9uZW50Lkxpc3QgPSBMaXN0O1xuQ29tcG9uZW50LlRpdGxlID0gVGl0bGU7XG5Db21wb25lbnQuSW1hZ2UgPSBJbWFnZTtcbkNvbXBvbmVudC5TcGFjZSA9IFNwYWNlO1xuQ29tcG9uZW50LkV4dHJhID0gRXh0cmE7XG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iXX0=
