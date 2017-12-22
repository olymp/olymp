import 'antd/lib/menu/style';
import _Menu17 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu16 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu15 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu14 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu13 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu12 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu11 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu10 from 'antd/lib/menu';
import 'antd/lib/tree/style';
import _Tree6 from 'antd/lib/tree';
import 'antd/lib/tree/style';
import _Tree5 from 'antd/lib/tree';
import 'antd/lib/tree/style';
import _Tree4 from 'antd/lib/tree';
import 'antd/lib/tree/style';
import _Tree3 from 'antd/lib/tree';
import 'antd/lib/tree/style';
import _Tree2 from 'antd/lib/tree';
import 'antd/lib/tree/style';
import _Tree from 'antd/lib/tree';
import 'antd/lib/dropdown/style';
import _Dropdown2 from 'antd/lib/dropdown';
import 'antd/lib/icon/style';
import _Icon2 from 'antd/lib/icon';
import 'antd/lib/menu/style';
import _Menu9 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu8 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu7 from 'antd/lib/menu';
import 'antd/lib/dropdown/style';
import _Dropdown from 'antd/lib/dropdown';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import 'antd/lib/menu/style';
import _Menu6 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu5 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu4 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu3 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu2 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu from 'antd/lib/menu';
import _sortBy from 'lodash/sortBy';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { createComponent } from 'react-fela';

import { Block, Text } from 'slate';

import Plain from 'slate-plain-serializer';
import getSchema from './get-schema';

var getMenuItems = function getMenuItems(schema, prefix) {
  prefix = prefix ? prefix + ':' : '';
  var types = Object.keys(schema.nodes).map(function (key) {
    return _extends({}, schema.nodes[key].slate, {
      type: key
    });
  });
  var categories = {};
  var menuItems = [];
  _sortBy(types, ['category', 'label']).forEach(function (action) {
    var item = React.createElement(
      _Menu.Item,
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
    return React.createElement(
      _Menu2.SubMenu,
      { key: key, title: key },
      categories[key]
    );
  })), menuItems, [React.createElement(
    _Menu3.Item,
    { key: prefix + 'paragraph' },
    'Paragraph'
  )]);
};

var _ref3 = React.createElement(
  _Menu10.Item,
  { key: 'pre' },
  React.createElement(
    'span',
    null,
    'Seite'
  )
);

var _ref4 = React.createElement(
  _Menu11.Item,
  { key: 'post' },
  React.createElement(
    'span',
    null,
    'Seite'
  )
);

var _ref5 = React.createElement(_Menu12.Divider, { key: 'div' });

var BlockMenu = createComponent(function (_ref) {
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
  return React.createElement(
    _Dropdown,
    {
      overlay: React.createElement(
        _Menu6,
        { onClick: onClick },
        React.createElement(
          _Menu4.SubMenu,
          { key: 'sub1', title: 'Davor einf\xFCgen' },
          _ref3,
          getMenuItems(schema, 'before')
        ),
        React.createElement(
          _Menu5.SubMenu,
          { key: 'sub2', title: 'Danach einf\xFCgen' },
          _ref4,
          getMenuItems(schema, 'after')
        ),
        _ref5,
        getMenuItems(schema, 'add')
      )
    },
    React.createElement(
      'a',
      { className: className, onClick: onClick },
      React.createElement(_Icon, { type: type })
    )
  );
}, function (p) {
  return Object.keys(p);
});

var _ref8 = React.createElement(
  _Menu13.Item,
  { key: 'duplicate' },
  React.createElement(
    'span',
    null,
    'Duplizieren'
  )
);

var _ref9 = React.createElement(
  _Menu14.Item,
  { key: 'delete' },
  React.createElement(
    'span',
    null,
    'L\xF6schen'
  )
);

var _ref10 = React.createElement(
  _Menu15.Item,
  { key: 'unwrap' },
  React.createElement(
    'span',
    null,
    'Entpacken'
  )
);

var _ref11 = React.createElement(
  _Menu16.Item,
  { key: 'cut' },
  React.createElement(
    'span',
    null,
    'Ausschneiden'
  )
);

var _ref12 = React.createElement(
  _Menu17.Item,
  { key: 'copy' },
  React.createElement(
    'span',
    null,
    'Kopieren'
  )
);

var ChangeBlock = createComponent(function (_ref6) {
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
  return React.createElement(
    _Dropdown2,
    {
      overlay: React.createElement(
        _Menu9,
        { onClick: onClick },
        React.createElement(
          _Menu7.SubMenu,
          { title: 'Umwandeln' },
          getMenuItems(schema, 'transform')
        ),
        React.createElement(
          _Menu8.SubMenu,
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
    React.createElement(
      'a',
      { className: className, onClick: onClick },
      React.createElement(_Icon2, { type: type })
    )
  );
}, function (p) {
  return Object.keys(p);
});

var Pages = (_dec = onlyUpdateForKeys(['base64']), getSchema(_class = _dec(_class = function (_Component) {
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
          nodes: [Text.create('Text')]
        }).focus());
      } else if (type === 'banner') {
        _this.onChange(value.change().selectAll().delete().insertNodeByKey(value.document.key, 0, {
          type: 'banner',
          kind: 'block',
          isVoid: false,
          nodes: [Block.create({
            type: 'paragraph',
            nodes: [Text.create('Titel')]
          })]
        }).insertNodeByKey(value.document.key, 1, {
          type: 'containerText',
          kind: 'block',
          isVoid: false,
          nodes: [Block.create({ type: 'paragraph', nodes: [Text.create('Text')] })]
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
          nodes: [Block.create({
            type: 'paragraph',
            nodes: [Text.create('Titel')]
          })]
        }).insertNodeByKey(value.document.key, 2, Block.create({ type: 'paragraph' })).insertNodeByKey(value.document.key, 3, {
          type: 'containerText',
          kind: 'block',
          isVoid: false,
          nodes: [Text.create('Text')]
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
        return React.createElement(
          _Tree.TreeNode,
          {
            key: item.key,
            node: item,
            parent: parent,
            title: [React.createElement(
              'a',
              { key: 'link', onClick: function onClick() {
                  return _this.onClick(item);
                } },
              label
            ), React.createElement(ChangeBlock, {
              key: 'change1',
              onClick: function onClick(_ref14) {
                var key = _ref14.key;
                return _this.action(item, key);
              },
              type: 'down',
              schema: schema
            }), React.createElement(BlockMenu, {
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
        return React.createElement(
          _Tree5,
          null,
          React.createElement(_Tree2.TreeNode, {
            key: 'image',
            title: React.createElement(
              'a',
              { key: 'link', onClick: function onClick() {
                  return _this2.applyTemplate('image');
                } },
              'Bild + Text'
            )
          }),
          React.createElement(_Tree3.TreeNode, {
            key: 'banner',
            title: React.createElement(
              'a',
              { key: 'link', onClick: function onClick() {
                  return _this2.applyTemplate('banner');
                } },
              'Banner + Text'
            )
          }),
          React.createElement(_Tree4.TreeNode, {
            key: 'carousel',
            title: React.createElement(
              'a',
              { key: 'link', onClick: function onClick() {
                  return _this2.applyTemplate('carousel');
                } },
              'Bilder-Karusell + Text'
            )
          })
        );
      }
      return React.createElement(
        _Tree6,
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
}(Component)) || _class) || _class);

Pages.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.arrayOf(PropTypes.string)
};
Pages.defaultProps = {
  value: Plain.deserialize(''),
  items: [],
  selected: []
};
export default Pages;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3NsYXRlLW5hdmlnYXRvci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvbmx5VXBkYXRlRm9yS2V5cyIsImNyZWF0ZUNvbXBvbmVudCIsIkJsb2NrIiwiVGV4dCIsIlBsYWluIiwiZ2V0U2NoZW1hIiwiZ2V0TWVudUl0ZW1zIiwic2NoZW1hIiwicHJlZml4IiwidHlwZXMiLCJPYmplY3QiLCJrZXlzIiwibm9kZXMiLCJtYXAiLCJrZXkiLCJzbGF0ZSIsInR5cGUiLCJjYXRlZ29yaWVzIiwibWVudUl0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJhY3Rpb24iLCJsYWJlbCIsImNhdGVnb3J5IiwicHVzaCIsIkJsb2NrTWVudSIsInRoZW1lIiwiYm9yZGVyUmFkaXVzIiwic2l6ZSIsInRleHRBbGlnbiIsIm1hcmdpbkxlZnQiLCJjb2xvciIsImRhcmszIiwibWFyZ2luIiwiY2xhc3NOYW1lIiwib25DbGljayIsInAiLCJDaGFuZ2VCbG9jayIsInRvb2x0aXAiLCJQYWdlcyIsIm9uRHJvcCIsInZhbHVlIiwicHJvcHMiLCJkcm9wTm9kZSIsImluZm8iLCJub2RlIiwiZHJhZ05vZGUiLCJkcm9wUG9zIiwicG9zIiwic3BsaXQiLCJkcm9wUG9zaXRpb24iLCJOdW1iZXIiLCJsZW5ndGgiLCJkcm9wVG9HYXAiLCJwYXJlbnQiLCJkb2N1bWVudCIsImdldFBhcmVudCIsImRyb3BPYmpJbmRleCIsImluZGV4T2YiLCJvbkNoYW5nZSIsImNoYW5nZSIsIm1vdmVOb2RlQnlLZXkiLCJ0cmVlIiwibGV2ZWxzIiwibGV2ZWwiLCJzaGlmdCIsInVuZGVmaW5lZCIsImlkIiwiY2hpbGRyZW4iLCJhcHBseVRlbXBsYXRlIiwic2VsZWN0QWxsIiwiZGVsZXRlIiwiaW5zZXJ0Tm9kZUJ5S2V5Iiwia2luZCIsImlzVm9pZCIsImNyZWF0ZSIsImZvY3VzIiwiYWN0aW9uVHlwZSIsInJlbW92ZU5vZGVCeUtleSIsIm1vdmVUb1JhbmdlT2YiLCJzZXRUaW1lb3V0IiwiZXhlY0NvbW1hbmQiLCJ3cmFwQmxvY2siLCJzZXROb2RlQnlLZXkiLCJ1bndyYXBCbG9ja0J5S2V5IiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxJbnRvVmlldyIsImdldEl0ZW1zIiwiYmxvY2siLCJ0ZXh0IiwidHJpbSIsImZpbHRlciIsIngiLCJzZWxlY3RlZCIsIm9uRHJhZ0VudGVyIiwicHJvcFR5cGVzIiwiaXRlbXMiLCJhcnJheU9mIiwib2JqZWN0Iiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwiZGVzZXJpYWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxpQkFBVCxRQUFrQyxXQUFsQztBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsU0FBU0MsS0FBVCxFQUFnQkMsSUFBaEIsUUFBNEIsT0FBNUI7O0FBRUEsT0FBT0MsS0FBUCxNQUFrQix3QkFBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGNBQXRCOztBQUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsRUFBb0I7QUFDdkNBLFdBQVNBLFNBQVlBLE1BQVosU0FBd0IsRUFBakM7QUFDQSxNQUFNQyxRQUFRQyxPQUFPQyxJQUFQLENBQVlKLE9BQU9LLEtBQW5CLEVBQTBCQyxHQUExQixDQUE4QjtBQUFBLHdCQUN2Q04sT0FBT0ssS0FBUCxDQUFhRSxHQUFiLEVBQWtCQyxLQURxQjtBQUUxQ0MsWUFBTUY7QUFGb0M7QUFBQSxHQUE5QixDQUFkO0FBSUEsTUFBTUcsYUFBYSxFQUFuQjtBQUNBLE1BQU1DLFlBQVksRUFBbEI7QUFDQSxVQUFPVCxLQUFQLEVBQWMsQ0FBQyxVQUFE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TUFBUCxFQUFjLFNBQVM7QUFBQSx5QkFBTSxPQUFLQSxhQUFMLENBQW1CLFVBQW5CLENBQU47QUFBQSxpQkFBdkI7QUFBQTtBQUFBO0FBSEo7QUFqQkYsU0FERjtBQTRCRDtBQUNELGFBQ0U7QUFBQTtBQUFBO0FBQ0Usd0JBQWN5QixRQURoQjtBQUVFLHlCQUZGO0FBR0UscUJBQVU7QUFDVjtBQUpGLFlBS0UsYUFBYSxLQUFLQyxXQUxwQjtBQU1FLGtCQUFRLEtBQUt2RDtBQU5mO0FBUUcsYUFBS2dELFFBQUwsQ0FBYy9DLE1BQU1jLFFBQXBCO0FBUkgsT0FERjtBQVlEOzs7O0VBbFZpQnpELFM7O0FBb1ZwQnlDLE1BQU15RCxTQUFOLEdBQWtCO0FBQ2hCQyxTQUFPbEcsVUFBVW1HLE9BQVYsQ0FBa0JuRyxVQUFVb0csTUFBNUIsQ0FEUztBQUVoQkwsWUFBVS9GLFVBQVVtRyxPQUFWLENBQWtCbkcsVUFBVXFHLE1BQTVCO0FBRk0sQ0FBbEI7QUFJQTdELE1BQU04RCxZQUFOLEdBQXFCO0FBQ25CNUQsU0FBT3JDLE1BQU1rRyxXQUFOLENBQWtCLEVBQWxCLENBRFk7QUFFbkJMLFNBQU8sRUFGWTtBQUduQkgsWUFBVTtBQUhTLENBQXJCO0FBS0EsZUFBZXZELEtBQWYiLCJmaWxlIjoicGFja2FnZXMvc2xhdGUvc2xhdGUtbmF2aWdhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBvbmx5VXBkYXRlRm9yS2V5cyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IEljb24sIERyb3Bkb3duLCBNZW51LCBUcmVlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBCbG9jaywgVGV4dCB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IHNvcnRCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUGxhaW4gZnJvbSAnc2xhdGUtcGxhaW4tc2VyaWFsaXplcic7XG5pbXBvcnQgZ2V0U2NoZW1hIGZyb20gJy4vZ2V0LXNjaGVtYSc7XG5cbmNvbnN0IGdldE1lbnVJdGVtcyA9IChzY2hlbWEsIHByZWZpeCkgPT4ge1xuICBwcmVmaXggPSBwcmVmaXggPyBgJHtwcmVmaXh9OmAgOiAnJztcbiAgY29uc3QgdHlwZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEubm9kZXMpLm1hcChrZXkgPT4gKHtcbiAgICAuLi5zY2hlbWEubm9kZXNba2V5XS5zbGF0ZSxcbiAgICB0eXBlOiBrZXksXG4gIH0pKTtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IHt9O1xuICBjb25zdCBtZW51SXRlbXMgPSBbXTtcbiAgc29ydEJ5KHR5cGVzLCBbJ2NhdGVnb3J5JywgJ2xhYmVsJ10pLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICBjb25zdCBpdGVtID0gKFxuICAgICAgPE1lbnUuSXRlbSBrZXk9e2Ake3ByZWZpeH0ke2FjdGlvbi50eXBlfWB9PlxuICAgICAgICB7YWN0aW9uLmxhYmVsIHx8IGFjdGlvbi50eXBlfVxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgKTtcbiAgICBpZiAoYWN0aW9uLmNhdGVnb3J5KSB7XG4gICAgICBpZiAoIWNhdGVnb3JpZXNbYWN0aW9uLmNhdGVnb3J5XSkge1xuICAgICAgICBjYXRlZ29yaWVzW2FjdGlvbi5jYXRlZ29yeV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGNhdGVnb3JpZXNbYWN0aW9uLmNhdGVnb3J5XS5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51SXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gW1xuICAgIC4uLk9iamVjdC5rZXlzKGNhdGVnb3JpZXMpLm1hcChrZXkgPT4gKFxuICAgICAgPE1lbnUuU3ViTWVudSBrZXk9e2tleX0gdGl0bGU9e2tleX0+XG4gICAgICAgIHtjYXRlZ29yaWVzW2tleV19XG4gICAgICA8L01lbnUuU3ViTWVudT5cbiAgICApKSxcbiAgICAuLi5tZW51SXRlbXMsXG4gICAgPE1lbnUuSXRlbSBrZXk9e2Ake3ByZWZpeH1wYXJhZ3JhcGhgfT5QYXJhZ3JhcGg8L01lbnUuSXRlbT4sXG4gIF07XG59O1xuXG5jb25zdCBCbG9ja01lbnUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBzaXplOiAyMyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG1hcmdpbkxlZnQ6IDMsXG4gICAgJz4gaSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5kYXJrMyxcbiAgICAgIG1hcmdpbjogJzAgIWltcG9ydGFudCcsXG4gICAgfSxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgdHlwZSwgb25DbGljaywgc2NoZW1hIH0pID0+IChcbiAgICA8RHJvcGRvd25cbiAgICAgIG92ZXJsYXk9e1xuICAgICAgICA8TWVudSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cInN1YjFcIiB0aXRsZT1cIkRhdm9yIGVpbmbDvGdlblwiPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJwcmVcIj5cbiAgICAgICAgICAgICAgPHNwYW4+U2VpdGU8L3NwYW4+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIHtnZXRNZW51SXRlbXMoc2NoZW1hLCAnYmVmb3JlJyl9XG4gICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJzdWIyXCIgdGl0bGU9XCJEYW5hY2ggZWluZsO8Z2VuXCI+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInBvc3RcIj5cbiAgICAgICAgICAgICAgPHNwYW4+U2VpdGU8L3NwYW4+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIHtnZXRNZW51SXRlbXMoc2NoZW1hLCAnYWZ0ZXInKX1cbiAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICA8TWVudS5EaXZpZGVyIGtleT1cImRpdlwiIC8+XG4gICAgICAgICAge2dldE1lbnVJdGVtcyhzY2hlbWEsICdhZGQnKX1cbiAgICAgICAgPC9NZW51PlxuICAgICAgfVxuICAgID5cbiAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgPEljb24gdHlwZT17dHlwZX0gLz5cbiAgICAgIDwvYT5cbiAgICA8L0Ryb3Bkb3duPlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbmNvbnN0IENoYW5nZUJsb2NrID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgc2l6ZTogMjMsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtYXJnaW5MZWZ0OiAzLFxuICAgICc+IGknOiB7XG4gICAgICBjb2xvcjogdGhlbWUuZGFyazMsXG4gICAgICBtYXJnaW46ICcwICFpbXBvcnRhbnQnLFxuICAgIH0sXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIHR5cGUsIHRvb2x0aXAsIG9uQ2xpY2ssIHNjaGVtYSB9KSA9PiAoXG4gICAgPERyb3Bkb3duXG4gICAgICBvdmVybGF5PXtcbiAgICAgICAgPE1lbnUgb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgPE1lbnUuU3ViTWVudSB0aXRsZT1cIlVtd2FuZGVsblwiPlxuICAgICAgICAgICAge2dldE1lbnVJdGVtcyhzY2hlbWEsICd0cmFuc2Zvcm0nKX1cbiAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICA8TWVudS5TdWJNZW51IHRpdGxlPVwiRWlucGFja2VuXCI+XG4gICAgICAgICAgICB7Z2V0TWVudUl0ZW1zKHNjaGVtYSwgJ3dyYXAnKX1cbiAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImR1cGxpY2F0ZVwiPlxuICAgICAgICAgICAgPHNwYW4+RHVwbGl6aWVyZW48L3NwYW4+XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJkZWxldGVcIj5cbiAgICAgICAgICAgIDxzcGFuPkzDtnNjaGVuPC9zcGFuPlxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwidW53cmFwXCI+XG4gICAgICAgICAgICA8c3Bhbj5FbnRwYWNrZW48L3NwYW4+XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjdXRcIj5cbiAgICAgICAgICAgIDxzcGFuPkF1c3NjaG5laWRlbjwvc3Bhbj5cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvcHlcIj5cbiAgICAgICAgICAgIDxzcGFuPktvcGllcmVuPC9zcGFuPlxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8L01lbnU+XG4gICAgICB9XG4gICAgPlxuICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICA8SWNvbiB0eXBlPXt0eXBlfSAvPlxuICAgICAgPC9hPlxuICAgIDwvRHJvcGRvd24+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5AZ2V0U2NoZW1hXG5Ab25seVVwZGF0ZUZvcktleXMoWydiYXNlNjQnXSlcbmNsYXNzIFBhZ2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgb25Ecm9wID0gaW5mbyA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkcm9wTm9kZSA9IGluZm8ubm9kZS5wcm9wcy5ub2RlO1xuICAgIGNvbnN0IGRyYWdOb2RlID0gaW5mby5kcmFnTm9kZS5wcm9wcy5ub2RlO1xuICAgIGNvbnN0IGRyb3BQb3MgPSBpbmZvLm5vZGUucHJvcHMucG9zLnNwbGl0KCctJyk7XG4gICAgY29uc3QgZHJvcFBvc2l0aW9uID1cbiAgICAgIGluZm8uZHJvcFBvc2l0aW9uIC0gTnVtYmVyKGRyb3BQb3NbZHJvcFBvcy5sZW5ndGggLSAxXSk7XG4gICAgLy8gY29uc3QgZHJhZ05vZGVzS2V5cyA9IGluZm8uZHJhZ05vZGVzS2V5cztcbiAgICBpZiAoaW5mby5kcm9wVG9HYXApIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHZhbHVlLmRvY3VtZW50LmdldFBhcmVudChkcm9wTm9kZS5rZXkpO1xuICAgICAgY29uc3QgZHJvcE9iakluZGV4ID0gcGFyZW50Lm5vZGVzLmluZGV4T2YoZHJvcE5vZGUpO1xuICAgICAgaWYgKGRyb3BQb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgICB2YWx1ZS5jaGFuZ2UoKS5tb3ZlTm9kZUJ5S2V5KGRyYWdOb2RlLmtleSwgcGFyZW50LmtleSwgZHJvcE9iakluZGV4KSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgLm1vdmVOb2RlQnlLZXkoZHJhZ05vZGUua2V5LCBwYXJlbnQua2V5LCBkcm9wT2JqSW5kZXggLSAxKSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgdmFsdWUuY2hhbmdlKCkubW92ZU5vZGVCeUtleShkcmFnTm9kZS5rZXksIGRyb3BOb2RlLmtleSwgMCksXG4gICAgICApO1xuICAgIH1cbiAgICAvKiByZXR1cm47XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwYXJlbnQgPVxuICAgICAgaW5mby5kcm9wVG9HYXAgJiYgaW5mby5ub2RlLnByb3BzLnBhcmVudCA/IGluZm8ubm9kZS5wcm9wcy5wYXJlbnQgOiBpbmZvLm5vZGUucHJvcHMubm9kZTtcbiAgICBjb25zdCBub2RlID0gaW5mby5kcmFnTm9kZS5wcm9wcy5ub2RlO1xuICAgIGNvbnN0IGtleSA9IG5vZGUua2V5OyAvLyBnZXQgcmVhbCBwYWdlSWQgaW4gY2FzZSBvZiBiaW5kaW5nXG5cbiAgICAvLyBHZXQgYWxsIElEcyBvZiBjaGlsZHJlbiBpbiBvcmRlclxuICAgIGNvbnN0IGNoaWxkS2V5cyA9IChwYXJlbnQubm9kZXMgfHwgW10pLm1hcChjaGlsZCA9PiBjaGlsZC5rZXkpLmZpbHRlcih4ID0+IHggIT09IG5vZGUua2V5KTtcbiAgICBjaGlsZEtleXMuc3BsaWNlKGluZm8uZHJvcFBvc2l0aW9uLCAwLCBub2RlLmtleSk7XG5cbiAgICAvLyBDaGVjayBpZiBuZXcgcGFyZW50IGlzIGl0c2VsZj8/XG4gICAgaWYgKHBhcmVudC5rZXkgPT09IGtleSkge1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlKFxuICAgICAgdmFsdWUuY2hhbmdlKCkubW92ZU5vZGVCeUtleShrZXksIHBhcmVudC5rZXksIGluZm8uZHJvcFBvc2l0aW9uIDwgMCA/IDAgOiBpbmZvLmRyb3BQb3NpdGlvbiksXG4gICAgKTsgKi9cbiAgfTtcblxuICBnZXRQYXJlbnQgPSAodHJlZSwgbGV2ZWxzKSA9PiB7XG4gICAgY29uc3QgbGV2ZWwgPSBsZXZlbHNbMF07XG4gICAgY29uc3QgcGFyZW50ID0gdHJlZVtsZXZlbF07XG4gICAgbGV2ZWxzLnNoaWZ0KCk7XG5cbiAgICBpZiAobGV2ZWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHsgaWQ6IG51bGwsIGNoaWxkcmVuOiBbXSB9OyAvLyB0b3AtbGV2ZWxcbiAgICB9IGVsc2UgaWYgKCFwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIHx8ICFsZXZlbHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRQYXJlbnQocGFyZW50LmNoaWxkcmVuLCBsZXZlbHMpO1xuICB9O1xuXG4gIG9uQ2hhbmdlID0gY2hhbmdlID0+IHRoaXMucHJvcHMub25DaGFuZ2UoY2hhbmdlLnZhbHVlKTtcblxuICBhcHBseVRlbXBsYXRlID0gdHlwZSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgdmFsdWVcbiAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAuc2VsZWN0QWxsKClcbiAgICAgICAgICAuZGVsZXRlKClcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMCwge1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMSwge1xuICAgICAgICAgICAgdHlwZTogJ2NvbnRhaW5lclRleHQnLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogZmFsc2UsXG4gICAgICAgICAgICBub2RlczogW1RleHQuY3JlYXRlKCdUZXh0JyldLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZvY3VzKCksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Jhbm5lcicpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAgICAgLmRlbGV0ZSgpXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDAsIHtcbiAgICAgICAgICAgIHR5cGU6ICdiYW5uZXInLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogZmFsc2UsXG4gICAgICAgICAgICBub2RlczogW1xuICAgICAgICAgICAgICBCbG9jay5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICAgICAgICAgIG5vZGVzOiBbVGV4dC5jcmVhdGUoJ1RpdGVsJyldLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMSwge1xuICAgICAgICAgICAgdHlwZTogJ2NvbnRhaW5lclRleHQnLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogZmFsc2UsXG4gICAgICAgICAgICBub2RlczogW1xuICAgICAgICAgICAgICBCbG9jay5jcmVhdGUoeyB0eXBlOiAncGFyYWdyYXBoJywgbm9kZXM6IFtUZXh0LmNyZWF0ZSgnVGV4dCcpXSB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZm9jdXMoKSxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2Fyb3VzZWwnKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKFxuICAgICAgICB2YWx1ZVxuICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgIC5zZWxlY3RBbGwoKVxuICAgICAgICAgIC5kZWxldGUoKVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAwLCB7XG4gICAgICAgICAgICB0eXBlOiAnY2Fyb3VzZWwnLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAxLCB7XG4gICAgICAgICAgICB0eXBlOiAnYmFubmVyJyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbm9kZXM6IFtcbiAgICAgICAgICAgICAgQmxvY2suY3JlYXRlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICAgICAgICBub2RlczogW1RleHQuY3JlYXRlKCdUaXRlbCcpXSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleShcbiAgICAgICAgICAgIHZhbHVlLmRvY3VtZW50LmtleSxcbiAgICAgICAgICAgIDIsXG4gICAgICAgICAgICBCbG9jay5jcmVhdGUoeyB0eXBlOiAncGFyYWdyYXBoJyB9KSxcbiAgICAgICAgICApXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDMsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjb250YWluZXJUZXh0JyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbm9kZXM6IFtUZXh0LmNyZWF0ZSgnVGV4dCcpXSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5mb2N1cygpLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGFjdGlvbiA9IChub2RlLCBhY3Rpb25UeXBlKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWFjdGlvblR5cGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFjdGlvblR5cGUgPT09ICdkZWxldGUnKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlLmNoYW5nZSgpLnJlbW92ZU5vZGVCeUtleShub2RlLmtleSkpO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gJ2N1dCcgfHwgYWN0aW9uVHlwZSA9PT0gJ2NvcHknKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKFxuICAgICAgICB2YWx1ZVxuICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgIC5tb3ZlVG9SYW5nZU9mKG5vZGUpXG4gICAgICAgICAgLmZvY3VzKCksXG4gICAgICApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZChhY3Rpb25UeXBlKSwgMSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlLmluZGV4T2YoJ3dyYXA6JykgPT09IDApIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgLm1vdmVUb1JhbmdlT2Yobm9kZSlcbiAgICAgICAgICAud3JhcEJsb2NrKGFjdGlvblR5cGUuc3BsaXQoJzonKVsxXSksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZS5pbmRleE9mKCd0cmFuc2Zvcm06JykgPT09IDApIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgIHZhbHVlLmNoYW5nZSgpLnNldE5vZGVCeUtleShub2RlLmtleSwgYWN0aW9uVHlwZS5zcGxpdCgnOicpWzFdKSxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlLmluZGV4T2YoJ3ByZTonKSA9PT0gMCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgdmFsdWUuY2hhbmdlKCkuaW5zZXJ0Tm9kZUJ5S2V5KG5vZGUua2V5LCBub2RlLm5vZGVzLnNpemUsIHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLnNwbGl0KCc6JylbMV0sXG4gICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZS5pbmRleE9mKCdwb3N0OicpID09PSAwKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKFxuICAgICAgICB2YWx1ZS5jaGFuZ2UoKS5pbnNlcnROb2RlQnlLZXkobm9kZS5rZXksIG5vZGUubm9kZXMuc2l6ZSwge1xuICAgICAgICAgIHR5cGU6IGFjdGlvblR5cGUuc3BsaXQoJzonKVsxXSxcbiAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlLmluZGV4T2YoJ2FkZDonKSA9PT0gMCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgdmFsdWUuY2hhbmdlKCkuaW5zZXJ0Tm9kZUJ5S2V5KG5vZGUua2V5LCBub2RlLm5vZGVzLnNpemUsIHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25UeXBlLnNwbGl0KCc6JylbMV0sXG4gICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gJ3Vud3JhcCcpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUuY2hhbmdlKCkudW53cmFwQmxvY2tCeUtleShub2RlLmtleSkpO1xuICAgIH1cbiAgfTtcblxuICBvbkNsaWNrID0gbm9kZSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWtleT1cIiR7bm9kZS5rZXl9XCJdYCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWtleT1cIiR7bm9kZS5rZXl9XCJdYCkuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgfVxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5vbkNoYW5nZShcbiAgICAgIHZhbHVlXG4gICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAubW92ZVRvUmFuZ2VPZihub2RlKVxuICAgICAgICAuZm9jdXMoKSxcbiAgICApO1xuICB9O1xuXG4gIGdldEl0ZW1zID0gKGJsb2NrLCBwYXJlbnQpID0+IHtcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWJsb2NrIHx8ICFibG9jay5ub2RlcyB8fCAhYmxvY2subm9kZXMuc2l6ZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qgbm9kZXMgPSBibG9jay5ub2Rlc1xuICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgbGV0IGxhYmVsO1xuICAgICAgICBpZiAoc2NoZW1hLm5vZGVzW2l0ZW0udHlwZV0pIHtcbiAgICAgICAgICBsYWJlbCA9XG4gICAgICAgICAgICAoc2NoZW1hLm5vZGVzW2l0ZW0udHlwZV0uc2xhdGUgJiZcbiAgICAgICAgICAgICAgc2NoZW1hLm5vZGVzW2l0ZW0udHlwZV0uc2xhdGUubGFiZWwpIHx8XG4gICAgICAgICAgICBpdGVtLnR5cGU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAncGFyYWdyYXBoJykge1xuICAgICAgICAgIGxhYmVsID0gJ1BhcmFncmFwaCc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnbGluZScpIHtcbiAgICAgICAgICBsYWJlbCA9ICdaZWlsZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnaGVhZGluZy1vbmUnKSB7XG4gICAgICAgICAgbGFiZWwgPSAnw5xiZXJzY2hyaWZ0IDEnO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ2hlYWRpbmctdHdvJykge1xuICAgICAgICAgIGxhYmVsID0gJ8OcYmVyc2NocmlmdCAyJztcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdoZWFkaW5nLXRocmVlJykge1xuICAgICAgICAgIGxhYmVsID0gJ8OcYmVyc2NocmlmdCAzJztcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdoZWFkaW5nLWZvdXInKSB7XG4gICAgICAgICAgbGFiZWwgPSAnw5xiZXJzY2hyaWZ0IDQnO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ2hlYWRpbmctZml2ZScpIHtcbiAgICAgICAgICBsYWJlbCA9ICfDnGJlcnNjaHJpZnQgNSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnaGVhZGluZy1zaXgnKSB7XG4gICAgICAgICAgbGFiZWwgPSAnw5xiZXJzY2hyaWZ0IDYnO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ2J1bGxldGVkLWxpc3QnKSB7XG4gICAgICAgICAgbGFiZWwgPSAnTGlzdGUnO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ251bWJlcmVkLWxpc3QnKSB7XG4gICAgICAgICAgbGFiZWwgPSAnTnVtbWVyaWVydGUgTGlzdGUnO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGl0ZW0udHlwZSA9PT0gJ2J1bGxldGVkLWxpc3QtaXRlbScgfHxcbiAgICAgICAgICBpdGVtLnR5cGUgPT09ICdudW1iZXJlZC1saXN0LWl0ZW0nXG4gICAgICAgICkge1xuICAgICAgICAgIGxhYmVsID0gJ0xpc3RlbmVsZW1lbnQnO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ua2luZCA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgbGFiZWwgPSAnVGV4dCc7XG4gICAgICAgICAgaWYgKCFpdGVtLnRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFiZWwgPSAnVW5iZWthbm50JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxUcmVlLlRyZWVOb2RlXG4gICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxuICAgICAgICAgICAgbm9kZT17aXRlbX1cbiAgICAgICAgICAgIHBhcmVudD17cGFyZW50fVxuICAgICAgICAgICAgdGl0bGU9e1tcbiAgICAgICAgICAgICAgPGEga2V5PVwibGlua1wiIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbGljayhpdGVtKX0+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICA8L2E+LFxuICAgICAgICAgICAgICA8Q2hhbmdlQmxvY2tcbiAgICAgICAgICAgICAgICBrZXk9XCJjaGFuZ2UxXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoeyBrZXkgfSkgPT4gdGhpcy5hY3Rpb24oaXRlbSwga2V5KX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZG93blwiXG4gICAgICAgICAgICAgICAgc2NoZW1hPXtzY2hlbWF9XG4gICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICA8QmxvY2tNZW51XG4gICAgICAgICAgICAgICAga2V5PVwiY2hhbmdlMlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHsga2V5IH0pID0+IHRoaXMuYWN0aW9uKGl0ZW0sIGtleSl9XG4gICAgICAgICAgICAgICAgdHlwZT1cInBsdXNcIlxuICAgICAgICAgICAgICAgIHNjaGVtYT17c2NoZW1hfVxuICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuZ2V0SXRlbXMoaXRlbSwgYmxvY2spfVxuICAgICAgICAgIDwvVHJlZS5UcmVlTm9kZT5cbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKHggPT4geCk7XG5cbiAgICBpZiAoIW5vZGVzLnNpemUpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBub2RlcztcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgc2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCF2YWx1ZS5kb2N1bWVudC50ZXh0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHJlZT5cbiAgICAgICAgICA8VHJlZS5UcmVlTm9kZVxuICAgICAgICAgICAga2V5PVwiaW1hZ2VcIlxuICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICA8YSBrZXk9XCJsaW5rXCIgb25DbGljaz17KCkgPT4gdGhpcy5hcHBseVRlbXBsYXRlKCdpbWFnZScpfT5cbiAgICAgICAgICAgICAgICBCaWxkICsgVGV4dFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VHJlZS5UcmVlTm9kZVxuICAgICAgICAgICAga2V5PVwiYmFubmVyXCJcbiAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgPGEga2V5PVwibGlua1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuYXBwbHlUZW1wbGF0ZSgnYmFubmVyJyl9PlxuICAgICAgICAgICAgICAgIEJhbm5lciArIFRleHRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRyZWUuVHJlZU5vZGVcbiAgICAgICAgICAgIGtleT1cImNhcm91c2VsXCJcbiAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgPGEga2V5PVwibGlua1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuYXBwbHlUZW1wbGF0ZSgnY2Fyb3VzZWwnKX0+XG4gICAgICAgICAgICAgICAgQmlsZGVyLUthcnVzZWxsICsgVGV4dFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9UcmVlPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmVlXG4gICAgICAgIHNlbGVjdGVkS2V5cz17c2VsZWN0ZWR9XG4gICAgICAgIGRyYWdnYWJsZVxuICAgICAgICBjbGFzc05hbWU9XCJkcmFnZ2FibGUtdHJlZVwiXG4gICAgICAgIC8vIGRlZmF1bHRFeHBhbmRlZEtleXM9e2l0ZW1zLmZpbHRlcigoeCwgaSkgPT4gaSA9PT0gMCkubWFwKGl0ZW0gPT4gaXRlbS5pZCB8fCBpdGVtLnBhdGhuYW1lKX1cbiAgICAgICAgb25EcmFnRW50ZXI9e3RoaXMub25EcmFnRW50ZXJ9XG4gICAgICAgIG9uRHJvcD17dGhpcy5vbkRyb3B9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLmdldEl0ZW1zKHZhbHVlLmRvY3VtZW50KX1cbiAgICAgIDwvVHJlZT5cbiAgICApO1xuICB9XG59XG5QYWdlcy5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxufTtcblBhZ2VzLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFsdWU6IFBsYWluLmRlc2VyaWFsaXplKCcnKSxcbiAgaXRlbXM6IFtdLFxuICBzZWxlY3RlZDogW10sXG59O1xuZXhwb3J0IGRlZmF1bHQgUGFnZXM7XG4iXX0=
