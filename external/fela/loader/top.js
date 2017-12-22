function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import createComponent from '../utils/create-component';

export var topLoaderStyles = function topLoaderStyles(_ref) {
  var theme = _ref.theme,
      loading = _ref.loading,
      transparent = _ref.transparent;
  return {
    zIndex: 10000,
    opacity: loading ? 1 : 0,
    transition: 'opacity 500ms ease-out',
    height: 4,
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    overflow: 'hidden',
    backgroundColor: transparent ? 'none' : '#ddd',
    onBefore: {
      display: 'block',
      position: 'absolute',
      content: '""',
      left: -200,
      width: 200,
      height: 4,
      opacity: transparent ? 0.5 : 1,
      backgroundColor: transparent ? 'white' : theme.color,
      animationDuration: '2s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationName: {
        from: { left: -200, width: '30%' },
        '50%': { width: '30%' },
        '70%': { width: '70%' },
        '80%': { left: '50%' },
        '95%': { left: '120%' },
        to: { left: '100%' }
      }
    }
  };
};

export default createComponent(topLoaderStyles, 'span', function (_ref2) {
  var loading = _ref2.loading,
      dispatch = _ref2.dispatch,
      transparent = _ref2.transparent,
      p = _objectWithoutProperties(_ref2, ['loading', 'dispatch', 'transparent']);

  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbG9hZGVyL3RvcC5lczYiXSwibmFtZXMiOlsiY3JlYXRlQ29tcG9uZW50IiwidG9wTG9hZGVyU3R5bGVzIiwidGhlbWUiLCJsb2FkaW5nIiwidHJhbnNwYXJlbnQiLCJ6SW5kZXgiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkJlZm9yZSIsImRpc3BsYXkiLCJjb250ZW50IiwiY29sb3IiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJhbmltYXRpb25OYW1lIiwiZnJvbSIsInRvIiwiZGlzcGF0Y2giLCJwIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxlQUFQLE1BQTRCLDJCQUE1Qjs7QUFFQSxPQUFPLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxPQUFWLFFBQVVBLE9BQVY7QUFBQSxNQUFtQkMsV0FBbkIsUUFBbUJBLFdBQW5CO0FBQUEsU0FBc0M7QUFDbkVDLFlBQVEsS0FEMkQ7QUFFbkVDLGFBQVNILFVBQVUsQ0FBVixHQUFjLENBRjRDO0FBR25FSSxnQkFBWSx3QkFIdUQ7QUFJbkVDLFlBQVEsQ0FKMkQ7QUFLbkVDLFdBQU8sTUFMNEQ7QUFNbkVDLGNBQVUsT0FOeUQ7QUFPbkVDLFNBQUssQ0FQOEQ7QUFRbkVDLFVBQU0sQ0FSNkQ7QUFTbkVDLGNBQVUsUUFUeUQ7QUFVbkVDLHFCQUFpQlYsY0FBYyxNQUFkLEdBQXVCLE1BVjJCO0FBV25FVyxjQUFVO0FBQ1JDLGVBQVMsT0FERDtBQUVSTixnQkFBVSxVQUZGO0FBR1JPLGVBQVMsSUFIRDtBQUlSTCxZQUFNLENBQUMsR0FKQztBQUtSSCxhQUFPLEdBTEM7QUFNUkQsY0FBUSxDQU5BO0FBT1JGLGVBQVNGLGNBQWMsR0FBZCxHQUFvQixDQVByQjtBQVFSVSx1QkFBaUJWLGNBQWMsT0FBZCxHQUF3QkYsTUFBTWdCLEtBUnZDO0FBU1JDLHlCQUFtQixJQVRYO0FBVVJDLCtCQUF5QixVQVZqQjtBQVdSQywrQkFBeUIsUUFYakI7QUFZUkMscUJBQWU7QUFDYkMsY0FBTSxFQUFFWCxNQUFNLENBQUMsR0FBVCxFQUFjSCxPQUFPLEtBQXJCLEVBRE87QUFFYixlQUFPLEVBQUVBLE9BQU8sS0FBVCxFQUZNO0FBR2IsZUFBTyxFQUFFQSxPQUFPLEtBQVQsRUFITTtBQUliLGVBQU8sRUFBRUcsTUFBTSxLQUFSLEVBSk07QUFLYixlQUFPLEVBQUVBLE1BQU0sTUFBUixFQUxNO0FBTWJZLFlBQUksRUFBRVosTUFBTSxNQUFSO0FBTlM7QUFaUDtBQVh5RCxHQUF0QztBQUFBLENBQXhCOztBQWtDUCxlQUFlWixnQkFDYkMsZUFEYSxFQUViLE1BRmEsRUFHYjtBQUFBLE1BQUdFLE9BQUgsU0FBR0EsT0FBSDtBQUFBLE1BQVlzQixRQUFaLFNBQVlBLFFBQVo7QUFBQSxNQUFzQnJCLFdBQXRCLFNBQXNCQSxXQUF0QjtBQUFBLE1BQXNDc0IsQ0FBdEM7O0FBQUEsU0FBOENDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUE5QztBQUFBLENBSGEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL2xvYWRlci90b3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ29tcG9uZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZS1jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgdG9wTG9hZGVyU3R5bGVzID0gKHsgdGhlbWUsIGxvYWRpbmcsIHRyYW5zcGFyZW50IH0pID0+ICh7XG4gIHpJbmRleDogMTAwMDAsXG4gIG9wYWNpdHk6IGxvYWRpbmcgPyAxIDogMCxcbiAgdHJhbnNpdGlvbjogJ29wYWNpdHkgNTAwbXMgZWFzZS1vdXQnLFxuICBoZWlnaHQ6IDQsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICB0b3A6IDAsXG4gIGxlZnQ6IDAsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudCA/ICdub25lJyA6ICcjZGRkJyxcbiAgb25CZWZvcmU6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICBsZWZ0OiAtMjAwLFxuICAgIHdpZHRoOiAyMDAsXG4gICAgaGVpZ2h0OiA0LFxuICAgIG9wYWNpdHk6IHRyYW5zcGFyZW50ID8gMC41IDogMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zcGFyZW50ID8gJ3doaXRlJyA6IHRoZW1lLmNvbG9yLFxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMnMnLFxuICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnLFxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcbiAgICBhbmltYXRpb25OYW1lOiB7XG4gICAgICBmcm9tOiB7IGxlZnQ6IC0yMDAsIHdpZHRoOiAnMzAlJyB9LFxuICAgICAgJzUwJSc6IHsgd2lkdGg6ICczMCUnIH0sXG4gICAgICAnNzAlJzogeyB3aWR0aDogJzcwJScgfSxcbiAgICAgICc4MCUnOiB7IGxlZnQ6ICc1MCUnIH0sXG4gICAgICAnOTUlJzogeyBsZWZ0OiAnMTIwJScgfSxcbiAgICAgIHRvOiB7IGxlZnQ6ICcxMDAlJyB9LFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICB0b3BMb2FkZXJTdHlsZXMsXG4gICdzcGFuJyxcbiAgKHsgbG9hZGluZywgZGlzcGF0Y2gsIHRyYW5zcGFyZW50LCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbiJdfQ==
