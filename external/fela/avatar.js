var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'olymp-fela';
import Gravatar from 'react-gravatar';

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

export default createComponent(function (_ref) {
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

  return React.createElement(Gravatar, _extends({}, p, { size: size || 30 }));
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvYXZhdGFyLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsIkdyYXZhdGFyIiwiZ2V0SW5pdGlhbHMiLCJuYW1lIiwiYXJyYXkiLCJzcGxpdCIsImxlbmd0aCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwidGhlbWUiLCJzaXplIiwiZGlzcGxheSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJNYXRoIiwicm91bmQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJjb2xvciIsImxpZ2h0IiwicCIsIk9iamVjdCIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLE9BQU9DLFFBQVAsTUFBcUIsZ0JBQXJCOztBQUVBLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxPQUFRO0FBQzFCLE1BQUlDLElBQUosRUFBVTtBQUNSLFFBQU1DLFFBQVFELEtBQUtFLEtBQUwsQ0FBVyxHQUFYLENBQWQ7O0FBRUEsWUFBUUQsTUFBTUUsTUFBZDtBQUNFLFdBQUssQ0FBTDtBQUNFLGVBQU9GLE1BQU0sQ0FBTixFQUFTRyxNQUFULENBQWdCLENBQWhCLEVBQW1CQyxXQUFuQixFQUFQO0FBQ0Y7QUFDRSxlQUNFSixNQUFNLENBQU4sRUFBU0csTUFBVCxDQUFnQixDQUFoQixFQUFtQkMsV0FBbkIsS0FDQUosTUFBTUEsTUFBTUUsTUFBTixHQUFlLENBQXJCLEVBQXdCQyxNQUF4QixDQUErQixDQUEvQixFQUFrQ0MsV0FBbEMsRUFGRjtBQUpKO0FBU0Q7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQWZEOztBQWlCQSxlQUFlUixnQkFDYjtBQUFBLE1BQUdTLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVOLElBQVYsUUFBVUEsSUFBVjtBQUFBLE1BQWdCTyxJQUFoQixRQUFnQkEsSUFBaEI7QUFBQSxTQUE0QjtBQUMxQkMsYUFBUyxPQURpQjtBQUUxQkMsa0JBQWMsS0FGWTtBQUcxQkMsMERBQW9EWCxZQUNsREMsSUFEa0QsQ0FBcEQsZUFFV1csS0FBS0MsS0FBTCxDQUFXLENBQUNMLFFBQVEsRUFBVCxJQUFlLEdBQTFCLENBRlgsWUFFZ0RNLG1CQUM5Q1AsTUFBTVEsS0FEd0MsQ0FGaEQsZUFJV0QsbUJBQ1RQLE1BQU1TLEtBREcsQ0FKWCxtQ0FNK0JULE1BQU1RO0FBVFgsR0FBNUI7QUFBQSxDQURhLEVBWWI7QUFBQSxNQUFHUCxJQUFILFNBQUdBLElBQUg7QUFBQSxNQUFZUyxDQUFaOztBQUFBLFNBQW9CLG9CQUFDLFFBQUQsZUFBY0EsQ0FBZCxJQUFpQixNQUFNVCxRQUFRLEVBQS9CLElBQXBCO0FBQUEsQ0FaYSxFQWFiO0FBQUEsU0FBS1UsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQUw7QUFBQSxDQWJhLENBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9hdmF0YXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgR3JhdmF0YXIgZnJvbSAncmVhY3QtZ3JhdmF0YXInO1xuXG5jb25zdCBnZXRJbml0aWFscyA9IG5hbWUgPT4ge1xuICBpZiAobmFtZSkge1xuICAgIGNvbnN0IGFycmF5ID0gbmFtZS5zcGxpdCgnICcpO1xuXG4gICAgc3dpdGNoIChhcnJheS5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGFycmF5WzBdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBhcnJheVswXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgbmFtZSwgc2l6ZSB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBiYWNrZ3JvdW5kOiBgdXJsKGh0dHBzOi8vaW52YXRhcjAuYXBwc3BvdC5jb20vc3ZnLyR7Z2V0SW5pdGlhbHMoXG4gICAgICBuYW1lLFxuICAgICl9LmpwZz9zPSR7TWF0aC5yb3VuZCgoc2l6ZSB8fCAzMCkgKiAwLjgpfSZiZz0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgIHRoZW1lLmNvbG9yLFxuICAgICl9JmNvbG9yPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgdGhlbWUubGlnaHQsXG4gICAgKX0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0LCAke3RoZW1lLmNvbG9yfWAsXG4gIH0pLFxuICAoeyBzaXplLCAuLi5wIH0pID0+IDxHcmF2YXRhciB7Li4ucH0gc2l6ZT17c2l6ZSB8fCAzMH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuIl19
