'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _container2.default, {
  type: 'containerText',
  label: 'Container schmal',
  category: 'Layout',
  defaultNodes: function defaultNodes() {
    return ['paragraph'];
  },
  styles: function styles() {
    return {
      maxWidth: '100%',
      ifMediumUp: {
        width: 400
      },
      ifLargeUp: {
        width: 520
      },
      ifHugeUp: {
        width: 640
      }
    };
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvY29udGFpbmVyLXRleHQuZXM2Il0sIm5hbWVzIjpbInR5cGUiLCJsYWJlbCIsImNhdGVnb3J5IiwiZGVmYXVsdE5vZGVzIiwic3R5bGVzIiwibWF4V2lkdGgiLCJpZk1lZGl1bVVwIiwid2lkdGgiLCJpZkxhcmdlVXAiLCJpZkh1Z2VVcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7OztBQUlFQSxRQUFNLGU7QUFDTkMsU0FBTyxrQjtBQUNQQyxZQUFVLFE7QUFDVkMsZ0JBQWM7QUFBQSxXQUFNLENBQUMsV0FBRCxDQUFOO0FBQUEsRztBQUNkQyxVQUFRO0FBQUEsV0FBTztBQUNiQyxnQkFBVSxNQURHO0FBRWJDLGtCQUFZO0FBQ1ZDLGVBQU87QUFERyxPQUZDO0FBS2JDLGlCQUFXO0FBQ1RELGVBQU87QUFERSxPQUxFO0FBUWJFLGdCQUFVO0FBQ1JGLGVBQU87QUFEQztBQVJHLEtBQVA7QUFBQSIsImZpbGUiOiJjbXMvcGFnZXMvYmxvY2tzL2NvbnRhaW5lci10ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4uQ29udGFpbmVyLFxuICB0eXBlOiAnY29udGFpbmVyVGV4dCcsXG4gIGxhYmVsOiAnQ29udGFpbmVyIHNjaG1hbCcsXG4gIGNhdGVnb3J5OiAnTGF5b3V0JyxcbiAgZGVmYXVsdE5vZGVzOiAoKSA9PiBbJ3BhcmFncmFwaCddLFxuICBzdHlsZXM6ICgpID0+ICh7XG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBpZk1lZGl1bVVwOiB7XG4gICAgICB3aWR0aDogNDAwLFxuICAgIH0sXG4gICAgaWZMYXJnZVVwOiB7XG4gICAgICB3aWR0aDogNTIwLFxuICAgIH0sXG4gICAgaWZIdWdlVXA6IHtcbiAgICAgIHdpZHRoOiA2NDAsXG4gICAgfSxcbiAgfSksXG59O1xuIl19
