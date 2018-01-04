'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _olympFela.createComponent)(function (_ref) {
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

  return _react2.default.createElement(
    'div',
    { className: className, onClick: disabled ? function () {} : onClick },
    _react.Children.map(children, function (child) {
      return child ? (0, _react.cloneElement)(child, _extends({ size: large ? 20 : 14 }, p)) : child;
    })
  );
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9leHRyYS5lczYiXSwibmFtZXMiOlsidGhlbWUiLCJsYXJnZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImN1cnNvciIsInVuZGVmaW5lZCIsIm9wYWNpdHkiLCJjZW50ZXIiLCJvbkhvdmVyIiwiYmFja2dyb3VuZENvbG9yIiwiZGFyazUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInAiLCJtYXAiLCJjaGlsZCIsInNpemUiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztrQkFFZSxnQ0FDYjtBQUFBLE1BQUdBLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxPQUFqQixRQUFpQkEsT0FBakI7QUFBQSxNQUEwQkMsUUFBMUIsUUFBMEJBLFFBQTFCO0FBQUEsU0FBMEM7QUFDeENDLFdBQU9ILFFBQVEsRUFBUixHQUFhLEVBRG9CO0FBRXhDSSxZQUFRSixRQUFRLEVBQVIsR0FBYSxFQUZtQjtBQUd4Q0ssaUJBQWEsQ0FIMkI7QUFJeENDLGtCQUFjLEtBSjBCO0FBS3hDQyxjQUFVLFVBTDhCO0FBTXhDQyxZQUFRUCxXQUFXLENBQUNDLFFBQVosR0FBdUIsU0FBdkIsR0FBbUNPLFNBTkg7QUFPeENDLGFBQVNSLFdBQVcsSUFBWCxHQUFrQixDQVBhO0FBUXhDLFdBQU87QUFDTFMsY0FBUTtBQURILEtBUmlDO0FBV3hDQyxhQUFTO0FBQ1BDLHVCQUFpQlosV0FBVyxDQUFDQyxRQUFaLEdBQXVCSCxNQUFNZSxLQUE3QixHQUFxQ0w7QUFEL0M7QUFYK0IsR0FBMUM7QUFBQSxDQURhLEVBZ0JiO0FBQUEsTUFBR00sU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBY0MsUUFBZCxTQUFjQSxRQUFkO0FBQUEsTUFBd0JmLE9BQXhCLFNBQXdCQSxPQUF4QjtBQUFBLE1BQWlDQyxRQUFqQyxTQUFpQ0EsUUFBakM7QUFBQSxNQUEyQ0YsS0FBM0MsU0FBMkNBLEtBQTNDO0FBQUEsTUFBcURpQixDQUFyRDs7QUFBQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVdGLFNBQWhCLEVBQTJCLFNBQVNiLFdBQVcsWUFBTSxDQUFFLENBQW5CLEdBQXNCRCxPQUExRDtBQUNHLG9CQUFTaUIsR0FBVCxDQUNDRixRQURELEVBRUM7QUFBQSxhQUNFRyxRQUFRLHlCQUFhQSxLQUFiLGFBQXNCQyxNQUFNcEIsUUFBUSxFQUFSLEdBQWEsRUFBekMsSUFBZ0RpQixDQUFoRCxFQUFSLEdBQStERSxLQURqRTtBQUFBLEtBRkQ7QUFESCxHQURGO0FBQUEsQ0FoQmEsRUF5QmI7QUFBQSxTQUFLRSxPQUFPQyxJQUFQLENBQVlMLENBQVosQ0FBTDtBQUFBLENBekJhLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9tZW51L2V4dHJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgbGFyZ2UsIG9uQ2xpY2ssIGRpc2FibGVkIH0pID0+ICh7XG4gICAgd2lkdGg6IGxhcmdlID8gMzAgOiAyMixcbiAgICBoZWlnaHQ6IGxhcmdlID8gMzAgOiAyMixcbiAgICBtYXJnaW5SaWdodDogMCxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGN1cnNvcjogb25DbGljayAmJiAhZGlzYWJsZWQgPyAncG9pbnRlcicgOiB1bmRlZmluZWQsXG4gICAgb3BhY2l0eTogZGlzYWJsZWQgPyAwLjY3IDogMSxcbiAgICAnPiAqJzoge1xuICAgICAgY2VudGVyOiB0cnVlLFxuICAgIH0sXG4gICAgb25Ib3Zlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBvbkNsaWNrICYmICFkaXNhYmxlZCA/IHRoZW1lLmRhcms1IDogdW5kZWZpbmVkLFxuICAgIH0sXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBvbkNsaWNrLCBkaXNhYmxlZCwgbGFyZ2UsIC4uLnAgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e2Rpc2FibGVkID8gKCkgPT4ge30gOiBvbkNsaWNrfT5cbiAgICAgIHtDaGlsZHJlbi5tYXAoXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjaGlsZCA9PlxuICAgICAgICAgIGNoaWxkID8gY2xvbmVFbGVtZW50KGNoaWxkLCB7IHNpemU6IGxhcmdlID8gMjAgOiAxNCwgLi4ucCB9KSA6IGNoaWxkLFxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG4iXX0=
