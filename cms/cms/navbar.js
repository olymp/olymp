'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _olympRouter = require('olymp-router');

var _navbar = require('olymp-fela/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _prefetchLink = require('./prefetch-link');

var _prefetchLink2 = _interopRequireDefault(_prefetchLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var toggleComponent = function toggleComponent(_ref) {
  var toggled = _ref.toggled,
      onToggle = _ref.onToggle,
      props = _objectWithoutProperties(_ref, ['toggled', 'onToggle']);

  return _react2.default.createElement(_olympRouter.Link, _extends({ updateQuery: { toggled: toggled ? undefined : null } }, props));
};
var Navbar = (0, _reactRedux.connect)(function (_ref2) {
  var location = _ref2.location;
  return {
    toggled: location.query.toggled !== undefined,
    renderItemLink: _prefetchLink2.default,
    toggleComponent: toggleComponent
  };
})(_navbar2.default);

Navbar.Nav = _navbar2.default.Nav;
Navbar.Item = _navbar2.default.Item;
Navbar.Toggler = _navbar2.default.Toggler;

exports.default = Navbar;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbXMvbmF2YmFyLmVzNiJdLCJuYW1lcyI6WyJ0b2dnbGVDb21wb25lbnQiLCJ0b2dnbGVkIiwib25Ub2dnbGUiLCJwcm9wcyIsInVuZGVmaW5lZCIsIk5hdmJhciIsImxvY2F0aW9uIiwicXVlcnkiLCJyZW5kZXJJdGVtTGluayIsIk5hdiIsIkl0ZW0iLCJUb2dnbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsUUFBWixRQUFZQSxRQUFaO0FBQUEsTUFBeUJDLEtBQXpCOztBQUFBLFNBQ3RCLDREQUFNLGFBQWEsRUFBRUYsU0FBU0EsVUFBVUcsU0FBVixHQUFzQixJQUFqQyxFQUFuQixJQUFnRUQsS0FBaEUsRUFEc0I7QUFBQSxDQUF4QjtBQUdBLElBQU1FLFNBQVMseUJBQVE7QUFBQSxNQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFtQjtBQUN4Q0wsYUFBU0ssU0FBU0MsS0FBVCxDQUFlTixPQUFmLEtBQTJCRyxTQURJO0FBRXhDSSwwQ0FGd0M7QUFHeENSO0FBSHdDLEdBQW5CO0FBQUEsQ0FBUixtQkFBZjs7QUFNQUssT0FBT0ksR0FBUCxHQUFhLGlCQUFVQSxHQUF2QjtBQUNBSixPQUFPSyxJQUFQLEdBQWMsaUJBQVVBLElBQXhCO0FBQ0FMLE9BQU9NLE9BQVAsR0FBaUIsaUJBQVVBLE9BQTNCOztrQkFFZU4sTSIsImZpbGUiOiJjbXMvY21zL25hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgTmF2YmFyT2xkIGZyb20gJ29seW1wLWZlbGEvbmF2YmFyJztcbmltcG9ydCBQcmVmZXRjaExpbmsgZnJvbSAnLi9wcmVmZXRjaC1saW5rJztcblxuY29uc3QgdG9nZ2xlQ29tcG9uZW50ID0gKHsgdG9nZ2xlZCwgb25Ub2dnbGUsIC4uLnByb3BzIH0pID0+IChcbiAgPExpbmsgdXBkYXRlUXVlcnk9e3sgdG9nZ2xlZDogdG9nZ2xlZCA/IHVuZGVmaW5lZCA6IG51bGwgfX0gey4uLnByb3BzfSAvPlxuKTtcbmNvbnN0IE5hdmJhciA9IGNvbm5lY3QoKHsgbG9jYXRpb24gfSkgPT4gKHtcbiAgdG9nZ2xlZDogbG9jYXRpb24ucXVlcnkudG9nZ2xlZCAhPT0gdW5kZWZpbmVkLFxuICByZW5kZXJJdGVtTGluazogUHJlZmV0Y2hMaW5rLFxuICB0b2dnbGVDb21wb25lbnQsXG59KSkoTmF2YmFyT2xkKTtcblxuTmF2YmFyLk5hdiA9IE5hdmJhck9sZC5OYXY7XG5OYXZiYXIuSXRlbSA9IE5hdmJhck9sZC5JdGVtO1xuTmF2YmFyLlRvZ2dsZXIgPSBOYXZiYXJPbGQuVG9nZ2xlcjtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl19
