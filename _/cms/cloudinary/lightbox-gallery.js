'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LightboxGallery = (_temp = _class = function (_Component) {
  _inherits(LightboxGallery, _Component);

  function LightboxGallery() {
    _classCallCheck(this, LightboxGallery);

    return _possibleConstructorReturn(this, (LightboxGallery.__proto__ || Object.getPrototypeOf(LightboxGallery)).apply(this, arguments));
  }

  _createClass(LightboxGallery, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var gallery = this.props.gallery;

      return {
        gallery: gallery || Math.random().toString(36).substr(2, 9)
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children;
    }
  }]);

  return LightboxGallery;
}(_react.Component), _class.childContextTypes = {
  gallery: _propTypes2.default.string
}, _temp);
exports.default = LightboxGallery;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2xpZ2h0Ym94LWdhbGxlcnkuZXM2Il0sIm5hbWVzIjpbIkxpZ2h0Ym94R2FsbGVyeSIsImdhbGxlcnkiLCJwcm9wcyIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsImNoaWxkcmVuIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7c0NBS0Q7QUFBQSxVQUNSQyxPQURRLEdBQ0ksS0FBS0MsS0FEVCxDQUNSRCxPQURROztBQUVoQixhQUFPO0FBQ0xBLGlCQUNFQSxXQUNBRSxLQUFLQyxNQUFMLEdBQ0dDLFFBREgsQ0FDWSxFQURaLEVBRUdDLE1BRkgsQ0FFVSxDQUZWLEVBRWEsQ0FGYjtBQUhHLE9BQVA7QUFPRDs7OzZCQUVRO0FBQUEsVUFDQ0MsUUFERCxHQUNjLEtBQUtMLEtBRG5CLENBQ0NLLFFBREQ7O0FBRVAsYUFBT0EsUUFBUDtBQUNEOzs7OzRCQWxCTUMsaUIsR0FBb0I7QUFDekJQLFdBQVMsb0JBQVVRO0FBRE0sQztrQkFEUlQsZSIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS9saWdodGJveC1nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlnaHRib3hHYWxsZXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIGdhbGxlcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIGNvbnN0IHsgZ2FsbGVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4ge1xuICAgICAgZ2FsbGVyeTpcbiAgICAgICAgZ2FsbGVyeSB8fFxuICAgICAgICBNYXRoLnJhbmRvbSgpXG4gICAgICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgICAgIC5zdWJzdHIoMiwgOSksXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxufVxuIl19
