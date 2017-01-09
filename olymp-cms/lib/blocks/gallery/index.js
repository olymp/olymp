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

var _olymp = require('olymp');

var _slate = require('olymp/slate');

var _image = require('../../edits/image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImagesBlock = (_dec = (0, _slate.useGenericBlock)({
  label: 'Galerie',
  props: ['image', 'showMedia'],
  category: 'Media',
  editable: false,
  actions: function actions(props) {
    return [{
      type: 'image-src',
      icon: 'picture-o',
      toggle: function toggle() {
        var setData = props.setData;

        setData({ showMedia: true });
      },
      active: false
    }];
  }
}), _dec(_class = (0, _olymp.withAuth)(_class = (_temp = _class2 = function (_Component) {
  _inherits(ImagesBlock, _Component);

  function ImagesBlock() {
    _classCallCheck(this, ImagesBlock);

    return _possibleConstructorReturn(this, (ImagesBlock.__proto__ || Object.getPrototypeOf(ImagesBlock)).apply(this, arguments));
  }

  _createClass(ImagesBlock, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          setData = _props.setData,
          getData = _props.getData,
          className = _props.className,
          readOnly = _props.readOnly,
          auth = _props.auth;

      var _props2 = this.props,
          style = _props2.style,
          children = _props2.children,
          rest = _objectWithoutProperties(_props2, ['style', 'children']);

      var images = getData('images', []);

      var styles = _extends({
        position: 'relative',
        zIndex: 2
      }, style);

      var innerStyle = {
        display: 'block'
      };

      var imageBlock = function imageBlock(image, i) {
        return _react2.default.createElement(
          'div',
          { style: _extends({}, styles, { height: 'auto', width: '20%', float: 'left', padding: '.5rem' }), key: i },
          _react2.default.createElement(
            'figure',
            { className: className, style: { margin: 0 } },
            _react2.default.createElement(_image2.default, {
              onChange: function onChange(img) {
                var newImages = [].concat(_toConsumableArray(images));
                newImages[i] = img;

                setData({ showMedia: undefined, images: newImages });
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
              width: '100%',
              value: image,
              style: innerStyle
            }),
            auth && auth.user && i !== images.length ? _react2.default.createElement(
              'figcaption',
              null,
              _react2.default.createElement(
                'a',
                { href: 'javascript:;', onClick: function onClick() {
                    return setData({ images: images.splice(i, 1) });
                  } },
                'Entfernen'
              )
            ) : null
          )
        );
      };

      return _react2.default.createElement(
        _slate.GenericBlock,
        rest,
        (images || []).map(function (image, i) {
          return imageBlock(image, i);
        }),
        auth && auth.user ? imageBlock(undefined, images.length) : null,
        _react2.default.createElement('div', { style: { clear: 'both' } }),
        children
      );
    }
  }]);

  return ImagesBlock;
}(_react.Component), _class2.propTypes = {
  children: _react.PropTypes.node,
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  isFocused: _react.PropTypes.bool,
  getData: _react.PropTypes.func,
  setData: _react.PropTypes.func
}, _temp)) || _class) || _class);
exports.default = ImagesBlock;