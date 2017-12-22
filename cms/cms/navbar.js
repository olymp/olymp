var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';
import NavbarOld from 'olymp-fela/navbar';
import PrefetchLink from './prefetch-link';

var toggleComponent = function toggleComponent(_ref) {
  var toggled = _ref.toggled,
      onToggle = _ref.onToggle,
      props = _objectWithoutProperties(_ref, ['toggled', 'onToggle']);

  return React.createElement(Link, _extends({ updateQuery: { toggled: toggled ? undefined : null } }, props));
};
var Navbar = connect(function (_ref2) {
  var location = _ref2.location;
  return {
    toggled: location.query.toggled !== undefined,
    renderItemLink: PrefetchLink,
    toggleComponent: toggleComponent
  };
})(NavbarOld);

Navbar.Nav = NavbarOld.Nav;
Navbar.Item = NavbarOld.Item;
Navbar.Toggler = NavbarOld.Toggler;

export default Navbar;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Ntcy9uYXZiYXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsIkxpbmsiLCJOYXZiYXJPbGQiLCJQcmVmZXRjaExpbmsiLCJ0b2dnbGVDb21wb25lbnQiLCJ0b2dnbGVkIiwib25Ub2dnbGUiLCJwcm9wcyIsInVuZGVmaW5lZCIsIk5hdmJhciIsImxvY2F0aW9uIiwicXVlcnkiLCJyZW5kZXJJdGVtTGluayIsIk5hdiIsIkl0ZW0iLCJUb2dnbGVyIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixtQkFBdEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGlCQUF6Qjs7QUFFQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsUUFBWixRQUFZQSxRQUFaO0FBQUEsTUFBeUJDLEtBQXpCOztBQUFBLFNBQ3RCLG9CQUFDLElBQUQsYUFBTSxhQUFhLEVBQUVGLFNBQVNBLFVBQVVHLFNBQVYsR0FBc0IsSUFBakMsRUFBbkIsSUFBZ0VELEtBQWhFLEVBRHNCO0FBQUEsQ0FBeEI7QUFHQSxJQUFNRSxTQUFTVCxRQUFRO0FBQUEsTUFBR1UsUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFDeENMLGFBQVNLLFNBQVNDLEtBQVQsQ0FBZU4sT0FBZixLQUEyQkcsU0FESTtBQUV4Q0ksb0JBQWdCVCxZQUZ3QjtBQUd4Q0M7QUFId0MsR0FBbkI7QUFBQSxDQUFSLEVBSVhGLFNBSlcsQ0FBZjs7QUFNQU8sT0FBT0ksR0FBUCxHQUFhWCxVQUFVVyxHQUF2QjtBQUNBSixPQUFPSyxJQUFQLEdBQWNaLFVBQVVZLElBQXhCO0FBQ0FMLE9BQU9NLE9BQVAsR0FBaUJiLFVBQVVhLE9BQTNCOztBQUVBLGVBQWVOLE1BQWYiLCJmaWxlIjoicGFja2FnZXMvY21zL25hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgTmF2YmFyT2xkIGZyb20gJ29seW1wLWZlbGEvbmF2YmFyJztcbmltcG9ydCBQcmVmZXRjaExpbmsgZnJvbSAnLi9wcmVmZXRjaC1saW5rJztcblxuY29uc3QgdG9nZ2xlQ29tcG9uZW50ID0gKHsgdG9nZ2xlZCwgb25Ub2dnbGUsIC4uLnByb3BzIH0pID0+IChcbiAgPExpbmsgdXBkYXRlUXVlcnk9e3sgdG9nZ2xlZDogdG9nZ2xlZCA/IHVuZGVmaW5lZCA6IG51bGwgfX0gey4uLnByb3BzfSAvPlxuKTtcbmNvbnN0IE5hdmJhciA9IGNvbm5lY3QoKHsgbG9jYXRpb24gfSkgPT4gKHtcbiAgdG9nZ2xlZDogbG9jYXRpb24ucXVlcnkudG9nZ2xlZCAhPT0gdW5kZWZpbmVkLFxuICByZW5kZXJJdGVtTGluazogUHJlZmV0Y2hMaW5rLFxuICB0b2dnbGVDb21wb25lbnQsXG59KSkoTmF2YmFyT2xkKTtcblxuTmF2YmFyLk5hdiA9IE5hdmJhck9sZC5OYXY7XG5OYXZiYXIuSXRlbSA9IE5hdmJhck9sZC5JdGVtO1xuTmF2YmFyLlRvZ2dsZXIgPSBOYXZiYXJPbGQuVG9nZ2xlcjtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl19
