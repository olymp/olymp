var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import { createComponent } from 'olymp-fela';

export default createComponent(function (_ref) {
  var display = _ref.display,
      axis = _ref.axis,
      show = _ref.show,
      alignLabel = _ref.alignLabel,
      rest = _objectWithoutProperties(_ref, ['display', 'axis', 'show', 'alignLabel']);

  return _extends({
    position: 'relative',
    // border: '1px solid transparent',
    overflowY: 'auto',
    display: show === false ? 'none' : display,
    flexDirection: axis === 'x' ? 'row' : axis === 'y' ? 'column' : undefined,
    '> *': display === 'flex' && {
      overflowY: 'auto'
    }
  }, rest, {
    '& .ant-form-item': alignLabel && {
      // oops, should not be here!
      marginBottom: 12,
      '> .ant-form-item-label': {
        textAlign: alignLabel
      }
    }
  });
}, 'div', ['children', 'itemScope', 'itemType']);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvcGFuZWwuZXM2Il0sIm5hbWVzIjpbImNyZWF0ZUNvbXBvbmVudCIsImRpc3BsYXkiLCJheGlzIiwic2hvdyIsImFsaWduTGFiZWwiLCJyZXN0IiwicG9zaXRpb24iLCJvdmVyZmxvd1kiLCJmbGV4RGlyZWN0aW9uIiwidW5kZWZpbmVkIiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsZUFBVCxRQUFnQyxZQUFoQzs7QUFFQSxlQUFlQSxnQkFDYjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlDLElBQVosUUFBWUEsSUFBWjtBQUFBLE1BQWtCQyxJQUFsQixRQUFrQkEsSUFBbEI7QUFBQSxNQUF3QkMsVUFBeEIsUUFBd0JBLFVBQXhCO0FBQUEsTUFBdUNDLElBQXZDOztBQUFBO0FBQ0VDLGNBQVUsVUFEWjtBQUVFO0FBQ0FDLGVBQVcsTUFIYjtBQUlFTixhQUFTRSxTQUFTLEtBQVQsR0FBaUIsTUFBakIsR0FBMEJGLE9BSnJDO0FBS0VPLG1CQUFlTixTQUFTLEdBQVQsR0FBZSxLQUFmLEdBQXVCQSxTQUFTLEdBQVQsR0FBZSxRQUFmLEdBQTBCTyxTQUxsRTtBQU1FLFdBQU9SLFlBQVksTUFBWixJQUFzQjtBQUMzQk0saUJBQVc7QUFEZ0I7QUFOL0IsS0FTS0YsSUFUTDtBQVVFLHdCQUFvQkQsY0FBYztBQUNoQztBQUNBTSxvQkFBYyxFQUZrQjtBQUdoQyxnQ0FBMEI7QUFDeEJDLG1CQUFXUDtBQURhO0FBSE07QUFWcEM7QUFBQSxDQURhLEVBbUJiLEtBbkJhLEVBb0JiLENBQUMsVUFBRCxFQUFhLFdBQWIsRUFBMEIsVUFBMUIsQ0FwQmEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL3BhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgZGlzcGxheSwgYXhpcywgc2hvdywgYWxpZ25MYWJlbCwgLi4ucmVzdCB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC8vIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgZGlzcGxheTogc2hvdyA9PT0gZmFsc2UgPyAnbm9uZScgOiBkaXNwbGF5LFxuICAgIGZsZXhEaXJlY3Rpb246IGF4aXMgPT09ICd4JyA/ICdyb3cnIDogYXhpcyA9PT0gJ3knID8gJ2NvbHVtbicgOiB1bmRlZmluZWQsXG4gICAgJz4gKic6IGRpc3BsYXkgPT09ICdmbGV4JyAmJiB7XG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICB9LFxuICAgIC4uLnJlc3QsXG4gICAgJyYgLmFudC1mb3JtLWl0ZW0nOiBhbGlnbkxhYmVsICYmIHtcbiAgICAgIC8vIG9vcHMsIHNob3VsZCBub3QgYmUgaGVyZSFcbiAgICAgIG1hcmdpbkJvdHRvbTogMTIsXG4gICAgICAnPiAuYW50LWZvcm0taXRlbS1sYWJlbCc6IHtcbiAgICAgICAgdGV4dEFsaWduOiBhbGlnbkxhYmVsLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gIFsnY2hpbGRyZW4nLCAnaXRlbVNjb3BlJywgJ2l0ZW1UeXBlJ10sXG4pO1xuIl19
