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

var _olymp = require('olymp');

require('./style.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getDim = function getDim(dim) {
  if (dim) {
    if (typeof dim === 'number' || dim.indexOf('px') !== -1) {
      return 'px';
    } else if (dim.indexOf('%') !== -1) {
      return '%';
    }
  }

  return false;
};

var CoolImage = (_temp = _class = function (_Component) {
  _inherits(CoolImage, _Component);

  function CoolImage() {
    _classCallCheck(this, CoolImage);

    return _possibleConstructorReturn(this, (CoolImage.__proto__ || Object.getPrototypeOf(CoolImage)).apply(this, arguments));
  }

  _createClass(CoolImage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          asImg = _props.asImg,
          cloudinary = _props.cloudinary,
          className = _props.className,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          children = _props.children,
          onClick = _props.onClick,
          containerWidth = _props.width,
          containerHeight = _props.height;
      var ratio = this.props.ratio;


      if (!value) {
        return _react2.default.createElement('div', null);
      }

      var url = value.url,
          width = value.width,
          height = value.height,
          crop = value.crop,
          caption = value.caption;

      // wenn crop gesetzt, dann Ausschnitt als neues Bild festlegen

      if (crop) {
        width = crop[0];
        height = crop[1];
      }

      // style mit width- und height-props überschreiben
      if (containerWidth) style.width = containerWidth;
      if (containerHeight) style.height = containerHeight;

      // Ratio ermitteln
      if (!ratio) {
        if (getDim(style.width) && getDim(style.width) === getDim(style.height)) {
          // wenn style.width/height und beide vom selben gültigen Typen sind
          ratio = parseInt(style.height, 10) / parseInt(style.width, 10);
        } else {
          ratio = height / width;
        }
      }

      var containerStyles = _extends({
        width: '100%',
        height: 'auto'
      }, style);

      // Wenn Containerbreite oder -höhe fix, dann soll Bild auch nur maximal so groß sein
      if (getDim(style.width) === 'px' && parseInt(style.width, 10) < width) {
        width = parseInt(style.width, 10);
        height = Math.round(width * ratio);
      }
      if (getDim(style.height) === 'px' && parseInt(style.height, 10) < height) {
        height = parseInt(style.height, 10);
        width = Math.round(height / ratio);
      }

      var cloudinaryProps = _extends({ url: url, width: width, height: height, maxWidth: style.maxWidth, maxHeight: style.maxHeight }, cloudinary);
      if (cloudinary && cloudinary.width && !cloudinary.height) delete cloudinaryProps.height;
      if (cloudinary && cloudinary.height && !cloudinary.width) delete cloudinaryProps.width;
      url = (0, _olymp.cloudinaryUrl)(url, cloudinaryProps, crop);
      var url300 = url,
          url600 = url,
          url1200 = url,
          url1920 = url;

      /*es gibt halt noch das Problem wenn das Bild was ausgegeben werden soll z.B. 2:3 hat, der ratio aber auf 1:1 gesetzt wurde
      bei einem Container schneidet er einfach das „Überflüssige“ ab, aber bei einem <img> müssen wir das mittels neuem crop machen 😟
       if (ratio && ratio !== options.height / options.width) {
        if (styles.width.indexOf('%') >= 0) {
          const size = parseInt(options.width, 10);
          crop = [size, size * ratio, 0, 0];
        } else {
          const size = parseInt(styles.width, 10);
          crop = [size, size * ratio, 0, 0];
        }
      }*/
      if (asImg && !_react.Children.toArray(children).filter(function (x) {
        return x;
      }).length) {
        return _react2.default.createElement('img', {
          className: (0, _olymp.cn)(className, 'athena-img'),
          onClick: onClick,
          src: url,
          alt: caption,
          style: containerStyles,
          srcSet: '\n            ' + url300 + ' 300w,\n            ' + url600 + ' 600w,\n            ' + url1200 + ' 1200w,\n            ' + url1920 + ' 1920w\n          '
        });
      }

      // Container-Styles Höhe und Background
      if (!getDim(containerStyles.height)) {
        if (getDim(containerStyles.width) === 'px') {
          containerStyles.height = parseInt(containerStyles.width, 10) * ratio;
        } else if (getDim(containerStyles.width) === '%') {
          containerStyles.paddingBottom = parseInt(containerStyles.width, 10) * ratio + '%';
        }
      } else if (!getDim(containerStyles.width)) {
        if (getDim(containerStyles.height) === 'px') {
          containerStyles.width = parseInt(containerStyles.height, 10) / ratio;
        } else if (getDim(containerStyles.height) === '%') {
          containerStyles.paddingBottom = parseInt(containerStyles.height, 10) / ratio + '%';
        }
      }
      containerStyles.backgroundImage = 'url(' + url + ')';

      return _react2.default.createElement(
        'div',
        { onClick: onClick, style: containerStyles, className: (0, _olymp.cn)(className, 'athena-img-container') },
        children
      );
    }
  }]);

  return CoolImage;
}(_react.Component), _class.defaultProps = {
  cloudinary: {}
}, _class.propTypes = {
  /* Value includes all data (including width, height, crop)
  from the image as it comes from the database */
  value: _react.PropTypes.instanceOf(Object),

  /* Using cloudinary, you can override the width/height-data set in Value (only absolute!) */
  cloudinary: _react.PropTypes.shape({
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    minWidth: _react.PropTypes.number,
    minHeight: _react.PropTypes.number,
    maxWidth: _react.PropTypes.number,
    maxHeight: _react.PropTypes.number
  }),
  onClick: _react.PropTypes.func,

  /* Width, height, ratio refer to the container of the image and are identical
  to the dimensions of the image (absolute or relative) */
  width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  ratio: _react.PropTypes.number,
  className: _react.PropTypes.string,
  style: _react.PropTypes.instanceOf(Object),

  /* Others */
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
}, _temp);
exports.default = CoolImage;