'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      noBorder = _ref.noBorder,
      color = _ref.color,
      center = _ref.center;
  return {
    padding: '5px 6px',
    ellipsis: true,
    borderBottom: noBorder || '1px solid #e9e9e9',
    fontSize: '1.17em',
    color: color || theme.color,
    textAlign: center ? 'center' : undefined,
    flexShrink: 0,
    '> div': {
      float: 'right'
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      buttons = _ref2.buttons;
  return _react2.default.createElement(
    'div',
    { className: className },
    children,
    _react2.default.createElement(
      'div',
      null,
      buttons
    )
  );
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2xpc3QvdGl0bGUuZXM2Il0sIm5hbWVzIjpbInRoZW1lIiwibm9Cb3JkZXIiLCJjb2xvciIsImNlbnRlciIsInBhZGRpbmciLCJlbGxpcHNpcyIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwidW5kZWZpbmVkIiwiZmxleFNocmluayIsImZsb2F0IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJidXR0b25zIiwiT2JqZWN0Iiwia2V5cyIsInAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7a0JBRWUsZ0NBQ2I7QUFBQSxNQUFHQSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSxNQUFvQkMsS0FBcEIsUUFBb0JBLEtBQXBCO0FBQUEsTUFBMkJDLE1BQTNCLFFBQTJCQSxNQUEzQjtBQUFBLFNBQXlDO0FBQ3ZDQyxhQUFTLFNBRDhCO0FBRXZDQyxjQUFVLElBRjZCO0FBR3ZDQyxrQkFBY0wsWUFBWSxtQkFIYTtBQUl2Q00sY0FBVSxRQUo2QjtBQUt2Q0wsV0FBT0EsU0FBU0YsTUFBTUUsS0FMaUI7QUFNdkNNLGVBQVdMLFNBQVMsUUFBVCxHQUFvQk0sU0FOUTtBQU92Q0MsZ0JBQVksQ0FQMkI7QUFRdkMsYUFBUztBQUNQQyxhQUFPO0FBREE7QUFSOEIsR0FBekM7QUFBQSxDQURhLEVBYWI7QUFBQSxNQUFHQyxTQUFILFNBQUdBLFNBQUg7QUFBQSxNQUFjQyxRQUFkLFNBQWNBLFFBQWQ7QUFBQSxNQUF3QkMsT0FBeEIsU0FBd0JBLE9BQXhCO0FBQUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFXRixTQUFoQjtBQUNHQyxZQURIO0FBRUU7QUFBQTtBQUFBO0FBQU1DO0FBQU47QUFGRixHQURGO0FBQUEsQ0FiYSxFQW1CYjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0FuQmEsQyIsImZpbGUiOiJleHRlcm5hbC91aS9saXN0L3RpdGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBub0JvcmRlciwgY29sb3IsIGNlbnRlciB9KSA9PiAoe1xuICAgIHBhZGRpbmc6ICc1cHggNnB4JyxcbiAgICBlbGxpcHNpczogdHJ1ZSxcbiAgICBib3JkZXJCb3R0b206IG5vQm9yZGVyIHx8ICcxcHggc29saWQgI2U5ZTllOScsXG4gICAgZm9udFNpemU6ICcxLjE3ZW0nLFxuICAgIGNvbG9yOiBjb2xvciB8fCB0aGVtZS5jb2xvcixcbiAgICB0ZXh0QWxpZ246IGNlbnRlciA/ICdjZW50ZXInIDogdW5kZWZpbmVkLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgJz4gZGl2Jzoge1xuICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgfSxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGJ1dHRvbnMgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPGRpdj57YnV0dG9uc308L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG4iXX0=
