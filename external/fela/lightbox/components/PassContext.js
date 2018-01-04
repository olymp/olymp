'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Pass the Lightbox context through to the Portal's descendents
// StackOverflow discussion http://goo.gl/oclrJ9

var PassContext = function (_Component) {
  _inherits(PassContext, _Component);

  function PassContext() {
    _classCallCheck(this, PassContext);

    return _possibleConstructorReturn(this, (PassContext.__proto__ || Object.getPrototypeOf(PassContext)).apply(this, arguments));
  }

  _createClass(PassContext, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return PassContext;
}(_react.Component);

PassContext.propTypes = {
  context: _propTypes2.default.object.isRequired
};
PassContext.childContextTypes = {
  theme: _propTypes2.default.object
};

exports.default = PassContext;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9QYXNzQ29udGV4dC5lczYiXSwibmFtZXMiOlsiUGFzc0NvbnRleHQiLCJwcm9wcyIsImNvbnRleHQiLCJvbmx5IiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJ0aGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7QUFDQTs7SUFFTUEsVzs7Ozs7Ozs7Ozs7c0NBQ2M7QUFDaEIsYUFBTyxLQUFLQyxLQUFMLENBQVdDLE9BQWxCO0FBQ0Q7Ozs2QkFDUTtBQUNQLGFBQU8sZ0JBQVNDLElBQVQsQ0FBYyxLQUFLRixLQUFMLENBQVdHLFFBQXpCLENBQVA7QUFDRDs7Ozs7O0FBR0hKLFlBQVlLLFNBQVosR0FBd0I7QUFDdEJILFdBQVMsb0JBQVVJLE1BQVYsQ0FBaUJDO0FBREosQ0FBeEI7QUFHQVAsWUFBWVEsaUJBQVosR0FBZ0M7QUFDOUJDLFNBQU8sb0JBQVVIO0FBRGEsQ0FBaEM7O2tCQUllTixXIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9QYXNzQ29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBQYXNzIHRoZSBMaWdodGJveCBjb250ZXh0IHRocm91Z2ggdG8gdGhlIFBvcnRhbCdzIGRlc2NlbmRlbnRzXG4vLyBTdGFja092ZXJmbG93IGRpc2N1c3Npb24gaHR0cDovL2dvby5nbC9vY2xySjlcblxuY2xhc3MgUGFzc0NvbnRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY29udGV4dDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIENoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH1cbn1cblxuUGFzc0NvbnRleHQucHJvcFR5cGVzID0ge1xuICBjb250ZXh0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuUGFzc0NvbnRleHQuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc0NvbnRleHQ7XG4iXX0=
