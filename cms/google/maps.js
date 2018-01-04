'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultCenter = { lat: 59.938043, lng: 30.337157 };
var defaultZoom = 9;

var StyledMap = (0, _olympFela.createComponent)(function () {
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

  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(_googleMapReact2.default, _extends({
      options: _extends({
        minZoomOverride: true,
        minZoom: 2
      }, options || {})
    }, rest))
  );
}, function (p) {
  return Object.keys(p);
});

var _ref4 = _react2.default.createElement('path', { d: 'M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z' });

var Marker = (0, _olympFela.createComponent)(function (_ref2) {
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
  return _react2.default.createElement(
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

  return _react2.default.createElement(
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
exports.default = GoogleMap;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvbWFwcy5lczYiXSwibmFtZXMiOlsiZGVmYXVsdENlbnRlciIsImxhdCIsImxuZyIsImRlZmF1bHRab29tIiwiU3R5bGVkTWFwIiwiaGVpZ2h0Iiwid2lkdGgiLCJvdmVyZmxvdyIsImNsYXNzTmFtZSIsIm9wdGlvbnMiLCJyZXN0IiwibWluWm9vbU92ZXJyaWRlIiwibWluWm9vbSIsIk9iamVjdCIsImtleXMiLCJwIiwiTWFya2VyIiwidGhlbWUiLCJhY3RpdmUiLCIkaG92ZXIiLCJvbkhvdmVyIiwiZGlzcGxheSIsImZpbGwiLCJjb2xvciIsImRhcmsyIiwiY3Vyc29yIiwiR29vZ2xlTWFwIiwiY2hpbGRyZW4iLCJjZW50ZXIiLCJ6b29tIiwia2V5IiwiZGVmYXVsdFByb3BzIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9NQVBTX0tFWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixFQUFFQyxLQUFLLFNBQVAsRUFBa0JDLEtBQUssU0FBdkIsRUFBdEI7QUFDQSxJQUFNQyxjQUFjLENBQXBCOztBQUVBLElBQU1DLFlBQVksZ0NBQ2hCO0FBQUEsU0FBTztBQUNMQyxZQUFRLE1BREg7QUFFTEMsV0FBTyxNQUZGO0FBR0wsV0FBTztBQUNMQyxnQkFBVTtBQURMO0FBSEYsR0FBUDtBQUFBLENBRGdCLEVBUWhCO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsTUFBY0MsT0FBZCxRQUFjQSxPQUFkO0FBQUEsTUFBMEJDLElBQTFCOztBQUFBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBV0YsU0FBaEI7QUFDRTtBQUNFO0FBQ0VHLHlCQUFpQixJQURuQjtBQUVFQyxpQkFBUztBQUZYLFNBR01ILFdBQVcsRUFIakI7QUFERixPQU1NQyxJQU5OO0FBREYsR0FERjtBQUFBLENBUmdCLEVBb0JoQjtBQUFBLFNBQUtHLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0FwQmdCLENBQWxCOztZQXNDTSx3Q0FBTSxHQUFFLDZNQUFSLEc7O0FBZk4sSUFBTUMsU0FBUyxnQ0FDYjtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVVDLE1BQVYsU0FBVUEsTUFBVjtBQUFBLE1BQWtCQyxNQUFsQixTQUFrQkEsTUFBbEI7QUFBQSxNQUEwQkMsT0FBMUIsU0FBMEJBLE9BQTFCO0FBQUEsU0FBeUM7QUFDdkNDLGFBQVMsT0FEOEI7QUFFdkNDLFVBQU1KLFNBQVNELE1BQU1NLEtBQWYsR0FBdUJOLE1BQU1PLEtBRkk7QUFHdkM7QUFDQUMsWUFBUSxDQUFDLENBQUNMLE9BQUYsSUFBYTtBQUprQixHQUF6QztBQUFBLENBRGEsRUFPYjtBQUFBLE1BQUdaLFNBQUgsU0FBR0EsU0FBSDtBQUFBLE1BQWNZLE9BQWQsU0FBY0EsT0FBZDtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQ0UsbUJBQWFBLE9BRGY7QUFFRSxpQkFBV1osU0FGYjtBQUdFLGFBQU8sRUFIVDtBQUlFLGNBQVEsRUFKVjtBQUtFLGVBQVE7QUFMVjtBQUFBO0FBQUEsR0FERjtBQUFBLENBUGEsRUFrQmI7QUFBQSxTQUFLSyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBbEJhLENBQWY7O0FBcUJBLElBQU1XLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFDLE1BQWIsU0FBYUEsTUFBYjtBQUFBLE1BQXFCQyxJQUFyQixTQUFxQkEsSUFBckI7QUFBQSxNQUEyQkMsR0FBM0IsU0FBMkJBLEdBQTNCO0FBQUEsTUFBbUNwQixJQUFuQzs7QUFBQSxTQUNoQjtBQUFDLGFBQUQ7QUFBQTtBQUNFLHFCQUFlVixhQURqQjtBQUVFLGNBQVE0QixNQUZWO0FBR0UsbUJBQWF6QixXQUhmO0FBSUUsWUFBTTBCLElBSlI7QUFLRSx3QkFBa0IsRUFBRUMsUUFBRjtBQUxwQixPQU1NcEIsSUFOTjtBQVFHaUI7QUFSSCxHQURnQjtBQUFBLENBQWxCO0FBWUFELFVBQVVLLFlBQVYsR0FBeUI7QUFDdkJILFVBQVE1QixhQURlO0FBRXZCNkIsUUFBTTFCLFdBRmlCO0FBR3ZCMkIsT0FBS0UsUUFBUUMsR0FBUixDQUFZQztBQUhNLENBQXpCO0FBS0FSLFVBQVVWLE1BQVYsR0FBbUJBLE1BQW5CO2tCQUNlVSxTIiwiZmlsZSI6ImNtcy9nb29nbGUvbWFwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBSZWFjdE1hcCBmcm9tICdnb29nbGUtbWFwLXJlYWN0JztcblxuY29uc3QgZGVmYXVsdENlbnRlciA9IHsgbGF0OiA1OS45MzgwNDMsIGxuZzogMzAuMzM3MTU3IH07XG5jb25zdCBkZWZhdWx0Wm9vbSA9IDk7XG5cbmNvbnN0IFN0eWxlZE1hcCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKCkgPT4gKHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgICcmIConOiB7XG4gICAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxuICAgIH0sXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIG9wdGlvbnMsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPFJlYWN0TWFwXG4gICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICBtaW5ab29tT3ZlcnJpZGU6IHRydWUsXG4gICAgICAgICAgbWluWm9vbTogMixcbiAgICAgICAgICAuLi4ob3B0aW9ucyB8fCB7fSksXG4gICAgICAgIH19XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IE1hcmtlciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGFjdGl2ZSwgJGhvdmVyLCBvbkhvdmVyIH0pID0+ICh7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmaWxsOiBhY3RpdmUgPyB0aGVtZS5jb2xvciA6IHRoZW1lLmRhcmsyLFxuICAgIC8vIG9wYWNpdHk6ICFvbkhvdmVyIHx8IGFjdGl2ZSB8fCAkaG92ZXIgPyAxIDogMC44LFxuICAgIGN1cnNvcjogISFvbkhvdmVyICYmICdwb2ludGVyJyxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgb25Ib3ZlciB9KSA9PiAoXG4gICAgPHN2Z1xuICAgICAgb25Nb3VzZU92ZXI9e29uSG92ZXJ9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHdpZHRoPXs0MH1cbiAgICAgIGhlaWdodD17NDB9XG4gICAgICB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiXG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMTUyIDY0MHEwLTEwNi03NS0xODF0LTE4MS03NS0xODEgNzUtNzUgMTgxIDc1IDE4MSAxODEgNzUgMTgxLTc1IDc1LTE4MXptMjU2IDBxMCAxMDktMzMgMTc5bC0zNjQgNzc0cS0xNiAzMy00Ny41IDUydC02Ny41IDE5LTY3LjUtMTktNDYuNS01MmwtMzY1LTc3NHEtMzMtNzAtMzMtMTc5IDAtMjEyIDE1MC0zNjJ0MzYyLTE1MCAzNjIgMTUwIDE1MCAzNjJ6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IEdvb2dsZU1hcCA9ICh7IGNoaWxkcmVuLCBjZW50ZXIsIHpvb20sIGtleSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxTdHlsZWRNYXBcbiAgICBkZWZhdWx0Q2VudGVyPXtkZWZhdWx0Q2VudGVyfVxuICAgIGNlbnRlcj17Y2VudGVyfVxuICAgIGRlZmF1bHRab29tPXtkZWZhdWx0Wm9vbX1cbiAgICB6b29tPXt6b29tfVxuICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5IH19XG4gICAgey4uLnJlc3R9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvU3R5bGVkTWFwPlxuKTtcbkdvb2dsZU1hcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNlbnRlcjogZGVmYXVsdENlbnRlcixcbiAgem9vbTogZGVmYXVsdFpvb20sXG4gIGtleTogcHJvY2Vzcy5lbnYuR09PR0xFX01BUFNfS0VZLFxufTtcbkdvb2dsZU1hcC5NYXJrZXIgPSBNYXJrZXI7XG5leHBvcnQgZGVmYXVsdCBHb29nbGVNYXA7XG4iXX0=
