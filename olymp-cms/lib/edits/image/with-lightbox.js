'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLightboxes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _olymp = require('olymp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultGetImage = function defaultGetImage(props) {
  return props.value;
};

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      getImage = _ref.getImage;

  return function (WrappedComponent) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(Lightbox, _Component);

      function Lightbox() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, Lightbox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).call.apply(_ref2, [this].concat(args))), _this), _this.id = Math.random().toString(36).substr(2, 9), _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(Lightbox, [{
        key: 'setImage',
        value: function setImage(props) {
          var image = (getImage || defaultGetImage)(props);
          if (image) this.context.lightbox.add(this.id, image);
        }
      }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.setImage(this.props);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
          this.setImage(props);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.context.lightbox.remove(this.id);
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          if (this.props.lightbox !== true) {
            return _react2.default.createElement(WrappedComponent, this.props);
          }
          var children = this.props.children;

          return _react2.default.createElement(
            WrappedComponent,
            _extends({}, this.props, { showLightbox: function showLightbox() {
                return _this2.context.lightbox.show(_this2.id);
              } }),
            children
          );
        }
      }]);

      return Lightbox;
    }(_react.Component), _class.contextTypes = {
      lightbox: _react2.default.PropTypes.object
    }, _temp2;
  };
};

var useLightboxes = exports.useLightboxes = function useLightboxes(WrappedComponent) {
  var _class2, _temp4;

  return _temp4 = _class2 = function (_Component2) {
    _inherits(WithLightbox, _Component2);

    function WithLightbox() {
      var _ref3;

      var _temp3, _this3, _ret2;

      _classCallCheck(this, WithLightbox);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref3 = WithLightbox.__proto__ || Object.getPrototypeOf(WithLightbox)).call.apply(_ref3, [this].concat(args))), _this3), _this3.lightboxes = {}, _this3.state = { visible: false }, _this3.onKeyDown = function (e) {
        var visible = _this3.state.visible;

        var images = Object.keys(_this3.lightboxes).map(function (key) {
          return _this3.lightboxes[key];
        });
        if (e.keyCode === 37) {
          _this3.setState({ visible: (visible + images.length - 1) % images.length });
        } else if (e.keyCode === 39) {
          _this3.setState({ visible: (visible + 1) % images.length });
        }
      }, _this3.add = function (ref, image) {
        _this3.lightboxes[ref] = image;
      }, _this3.remove = function (ref) {
        delete _this3.lightboxes[ref];
      }, _this3.show = function (ref) {
        var images = Object.keys(_this3.lightboxes).map(function (key) {
          return _this3.lightboxes[key];
        });
        _this3.setState({ visible: images.indexOf(_this3.lightboxes[ref]) });
      }, _this3.hide = function () {
        _this3.setState({ visible: false });
      }, _temp3), _possibleConstructorReturn(_this3, _ret2);
    }

    _createClass(WithLightbox, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          lightbox: {
            add: this.add,
            remove: this.remove,
            show: this.show,
            hide: this.hide
          }
        };
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(props, state) {
        if (state.visible !== false && this.state.visible === false) {
          document.addEventListener('keydown', this.onKeyDown);
        } else if (state.visible === false && this.state.visible !== false) {
          document.removeEventListener('keydown', this.onKeyDown);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var visible = this.state.visible;
        var children = this.props.children;

        var images = Object.keys(this.lightboxes).map(function (key) {
          return _this4.lightboxes[key];
        });
        var image = visible ? images[visible] : {};
        var footer = image.caption ? _react2.default.createElement(
          'span',
          null,
          image.caption,
          ' ',
          _react2.default.createElement(
            'span',
            { className: 'source' },
            image.source
          )
        ) : false;

        return _react2.default.createElement(
          WrappedComponent,
          this.props,
          children,
          visible !== false ? _react2.default.createElement(
            _antd.Modal,
            {
              visible: true,
              width: '100xd',
              className: 'athena-lightbox',
              footer: footer,
              mainSrc: image.url,
              imageTitle: image.caption,
              nextSrc: images[(visible + 1) % images.length],
              prevSrc: images[(visible + images.length - 1) % images.length],
              onCancel: this.hide
            },
            _react2.default.createElement('img', { src: (0, _olymp.cloudinaryUrl)(image.url), width: '100%', height: 'auto' })
          ) : null
        );
      }
    }]);

    return WithLightbox;
  }(_react.Component), _class2.childContextTypes = {
    lightbox: _react2.default.PropTypes.object
  }, _temp4;
};