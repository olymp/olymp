var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1099 1244v211q0 67-39 67-23 0-45-22v-301q22-22 45-22 39 0 39 67zm338 1v46h-90v-46q0-68 45-68t45 68zm-966-218h107v-94h-312v94h105v569h100v-569zm288 569h89v-494h-89v378q-30 42-57 42-18 0-21-21-1-3-1-35v-364h-89v391q0 49 8 73 12 37 58 37 48 0 102-61v54zm429-148v-197q0-73-9-99-17-56-71-56-50 0-93 54v-217h-89v663h89v-48q45 55 93 55 54 0 71-55 9-27 9-100zm338-10v-13h-91q0 51-2 61-7 36-40 36-46 0-46-69v-87h179v-103q0-79-27-116-39-51-106-51-68 0-107 51-28 37-28 116v173q0 79 29 116 39 51 108 51 72 0 108-53 18-27 21-54 2-9 2-58zm-608-913v-210q0-69-43-69t-43 69v210q0 70 43 70t43-70zm719 751q0 234-26 350-14 59-58 99t-102 46q-184 21-555 21t-555-21q-58-6-102.5-46t-57.5-99q-26-112-26-350 0-234 26-350 14-59 58-99t103-47q183-20 554-20t555 20q58 7 102.5 47t57.5 99q26 112 26 350zm-998-1276h102l-121 399v271h-100v-271q-14-74-61-212-37-103-65-187h106l71 263zm370 333v175q0 81-28 118-38 51-106 51-67 0-105-51-28-38-28-118v-175q0-80 28-117 38-51 105-51 68 0 106 51 28 37 28 117zm335-162v499h-91v-55q-53 62-103 62-46 0-59-37-8-24-8-75v-394h91v367q0 33 1 35 3 22 21 22 27 0 57-43v-381h91z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return React.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { viewBox: '0 0 1792 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaYoutube';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS15b3V0dWJlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztZQUV1SSw4QkFBTSxHQUFFLHFqQ0FBUixHOztBQUR2SSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixXQUFuQjtBQUNBLGVBQWVSLE9BQU9DLElBQVAsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9pY29ucy9saWIvZmEteW91dHViZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTA5OSAxMjQ0djIxMXEwIDY3LTM5IDY3LTIzIDAtNDUtMjJ2LTMwMXEyMi0yMiA0NS0yMiAzOSAwIDM5IDY3em0zMzggMXY0NmgtOTB2LTQ2cTAtNjggNDUtNjh0NDUgNjh6bS05NjYtMjE4aDEwN3YtOTRoLTMxMnY5NGgxMDV2NTY5aDEwMHYtNTY5em0yODggNTY5aDg5di00OTRoLTg5djM3OHEtMzAgNDItNTcgNDItMTggMC0yMS0yMS0xLTMtMS0zNXYtMzY0aC04OXYzOTFxMCA0OSA4IDczIDEyIDM3IDU4IDM3IDQ4IDAgMTAyLTYxdjU0em00MjktMTQ4di0xOTdxMC03My05LTk5LTE3LTU2LTcxLTU2LTUwIDAtOTMgNTR2LTIxN2gtODl2NjYzaDg5di00OHE0NSA1NSA5MyA1NSA1NCAwIDcxLTU1IDktMjcgOS0xMDB6bTMzOC0xMHYtMTNoLTkxcTAgNTEtMiA2MS03IDM2LTQwIDM2LTQ2IDAtNDYtNjl2LTg3aDE3OXYtMTAzcTAtNzktMjctMTE2LTM5LTUxLTEwNi01MS02OCAwLTEwNyA1MS0yOCAzNy0yOCAxMTZ2MTczcTAgNzkgMjkgMTE2IDM5IDUxIDEwOCA1MSA3MiAwIDEwOC01MyAxOC0yNyAyMS01NCAyLTkgMi01OHptLTYwOC05MTN2LTIxMHEwLTY5LTQzLTY5dC00MyA2OXYyMTBxMCA3MCA0MyA3MHQ0My03MHptNzE5IDc1MXEwIDIzNC0yNiAzNTAtMTQgNTktNTggOTl0LTEwMiA0NnEtMTg0IDIxLTU1NSAyMXQtNTU1LTIxcS01OC02LTEwMi41LTQ2dC01Ny41LTk5cS0yNi0xMTItMjYtMzUwIDAtMjM0IDI2LTM1MCAxNC01OSA1OC05OXQxMDMtNDdxMTgzLTIwIDU1NC0yMHQ1NTUgMjBxNTggNyAxMDIuNSA0N3Q1Ny41IDk5cTI2IDExMiAyNiAzNTB6bS05OTgtMTI3NmgxMDJsLTEyMSAzOTl2MjcxaC0xMDB2LTI3MXEtMTQtNzQtNjEtMjEyLTM3LTEwMy02NS0xODdoMTA2bDcxIDI2M3ptMzcwIDMzM3YxNzVxMCA4MS0yOCAxMTgtMzggNTEtMTA2IDUxLTY3IDAtMTA1LTUxLTI4LTM4LTI4LTExOHYtMTc1cTAtODAgMjgtMTE3IDM4LTUxIDEwNS01MSA2OCAwIDEwNiA1MSAyOCAzNyAyOCAxMTd6bTMzNS0xNjJ2NDk5aC05MXYtNTVxLTUzIDYyLTEwMyA2Mi00NiAwLTU5LTM3LTgtMjQtOC03NXYtMzk0aDkxdjM2N3EwIDMzIDEgMzUgMyAyMiAyMSAyMiAyNyAwIDU3LTQzdi0zODFoOTF6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVlvdXR1YmUnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==