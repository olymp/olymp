'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _reactImageCrop = require('react-image-crop');

var _reactImageCrop2 = _interopRequireDefault(_reactImageCrop);

var _olymp = require('olymp');

require('react-image-crop/dist/ReactCrop.css');

var _list = require('../../views/media/list');

var _list2 = _interopRequireDefault(_list);

var _upload = require('../../views/media/upload');

var _upload2 = _interopRequireDefault(_upload);

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
    return function (_Component) {
      _inherits(WithImageUpload, _Component);

      function WithImageUpload() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, WithImageUpload);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = WithImageUpload.__proto__ || Object.getPrototypeOf(WithImageUpload)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {}, _this.show = function (value) {
          _this.image = value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.url && value.width && value.height ? value : null;
          _this.setState({ visible: true });
        }, _this.hide = function () {
          _this.setState({ visible: false });
        }, _this.onOk = function () {
          var onChange = _this.props.onChange;


          onChange({
            url: _this.image.url,
            height: _this.image.height,
            width: _this.image.width,
            crop: _this.image.crop,
            caption: _this.image.caption,
            source: _this.image.source
          });
          _this.hide();
        }, _this.onCancel = function () {
          var onCancel = _this.props.onCancel;


          if (onCancel) onCancel();
          _this.hide();
        }, _this.onCrop = function (p, _ref3) {
          var width = _ref3.width,
              height = _ref3.height,
              x = _ref3.x,
              y = _ref3.y;

          _this.image.crop = [width, height, x, y];
        }, _this.componentWillReceiveProps = function (nextProps) {
          var nextGivenImage = (getImage || defaultGetImage)(nextProps);

          if (!_this.image) {
            _this.image = _extends({}, nextGivenImage);
          }
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(WithImageUpload, [{
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _state = this.state,
              tags = _state.tags,
              solution = _state.solution,
              source = _state.source,
              type = _state.type,
              sortByState = _state.sortByState,
              aspect = _state.aspect;
          var _props = this.props,
              disableUpload = _props.disableUpload,
              readOnly = _props.readOnly,
              showMediathek = _props.showMediathek,
              children = _props.children;

          var visible = this.state.visible || showMediathek;

          if (disableUpload || readOnly) {
            return _react2.default.createElement(WrappedComponent, this.props);
          }

          var image = this.image; // || (showMediathek && typeof showMediathek === 'object' ? showMediathek : null);
          var crop = image && image.crop ? {
            width: image.crop[0] / image.width * 100,
            height: image.crop[1] / image.height * 100,
            x: image.crop[2] / image.width * 100,
            y: image.crop[3] / image.height * 100,
            aspect: aspect
          } : { aspect: aspect };

          return _react2.default.createElement(
            WrappedComponent,
            _extends({}, this.props, { showMediathek: function showMediathek() {
                return _this2.show(image);
              } }),
            children,
            visible && !(image && image.url) ? _react2.default.createElement(
              _antd.Modal,
              { visible: true, title: 'Mediathek', onCancel: this.onCancel, onOk: this.hide },
              _react2.default.createElement(_list2.default, {
                tags: tags,
                solution: solution,
                source: source,
                type: type,
                sortByState: sortByState,
                onTagsFilterChange: function onTagsFilterChange(tags) {
                  return _this2.setState({ tags: tags });
                },
                onSolutionFilterChange: function onSolutionFilterChange(solution) {
                  return _this2.setState({ solution: solution });
                },
                onSourceFilterChange: function onSourceFilterChange(source) {
                  return _this2.setState({ source: source });
                },
                onTypeFilterChange: function onTypeFilterChange(type) {
                  return _this2.setState({ type: type });
                },
                onResetFilters: function onResetFilters() {
                  return _this2.setState({ tags: [], solution: [], source: [], type: [] });
                },
                onSortByChange: function onSortByChange(sortByState) {
                  return _this2.setState({ sortByState: sortByState });
                },
                onImageChange: this.show
              }),
              _react2.default.createElement(_upload2.default, { onClose: this.show })
            ) : null,
            visible && image && image.url ? _react2.default.createElement(
              _antd.Modal,
              {
                visible: true,
                title: 'Bildbereich ausw\xE4hlen',
                onCancel: this.onCancel,
                footer: [_react2.default.createElement(
                  _antd.Select,
                  { defaultValue: '' + (aspect ? aspect.toString() : '0'), style: { width: 150, float: 'left' }, size: 'large', onChange: function onChange(option) {
                      return _this2.setState({ aspect: parseFloat(option, 10) });
                    } },
                  _react2.default.createElement(
                    _antd.Select.Option,
                    { key: '0', value: '0' },
                    'Freie Auswahl'
                  ),
                  _react2.default.createElement(
                    _antd.Select.Option,
                    { key: '1', value: '' + (3 / 2).toString() },
                    'Postkarte 3:2'
                  ),
                  _react2.default.createElement(
                    _antd.Select.Option,
                    { key: '2', value: '' + (2 / 3).toString() },
                    'Portrait 2:3'
                  ),
                  _react2.default.createElement(
                    _antd.Select.Option,
                    { key: '3', value: '1' },
                    'Quadratisch 1:1'
                  ),
                  _react2.default.createElement(
                    _antd.Select.Option,
                    { key: '4', value: '' + (19 / 7).toString() },
                    'Landschaft 19:7'
                  ),
                  _react2.default.createElement(
                    _antd.Select.Option,
                    { key: '5', value: '' + (16 / 9).toString() },
                    'Kino 16:9'
                  )
                ), _react2.default.createElement(
                  _antd.Button,
                  { key: 'back', type: 'ghost', size: 'large', onClick: this.show },
                  'Mediathek'
                ), _react2.default.createElement(
                  _antd.Button,
                  { key: 'submit', type: 'primary', size: 'large', loading: this.state.loading, onClick: this.onOk },
                  'Speichern'
                )]
              },
              _react2.default.createElement(_reactImageCrop2.default, { src: (0, _olymp.cloudinaryUrl)(image.url), onChange: this.onCrop, crop: crop })
            ) : null
          );
        }
      }]);

      return WithImageUpload;
    }(_react.Component);
  };
};