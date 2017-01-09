'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slate = require('olymp/slate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultVideo = 'https://www.youtube.com/embed/zalYJacOhpo';
var actions = function actions(props) {
  return [{
    type: 'youtube.url',
    icon: 'film',
    toggle: function toggle() {
      var setData = props.setData,
          getData = props.getData;

      var currentUrl = getData('url') || defaultVideo;
      var url = window.prompt('URL', currentUrl);
      if (url) setData({ url: url });
    },
    active: false
  }];
};

var YoutubeBlock = (_dec = (0, _slate.useGenericBlock)({
  label: 'Youtube',
  category: 'Media',
  props: ['url'],
  editable: false,
  resize: {
    coverOnResize: true,
    ratio: 7 / 4
  },
  actions: actions
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(YoutubeBlock, _Component);

  function YoutubeBlock() {
    _classCallCheck(this, YoutubeBlock);

    return _possibleConstructorReturn(this, (YoutubeBlock.__proto__ || Object.getPrototypeOf(YoutubeBlock)).apply(this, arguments));
  }

  _createClass(YoutubeBlock, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          getData = _props.getData,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['style', 'getData', 'children']);

      var url = getData('url', defaultVideo);

      var styles = _extends({
        backgroundColor: 'gray'
      }, style);

      return _react2.default.createElement(
        _slate.GenericBlock,
        _extends({}, rest, { style: _extends({}, styles, { height: 'auto' }) }),
        _react2.default.createElement('iframe', { width: styles.width, height: styles.height, src: url, frameBorder: '0', allowFullScreen: true }),
        children
      );
    }
  }]);

  return YoutubeBlock;
}(_react.Component), _class2.propTypes = {
  children: _react.PropTypes.node,
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  getData: _react.PropTypes.func
}, _temp)) || _class);
exports.default = YoutubeBlock;