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

var _blockWrapper = require('../block-wrapper');

var _blockWrapper2 = _interopRequireDefault(_blockWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultAudio = 'https://soundcloud.com/friedbikinis/above-the-fog';

var SoundcloudBlock = (_dec = (0, _blockWrapper2.default)({
  resizeable: {
    resizeSteps: 10,
    //ratio: 2/3,
    //vertical: 'absolute',
    handles: true
  }
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(SoundcloudBlock, _Component);

  function SoundcloudBlock() {
    _classCallCheck(this, SoundcloudBlock);

    return _possibleConstructorReturn(this, (SoundcloudBlock.__proto__ || Object.getPrototypeOf(SoundcloudBlock)).apply(this, arguments));
  }

  _createClass(SoundcloudBlock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var addActions = this.props.addActions;

      if (addActions) {
        addActions([{
          button: _react2.default.createElement(
            'span',
            null,
            'URL'
          ),
          label: 'URL hinzufügen',
          active: false,
          toggle: function toggle() {
            return _this2.setUrl();
          }
        }]);
      }
    }
  }, {
    key: 'setUrl',
    value: function setUrl() {
      var url = window.prompt("URL", this.props.url || defaultAudio);
      if (url) {
        var setEntityData = this.props.setEntityData;


        setEntityData({ url: url });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoplay = _props.autoplay,
          hideRelated = _props.hideRelated,
          showComments = _props.showComments,
          showUser = _props.showUser,
          showReposts = _props.showReposts,
          visual = _props.visual,
          color = _props.color,
          style = _props.style,
          className = _props.className,
          url = _props.url;


      var styles = _extends({
        width: '100%',
        height: '100%',
        position: 'relative'
      }, style);

      var src = 'https://w.soundcloud.com/player/' + ('?url=' + (url || defaultAudio)) + ('&auto_play=' + autoplay) + ('&hide_related=' + hideRelated) + ('&show_comments=' + showComments) + ('&show_user=' + showUser) + ('&show_reposts=' + showReposts) + ('&visual=' + visual) + ('&color=' + color);

      return _react2.default.createElement(
        'div',
        { style: styles, className: className, contentEditable: false },
        _react2.default.createElement('iframe', {
          width: '100%',
          height: '100%',
          scrolling: 'no',
          frameBorder: 'no',
          src: src })
      );
    }
  }]);

  return SoundcloudBlock;
}(_react.Component), _class2.defaultProps = {
  autoplay: false,
  width: "100%",
  height: "450px",
  hideRelated: false,
  showComments: true,
  showUser: true,
  showReposts: false,
  visual: true,
  color: "ff5500"
}, _class2.title = 'Soundcloud', _class2.icon = 'soundcloud', _class2.category = 'Media', _temp)) || _class);
exports.default = SoundcloudBlock;