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

var _ref2 = _react2.default.createElement('path', { d: 'M119 682h89l-45-108zm621 526l74-79-70-79h-163v49h142v55h-142v54h159zm158-78l99 110v-217zm288-47q0-33-40-33h-84v69h83q41 0 41-36zm289-4q0-29-42-29h-82v61h81q43 0 43-32zm-278-466q0-29-42-29h-82v60h81q43 0 43-31zm459 69h89l-44-108zm-957-155v271h-66v-212l-94 212h-57l-94-212v212h-132l-25-60h-135l-25 60h-70l116-271h96l110 257v-257h106l85 184 77-184h108zm556 556q0 20-5.5 35t-14 25-22.5 16.5-26 10-31.5 4.5-31.5 1-32.5-.5-29.5-.5v91h-126l-80-90-83 90h-256v-271h260l80 89 82-89h207q109 0 109 89zm-291-341v56h-217v-271h217v57h-152v49h148v55h-148v54h152zm1340 559v229q0 55-38.5 94.5t-93.5 39.5h-2040q-55 0-93.5-39.5t-38.5-94.5v-678h111l25-61h55l25 61h218v-46l19 46h113l20-47v47h541v-99l10-1q10 0 10 14v86h279v-23q23 12 55 18t52.5 6.5 63-.5 51.5-1l25-61h56l25 61h227v-58l34 58h182v-378h-180v44l-25-44h-185v44l-23-44h-249q-69 0-109 22v-22h-172v22q-24-22-73-22h-628l-43 97-43-97h-198v44l-22-44h-169l-78 179v-391q0-55 38.5-94.5t93.5-39.5h2040q55 0 93.5 39.5t38.5 94.5v678h-120q-51 0-81 22v-22h-177q-55 0-78 22v-22h-316v22q-31-22-87-22h-209v22q-23-22-91-22h-234l-54 58-50-58h-349v378h343l55-59 52 59h211v-89h21q59 0 90-13v102h174v-99h8q8 0 10 2t2 10v87h529q57 0 88-24v24h168q60 0 95-17zm-758-234q0 23-12 43t-34 29q25 9 34 26t9 46v54h-65v-45q0-33-12-43.5t-46-10.5h-69v99h-65v-271h154q48 0 77 15t29 58zm-277-467q0 24-12.5 44t-33.5 29q26 9 34.5 25.5t8.5 46.5v53h-65q0-9 .5-26.5t0-25-3-18.5-8.5-16-17.5-8.5-29.5-3.5h-70v98h-64v-271l153 1q49 0 78 14.5t29 57.5zm529 609v56h-216v-271h216v56h-151v49h148v55h-148v54zm-426-682v271h-66v-271h66zm693 652q0 86-102 86h-126v-58h126q34 0 34-25 0-16-17-21t-41.5-5-49.5-3.5-42-22.5-17-55q0-39 26-60t66-21h130v57h-119q-36 0-36 25 0 16 17.5 20.5t42 4 49 2.5 42 21.5 17.5 54.5zm239-50v101q-24 35-88 35h-125v-58h125q33 0 33-25 0-13-12.5-19t-31-5.5-40-2-40-8-31-24-12.5-48.5q0-39 26.5-60t66.5-21h129v57h-118q-36 0-36 25 0 20 29 22t68.5 5 56.5 26zm-165-601v270h-92l-122-203v203h-132l-26-60h-134l-25 60h-75q-129 0-129-133 0-138 133-138h63v59q-7 0-28-1t-28.5-.5-23 2-21.5 6.5-14.5 13.5-11.5 23-3 33.5q0 38 13.5 58t49.5 20h29l92-213h97l109 256v-256h99l114 188v-188h66z' });

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
icon.displayName = 'FaCcAmex';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1jYy1hbWV4LmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFb0osd0NBQU0sR0FBRSxnaUVBQVIsRzs7QUFEcEosSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxPQUFNLE1BQWhGLEVBQXVGLFNBQVEsZUFBL0YsRUFBK0csT0FBTSw0QkFBckg7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixVQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1jYy1hbWV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gd2lkdGg9XCIyMzA0XCIgdmlld0JveD1cIjAgMCAyMzA0IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMTkgNjgyaDg5bC00NS0xMDh6bTYyMSA1MjZsNzQtNzktNzAtNzloLTE2M3Y0OWgxNDJ2NTVoLTE0MnY1NGgxNTl6bTE1OC03OGw5OSAxMTB2LTIxN3ptMjg4LTQ3cTAtMzMtNDAtMzNoLTg0djY5aDgzcTQxIDAgNDEtMzZ6bTI4OS00cTAtMjktNDItMjloLTgydjYxaDgxcTQzIDAgNDMtMzJ6bS0yNzgtNDY2cTAtMjktNDItMjloLTgydjYwaDgxcTQzIDAgNDMtMzF6bTQ1OSA2OWg4OWwtNDQtMTA4em0tOTU3LTE1NXYyNzFoLTY2di0yMTJsLTk0IDIxMmgtNTdsLTk0LTIxMnYyMTJoLTEzMmwtMjUtNjBoLTEzNWwtMjUgNjBoLTcwbDExNi0yNzFoOTZsMTEwIDI1N3YtMjU3aDEwNmw4NSAxODQgNzctMTg0aDEwOHptNTU2IDU1NnEwIDIwLTUuNSAzNXQtMTQgMjUtMjIuNSAxNi41LTI2IDEwLTMxLjUgNC41LTMxLjUgMS0zMi41LS41LTI5LjUtLjV2OTFoLTEyNmwtODAtOTAtODMgOTBoLTI1NnYtMjcxaDI2MGw4MCA4OSA4Mi04OWgyMDdxMTA5IDAgMTA5IDg5em0tMjkxLTM0MXY1NmgtMjE3di0yNzFoMjE3djU3aC0xNTJ2NDloMTQ4djU1aC0xNDh2NTRoMTUyem0xMzQwIDU1OXYyMjlxMCA1NS0zOC41IDk0LjV0LTkzLjUgMzkuNWgtMjA0MHEtNTUgMC05My41LTM5LjV0LTM4LjUtOTQuNXYtNjc4aDExMWwyNS02MWg1NWwyNSA2MWgyMTh2LTQ2bDE5IDQ2aDExM2wyMC00N3Y0N2g1NDF2LTk5bDEwLTFxMTAgMCAxMCAxNHY4NmgyNzl2LTIzcTIzIDEyIDU1IDE4dDUyLjUgNi41IDYzLS41IDUxLjUtMWwyNS02MWg1NmwyNSA2MWgyMjd2LTU4bDM0IDU4aDE4MnYtMzc4aC0xODB2NDRsLTI1LTQ0aC0xODV2NDRsLTIzLTQ0aC0yNDlxLTY5IDAtMTA5IDIydi0yMmgtMTcydjIycS0yNC0yMi03My0yMmgtNjI4bC00MyA5Ny00My05N2gtMTk4djQ0bC0yMi00NGgtMTY5bC03OCAxNzl2LTM5MXEwLTU1IDM4LjUtOTQuNXQ5My41LTM5LjVoMjA0MHE1NSAwIDkzLjUgMzkuNXQzOC41IDk0LjV2Njc4aC0xMjBxLTUxIDAtODEgMjJ2LTIyaC0xNzdxLTU1IDAtNzggMjJ2LTIyaC0zMTZ2MjJxLTMxLTIyLTg3LTIyaC0yMDl2MjJxLTIzLTIyLTkxLTIyaC0yMzRsLTU0IDU4LTUwLTU4aC0zNDl2Mzc4aDM0M2w1NS01OSA1MiA1OWgyMTF2LTg5aDIxcTU5IDAgOTAtMTN2MTAyaDE3NHYtOTloOHE4IDAgMTAgMnQyIDEwdjg3aDUyOXE1NyAwIDg4LTI0djI0aDE2OHE2MCAwIDk1LTE3em0tNzU4LTIzNHEwIDIzLTEyIDQzdC0zNCAyOXEyNSA5IDM0IDI2dDkgNDZ2NTRoLTY1di00NXEwLTMzLTEyLTQzLjV0LTQ2LTEwLjVoLTY5djk5aC02NXYtMjcxaDE1NHE0OCAwIDc3IDE1dDI5IDU4em0tMjc3LTQ2N3EwIDI0LTEyLjUgNDR0LTMzLjUgMjlxMjYgOSAzNC41IDI1LjV0OC41IDQ2LjV2NTNoLTY1cTAtOSAuNS0yNi41dDAtMjUtMy0xOC41LTguNS0xNi0xNy41LTguNS0yOS41LTMuNWgtNzB2OThoLTY0di0yNzFsMTUzIDFxNDkgMCA3OCAxNC41dDI5IDU3LjV6bTUyOSA2MDl2NTZoLTIxNnYtMjcxaDIxNnY1NmgtMTUxdjQ5aDE0OHY1NWgtMTQ4djU0em0tNDI2LTY4MnYyNzFoLTY2di0yNzFoNjZ6bTY5MyA2NTJxMCA4Ni0xMDIgODZoLTEyNnYtNThoMTI2cTM0IDAgMzQtMjUgMC0xNi0xNy0yMXQtNDEuNS01LTQ5LjUtMy41LTQyLTIyLjUtMTctNTVxMC0zOSAyNi02MHQ2Ni0yMWgxMzB2NTdoLTExOXEtMzYgMC0zNiAyNSAwIDE2IDE3LjUgMjAuNXQ0MiA0IDQ5IDIuNSA0MiAyMS41IDE3LjUgNTQuNXptMjM5LTUwdjEwMXEtMjQgMzUtODggMzVoLTEyNXYtNThoMTI1cTMzIDAgMzMtMjUgMC0xMy0xMi41LTE5dC0zMS01LjUtNDAtMi00MC04LTMxLTI0LTEyLjUtNDguNXEwLTM5IDI2LjUtNjB0NjYuNS0yMWgxMjl2NTdoLTExOHEtMzYgMC0zNiAyNSAwIDIwIDI5IDIydDY4LjUgNSA1Ni41IDI2em0tMTY1LTYwMXYyNzBoLTkybC0xMjItMjAzdjIwM2gtMTMybC0yNi02MGgtMTM0bC0yNSA2MGgtNzVxLTEyOSAwLTEyOS0xMzMgMC0xMzggMTMzLTEzOGg2M3Y1OXEtNyAwLTI4LTF0LTI4LjUtLjUtMjMgMi0yMS41IDYuNS0xNC41IDEzLjUtMTEuNSAyMy0zIDMzLjVxMCAzOCAxMy41IDU4dDQ5LjUgMjBoMjlsOTItMjEzaDk3bDEwOSAyNTZ2LTI1Nmg5OWwxMTQgMTg4di0xODhoNjZ6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUNjQW1leCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
