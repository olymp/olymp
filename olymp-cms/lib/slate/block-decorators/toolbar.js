'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPortal = require('react-portal');

var _reactPortal2 = _interopRequireDefault(_reactPortal);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _slate = require('slate');

var _antd = require('antd');

var _lodash = require('lodash');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _upperFirst = require('lodash/upperFirst');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Block) {
    var _class, _temp2;

    var actions = options.actions,
        manual = options.manual,
        remove = options.remove,
        move = options.move,
        type = options.type,
        add = options.add;

    if (!actions) actions = function actions() {
      return [];
    };
    return _temp2 = _class = function (_Component) {
      _inherits(BlockToolbarDecorator, _Component);

      function BlockToolbarDecorator() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BlockToolbarDecorator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BlockToolbarDecorator.__proto__ || Object.getPrototypeOf(BlockToolbarDecorator)).call.apply(_ref, [this].concat(args))), _this), _this.state = { menu: null, modal: {} }, _this.setToolbarPosition = function (rect) {
          var menu = _this.state.menu;

          if (!menu) return;
          if (!rect) return;
          var top = rect.top + window.scrollY - menu.offsetHeight;
          var left = rect.left + window.scrollX - menu.offsetWidth / 2 + rect.width / 2; // eslint-disable-line
          menu.style.opacity = 1;
          menu.style.top = top - 3 + 'px';
          menu.style.left = left + 'px';
        }, _this.onOpen = function (_ref2) {
          var menu = _ref2.firstChild;

          _this.setState({ menu: menu });
        }, _this.onClick = function (action) {
          return function (e) {
            e.preventDefault();
            action();
          };
        }, _this.renderAction = function (props) {
          var toggle = props.toggle,
              type = props.type,
              active = props.active,
              icon = props.icon,
              separated = props.separated,
              options = props.options,
              right = props.right,
              multi = props.multi,
              showModal = props.showModal;
          var modal = _this.state.modal;


          if (options && options.length < 10 && !multi && !showModal) {
            var menu = _react2.default.createElement(
              _antd.Menu,
              { onClick: toggle },
              options.map(function (_ref3) {
                var value = _ref3.value,
                    label = _ref3.label,
                    active = _ref3.active;
                return active ? _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: value, style: { fontWeight: 'bold' } },
                  _react2.default.createElement(_antd.Icon, { type: 'check' }),
                  ' ',
                  label
                ) : _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: value },
                  label
                );
              })
            );

            return _react2.default.createElement(
              _antd.Dropdown,
              { overlay: menu, key: type },
              _react2.default.createElement(
                _antd.Button,
                { key: type, type: 'ghost', size: 'small', className: (0, _classnames2.default)('slate-toolbar-button', { separated: separated, right: right }), 'data-active': active },
                _react2.default.createElement('i', { className: 'fa fa-' + icon }),
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-caret-down' })
              )
            );
          } else if (options) {
            var _ret2 = function () {
              var attributes = void 0;
              var selectedRowKeys = [];
              var data = options.map(function (_ref4) {
                var value = _ref4.value,
                    label = _ref4.label,
                    active = _ref4.active,
                    rest = _objectWithoutProperties(_ref4, ['value', 'label', 'active']);

                attributes = rest;

                if (active) {
                  selectedRowKeys.push(value);
                }

                return _extends({
                  key: value,
                  name: label
                }, rest);
              });
              delete attributes.disabled;
              var columns = Object.keys(attributes).map(function (key) {
                return {
                  title: (0, _upperFirst2.default)(key),
                  dataIndex: key
                };
              });
              var rowSelection = multi ? {
                type: 'select',
                selectedRowKeys: selectedRowKeys,
                onChange: function onChange(selectedRowKeys, selectedRows) {
                  return toggle(selectedRows);
                }
              } : {
                type: 'radio',
                selectedRowKeys: selectedRowKeys,
                onChange: function onChange(selectedRowKeys, selectedRows) {
                  return toggle(selectedRows[0]);
                }
              };
              rowSelection.getCheckboxProps = function (record) {
                return {
                  disabled: record.disabled
                };
              };

              return {
                v: _react2.default.createElement(
                  'div',
                  { key: type },
                  _react2.default.createElement(
                    _antd.Button,
                    { key: type, type: 'ghost', size: 'small', className: (0, _classnames2.default)('slate-toolbar-button', { separated: separated, right: right }), onClick: function onClick() {
                        return _this.setState({ modal: _extends({}, modal, _defineProperty({}, type, true)) });
                      }, 'data-active': active },
                    _react2.default.createElement('i', { className: 'fa fa-' + icon })
                  ),
                  _react2.default.createElement(
                    _antd.Modal,
                    {
                      title: 'Bitte w\xE4hlen',
                      visible: modal[type],
                      onOk: function onOk() {
                        return _this.setState({ modal: _extends({}, modal, _defineProperty({}, type, false)) });
                      },
                      onCancel: function onCancel() {
                        return _this.setState({ modal: _extends({}, modal, _defineProperty({}, type, false)) });
                      }
                    },
                    _react2.default.createElement(_antd.Table, {
                      dataSource: data,
                      columns: [{
                        title: 'Name',
                        dataIndex: 'name'
                      }].concat(_toConsumableArray(columns)),
                      rowSelection: rowSelection,
                      size: 'middle',
                      pagination: false
                    })
                  )
                )
              };
            }();

            if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
          }

          return _react2.default.createElement(
            _antd.Button,
            { key: type, type: 'ghost', size: 'small', className: (0, _classnames2.default)('slate-toolbar-button', { separated: separated, right: right }), onMouseDown: _this.onClick(toggle), 'data-active': active },
            _react2.default.createElement('i', { className: 'fa fa-' + icon })
          );
        }, _this.onChangeType = function (_ref5) {
          var key = _ref5.key;
          var _this$props = _this.props,
              editor = _this$props.editor,
              readOnly = _this$props.readOnly,
              node = _this$props.node,
              state = _this$props.state;

          var blockTypes = editor.props.sidebarTypes || [];
          var newBlock = blockTypes.find(function (_ref6) {
            var type = _ref6.type;
            return type === key;
          }) || node;
          editor.onChange(state.transform().setNodeByKey(node.key, { type: newBlock.type, isVoid: newBlock.isVoid }).apply());
        }, _this.renderToolbar = function () {
          var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _this$props2 = _this.props,
              editor = _this$props2.editor,
              readOnly = _this$props2.readOnly,
              node = _this$props2.node;

          if (readOnly) return null;
          // Get actions from props and from decorator arguments
          var allActions = [].concat(_toConsumableArray(_this.props.actions), _toConsumableArray(actions(_this.props)));
          // Add remove action if (remove = true)
          if (remove) allActions.push(removeAction(_this.props));
          if (add) allActions.push(addAction(_this.props));
          // Add move up/down actions if (move = true)

          if (type === 'fix') {
            var _ret3 = function () {
              var blockTypes = editor.props.sidebarTypes || [];
              var block = blockTypes.find(function (_ref7) {
                var type = _ref7.type;
                return type === node.type;
              }) || node;
              var categories = {};
              var menuItems = [];

              (0, _lodash.sortBy)(blockTypes, ['category', 'label']).forEach(function (_ref8) {
                var type = _ref8.type,
                    label = _ref8.label,
                    category = _ref8.category;

                var element = _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: type },
                  label || type
                );

                if (category) {
                  if (!categories[category]) categories[category] = [];
                  categories[category].push(element);
                } else {
                  menuItems.push(element);
                }
              });

              var menu = _react2.default.createElement(
                _antd.Menu,
                { onClick: _this.onChangeType },
                Object.keys(categories).map(function (key) {
                  return _react2.default.createElement(
                    _antd.Menu.SubMenu,
                    { title: key, key: key },
                    categories[key].map(function (item) {
                      return item;
                    })
                  );
                }),
                menuItems.map(function (item) {
                  return item;
                })
              );
              return {
                v: _react2.default.createElement(
                  'div',
                  { className: 'slate-fix-toolbar', style: styles, contentEditable: false },
                  move && moveActions(_this.props).map(_this.renderAction),
                  _react2.default.createElement(
                    _antd.Dropdown,
                    { overlay: menu },
                    _react2.default.createElement(
                      _antd.Button,
                      { type: 'ghost', size: 'small', className: 'slate-toolbar-type' },
                      block.label || block.type,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-caret-down' })
                    )
                  ),
                  allActions.map(_this.renderAction),
                  _react2.default.createElement('div', { style: { clear: 'both' } })
                )
              };
            }();

            if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
          }
          return _react2.default.createElement(
            _reactPortal2.default,
            { onOpen: _this.onOpen, isOpened: !!allActions.length, key: 'toolbar-0' },
            _react2.default.createElement(
              'div',
              { className: 'slate-toolbar', style: styles },
              allActions.map(function (_ref9) {
                var toggle = _ref9.toggle,
                    type = _ref9.type,
                    active = _ref9.active,
                    icon = _ref9.icon,
                    separated = _ref9.separated;
                return _react2.default.createElement(
                  'span',
                  { key: type, className: (0, _classnames2.default)('slate-toolbar-item', { separated: separated }), onMouseDown: _this.onClick(toggle), 'data-active': active },
                  _react2.default.createElement('i', { className: 'fa fa-' + icon })
                );
              })
            )
          );
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(BlockToolbarDecorator, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (manual) return;
          var rect = _reactDom2.default.findDOMNode(this).getBoundingClientRect();
          this.setToolbarPosition(rect);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          this.componentDidMount();
        }
      }, {
        key: 'render',
        value: function render() {
          var isFocused = this.props.isFocused;

          var children = isFocused && type !== 'fix' ? [].concat(_toConsumableArray(this.props.children), [this.renderToolbar()]) : this.props.children;

          return _react2.default.createElement(Block, _extends({}, this.props, {
            children: children,
            renderToolbar: this.renderToolbar,
            toolbarType: type,
            setToolbarPosition: this.setToolbarPosition
          }));
        }
      }]);

      return BlockToolbarDecorator;
    }(_react.Component), _class.slate = Block.slate, _class.propTypes = {
      isFocused: _react.PropTypes.bool,
      children: _react.PropTypes.node,
      actions: _react.PropTypes.array
    }, _class.defaultProps = {
      actions: []
    }, _temp2;
  };
};

var addAction = function addAction(_ref10) {
  var editor = _ref10.editor,
      state = _ref10.state,
      node = _ref10.node;

  var prev = state.document.getPreviousSibling(node.key);
  var next = state.document.getNextSibling(node.key);
  var first = node.nodes.first();
  var last = node.nodes.last();
  var options = [];
  if (!prev || prev.type !== 'paragraph') options.push({ label: 'Neuer Paragraph darüber', value: '+<<' });else options.push({ label: 'Paragraph darüber löschen', value: '-<<' });

  if (!node.isVoid) {
    if (!first || first.type !== 'paragraph') options.push({ label: 'An Anfang', value: '+<' });else options.push({ label: 'Anfang löschen', value: '-<' });
    if (!last || last.type !== 'paragraph') options.push({ label: 'Ans Ende', value: '+>' });else options.push({ label: 'Ende löschen', value: '->' });
  }

  if (!next || next.type !== 'paragraph') options.push({ label: 'Neuer Paragraph darunter', value: '+>>' });else options.push({ label: 'Paragraph darunter löschen', value: '->>' });
  return {
    type: 'block.add',
    icon: 'paragraph',
    right: true,
    separated: true,
    options: options,
    toggle: function toggle(_ref11) {
      var key = _ref11.key;

      var p = _slate.Raw.deserializeNode({ kind: 'block', type: 'paragraph', nodes: [{ kind: 'text', text: '', ranges: [] }] });
      if (key === '+<<') {
        var parent = state.document.getParent(node.key) || node;
        editor.onChange(state.transform().insertNodeByKey(parent.key, parent.nodes.indexOf(node), p).apply());
      } else if (key === '-<<') {
        editor.onChange(state.transform().removeNodeByKey(prev.key).apply());
      } else if (key === '+>>') {
        var _parent = state.document.getParent(node.key) || node;
        editor.onChange(state.transform().insertNodeByKey(_parent.key, _parent.nodes.indexOf(node) + 1, p).apply());
      } else if (key === '->>') {
        editor.onChange(state.transform().removeNodeByKey(next.key).apply());
      } else if (key === '+<') {
        editor.onChange(state.transform().insertNodeByKey(node.key, 0, p).apply());
      } else if (key === '-<') {
        editor.onChange(state.transform().removeNodeByKey(first.key).apply());
      } else if (key === '+>') {
        editor.onChange(state.transform().insertNodeByKey(node.key, node.nodes.size, p).apply());
      } else if (key === '->') {
        editor.onChange(state.transform().removeNodeByKey(last.key).apply());
      }
    }
  };
};
// Toolbar action to remove a block
var removeAction = function removeAction(_ref12) {
  var editor = _ref12.editor,
      state = _ref12.state,
      node = _ref12.node;
  return {
    type: 'block.remove',
    icon: 'trash-o',
    right: true,
    separated: true,
    toggle: function toggle() {
      var newState = state.transform().unsetSelection();
      editor.onChange(newState.removeNodeByKey(node.key).apply());
    }
  };
};

// Toolbar actions to move a block up/down
var moveActions = function moveActions(_ref13) {
  var editor = _ref13.editor,
      state = _ref13.state,
      node = _ref13.node;
  return [{
    type: 'block.moveUp',
    icon: 'arrow-up',
    right: true,
    separated: true,
    toggle: function toggle() {
      var document = state.document;

      var parent = document.getParent(node.key);
      var index = parent.nodes.indexOf(node) - 1;
      var newState = state.transform().moveNodeByKey(node.key, parent.key, index === -1 ? 0 : index).apply();
      editor.onChange(newState);
    }
  }, {
    type: 'block.moveDown',
    icon: 'arrow-down',
    right: true,
    toggle: function toggle() {
      var document = state.document;

      var parent = document.getParent(node.key);
      var index = parent.nodes.indexOf(node) + 1;
      var newState = state.transform().moveNodeByKey(node.key, parent.key, index > parent.nodes.count() ? parent.nodes.count() : index).apply();
      editor.onChange(newState);
    }
  }];
};