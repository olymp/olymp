'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPortal = require('react-portal');

var _reactPortal2 = _interopRequireDefault(_reactPortal);

var _antd = require('antd');

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
      toolbarMarks = options.toolbarMarks,
      toolbarActions = options.toolbarActions;

  if (!defaultNode) defaultNode = 'paragraph';
  if (!toolbarActions) toolbarActions = [];
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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SlateToolbarDecorator.__proto__ || Object.getPrototypeOf(SlateToolbarDecorator)).call.apply(_ref, [this].concat(args))), _this), _this.state = { menu: null }, _this.onClickBlock = function (e, props) {
          var _this$props = _this.props,
              value = _this$props.value,
              onChange = _this$props.onChange;

          e.preventDefault();
          onChange((0, _addBlock2.default)(value, props, defaultNode));
        }, _this.renderBlockButton = function (props) {
          return _this.renderOptionButton(props, _has.hasBlock, _this.onClickBlock);
        }, _this.onClickMark = function (e, type) {
          e.stopPropagation();
          e.preventDefault();
          var value = _this.props.value;


          value = value.transform().toggleMark(type).apply();

          _this.props.onChange(value);
        }, _this.renderMarkButton = function (props) {
          return _this.renderOptionButton(props, _has.hasMark, _this.onClickMark);
        }, _this.renderActionButton = function (props) {
          var isActive = props.isActive ? props.isActive(_this.props) : false;
          var isActiveFn = function isActiveFn() {
            return isActive;
          };
          var test = function test(e) {
            return props.onClick(_this.props, isActive, e);
          };

          return _this.renderOptionButton(props, isActiveFn, test);
        }, _this.renderOptionButton = function (props, isActiveFn, onMouseDownFn, label) {
          var value = _this.props.value;
          var type = props.type;

          var isActive = isActiveFn(value, type);
          var onMouseDown = function onMouseDown(e) {
            return onMouseDownFn(e, props);
          };

          if (type && Array.isArray(type)) {
            return _react2.default.createElement(
              _antd.Menu.SubMenu,
              { key: type.join('-'), title: _react2.default.createElement('i', { className: 'fa fa-' + props.icon }) },
              type.map(function (subType, index) {
                var subLabel = props.description && props.description[index] ? props.description[index] : label || subType;

                return _this.renderOptionButton(_extends({}, props, { type: subType }), isActiveFn, onMouseDownFn, subLabel);
              })
            );
          }

          return _react2.default.createElement(
            _antd.Menu.Item,
            { key: type, className: isActive ? 'active' : '', 'data-active': isActive },
            _react2.default.createElement(
              'div',
              { style: { margin: '0 -20px', padding: '0 20px', textAlign: 'center' }, onMouseDown: onMouseDown },
              label || _react2.default.createElement('i', { className: 'fa fa-' + props.icon })
            )
          );
        }, _this.onOpen = function (_ref2) {
          var menu = _ref2.firstChild;

          _this.setState({ menu: menu });
        }, _this.renderMenu = function () {
          var theToolbarMarks = [].concat(_toConsumableArray(toolbarMarks), _toConsumableArray(_this.props.toolbarMarks));
          var theToolbarTypes = [].concat(_toConsumableArray(toolbarTypes), _toConsumableArray(_this.props.toolbarTypes));
          var theToolbarActions = [].concat(_toConsumableArray(toolbarActions), _toConsumableArray(_this.props.toolbarActions));
          // const isOpen = editorState.isExpanded && editorState.isFocused;
          return _react2.default.createElement(
            _reactPortal2.default,
            { isOpened: true, onOpen: _this.onOpen, key: 'toolbar-0' },
            _react2.default.createElement(
              _antd.Menu,
              {
                mode: 'horizontal',
                theme: 'dark',
                className: 'slate-toolbar slate-text-toolbar'
              },
              theToolbarMarks.map(_this.renderMarkButton),
              theToolbarTypes.map(_this.renderBlockButton),
              theToolbarActions.map(_this.renderActionButton)
            )
          );
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(SlateToolbarDecorator, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var menu = this.state.menu;
          var value = this.props.value;

          if (!menu) return;

          if (value.isBlurred || value.isCollapsed) {
            menu.removeAttribute('style');
            return;
          }

          var rect = (0, _range.getVisibleSelectionRect)();
          if (!rect) return;
          var top = rect.top + window.scrollY - menu.offsetHeight;
          var left = rect.left + window.scrollX - menu.offsetWidth / 2 + rect.width / 2; // eslint-disable-line
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
      toolbarActions: _react.PropTypes.array,
      children: _react.PropTypes.node,
      value: _react.PropTypes.object,
      onChange: _react.PropTypes.func
    }, _class.defaultProps = {
      toolbarMarks: [],
      toolbarTypes: [],
      toolbarActions: [],
      children: []
    }, _temp2;
  };
};