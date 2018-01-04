'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    paddingTop: 1,
    backgroundColor: theme.dark5,
    borderWidth: 0,
    color: theme.dark3,
    onHover: {
      borderWidth: 1
    },
    onActive: {
      borderWidth: 1
    },
    onFocus: {
      borderWidth: 1
    },
    '> *': {
      marginTop: 1
    }
  };
}, function (p) {
  return _react2.default.createElement(_button2.default, _extends({ size: 'large' }, p));
}, function (p) {
  return Object.keys(p);
});

exports.default = Button;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL3NpZGViYXIvYnV0dG9uLmVzNiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ0aGVtZSIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXJrNSIsImJvcmRlcldpZHRoIiwiY29sb3IiLCJkYXJrMyIsIm9uSG92ZXIiLCJvbkFjdGl2ZSIsIm9uRm9jdXMiLCJtYXJnaW5Ub3AiLCJwIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBR0EsSUFBTUEsU0FBUyxnQ0FDYjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLGdCQUFZLENBREU7QUFFZEMscUJBQWlCRixNQUFNRyxLQUZUO0FBR2RDLGlCQUFhLENBSEM7QUFJZEMsV0FBT0wsTUFBTU0sS0FKQztBQUtkQyxhQUFTO0FBQ1BILG1CQUFhO0FBRE4sS0FMSztBQVFkSSxjQUFVO0FBQ1JKLG1CQUFhO0FBREwsS0FSSTtBQVdkSyxhQUFTO0FBQ1BMLG1CQUFhO0FBRE4sS0FYSztBQWNkLFdBQU87QUFDTE0saUJBQVc7QUFETjtBQWRPLEdBQWhCO0FBQUEsQ0FEYSxFQW1CYjtBQUFBLFNBQUssMkRBQVcsTUFBSyxPQUFoQixJQUE0QkMsQ0FBNUIsRUFBTDtBQUFBLENBbkJhLEVBb0JiO0FBQUEsU0FBS0MsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQUw7QUFBQSxDQXBCYSxDQUFmOztrQkF1QmVaLE0iLCJmaWxlIjoiZXh0ZXJuYWwvdWkvc2lkZWJhci9idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBCdXR0b24gYXMgQW50QnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IEJ1dHRvbiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nVG9wOiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZGFyazUsXG4gICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgY29sb3I6IHRoZW1lLmRhcmszLFxuICAgIG9uSG92ZXI6IHtcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIH0sXG4gICAgb25BY3RpdmU6IHtcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIH0sXG4gICAgb25Gb2N1czoge1xuICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgfSxcbiAgICAnPiAqJzoge1xuICAgICAgbWFyZ2luVG9wOiAxLFxuICAgIH0sXG4gIH0pLFxuICBwID0+IDxBbnRCdXR0b24gc2l6ZT1cImxhcmdlXCIgey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19
