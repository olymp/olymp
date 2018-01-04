'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popconfirm = require('antd/lib/popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

require('antd/lib/popconfirm/style');

require('antd/lib/popover/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var _ref$placement = _ref.placement,
      placement = _ref$placement === undefined ? 'left' : _ref$placement,
      title = _ref.title,
      onConfirm = _ref.onConfirm,
      okText = _ref.okText,
      cancelText = _ref.cancelText,
      children = _ref.children,
      popover = _ref.popover,
      rest = _objectWithoutProperties(_ref, ['placement', 'title', 'onConfirm', 'okText', 'cancelText', 'children', 'popover']);

  return popover === true ? _react2.default.createElement(
    _popover2.default,
    { content: children, placement: placement },
    _react2.default.createElement(
      _popconfirm2.default,
      {
        placement: placement,
        title: title,
        onConfirm: onConfirm,
        okText: okText,
        cancelText: cancelText
      },
      _react2.default.createElement(
        _menu2.default.Item,
        rest,
        children
      )
    )
  ) : _react2.default.createElement(
    _popconfirm2.default,
    {
      placement: placement,
      title: title,
      onConfirm: onConfirm,
      okText: okText,
      cancelText: cancelText
    },
    _react2.default.createElement(
      _menu2.default.Item,
      rest,
      children
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9hbnQvY29uZmlybS5lczYiXSwibmFtZXMiOlsicGxhY2VtZW50IiwidGl0bGUiLCJvbkNvbmZpcm0iLCJva1RleHQiLCJjYW5jZWxUZXh0IiwiY2hpbGRyZW4iLCJwb3BvdmVyIiwicmVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7a0JBR2U7QUFBQSw0QkFDYkEsU0FEYTtBQUFBLE1BQ2JBLFNBRGEsa0NBQ0QsTUFEQztBQUFBLE1BRWJDLEtBRmEsUUFFYkEsS0FGYTtBQUFBLE1BR2JDLFNBSGEsUUFHYkEsU0FIYTtBQUFBLE1BSWJDLE1BSmEsUUFJYkEsTUFKYTtBQUFBLE1BS2JDLFVBTGEsUUFLYkEsVUFMYTtBQUFBLE1BTWJDLFFBTmEsUUFNYkEsUUFOYTtBQUFBLE1BT2JDLE9BUGEsUUFPYkEsT0FQYTtBQUFBLE1BUVZDLElBUlU7O0FBQUEsU0FVYkQsWUFBWSxJQUFaLEdBQ0U7QUFBQTtBQUFBLE1BQVMsU0FBU0QsUUFBbEIsRUFBNEIsV0FBV0wsU0FBdkM7QUFDRTtBQUFBO0FBQUE7QUFDRSxtQkFBV0EsU0FEYjtBQUVFLGVBQU9DLEtBRlQ7QUFHRSxtQkFBV0MsU0FIYjtBQUlFLGdCQUFRQyxNQUpWO0FBS0Usb0JBQVlDO0FBTGQ7QUFPRTtBQUFBLHVCQUFNLElBQU47QUFBZUcsWUFBZjtBQUFzQkY7QUFBdEI7QUFQRjtBQURGLEdBREYsR0FhRTtBQUFBO0FBQUE7QUFDRSxpQkFBV0wsU0FEYjtBQUVFLGFBQU9DLEtBRlQ7QUFHRSxpQkFBV0MsU0FIYjtBQUlFLGNBQVFDLE1BSlY7QUFLRSxrQkFBWUM7QUFMZDtBQU9FO0FBQUEscUJBQU0sSUFBTjtBQUFlRyxVQUFmO0FBQXNCRjtBQUF0QjtBQVBGLEdBdkJXO0FBQUEsQyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL21lbnUvYW50L2NvbmZpcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lbnUgZnJvbSAnb2x5bXAtZmVsYS9tZW51JztcbmltcG9ydCB7IFBvcGNvbmZpcm0sIFBvcG92ZXIgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgcGxhY2VtZW50ID0gJ2xlZnQnLFxuICB0aXRsZSxcbiAgb25Db25maXJtLFxuICBva1RleHQsXG4gIGNhbmNlbFRleHQsXG4gIGNoaWxkcmVuLFxuICBwb3BvdmVyLFxuICAuLi5yZXN0XG59KSA9PlxuICBwb3BvdmVyID09PSB0cnVlID8gKFxuICAgIDxQb3BvdmVyIGNvbnRlbnQ9e2NoaWxkcmVufSBwbGFjZW1lbnQ9e3BsYWNlbWVudH0+XG4gICAgICA8UG9wY29uZmlybVxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBvbkNvbmZpcm09e29uQ29uZmlybX1cbiAgICAgICAgb2tUZXh0PXtva1RleHR9XG4gICAgICAgIGNhbmNlbFRleHQ9e2NhbmNlbFRleHR9XG4gICAgICA+XG4gICAgICAgIDxNZW51Lkl0ZW0gey4uLnJlc3R9PntjaGlsZHJlbn08L01lbnUuSXRlbT5cbiAgICAgIDwvUG9wY29uZmlybT5cbiAgICA8L1BvcG92ZXI+XG4gICkgOiAoXG4gICAgPFBvcGNvbmZpcm1cbiAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgb25Db25maXJtPXtvbkNvbmZpcm19XG4gICAgICBva1RleHQ9e29rVGV4dH1cbiAgICAgIGNhbmNlbFRleHQ9e2NhbmNlbFRleHR9XG4gICAgPlxuICAgICAgPE1lbnUuSXRlbSB7Li4ucmVzdH0+e2NoaWxkcmVufTwvTWVudS5JdGVtPlxuICAgIDwvUG9wY29uZmlybT5cbiAgKTtcbiJdfQ==
