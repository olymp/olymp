import 'antd/lib/tree/style';
import _Tree3 from 'antd/lib/tree';
import 'antd/lib/tree/style';
import _Tree2 from 'antd/lib/tree';
import 'antd/lib/tree/style';
import _Tree from 'antd/lib/tree';
import _sortBy from 'lodash/sortBy';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import { Block } from 'slate';

import getSchema from './get-schema';

var Blocks = getSchema(_class = function (_Component) {
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
    }, _this.getItems = function (block) {
      var schema = _this.props.schema;

      var types = Object.keys(schema.nodes).map(function (key) {
        return _extends({}, schema.nodes[key].slate, {
          type: key
        });
      });
      var categories = {};
      var menuItems = [];
      _sortBy(types, ['category', 'label']).forEach(function (action) {
        var item = React.createElement(_Tree.TreeNode, {
          key: action.type,
          title: [React.createElement(
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
        return React.createElement(
          _Tree2.TreeNode,
          {
            key: key,
            title: [React.createElement(
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
      return React.createElement(
        _Tree3,
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
}(Component)) || _class;

export default Blocks;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL2Jsb2Nrcy5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCbG9jayIsImdldFNjaGVtYSIsIkJsb2NrcyIsImRyYWdTdGFydCIsImV2IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInR5cGUiLCJhcHBseVRlbXBsYXRlIiwidmFsdWUiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiY2hhbmdlIiwic2VsZWN0QWxsIiwiZGVsZXRlIiwiaW5zZXJ0Tm9kZUJ5S2V5IiwiZG9jdW1lbnQiLCJrZXkiLCJraW5kIiwiaXNWb2lkIiwibm9kZXMiLCJUZXh0IiwiY3JlYXRlIiwiZm9jdXMiLCJnZXRJdGVtcyIsInNjaGVtYSIsInR5cGVzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInNsYXRlIiwiY2F0ZWdvcmllcyIsIm1lbnVJdGVtcyIsImZvckVhY2giLCJpdGVtIiwiYWN0aW9uIiwibGFiZWwiLCJjYXRlZ29yeSIsInB1c2giLCJvbkRyYWdFbnRlciIsIm9uRHJvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDOztBQUVBLFNBQVNDLEtBQVQsUUFBc0IsT0FBdEI7O0FBRUEsT0FBT0MsU0FBUCxNQUFzQixjQUF0Qjs7SUFHTUMsTSxHQURMRCxTOzs7Ozs7Ozs7Ozs7OztzTEFFQ0UsUyxHQUFZO0FBQUEsYUFBUTtBQUFBLGVBQU1DLEdBQUdDLFlBQUgsQ0FBZ0JDLE9BQWhCLENBQXdCLGFBQXhCLEVBQXVDQyxJQUF2QyxDQUFOO0FBQUEsT0FBUjtBQUFBLEssUUFFWkMsYSxHQUFnQixnQkFBUTtBQUFBLFVBQ2RDLEtBRGMsR0FDSixNQUFLQyxLQURELENBQ2RELEtBRGM7O0FBRXRCLFVBQUlGLFNBQVMsT0FBYixFQUFzQjtBQUNwQixjQUFLSSxRQUFMLENBQ0VGLE1BQ0dHLE1BREgsR0FFR0MsU0FGSCxHQUdHQyxNQUhILEdBSUdDLGVB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QURMO0FBY0QsSzs7Ozs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLHdCQUFjLEVBRGhCO0FBRUUseUJBRkY7QUFHRSxxQkFBVTtBQUNWO0FBSkYsWUFLRSxhQUFhLEtBQUtzQixXQUxwQjtBQU1FLGtCQUFRLEtBQUtDO0FBTmY7QUFRRyxhQUFLaEIsUUFBTDtBQVJILE9BREY7QUFZRDs7OztFQWhKa0J6QixTOztBQWtKckIsZUFBZUcsTUFBZiIsImZpbGUiOiJwYWNrYWdlcy9zbGF0ZS9ibG9ja3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHJlZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQmxvY2sgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgeyBzb3J0QnkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGdldFNjaGVtYSBmcm9tICcuL2dldC1zY2hlbWEnO1xuXG5AZ2V0U2NoZW1hXG5jbGFzcyBCbG9ja3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBkcmFnU3RhcnQgPSB0eXBlID0+IGV2ID0+IGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd4LXNsYXRlbWF0ZScsIHR5cGUpO1xuXG4gIGFwcGx5VGVtcGxhdGUgPSB0eXBlID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKFxuICAgICAgICB2YWx1ZVxuICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgIC5zZWxlY3RBbGwoKVxuICAgICAgICAgIC5kZWxldGUoKVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAwLCB7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAxLCB7XG4gICAgICAgICAgICB0eXBlOiAnY29udGFpbmVyVGV4dCcsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiBmYWxzZSxcbiAgICAgICAgICAgIG5vZGVzOiBbVGV4dC5jcmVhdGUoJ1RleHQnKV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZm9jdXMoKSxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnYmFubmVyJykge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgdmFsdWVcbiAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAuc2VsZWN0QWxsKClcbiAgICAgICAgICAuZGVsZXRlKClcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMCwge1xuICAgICAgICAgICAgdHlwZTogJ2Jhbm5lcicsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiBmYWxzZSxcbiAgICAgICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAgICAgIEJsb2NrLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgICAgICAgbm9kZXM6IFtUZXh0LmNyZWF0ZSgnVGl0ZWwnKV0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAxLCB7XG4gICAgICAgICAgICB0eXBlOiAnY29udGFpbmVyVGV4dCcsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiBmYWxzZSxcbiAgICAgICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAgICAgIEJsb2NrLmNyZWF0ZSh7IHR5cGU6ICdwYXJhZ3JhcGgnLCBub2RlczogW1RleHQuY3JlYXRlKCdUZXh0JyldIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5mb2N1cygpLFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjYXJvdXNlbCcpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAgICAgLmRlbGV0ZSgpXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDAsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjYXJvdXNlbCcsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDEsIHtcbiAgICAgICAgICAgIHR5cGU6ICdiYW5uZXInLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogZmFsc2UsXG4gICAgICAgICAgICBub2RlczogW1xuICAgICAgICAgICAgICBCbG9jay5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICAgICAgICAgIG5vZGVzOiBbVGV4dC5jcmVhdGUoJ1RpdGVsJyldLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KFxuICAgICAgICAgICAgdmFsdWUuZG9jdW1lbnQua2V5LFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgIEJsb2NrLmNyZWF0ZSh7IHR5cGU6ICdwYXJhZ3JhcGgnIH0pLFxuICAgICAgICAgIClcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMywge1xuICAgICAgICAgICAgdHlwZTogJ2NvbnRhaW5lclRleHQnLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogZmFsc2UsXG4gICAgICAgICAgICBub2RlczogW1RleHQuY3JlYXRlKCdUZXh0JyldLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZvY3VzKCksXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgZ2V0SXRlbXMgPSBibG9jayA9PiB7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHlwZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEubm9kZXMpLm1hcChrZXkgPT4gKHtcbiAgICAgIC4uLnNjaGVtYS5ub2Rlc1trZXldLnNsYXRlLFxuICAgICAgdHlwZToga2V5LFxuICAgIH0pKTtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0ge307XG4gICAgY29uc3QgbWVudUl0ZW1zID0gW107XG4gICAgc29ydEJ5KHR5cGVzLCBbJ2NhdGVnb3J5JywgJ2xhYmVsJ10pLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSAoXG4gICAgICAgIDxUcmVlLlRyZWVOb2RlXG4gICAgICAgICAga2V5PXthY3Rpb24udHlwZX1cbiAgICAgICAgICB0aXRsZT17W1xuICAgICAgICAgICAgPGEgZHJhZ2dhYmxlIG9uRHJhZ1N0YXJ0PXt0aGlzLmRyYWdTdGFydChhY3Rpb24udHlwZSl9IGtleT1cImxpbmtcIj5cbiAgICAgICAgICAgICAge2FjdGlvbi5sYWJlbCB8fCBhY3Rpb24udHlwZX1cbiAgICAgICAgICAgIDwvYT4sXG4gICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgICBpZiAoYWN0aW9uLmNhdGVnb3J5KSB7XG4gICAgICAgIGlmICghY2F0ZWdvcmllc1thY3Rpb24uY2F0ZWdvcnldKSB7XG4gICAgICAgICAgY2F0ZWdvcmllc1thY3Rpb24uY2F0ZWdvcnldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY2F0ZWdvcmllc1thY3Rpb24uY2F0ZWdvcnldLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW51SXRlbXMucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uT2JqZWN0LmtleXMoY2F0ZWdvcmllcykubWFwKGtleSA9PiAoXG4gICAgICAgIDxUcmVlLlRyZWVOb2RlXG4gICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgdGl0bGU9e1tcbiAgICAgICAgICAgIDxhIGRyYWdnYWJsZSBvbkRyYWdTdGFydD17dGhpcy5kcmFnU3RhcnQoa2V5KX0ga2V5PVwibGlua1wiPlxuICAgICAgICAgICAgICB7a2V5fVxuICAgICAgICAgICAgPC9hPixcbiAgICAgICAgICBdfVxuICAgICAgICA+XG4gICAgICAgICAge2NhdGVnb3JpZXNba2V5XX1cbiAgICAgICAgPC9UcmVlLlRyZWVOb2RlPlxuICAgICAgKSksXG4gICAgXTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VHJlZVxuICAgICAgICBzZWxlY3RlZEtleXM9e1tdfVxuICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgY2xhc3NOYW1lPVwiZHJhZ2dhYmxlLXRyZWVcIlxuICAgICAgICAvLyBkZWZhdWx0RXhwYW5kZWRLZXlzPXtpdGVtcy5maWx0ZXIoKHgsIGkpID0+IGkgPT09IDApLm1hcChpdGVtID0+IGl0ZW0uaWQgfHwgaXRlbS5wYXRobmFtZSl9XG4gICAgICAgIG9uRHJhZ0VudGVyPXt0aGlzLm9uRHJhZ0VudGVyfVxuICAgICAgICBvbkRyb3A9e3RoaXMub25Ecm9wfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5nZXRJdGVtcygpfVxuICAgICAgPC9UcmVlPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJsb2NrcztcbiJdfQ==
