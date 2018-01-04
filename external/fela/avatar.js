'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _reactGravatar = require('react-gravatar');

var _reactGravatar2 = _interopRequireDefault(_reactGravatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getInitials = function getInitials(name) {
  if (name) {
    var array = name.split(' ');

    switch (array.length) {
      case 1:
        return array[0].charAt(0).toUpperCase();
      default:
        return array[0].charAt(0).toUpperCase() + array[array.length - 1].charAt(0).toUpperCase();
    }
  }
  return false;
};

exports.default = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      name = _ref.name,
      size = _ref.size;
  return {
    display: 'block',
    borderRadius: '50%',
    background: 'url(https://invatar0.appspot.com/svg/' + getInitials(name) + '.jpg?s=' + Math.round((size || 30) * 0.8) + '&bg=' + encodeURIComponent(theme.color) + '&color=' + encodeURIComponent(theme.light) + ') center center no-repeat, ' + theme.color
  };
}, function (_ref2) {
  var size = _ref2.size,
      p = _objectWithoutProperties(_ref2, ['size']);

  return _react2.default.createElement(_reactGravatar2.default, _extends({}, p, { size: size || 30 }));
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvYXZhdGFyLmVzNiJdLCJuYW1lcyI6WyJnZXRJbml0aWFscyIsIm5hbWUiLCJhcnJheSIsInNwbGl0IiwibGVuZ3RoIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJ0aGVtZSIsInNpemUiLCJkaXNwbGF5IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsIk1hdGgiLCJyb3VuZCIsImVuY29kZVVSSUNvbXBvbmVudCIsImNvbG9yIiwibGlnaHQiLCJwIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxPQUFRO0FBQzFCLE1BQUlDLElBQUosRUFBVTtBQUNSLFFBQU1DLFFBQVFELEtBQUtFLEtBQUwsQ0FBVyxHQUFYLENBQWQ7O0FBRUEsWUFBUUQsTUFBTUUsTUFBZDtBQUNFLFdBQUssQ0FBTDtBQUNFLGVBQU9GLE1BQU0sQ0FBTixFQUFTRyxNQUFULENBQWdCLENBQWhCLEVBQW1CQyxXQUFuQixFQUFQO0FBQ0Y7QUFDRSxlQUNFSixNQUFNLENBQU4sRUFBU0csTUFBVCxDQUFnQixDQUFoQixFQUFtQkMsV0FBbkIsS0FDQUosTUFBTUEsTUFBTUUsTUFBTixHQUFlLENBQXJCLEVBQXdCQyxNQUF4QixDQUErQixDQUEvQixFQUFrQ0MsV0FBbEMsRUFGRjtBQUpKO0FBU0Q7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQWZEOztrQkFpQmUsZ0NBQ2I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVTixJQUFWLFFBQVVBLElBQVY7QUFBQSxNQUFnQk8sSUFBaEIsUUFBZ0JBLElBQWhCO0FBQUEsU0FBNEI7QUFDMUJDLGFBQVMsT0FEaUI7QUFFMUJDLGtCQUFjLEtBRlk7QUFHMUJDLDBEQUFvRFgsWUFDbERDLElBRGtELENBQXBELGVBRVdXLEtBQUtDLEtBQUwsQ0FBVyxDQUFDTCxRQUFRLEVBQVQsSUFBZSxHQUExQixDQUZYLFlBRWdETSxtQkFDOUNQLE1BQU1RLEtBRHdDLENBRmhELGVBSVdELG1CQUNUUCxNQUFNUyxLQURHLENBSlgsbUNBTStCVCxNQUFNUTtBQVRYLEdBQTVCO0FBQUEsQ0FEYSxFQVliO0FBQUEsTUFBR1AsSUFBSCxTQUFHQSxJQUFIO0FBQUEsTUFBWVMsQ0FBWjs7QUFBQSxTQUFvQixvRUFBY0EsQ0FBZCxJQUFpQixNQUFNVCxRQUFRLEVBQS9CLElBQXBCO0FBQUEsQ0FaYSxFQWFiO0FBQUEsU0FBS1UsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQUw7QUFBQSxDQWJhLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9hdmF0YXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgR3JhdmF0YXIgZnJvbSAncmVhY3QtZ3JhdmF0YXInO1xuXG5jb25zdCBnZXRJbml0aWFscyA9IG5hbWUgPT4ge1xuICBpZiAobmFtZSkge1xuICAgIGNvbnN0IGFycmF5ID0gbmFtZS5zcGxpdCgnICcpO1xuXG4gICAgc3dpdGNoIChhcnJheS5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGFycmF5WzBdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBhcnJheVswXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgbmFtZSwgc2l6ZSB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBiYWNrZ3JvdW5kOiBgdXJsKGh0dHBzOi8vaW52YXRhcjAuYXBwc3BvdC5jb20vc3ZnLyR7Z2V0SW5pdGlhbHMoXG4gICAgICBuYW1lLFxuICAgICl9LmpwZz9zPSR7TWF0aC5yb3VuZCgoc2l6ZSB8fCAzMCkgKiAwLjgpfSZiZz0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgIHRoZW1lLmNvbG9yLFxuICAgICl9JmNvbG9yPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgdGhlbWUubGlnaHQsXG4gICAgKX0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0LCAke3RoZW1lLmNvbG9yfWAsXG4gIH0pLFxuICAoeyBzaXplLCAuLi5wIH0pID0+IDxHcmF2YXRhciB7Li4ucH0gc2l6ZT17c2l6ZSB8fCAzMH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuIl19
