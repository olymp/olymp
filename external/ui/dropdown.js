import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import 'antd/lib/menu/style';
import _Menu2 from 'antd/lib/menu';
import 'antd/lib/dropdown/style';
import _Dropdown from 'antd/lib/dropdown';
import 'antd/lib/menu/style';
import _Menu from 'antd/lib/menu';
import React from 'react';

import { createComponent } from 'olymp-fela';

var _ref4 = React.createElement(_Icon, { type: 'down' });

var dropdown = createComponent(function (_ref) {
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
  return React.createElement(
    _Dropdown,
    {
      overlay: React.createElement(
        _Menu,
        { selectedKeys: [value], onSelect: function onSelect(_ref3) {
            var selectedKeys = _ref3.selectedKeys;
            return _onSelect(selectedKeys[0]);
          } },
        children
      )
    },
    React.createElement(
      'span',
      { style: style, className: className },
      content,
      !hideIcon && _ref4
    )
  );
}, function (p) {
  return Object.keys(p);
});
dropdown.Item = _Menu2.Item;
export default dropdown;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2Ryb3Bkb3duLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsImRyb3Bkb3duIiwiZmxvYXQiLCJtYXJnaW5MZWZ0Iiwib25TZWxlY3QiLCJ2YWx1ZSIsImNoaWxkcmVuIiwiY29udGVudCIsInN0eWxlIiwiY2xhc3NOYW1lIiwiaGlkZUljb24iLCJzZWxlY3RlZEtleXMiLCJPYmplY3QiLCJrZXlzIiwicCIsIkl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjs7QUFFQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDOztZQW1Cc0IsNkJBQU0sTUFBSyxNQUFYLEc7O0FBakJ0QixJQUFNQyxXQUFXRCxnQkFDZjtBQUFBLE1BQUdFLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RBLGdCQURjO0FBRWQsV0FBTztBQUNMQyxrQkFBWTtBQURQO0FBRk8sR0FBaEI7QUFBQSxDQURlLEVBT2Y7QUFBQSxNQUFHQyxTQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFhQyxLQUFiLFNBQWFBLEtBQWI7QUFBQSxNQUFvQkMsUUFBcEIsU0FBb0JBLFFBQXBCO0FBQUEsTUFBOEJDLE9BQTlCLFNBQThCQSxPQUE5QjtBQUFBLE1BQXVDQyxLQUF2QyxTQUF1Q0EsS0FBdkM7QUFBQSxNQUE4Q0MsU0FBOUMsU0FBOENBLFNBQTlDO0FBQUEsTUFBeURDLFFBQXpELFNBQXlEQSxRQUF6RDtBQUFBLFNBQ0c7QUFBQTtBQUFBO0FBQ0MsZUFDRTtBQUFBO0FBQUEsVUFBTSxjQUFjLENBQUNMLEtBQUQsQ0FBcEIsRUFBNkIsVUFBVTtBQUFBLGdCQUFHTSxZQUFILFNBQUdBLFlBQUg7QUFBQSxtQkFBc0JQLFVBQVNPLGFBQWEsQ0FBYixDQUFULENBQXRCO0FBQUEsV0FBdkM7QUFDR0w7QUFESDtBQUZIO0FBT0M7QUFBQTtBQUFBLFFBQU0sT0FBT0UsS0FBYixFQUFvQixXQUFXQyxTQUEvQjtBQUNHRixhQURIO0FBRUcsT0FBQ0csUUFBRDtBQUZIO0FBUEQsR0FESDtBQUFBLENBUGUsRUFvQmY7QUFBQSxTQUFLRSxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBcEJlLENBQWpCO0FBc0JBYixTQUFTYyxJQUFULEdBQWdCLE9BQUtBLElBQXJCO0FBQ0EsZUFBZWQsUUFBZiIsImZpbGUiOiJwYWNrYWdlcy91aS9kcm9wZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEcm9wZG93biwgTWVudSwgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmNvbnN0IGRyb3Bkb3duID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyBmbG9hdCB9KSA9PiAoe1xuICAgIGZsb2F0LFxuICAgICc+IGknOiB7XG4gICAgICBtYXJnaW5MZWZ0OiAzLFxuICAgIH0sXG4gIH0pLFxuICAoeyBvblNlbGVjdCwgdmFsdWUsIGNoaWxkcmVuLCBjb250ZW50LCBzdHlsZSwgY2xhc3NOYW1lLCBoaWRlSWNvbiB9KSA9PlxuICAgICg8RHJvcGRvd25cbiAgICAgIG92ZXJsYXk9e1xuICAgICAgICA8TWVudSBzZWxlY3RlZEtleXM9e1t2YWx1ZV19IG9uU2VsZWN0PXsoeyBzZWxlY3RlZEtleXMgfSkgPT4gb25TZWxlY3Qoc2VsZWN0ZWRLZXlzWzBdKX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L01lbnU+XG4gICAgICB9XG4gICAgPlxuICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgICB7IWhpZGVJY29uICYmIDxJY29uIHR5cGU9XCJkb3duXCIgLz59XG4gICAgICA8L3NwYW4+XG4gICAgPC9Ecm9wZG93bj4pLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbmRyb3Bkb3duLkl0ZW0gPSBNZW51Lkl0ZW07XG5leHBvcnQgZGVmYXVsdCBkcm9wZG93bjtcbiJdfQ==
