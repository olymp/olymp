var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Children, cloneElement } from 'react';
import { createComponent } from 'olymp-fela';

export default createComponent(function (_ref) {
  var theme = _ref.theme,
      large = _ref.large,
      onClick = _ref.onClick,
      disabled = _ref.disabled;
  return {
    width: large ? 30 : 22,
    height: large ? 30 : 22,
    marginRight: 0,
    borderRadius: '50%',
    position: 'relative',
    cursor: onClick && !disabled ? 'pointer' : undefined,
    opacity: disabled ? 0.67 : 1,
    '> *': {
      center: true
    },
    onHover: {
      backgroundColor: onClick && !disabled ? theme.dark5 : undefined
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      onClick = _ref2.onClick,
      disabled = _ref2.disabled,
      large = _ref2.large,
      p = _objectWithoutProperties(_ref2, ['className', 'children', 'onClick', 'disabled', 'large']);

  return React.createElement(
    'div',
    { className: className, onClick: disabled ? function () {} : onClick },
    Children.map(children, function (child) {
      return child ? cloneElement(child, _extends({ size: large ? 20 : 14 }, p)) : child;
    })
  );
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS9leHRyYS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDaGlsZHJlbiIsImNsb25lRWxlbWVudCIsImNyZWF0ZUNvbXBvbmVudCIsInRoZW1lIiwibGFyZ2UiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJjdXJzb3IiLCJ1bmRlZmluZWQiLCJvcGFjaXR5IiwiY2VudGVyIiwib25Ib3ZlciIsImJhY2tncm91bmRDb2xvciIsImRhcms1IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwIiwibWFwIiwiY2hpbGQiLCJzaXplIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLEVBQTBCQyxZQUExQixRQUE4QyxPQUE5QztBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsZUFBZUEsZ0JBQ2I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsT0FBakIsUUFBaUJBLE9BQWpCO0FBQUEsTUFBMEJDLFFBQTFCLFFBQTBCQSxRQUExQjtBQUFBLFNBQTBDO0FBQ3hDQyxXQUFPSCxRQUFRLEVBQVIsR0FBYSxFQURvQjtBQUV4Q0ksWUFBUUosUUFBUSxFQUFSLEdBQWEsRUFGbUI7QUFHeENLLGlCQUFhLENBSDJCO0FBSXhDQyxrQkFBYyxLQUowQjtBQUt4Q0MsY0FBVSxVQUw4QjtBQU14Q0MsWUFBUVAsV0FBVyxDQUFDQyxRQUFaLEdBQXVCLFNBQXZCLEdBQW1DTyxTQU5IO0FBT3hDQyxhQUFTUixXQUFXLElBQVgsR0FBa0IsQ0FQYTtBQVF4QyxXQUFPO0FBQ0xTLGNBQVE7QUFESCxLQVJpQztBQVd4Q0MsYUFBUztBQUNQQyx1QkFBaUJaLFdBQVcsQ0FBQ0MsUUFBWixHQUF1QkgsTUFBTWUsS0FBN0IsR0FBcUNMO0FBRC9DO0FBWCtCLEdBQTFDO0FBQUEsQ0FEYSxFQWdCYjtBQUFBLE1BQUdNLFNBQUgsU0FBR0EsU0FBSDtBQUFBLE1BQWNDLFFBQWQsU0FBY0EsUUFBZDtBQUFBLE1BQXdCZixPQUF4QixTQUF3QkEsT0FBeEI7QUFBQSxNQUFpQ0MsUUFBakMsU0FBaUNBLFFBQWpDO0FBQUEsTUFBMkNGLEtBQTNDLFNBQTJDQSxLQUEzQztBQUFBLE1BQXFEaUIsQ0FBckQ7O0FBQUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFXRixTQUFoQixFQUEyQixTQUFTYixXQUFXLFlBQU0sQ0FBRSxDQUFuQixHQUFzQkQsT0FBMUQ7QUFDR0wsYUFBU3NCLEdBQVQsQ0FDQ0YsUUFERCxFQUVDO0FBQUEsYUFDRUcsUUFBUXRCLGFBQWFzQixLQUFiLGFBQXNCQyxNQUFNcEIsUUFBUSxFQUFSLEdBQWEsRUFBekMsSUFBZ0RpQixDQUFoRCxFQUFSLEdBQStERSxLQURqRTtBQUFBLEtBRkQ7QUFESCxHQURGO0FBQUEsQ0FoQmEsRUF5QmI7QUFBQSxTQUFLRSxPQUFPQyxJQUFQLENBQVlMLENBQVosQ0FBTDtBQUFBLENBekJhLENBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9tZW51L2V4dHJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgbGFyZ2UsIG9uQ2xpY2ssIGRpc2FibGVkIH0pID0+ICh7XG4gICAgd2lkdGg6IGxhcmdlID8gMzAgOiAyMixcbiAgICBoZWlnaHQ6IGxhcmdlID8gMzAgOiAyMixcbiAgICBtYXJnaW5SaWdodDogMCxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGN1cnNvcjogb25DbGljayAmJiAhZGlzYWJsZWQgPyAncG9pbnRlcicgOiB1bmRlZmluZWQsXG4gICAgb3BhY2l0eTogZGlzYWJsZWQgPyAwLjY3IDogMSxcbiAgICAnPiAqJzoge1xuICAgICAgY2VudGVyOiB0cnVlLFxuICAgIH0sXG4gICAgb25Ib3Zlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBvbkNsaWNrICYmICFkaXNhYmxlZCA/IHRoZW1lLmRhcms1IDogdW5kZWZpbmVkLFxuICAgIH0sXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBvbkNsaWNrLCBkaXNhYmxlZCwgbGFyZ2UsIC4uLnAgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e2Rpc2FibGVkID8gKCkgPT4ge30gOiBvbkNsaWNrfT5cbiAgICAgIHtDaGlsZHJlbi5tYXAoXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjaGlsZCA9PlxuICAgICAgICAgIGNoaWxkID8gY2xvbmVFbGVtZW50KGNoaWxkLCB7IHNpemU6IGxhcmdlID8gMjAgOiAxNCwgLi4ucCB9KSA6IGNoaWxkLFxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG4iXX0=
