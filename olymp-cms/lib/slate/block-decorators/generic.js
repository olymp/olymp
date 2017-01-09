'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGenericBlock = exports.GenericBlock = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _align = require('./align');

var _align2 = _interopRequireDefault(_align);

var _toolbar = require('./toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _resize = require('./resize');

var _resize2 = _interopRequireDefault(_resize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GenericBlock = exports.GenericBlock = function GenericBlock(props) {
  var attributes = props.attributes,
      getData = props.getData,
      isFocused = props.isFocused,
      children = props.children,
      renderToolbar = props.renderToolbar,
      readOnly = props.readOnly,
      toolbarStyle = props.toolbarStyle,
      className = props.className,
      toolbarType = props.toolbarType,
      style = props.style;

  if (toolbarType === 'fix') {
    return _react2.default.createElement(
      'div',
      _extends({}, attributes, { className: className, 'data-block-active': !readOnly, style: _extends({ position: 'relative' }, style || {}) }),
      renderToolbar(toolbarStyle),
      children
    );
  }
  return _react2.default.createElement(
    'div',
    _extends({}, attributes, { className: className, 'data-block-active': isFocused, style: _extends({ position: 'relative' }, style || {}) }),
    children
  );
};

var useGenericBlock = exports.useGenericBlock = function useGenericBlock(_ref) {
  var label = _ref.label,
      category = _ref.category,
      _ref$editable = _ref.editable,
      editable = _ref$editable === undefined ? true : _ref$editable,
      align = _ref.align,
      props = _ref.props,
      resize = _ref.resize,
      actions = _ref.actions,
      defaultNodes = _ref.defaultNodes,
      _ref$remove = _ref.remove,
      remove = _ref$remove === undefined ? true : _ref$remove,
      _ref$move = _ref.move,
      move = _ref$move === undefined ? true : _ref$move,
      _ref$add = _ref.add,
      add = _ref$add === undefined ? true : _ref$add;
  return function (WrappedComponent) {
    var component = function component(props) {
      return _react2.default.createElement(WrappedComponent, props);
    };
    component = (0, _toolbar2.default)({ actions: actions, type: 'fix', remove: remove, move: move, add: add })(component);

    if (resize && (typeof resize === 'undefined' ? 'undefined' : _typeof(resize)) === 'object') component = (0, _resize2.default)(resize)(component);else if (resize) component = (0, _resize2.default)({})(component);

    if (align && (typeof align === 'undefined' ? 'undefined' : _typeof(align)) === 'object') component = (0, _align2.default)(align)(component);else if (align) component = (0, _align2.default)({})(component);

    component = (0, _base2.default)({ label: label, category: category, isVoid: !editable, props: props, defaultNodes: defaultNodes })(component);
    return component;
  };
};