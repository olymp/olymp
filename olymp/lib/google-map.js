'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleMap = (_temp = _class = function (_Component) {
  _inherits(GoogleMap, _Component);

  function GoogleMap() {
    _classCallCheck(this, GoogleMap);

    return _possibleConstructorReturn(this, (GoogleMap.__proto__ || Object.getPrototypeOf(GoogleMap)).apply(this, arguments));
  }

  _createClass(GoogleMap, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          center = _props.center,
          zoom = _props.zoom,
          key = _props.key,
          rest = _objectWithoutProperties(_props, ['children', 'center', 'zoom', 'key']);

      return _react2.default.createElement(
        _googleMapReact2.default,
        _extends({
          defaultCenter: center,
          center: center,
          defaultZoom: zoom,
          zoom: zoom,
          bootstrapURLKeys: {
            key: key || process.env.GM_KEY
          }
        }, rest),
        children
      );
    }
  }]);

  return GoogleMap;
}(_react.Component), _class.propTypes = {
  children: _react.PropTypes.node
}, _class.defaultProps = {
  center: { lat: 59.938043, lng: 30.337157 },
  zoom: 9,
  greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
}, _temp);
exports.default = GoogleMap;