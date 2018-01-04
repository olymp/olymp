'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tree = require('antd/lib/tree');

var _tree2 = _interopRequireDefault(_tree);

var _sortBy2 = require('lodash/sortBy');

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

require('antd/lib/tree/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slate = require('slate');

var _withBlockTypes = require('./decorators/with-block-types');

var _withBlockTypes2 = _interopRequireDefault(_withBlockTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blocks = (0, _withBlockTypes2.default)(_class = function (_Component) {
  _inherits(Blocks, _Component);

  function Blocks() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Blocks);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Blocks.__proto__ || Object.getPrototypeOf(Blocks)).call.apply(_ref, [this].concat(args))), _this), _this.dragStart = function (type) {
      return function (ev) {
        var schema = _this.props.schema;
        return ev.dataTransfer.setData('x-slatemate', type);
      };
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
          nodes: [_slate.Block.create({
            type: 'paragraph',
            nodes: [Text.create('Titel')]
          })]
        }).insertNodeByKey(value.document.key, 1, {
          type: 'containerText',
          kind: 'block',
          isVoid: false,
          nodes: [_slate.Block.create({ type: 'paragraph', nodes: [Text.create('Text')] })]
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
            nodes: [Text.create('Titel')]
          })]
        }).insertNodeByKey(value.document.key, 2, _slate.Block.create({ type: 'paragraph' })).insertNodeByKey(value.document.key, 3, {
          type: 'containerText',
          kind: 'block',
          isVoid: false,
          nodes: [Text.create('Text')]
        }).focus());
      }
    }, _this.getItems = function (block) {
      var blockTypes = _this.props.blockTypes;

      var types = Object.keys(blockTypes).map(function (key) {
        return _extends({}, blockTypes[key].slate, {
          type: key
        });
      });
      var categories = {};
      var menuItems = [];
      (0, _sortBy3.default)(types, ['category', 'label']).forEach(function (action) {
        var item = _react2.default.createElement(_tree2.default.TreeNode, {
          key: action.type,
          title: [_react2.default.createElement(
            'a',
            { draggable: true, onDragStart: _this.dragStart(action.type), key: 'link' },
            action.label || action.type
          )]
        });
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
          _tree2.default.TreeNode,
          {
            key: key,
            title: [_react2.default.createElement(
              'a',
              { draggable: true, onDragStart: _this.dragStart(key), key: 'link' },
              key
            )]
          },
          categories[key]
        );
      })));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Blocks, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _tree2.default,
        {
          selectedKeys: [],
          draggable: true,
          className: 'draggable-tree'
          // defaultExpandedKeys={items.filter((x, i) => i === 0).map(item => item.id || item.pathname)}
          , onDragEnter: this.onDragEnter,
          onDrop: this.onDrop
        },
        this.getItems()
      );
    }
  }]);

  return Blocks;
}(_react.Component)) || _class;

exports.default = Blocks;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL2RlZmF1bHRzL3RlbXBsYXRlcy5lczYiXSwibmFtZXMiOlsiQmxvY2tzIiwiZHJhZ1N0YXJ0Iiwic2NoZW1hIiwicHJvcHMiLCJldiIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0eXBlIiwiYXBwbHlUZW1wbGF0ZSIsInZhbHVlIiwib25DaGFuZ2UiLCJjaGFuZ2UiLCJzZWxlY3RBbGwiLCJkZWxldGUiLCJpbnNlcnROb2RlQnlLZXkiLCJkb2N1bWVudCIsImtleSIsImtpbmQiLCJpc1ZvaWQiLCJub2RlcyIsIlRleHQiLCJjcmVhdGUiLCJmb2N1cyIsImdldEl0ZW1zIiwiYmxvY2tUeXBlcyIsInR5cGVzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInNsYXRlIiwiY2F0ZWdvcmllcyIsIm1lbnVJdGVtcyIsImZvckVhY2giLCJpdGVtIiwiYWN0aW9uIiwibGFiZWwiLCJjYXRlZ29yeSIsInB1c2giLCJvbkRyYWdFbnRlciIsIm9uRHJvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0lBR01BLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNKQyxTLEdBQVk7QUFBQSxhQUFRLGNBQU07QUFDeEIsWUFBTUMsU0FBUyxNQUFLQyxLQUFMLENBQVdELE1BQTFCO0FBQ0EsZUFBT0UsR0FBR0MsWUFBSCxDQUFnQkMsT0FBaEIsQ0FBd0IsYUFBeEIsRUFBdUNDLElBQXZDLENBQVA7QUFDRCxPQUhXO0FBQUEsSyxRQUtaQyxhLEdBQWdCLGdCQUFRO0FBQUEsVUFDZEMsS0FEYyxHQUNKLE1BQUtOLEtBREQsQ0FDZE0sS0FEYzs7QUFFdEIsVUFBSUYsU0FBUyxPQUFiLEVBQXNCO0FBQ3BCLGNBQUtHLFFBQUwsQ0FDRUQsTUFDR0UsTUFESCxHQUVHQyxTQUZILEdBR0dDLE1BSEgsR0FJR0MsZUFKSCxDQUltQkwsTUFBTU0sUUFBTixDQUFlQyxHQUpsQyxFQUl1QyxDQUp2QyxF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QkFBVTtBQUNWO0FBSkYsWUFLRSxhQUFhLEtBQUtzQixXQUxwQjtBQU1FLGtCQUFRLEtBQUtDO0FBTmY7QUFRRyxhQUFLaEIsUUFBTDtBQVJILE9BREY7QUFZRDs7Ozs7O2tCQUVZdkIsTSIsImZpbGUiOiJleHRlcm5hbC9zbGF0ZS9kZWZhdWx0cy90ZW1wbGF0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHJlZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQmxvY2sgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgeyBzb3J0QnkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHdpdGhCbG9ja1R5cGVzIGZyb20gJy4vZGVjb3JhdG9ycy93aXRoLWJsb2NrLXR5cGVzJztcblxuQHdpdGhCbG9ja1R5cGVzXG5jbGFzcyBCbG9ja3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBkcmFnU3RhcnQgPSB0eXBlID0+IGV2ID0+IHtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnByb3BzLnNjaGVtYTtcbiAgICByZXR1cm4gZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3gtc2xhdGVtYXRlJywgdHlwZSk7XG4gIH07XG5cbiAgYXBwbHlUZW1wbGF0ZSA9IHR5cGUgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAgICAgLmRlbGV0ZSgpXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDAsIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDEsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjb250YWluZXJUZXh0JyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbm9kZXM6IFtUZXh0LmNyZWF0ZSgnVGV4dCcpXSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5mb2N1cygpLFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdiYW5uZXInKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKFxuICAgICAgICB2YWx1ZVxuICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgIC5zZWxlY3RBbGwoKVxuICAgICAgICAgIC5kZWxldGUoKVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAwLCB7XG4gICAgICAgICAgICB0eXBlOiAnYmFubmVyJyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbm9kZXM6IFtcbiAgICAgICAgICAgICAgQmxvY2suY3JlYXRlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICAgICAgICBub2RlczogW1RleHQuY3JlYXRlKCdUaXRlbCcpXSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDEsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjb250YWluZXJUZXh0JyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbm9kZXM6IFtcbiAgICAgICAgICAgICAgQmxvY2suY3JlYXRlKHsgdHlwZTogJ3BhcmFncmFwaCcsIG5vZGVzOiBbVGV4dC5jcmVhdGUoJ1RleHQnKV0gfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZvY3VzKCksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Nhcm91c2VsJykge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgdmFsdWVcbiAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAuc2VsZWN0QWxsKClcbiAgICAgICAgICAuZGVsZXRlKClcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMCwge1xuICAgICAgICAgICAgdHlwZTogJ2Nhcm91c2VsJyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMSwge1xuICAgICAgICAgICAgdHlwZTogJ2Jhbm5lcicsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiBmYWxzZSxcbiAgICAgICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAgICAgIEJsb2NrLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgICAgICAgbm9kZXM6IFtUZXh0LmNyZWF0ZSgnVGl0ZWwnKV0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkoXG4gICAgICAgICAgICB2YWx1ZS5kb2N1bWVudC5rZXksXG4gICAgICAgICAgICAyLFxuICAgICAgICAgICAgQmxvY2suY3JlYXRlKHsgdHlwZTogJ3BhcmFncmFwaCcgfSksXG4gICAgICAgICAgKVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAzLCB7XG4gICAgICAgICAgICB0eXBlOiAnY29udGFpbmVyVGV4dCcsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiBmYWxzZSxcbiAgICAgICAgICAgIG5vZGVzOiBbVGV4dC5jcmVhdGUoJ1RleHQnKV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZm9jdXMoKSxcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBnZXRJdGVtcyA9IGJsb2NrID0+IHtcbiAgICBjb25zdCB7IGJsb2NrVHlwZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHlwZXMgPSBPYmplY3Qua2V5cyhibG9ja1R5cGVzKS5tYXAoa2V5ID0+ICh7XG4gICAgICAuLi5ibG9ja1R5cGVzW2tleV0uc2xhdGUsXG4gICAgICB0eXBlOiBrZXksXG4gICAgfSkpO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB7fTtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBbXTtcbiAgICBzb3J0QnkodHlwZXMsIFsnY2F0ZWdvcnknLCAnbGFiZWwnXSkuZm9yRWFjaChhY3Rpb24gPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IChcbiAgICAgICAgPFRyZWUuVHJlZU5vZGVcbiAgICAgICAgICBrZXk9e2FjdGlvbi50eXBlfVxuICAgICAgICAgIHRpdGxlPXtbXG4gICAgICAgICAgICA8YSBkcmFnZ2FibGUgb25EcmFnU3RhcnQ9e3RoaXMuZHJhZ1N0YXJ0KGFjdGlvbi50eXBlKX0ga2V5PVwibGlua1wiPlxuICAgICAgICAgICAgICB7YWN0aW9uLmxhYmVsIHx8IGFjdGlvbi50eXBlfVxuICAgICAgICAgICAgPC9hPixcbiAgICAgICAgICBdfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICAgIGlmIChhY3Rpb24uY2F0ZWdvcnkpIHtcbiAgICAgICAgaWYgKCFjYXRlZ29yaWVzW2FjdGlvbi5jYXRlZ29yeV0pIHtcbiAgICAgICAgICBjYXRlZ29yaWVzW2FjdGlvbi5jYXRlZ29yeV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRlZ29yaWVzW2FjdGlvbi5jYXRlZ29yeV0ucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBbXG4gICAgICAuLi5PYmplY3Qua2V5cyhjYXRlZ29yaWVzKS5tYXAoa2V5ID0+IChcbiAgICAgICAgPFRyZWUuVHJlZU5vZGVcbiAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICB0aXRsZT17W1xuICAgICAgICAgICAgPGEgZHJhZ2dhYmxlIG9uRHJhZ1N0YXJ0PXt0aGlzLmRyYWdTdGFydChrZXkpfSBrZXk9XCJsaW5rXCI+XG4gICAgICAgICAgICAgIHtrZXl9XG4gICAgICAgICAgICA8L2E+LFxuICAgICAgICAgIF19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2F0ZWdvcmllc1trZXldfVxuICAgICAgICA8L1RyZWUuVHJlZU5vZGU+XG4gICAgICApKSxcbiAgICBdO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmVlXG4gICAgICAgIHNlbGVjdGVkS2V5cz17W119XG4gICAgICAgIGRyYWdnYWJsZVxuICAgICAgICBjbGFzc05hbWU9XCJkcmFnZ2FibGUtdHJlZVwiXG4gICAgICAgIC8vIGRlZmF1bHRFeHBhbmRlZEtleXM9e2l0ZW1zLmZpbHRlcigoeCwgaSkgPT4gaSA9PT0gMCkubWFwKGl0ZW0gPT4gaXRlbS5pZCB8fCBpdGVtLnBhdGhuYW1lKX1cbiAgICAgICAgb25EcmFnRW50ZXI9e3RoaXMub25EcmFnRW50ZXJ9XG4gICAgICAgIG9uRHJvcD17dGhpcy5vbkRyb3B9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLmdldEl0ZW1zKCl9XG4gICAgICA8L1RyZWU+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmxvY2tzO1xuIl19
