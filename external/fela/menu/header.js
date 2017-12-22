var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'olymp-fela';
import { ThemeProvider } from 'react-fela';
import useTheme from './theme';

var Header = createComponent(function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return {
    // height: 80,
    minHeight: 80,
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    alignItems: 'center',
    fontSize: '120%',
    marginX: -9,
    paddingX: 9,
    marginTop: '-' + theme.space2,
    paddingTop: theme.space2,
    marginBottom: theme.space2,
    paddingBottom: theme.space2,
    backgroundColor: color === true && theme.color || theme[color] || color,
    color: theme.inverted ? theme.light : theme.dark,
    '& svg': {
      size: 40
    },
    '& img': {
      size: 50,
      borderRadius: theme.borderRadius
    }
  };
}, 'div');

export default useTheme(function (_ref2) {
  var inverted = _ref2.inverted,
      color = _ref2.color,
      theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ['inverted', 'color', 'theme']);

  return React.createElement(
    ThemeProvider,
    { theme: theme },
    React.createElement(Header, _extends({ color: color }, props))
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS9oZWFkZXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29tcG9uZW50IiwiVGhlbWVQcm92aWRlciIsInVzZVRoZW1lIiwiSGVhZGVyIiwidGhlbWUiLCJjb2xvciIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFNocmluayIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsIm1hcmdpblgiLCJwYWRkaW5nWCIsIm1hcmdpblRvcCIsInNwYWNlMiIsInBhZGRpbmdUb3AiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiaW52ZXJ0ZWQiLCJsaWdodCIsImRhcmsiLCJzaXplIiwiYm9yZGVyUmFkaXVzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLFNBQVNDLGFBQVQsUUFBOEIsWUFBOUI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLFNBQXJCOztBQUVBLElBQU1DLFNBQVNILGdCQUNiO0FBQUEsTUFBR0ksS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsU0FBdUI7QUFDckI7QUFDQUMsZUFBVyxFQUZVO0FBR3JCQyxhQUFTLE1BSFk7QUFJckJDLG1CQUFlLFFBSk07QUFLckJDLGdCQUFZLENBTFM7QUFNckJDLGdCQUFZLFFBTlM7QUFPckJDLGNBQVUsTUFQVztBQVFyQkMsYUFBUyxDQUFDLENBUlc7QUFTckJDLGNBQVUsQ0FUVztBQVVyQkMscUJBQWVWLE1BQU1XLE1BVkE7QUFXckJDLGdCQUFZWixNQUFNVyxNQVhHO0FBWXJCRSxrQkFBY2IsTUFBTVcsTUFaQztBQWFyQkcsbUJBQWVkLE1BQU1XLE1BYkE7QUFjckJJLHFCQUFrQmQsVUFBVSxJQUFWLElBQWtCRCxNQUFNQyxLQUF6QixJQUFtQ0QsTUFBTUMsS0FBTixDQUFuQyxJQUFtREEsS0FkL0M7QUFlckJBLFdBQU9ELE1BQU1nQixRQUFOLEdBQWlCaEIsTUFBTWlCLEtBQXZCLEdBQStCakIsTUFBTWtCLElBZnZCO0FBZ0JyQixhQUFTO0FBQ1BDLFlBQU07QUFEQyxLQWhCWTtBQW1CckIsYUFBUztBQUNQQSxZQUFNLEVBREM7QUFFUEMsb0JBQWNwQixNQUFNb0I7QUFGYjtBQW5CWSxHQUF2QjtBQUFBLENBRGEsRUF5QmIsS0F6QmEsQ0FBZjs7QUE0QkEsZUFBZXRCLFNBQVM7QUFBQSxNQUFHa0IsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBYWYsS0FBYixTQUFhQSxLQUFiO0FBQUEsTUFBb0JELEtBQXBCLFNBQW9CQSxLQUFwQjtBQUFBLE1BQThCcUIsS0FBOUI7O0FBQUEsU0FDdEI7QUFBQyxpQkFBRDtBQUFBLE1BQWUsT0FBT3JCLEtBQXRCO0FBQ0Usd0JBQUMsTUFBRCxhQUFRLE9BQU9DLEtBQWYsSUFBMEJvQixLQUExQjtBQURGLEdBRHNCO0FBQUEsQ0FBVCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbWVudS9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi90aGVtZSc7XG5cbmNvbnN0IEhlYWRlciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGNvbG9yIH0pID0+ICh7XG4gICAgLy8gaGVpZ2h0OiA4MCxcbiAgICBtaW5IZWlnaHQ6IDgwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZvbnRTaXplOiAnMTIwJScsXG4gICAgbWFyZ2luWDogLTksXG4gICAgcGFkZGluZ1g6IDksXG4gICAgbWFyZ2luVG9wOiBgLSR7dGhlbWUuc3BhY2UyfWAsXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2UyLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2UyLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNlMixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IChjb2xvciA9PT0gdHJ1ZSAmJiB0aGVtZS5jb2xvcikgfHwgdGhlbWVbY29sb3JdIHx8IGNvbG9yLFxuICAgIGNvbG9yOiB0aGVtZS5pbnZlcnRlZCA/IHRoZW1lLmxpZ2h0IDogdGhlbWUuZGFyayxcbiAgICAnJiBzdmcnOiB7XG4gICAgICBzaXplOiA0MCxcbiAgICB9LFxuICAgICcmIGltZyc6IHtcbiAgICAgIHNpemU6IDUwLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbWUoKHsgaW52ZXJ0ZWQsIGNvbG9yLCB0aGVtZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxIZWFkZXIgY29sb3I9e2NvbG9yfSB7Li4ucHJvcHN9IC8+XG4gIDwvVGhlbWVQcm92aWRlcj5cbikpO1xuIl19
