'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _coolImage = require('./cool-image');

var _coolImage2 = _interopRequireDefault(_coolImage);

var _withImageUpload = require('./with-image-upload');

var _withImageUpload2 = _interopRequireDefault(_withImageUpload);

var _withLightbox = require('./with-lightbox');

var _withLightbox2 = _interopRequireDefault(_withLightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultImage = {
  url: '/img/placeholder.jpg',
  width: 1680,
  height: 578
};

// @withAuth
var ImageComponent = (_dec = (0, _withLightbox2.default)(), _dec2 = (0, _withImageUpload2.default)(), _dec(_class = _dec2(_class = function (_Component) {
  _inherits(ImageComponent, _Component);

  function ImageComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageComponent.__proto__ || Object.getPrototypeOf(ImageComponent)).call.apply(_ref, [this].concat(args))), _this), _this.onImageClick = function () {
      var _this$props = _this.props,
          showLightbox = _this$props.showLightbox,
          showMediathek = _this$props.showMediathek,
          onImageClick = _this$props.onImageClick,
          readOnly = _this$props.readOnly,
          auth = _this$props.auth,
          onChange = _this$props.onChange,
          lightbox = _this$props.lightbox;


      if (!readOnly) {
        if (onImageClick) {
          onImageClick({ showLightbox: showLightbox, showMediathek: showMediathek });
        } else if ( /* auth && auth.user && */onChange) {
          showMediathek({ showMediathek: showMediathek });
        }
      }

      if (lightbox) {
        showLightbox();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cloudinary = _props.cloudinary,
          asImg = _props.asImg,
          style = _props.style,
          className = _props.className,
          width = _props.width,
          height = _props.height,
          ratio = _props.ratio,
          children = _props.children;
      var value = this.props.value;


      if (!value) {
        value = defaultImage;
      } else if (typeof value === 'string') {
        value = {
          url: value
        };
      }

      return _react2.default.createElement(
        _coolImage2.default,
        {
          asImg: asImg,
          value: value,
          cloudinary: cloudinary,
          style: style,
          className: className,
          width: width,
          height: height,
          ratio: ratio,
          onClick: this.onImageClick
        },
        children
      );
    }
  }]);

  return ImageComponent;
}(_react.Component)) || _class) || _class);
exports.default = ImageComponent;