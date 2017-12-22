function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'olymp-fela';

export default createComponent(function (_ref) {
  var theme = _ref.theme,
      large = _ref.large,
      extra = _ref.extra;

  var width = theme.collapsed && (large ? 54 : 40) || (!extra ? 54 : 40);

  return {
    width: width,
    minWidth: width,
    textAlign: extra && 'right',
    display: extra && theme.collapsed && 'none',
    ellipsis: true,
    '> *': {
      display: 'block',
      margin: '0 auto',
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 200
    },
    '& svg': {
      size: large ? 36 : !extra ? 20 : 14
    },
    '& img': {
      size: large ? 40 : !extra ? 32 : 20,
      borderRadius: theme.collapsed ? '50%' : theme.borderRadius
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return React.createElement(
    'div',
    { className: className },
    children
  );
}, function (_ref3) {
  var large = _ref3.large,
      p = _objectWithoutProperties(_ref3, ['large']);

  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS9pbWFnZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb21wb25lbnQiLCJ0aGVtZSIsImxhcmdlIiwiZXh0cmEiLCJ3aWR0aCIsImNvbGxhcHNlZCIsIm1pbldpZHRoIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImVsbGlwc2lzIiwibWFyZ2luIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwic2l6ZSIsImJvcmRlclJhZGl1cyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicCIsIk9iamVjdCIsImtleXMiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsZUFBZUEsZ0JBQ2IsZ0JBQTZCO0FBQUEsTUFBMUJDLEtBQTBCLFFBQTFCQSxLQUEwQjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQzNCLE1BQU1DLFFBQVNILE1BQU1JLFNBQU4sS0FBb0JILFFBQVEsRUFBUixHQUFhLEVBQWpDLENBQUQsS0FBMkMsQ0FBQ0MsS0FBRCxHQUFTLEVBQVQsR0FBYyxFQUF6RCxDQUFkOztBQUVBLFNBQU87QUFDTEMsZ0JBREs7QUFFTEUsY0FBVUYsS0FGTDtBQUdMRyxlQUFXSixTQUFTLE9BSGY7QUFJTEssYUFBU0wsU0FBU0YsTUFBTUksU0FBZixJQUE0QixNQUpoQztBQUtMSSxjQUFVLElBTEw7QUFNTCxXQUFPO0FBQ0xELGVBQVMsT0FESjtBQUVMRSxjQUFRLFFBRkg7QUFHTEgsaUJBQVcsUUFITjtBQUlMSSxnQkFBVSxFQUpMO0FBS0xDLGtCQUFZO0FBTFAsS0FORjtBQWFMLGFBQVM7QUFDUEMsWUFBTVgsUUFBUSxFQUFSLEdBQWEsQ0FBQ0MsS0FBRCxHQUFTLEVBQVQsR0FBYztBQUQxQixLQWJKO0FBZ0JMLGFBQVM7QUFDUFUsWUFBTVgsUUFBUSxFQUFSLEdBQWEsQ0FBQ0MsS0FBRCxHQUFTLEVBQVQsR0FBYyxFQUQxQjtBQUVQVyxvQkFBY2IsTUFBTUksU0FBTixHQUFrQixLQUFsQixHQUEwQkosTUFBTWE7QUFGdkM7QUFoQkosR0FBUDtBQXFCRCxDQXpCWSxFQTBCYjtBQUFBLE1BQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFDLFNBQWIsU0FBYUEsU0FBYjtBQUFBLFNBQTZCO0FBQUE7QUFBQSxNQUFLLFdBQVdBLFNBQWhCO0FBQTRCRDtBQUE1QixHQUE3QjtBQUFBLENBMUJhLEVBMkJiO0FBQUEsTUFBR2IsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBYWUsQ0FBYjs7QUFBQSxTQUFxQkMsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQXJCO0FBQUEsQ0EzQmEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL21lbnUvaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGxhcmdlLCBleHRyYSB9KSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSAodGhlbWUuY29sbGFwc2VkICYmIChsYXJnZSA/IDU0IDogNDApKSB8fCAoIWV4dHJhID8gNTQgOiA0MCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGgsXG4gICAgICBtaW5XaWR0aDogd2lkdGgsXG4gICAgICB0ZXh0QWxpZ246IGV4dHJhICYmICdyaWdodCcsXG4gICAgICBkaXNwbGF5OiBleHRyYSAmJiB0aGVtZS5jb2xsYXBzZWQgJiYgJ25vbmUnLFxuICAgICAgZWxsaXBzaXM6IHRydWUsXG4gICAgICAnPiAqJzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDIwMCxcbiAgICAgIH0sXG4gICAgICAnJiBzdmcnOiB7XG4gICAgICAgIHNpemU6IGxhcmdlID8gMzYgOiAhZXh0cmEgPyAyMCA6IDE0LFxuICAgICAgfSxcbiAgICAgICcmIGltZyc6IHtcbiAgICAgICAgc2l6ZTogbGFyZ2UgPyA0MCA6ICFleHRyYSA/IDMyIDogMjAsXG4gICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuY29sbGFwc2VkID8gJzUwJScgOiB0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG4gICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvZGl2PixcbiAgKHsgbGFyZ2UsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuIl19
