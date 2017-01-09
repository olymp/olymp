'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _range = require('../utils/range');

var _has = require('../utils/has');

var _addBlock = require('../utils/add-block');

var _addBlock2 = _interopRequireDefault(_addBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultNode = options.defaultNode,
      toolbarTypes = options.toolbarTypes,
      toolbarMarks = options.toolbarMarks;

  if (!defaultNode) defaultNode = 'paragraph';
  if (!toolbarTypes) toolbarTypes = [];
  if (!toolbarMarks) toolbarMarks = [];

  return function (Editor) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(SlateToolbarDecorator, _Component);

      function SlateToolbarDecorator() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SlateToolbarDecorator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SlateToolbarDecorator.__proto__ || Object.getPrototypeOf(SlateToolbarDecorator)).call.apply(_ref, [this].concat(args))), _this), _this.onClickBlock = function (e, props) {
          var _this$props = _this.props,
              value = _this$props.value,
              onChange = _this$props.onChange;

          e.preventDefault();
          onChange((0, _addBlock2.default)(value, props, defaultNode));
        }, _this.renderBlockButton = function (props) {
          var value = _this.props.value;

          var isActive = (0, _has.hasBlock)(value, props.type);
          var onMouseDown = function onMouseDown(e) {
            return _this.onClickBlock(e, props);
          };

          return _react2.default.createElement(
            'span',
            { key: props.type, className: 'slate-toolbar-item', onMouseDown: onMouseDown, 'data-active': isActive },
            _react2.default.createElement('i', { className: 'fa fa-' + props.icon })
          );
        }, _this.onClickMark = function (e, type) {
          e.stopPropagation();
          e.preventDefault();
          var value = _this.props.value;


          value = value.transform().toggleMark(type).apply();

          _this.props.onChange(value);
        }, _this.renderMarkButton = function (props) {
          var value = _this.props.value;

          var isActive = (0, _has.hasMark)(value, props.type);
          var onMouseDown = function onMouseDown(e) {
            return _this.onClickMark(e, props);
          };

          return _react2.default.createElement(
            'span',
            { key: props.type, className: 'slate-toolbar-item', onMouseDown: onMouseDown, 'data-active': isActive },
            _react2.default.createElement('i', { className: 'fa fa-' + props.icon })
          );
        }, _this.renderMenu = function () {
          var theToolbarMarks = [].concat(_toConsumableArray(toolbarMarks), _toConsumableArray(_this.props.toolbarMarks));
          var theToolbarTypes = [].concat(_toConsumableArray(toolbarTypes), _toConsumableArray(_this.props.toolbarTypes));
          return _react2.default.createElement(
            'div',
            { className: 'slate-toolbar slate-text-toolbar', ref: function ref(_ref2) {
                return _this.gwRef = _ref2;
              }, key: 'gw-sidebar' },
            theToolbarMarks.map(_this.renderMarkButton),
            theToolbarTypes.map(_this.renderBlockButton)
          );
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(SlateToolbarDecorator, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var menu = this.gwRef;
          var value = this.props.value;

          if (!menu) return;

          if (value.isBlurred || value.isCollapsed) {
            menu.removeAttribute('style');
            return;
          }

          var rect = (0, _range.getVisibleSelectionRect)();
          var parentRect = menu.parentNode.parentNode.getBoundingClientRect();
          var top = rect.top - parentRect.top - menu.offsetHeight;
          var left = rect.left - parentRect.left - menu.offsetWidth / 2 + rect.width / 2 - window.scrollX;
          if (!rect) return;
          menu.style.opacity = 1;
          menu.style.top = top + 'px';
          menu.style.left = left + 'px';
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          this.componentDidMount();
        }
      }, {
        key: 'render',
        value: function render() {
          var children = [].concat(_toConsumableArray(_react.Children.toArray(this.props.children)), [this.renderMenu()]);
          return _react2.default.createElement(Editor, _extends({}, this.props, { children: children }));
        }
      }]);

      return SlateToolbarDecorator;
    }(_react.Component), _class.propTypes = {
      toolbarMarks: _react.PropTypes.array,
      toolbarTypes: _react.PropTypes.array,
      children: _react.PropTypes.node,
      value: _react.PropTypes.object,
      onChange: _react.PropTypes.func
    }, _class.defaultProps = {
      toolbarMarks: [],
      toolbarTypes: [],
      children: []
    }, _temp2;
  };
};