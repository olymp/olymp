'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _de_DE = require('antd/lib/locale-provider/de_DE');

var _de_DE2 = _interopRequireDefault(_de_DE);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/de');

var _localeProvider = require('antd/lib/locale-provider');

var _localeProvider2 = _interopRequireDefault(_localeProvider);

var _de = require('date-fns/locale/de');

var _de2 = _interopRequireDefault(_de);

var _withLocale = require('./with-locale');

var _withLocale2 = _interopRequireDefault(_withLocale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('de');

exports.default = function () {
  var LANG = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (WrappedComponent) {
    return function (props) {
      return _react2.default.createElement(
        _localeProvider2.default,
        { locale: _de_DE2.default },
        _react2.default.createElement(
          _withLocale2.default,
          { locale: _extends({}, LANG, _de2.default) },
          _react2.default.createElement(WrappedComponent, props)
        )
      );
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2FudGQvZGUuZXM2Il0sIm5hbWVzIjpbImxvY2FsZSIsIkxBTkciLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLGlCQUFPQSxNQUFQLENBQWMsSUFBZDs7a0JBRWU7QUFBQSxNQUFDQyxJQUFELHVFQUFRLEVBQVI7QUFBQSxTQUFlO0FBQUEsV0FBb0I7QUFBQSxhQUNoRDtBQUFBO0FBQUEsVUFBbUIsdUJBQW5CO0FBQ0U7QUFBQTtBQUFBLFlBQWdCLHFCQUFhQSxJQUFiLGVBQWhCO0FBQ0Usd0NBQUMsZ0JBQUQsRUFBc0JDLEtBQXRCO0FBREY7QUFERixPQURnRDtBQUFBLEtBQXBCO0FBQUEsR0FBZjtBQUFBLEMiLCJmaWxlIjoiZXh0ZXJuYWwvYW50ZC9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVERSBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZGVfREUnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2RlJztcbmltcG9ydCBBbnRMb2NhbGVQcm92aWRlciBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXInO1xuaW1wb3J0IGRhdGVMb2NhbGUgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2RlJztcbmltcG9ydCBMb2NhbGVQcm92aWRlciBmcm9tICcuL3dpdGgtbG9jYWxlJztcblxubW9tZW50LmxvY2FsZSgnZGUnKTtcblxuZXhwb3J0IGRlZmF1bHQgKExBTkcgPSB7fSkgPT4gV3JhcHBlZENvbXBvbmVudCA9PiBwcm9wcyA9PiAoXG4gIDxBbnRMb2NhbGVQcm92aWRlciBsb2NhbGU9e2RlREV9PlxuICAgIDxMb2NhbGVQcm92aWRlciBsb2NhbGU9e3sgLi4uTEFORywgLi4uZGF0ZUxvY2FsZSB9fT5cbiAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICA8L0xvY2FsZVByb3ZpZGVyPlxuICA8L0FudExvY2FsZVByb3ZpZGVyPlxuKTtcbiJdfQ==
