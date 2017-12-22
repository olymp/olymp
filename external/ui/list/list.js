function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import { createComponent } from 'olymp-fela';

export default createComponent(function (_ref) {
  var side = _ref.side,
      width = _ref.width;
  return {
    position: 'relative',
    overflow: 'hidden',
    width: width || 300,
    // borderRight: side === 'left' && '1px solid rgb(233, 233, 233)',
    // borderLeft: side === 'right' && '1px solid rgb(233, 233, 233)',
    backgroundColor: 'rgba(0, 0, 0, 0.015)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    onBefore: {
      content: "'>'",
      position: 'absolute',
      top: '45%',
      right: side === 'left' && -26,
      left: side === 'right' && -26,
      fontSize: 30,
      fontWeight: 'bold',
      opacity: 0.2
    }
  };
}, 'div', function (_ref2) {
  var side = _ref2.side,
      p = _objectWithoutProperties(_ref2, ['side']);

  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2xpc3QvbGlzdC5lczYiXSwibmFtZXMiOlsiY3JlYXRlQ29tcG9uZW50Iiwic2lkZSIsIndpZHRoIiwicG9zaXRpb24iLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0Iiwib25CZWZvcmUiLCJjb250ZW50IiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwib3BhY2l0eSIsInAiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsZUFBZUEsZ0JBQ2I7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxLQUFULFFBQVNBLEtBQVQ7QUFBQSxTQUFzQjtBQUNwQkMsY0FBVSxVQURVO0FBRXBCQyxjQUFVLFFBRlU7QUFHcEJGLFdBQU9BLFNBQVMsR0FISTtBQUlwQjtBQUNBO0FBQ0FHLHFCQUFpQixzQkFORztBQU9wQkMsYUFBUyxNQVBXO0FBUXBCQyxtQkFBZSxRQVJLO0FBU3BCQyxZQUFRLE1BVFk7QUFVcEJDLGNBQVU7QUFDUkMsZUFBUyxLQUREO0FBRVJQLGdCQUFVLFVBRkY7QUFHUlEsV0FBSyxLQUhHO0FBSVJDLGFBQU9YLFNBQVMsTUFBVCxJQUFtQixDQUFDLEVBSm5CO0FBS1JZLFlBQU1aLFNBQVMsT0FBVCxJQUFvQixDQUFDLEVBTG5CO0FBTVJhLGdCQUFVLEVBTkY7QUFPUkMsa0JBQVksTUFQSjtBQVFSQyxlQUFTO0FBUkQ7QUFWVSxHQUF0QjtBQUFBLENBRGEsRUFzQmIsS0F0QmEsRUF1QmI7QUFBQSxNQUFHZixJQUFILFNBQUdBLElBQUg7QUFBQSxNQUFZZ0IsQ0FBWjs7QUFBQSxTQUFvQkMsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQXBCO0FBQUEsQ0F2QmEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy91aS9saXN0L2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoeyBzaWRlLCB3aWR0aCB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB3aWR0aDogd2lkdGggfHwgMzAwLFxuICAgIC8vIGJvcmRlclJpZ2h0OiBzaWRlID09PSAnbGVmdCcgJiYgJzFweCBzb2xpZCByZ2IoMjMzLCAyMzMsIDIzMyknLFxuICAgIC8vIGJvcmRlckxlZnQ6IHNpZGUgPT09ICdyaWdodCcgJiYgJzFweCBzb2xpZCByZ2IoMjMzLCAyMzMsIDIzMyknLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wMTUpJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgb25CZWZvcmU6IHtcbiAgICAgIGNvbnRlbnQ6IFwiJz4nXCIsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzQ1JScsXG4gICAgICByaWdodDogc2lkZSA9PT0gJ2xlZnQnICYmIC0yNixcbiAgICAgIGxlZnQ6IHNpZGUgPT09ICdyaWdodCcgJiYgLTI2LFxuICAgICAgZm9udFNpemU6IDMwLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgb3BhY2l0eTogMC4yLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgKHsgc2lkZSwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG4iXX0=
