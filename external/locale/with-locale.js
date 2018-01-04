'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocaleProvider = (_temp2 = _class = function (_Component) {
  _inherits(LocaleProvider, _Component);

  function LocaleProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LocaleProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LocaleProvider.__proto__ || Object.getPrototypeOf(LocaleProvider)).call.apply(_ref, [this].concat(args))), _this), _this.caller = function (fnOrString) {
      for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      var locale = _this.props.locale;

      if (typeof fnOrString === 'function') {
        return fnOrString.apply(undefined, rest.concat([{ locale: locale }]));
      } else if (typeof fnOrString === 'string') {
        return _get3.default.apply(undefined, [locale, fnOrString].concat(rest));
      }
      return locale[fnOrString];
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LocaleProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        locale: this.caller
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react.Children.only(children);
    }
  }]);

  return LocaleProvider;
}(_react.Component), _class.childContextTypes = {
  locale: _propTypes.func
}, _temp2);
exports.default = LocaleProvider;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2xvY2FsZS93aXRoLWxvY2FsZS5lczYiXSwibmFtZXMiOlsiTG9jYWxlUHJvdmlkZXIiLCJjYWxsZXIiLCJmbk9yU3RyaW5nIiwicmVzdCIsImxvY2FsZSIsInByb3BzIiwiY2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRDb250ZXh0VHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0lBR3FCQSxjOzs7Ozs7Ozs7Ozs7OztzTUFXbkJDLE0sR0FBUyxVQUFDQyxVQUFELEVBQXlCO0FBQUEseUNBQVRDLElBQVM7QUFBVEEsWUFBUztBQUFBOztBQUFBLFVBQ3hCQyxNQUR3QixHQUNiLE1BQUtDLEtBRFEsQ0FDeEJELE1BRHdCOztBQUVoQyxVQUFJLE9BQU9GLFVBQVAsS0FBc0IsVUFBMUIsRUFBc0M7QUFDcEMsZUFBT0EsNEJBQWNDLElBQWQsU0FBb0IsRUFBRUMsY0FBRixFQUFwQixHQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUksT0FBT0YsVUFBUCxLQUFzQixRQUExQixFQUFvQztBQUN6QyxlQUFPLGdDQUFJRSxNQUFKLEVBQVlGLFVBQVosU0FBMkJDLElBQTNCLEVBQVA7QUFDRDtBQUNELGFBQU9DLE9BQU9GLFVBQVAsQ0FBUDtBQUNELEs7Ozs7O3NDQWRpQjtBQUNoQixhQUFPO0FBQ0xFLGdCQUFRLEtBQUtIO0FBRFIsT0FBUDtBQUdEOzs7NkJBWVE7QUFBQSxVQUNDSyxRQURELEdBQ2MsS0FBS0QsS0FEbkIsQ0FDQ0MsUUFERDs7QUFFUCxhQUFPLGdCQUFTQyxJQUFULENBQWNELFFBQWQsQ0FBUDtBQUNEOzs7OzRCQXZCTUUsaUIsR0FBb0I7QUFDekJKO0FBRHlCLEM7a0JBRFJKLGMiLCJmaWxlIjoiZXh0ZXJuYWwvbG9jYWxlL3dpdGgtbG9jYWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZ1bmMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsZVByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIGxvY2FsZTogZnVuYyxcbiAgfTtcblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2FsZTogdGhpcy5jYWxsZXIsXG4gICAgfTtcbiAgfVxuXG4gIGNhbGxlciA9IChmbk9yU3RyaW5nLCAuLi5yZXN0KSA9PiB7XG4gICAgY29uc3QgeyBsb2NhbGUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHR5cGVvZiBmbk9yU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZm5PclN0cmluZyguLi5yZXN0LCB7IGxvY2FsZSB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmbk9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGdldChsb2NhbGUsIGZuT3JTdHJpbmcsIC4uLnJlc3QpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxlW2ZuT3JTdHJpbmddO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgfVxufVxuIl19
