var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import { createComponent, border } from 'olymp-fela';

var SplitView = createComponent(function (_ref) {
  var theme = _ref.theme,
      maxWidth = _ref.maxWidth,
      center = _ref.center,
      background = _ref.background;
  return {
    hasFlex: {
      display: 'flex',
      flex: '1 1 0%'
    },
    background: background === true && 'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.033))',
    '> :first-child': {
      flexGrow: 0,
      overflowY: 'auto',
      position: 'relative'
    },
    '> :nth-child(2)': {
      flexGrow: 1,
      overflowY: 'auto',
      margin: center && '0 auto',
      position: 'relative',
      // borderX: center && border(theme),
      maxWidth: maxWidth,
      height: '100%'
    }
  };
}, 'div', function (_ref2) {
  var maxWidth = _ref2.maxWidth,
      center = _ref2.center,
      background = _ref2.background,
      p = _objectWithoutProperties(_ref2, ['maxWidth', 'center', 'background']);

  return Object.keys(p);
});

export { SplitView };
var Panel = createComponent(function (_ref3) {
  var display = _ref3.display,
      axis = _ref3.axis,
      show = _ref3.show,
      alignLabel = _ref3.alignLabel,
      rest = _objectWithoutProperties(_ref3, ['display', 'axis', 'show', 'alignLabel']);

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

export { Panel };
var Container = createComponent(function (_ref4) {
  var theme = _ref4.theme,
      width = _ref4.width,
      padding = _ref4.padding,
      minHeight = _ref4.minHeight,
      height = _ref4.height;
  return {
    width: width || 700,
    maxWidth: width || 700,
    height: height,
    minHeight: minHeight,
    // boxShadow: theme.boxShadow,
    marginX: 'auto',
    padding: padding !== undefined ? padding : theme.space3,
    backgroundColor: '#FFFFFF',
    position: 'relative'
  };
}, 'div', function (_ref5) {
  var width = _ref5.width,
      minHeight = _ref5.minHeight,
      padding = _ref5.padding,
      p = _objectWithoutProperties(_ref5, ['width', 'minHeight', 'padding']);

  return Object.keys(p);
});

export { Container };
export var Placeholder = createComponent(function (_ref6) {
  var theme = _ref6.theme;
  return {
    textAlign: 'center',
    fontWeight: 200,
    fontSize: '200%',
    opacity: 0.5,
    minHeight: 300,
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  };
}, 'div', function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2NvbnRhaW5lcnMuZXM2Il0sIm5hbWVzIjpbImNyZWF0ZUNvbXBvbmVudCIsImJvcmRlciIsIlNwbGl0VmlldyIsInRoZW1lIiwibWF4V2lkdGgiLCJjZW50ZXIiLCJiYWNrZ3JvdW5kIiwiaGFzRmxleCIsImRpc3BsYXkiLCJmbGV4IiwiZmxleEdyb3ciLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsIm1hcmdpbiIsImhlaWdodCIsInAiLCJPYmplY3QiLCJrZXlzIiwiUGFuZWwiLCJheGlzIiwic2hvdyIsImFsaWduTGFiZWwiLCJyZXN0IiwiZmxleERpcmVjdGlvbiIsInVuZGVmaW5lZCIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiIsIkNvbnRhaW5lciIsIndpZHRoIiwicGFkZGluZyIsIm1pbkhlaWdodCIsIm1hcmdpblgiLCJzcGFjZTMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQbGFjZWhvbGRlciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm9wYWNpdHkiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsZUFBVCxFQUEwQkMsTUFBMUIsUUFBd0MsWUFBeEM7O0FBRU8sSUFBTUMsWUFBWUYsZ0JBQ3ZCO0FBQUEsTUFBR0csS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsUUFBVixRQUFVQSxRQUFWO0FBQUEsTUFBb0JDLE1BQXBCLFFBQW9CQSxNQUFwQjtBQUFBLE1BQTRCQyxVQUE1QixRQUE0QkEsVUFBNUI7QUFBQSxTQUE4QztBQUM1Q0MsYUFBUztBQUNQQyxlQUFTLE1BREY7QUFFUEMsWUFBTTtBQUZDLEtBRG1DO0FBSzVDSCxnQkFDRUEsZUFBZSxJQUFmLElBQXVCLGtFQU5tQjtBQU81QyxzQkFBa0I7QUFDaEJJLGdCQUFVLENBRE07QUFFaEJDLGlCQUFXLE1BRks7QUFHaEJDLGdCQUFVO0FBSE0sS0FQMEI7QUFZNUMsdUJBQW1CO0FBQ2pCRixnQkFBVSxDQURPO0FBRWpCQyxp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IGNyZWF0ZUNvbXBvbmVudCwgYm9yZGVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmV4cG9ydCBjb25zdCBTcGxpdFZpZXcgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBtYXhXaWR0aCwgY2VudGVyLCBiYWNrZ3JvdW5kIH0pID0+ICh7XG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleDogJzEgMSAwJScsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOlxuICAgICAgYmFja2dyb3VuZCA9PT0gdHJ1ZSAmJiAnbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC4wNSksIHJnYmEoMCwgMCwgMCwgMC4wMzMpKScsXG4gICAgJz4gOmZpcnN0LWNoaWxkJzoge1xuICAgICAgZmxleEdyb3c6IDAsXG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIH0sXG4gICAgJz4gOm50aC1jaGlsZCgyKSc6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBtYXJnaW46IGNlbnRlciAmJiAnMCBhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgLy8gYm9yZGVyWDogY2VudGVyICYmIGJvcmRlcih0aGVtZSksXG4gICAgICBtYXhXaWR0aCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgKHsgbWF4V2lkdGgsIGNlbnRlciwgYmFja2dyb3VuZCwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBjb25zdCBQYW5lbCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgZGlzcGxheSwgYXhpcywgc2hvdywgYWxpZ25MYWJlbCwgLi4ucmVzdCB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC8vIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgZGlzcGxheTogc2hvdyA9PT0gZmFsc2UgPyAnbm9uZScgOiBkaXNwbGF5LFxuICAgIGZsZXhEaXJlY3Rpb246IGF4aXMgPT09ICd4JyA/ICdyb3cnIDogYXhpcyA9PT0gJ3knID8gJ2NvbHVtbicgOiB1bmRlZmluZWQsXG4gICAgJz4gKic6IGRpc3BsYXkgPT09ICdmbGV4JyAmJiB7XG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICB9LFxuICAgIC4uLnJlc3QsXG4gICAgJyYgLmFudC1mb3JtLWl0ZW0nOiBhbGlnbkxhYmVsICYmIHtcbiAgICAgIC8vIG9vcHMsIHNob3VsZCBub3QgYmUgaGVyZSFcbiAgICAgIG1hcmdpbkJvdHRvbTogMTIsXG4gICAgICAnPiAuYW50LWZvcm0taXRlbS1sYWJlbCc6IHtcbiAgICAgICAgdGV4dEFsaWduOiBhbGlnbkxhYmVsLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gIFsnY2hpbGRyZW4nLCAnaXRlbVNjb3BlJywgJ2l0ZW1UeXBlJ10sXG4pO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgd2lkdGgsIHBhZGRpbmcsIG1pbkhlaWdodCwgaGVpZ2h0IH0pID0+ICh7XG4gICAgd2lkdGg6IHdpZHRoIHx8IDcwMCxcbiAgICBtYXhXaWR0aDogd2lkdGggfHwgNzAwLFxuICAgIGhlaWdodCxcbiAgICBtaW5IZWlnaHQsXG4gICAgLy8gYm94U2hhZG93OiB0aGVtZS5ib3hTaGFkb3csXG4gICAgbWFyZ2luWDogJ2F1dG8nLFxuICAgIHBhZGRpbmc6IHBhZGRpbmcgIT09IHVuZGVmaW5lZCA/IHBhZGRpbmcgOiB0aGVtZS5zcGFjZTMsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH0pLFxuICAnZGl2JyxcbiAgKHsgd2lkdGgsIG1pbkhlaWdodCwgcGFkZGluZywgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBjb25zdCBQbGFjZWhvbGRlciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGZvbnRXZWlnaHQ6IDIwMCxcbiAgICBmb250U2l6ZTogJzIwMCUnLFxuICAgIG9wYWNpdHk6IDAuNSxcbiAgICBtaW5IZWlnaHQ6IDMwMCxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gIH0pLFxuICAnZGl2JyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG4iXX0=
