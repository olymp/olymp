'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _imageInfo = require('../../components/image-info');

var _imageInfo2 = _interopRequireDefault(_imageInfo);

var _blockWrapper = require('../block-wrapper');

var _blockWrapper2 = _interopRequireDefault(_blockWrapper);

var _style = require('./style.less');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageBlock = (_dec = (0, _blockWrapper2.default)({
  resizeable: {
    resizeSteps: 10,
    // ratio: 2/3,
    // vertical: 'absolute',,
    // caption: true,
    handles: true
  }
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(ImageBlock, _Component);

  function ImageBlock() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageBlock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageBlock.__proto__ || Object.getPrototypeOf(ImageBlock)).call.apply(_ref, [this].concat(args))), _this), _this.getImageSize = function (image) {
      var _this$props = _this.props,
          embedded = _this$props.embedded,
          blockProps = _this$props.blockProps;

      if (image) {
        var width = (blockProps.width ? 960 / 100 * blockProps.width : 960) / (embedded || 1);
        var ratio = image.params ? image.params.cropW / image.params.cropH : image.width / image.height;
        return {
          height: Math.round(width / ratio),
          width: width
        };
      }
      return undefined;
    }, _this.setEntityData = function (image) {
      var setEntityData = _this.props.setEntityData;

      setEntityData({ image: image });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageBlock, [{
    key: 'render',
    value: function render() {
      /* var action = {
       active: false,
       button: <span>BILD</span>,
       toggle: this.showModal,
       label: 'Mediathek'
       };*/
      var _props = this.props,
          alignmentClassName = _props.alignmentClassName,
          focusClassName = _props.focusClassName,
          style = _props.style,
          image = _props.image,
          other = _objectWithoutProperties(_props, ['alignmentClassName', 'focusClassName', 'style', 'image']);

      // Compose figure classNames


      var className = _style2.default.imageWrapper;
      if (alignmentClassName) className = alignmentClassName + ' ' + className;
      // Compose image classNames
      var imageClassName = _style2.default.image;
      if (focusClassName) imageClassName += ' ' + focusClassName;

      return _react2.default.createElement(
        'div',
        { className: className, contentEditable: false, style: style },
        _react2.default.createElement(_imageInfo2.default, _extends({}, other, { className: imageClassName, getImageSize: this.getImageSize, updateValue: this.setEntityData,
          value: image, width: '100%', height: 'auto', lightbox: true
        }))
      );
    }
  }]);

  return ImageBlock;
}(_react.Component), _class2.defaultProps = {
  image: null,
  imageSize: 'normal',
  round: false,
  comment: null
}, _class2.title = 'Bild', _class2.category = 'Bild', _class2.icon = 'picture', _temp2)) || _class);
exports.default = ImageBlock;