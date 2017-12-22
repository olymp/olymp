import React from 'react';
import { createComponent } from 'olymp-fela';
import FaPencil from 'olymp-icons/lib/fa-pencil';

import { Link } from 'olymp-router';

var Button = createComponent(function (_ref) {
  var theme = _ref.theme,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 30 : _ref$size;
  return {
    borderRadius: '50%',
    backgroundColor: theme.color,
    width: size,
    height: size,
    color: theme.light,
    '> svg': {
      fill: theme.light,
      stroke: theme.light
    },
    '> *': {
      center: true
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      to = _ref2.to,
      updateQuery = _ref2.updateQuery;
  return React.createElement(
    Link,
    { updateQuery: updateQuery, to: to },
    React.createElement(
      'div',
      { className: className },
      children
    )
  );
}, ['className', 'to', 'updateQuery']);

var _ref3 = React.createElement(FaPencil, { size: 12 });

Button.Edit = function (props) {
  return React.createElement(
    Button,
    props,
    _ref3
  );
};

export default Button;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvYnV0dG9uLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsIkxpbmsiLCJCdXR0b24iLCJ0aGVtZSIsInNpemUiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwibGlnaHQiLCJmaWxsIiwic3Ryb2tlIiwiY2VudGVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJ0byIsInVwZGF0ZVF1ZXJ5IiwiRWRpdCIsInByb3BzIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQzs7O0FBRUEsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjs7QUFFQSxJQUFNQyxTQUFTRixnQkFDYjtBQUFBLE1BQUdHLEtBQUgsUUFBR0EsS0FBSDtBQUFBLHVCQUFVQyxJQUFWO0FBQUEsTUFBVUEsSUFBViw2QkFBaUIsRUFBakI7QUFBQSxTQUEyQjtBQUN6QkMsa0JBQWMsS0FEVztBQUV6QkMscUJBQWlCSCxNQUFNSSxLQUZFO0FBR3pCQyxXQUFPSixJQUhrQjtBQUl6QkssWUFBUUwsSUFKaUI7QUFLekJHLFdBQU9KLE1BQU1PLEtBTFk7QUFNekIsYUFBUztBQUNQQyxZQUFNUixNQUFNTyxLQURMO0FBRVBFLGNBQVFULE1BQU1PO0FBRlAsS0FOZ0I7QUFVekIsV0FBTztBQUNMRyxjQUFRO0FBREg7QUFWa0IsR0FBM0I7QUFBQSxDQURhLEVBZWI7QUFBQSxNQUFHQyxTQUFILFNBQUdBLFNBQUg7QUFBQSxNQUFjQyxRQUFkLFNBQWNBLFFBQWQ7QUFBQSxNQUF3QkMsRUFBeEIsU0FBd0JBLEVBQXhCO0FBQUEsTUFBNEJDLFdBQTVCLFNBQTRCQSxXQUE1QjtBQUFBLFNBQ0U7QUFBQyxRQUFEO0FBQUEsTUFBTSxhQUFhQSxXQUFuQixFQUFnQyxJQUFJRCxFQUFwQztBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVdGLFNBQWhCO0FBQTRCQztBQUE1QjtBQURGLEdBREY7QUFBQSxDQWZhLEVBb0JiLENBQUMsV0FBRCxFQUFjLElBQWQsRUFBb0IsYUFBcEIsQ0FwQmEsQ0FBZjs7WUF5Qkksb0JBQUMsUUFBRCxJQUFVLE1BQU0sRUFBaEIsRzs7QUFGSmIsT0FBT2dCLElBQVAsR0FBYztBQUFBLFNBQ1o7QUFBQyxVQUFEO0FBQVlDLFNBQVo7QUFBQTtBQUFBLEdBRFk7QUFBQSxDQUFkOztBQU1BLGVBQWVqQixNQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgRmFQZW5jaWwgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcblxuY29uc3QgQnV0dG9uID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgc2l6ZSA9IDMwIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIHdpZHRoOiBzaXplLFxuICAgIGhlaWdodDogc2l6ZSxcbiAgICBjb2xvcjogdGhlbWUubGlnaHQsXG4gICAgJz4gc3ZnJzoge1xuICAgICAgZmlsbDogdGhlbWUubGlnaHQsXG4gICAgICBzdHJva2U6IHRoZW1lLmxpZ2h0LFxuICAgIH0sXG4gICAgJz4gKic6IHtcbiAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICB9LFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgdG8sIHVwZGF0ZVF1ZXJ5IH0pID0+IChcbiAgICA8TGluayB1cGRhdGVRdWVyeT17dXBkYXRlUXVlcnl9IHRvPXt0b30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9MaW5rPlxuICApLFxuICBbJ2NsYXNzTmFtZScsICd0bycsICd1cGRhdGVRdWVyeSddLFxuKTtcblxuQnV0dG9uLkVkaXQgPSBwcm9wcyA9PiAoXG4gIDxCdXR0b24gey4uLnByb3BzfT5cbiAgICA8RmFQZW5jaWwgc2l6ZT17MTJ9IC8+XG4gIDwvQnV0dG9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19
