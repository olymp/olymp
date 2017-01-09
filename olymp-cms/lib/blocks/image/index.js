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

var _image = require('../../edits/image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var actions = function actions(props) {
  return [{
    type: 'image-src',
    icon: 'picture-o',
    toggle: function toggle() {
      var setData = props.setData;

      setData({ showMedia: true });
    },
    active: false
  }];
};

var ImageBlock = (_dec = (0, _slate.useGenericBlock)({
  label: 'Bild',
  props: ['image', 'showMedia', 'full'],
  category: 'Media',
  editable: false,
  resize: {
    bootstrap: true,
    coverOnResize: true,
    resizeY: false
  },
  align: true,
  actions: actions
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(ImageBlock, _Component);

  function ImageBlock() {
    _classCallCheck(this, ImageBlock);

    return _possibleConstructorReturn(this, (ImageBlock.__proto__ || Object.getPrototypeOf(ImageBlock)).apply(this, arguments));
  }

  _createClass(ImageBlock, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          setData = _props.setData,
          getData = _props.getData,
          className = _props.className,
          readOnly = _props.readOnly,
          attributes = _props.attributes,
          isFocused = _props.isFocused,
          renderToolbar = _props.renderToolbar,
          toolbarStyle = _props.toolbarStyle;

      var _props2 = this.props,
          style = _props2.style,
          children = _props2.children,
          rest = _objectWithoutProperties(_props2, ['style', 'children']);

      var value = getData('image', undefined);

      var styles = _extends({
        backgroundColor: 'gray',
        position: 'relative',
        zIndex: 2
      }, style, {
        height: 'auto'
      });

      var innerStyle = {
        display: 'block'
      };

      // const width = !value ? styles.width : (value.crop ? value.crop[0] : value.width);
      // const height = !value ? styles.height : (value.crop ? value.crop[1] : value.height);

      return _react2.default.createElement(
        'figure',
        attributes,
        _react2.default.createElement(
          'div',
          { style: styles, className: className, 'data-block-active': !readOnly },
          renderToolbar(toolbarStyle),
          children,
          _react2.default.createElement(_image2.default, {
            asImg: true,
            onChange: function onChange(image) {
              return setData({ showMedia: undefined, image: image });
            },
            onCancel: function onCancel() {
              return setData({ showMedia: false });
            },
            lightbox: true,
            onImageClick: readOnly ? function (_ref) {
              var showLightbox = _ref.showLightbox;
              return showLightbox();
            } : function () {
              return setData({ showMedia: true });
            },
            showMediathek: getData('showMedia'),
            width: styles.width,
            value: value,
            style: innerStyle
          })
        )
      );
    }
  }]);

  return ImageBlock;
}(_react.Component), _class2.propTypes = {
  children: _react.PropTypes.node,
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  isFocused: _react.PropTypes.bool,
  getData: _react.PropTypes.func,
  setData: _react.PropTypes.func
}, _temp)) || _class);
exports.default = ImageBlock;