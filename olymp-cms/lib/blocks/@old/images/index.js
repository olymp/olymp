'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _imageInfo = require('../../components/image-info');

var _imageInfo2 = _interopRequireDefault(_imageInfo);

var _blockWrapper = require('../block-wrapper');

var _blockWrapper2 = _interopRequireDefault(_blockWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var keys = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five' };

var Gallery = (_dec = (0, _blockWrapper2.default)({
  resizeable: {
    horizontal: false
  }, alignment: false
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    return _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).apply(this, arguments));
  }

  _createClass(Gallery, [{
    key: 'updateValue',
    value: function updateValue(newImage, index) {
      var _props = this.props,
          setEntityData = _props.setEntityData,
          images = _props.images;


      newImage.sid = newImage.sid || _shortid2.default.generate();
      setEntityData({ images: (images || []).map(function (prevImage, i) {
          return i === index ? newImage : prevImage;
        }) });
    }
  }, {
    key: 'addImage',
    value: function addImage(newImage) {
      var _props2 = this.props,
          setEntityData = _props2.setEntityData,
          images = _props2.images;


      newImage.sid = newImage.sid || _shortid2.default.generate();
      setEntityData({ images: [].concat(_toConsumableArray(images || []), [newImage]) });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          images = _props3.images,
          readOnly = _props3.readOnly;


      var key = keys[readOnly ? (images || []).length : (images || []).length + 1] || 'five';
      return _react2.default.createElement(
        'div',
        { className: 'ui ' + key + ' doubling cards image-gallery', style: { width: '100%' } },
        (images || []).map(function (image, index) {
          return _react2.default.createElement(
            'div',
            { className: 'card', key: image.sid },
            _react2.default.createElement(
              'div',
              { className: 'image' },
              _react2.default.createElement(_imageInfo2.default, { value: image, lightbox: true, readOnly: readOnly,
                updateValue: function updateValue(v) {
                  return _this2.updateValue(v, index);
                }
              })
            )
          );
        }),
        !readOnly ? _react2.default.createElement(
          'div',
          { className: 'card' },
          _react2.default.createElement(
            'div',
            { className: 'image' },
            _react2.default.createElement(_imageInfo2.default, { value: {
                sid: _shortid2.default.generate(),
                url: '/img/placeholder.jpg',
                width: 1680,
                height: 578
              }, updateValue: function updateValue(v) {
                return _this2.addImage(v);
              }
            })
          )
        ) : null
      );
    }
  }]);

  return Gallery;
}(_react.Component), _class2.title = 'Galerie', _class2.category = 'Bild', _class2.icon = 'block layout', _temp)) || _class);
exports.default = Gallery;