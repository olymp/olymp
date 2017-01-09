'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _antd = require('antd');

var _range = require('../utils/range');

var _addBlock = require('../utils/add-block');

var _addBlock2 = _interopRequireDefault(_addBlock);

var _has = require('../utils/has');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var sidebarTypes = options.sidebarTypes,
      defaultNode = options.defaultNode;

  if (!defaultNode) defaultNode = 'paragraph';
  if (!sidebarTypes) sidebarTypes = [];

  return function (Editor) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(SlateSidebarDecorator, _Component);

      function SlateSidebarDecorator() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SlateSidebarDecorator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SlateSidebarDecorator.__proto__ || Object.getPrototypeOf(SlateSidebarDecorator)).call.apply(_ref, [this].concat(args))), _this), _this.onClickBlock = function (e, props) {
          var _this$props = _this.props,
              value = _this$props.value,
              onChange = _this$props.onChange;

          e.preventDefault();
          onChange((0, _addBlock2.default)(value, props, _extends({ defaultNode: defaultNode }, _this.props)));
        }, _this.renderButton = function (props) {
          var value = _this.props.value;

          var isActive = (0, _has.hasBlock)(value, props.type);
          var onMouseDown = function onMouseDown(e) {
            return _this.onClickBlock(e, props);
          };

          return _react2.default.createElement(
            _antd.Menu.Item,
            { key: props.type, style: { minWidth: '150px' } },
            _react2.default.createElement(
              'a',
              { href: 'javascript:;', onMouseDown: onMouseDown, 'data-active': isActive, style: { display: 'block' } },
              props.icon ? _react2.default.createElement('i', { className: 'fa fa-' + props.icon }) : null,
              props.icon ? ' ' : null,
              props.label || props.type
            )
          );
        }, _this.renderSidebar = function () {
          var theSidebarTypes = [].concat(_toConsumableArray(sidebarTypes), _toConsumableArray(_this.props.sidebarTypes));
          var categories = {};
          var menuItems = [];

          (0, _lodash.sortBy)(theSidebarTypes, ['category', 'label']).forEach(function (x) {
            if (x.category) {
              if (!categories[x.category]) categories[x.category] = [];
              categories[x.category].push(_this.renderButton(x));
            } else {
              menuItems.push(_this.renderButton(x));
            }
          });

          var menu = _react2.default.createElement(
            _antd.Menu,
            null,
            Object.keys(categories).map(function (key) {
              return _react2.default.createElement(
                _antd.Menu.SubMenu,
                { title: key, key: key },
                categories[key].map(function (x) {
                  return x;
                })
              );
            }),
            _react2.default.createElement(_antd.Menu.Divider, null),
            menuItems.map(function (x) {
              return x;
            })
          );

          return _react2.default.createElement(
            'div',
            { className: 'slate-sidebar', ref: function ref(_ref2) {
                return _this.gwRef = _ref2;
              }, key: 'gw-sidebar' },
            _react2.default.createElement(
              _antd.Dropdown,
              { overlay: menu },
              _react2.default.createElement(_antd.Icon, { type: 'plus', className: 'slate-sidebar-icon' })
            )
          );
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(SlateSidebarDecorator, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var sideBarMenu = this.gwRef;
          var value = this.props.value;

          if (!sideBarMenu) return;

          if (value.isBlurred || !value.isCollapsed) {
            sideBarMenu.removeAttribute('style');
            return;
          }

          var rect = (0, _range.getCollapsedClientRect)();
          if (!rect) {
            sideBarMenu.style.opacity = 0;
            sideBarMenu.style.top = '-10000px';
            sideBarMenu.style.left = '-10000px';
            return;
          }
          var parentRect = sideBarMenu.parentNode.parentNode.getBoundingClientRect();
          var top = rect.top - parentRect.top - sideBarMenu.offsetHeight / 2 + rect.height / 2;
          var left = rect.left - parentRect.left - sideBarMenu.offsetWidth;

          sideBarMenu.style.opacity = 1;
          //const top = rect.top + window.scrollY - sideBarMenu.offsetHeight / 2 + rect.height / 2; // eslint-disable-line
          //const left = (rect.left + window.scrollX) - sideBarMenu.offsetWidth;
          sideBarMenu.style.top = top + 'px';
          sideBarMenu.style.left = left + 'px';
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          this.componentDidMount();
        }
      }, {
        key: 'render',
        value: function render() {
          var children = this.props.readOnly ? this.props.children : [].concat(_toConsumableArray(_react.Children.toArray(this.props.children)), [this.renderSidebar()]);
          return _react2.default.createElement(
            Editor,
            this.props,
            children
          );
        }
      }]);

      return SlateSidebarDecorator;
    }(_react.Component), _class.propTypes = {
      sidebarTypes: _react.PropTypes.array,
      children: _react.PropTypes.node,
      value: _react.PropTypes.object,
      onChange: _react.PropTypes.func
    }, _class.defaultProps = {
      sidebarTypes: [],
      children: []
    }, _temp2;
  };
};