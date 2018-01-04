'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _faSquare = require('olymp-icons/lib/fa-square');

var _faSquare2 = _interopRequireDefault(_faSquare);

var _image = require('../image/image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'Pages.Template.Columns.Column',
  isVoid: false,
  kind: 'block',
  label: 'Spalte',
  defaultNodes: function defaultNodes() {
    return [_image2.default, 'paragraph'];
  },
  styles: function styles(_ref) {
    var theme = _ref.theme;
    return {
      '> div': {
        paddingY: 10,
        '& .image-block': {
          marginTop: -10
        },
        '> [data-key]': {
          paddingX: 10
        },
        '> [data-slate-void]': {
          paddingX: 0
        },
        backgroundColor: theme.dark5,
        borderRadius: theme.borderRadius,
        overflow: 'hidden',
        height: '100%'
      }
    };
  },
  component: function component(_ref2) {
    var node = _ref2.node,
        children = _ref2.children,
        attributes = _ref2.attributes,
        className = _ref2.className;
    return _react2.default.createElement(
      _olympFela.Grid.Item,
      _extends({
        medium: 1,
        padding: node.data.get('bordered', true) ? '0 16px 24px 16px' : 0,
        className: className,
        gridSize: 4
      }, attributes),
      _react2.default.createElement(
        'div',
        null,
        children
      )
    );
  },
  actions: [{
    label: _react2.default.createElement(_faSquare2.default, null),
    tooltip: 'Rahmen/Rahmenlos',
    toggle: function toggle(_ref3) {
      var node = _ref3.node,
          onChange = _ref3.onChange,
          value = _ref3.value;

      onChange(value.change().setNodeByKey(node.key, {
        data: node.data.set('bordered', node.data.get('bordered') === false)
      }));
    }
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvY29sdW1ucy9jb2x1bW4uZXM2Il0sIm5hbWVzIjpbInR5cGUiLCJpc1ZvaWQiLCJraW5kIiwibGFiZWwiLCJkZWZhdWx0Tm9kZXMiLCJzdHlsZXMiLCJ0aGVtZSIsInBhZGRpbmdZIiwibWFyZ2luVG9wIiwicGFkZGluZ1giLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXJrNSIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwiaGVpZ2h0IiwiY29tcG9uZW50Iiwibm9kZSIsImNoaWxkcmVuIiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsImRhdGEiLCJnZXQiLCJhY3Rpb25zIiwidG9vbHRpcCIsInRvZ2dsZSIsIm9uQ2hhbmdlIiwidmFsdWUiLCJjaGFuZ2UiLCJzZXROb2RlQnlLZXkiLCJrZXkiLCJzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7OztrQkFFZTtBQUNiQSxRQUFNLCtCQURPO0FBRWJDLFVBQVEsS0FGSztBQUdiQyxRQUFNLE9BSE87QUFJYkMsU0FBTyxRQUpNO0FBS2JDLGdCQUFjO0FBQUEsV0FBTSxrQkFBUSxXQUFSLENBQU47QUFBQSxHQUxEO0FBTWJDLFVBQVE7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxXQUFnQjtBQUN0QixlQUFTO0FBQ1BDLGtCQUFVLEVBREg7QUFFUCwwQkFBa0I7QUFDaEJDLHFCQUFXLENBQUM7QUFESSxTQUZYO0FBS1Asd0JBQWdCO0FBQ2RDLG9CQUFVO0FBREksU0FMVDtBQVFQLCtCQUF1QjtBQUNyQkEsb0JBQVU7QUFEVyxTQVJoQjtBQVdQQyx5QkFBaUJKLE1BQU1LLEtBWGhCO0FBWVBDLHNCQUFjTixNQUFNTSxZQVpiO0FBYVBDLGtCQUFVLFFBYkg7QUFjUEMsZ0JBQVE7QUFkRDtBQURhLEtBQWhCO0FBQUEsR0FOSztBQXdCYkMsYUFBVztBQUFBLFFBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFFBQVNDLFFBQVQsU0FBU0EsUUFBVDtBQUFBLFFBQW1CQyxVQUFuQixTQUFtQkEsVUFBbkI7QUFBQSxRQUErQkMsU0FBL0IsU0FBK0JBLFNBQS9CO0FBQUEsV0FDVDtBQUFBLHNCQUFNLElBQU47QUFBQTtBQUNFLGdCQUFRLENBRFY7QUFFRSxpQkFBU0gsS0FBS0ksSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBZCxFQUEwQixJQUExQixJQUFrQyxrQkFBbEMsR0FBdUQsQ0FGbEU7QUFHRSxtQkFBV0YsU0FIYjtBQUlFLGtCQUFVO0FBSlosU0FLTUQsVUFMTjtBQU9FO0FBQUE7QUFBQTtBQUFNRDtBQUFOO0FBUEYsS0FEUztBQUFBLEdBeEJFO0FBbUNiSyxXQUFTLENBQ1A7QUFDRW5CLFdBQU8sdURBRFQ7QUFFRW9CLGFBQVMsa0JBRlg7QUFHRUMsWUFBUSx1QkFBK0I7QUFBQSxVQUE1QlIsSUFBNEIsU0FBNUJBLElBQTRCO0FBQUEsVUFBdEJTLFFBQXNCLFNBQXRCQSxRQUFzQjtBQUFBLFVBQVpDLEtBQVksU0FBWkEsS0FBWTs7QUFDckNELGVBQ0VDLE1BQU1DLE1BQU4sR0FBZUMsWUFBZixDQUE0QlosS0FBS2EsR0FBakMsRUFBc0M7QUFDcENULGNBQU1KLEtBQUtJLElBQUwsQ0FBVVUsR0FBVixDQUNKLFVBREksRUFFSmQsS0FBS0ksSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBZCxNQUE4QixLQUYxQjtBQUQ4QixPQUF0QyxDQURGO0FBUUQ7QUFaSCxHQURPO0FBbkNJLEMiLCJmaWxlIjoiY21zL3BhZ2VzL2Jsb2Nrcy9jb2x1bW5zL2NvbHVtbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBGYVNxdWFyZSB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9pbWFnZS9pbWFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ1BhZ2VzLlRlbXBsYXRlLkNvbHVtbnMuQ29sdW1uJyxcbiAgaXNWb2lkOiBmYWxzZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdTcGFsdGUnLFxuICBkZWZhdWx0Tm9kZXM6ICgpID0+IFtJbWFnZSwgJ3BhcmFncmFwaCddLFxuICBzdHlsZXM6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgJz4gZGl2Jzoge1xuICAgICAgcGFkZGluZ1k6IDEwLFxuICAgICAgJyYgLmltYWdlLWJsb2NrJzoge1xuICAgICAgICBtYXJnaW5Ub3A6IC0xMCxcbiAgICAgIH0sXG4gICAgICAnPiBbZGF0YS1rZXldJzoge1xuICAgICAgICBwYWRkaW5nWDogMTAsXG4gICAgICB9LFxuICAgICAgJz4gW2RhdGEtc2xhdGUtdm9pZF0nOiB7XG4gICAgICAgIHBhZGRpbmdYOiAwLFxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZGFyazUsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgIH0sXG4gIH0pLFxuICBjb21wb25lbnQ6ICh7IG5vZGUsIGNoaWxkcmVuLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUgfSkgPT4gKFxuICAgIDxHcmlkLkl0ZW1cbiAgICAgIG1lZGl1bT17MX1cbiAgICAgIHBhZGRpbmc9e25vZGUuZGF0YS5nZXQoJ2JvcmRlcmVkJywgdHJ1ZSkgPyAnMCAxNnB4IDI0cHggMTZweCcgOiAwfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBncmlkU2l6ZT17NH1cbiAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgID5cbiAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvR3JpZC5JdGVtPlxuICApLFxuICBhY3Rpb25zOiBbXG4gICAge1xuICAgICAgbGFiZWw6IDxGYVNxdWFyZSAvPixcbiAgICAgIHRvb2x0aXA6ICdSYWhtZW4vUmFobWVubG9zJyxcbiAgICAgIHRvZ2dsZTogKHsgbm9kZSwgb25DaGFuZ2UsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgdmFsdWUuY2hhbmdlKCkuc2V0Tm9kZUJ5S2V5KG5vZGUua2V5LCB7XG4gICAgICAgICAgICBkYXRhOiBub2RlLmRhdGEuc2V0KFxuICAgICAgICAgICAgICAnYm9yZGVyZWQnLFxuICAgICAgICAgICAgICBub2RlLmRhdGEuZ2V0KCdib3JkZXJlZCcpID09PSBmYWxzZSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuIl19
