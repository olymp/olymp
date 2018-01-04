'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ref2 = _react2.default.createElement('path', { d: 'M313 777q0 51-36 84-29 26-89 26h-17v-220h17q61 0 89 27 36 31 36 83zm1776-65q0 52-64 52h-19v-101h20q63 0 63 49zm-1709 65q0-74-50-120.5t-129-46.5h-95v333h95q74 0 119-38 60-51 60-128zm30 166h65v-333h-65v333zm320-101q0-40-20.5-62t-75.5-42q-29-10-39.5-19t-10.5-23q0-16 13.5-26.5t34.5-10.5q29 0 53 27l34-44q-41-37-98-37-44 0-74 27.5t-30 67.5q0 35 18 55.5t64 36.5q37 13 45 19 19 12 19 34 0 20-14 33.5t-36 13.5q-48 0-71-44l-42 40q44 64 115 64 51 0 83-30.5t32-79.5zm278 90v-77q-37 37-78 37-49 0-80.5-32.5t-31.5-82.5q0-48 31.5-81.5t77.5-33.5q43 0 81 38v-77q-40-20-80-20-74 0-125.5 50.5t-51.5 123.5 51 123.5 125 50.5q42 0 81-19zm1232 604v-527q-65 40-144.5 84t-237.5 117-329.5 137.5-417.5 134.5-504 118h1569q26 0 45-19t19-45zm-851-757q0-75-53-128t-128-53-128 53-53 128 53 128 128 53 128-53 53-128zm152 173l144-342h-71l-90 224-89-224h-71l142 342h35zm173-9h184v-56h-119v-90h115v-56h-115v-74h119v-57h-184v333zm391 0h80l-105-140q76-16 76-94 0-47-31-73t-87-26h-97v333h65v-133h9zm199-681v1268q0 56-38.5 95t-93.5 39h-2040q-55 0-93.5-39t-38.5-95v-1268q0-56 38.5-95t93.5-39h2040q55 0 93.5 39t38.5 95z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { width: '2304', viewBox: '0 0 2304 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaCcDiscover';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1jYy1kaXNjb3Zlci5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRW9KLHdDQUFNLEdBQUUseWpDQUFSLEc7O0FBRHBKLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsT0FBTSxNQUFoRixFQUF1RixTQUFRLGVBQS9GLEVBQStHLE9BQU0sNEJBQXJIO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsY0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtY2MtZGlzY292ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB3aWR0aD1cIjIzMDRcIiB2aWV3Qm94PVwiMCAwIDIzMDQgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTMxMyA3NzdxMCA1MS0zNiA4NC0yOSAyNi04OSAyNmgtMTd2LTIyMGgxN3E2MSAwIDg5IDI3IDM2IDMxIDM2IDgzem0xNzc2LTY1cTAgNTItNjQgNTJoLTE5di0xMDFoMjBxNjMgMCA2MyA0OXptLTE3MDkgNjVxMC03NC01MC0xMjAuNXQtMTI5LTQ2LjVoLTk1djMzM2g5NXE3NCAwIDExOS0zOCA2MC01MSA2MC0xMjh6bTMwIDE2Nmg2NXYtMzMzaC02NXYzMzN6bTMyMC0xMDFxMC00MC0yMC41LTYydC03NS41LTQycS0yOS0xMC0zOS41LTE5dC0xMC41LTIzcTAtMTYgMTMuNS0yNi41dDM0LjUtMTAuNXEyOSAwIDUzIDI3bDM0LTQ0cS00MS0zNy05OC0zNy00NCAwLTc0IDI3LjV0LTMwIDY3LjVxMCAzNSAxOCA1NS41dDY0IDM2LjVxMzcgMTMgNDUgMTkgMTkgMTIgMTkgMzQgMCAyMC0xNCAzMy41dC0zNiAxMy41cS00OCAwLTcxLTQ0bC00MiA0MHE0NCA2NCAxMTUgNjQgNTEgMCA4My0zMC41dDMyLTc5LjV6bTI3OCA5MHYtNzdxLTM3IDM3LTc4IDM3LTQ5IDAtODAuNS0zMi41dC0zMS41LTgyLjVxMC00OCAzMS41LTgxLjV0NzcuNS0zMy41cTQzIDAgODEgMzh2LTc3cS00MC0yMC04MC0yMC03NCAwLTEyNS41IDUwLjV0LTUxLjUgMTIzLjUgNTEgMTIzLjUgMTI1IDUwLjVxNDIgMCA4MS0xOXptMTIzMiA2MDR2LTUyN3EtNjUgNDAtMTQ0LjUgODR0LTIzNy41IDExNy0zMjkuNSAxMzcuNS00MTcuNSAxMzQuNS01MDQgMTE4aDE1NjlxMjYgMCA0NS0xOXQxOS00NXptLTg1MS03NTdxMC03NS01My0xMjh0LTEyOC01My0xMjggNTMtNTMgMTI4IDUzIDEyOCAxMjggNTMgMTI4LTUzIDUzLTEyOHptMTUyIDE3M2wxNDQtMzQyaC03MWwtOTAgMjI0LTg5LTIyNGgtNzFsMTQyIDM0MmgzNXptMTczLTloMTg0di01NmgtMTE5di05MGgxMTV2LTU2aC0xMTV2LTc0aDExOXYtNTdoLTE4NHYzMzN6bTM5MSAwaDgwbC0xMDUtMTQwcTc2LTE2IDc2LTk0IDAtNDctMzEtNzN0LTg3LTI2aC05N3YzMzNoNjV2LTEzM2g5em0xOTktNjgxdjEyNjhxMCA1Ni0zOC41IDk1dC05My41IDM5aC0yMDQwcS01NSAwLTkzLjUtMzl0LTM4LjUtOTV2LTEyNjhxMC01NiAzOC41LTk1dDkzLjUtMzloMjA0MHE1NSAwIDkzLjUgMzl0MzguNSA5NXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhQ2NEaXNjb3Zlcic7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
