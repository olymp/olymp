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

var _ref2 = _react2.default.createElement('path', { d: 'M1151 0q61 0 116 28t91 77l572 781q118 159 118 359v355q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-177l-286-143h-546q-80 0-136-56t-56-136v-32q0-119 84.5-203.5t203.5-84.5h420l42-128h-686q-100 0-173.5-67.5t-81.5-166.5q-65-79-65-182v-32q0-80 56-136t136-56h959zm769 1600v-355q0-157-93-284l-573-781q-39-52-103-52h-959q-26 0-45 19t-19 45q0 32 1.5 49.5t9.5 40.5 25 43q10-31 35.5-50t56.5-19h832v32h-832q-26 0-45 19t-19 45q0 44 3 58 8 44 44 73t81 29h731q40 0 68 28t28 68q0 15-5 30l-64 192q-10 29-35 47.5t-56 18.5h-443q-66 0-113 47t-47 113v32q0 26 19 45t45 19h561q16 0 29 7l317 158q24 13 38.5 36t14.5 50v197q0 26 19 45t45 19h384q26 0 45-19t19-45z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { viewBox: '0 0 2048 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaHandLizardO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1oYW5kLWxpemFyZC1vLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFHd0ksd0NBQU0sR0FBRSxnb0JBQVIsRzs7QUFEeEksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEyRSxTQUFRLGVBQW5GLEVBQW1HLE9BQU0sNEJBQXpHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsZUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtaGFuZC1saXphcmQtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5cbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTE1MSAwcTYxIDAgMTE2IDI4dDkxIDc3bDU3MiA3ODFxMTE4IDE1OSAxMTggMzU5djM1NXEwIDgwLTU2IDEzNnQtMTM2IDU2aC0zODRxLTgwIDAtMTM2LTU2dC01Ni0xMzZ2LTE3N2wtMjg2LTE0M2gtNTQ2cS04MCAwLTEzNi01NnQtNTYtMTM2di0zMnEwLTExOSA4NC41LTIwMy41dDIwMy41LTg0LjVoNDIwbDQyLTEyOGgtNjg2cS0xMDAgMC0xNzMuNS02Ny41dC04MS41LTE2Ni41cS02NS03OS02NS0xODJ2LTMycTAtODAgNTYtMTM2dDEzNi01Nmg5NTl6bTc2OSAxNjAwdi0zNTVxMC0xNTctOTMtMjg0bC01NzMtNzgxcS0zOS01Mi0xMDMtNTJoLTk1OXEtMjYgMC00NSAxOXQtMTkgNDVxMCAzMiAxLjUgNDkuNXQ5LjUgNDAuNSAyNSA0M3ExMC0zMSAzNS41LTUwdDU2LjUtMTloODMydjMyaC04MzJxLTI2IDAtNDUgMTl0LTE5IDQ1cTAgNDQgMyA1OCA4IDQ0IDQ0IDczdDgxIDI5aDczMXE0MCAwIDY4IDI4dDI4IDY4cTAgMTUtNSAzMGwtNjQgMTkycS0xMCAyOS0zNSA0Ny41dC01NiAxOC41aC00NDNxLTY2IDAtMTEzIDQ3dC00NyAxMTN2MzJxMCAyNiAxOSA0NXQ0NSAxOWg1NjFxMTYgMCAyOSA3bDMxNyAxNThxMjQgMTMgMzguNSAzNnQxNC41IDUwdjE5N3EwIDI2IDE5IDQ1dDQ1IDE5aDM4NHEyNiAwIDQ1LTE5dDE5LTQ1elwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhSGFuZExpemFyZE8nO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
