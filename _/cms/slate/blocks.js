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

var _getSchema = require('./get-schema');

var _getSchema2 = _interopRequireDefault(_getSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blocks = (0, _getSchema2.default)(_class = function (_Component) {
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
      var schema = _this.props.schema;

      var types = Object.keys(schema.nodes).map(function (key) {
        return _extends({}, schema.nodes[key].slate, {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL2Jsb2Nrcy5lczYiXSwibmFtZXMiOlsiQmxvY2tzIiwiZHJhZ1N0YXJ0IiwiZXYiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidHlwZSIsImFwcGx5VGVtcGxhdGUiLCJ2YWx1ZSIsInByb3BzIiwib25DaGFuZ2UiLCJjaGFuZ2UiLCJzZWxlY3RBbGwiLCJkZWxldGUiLCJpbnNlcnROb2RlQnlLZXkiLCJkb2N1bWVudCIsImtleSIsImtpbmQiLCJpc1ZvaWQiLCJub2RlcyIsIlRleHQiLCJjcmVhdGUiLCJmb2N1cyIsImdldEl0ZW1zIiwic2NoZW1hIiwidHlwZXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwic2xhdGUiLCJjYXRlZ29yaWVzIiwibWVudUl0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJhY3Rpb24iLCJsYWJlbCIsImNhdGVnb3J5IiwicHVzaCIsIm9uRHJhZ0VudGVyIiwib25Ecm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFHTUEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ0pDLFMsR0FBWTtBQUFBLGFBQVE7QUFBQSxlQUFNQyxHQUFHQyxZQUFILENBQWdCQyxPQUFoQixDQUF3QixhQUF4QixFQUF1Q0MsSUFBdkMsQ0FBTjtBQUFBLE9BQVI7QUFBQSxLLFFBRVpDLGEsR0FBZ0IsZ0JBQVE7QUFBQSxVQUNkQyxLQURjLEdBQ0osTUFBS0MsS0FERCxDQUNkRCxLQURjOztBQUV0QixVQUFJRixTQUFTLE9BQWIsRUFBc0I7QUFDcEIsY0FBS0ksUUFBTCxDQUNFRixNQUNHRyxNQURILEdBRUdDLFNBRkgsR0FHR0MsTUFISCxHQUlHQyxlQUpILENBSW1CTixNQUFNTyxRQUFOLENBQWVDLEdBSmxDLEVBSXVDLENBSnZDLEVBSTBDO0FBQ3RDVixnQkFBTSxPQURnQztBQUV0Q1csZ0JBQU0sT0FGZ0M7QUFHdENDLGtCQUFRO0FBSDhCLFNBSjFDLEVB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S0M7QUFOZjtBQVFHLGFBQUtoQixRQUFMO0FBUkgsT0FERjtBQVlEOzs7Ozs7a0JBRVl0QixNIiwiZmlsZSI6ImV4dGVybmFsL3NsYXRlL2Jsb2Nrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUcmVlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBCbG9jayB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IHNvcnRCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZ2V0U2NoZW1hIGZyb20gJy4vZ2V0LXNjaGVtYSc7XG5cbkBnZXRTY2hlbWFcbmNsYXNzIEJsb2NrcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGRyYWdTdGFydCA9IHR5cGUgPT4gZXYgPT4gZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3gtc2xhdGVtYXRlJywgdHlwZSk7XG5cbiAgYXBwbHlUZW1wbGF0ZSA9IHR5cGUgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAgICAgLmRlbGV0ZSgpXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDAsIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDEsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjb250YWluZXJUZXh0JyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbm9kZXM6IFtUZXh0LmNyZWF0ZSgnVGV4dCcpXSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5mb2N1cygpLFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdiYW5uZXInKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKFxuICAgICAgICB2YWx1ZVxuICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgIC5zZWxlY3RBbGwoKVxuICAgICAgICAgIC5kZWxldGUoKVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAwLCB7XG4gICAgICAgICAgICB0eXBlOiAnYmFubmVyJyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbm9kZXM6IFtcbiAgICAgICAgICAgICAgQmxvY2suY3JlYXRlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICAgICAgICBub2RlczogW1RleHQuY3JlYXRlKCdUaXRlbCcpXSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDEsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjb250YWluZXJUZXh0JyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbm9kZXM6IFtcbiAgICAgICAgICAgICAgQmxvY2suY3JlYXRlKHsgdHlwZTogJ3BhcmFncmFwaCcsIG5vZGVzOiBbVGV4dC5jcmVhdGUoJ1RleHQnKV0gfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZvY3VzKCksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Nhcm91c2VsJykge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgdmFsdWVcbiAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAuc2VsZWN0QWxsKClcbiAgICAgICAgICAuZGVsZXRlKClcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMCwge1xuICAgICAgICAgICAgdHlwZTogJ2Nhcm91c2VsJyxcbiAgICAgICAgICAgIGtpbmQ6ICdibG9jaycsXG4gICAgICAgICAgICBpc1ZvaWQ6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMSwge1xuICAgICAgICAgICAgdHlwZTogJ2Jhbm5lcicsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiBmYWxzZSxcbiAgICAgICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAgICAgIEJsb2NrLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgICAgICAgbm9kZXM6IFtUZXh0LmNyZWF0ZSgnVGl0ZWwnKV0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkoXG4gICAgICAgICAgICB2YWx1ZS5kb2N1bWVudC5rZXksXG4gICAgICAgICAgICAyLFxuICAgICAgICAgICAgQmxvY2suY3JlYXRlKHsgdHlwZTogJ3BhcmFncmFwaCcgfSksXG4gICAgICAgICAgKVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAzLCB7XG4gICAgICAgICAgICB0eXBlOiAnY29udGFpbmVyVGV4dCcsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiBmYWxzZSxcbiAgICAgICAgICAgIG5vZGVzOiBbVGV4dC5jcmVhdGUoJ1RleHQnKV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZm9jdXMoKSxcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBnZXRJdGVtcyA9IGJsb2NrID0+IHtcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKHNjaGVtYS5ub2RlcykubWFwKGtleSA9PiAoe1xuICAgICAgLi4uc2NoZW1hLm5vZGVzW2tleV0uc2xhdGUsXG4gICAgICB0eXBlOiBrZXksXG4gICAgfSkpO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB7fTtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBbXTtcbiAgICBzb3J0QnkodHlwZXMsIFsnY2F0ZWdvcnknLCAnbGFiZWwnXSkuZm9yRWFjaChhY3Rpb24gPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IChcbiAgICAgICAgPFRyZWUuVHJlZU5vZGVcbiAgICAgICAgICBrZXk9e2FjdGlvbi50eXBlfVxuICAgICAgICAgIHRpdGxlPXtbXG4gICAgICAgICAgICA8YSBkcmFnZ2FibGUgb25EcmFnU3RhcnQ9e3RoaXMuZHJhZ1N0YXJ0KGFjdGlvbi50eXBlKX0ga2V5PVwibGlua1wiPlxuICAgICAgICAgICAgICB7YWN0aW9uLmxhYmVsIHx8IGFjdGlvbi50eXBlfVxuICAgICAgICAgICAgPC9hPixcbiAgICAgICAgICBdfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICAgIGlmIChhY3Rpb24uY2F0ZWdvcnkpIHtcbiAgICAgICAgaWYgKCFjYXRlZ29yaWVzW2FjdGlvbi5jYXRlZ29yeV0pIHtcbiAgICAgICAgICBjYXRlZ29yaWVzW2FjdGlvbi5jYXRlZ29yeV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRlZ29yaWVzW2FjdGlvbi5jYXRlZ29yeV0ucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBbXG4gICAgICAuLi5PYmplY3Qua2V5cyhjYXRlZ29yaWVzKS5tYXAoa2V5ID0+IChcbiAgICAgICAgPFRyZWUuVHJlZU5vZGVcbiAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICB0aXRsZT17W1xuICAgICAgICAgICAgPGEgZHJhZ2dhYmxlIG9uRHJhZ1N0YXJ0PXt0aGlzLmRyYWdTdGFydChrZXkpfSBrZXk9XCJsaW5rXCI+XG4gICAgICAgICAgICAgIHtrZXl9XG4gICAgICAgICAgICA8L2E+LFxuICAgICAgICAgIF19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2F0ZWdvcmllc1trZXldfVxuICAgICAgICA8L1RyZWUuVHJlZU5vZGU+XG4gICAgICApKSxcbiAgICBdO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmVlXG4gICAgICAgIHNlbGVjdGVkS2V5cz17W119XG4gICAgICAgIGRyYWdnYWJsZVxuICAgICAgICBjbGFzc05hbWU9XCJkcmFnZ2FibGUtdHJlZVwiXG4gICAgICAgIC8vIGRlZmF1bHRFeHBhbmRlZEtleXM9e2l0ZW1zLmZpbHRlcigoeCwgaSkgPT4gaSA9PT0gMCkubWFwKGl0ZW0gPT4gaXRlbS5pZCB8fCBpdGVtLnBhdGhuYW1lKX1cbiAgICAgICAgb25EcmFnRW50ZXI9e3RoaXMub25EcmFnRW50ZXJ9XG4gICAgICAgIG9uRHJvcD17dGhpcy5vbkRyb3B9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLmdldEl0ZW1zKCl9XG4gICAgICA8L1RyZWU+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmxvY2tzO1xuIl19
