'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _reactRedux = require('react-redux');

var _lightboxRedux = require('./lightbox-redux');

var _lightboxRedux2 = _interopRequireDefault(_lightboxRedux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var enhanceQuery = (0, _reactRedux.connect)(function (_ref) {
  var location = _ref.location;
  return {
    qlightbox: location.query.lightbox
  };
});

var LightboxProvider = enhanceQuery(_class = (0, _lightboxRedux2.default)(_class = function (_Component) {
  _inherits(LightboxProvider, _Component);

  function LightboxProvider() {
    _classCallCheck(this, LightboxProvider);

    return _possibleConstructorReturn(this, (LightboxProvider.__proto__ || Object.getPrototypeOf(LightboxProvider)).apply(this, arguments));
  }

  _createClass(LightboxProvider, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children;
    }
  }]);

  return LightboxProvider;
}(_react.Component)) || _class) || _class;

exports.default = LightboxProvider;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2xpZ2h0Ym94LXByb3ZpZGVyLmVzNiJdLCJuYW1lcyI6WyJlbmhhbmNlUXVlcnkiLCJsb2NhdGlvbiIsInFsaWdodGJveCIsInF1ZXJ5IiwibGlnaHRib3giLCJMaWdodGJveFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSx5QkFBUTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQzlDQyxlQUFXRCxTQUFTRSxLQUFULENBQWVDO0FBRG9CLEdBQW5CO0FBQUEsQ0FBUixDQUFyQjs7SUFNcUJDLGdCLEdBRnBCTCxZOzs7Ozs7Ozs7Ozs2QkFHVTtBQUFBLFVBQ0NNLFFBREQsR0FDYyxLQUFLQyxLQURuQixDQUNDRCxRQUREOztBQUVQLGFBQU9BLFFBQVA7QUFDRDs7Ozs7O2tCQUprQkQsZ0IiLCJmaWxlIjoiY21zL2Nsb3VkaW5hcnkvbGlnaHRib3gtcHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICcuL2xpZ2h0Ym94LXJlZHV4JztcblxuY29uc3QgZW5oYW5jZVF1ZXJ5ID0gY29ubmVjdCgoeyBsb2NhdGlvbiB9KSA9PiAoe1xuICBxbGlnaHRib3g6IGxvY2F0aW9uLnF1ZXJ5LmxpZ2h0Ym94LFxufSkpO1xuXG5AZW5oYW5jZVF1ZXJ5XG5Ad2l0aFJlZHV4XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWdodGJveFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG59XG4iXX0=
