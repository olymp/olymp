import { compose, withPropsOnChange } from 'recompose';
import { withTheme } from 'react-fela';

var enhance = compose(withTheme, withPropsOnChange(['theme', 'inverted', 'color', 'collapsed', 'width'], function (_ref) {
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
export default enhance;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS90aGVtZS5lczYiXSwibmFtZXMiOlsiY29tcG9zZSIsIndpdGhQcm9wc09uQ2hhbmdlIiwid2l0aFRoZW1lIiwiZW5oYW5jZSIsInRoZW1lIiwiaW52ZXJ0ZWQiLCJjb2xvciIsImNvbGxhcHNlZCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxPQUFULEVBQWtCQyxpQkFBbEIsUUFBMkMsV0FBM0M7QUFDQSxTQUFTQyxTQUFULFFBQTBCLFlBQTFCOztBQUVBLElBQU1DLFVBQVVILFFBQ2RFLFNBRGMsRUFFZEQsa0JBQ0UsQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQixPQUF0QixFQUErQixXQUEvQixFQUE0QyxPQUE1QyxDQURGLEVBRUU7QUFBQSxNQUNFRyxLQURGLFFBQ0VBLEtBREY7QUFBQSxNQUVFQyxRQUZGLFFBRUVBLFFBRkY7QUFBQSx3QkFHRUMsS0FIRjtBQUFBLE1BR0VBLEtBSEYsOEJBR1UsU0FIVjtBQUFBLDRCQUlFQyxTQUpGO0FBQUEsTUFJRUEsU0FKRixrQ0FJYyxLQUpkO0FBQUEsd0JBS0VDLEtBTEY7QUFBQSxNQUtFQSxLQUxGLDhCQUtVLEdBTFY7QUFBQSxTQU1PO0FBQ0xKLFdBQU87QUFDTDtBQUNBQyx3QkFGSztBQUdMRSwwQkFISztBQUlMQztBQUpLLEtBREY7QUFPTEYsV0FBUUEsVUFBVSxJQUFWLElBQWtCRixNQUFNRSxLQUF6QixJQUFtQ0YsTUFBTUUsS0FBTixDQUFuQyxJQUFtREE7QUFQckQsR0FOUDtBQUFBLENBRkYsQ0FGYyxDQUFoQjtBQXFCQSxlQUFlSCxPQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbWVudS90aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFRoZW1lLFxuICB3aXRoUHJvcHNPbkNoYW5nZShcbiAgICBbJ3RoZW1lJywgJ2ludmVydGVkJywgJ2NvbG9yJywgJ2NvbGxhcHNlZCcsICd3aWR0aCddLFxuICAgICh7XG4gICAgICB0aGVtZSxcbiAgICAgIGludmVydGVkLFxuICAgICAgY29sb3IgPSAnI0Y0RjVGNycsXG4gICAgICBjb2xsYXBzZWQgPSBmYWxzZSxcbiAgICAgIHdpZHRoID0gMjQwLFxuICAgIH0pID0+ICh7XG4gICAgICB0aGVtZToge1xuICAgICAgICAvLyBpbnZlcnRlZDogaW52ZXJ0ZWQgPT09IHVuZGVmaW5lZCA/IGNvbG9yID09PSB0cnVlIDogaW52ZXJ0ZWQsXG4gICAgICAgIGludmVydGVkLFxuICAgICAgICBjb2xsYXBzZWQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfSxcbiAgICAgIGNvbG9yOiAoY29sb3IgPT09IHRydWUgJiYgdGhlbWUuY29sb3IpIHx8IHRoZW1lW2NvbG9yXSB8fCBjb2xvcixcbiAgICB9KSxcbiAgKSxcbik7XG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlO1xuIl19
