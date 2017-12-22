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

import withBlockTypes from './decorators/with-block-types';

var Blocks = withBlockTypes(_class = function (_Component) {
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
      var blockTypes = _this.props.blockTypes;

      var types = Object.keys(blockTypes).map(function (key) {
        return _extends({}, blockTypes[key].slate, {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL2RlZmF1bHRzL3RlbXBsYXRlcy5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCbG9jayIsIndpdGhCbG9ja1R5cGVzIiwiQmxvY2tzIiwiZHJhZ1N0YXJ0Iiwic2NoZW1hIiwicHJvcHMiLCJldiIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0eXBlIiwiYXBwbHlUZW1wbGF0ZSIsInZhbHVlIiwib25DaGFuZ2UiLCJjaGFuZ2UiLCJzZWxlY3RBbGwiLCJkZWxldGUiLCJpbnNlcnROb2RlQnlLZXkiLCJkb2N1bWVudCIsImtleSIsImtpbmQiLCJpc1ZvaWQiLCJub2RlcyIsIlRleHQiLCJjcmVhdGUiLCJmb2N1cyIsImdldEl0ZW1zIiwiYmxvY2tUeXBlcyIsInR5cGVzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInNsYXRlIiwiY2F0ZWdvcmllcyIsIm1lbnVJdGVtcyIsImZvckVhY2giLCJpdGVtIiwiYWN0aW9uIiwibGFiZWwiLCJjYXRlZ29yeSIsInB1c2giLCJvbkRyYWdFbnRlciIsIm9uRHJvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDOztBQUVBLFNBQVNDLEtBQVQsUUFBc0IsT0FBdEI7O0FBRUEsT0FBT0MsY0FBUCxNQUEyQiwrQkFBM0I7O0lBR01DLE0sR0FETEQsYzs7Ozs7Ozs7Ozs7Ozs7c0xBRUNFLFMsR0FBWTtBQUFBLGFBQVEsY0FBTTtBQUN4QixZQUFNQyxTQUFTLE1BQUtDLEtBQUwsQ0FBV0QsTUFBMUI7QUFDQSxlQUFPRSxHQUFHQyxZQUFILENBQWdCQyxPQUFoQixDQUF3QixhQUF4QixFQUF1Q0MsSUFBdkMsQ0FBUDtBQUNELE9BSFc7QUFBQSxLLFFBS1pDLGEsR0FBZ0IsZ0JBQVE7QUFBQSxVQUNkQyxLQURjLEdBQ0osTUFBS04sS0FERCxDQUNkTSxLQURjOztBQUV0QixVQUFJRixTQUFT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QTtBQURILGFBREs7QUFGVDtBQVFHYyxxQkFBV2QsR0FBWDtBQVJILFNBRDZCO0FBQUEsT0FBNUIsQ0FETDtBQWNELEs7Ozs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSx3QkFBYyxFQURoQjtBQUVFLHlCQUZGO0FBR0UscUJBQVU7QUFDVjtBQUpGLFlBS0UsYUFBYSxLQUFLc0IsV0FMcEI7QUFNRSxrQkFBUSxLQUFLQztBQU5mO0FBUUcsYUFBS2hCLFFBQUw7QUFSSCxPQURGO0FBWUQ7Ozs7RUFuSmtCMUIsUzs7QUFxSnJCLGVBQWVHLE1BQWYiLCJmaWxlIjoicGFja2FnZXMvc2xhdGUvZGVmYXVsdHMvdGVtcGxhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyZWUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEJsb2NrIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IHsgc29ydEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB3aXRoQmxvY2tUeXBlcyBmcm9tICcuL2RlY29yYXRvcnMvd2l0aC1ibG9jay10eXBlcyc7XG5cbkB3aXRoQmxvY2tUeXBlc1xuY2xhc3MgQmxvY2tzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZHJhZ1N0YXJ0ID0gdHlwZSA9PiBldiA9PiB7XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5wcm9wcy5zY2hlbWE7XG4gICAgcmV0dXJuIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd4LXNsYXRlbWF0ZScsIHR5cGUpO1xuICB9O1xuXG4gIGFwcGx5VGVtcGxhdGUgPSB0eXBlID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKFxuICAgICAgICB2YWx1ZVxuICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgIC5zZWxlY3RBbGwoKVxuICAgICAgICAgIC5kZWxldGUoKVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAwLCB7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAxLCB7XG4gICAgICAgICAgICB0eXBlOiAnY29udGFpbmVyVGV4dCcsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiBmYWxzZSxcbiAgICAgICAgICAgIG5vZGVzOiBbVGV4dC5jcmVhdGUoJ1RleHQnKV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZm9jdXMoKSxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnYmFubmVyJykge1xuICAgICAgdGhpcy5vbkNoYW5nZShcbiAgICAgICAgdmFsdWVcbiAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAuc2VsZWN0QWxsKClcbiAgICAgICAgICAuZGVsZXRlKClcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMCwge1xuICAgICAgICAgICAgdHlwZTogJ2Jhbm5lcicsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiBmYWxzZSxcbiAgICAgICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAgICAgIEJsb2NrLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgICAgICAgbm9kZXM6IFtUZXh0LmNyZWF0ZSgnVGl0ZWwnKV0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5pbnNlcnROb2RlQnlLZXkodmFsdWUuZG9jdW1lbnQua2V5LCAxLCB7XG4gICAgICAgICAgICB0eXBlOiAnY29udGFpbmVyVGV4dCcsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiBmYWxzZSxcbiAgICAgICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAgICAgIEJsb2NrLmNyZWF0ZSh7IHR5cGU6ICdwYXJhZ3JhcGgnLCBub2RlczogW1RleHQuY3JlYXRlKCdUZXh0JyldIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5mb2N1cygpLFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjYXJvdXNlbCcpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAgICAgLmRlbGV0ZSgpXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDAsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjYXJvdXNlbCcsXG4gICAgICAgICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgICAgICAgaXNWb2lkOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmluc2VydE5vZGVCeUtleSh2YWx1ZS5kb2N1bWVudC5rZXksIDEsIHtcbiAgICAgICAgICAgIHR5cGU6ICdiYW5uZXInLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogZmFsc2UsXG4gICAgICAgICAgICBub2RlczogW1xuICAgICAgICAgICAgICBCbG9jay5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICAgICAgICAgIG5vZGVzOiBbVGV4dC5jcmVhdGUoJ1RpdGVsJyldLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KFxuICAgICAgICAgICAgdmFsdWUuZG9jdW1lbnQua2V5LFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgIEJsb2NrLmNyZWF0ZSh7IHR5cGU6ICdwYXJhZ3JhcGgnIH0pLFxuICAgICAgICAgIClcbiAgICAgICAgICAuaW5zZXJ0Tm9kZUJ5S2V5KHZhbHVlLmRvY3VtZW50LmtleSwgMywge1xuICAgICAgICAgICAgdHlwZTogJ2NvbnRhaW5lclRleHQnLFxuICAgICAgICAgICAga2luZDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGlzVm9pZDogZmFsc2UsXG4gICAgICAgICAgICBub2RlczogW1RleHQuY3JlYXRlKCdUZXh0JyldLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZvY3VzKCksXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgZ2V0SXRlbXMgPSBibG9jayA9PiB7XG4gICAgY29uc3QgeyBibG9ja1R5cGVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoYmxvY2tUeXBlcykubWFwKGtleSA9PiAoe1xuICAgICAgLi4uYmxvY2tUeXBlc1trZXldLnNsYXRlLFxuICAgICAgdHlwZToga2V5LFxuICAgIH0pKTtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0ge307XG4gICAgY29uc3QgbWVudUl0ZW1zID0gW107XG4gICAgc29ydEJ5KHR5cGVzLCBbJ2NhdGVnb3J5JywgJ2xhYmVsJ10pLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSAoXG4gICAgICAgIDxUcmVlLlRyZWVOb2RlXG4gICAgICAgICAga2V5PXthY3Rpb24udHlwZX1cbiAgICAgICAgICB0aXRsZT17W1xuICAgICAgICAgICAgPGEgZHJhZ2dhYmxlIG9uRHJhZ1N0YXJ0PXt0aGlzLmRyYWdTdGFydChhY3Rpb24udHlwZSl9IGtleT1cImxpbmtcIj5cbiAgICAgICAgICAgICAge2FjdGlvbi5sYWJlbCB8fCBhY3Rpb24udHlwZX1cbiAgICAgICAgICAgIDwvYT4sXG4gICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgICBpZiAoYWN0aW9uLmNhdGVnb3J5KSB7XG4gICAgICAgIGlmICghY2F0ZWdvcmllc1thY3Rpb24uY2F0ZWdvcnldKSB7XG4gICAgICAgICAgY2F0ZWdvcmllc1thY3Rpb24uY2F0ZWdvcnldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY2F0ZWdvcmllc1thY3Rpb24uY2F0ZWdvcnldLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW51SXRlbXMucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uT2JqZWN0LmtleXMoY2F0ZWdvcmllcykubWFwKGtleSA9PiAoXG4gICAgICAgIDxUcmVlLlRyZWVOb2RlXG4gICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgdGl0bGU9e1tcbiAgICAgICAgICAgIDxhIGRyYWdnYWJsZSBvbkRyYWdTdGFydD17dGhpcy5kcmFnU3RhcnQoa2V5KX0ga2V5PVwibGlua1wiPlxuICAgICAgICAgICAgICB7a2V5fVxuICAgICAgICAgICAgPC9hPixcbiAgICAgICAgICBdfVxuICAgICAgICA+XG4gICAgICAgICAge2NhdGVnb3JpZXNba2V5XX1cbiAgICAgICAgPC9UcmVlLlRyZWVOb2RlPlxuICAgICAgKSksXG4gICAgXTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VHJlZVxuICAgICAgICBzZWxlY3RlZEtleXM9e1tdfVxuICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgY2xhc3NOYW1lPVwiZHJhZ2dhYmxlLXRyZWVcIlxuICAgICAgICAvLyBkZWZhdWx0RXhwYW5kZWRLZXlzPXtpdGVtcy5maWx0ZXIoKHgsIGkpID0+IGkgPT09IDApLm1hcChpdGVtID0+IGl0ZW0uaWQgfHwgaXRlbS5wYXRobmFtZSl9XG4gICAgICAgIG9uRHJhZ0VudGVyPXt0aGlzLm9uRHJhZ0VudGVyfVxuICAgICAgICBvbkRyb3A9e3RoaXMub25Ecm9wfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5nZXRJdGVtcygpfVxuICAgICAgPC9UcmVlPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJsb2NrcztcbiJdfQ==
