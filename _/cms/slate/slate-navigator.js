'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _tree = require('antd/lib/tree');

var _tree2 = _interopRequireDefault(_tree);

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _sortBy2 = require('lodash/sortBy');

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/menu/style');

require('antd/lib/tree/style');

require('antd/lib/dropdown/style');

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _reactFela = require('react-fela');

var _slate = require('slate');

var _slatePlainSerializer = require('slate-plain-serializer');

var _slatePlainSerializer2 = _interopRequireDefault(_slatePlainSerializer);

var _getSchema = require('./get-schema');

var _getSchema2 = _interopRequireDefault(_getSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getMenuItems = function getMenuItems(schema, prefix) {
  prefix = prefix ? prefix + ':' : '';
  var types = Object.keys(schema.nodes).map(function (key) {
    return _extends({}, schema.nodes[key].slate, {
      type: key
    });
  });
  var categories = {};
  var menuItems = [];
  (0, _sortBy3.default)(types, ['category', 'label']).forEach(function (action) {
    var item = _react2.default.createElement(
      _menu2.default.Item,
      { key: '' + prefix + action.type },
      action.label || action.type
    );
    if (action.category) {
      if (!categories[action.category]) {
        categories[action.category] = [];
      }
      categories[action.category].push(item);
    } else {
      menuItems.push(item);
    }
  });
  return [].concat(_toConsumableArray(Object.keys(categories).map(function (key) {
    return _react2.default.createElement(
      _menu2.default.SubMenu,
      { key: key, title: key },
      categories[key]
    );
  })), menuItems, [_react2.default.createElement(
    _menu2.default.Item,
    { key: prefix + 'paragraph' },
    'Paragraph'
  )]);
};

var _ref3 = _react2.default.createElement(
  _menu2.default.Item,
  { key: 'pre' },
  _react2.default.createElement(
    'span',
    null,
    'Seite'
  )
);

var _ref4 = _react2.default.createElement(
  _menu2.default.Item,
  { key: 'post' },
  _react2.default.createElement(
    'span',
    null,
    'Seite'
  )
);

var _ref5 = _react2.default.createElement(_menu2.default.Divider, { key: 'div' });

var BlockMenu = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    borderRadius: '50%',
    size: 23,
    textAlign: 'center',
    marginLeft: 3,
    '> i': {
      color: theme.dark3,
      margin: '0 !important'
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      type = _ref2.type,
      onClick = _ref2.onClick,
      schema = _ref2.schema;
  return _react2.default.createElement(
    _dropdown2.default,
    {
      overlay: _react2.default.createElement(
        _menu2.default,
        { onClick: onClick },
        _react2.default.createElement(
          _menu2.default.SubMenu,
          { key: 'sub1', title: 'Davor einf\xFCgen' },
          _ref3,
          getMenuItems(schema, 'before')
        ),
        _react2.default.createElement(
          _menu2.default.SubMenu,
          { key: 'sub2', title: 'Danach einf\xFCgen' },
          _ref4,
          getMenuItems(schema, 'after')
        ),
        _ref5,
        getMenuItems(schema, 'add')
      )
    },
    _react2.default.createElement(
      'a',
      { className: className, onClick: onClick },
      _react2.default.createElement(_icon2.default, { type: type })
    )
  );
}, function (p) {
  return Object.keys(p);
});

var _ref8 = _react2.default.createElement(
  _menu2.default.Item,
  { key: 'duplicate' },
  _react2.default.createElement(
    'span',
    null,
    'Duplizieren'
  )
);

var _ref9 = _react2.default.createElement(
  _menu2.default.Item,
  { key: 'delete' },
  _react2.default.createElement(
    'span',
    null,
    'L\xF6schen'
  )
);

var _ref10 = _react2.default.createElement(
  _menu2.default.Item,
  { key: 'unwrap' },
  _react2.default.createElement(
    'span',
    null,
    'Entpacken'
  )
);

var _ref11 = _react2.default.createElement(
  _menu2.default.Item,
  { key: 'cut' },
  _react2.default.createElement(
    'span',
    null,
    'Ausschneiden'
  )
);

var _ref12 = _react2.default.createElement(
  _menu2.default.Item,
  { key: 'copy' },
  _react2.default.createElement(
    'span',
    null,
    'Kopieren'
  )
);

var ChangeBlock = (0, _reactFela.createComponent)(function (_ref6) {
  var theme = _ref6.theme;
  return {
    borderRadius: '50%',
    size: 23,
    textAlign: 'center',
    marginLeft: 3,
    '> i': {
      color: theme.dark3,
      margin: '0 !important'
    }
  };
}, function (_ref7) {
  var className = _ref7.className,
      type = _ref7.type,
      tooltip = _ref7.tooltip,
      onClick = _ref7.onClick,
      schema = _ref7.schema;
  return _react2.default.createElement(
    _dropdown2.default,
    {
      overlay: _react2.default.createElement(
        _menu2.default,
        { onClick: onClick },
        _react2.default.createElement(
          _menu2.default.SubMenu,
          { title: 'Umwandeln' },
          getMenuItems(schema, 'transform')
        ),
        _react2.default.createElement(
          _menu2.default.SubMenu,
          { title: 'Einpacken' },
          getMenuItems(schema, 'wrap')
        ),
        _ref8,
        _ref9,
        _ref10,
        _ref11,
        _ref12
      )
    },
    _react2.default.createElement(
      'a',
      { className: className, onClick: onClick },
      _react2.default.createElement(_icon2.default, { type: type })
    )
  );
}, function (p) {
  return Object.keys(p);
});

var Pages = (_dec = (0, _recompose.onlyUpdateForKeys)(['base64']), (0, _getSchema2.default)(_class = _dec(_class = function (_Component) {
  _inherits(Pages, _Component);

  function Pages() {
    var _ref13;

    var _temp, _this, _ret;

    _classCallCheck(this, Pages);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref13 = Pages.__proto__ || Object.getPrototypeOf(Pages)).call.apply(_ref13, [this].concat(args))), _this), _this.onDrop = function (info) {
      var value = _this.props.value;

      var dropNode = info.node.props.node;
      var dragNode = info.dragNode.props.node;
      var dropPos = info.node.props.pos.split('-');
      var dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
      // const dragNodesKeys = info.dragNodesKeys;
      if (info.dropToGap) {
        var parent = value.document.getParent(dropNode.key);
        var dropObjIndex = parent.nodes.indexOf(dropNode);
        if (dropPosition === -1) {
          _this.onChange(value.change().moveNodeByKey(dragNode.key, parent.key, dropObjIndex));
        } else {
          _this.onChange(value.change().moveNodeByKey(dragNode.key, parent.key, dropObjIndex - 1));
        }
      } else {
        _this.onChange(value.change().moveNodeByKey(dragNode.key, dropNode.key, 0));
      }
      /* return;
      const { value } = this.props;
      const parent =
        info.dropToGap && info.node.props.parent ? info.node.props.parent : info.node.props.node;
      const node = info.dragNode.props.node;
      const key = node.key; // get real pageId in case of binding
       // Get all IDs of children in order
      const childKeys = (parent.nodes || []).map(child => child.key).filter(x => x !== node.key);
      childKeys.splice(info.dropPosition, 0, node.key);
       // Check if new parent is itself??
      if (parent.key === key) {
      }
      this.onChange(
        value.change().moveNodeByKey(key, parent.key, info.dropPosition < 0 ? 0 : info.dropPosition),
      ); */
    }, _this.getParent = function (tree, levels) {
      var level = levels[0];
      var parent = tree[level];
      levels.shift();

      if (level === undefined) {
        return { id: null, children: [] }; // top-level
      } else if (!parent.children.length || !levels.length) {
        return parent;
      }
      return _this.getParent(parent.children, levels);
    }, _this.onChange = function (change) {
      return _this.props.onChange(change.value);
    }, _this.applyTemplate = function (type) {
      var value = _this.props.value;

      if (type === 'image') {
        _this.onChange(value.change().selectAll().delete().insertNodeByKey(value.document.key, 0, {
          type: 'image',
          kind: 'block',
          isVoid: true
        }).insertNodeByKey(value.document.key, 1, {
          type: 'containerText',
          kind: 'block',
          isVoid: false,
          nodes: [_slate.Text.create('Text')]
        }).focus());
      } else if (type === 'banner') {
        _this.onChange(value.change().selectAll().delete().insertNodeByKey(value.document.key, 0, {
          type: 'banner',
          kind: 'block',
          isVoid: false,
          nodes: [_slate.Block.create({
            type: 'paragraph',
            nodes: [_slate.Text.create('Titel')]
          })]
        }).insertNodeByKey(value.document.key, 1, {
          type: 'containerText',
          kind: 'block',
          isVoid: false,
          nodes: [_slate.Block.create({ type: 'paragraph', nodes: [_slate.Text.create('Text')] })]
        }).focus());
      } else if (type === 'carousel') {
        _this.onChange(value.change().selectAll().delete().insertNodeByKey(value.document.key, 0, {
          type: 'carousel',
          kind: 'block',
          isVoid: true
        }).insertNodeByKey(value.document.key, 1, {
          type: 'banner',
          kind: 'block',
          isVoid: false,
          nodes: [_slate.Block.create({
            type: 'paragraph',
            nodes: [_slate.Text.create('Titel')]
          })]
        }).insertNodeByKey(value.document.key, 2, _slate.Block.create({ type: 'paragraph' })).insertNodeByKey(value.document.key, 3, {
          type: 'containerText',
          kind: 'block',
          isVoid: false,
          nodes: [_slate.Text.create('Text')]
        }).focus());
      }
    }, _this.action = function (node, actionType) {
      var value = _this.props.value;

      if (!actionType) {
        return;
      }
      if (actionType === 'delete') {
        _this.onChange(value.change().removeNodeByKey(node.key));
      } else if (actionType === 'cut' || actionType === 'copy') {
        _this.onChange(value.change().moveToRangeOf(node).focus());
        setTimeout(function () {
          return document.execCommand(actionType);
        }, 1);
      } else if (actionType.indexOf('wrap:') === 0) {
        _this.onChange(value.change().moveToRangeOf(node).wrapBlock(actionType.split(':')[1]));
      } else if (actionType.indexOf('transform:') === 0) {
        _this.onChange(value.change().setNodeByKey(node.key, actionType.split(':')[1]));
      } else if (actionType.indexOf('pre:') === 0) {
        _this.onChange(value.change().insertNodeByKey(node.key, node.nodes.size, {
          type: actionType.split(':')[1],
          kind: 'block'
        }));
      } else if (actionType.indexOf('post:') === 0) {
        _this.onChange(value.change().insertNodeByKey(node.key, node.nodes.size, {
          type: actionType.split(':')[1],
          kind: 'block'
        }));
      } else if (actionType.indexOf('add:') === 0) {
        _this.onChange(value.change().insertNodeByKey(node.key, node.nodes.size, {
          type: actionType.split(':')[1],
          kind: 'block'
        }));
      } else if (actionType === 'unwrap') {
        _this.onChange(value.change().unwrapBlockByKey(node.key));
      }
    }, _this.onClick = function (node) {
      var element = document.querySelector('[data-key="' + node.key + '"]');
      if (element) {
        document.querySelector('[data-key="' + node.key + '"]').scrollIntoView(true);
      }
      var value = _this.props.value;

      _this.onChange(value.change().moveToRangeOf(node).focus());
    }, _this.getItems = function (block, parent) {
      var schema = _this.props.schema;

      if (!block || !block.nodes || !block.nodes.size) {
        return undefined;
      }
      var nodes = block.nodes.map(function (item) {
        var label = void 0;
        if (schema.nodes[item.type]) {
          label = schema.nodes[item.type].slate && schema.nodes[item.type].slate.label || item.type;
        } else if (item.type === 'paragraph') {
          label = 'Paragraph';
        } else if (item.type === 'line') {
          label = 'Zeile';
        } else if (item.type === 'heading-one') {
          label = 'Überschrift 1';
        } else if (item.type === 'heading-two') {
          label = 'Überschrift 2';
        } else if (item.type === 'heading-three') {
          label = 'Überschrift 3';
        } else if (item.type === 'heading-four') {
          label = 'Überschrift 4';
        } else if (item.type === 'heading-five') {
          label = 'Überschrift 5';
        } else if (item.type === 'heading-six') {
          label = 'Überschrift 6';
        } else if (item.type === 'bulleted-list') {
          label = 'Liste';
        } else if (item.type === 'numbered-list') {
          label = 'Nummerierte Liste';
        } else if (item.type === 'bulleted-list-item' || item.type === 'numbered-list-item') {
          label = 'Listenelement';
        } else if (item.kind === 'text') {
          label = 'Text';
          if (!item.text.trim()) {
            // return null;
          }
        } else {
          label = 'Unbekannt';
        }
        return _react2.default.createElement(
          _tree2.default.TreeNode,
          {
            key: item.key,
            node: item,
            parent: parent,
            title: [_react2.default.createElement(
              'a',
              { key: 'link', onClick: function onClick() {
                  return _this.onClick(item);
                } },
              label
            ), _react2.default.createElement(ChangeBlock, {
              key: 'change1',
              onClick: function onClick(_ref14) {
                var key = _ref14.key;
                return _this.action(item, key);
              },
              type: 'down',
              schema: schema
            }), _react2.default.createElement(BlockMenu, {
              key: 'change2',
              onClick: function onClick(_ref15) {
                var key = _ref15.key;
                return _this.action(item, key);
              },
              type: 'plus',
              schema: schema
            })]
          },
          _this.getItems(item, block)
        );
      }).filter(function (x) {
        return x;
      });

      if (!nodes.size) {
        return undefined;
      }
      return nodes;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pages, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          selected = _props.selected;

      if (!value.document.text) {
        return _react2.default.createElement(
          _tree2.default,
          null,
          _react2.default.createElement(_tree2.default.TreeNode, {
            key: 'image',
            title: _react2.default.createElement(
              'a',
              { key: 'link', onClick: function onClick() {
                  return _this2.applyTemplate('image');
                } },
              'Bild + Text'
            )
          }),
          _react2.default.createElement(_tree2.default.TreeNode, {
            key: 'banner',
            title: _react2.default.createElement(
              'a',
              { key: 'link', onClick: function onClick() {
                  return _this2.applyTemplate('banner');
                } },
              'Banner + Text'
            )
          }),
          _react2.default.createElement(_tree2.default.TreeNode, {
            key: 'carousel',
            title: _react2.default.createElement(
              'a',
              { key: 'link', onClick: function onClick() {
                  return _this2.applyTemplate('carousel');
                } },
              'Bilder-Karusell + Text'
            )
          })
        );
      }
      return _react2.default.createElement(
        _tree2.default,
        {
          selectedKeys: selected,
          draggable: true,
          className: 'draggable-tree'
          // defaultExpandedKeys={items.filter((x, i) => i === 0).map(item => item.id || item.pathname)}
          , onDragEnter: this.onDragEnter,
          onDrop: this.onDrop
        },
        this.getItems(value.document)
      );
    }
  }]);

  return Pages;
}(_react.Component)) || _class) || _class);

Pages.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.object),
  selected: _propTypes2.default.arrayOf(_propTypes2.default.string)
};
Pages.defaultProps = {
  value: _slatePlainSerializer2.default.deserialize(''),
  items: [],
  selected: []
};
exports.default = Pages;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3NsYXRlLW5hdmlnYXRvci5lczYiXSwibmFtZXMiOlsiZ2V0TWVudUl0ZW1zIiwic2NoZW1hIiwicHJlZml4IiwidHlwZXMiLCJPYmplY3QiLCJrZXlzIiwibm9kZXMiLCJtYXAiLCJrZXkiLCJzbGF0ZSIsInR5cGUiLCJjYXRlZ29yaWVzIiwibWVudUl0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJhY3Rpb24iLCJsYWJlbCIsImNhdGVnb3J5IiwicHVzaCIsIkJsb2NrTWVudSIsInRoZW1lIiwiYm9yZGVyUmFkaXVzIiwic2l6ZSIsInRleHRBbGlnbiIsIm1hcmdpbkxlZnQiLCJjb2xvciIsImRhcmszIiwibWFyZ2luIiwiY2xhc3NOYW1lIiwib25DbGljayIsInAiLCJDaGFuZ2VCbG9jayIsInRvb2x0aXAiLCJQYWdlcyIsIm9uRHJvcCIsInZhbHVlIiwicHJvcHMiLCJkcm9wTm9kZSIsImluZm8iLCJub2RlIiwiZHJhZ05vZGUiLCJkcm9wUG9zIiwicG9zIiwic3BsaXQiLCJkcm9wUG9zaXRpb24iLCJOdW1iZXIiLCJsZW5ndGgiLCJkcm9wVG9HYXAiLCJwYXJlbnQiLCJkb2N1bWVudCIsImdldFBhcmVudCIsImRyb3BPYmpJbmRleCIsImluZGV4T2YiLCJvbkNoYW5nZSIsImNoYW5nZSIsIm1vdmVOb2RlQnlLZXkiLCJ0cmVlIiwibGV2ZWxzIiwibGV2ZWwiLCJzaGlmdCIsInVuZGVmaW5lZCIsImlkIiwiY2hpbGRyZW4iLCJhcHBseVRlbXBsYXRlIiwic2VsZWN0QWxsIiwiZGVsZXRlIiwiaW5zZXJ0Tm9kZUJ5S2V5Iiwia2luZCIsImlzVm9pZCIsImNyZWF0ZSIsImZvY3VzIiwiYWN0aW9uVHlwZSIsInJlbW92ZU5vZGVCeUtleSIsIm1vdmVUb1JhbmdlT2YiLCJzZXRUaW1lb3V0IiwiZXhlY0NvbW1hbmQiLCJ3cmFwQmxvY2siLCJzZXROb2RlQnlLZXkiLCJ1bndyYXBCbG9ja0J5S2V5IiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxJbnRvVmlldyIsImdldEl0ZW1zIiwiYmxvY2siLCJ0ZXh0IiwidHJpbSIsImZpbHRlciIsIngiLCJzZWxlY3RlZCIsIm9uRHJhZ0VudGVyIiwicHJvcFR5cGVzIiwiaXRlbXMiLCJhcnJheU9mIiwib2JqZWN0Iiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwiZGVzZXJpYWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQW9CO0FBQ3ZDQSxXQUFTQSxTQUFZQSxNQUFaLFNBQXdCLEVBQWpDO0FBQ0EsTUFBTUMsUUFBUUMsT0FBT0MsSUFBUCxDQUFZSixPQUFPSyxLQUFuQixFQUEwQkMsR0FBMUIsQ0FBOEI7QUFBQSx3QkFDdkNOLE9BQU9LLEtBQVAsQ0FBYUUsR0FBYixFQUFrQkMsS0FEcUI7QUFFMUNDLFlBQU1GO0FBRm9DO0FBQUEsR0FBOUIsQ0FBZDtBQUlBLE1BQU1HLGFBQWEsRUFBbkI7QUFDQSxNQUFNQyxZQUFZLEVBQWxCO0FBQ0Esd0JBQU9ULEtBQVAsRUFBYyxDQUFDLFVBQUQsRUFBYSxPQUFiLENBQWQsRUFBcUNVLE9BQXJDLENBQTZDLGtCQUFVO0FBQ3JELFFBQU1DLE9BQ0o7QUFBQSxxQkFBTSxJQUFOO0FBQUEsUUFBVyxVQUFRWixNQUFSLEdBQWlCYSxPQUFPTCxJQUFuQztBQUNHSyxhQUFPQyxLQUFQLElBQWdCRCxPQUFPTDtBQUQxQixLQURGO0FBS0EsUUFBSUssT0FBT0UsUUFBWCxFQUFxQjtBQUNuQixVQUFJLENBQUNOLFdBQVdJLE9BQU9FLFFBQWxCLENBQUwsRUFBa0M7QUFDaENOLG1CQUFXSSxPQUFPRSxRQUFsQixJQUE4QixFQUE5QjtBQUNEO0FBQ0ROLGlCQUFXSSxPQUFPRSxRQUFsQixFQUE0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VixDQUFrQixvQkFBVUMsTUFBNUIsQ0FEUztBQUVoQkwsWUFBVSxvQkFBVUksT0FBVixDQUFrQixvQkFBVUUsTUFBNUI7QUFGTSxDQUFsQjtBQUlBN0QsTUFBTThELFlBQU4sR0FBcUI7QUFDbkI1RCxTQUFPLCtCQUFNNkQsV0FBTixDQUFrQixFQUFsQixDQURZO0FBRW5CTCxTQUFPLEVBRlk7QUFHbkJILFlBQVU7QUFIUyxDQUFyQjtrQkFLZXZELEsiLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvc2xhdGUtbmF2aWdhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBvbmx5VXBkYXRlRm9yS2V5cyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IEljb24sIERyb3Bkb3duLCBNZW51LCBUcmVlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBCbG9jaywgVGV4dCB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IHNvcnRCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUGxhaW4gZnJvbSAnc2xhdGUtcGxhaW4tc2VyaWFsaXplcic7XG5pbXBvcnQgZ2V0U2NoZW1hIGZyb20gJy4vZ2V0LXNjaGVtYSc7XG5cbmNvbnN0IGdldE1lbnVJdGVtcyA9IChzY2hlbWEsIHByZWZpeCkgPT4ge1xuICBwcmVmaXggPSBwcmVmaXggPyBgJHtwcmVmaXh9OmAgOiAnJztcbiAgY29uc3QgdHlwZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEubm9kZXMpLm1hcChrZXkgPT4gKHtcbiAgICAuLi5zY2hlbWEubm9kZXNba2V5XS5zbGF0ZSxcbiAgICB0eXBlOiBrZXksXG4gIH0pKTtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IHt9O1xuICBjb25zdCBtZW51SXRlbXMgPSBbXTtcbiAgc29ydEJ5KHR5cGVzLCBbJ2NhdGVnb3J5JywgJ2xhYmVsJ10pLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICBjb25zdCBpdGVtID0gKFxuICAgICAgPE1lbnUuSXRlbSBrZXk9e2Ake3ByZWZpeH0ke2FjdGlvbi50eXBlfWB9PlxuICAgICAgICB7YWN0aW9uLmxhYmVsIHx8IGFjdGlvbi50eXBlfVxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgKTtcbiAgICBpZiAoYWN0aW9uLmNhdGVnb3J5KSB7XG4gICAgICBpZiAoIWNhdGVnb3JpZXNbYWN0aW9uLmNhdGVnb3J5XSkge1xuICAgICAgICBjYXRlZ29yaWVzW2FjdGlvbi5jYXRlZ29yeV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGNhdGVnb3JpZXNbYWN0aW9uLmNhdGVnb3J5XS5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51SXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gW1xuICAgIC4uLk9iamVjdC5rZXlzKGNhdGVnb3JpZXMpLm1hcChrZXkgPT4gKFxuICAgICAgPE1lbnUuU3ViTWVudSBrZXk9e2tleX0gdGl0bGU9e2tleX0+XG4gICAgICAgIHtjYXRlZ29yaWVzW2tleV19XG4gICAgICA8L01lbnUuU3ViTWVudT5cbiAgICApKSxcbiAgICAuLi5tZW51SXRlbXMsXG4gICAgPE1lbnUuSXRlbSBrZXk9e2Ake3ByZWZpeH1wYXJhZ3JhcGhgfT5QYXJhZ3JhcGg8L01lbnUuSXRlbT4sXG4gIF07XG59O1xuXG5jb25zdCBCbG9ja01lbnUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBzaXplOiAyMyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG1hcmdpbkxlZnQ6IDMsXG4gICAgJz4gaSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5kYXJrMyxcbiAgICAgIG1hcmdpbjogJzAgIWltcG9ydGFudCcsXG4gICAgfSxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgdHlwZSwgb25DbGljaywgc2NoZW1hIH0pID0+IChcbiAgICA8RHJvcGRvd25cbiAgICAgIG92ZXJsYXk9e1xuICAgICAgICA8TWVudSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cInN1YjFcIiB0aXRsZT1cIkRhdm9yIGVpbmbDvGdlblwiPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJwcmVcIj5cbiAgICAgICAgICAgICAgPHNwYW4+U2VpdGU8L3NwYW4+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIHtnZXRNZW51SXRlbXMoc2NoZW1hLCAnYmVmb3JlJyl9XG4gICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJzdWIyXCIgdGl0bGU9XCJEYW5hY2ggZWluZsO8Z2VuXCI+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInBvc3RcIj5cbiAgICAgICAgICAgICAgPHNwYW4+U2VpdGU8L3NwYW4+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIHtnZXRNZW51SXRlbXMoc2NoZW1hLCAnYWZ0ZXInKX1cbiAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICA8TWVudS5EaXZpZGVyIGtleT1cImRpdlwiIC8+XG4gICAgICAgICAge2dldE1lbnVJdGVtcyhzY2hlbWEsICdhZGQnKX1cbiAgICAgICAgPC9NZW51PlxuICAgICAgfVxuICAgID5cbiAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgPEljb24gdHlwZT17dHlwZX0gLz5cbiAgICAgIDwvYT5cbiAgICA8L0Ryb3Bkb3duPlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbmNvbnN0IENoYW5nZUJsb2NrID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgc2l6ZTogMjMsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtYXJnaW5MZWZ0OiAzLFxuICAgICc+IGknOiB7XG4gICAgICBjb2xvcjogdGhlbWUuZGFyazMsXG4gICAgICBtYXJnaW46ICcwICFpbXBvcnRhbnQnLFxuICAgIH0sXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIHR5cGUsIHRvb2x0aXAsIG9uQ2xpY2ssIHNjaGVtYSB9KSA9PiAoXG4gICAgPERyb3Bkb3duXG4gICAgICBvdmVybGF5PXtcbiAgICAgICAgPE1lbnUgb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgPE1lbnUuU3ViTWVudSB0aXRsZT1cIlVtd2FuZGVsblwiPlxuICAgICAgICAgICAge2dldE1lbnVJdGVtcyhzY2hlbWEsICd0cmFuc2Zvcm0nKX1cbiAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICA8TWVudS5TdWJNZW51IHRpdGxlPVwiRWlucGFja2VuXCI+XG4gICAgICAgICAgICB7Z2V0TWVudUl0ZW1zKHNjaGVtYSwgJ3dyYXAnKX1cbiAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImR1cGxpY2F0ZVwiPlxuICAgICAgICAgICAgPHNwYW4+RHVwbGl6aWVyZW48L3NwYW4+XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJkZWxldGVcIj5cbiAgICAgICAgICAgIDxzcGFuPkzDtnNjaGVuPC9zcGFuPlxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwidW53cmFwXCI+XG4gICAgICAgICAgICA8c3Bhbj5FbnRwYWNrZW48L3NwYW4+XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjdXRcIj5cbiAgICAgICAgICAgIDxzcGFuPkF1c3NjaG5laWRlbjwvc3Bhbj5cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvcHlcIj5cbiAgICAgICAgICAgIDxzcGFuPktvcGllcmVuPC9zcGFuPlxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8L01lbnU+XG4gICAgICB9XG4gICAgPlxuICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICA8SWNvbiB0eXBlPXt0eXBlfSAvPlxuICAgICAgPC9hPlxuICAgIDwvRHJvcGRvd24+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5AZ2V0U2NoZW1hXG5Ab25seVVwZGF0ZUZvcktleXMoWydiYXNlNjQnXSlcbmNsYXNzIFBhZ2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgb25Ecm9wID0gaW5mbyA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkcm9wTm9kZSA9IGluZm8ubm9kZS5wcm9wcy5ub2RlO1xuICAgIGNvbnN0IGRyYWdOb2RlID0gaW5mby5kcmFnTm9kZS5wcm9wcy5ub2RlO1xuICAgIGNvbnN0IGRyb3BQb3MgPSBpbmZvLm5vZGUucHJvcHMucG9zLnNwbGl0KCctJyk7XG4gICAgY29uc3QgZHJvcFBvc2l0aW9uID1cbiAgICAgIGluZm8uZHJvcFBvc2l0aW9uIC0gTnVtYmVyKGRyb3BQb3NbZHJvcFBvcy5sZW5ndGggLSAxXSk7XG4gICAgLy8gY29uc3QgZHJhZ05vZGVzS2V5cyA9IGluZm8uZHJhZ05vZGVzS2V5cztcbiAgICBpZiAoaW5mby5kcm9wVG9HYXApIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHZhbHVlLmRvY3VtZW50LmdldFBhcmVudChkcm9wTm9kZS5rZXkpO1xuICAgICAgY29uc3QgZHJvcE9iakluZGV4ID0gcGFyZW50Lm5vZGVzLmluZGV4T2YoZHJvcE5vZGUpO1xuICAgICAgaWYgKGRyb3BQb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgICB2YWx1ZS5jaGFuZ2UoKS5tb3ZlTm9kZUJ5S2V5KGRyYWdOb2RlLmtleSwgcGFyZW50LmtleSwgZHJvcE9iakluZGV4KSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgLm1vdmVOb2RlQnlLZXkoZHJhZ05vZGUua2V5LCBwYXJlbnQua2V5LCBkcm9wT2JqSW5kZXggLSAxKSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgdmFsdWUuY2hhbmdlKCkubW92ZU5vZGVCeUtleShkcmFnTm9kZS5rZXksIGRyb3BOb2RlLmtleSwgMCksXG4gICAgICApO1xuICAgIH1cbiAgICAvKiByZXR1cm47XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwYXJlbnQgPVxuICAgICAgaW5mby5kcm9wVG9HYXAgJiYgaW5mby5ub2RlLnByb3BzLnBhcmVudCA/IGluZm8ubm9kZS5wcm9wcy5wYXJlbnQgOiBpbmZvLm5vZGUucHJvcHMubm9kZTtcbiAgICBjb25zdCBub2RlID0gaW5mby5kcmFnTm9kZS5wcm9wcy5ub2RlO1xuICAgIGNvbnN0IGtleSA9IG5vZGUua2V5OyAvLyBnZXQgcmVhbCBwYWdlSWQgaW4gY2FzZSBvZiBiaW5kaW5nXG5cbiAgICAvLyBHZXQgYWxsIElEcyBvZiBjaGlsZHJlbiBpbiBvcmRlclxuICAgIGNvbnN0IGNoaWxkS2V5cyA9IChwYXJlbnQubm9kZXMgfHwgW10pLm1hcChjaGlsZCA9PiBjaGlsZC5rZXkpLmZpbHRlcih4ID0+IHggIT09IG5vZGUua2V5KTtcbiAgICBjaGlsZEtleXMuc3BsaWNlKGluZm8uZHJvcFBvc2l0aW9uLCAwLCBub2RlLmtleSk7XG5cbiAgICAvLyBDaGVjayBpZiBuZXcgcGFyZW50IGlzIGl0c2VsZj8/XG4gICAgaWYgKHBhcmVudC5rZXkgPT09IGtleSkge1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlKFxuICAgICAgdmFsdWUuY2hhbmdlKCkubW92ZU5vZGVCeUtleShrZXksIHBhcmVudC5rZXksIGluZm8uZHJvcFBvc2l0aW9uIDwgMCA/IDAgOiBpbmZvLmRyb3BQb3NpdGlvbiksXG4gICAgKTsgKi9cbiAgfTtcblxuICBnZXRQYXJlbnQgPSAodHJlZSwgbGV2ZWxzKSA9PiB7XG4gICAgY29uc3QgbGV2ZWwgPSBsZXZlbHNbMF07XG4gICAgY29uc3QgcGFyZW50ID0gdHJlZVtsZXZlbF07XG4gICAgbGV2ZWxzLnNoaWZ0KCk7XG5cbiAgICBpZiAobGV2ZWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHsgaWQ6IG51bGwsIGNoaWxkcmVuOiBbXSB9OyAvLyB0b3AtbGV2ZWxcbiAgICB9IGVsc2UgaWYgKCFwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIHx8ICFsZXZlbHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRQYXJlbnQocGFyZW50LmNoaWxkcmVuLCBsZXZlbHMpO1xuICB9O1xuXG4gIG9uQ2hhbmdlID0gY2hhbmdlID0+IHRoaXMucHJvcHMub25DaGFuZ2UoY2hhbmdlLnZhbHVlKTtcblxuICBhcHBseVRlbXBsYXRlID0gdHlwZSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgdmFsdWVcbiAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAuc2VsZWN0QWxsKClcbiAgICAgICAgICAuZGVsZXRlKClcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMCwge1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMSwge1xuICAgICAgICAgICAgdHlwZTogJ2NvbnRhaW5lclRleHQnLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogZmFsc2UsXG4gICAgICAgICAgICBub2RlczogW1RleHQuY3JlYXRlKCdUZXh0JyldLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZvY3VzKCksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Jhbm5lcicpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAgICAgLmRlbGV0ZSgpXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDAsIHtcbiAgICAgICAgICAgIHR5cGU6ICdiYW5uZXInLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogZmFsc2UsXG4gICAgICAgICAgICBub2RlczogW1xuICAgICAgICAgICAgICBCbG9jay5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICAgICAgICAgIG5vZGVzOiBbVGV4dC5jcmVhdGUoJ1RpdGVsJyldLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMSwge1xuICAgICAgICAgICAgdHlwZTogJ2NvbnRhaW5lclRleHQnLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogZmFsc2UsXG4gICAgICAgICAgICBub2RlczogW1xuICAgICAgICAgICAgICBCbG9jay5jcmVhdGUoeyB0eXBlOiAncGFyYWdyYXBoJywgbm9kZXM6IFtUZXh0LmNyZWF0ZSgnVGV4dCcpXSB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZm9jdXMoKSxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2Fyb3VzZWwnKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKFxuICAgICAgICB2YWx1ZVxuICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgIC5zZWxlY3RBbGwoKVxuICAgICAgICAgIC5kZWxldGUoKVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAwLCB7XG4gICAgICAgICAgICB0eXBlOiAnY2Fyb3VzZWwnLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAxLCB7XG4gICAgICAgICAgICB0eXBlOiAnYmFubmVyJyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbm9kZXM6IFtcbiAgICAgICAgICAgICAgQmxvY2suY3JlYXRlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICAgICAgICBub2RlczogW1RleHQuY3JlYXRlKCdUaXRlbCcpXSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleShcbiAgICAgICAgICAgIHZhbHVlLmRvY3VtZW50LmtleSxcbiAgICAgICAgICAgIDIsXG4gICAgICAgICAgICBCbG9jay5jcmVhdGUoeyB0eXBlOiAncGFyYWdyYXBoJyB9KSxcbiAgICAgICAgICApXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDMsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjb250YWluZXJUZXh0JyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbm9kZXM6IFtUZXh0LmNyZWF0ZSgnVGV4dCcpXSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5mb2N1cygpLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGFjdGlvbiA9IChub2RlLCBhY3Rpb25UeXBlKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWFjdGlvblR5cGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFjdGlvblR5cGUgPT09ICdkZWxldGUnKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlLmNoYW5nZSgpLnJlbW92ZU5vZGVCeUtleShub2RlLmtleSkpO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gJ2N1dCcgfHwgYWN0aW9uVHlwZSA9PT0gJ2NvcHknKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKFxuICAgICAgICB2YWx1ZVxuICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgIC5tb3ZlVG9SYW5nZU9mKG5vZGUpXG4gICAgICAgICAgLmZvY3VzKCksXG4gICAgICApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZChhY3Rpb25UeXBlKSwgMSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlLmluZGV4T2YoJ3dyYXA6JykgPT09IDApIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgLm1vdmVUb1JhbmdlT2Yobm9kZSlcbiAgICAgICAgICAud3JhcEJsb2NrKGFjdGlvblR5cGUuc3BsaXQoJzonKVsxXSksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZS5pbmRleE9mKCd0cmFuc2Zvcm06JykgPT09IDApIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgIHZhbHVlLmNoYW5nZSgpLnNldE5vZGVCeUtleShub2RlLmtleSwgYWN0aW9uVHlwZS5zcGxpdCgnOicpWzFdKSxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlLmluZGV4T2YoJ3ByZTonKSA9PT0gMCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgdmFsdWUuY2hhbmdlKCkuaW5zZXJ0Tm9kZUJ5S2V5KG5vZGUua2V5LCBub2RlLm5vZGVzLnNpemUsIHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLnNwbGl0KCc6JylbMV0sXG4gICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZS5pbmRleE9mKCdwb3N0OicpID09PSAwKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKFxuICAgICAgICB2YWx1ZS5jaGFuZ2UoKS5pbnNlcnROb2RlQnlLZXkobm9kZS5rZXksIG5vZGUubm9kZXMuc2l6ZSwge1xuICAgICAgICAgIHR5cGU6IGFjdGlvblR5cGUuc3BsaXQoJzonKVsxXSxcbiAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlLmluZGV4T2YoJ2FkZDonKSA9PT0gMCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgdmFsdWUuY2hhbmdlKCkuaW5zZXJ0Tm9kZUJ5S2V5KG5vZGUua2V5LCBub2RlLm5vZGVzLnNpemUsIHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLnNwbGl0KCc6JylbMV0sXG4gICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gJ3Vud3JhcCcpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUuY2hhbmdlKCkudW53cmFwQmxvY2tCeUtleShub2RlLmtleSkpO1xuICAgIH1cbiAgfTtcblxuICBvbkNsaWNrID0gbm9kZSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWtleT1cIiR7bm9kZS5rZXl9XCJdYCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWtleT1cIiR7bm9kZS5rZXl9XCJdYCkuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgfVxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5vbkNoYW5nZShcbiAgICAgIHZhbHVlXG4gICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAubW92ZVRvUmFuZ2VPZihub2RlKVxuICAgICAgICAuZm9jdXMoKSxcbiAgICApO1xuICB9O1xuXG4gIGdldEl0ZW1zID0gKGJsb2NrLCBwYXJlbnQpID0+IHtcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWJsb2NrIHx8ICFibG9jay5ub2RlcyB8fCAhYmxvY2subm9kZXMuc2l6ZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qgbm9kZXMgPSBibG9jay5ub2Rlc1xuICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgbGV0IGxhYmVsO1xuICAgICAgICBpZiAoc2NoZW1hLm5vZGVzW2l0ZW0udHlwZV0pIHtcbiAgICAgICAgICBsYWJlbCA9XG4gICAgICAgICAgICAoc2NoZW1hLm5vZGVzW2l0ZW0udHlwZV0uc2xhdGUgJiZcbiAgICAgICAgICAgICAgc2NoZW1hLm5vZGVzW2l0ZW0udHlwZV0uc2xhdGUubGFiZWwpIHx8XG4gICAgICAgICAgICBpdGVtLnR5cGU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAncGFyYWdyYXBoJykge1xuICAgICAgICAgIGxhYmVsID0gJ1BhcmFncmFwaCc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnbGluZScpIHtcbiAgICAgICAgICBsYWJlbCA9ICdaZWlsZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnaGVhZGluZy1vbmUnKSB7XG4gICAgICAgICAgbGFiZWwgPSAnw5xiZXJzY2hyaWZ0IDEnO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ2hlYWRpbmctdHdvJykge1xuICAgICAgICAgIGxhYmVsID0gJ8OcYmVyc2NocmlmdCAyJztcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdoZWFkaW5nLXRocmVlJykge1xuICAgICAgICAgIGxhYmVsID0gJ8OcYmVyc2NocmlmdCAzJztcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdoZWFkaW5nLWZvdXInKSB7XG4gICAgICAgICAgbGFiZWwgPSAnw5xiZXJzY2hyaWZ0IDQnO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ2hlYWRpbmctZml2ZScpIHtcbiAgICAgICAgICBsYWJlbCA9ICfDnGJlcnNjaHJpZnQgNSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnaGVhZGluZy1zaXgnKSB7XG4gICAgICAgICAgbGFiZWwgPSAnw5xiZXJzY2hyaWZ0IDYnO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ2J1bGxldGVkLWxpc3QnKSB7XG4gICAgICAgICAgbGFiZWwgPSAnTGlzdGUnO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ251bWJlcmVkLWxpc3QnKSB7XG4gICAgICAgICAgbGFiZWwgPSAnTnVtbWVyaWVydGUgTGlzdGUnO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGl0ZW0udHlwZSA9PT0gJ2J1bGxldGVkLWxpc3QtaXRlbScgfHxcbiAgICAgICAgICBpdGVtLnR5cGUgPT09ICdudW1iZXJlZC1saXN0LWl0ZW0nXG4gICAgICAgICkge1xuICAgICAgICAgIGxhYmVsID0gJ0xpc3RlbmVsZW1lbnQnO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ua2luZCA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgbGFiZWwgPSAnVGV4dCc7XG4gICAgICAgICAgaWYgKCFpdGVtLnRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFiZWwgPSAnVW5iZWthbm50JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxUcmVlLlRyZWVOb2RlXG4gICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxuICAgICAgICAgICAgbm9kZT17aXRlbX1cbiAgICAgICAgICAgIHBhcmVudD17cGFyZW50fVxuICAgICAgICAgICAgdGl0bGU9e1tcbiAgICAgICAgICAgICAgPGEga2V5PVwibGlua1wiIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbGljayhpdGVtKX0+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICA8L2E+LFxuICAgICAgICAgICAgICA8Q2hhbmdlQmxvY2tcbiAgICAgICAgICAgICAgICBrZXk9XCJjaGFuZ2UxXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoeyBrZXkgfSkgPT4gdGhpcy5hY3Rpb24oaXRlbSwga2V5KX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZG93blwiXG4gICAgICAgICAgICAgICAgc2NoZW1hPXtzY2hlbWF9XG4gICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICA8QmxvY2tNZW51XG4gICAgICAgICAgICAgICAga2V5PVwiY2hhbmdlMlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHsga2V5IH0pID0+IHRoaXMuYWN0aW9uKGl0ZW0sIGtleSl9XG4gICAgICAgICAgICAgICAgdHlwZT1cInBsdXNcIlxuICAgICAgICAgICAgICAgIHNjaGVtYT17c2NoZW1hfVxuICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuZ2V0SXRlbXMoaXRlbSwgYmxvY2spfVxuICAgICAgICAgIDwvVHJlZS5UcmVlTm9kZT5cbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKHggPT4geCk7XG5cbiAgICBpZiAoIW5vZGVzLnNpemUpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBub2RlcztcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgc2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCF2YWx1ZS5kb2N1bWVudC50ZXh0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHJlZT5cbiAgICAgICAgICA8VHJlZS5UcmVlTm9kZVxuICAgICAgICAgICAga2V5PVwiaW1hZ2VcIlxuICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICA8YSBrZXk9XCJsaW5rXCIgb25DbGljaz17KCkgPT4gdGhpcy5hcHBseVRlbXBsYXRlKCdpbWFnZScpfT5cbiAgICAgICAgICAgICAgICBCaWxkICsgVGV4dFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VHJlZS5UcmVlTm9kZVxuICAgICAgICAgICAga2V5PVwiYmFubmVyXCJcbiAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgPGEga2V5PVwibGlua1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuYXBwbHlUZW1wbGF0ZSgnYmFubmVyJyl9PlxuICAgICAgICAgICAgICAgIEJhbm5lciArIFRleHRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRyZWUuVHJlZU5vZGVcbiAgICAgICAgICAgIGtleT1cImNhcm91c2VsXCJcbiAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgPGEga2V5PVwibGlua1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuYXBwbHlUZW1wbGF0ZSgnY2Fyb3VzZWwnKX0+XG4gICAgICAgICAgICAgICAgQmlsZGVyLUthcnVzZWxsICsgVGV4dFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9UcmVlPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmVlXG4gICAgICAgIHNlbGVjdGVkS2V5cz17c2VsZWN0ZWR9XG4gICAgICAgIGRyYWdnYWJsZVxuICAgICAgICBjbGFzc05hbWU9XCJkcmFnZ2FibGUtdHJlZVwiXG4gICAgICAgIC8vIGRlZmF1bHRFeHBhbmRlZEtleXM9e2l0ZW1zLmZpbHRlcigoeCwgaSkgPT4gaSA9PT0gMCkubWFwKGl0ZW0gPT4gaXRlbS5pZCB8fCBpdGVtLnBhdGhuYW1lKX1cbiAgICAgICAgb25EcmFnRW50ZXI9e3RoaXMub25EcmFnRW50ZXJ9XG4gICAgICAgIG9uRHJvcD17dGhpcy5vbkRyb3B9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLmdldEl0ZW1zKHZhbHVlLmRvY3VtZW50KX1cbiAgICAgIDwvVHJlZT5cbiAgICApO1xuICB9XG59XG5QYWdlcy5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxufTtcblBhZ2VzLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFsdWU6IFBsYWluLmRlc2VyaWFsaXplKCcnKSxcbiAgaXRlbXM6IFtdLFxuICBzZWxlY3RlZDogW10sXG59O1xuZXhwb3J0IGRlZmF1bHQgUGFnZXM7XG4iXX0=
