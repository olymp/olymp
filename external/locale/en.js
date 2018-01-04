'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _en_US = require('antd/lib/locale-provider/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

require('moment/locale/de');

var _localeProvider = require('antd/lib/locale-provider');

var _localeProvider2 = _interopRequireDefault(_localeProvider);

var _de = require('date-fns/locale/de');

var _de2 = _interopRequireDefault(_de);

var _withLocale = require('./with-locale');

var _withLocale2 = _interopRequireDefault(_withLocale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var LANG = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (WrappedComponent) {
    return function (props) {
      return _react2.default.createElement(
        _localeProvider2.default,
        { locale: _en_US2.default },
        _react2.default.createElement(
          _withLocale2.default,
          { locale: _extends({}, LANG, _de2.default) },
          _react2.default.createElement(WrappedComponent, props)
        )
      );
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2xvY2FsZS9lbi5lczYiXSwibmFtZXMiOlsiTEFORyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUFBLE1BQUNBLElBQUQsdUVBQVEsRUFBUjtBQUFBLFNBQWU7QUFBQSxXQUFvQjtBQUFBLGFBQ2hEO0FBQUE7QUFBQSxVQUFtQix1QkFBbkI7QUFDRTtBQUFBO0FBQUEsWUFBZ0IscUJBQWFBLElBQWIsZUFBaEI7QUFDRSx3Q0FBQyxnQkFBRCxFQUFzQkMsS0FBdEI7QUFERjtBQURGLE9BRGdEO0FBQUEsS0FBcEI7QUFBQSxHQUFmO0FBQUEsQyIsImZpbGUiOiJleHRlcm5hbC9sb2NhbGUvZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGVuVVMgZnJvbSAnYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2VuX1VTJztcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9kZSc7XG5pbXBvcnQgQW50TG9jYWxlUHJvdmlkZXIgZnJvbSAnYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyJztcbmltcG9ydCBkYXRlTG9jYWxlIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9kZSc7XG5pbXBvcnQgTG9jYWxlUHJvdmlkZXIgZnJvbSAnLi93aXRoLWxvY2FsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChMQU5HID0ge30pID0+IFdyYXBwZWRDb21wb25lbnQgPT4gcHJvcHMgPT4gKFxuICA8QW50TG9jYWxlUHJvdmlkZXIgbG9jYWxlPXtlblVTfT5cbiAgICA8TG9jYWxlUHJvdmlkZXIgbG9jYWxlPXt7IC4uLkxBTkcsIC4uLmRhdGVMb2NhbGUgfX0+XG4gICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgPC9Mb2NhbGVQcm92aWRlcj5cbiAgPC9BbnRMb2NhbGVQcm92aWRlcj5cbik7XG4iXX0=
