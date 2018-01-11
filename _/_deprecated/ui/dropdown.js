'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

require('antd/lib/icon/style');

require('antd/lib/menu/style');

require('antd/lib/dropdown/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref4 = _react2.default.createElement(_icon2.default, { type: 'down' });

var dropdown = (0, _olympFela.createComponent)(function (_ref) {
  var float = _ref.float;
  return {
    float: float,
    '> i': {
      marginLeft: 3
    }
  };
}, function (_ref2) {
  var _onSelect = _ref2.onSelect,
      value = _ref2.value,
      children = _ref2.children,
      content = _ref2.content,
      style = _ref2.style,
      className = _ref2.className,
      hideIcon = _ref2.hideIcon;
  return _react2.default.createElement(
    _dropdown2.default,
    {
      overlay: _react2.default.createElement(
        _menu2.default,
        { selectedKeys: [value], onSelect: function onSelect(_ref3) {
            var selectedKeys = _ref3.selectedKeys;
            return _onSelect(selectedKeys[0]);
          } },
        children
      )
    },
    _react2.default.createElement(
      'span',
      { style: style, className: className },
      content,
      !hideIcon && _ref4
    )
  );
}, function (p) {
  return Object.keys(p);
});
dropdown.Item = _menu2.default.Item;
exports.default = dropdown;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2Ryb3Bkb3duLmVzNiJdLCJuYW1lcyI6WyJkcm9wZG93biIsImZsb2F0IiwibWFyZ2luTGVmdCIsIm9uU2VsZWN0IiwidmFsdWUiLCJjaGlsZHJlbiIsImNvbnRlbnQiLCJzdHlsZSIsImNsYXNzTmFtZSIsImhpZGVJY29uIiwic2VsZWN0ZWRLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O1lBbUJzQixnREFBTSxNQUFLLE1BQVgsRzs7QUFqQnRCLElBQU1BLFdBQVcsZ0NBQ2Y7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQSxnQkFEYztBQUVkLFdBQU87QUFDTEMsa0JBQVk7QUFEUDtBQUZPLEdBQWhCO0FBQUEsQ0FEZSxFQU9mO0FBQUEsTUFBR0MsU0FBSCxTQUFHQSxRQUFIO0FBQUEsTUFBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsTUFBb0JDLFFBQXBCLFNBQW9CQSxRQUFwQjtBQUFBLE1BQThCQyxPQUE5QixTQUE4QkEsT0FBOUI7QUFBQSxNQUF1Q0MsS0FBdkMsU0FBdUNBLEtBQXZDO0FBQUEsTUFBOENDLFNBQTlDLFNBQThDQSxTQUE5QztBQUFBLE1BQXlEQyxRQUF6RCxTQUF5REEsUUFBekQ7QUFBQSxTQUNHO0FBQUE7QUFBQTtBQUNDLGVBQ0U7QUFBQTtBQUFBLFVBQU0sY0FBYyxDQUFDTCxLQUFELENBQXBCLEVBQTZCLFVBQVU7QUFBQSxnQkFBR00sWUFBSCxTQUFHQSxZQUFIO0FBQUEsbUJBQXNCUCxVQUFTTyxhQUFhLENBQWIsQ0FBVCxDQUF0QjtBQUFBLFdBQXZDO0FBQ0dMO0FBREg7QUFGSDtBQU9DO0FBQUE7QUFBQSxRQUFNLE9BQU9FLEtBQWIsRUFBb0IsV0FBV0MsU0FBL0I7QUFDR0YsYUFESDtBQUVHLE9BQUNHLFFBQUQ7QUFGSDtBQVBELEdBREg7QUFBQSxDQVBlLEVBb0JmO0FBQUEsU0FBS0UsT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxDQXBCZSxDQUFqQjtBQXNCQWIsU0FBU2MsSUFBVCxHQUFnQixlQUFLQSxJQUFyQjtrQkFDZWQsUSIsImZpbGUiOiJleHRlcm5hbC91aS9kcm9wZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEcm9wZG93biwgTWVudSwgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmNvbnN0IGRyb3Bkb3duID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyBmbG9hdCB9KSA9PiAoe1xuICAgIGZsb2F0LFxuICAgICc+IGknOiB7XG4gICAgICBtYXJnaW5MZWZ0OiAzLFxuICAgIH0sXG4gIH0pLFxuICAoeyBvblNlbGVjdCwgdmFsdWUsIGNoaWxkcmVuLCBjb250ZW50LCBzdHlsZSwgY2xhc3NOYW1lLCBoaWRlSWNvbiB9KSA9PlxuICAgICg8RHJvcGRvd25cbiAgICAgIG92ZXJsYXk9e1xuICAgICAgICA8TWVudSBzZWxlY3RlZEtleXM9e1t2YWx1ZV19IG9uU2VsZWN0PXsoeyBzZWxlY3RlZEtleXMgfSkgPT4gb25TZWxlY3Qoc2VsZWN0ZWRLZXlzWzBdKX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L01lbnU+XG4gICAgICB9XG4gICAgPlxuICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgICB7IWhpZGVJY29uICYmIDxJY29uIHR5cGU9XCJkb3duXCIgLz59XG4gICAgICA8L3NwYW4+XG4gICAgPC9Ecm9wZG93bj4pLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbmRyb3Bkb3duLkl0ZW0gPSBNZW51Lkl0ZW07XG5leHBvcnQgZGVmYXVsdCBkcm9wZG93bjtcbiJdfQ==
