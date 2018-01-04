'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topLoaderStyles = undefined;

var _createComponent = require('../utils/create-component');

var _createComponent2 = _interopRequireDefault(_createComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var topLoaderStyles = exports.topLoaderStyles = function topLoaderStyles(_ref) {
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

exports.default = (0, _createComponent2.default)(topLoaderStyles, 'span', function (_ref2) {
  var loading = _ref2.loading,
      dispatch = _ref2.dispatch,
      transparent = _ref2.transparent,
      p = _objectWithoutProperties(_ref2, ['loading', 'dispatch', 'transparent']);

  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbG9hZGVyL3RvcC5lczYiXSwibmFtZXMiOlsidG9wTG9hZGVyU3R5bGVzIiwidGhlbWUiLCJsb2FkaW5nIiwidHJhbnNwYXJlbnQiLCJ6SW5kZXgiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkJlZm9yZSIsImRpc3BsYXkiLCJjb250ZW50IiwiY29sb3IiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJhbmltYXRpb25OYW1lIiwiZnJvbSIsInRvIiwiZGlzcGF0Y2giLCJwIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztBQUVPLElBQU1BLDRDQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxPQUFWLFFBQVVBLE9BQVY7QUFBQSxNQUFtQkMsV0FBbkIsUUFBbUJBLFdBQW5CO0FBQUEsU0FBc0M7QUFDbkVDLFlBQVEsS0FEMkQ7QUFFbkVDLGFBQVNILFVBQVUsQ0FBVixHQUFjLENBRjRDO0FBR25FSSxnQkFBWSx3QkFIdUQ7QUFJbkVDLFlBQVEsQ0FKMkQ7QUFLbkVDLFdBQU8sTUFMNEQ7QUFNbkVDLGNBQVUsT0FOeUQ7QUFPbkVDLFNBQUssQ0FQOEQ7QUFRbkVDLFVBQU0sQ0FSNkQ7QUFTbkVDLGNBQVUsUUFUeUQ7QUFVbkVDLHFCQUFpQlYsY0FBYyxNQUFkLEdBQXVCLE1BVjJCO0FBV25FVyxjQUFVO0FBQ1JDLGVBQVMsT0FERDtBQUVSTixnQkFBVSxVQUZGO0FBR1JPLGVBQVMsSUFIRDtBQUlSTCxZQUFNLENBQUMsR0FKQztBQUtSSCxhQUFPLEdBTEM7QUFNUkQsY0FBUSxDQU5BO0FBT1JGLGVBQVNGLGNBQWMsR0FBZCxHQUFvQixDQVByQjtBQVFSVSx1QkFBaUJWLGNBQWMsT0FBZCxHQUF3QkYsTUFBTWdCLEtBUnZDO0FBU1JDLHlCQUFtQixJQVRYO0FBVVJDLCtCQUF5QixVQVZqQjtBQVdSQywrQkFBeUIsUUFYakI7QUFZUkMscUJBQWU7QUFDYkMsY0FBTSxFQUFFWCxNQUFNLENBQUMsR0FBVCxFQUFjSCxPQUFPLEtBQXJCLEVBRE87QUFFYixlQUFPLEVBQUVBLE9BQU8sS0FBVCxFQUZNO0FBR2IsZUFBTyxFQUFFQSxPQUFPLEtBQVQsRUFITTtBQUliLGVBQU8sRUFBRUcsTUFBTSxLQUFSLEVBSk07QUFLYixlQUFPLEVBQUVBLE1BQU0sTUFBUixFQUxNO0FBTWJZLFlBQUksRUFBRVosTUFBTSxNQUFSO0FBTlM7QUFaUDtBQVh5RCxHQUF0QztBQUFBLENBQXhCOztrQkFrQ1EsK0JBQ2JYLGVBRGEsRUFFYixNQUZhLEVBR2I7QUFBQSxNQUFHRSxPQUFILFNBQUdBLE9BQUg7QUFBQSxNQUFZc0IsUUFBWixTQUFZQSxRQUFaO0FBQUEsTUFBc0JyQixXQUF0QixTQUFzQkEsV0FBdEI7QUFBQSxNQUFzQ3NCLENBQXRDOztBQUFBLFNBQThDQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBOUM7QUFBQSxDQUhhLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9sb2FkZXIvdG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNvbXBvbmVudCBmcm9tICcuLi91dGlscy9jcmVhdGUtY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHRvcExvYWRlclN0eWxlcyA9ICh7IHRoZW1lLCBsb2FkaW5nLCB0cmFuc3BhcmVudCB9KSA9PiAoe1xuICB6SW5kZXg6IDEwMDAwLFxuICBvcGFjaXR5OiBsb2FkaW5nID8gMSA6IDAsXG4gIHRyYW5zaXRpb246ICdvcGFjaXR5IDUwMG1zIGVhc2Utb3V0JyxcbiAgaGVpZ2h0OiA0LFxuICB3aWR0aDogJzEwMCUnLFxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQgPyAnbm9uZScgOiAnI2RkZCcsXG4gIG9uQmVmb3JlOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgbGVmdDogLTIwMCxcbiAgICB3aWR0aDogMjAwLFxuICAgIGhlaWdodDogNCxcbiAgICBvcGFjaXR5OiB0cmFuc3BhcmVudCA/IDAuNSA6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudCA/ICd3aGl0ZScgOiB0aGVtZS5jb2xvcixcbiAgICBhbmltYXRpb25EdXJhdGlvbjogJzJzJyxcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogJ2luZmluaXRlJyxcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4gICAgYW5pbWF0aW9uTmFtZToge1xuICAgICAgZnJvbTogeyBsZWZ0OiAtMjAwLCB3aWR0aDogJzMwJScgfSxcbiAgICAgICc1MCUnOiB7IHdpZHRoOiAnMzAlJyB9LFxuICAgICAgJzcwJSc6IHsgd2lkdGg6ICc3MCUnIH0sXG4gICAgICAnODAlJzogeyBsZWZ0OiAnNTAlJyB9LFxuICAgICAgJzk1JSc6IHsgbGVmdDogJzEyMCUnIH0sXG4gICAgICB0bzogeyBsZWZ0OiAnMTAwJScgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgdG9wTG9hZGVyU3R5bGVzLFxuICAnc3BhbicsXG4gICh7IGxvYWRpbmcsIGRpc3BhdGNoLCB0cmFuc3BhcmVudCwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG4iXX0=
