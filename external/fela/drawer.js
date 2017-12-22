var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';

var getColor = function getColor(theme, color) {
  if (color === true) {
    return theme.color;
  } else if (typeof color === 'string') {
    return theme[color] || color;
  }
  return theme.inverted ? theme.light : theme.dark;
};

var Drawer = createComponent(function (_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 312 : _ref$width,
      right = _ref.right,
      left = _ref.left,
      open = _ref.open,
      _ref$collapsed = _ref.collapsed,
      collapsed = _ref$collapsed === undefined ? true : _ref$collapsed,
      flex = _ref.flex,
      dim = _ref.dim;
  return {
    pointerEvents: 'initial',
    position: flex ? 'absolute' : 'fixed',
    top: 0,
    paddingTop: top,
    extend: right !== undefined ? {
      right: right !== true && right || 0,
      justifyContent: 'flex-end',
      transform: open ? null : 'translateX(100%)'
    } : {
      left: left !== true && left || 0,
      transform: open ? null : 'translateX(-100%)'
    },
    height: '100%',
    minWidth: width,
    zIndex: dim ? 15 : 12,
    boxShadow: !collapsed ? theme.boxShadow : undefined,
    transition: 'transform 200ms ease-out, min-width 200ms ease-out',
    backgroundColor: getColor(theme, color),
    display: 'flex'
  };
}, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      open = _ref2.open,
      onClose = _ref2.onClose,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? 312 : _ref2$width,
      _onClick = _ref2.onClick,
      rest = _objectWithoutProperties(_ref2, ['className', 'children', 'open', 'onClose', 'width', 'onClick']);

  return React.createElement(
    'aside',
    _extends({
      className: className
    }, rest, {
      onClick: function onClick(e) {
        e.stopPropagation();
        if (_onClick) _onClick(e);
      }
    }),
    Children.map(children, function (child) {
      return child ? cloneElement(child, { width: width }) : child;
    })
  );
}, function (_ref3) {
  var inverted = _ref3.inverted,
      right = _ref3.right,
      top = _ref3.top,
      left = _ref3.left,
      collapsed = _ref3.collapsed,
      dim = _ref3.dim,
      p = _objectWithoutProperties(_ref3, ['inverted', 'right', 'top', 'left', 'collapsed', 'dim']);

  return Object.keys(p);
});

var Dimmer = createComponent(function (_ref4) {
  var theme = _ref4.theme,
      _ref4$top = _ref4.top,
      top = _ref4$top === undefined ? 0 : _ref4$top,
      open = _ref4.open,
      inverted = _ref4.inverted;
  return {
    height: '100%',
    position: 'fixed',
    top: 0,
    paddingTop: top,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: inverted ? theme.light2 : theme.dark3,
    zIndex: 14,
    opacity: !open ? 0 : 1,
    transition: 'opacity 200ms ease-out',
    pointerEvents: !open ? 'none' : undefined
  };
}, 'div', ['onClick']);

export default (function (_ref5) {
  var _ref5$dim = _ref5.dim,
      dim = _ref5$dim === undefined ? true : _ref5$dim,
      children = _ref5.children,
      onClose = _ref5.onClose,
      props = _objectWithoutProperties(_ref5, ['dim', 'children', 'onClose']);

  return [dim && React.createElement(Dimmer, _extends({}, props, { onClick: onClose, key: 'dim' })), React.createElement(
    Drawer,
    _extends({}, props, { dim: dim, key: 'draw' }),
    children
  )];
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvZHJhd2VyLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoaWxkcmVuIiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlQ29tcG9uZW50IiwiZ2V0Q29sb3IiLCJ0aGVtZSIsImNvbG9yIiwiaW52ZXJ0ZWQiLCJsaWdodCIsImRhcmsiLCJEcmF3ZXIiLCJ0b3AiLCJ3aWR0aCIsInJpZ2h0IiwibGVmdCIsIm9wZW4iLCJjb2xsYXBzZWQiLCJmbGV4IiwiZGltIiwicG9pbnRlckV2ZW50cyIsInBvc2l0aW9uIiwicGFkZGluZ1RvcCIsImV4dGVuZCIsInVuZGVmaW5lZCIsImp1c3RpZnlDb250ZW50IiwidHJhbnNmb3JtIiwiaGVpZ2h0IiwibWluV2lkdGgiLCJ6SW5kZXgiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwib25DbG9zZSIsIm9uQ2xpY2siLCJyZXN0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm1hcCIsImNoaWxkIiwicCIsIk9iamVjdCIsImtleXMiLCJEaW1tZXIiLCJib3R0b20iLCJsaWdodDIiLCJkYXJrMyIsIm9wYWNpdHkiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLEVBQTBCQyxZQUExQixRQUE4QyxPQUE5QztBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNqQyxNQUFJQSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsV0FBT0QsTUFBTUMsS0FBYjtBQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDcEMsV0FBT0QsTUFBTUMsS0FBTixLQUFnQkEsS0FBdkI7QUFDRDtBQUNELFNBQU9ELE1BQU1FLFFBQU4sR0FBaUJGLE1BQU1HLEtB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QUFuQjtBQUFBLE1BQXlCUixRQUF6QixTQUF5QkEsUUFBekI7QUFBQSxTQUF5QztBQUN2Q21CLFlBQVEsTUFEK0I7QUFFdkNOLGNBQVUsT0FGNkI7QUFHdkNULFNBQUssQ0FIa0M7QUFJdkNVLGdCQUFZVixHQUoyQjtBQUt2Q0UsV0FBTyxDQUxnQztBQU12Q2lDLFlBQVEsQ0FOK0I7QUFPdkNoQyxVQUFNLENBUGlDO0FBUXZDaUIscUJBQWlCeEIsV0FBV0YsTUFBTTBDLE1BQWpCLEdBQTBCMUMsTUFBTTJDLEtBUlY7QUFTdkNwQixZQUFRLEVBVCtCO0FBVXZDcUIsYUFBUyxDQUFDbEMsSUFBRCxHQUFRLENBQVIsR0FBWSxDQVZrQjtBQVd2Q2UsZ0JBQVksd0JBWDJCO0FBWXZDWCxtQkFBZSxDQUFDSixJQUFELEdBQVEsTUFBUixHQUFpQlE7QUFaTyxHQUF6QztBQUFBLENBRGEsRUFlYixLQWZhLEVBZ0JiLENBQUMsU0FBRCxDQWhCYSxDQUFmOztBQW1CQSxnQkFBZTtBQUFBLHdCQUFHTCxHQUFIO0FBQUEsTUFBR0EsR0FBSCw2QkFBUyxJQUFUO0FBQUEsTUFBZWdCLFFBQWYsU0FBZUEsUUFBZjtBQUFBLE1BQXlCQyxPQUF6QixTQUF5QkEsT0FBekI7QUFBQSxNQUFxQ2UsS0FBckM7O0FBQUEsU0FBaUQsQ0FDOURoQyxPQUFPLG9CQUFDLE1BQUQsZUFBWWdDLEtBQVosSUFBbUIsU0FBU2YsT0FBNUIsRUFBcUMsS0FBSSxLQUF6QyxJQUR1RCxFQUU5RDtBQUFDLFVBQUQ7QUFBQSxpQkFBWWUsS0FBWixJQUFtQixLQUFLaEMsR0FBeEIsRUFBNkIsS0FBSSxNQUFqQztBQUNHZ0I7QUFESCxHQUY4RCxDQUFqRDtBQUFBLENBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9kcmF3ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5jb25zdCBnZXRDb2xvciA9ICh0aGVtZSwgY29sb3IpID0+IHtcbiAgaWYgKGNvbG9yID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoZW1lLmNvbG9yO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdGhlbWVbY29sb3JdIHx8IGNvbG9yO1xuICB9XG4gIHJldHVybiB0aGVtZS5pbnZlcnRlZCA/IHRoZW1lLmxpZ2h0IDogdGhlbWUuZGFyaztcbn07XG5cbmNvbnN0IERyYXdlciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHtcbiAgICB0aGVtZSxcbiAgICBjb2xvcixcbiAgICB0b3AgPSAwLFxuICAgIHdpZHRoID0gMzEyLFxuICAgIHJpZ2h0LFxuICAgIGxlZnQsXG4gICAgb3BlbixcbiAgICBjb2xsYXBzZWQgPSB0cnVlLFxuICAgIGZsZXgsXG4gICAgZGltLFxuICB9KSA9PiAoe1xuICAgIHBvaW50ZXJFdmVudHM6ICdpbml0aWFsJyxcbiAgICBwb3NpdGlvbjogZmxleCA/ICdhYnNvbHV0ZScgOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBwYWRkaW5nVG9wOiB0b3AsXG4gICAgZXh0ZW5kOlxuICAgICAgcmlnaHQgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHJpZ2h0OiAocmlnaHQgIT09IHRydWUgJiYgcmlnaHQpIHx8IDAsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogb3BlbiA/IG51bGwgOiAndHJhbnNsYXRlWCgxMDAlKScsXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIGxlZnQ6IChsZWZ0ICE9PSB0cnVlICYmIGxlZnQpIHx8IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG9wZW4gPyBudWxsIDogJ3RyYW5zbGF0ZVgoLTEwMCUpJyxcbiAgICAgICAgICB9LFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIG1pbldpZHRoOiB3aWR0aCxcbiAgICB6SW5kZXg6IGRpbSA/IDE1IDogMTIsXG4gICAgYm94U2hhZG93OiAhY29sbGFwc2VkID8gdGhlbWUuYm94U2hhZG93IDogdW5kZWZpbmVkLFxuICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMjAwbXMgZWFzZS1vdXQsIG1pbi13aWR0aCAyMDBtcyBlYXNlLW91dCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiBnZXRDb2xvcih0aGVtZSwgY29sb3IpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIG9wZW4sIG9uQ2xvc2UsIHdpZHRoID0gMzEyLCBvbkNsaWNrLCAuLi5yZXN0IH0pID0+IChcbiAgICA8YXNpZGVcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgey4uLnJlc3R9XG4gICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtDaGlsZHJlbi5tYXAoXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjaGlsZCA9PiAoY2hpbGQgPyBjbG9uZUVsZW1lbnQoY2hpbGQsIHsgd2lkdGggfSkgOiBjaGlsZCksXG4gICAgICApfVxuICAgIDwvYXNpZGU+XG4gICksXG4gICh7IGludmVydGVkLCByaWdodCwgdG9wLCBsZWZ0LCBjb2xsYXBzZWQsIGRpbSwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IERpbW1lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIHRvcCA9IDAsIG9wZW4sIGludmVydGVkIH0pID0+ICh7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIHBhZGRpbmdUb3A6IHRvcCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGludmVydGVkID8gdGhlbWUubGlnaHQyIDogdGhlbWUuZGFyazMsXG4gICAgekluZGV4OiAxNCxcbiAgICBvcGFjaXR5OiAhb3BlbiA/IDAgOiAxLFxuICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDIwMG1zIGVhc2Utb3V0JyxcbiAgICBwb2ludGVyRXZlbnRzOiAhb3BlbiA/ICdub25lJyA6IHVuZGVmaW5lZCxcbiAgfSksXG4gICdkaXYnLFxuICBbJ29uQ2xpY2snXSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGRpbSA9IHRydWUsIGNoaWxkcmVuLCBvbkNsb3NlLCAuLi5wcm9wcyB9KSA9PiBbXG4gIGRpbSAmJiA8RGltbWVyIHsuLi5wcm9wc30gb25DbGljaz17b25DbG9zZX0ga2V5PVwiZGltXCIgLz4sXG4gIDxEcmF3ZXIgey4uLnByb3BzfSBkaW09e2RpbX0ga2V5PVwiZHJhd1wiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9EcmF3ZXI+LFxuXTtcbiJdfQ==
