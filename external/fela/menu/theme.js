'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = require('recompose');

var _reactFela = require('react-fela');

var enhance = (0, _recompose.compose)(_reactFela.withTheme, (0, _recompose.withPropsOnChange)(['theme', 'inverted', 'color', 'collapsed', 'width'], function (_ref) {
  var theme = _ref.theme,
      inverted = _ref.inverted,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? '#F4F5F7' : _ref$color,
      _ref$collapsed = _ref.collapsed,
      collapsed = _ref$collapsed === undefined ? false : _ref$collapsed,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 240 : _ref$width;
  return {
    theme: {
      // inverted: inverted === undefined ? color === true : inverted,
      inverted: inverted,
      collapsed: collapsed,
      width: width
    },
    color: color === true && theme.color || theme[color] || color
  };
}));
exports.default = enhance;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS90aGVtZS5lczYiXSwibmFtZXMiOlsiZW5oYW5jZSIsInRoZW1lIiwiaW52ZXJ0ZWQiLCJjb2xvciIsImNvbGxhcHNlZCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLDhDQUVkLGtDQUNFLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsT0FBdEIsRUFBK0IsV0FBL0IsRUFBNEMsT0FBNUMsQ0FERixFQUVFO0FBQUEsTUFDRUMsS0FERixRQUNFQSxLQURGO0FBQUEsTUFFRUMsUUFGRixRQUVFQSxRQUZGO0FBQUEsd0JBR0VDLEtBSEY7QUFBQSxNQUdFQSxLQUhGLDhCQUdVLFNBSFY7QUFBQSw0QkFJRUMsU0FKRjtBQUFBLE1BSUVBLFNBSkYsa0NBSWMsS0FKZDtBQUFBLHdCQUtFQyxLQUxGO0FBQUEsTUFLRUEsS0FMRiw4QkFLVSxHQUxWO0FBQUEsU0FNTztBQUNMSixXQUFPO0FBQ0w7QUFDQUMsd0JBRks7QUFHTEUsMEJBSEs7QUFJTEM7QUFKSyxLQURGO0FBT0xGLFdBQVFBLFVBQVUsSUFBVixJQUFrQkYsTUFBTUUsS0FBekIsSUFBbUNGLE1BQU1FLEtBQU4sQ0FBbkMsSUFBbURBO0FBUHJELEdBTlA7QUFBQSxDQUZGLENBRmMsQ0FBaEI7a0JBcUJlSCxPIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvbWVudS90aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFRoZW1lLFxuICB3aXRoUHJvcHNPbkNoYW5nZShcbiAgICBbJ3RoZW1lJywgJ2ludmVydGVkJywgJ2NvbG9yJywgJ2NvbGxhcHNlZCcsICd3aWR0aCddLFxuICAgICh7XG4gICAgICB0aGVtZSxcbiAgICAgIGludmVydGVkLFxuICAgICAgY29sb3IgPSAnI0Y0RjVGNycsXG4gICAgICBjb2xsYXBzZWQgPSBmYWxzZSxcbiAgICAgIHdpZHRoID0gMjQwLFxuICAgIH0pID0+ICh7XG4gICAgICB0aGVtZToge1xuICAgICAgICAvLyBpbnZlcnRlZDogaW52ZXJ0ZWQgPT09IHVuZGVmaW5lZCA/IGNvbG9yID09PSB0cnVlIDogaW52ZXJ0ZWQsXG4gICAgICAgIGludmVydGVkLFxuICAgICAgICBjb2xsYXBzZWQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfSxcbiAgICAgIGNvbG9yOiAoY29sb3IgPT09IHRydWUgJiYgdGhlbWUuY29sb3IpIHx8IHRoZW1lW2NvbG9yXSB8fCBjb2xvcixcbiAgICB9KSxcbiAgKSxcbik7XG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlO1xuIl19
