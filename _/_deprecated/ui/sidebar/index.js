'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _sidebar = require('./sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

_sidebar2.default.Button = _button2.default;
_sidebar2.default.Container = (0, _reactFela.createComponent)(function (_ref) {
  var width = _ref.width;
  return {
    height: '100%',
    '> aside': {
      position: 'fixed',
      height: '100%',
      width: width
    },
    '> nav': {
      position: 'fixed',
      width: width
    },
    '> section': {
      marginLeft: width || 350,
      height: '100%',
      position: 'relative'
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      content = _ref2.content,
      rest = _objectWithoutProperties(_ref2, ['children', 'className', 'content']);

  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      _sidebar2.default,
      rest,
      content
    ),
    _react2.default.createElement(
      'section',
      null,
      children
    )
  );
}, function (p) {
  return Object.keys(p);
});

exports.default = _sidebar2.default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL3NpZGViYXIvaW5kZXguZXM2Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNvbnRhaW5lciIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJtYXJnaW5MZWZ0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjb250ZW50IiwicmVzdCIsIk9iamVjdCIsImtleXMiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsa0JBQVFBLE1BQVI7QUFDQSxrQkFBUUMsU0FBUixHQUFvQixnQ0FDbEI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxZQUFRLE1BRE07QUFFZCxlQUFXO0FBQ1RDLGdCQUFVLE9BREQ7QUFFVEQsY0FBUSxNQUZDO0FBR1REO0FBSFMsS0FGRztBQU9kLGFBQVM7QUFDUEUsZ0JBQVUsT0FESDtBQUVQRjtBQUZPLEtBUEs7QUFXZCxpQkFBYTtBQUNYRyxrQkFBWUgsU0FBUyxHQURWO0FBRVhDLGNBQVEsTUFGRztBQUdYQyxnQkFBVTtBQUhDO0FBWEMsR0FBaEI7QUFBQSxDQURrQixFQWtCbEI7QUFBQSxNQUFHRSxRQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFhQyxTQUFiLFNBQWFBLFNBQWI7QUFBQSxNQUF3QkMsT0FBeEIsU0FBd0JBLE9BQXhCO0FBQUEsTUFBb0NDLElBQXBDOztBQUFBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBV0YsU0FBaEI7QUFDRTtBQUFBO0FBQWFFLFVBQWI7QUFBb0JEO0FBQXBCLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBVUY7QUFBVjtBQUZGLEdBREY7QUFBQSxDQWxCa0IsRUF3QmxCO0FBQUEsU0FBS0ksT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxDQXhCa0IsQ0FBcEIiLCJmaWxlIjoiZXh0ZXJuYWwvdWkvc2lkZWJhci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcblxuU2lkZWJhci5CdXR0b24gPSBCdXR0b247XG5TaWRlYmFyLkNvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgd2lkdGggfSkgPT4gKHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAnPiBhc2lkZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aCxcbiAgICB9LFxuICAgICc+IG5hdic6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgd2lkdGgsXG4gICAgfSxcbiAgICAnPiBzZWN0aW9uJzoge1xuICAgICAgbWFyZ2luTGVmdDogd2lkdGggfHwgMzUwLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB9LFxuICB9KSxcbiAgKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgY29udGVudCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8U2lkZWJhciB7Li4ucmVzdH0+e2NvbnRlbnR9PC9TaWRlYmFyPlxuICAgICAgPHNlY3Rpb24+e2NoaWxkcmVufTwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXX0=
