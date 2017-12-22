var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'olymp-fela';
import ReactMap from 'google-map-react';

var defaultCenter = { lat: 59.938043, lng: 30.337157 };
var defaultZoom = 9;

var StyledMap = createComponent(function () {
  return {
    height: '100%',
    width: '100%',
    '& *': {
      overflow: 'visible'
    }
  };
}, function (_ref) {
  var className = _ref.className,
      options = _ref.options,
      rest = _objectWithoutProperties(_ref, ['className', 'options']);

  return React.createElement(
    'div',
    { className: className },
    React.createElement(ReactMap, _extends({
      options: _extends({
        minZoomOverride: true,
        minZoom: 2
      }, options || {})
    }, rest))
  );
}, function (p) {
  return Object.keys(p);
});

var _ref4 = React.createElement('path', { d: 'M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z' });

var Marker = createComponent(function (_ref2) {
  var theme = _ref2.theme,
      active = _ref2.active,
      $hover = _ref2.$hover,
      onHover = _ref2.onHover;
  return {
    display: 'block',
    fill: active ? theme.color : theme.dark2,
    // opacity: !onHover || active || $hover ? 1 : 0.8,
    cursor: !!onHover && 'pointer'
  };
}, function (_ref3) {
  var className = _ref3.className,
      onHover = _ref3.onHover;
  return React.createElement(
    'svg',
    {
      onMouseOver: onHover,
      className: className,
      width: 40,
      height: 40,
      viewBox: '0 0 1792 1792'
    },
    _ref4
  );
}, function (p) {
  return Object.keys(p);
});

var GoogleMap = function GoogleMap(_ref5) {
  var children = _ref5.children,
      center = _ref5.center,
      zoom = _ref5.zoom,
      key = _ref5.key,
      rest = _objectWithoutProperties(_ref5, ['children', 'center', 'zoom', 'key']);

  return React.createElement(
    StyledMap,
    _extends({
      defaultCenter: defaultCenter,
      center: center,
      defaultZoom: defaultZoom,
      zoom: zoom,
      bootstrapURLKeys: { key: key }
    }, rest),
    children
  );
};
GoogleMap.defaultProps = {
  center: defaultCenter,
  zoom: defaultZoom,
  key: process.env.GOOGLE_MAPS_KEY
};
GoogleMap.Marker = Marker;
export default GoogleMap;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9tYXBzLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsIlJlYWN0TWFwIiwiZGVmYXVsdENlbnRlciIsImxhdCIsImxuZyIsImRlZmF1bHRab29tIiwiU3R5bGVkTWFwIiwiaGVpZ2h0Iiwid2lkdGgiLCJvdmVyZmxvdyIsImNsYXNzTmFtZSIsIm9wdGlvbnMiLCJyZXN0IiwibWluWm9vbU92ZXJyaWRlIiwibWluWm9vbSIsIk9iamVjdCIsImtleXMiLCJwIiwiTWFya2VyIiwidGhlbWUiLCJhY3RpdmUiLCIkaG92ZXIiLCJvbkhvdmVyIiwiZGlzcGxheSIsImZpbGwiLCJjb2xvciIsImRhcmsyIiwiY3Vyc29yIiwiR29vZ2xlTWFwIiwiY2hpbGRyZW4iLCJjZW50ZXIiLCJ6b29tIiwia2V5IiwiZGVmYXVsdFByb3BzIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9NQVBTX0tFWSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixrQkFBckI7O0FBRUEsSUFBTUMsZ0JBQWdCLEVBQUVDLEtBQUssU0FBUCxFQUFrQkMsS0FBSyxTQUF2QixFQUF0QjtBQUNBLElBQU1DLGNBQWMsQ0FBcEI7O0FBRUEsSUFBTUMsWUFBWU4sZ0JBQ2hCO0FBQUEsU0FBTztBQUNMTyxZQUFRLE1BREg7QUFFTEMsV0FBTyxNQUZGO0FBR0wsV0FBTztBQUNMQyxnQkFBVTtBQURMO0FBSEYsR0FBUDtBQUFBLENBRGdCLEVBUWhCO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsTUFBY0MsT0FBZCxRQUFjQSxPQUFkO0FBQUEsTUFBMEJDLElBQTFCOztBQUFBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBV0YsU0FBaEI7QUFDRSx3QkFBQyxRQUFEO0FBQ0U7QUFDRUcseUJBQWlCLElBRG5CO0FBRUVDLGlCQUFTO0FBRlgsU0FHTUgsV0FBVyxFQUhqQjtBQURGLE9BTU1DLElBTk47QUFERixHQURGO0FBQUEsQ0FSZ0IsRUFvQmhCO0FBQUEsU0FBS0csT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxDQXBCZ0IsQ0FBbEI7O1lBc0NNLDhCQUFNLEdBQUUsNk1BQVIsRzs7QUFmTixJQUFNQyxTQUFTbEIsZ0JBQ2I7QUFBQSxNQUFHbUIsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVUMsTUFBVixTQUFVQSxNQUFWO0FBQUEsTUFBa0JDLE1BQWxCLFNBQWtCQSxNQUFsQjtBQUFBLE1BQTBCQyxPQUExQixTQUEwQkEsT0FBMUI7QUFBQSxTQUF5QztBQUN2Q0MsYUFBUyxPQUQ4QjtBQUV2Q0MsVUFBTUosU0FBU0QsTUFBTU0sS0FBZixHQUF1Qk4sTUFBTU8sS0FGSTtBQUd2QztBQUNBQyxZQUFRLENBQUMsQ0FBQ0wsT0FBRixJQUFhO0FBSmtCLEdBQXpDO0FBQUEsQ0FEYSxFQU9iO0FBQUEsTUFBR1osU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBY1ksT0FBZCxTQUFjQSxPQUFkO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFDRSxtQkFBYUEsT0FEZjtBQUVFLGlCQUFXWixTQUZiO0FBR0UsYUFBTyxFQUhUO0FBSUUsY0FBUSxFQUpWO0FBS0UsZUFBUTtBQUxWO0FBQUE7QUFBQSxHQURGO0FBQUEsQ0FQYSxFQWtCYjtBQUFBLFNBQUtLLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0FsQmEsQ0FBZjs7QUFxQkEsSUFBTVcsWUFBWSxTQUFaQSxTQUFZO0FBQUEsTUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBYUMsTUFBYixTQUFhQSxNQUFiO0FBQUEsTUFBcUJDLElBQXJCLFNBQXFCQSxJQUFyQjtBQUFBLE1BQTJCQyxHQUEzQixTQUEyQkEsR0FBM0I7QUFBQSxNQUFtQ3BCLElBQW5DOztBQUFBLFNBQ2hCO0FBQUMsYUFBRDtBQUFBO0FBQ0UscUJBQWVWLGFBRGpCO0FBRUUsY0FBUTRCLE1BRlY7QUFHRSxtQkFBYXpCLFdBSGY7QUFJRSxZQUFNMEIsSUFKUjtBQUtFLHdCQUFrQixFQUFFQyxRQUFGO0FBTHBCLE9BTU1wQixJQU5OO0FBUUdpQjtBQVJILEdBRGdCO0FBQUEsQ0FBbEI7QUFZQUQsVUFBVUssWUFBVixHQUF5QjtBQUN2QkgsVUFBUTVCLGFBRGU7QUFFdkI2QixRQUFNMUIsV0FGaUI7QUFHdkIyQixPQUFLRSxRQUFRQyxHQUFSLENBQVlDO0FBSE0sQ0FBekI7QUFLQVIsVUFBVVYsTUFBVixHQUFtQkEsTUFBbkI7QUFDQSxlQUFlVSxTQUFmIiwiZmlsZSI6InBhY2thZ2VzL2dvb2dsZS9tYXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IFJlYWN0TWFwIGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xuXG5jb25zdCBkZWZhdWx0Q2VudGVyID0geyBsYXQ6IDU5LjkzODA0MywgbG5nOiAzMC4zMzcxNTcgfTtcbmNvbnN0IGRlZmF1bHRab29tID0gOTtcblxuY29uc3QgU3R5bGVkTWFwID0gY3JlYXRlQ29tcG9uZW50KFxuICAoKSA9PiAoe1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgJyYgKic6IHtcbiAgICAgIG92ZXJmbG93OiAndmlzaWJsZScsXG4gICAgfSxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgb3B0aW9ucywgLi4ucmVzdCB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8UmVhY3RNYXBcbiAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgIG1pblpvb21PdmVycmlkZTogdHJ1ZSxcbiAgICAgICAgICBtaW5ab29tOiAyLFxuICAgICAgICAgIC4uLihvcHRpb25zIHx8IHt9KSxcbiAgICAgICAgfX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgTWFya2VyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgYWN0aXZlLCAkaG92ZXIsIG9uSG92ZXIgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZpbGw6IGFjdGl2ZSA/IHRoZW1lLmNvbG9yIDogdGhlbWUuZGFyazIsXG4gICAgLy8gb3BhY2l0eTogIW9uSG92ZXIgfHwgYWN0aXZlIHx8ICRob3ZlciA/IDEgOiAwLjgsXG4gICAgY3Vyc29yOiAhIW9uSG92ZXIgJiYgJ3BvaW50ZXInLFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBvbkhvdmVyIH0pID0+IChcbiAgICA8c3ZnXG4gICAgICBvbk1vdXNlT3Zlcj17b25Ib3Zlcn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgd2lkdGg9ezQwfVxuICAgICAgaGVpZ2h0PXs0MH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCJcbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTExNTIgNjQwcTAtMTA2LTc1LTE4MXQtMTgxLTc1LTE4MSA3NS03NSAxODEgNzUgMTgxIDE4MSA3NSAxODEtNzUgNzUtMTgxem0yNTYgMHEwIDEwOS0zMyAxNzlsLTM2NCA3NzRxLTE2IDMzLTQ3LjUgNTJ0LTY3LjUgMTktNjcuNS0xOS00Ni41LTUybC0zNjUtNzc0cS0zMy03MC0zMy0xNzkgMC0yMTIgMTUwLTM2MnQzNjItMTUwIDM2MiAxNTAgMTUwIDM2MnpcIiAvPlxuICAgIDwvc3ZnPlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgR29vZ2xlTWFwID0gKHsgY2hpbGRyZW4sIGNlbnRlciwgem9vbSwga2V5LCAuLi5yZXN0IH0pID0+IChcbiAgPFN0eWxlZE1hcFxuICAgIGRlZmF1bHRDZW50ZXI9e2RlZmF1bHRDZW50ZXJ9XG4gICAgY2VudGVyPXtjZW50ZXJ9XG4gICAgZGVmYXVsdFpvb209e2RlZmF1bHRab29tfVxuICAgIHpvb209e3pvb219XG4gICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXkgfX1cbiAgICB7Li4ucmVzdH1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9TdHlsZWRNYXA+XG4pO1xuR29vZ2xlTWFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2VudGVyOiBkZWZhdWx0Q2VudGVyLFxuICB6b29tOiBkZWZhdWx0Wm9vbSxcbiAga2V5OiBwcm9jZXNzLmVudi5HT09HTEVfTUFQU19LRVksXG59O1xuR29vZ2xlTWFwLk1hcmtlciA9IE1hcmtlcjtcbmV4cG9ydCBkZWZhdWx0IEdvb2dsZU1hcDtcbiJdfQ==
