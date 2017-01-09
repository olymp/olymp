'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _templateObject = _taggedTemplateLiteral(['query geocode { item: geocode(address:"', '") { formattedAddress, lat, lng } }'], ['query geocode { item: geocode(address:"', '") { formattedAddress, lat, lng } }']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slate = require('olymp/slate');

var _olymp = require('olymp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Marker = function Marker(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng;
  return _react2.default.createElement('i', { style: { marginTop: '-20px' }, className: 'fa fa-map-marker fa-2x text-primary' });
};

var defaultAddress = { lat: 59.724465, lng: 30.080121 };
var actions = function actions(props) {
  return [{
    type: 'gmap.url',
    icon: 'map-marker',
    toggle: function toggle() {
      var setData = props.setData,
          getData = props.getData,
          client = props.client;

      var current = getData('address');
      var address = window.prompt('Adresse', current ? current.formattedAddress : '');

      if (address) {
        client.query({
          query: (0, _olymp.gql)(_templateObject, address), /* eslint-disable-line no-undef */
          forceFetch: true
        }).then(function (x) {
          return setData({ address: x.data.item });
        });
      };
    },
    active: false
  }];
};

var GoogleMapBlock = (_dec = (0, _slate.useGenericBlock)({
  label: 'GoogleMap',
  category: 'Media',
  props: ['address'],
  editable: false,
  align: true,
  resize: {
    coverOnResize: true,
    ratio: 7 / 4
  },
  actions: actions
}), (0, _olymp.withApollo)(_class = _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(GoogleMapBlock, _Component);

  function GoogleMapBlock() {
    _classCallCheck(this, GoogleMapBlock);

    return _possibleConstructorReturn(this, (GoogleMapBlock.__proto__ || Object.getPrototypeOf(GoogleMapBlock)).apply(this, arguments));
  }

  _createClass(GoogleMapBlock, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          getData = _props.getData,
          children = _props.children,
          zoom = _props.zoom,
          rest = _objectWithoutProperties(_props, ['style', 'getData', 'children', 'zoom']);

      var address = getData('address', defaultAddress);

      var styles = _extends({
        backgroundColor: 'gray',
        position: 'relative'
      }, style);

      return _react2.default.createElement(
        _slate.GenericBlock,
        _extends({}, rest, { style: styles }),
        _react2.default.createElement(
          _olymp.GoogleMap,
          { center: address, zoom: zoom },
          _react2.default.createElement(Marker, address)
        ),
        children
      );
    }
  }]);

  return GoogleMapBlock;
}(_react.Component), _class2.propTypes = {
  children: _react.PropTypes.node,
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  getData: _react.PropTypes.func
}, _class2.defaultProps = {
  zoom: 16
}, _temp)) || _class) || _class);
exports.default = GoogleMapBlock;