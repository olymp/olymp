var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M576 1312v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm0-256v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm256 0v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm-256-256v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm768 512v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm-256-256v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm-256-256v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm512 256v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm-256-256v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm256 0v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm-256 864h384v-1152h-256v32q0 40-28 68t-68 28h-448q-40 0-68-28t-28-68v-32h-256v1152h384v-224q0-13 9.5-22.5t22.5-9.5h320q13 0 22.5 9.5t9.5 22.5v224zm0-1184v-320q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v96h-128v-96q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-96h128v96q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm512-32v1280q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-1280q0-26 19-45t45-19h320v-288q0-40 28-68t68-28h448q40 0 68 28t28 68v288h320q26 0 45 19t19 45z' });

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
icon.displayName = 'FaHospitalO';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1ob3NwaXRhbC1vLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztZQUV1SSw4QkFBTSxHQUFFLDJyREFBUixHOztBQUR2SSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixhQUFuQjtBQUNBLGVBQWVSLE9BQU9DLElBQVAsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9pY29ucy9saWIvZmEtaG9zcGl0YWwtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNTc2IDEzMTJ2NjRxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTY0cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtNjRxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWg2NHExMyAwIDIyLjUgOS41dDkuNSAyMi41em0wLTI1NnY2NHEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtNjRxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di02NHEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDY0cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6bTI1NiAwdjY0cTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC02NHEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTY0cTAtMTMgOS41LTIyLjV0MjIuNS05LjVoNjRxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptLTI1Ni0yNTZ2NjRxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTY0cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtNjRxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWg2NHExMyAwIDIyLjUgOS41dDkuNSAyMi41em03NjggNTEydjY0cTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC02NHEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTY0cTAtMTMgOS41LTIyLjV0MjIuNS05LjVoNjRxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptLTI1Ni0yNTZ2NjRxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTY0cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtNjRxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWg2NHExMyAwIDIyLjUgOS41dDkuNSAyMi41em0tMjU2LTI1NnY2NHEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtNjRxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di02NHEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDY0cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6bTUxMiAyNTZ2NjRxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTY0cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtNjRxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWg2NHExMyAwIDIyLjUgOS41dDkuNSAyMi41em0tMjU2LTI1NnY2NHEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtNjRxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di02NHEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDY0cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6bTI1NiAwdjY0cTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC02NHEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTY0cTAtMTMgOS41LTIyLjV0MjIuNS05LjVoNjRxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptLTI1NiA4NjRoMzg0di0xMTUyaC0yNTZ2MzJxMCA0MC0yOCA2OHQtNjggMjhoLTQ0OHEtNDAgMC02OC0yOHQtMjgtNjh2LTMyaC0yNTZ2MTE1MmgzODR2LTIyNHEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDMyMHExMyAwIDIyLjUgOS41dDkuNSAyMi41djIyNHptMC0xMTg0di0zMjBxMC0xMy05LjUtMjIuNXQtMjIuNS05LjVoLTY0cS0xMyAwLTIyLjUgOS41dC05LjUgMjIuNXY5NmgtMTI4di05NnEwLTEzLTkuNS0yMi41dC0yMi41LTkuNWgtNjRxLTEzIDAtMjIuNSA5LjV0LTkuNSAyMi41djMyMHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDY0cTEzIDAgMjIuNS05LjV0OS41LTIyLjV2LTk2aDEyOHY5NnEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDY0cTEzIDAgMjIuNS05LjV0OS41LTIyLjV6bTUxMi0zMnYxMjgwcTAgMjYtMTkgNDV0LTQ1IDE5aC0xMjgwcS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4MHEwLTI2IDE5LTQ1dDQ1LTE5aDMyMHYtMjg4cTAtNDAgMjgtNjh0NjgtMjhoNDQ4cTQwIDAgNjggMjh0MjggNjh2Mjg4aDMyMHEyNiAwIDQ1IDE5dDE5IDQ1elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFIb3NwaXRhbE8nO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==