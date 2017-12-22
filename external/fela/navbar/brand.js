var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { NavLink } from 'olymp-router';
import cn from 'classnames';

var Brand = createComponent(function (_ref) {
  var theme = _ref.theme,
      inverse = _ref.inverse;
  return {
    color: inverse ? theme.light : theme.dark,
    // centerY: true,
    paddingRight: theme.space3,
    paddingY: theme.space2,
    display: 'inline-block',
    '> img': {
      marginY: 0,
      marginX: 0
    },
    onHover: {
      color: inverse ? theme.light2 : theme.dark2
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      p = _objectWithoutProperties(_ref2, ['children', 'className']);

  return React.createElement(
    NavLink,
    _extends({ to: '/', className: cn(className, 'o-nav-item-brand') }, p),
    children
  );
}, function (_ref3) {
  var inverse = _ref3.inverse,
      vertically = _ref3.vertically,
      p = _objectWithoutProperties(_ref3, ['inverse', 'vertically']);

  return Object.keys(p);
});

var Inner = createComponent(function (_ref4) {
  var theme = _ref4.theme;
  return {
    visibility: 'hidden',
    paddingX: theme.space3,
    '> *': {
      marginX: '-' + theme.space3
    }
  };
}, 'div', ['className']);

var NavbarBrand = createComponent(function (_ref5) {
  var theme = _ref5.theme,
      vertically = _ref5.vertically;
  return {
    position: 'relative',
    fontSize: 'calc(' + theme.fontSize + ' + 4px)',
    whiteSpace: 'nowrap',
    float: vertically ? 'none' : 'left'
  };
}, function (_ref6) {
  var className = _ref6.className,
      children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ['className', 'children']);

  return React.createElement(
    'div',
    { className: className },
    React.createElement(
      Brand,
      props,
      children
    )
  );
}, function (p) {
  return Object.keys(p);
});
NavbarBrand.displayName = 'Navbar.Brand';
NavbarBrand.propTypes = {
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool
};
NavbarBrand.defaultProps = {
  inverse: false
};
export default NavbarBrand;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbmF2YmFyL2JyYW5kLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImNyZWF0ZUNvbXBvbmVudCIsIk5hdkxpbmsiLCJjbiIsIkJyYW5kIiwidGhlbWUiLCJpbnZlcnNlIiwiY29sb3IiLCJsaWdodCIsImRhcmsiLCJwYWRkaW5nUmlnaHQiLCJzcGFjZTMiLCJwYWRkaW5nWSIsInNwYWNlMiIsImRpc3BsYXkiLCJtYXJnaW5ZIiwibWFyZ2luWCIsIm9uSG92ZXIiLCJsaWdodDIiLCJkYXJrMiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicCIsInZlcnRpY2FsbHkiLCJPYmplY3QiLCJrZXlzIiwiSW5uZXIiLCJ2aXNpYmlsaXR5IiwicGFkZGluZ1giLCJOYXZiYXJCcmFuZCIsInBvc2l0aW9uIiwiZm9udFNpemUiLCJ3aGl0ZVNwYWNlIiwiZmxvYXQiLCJwcm9wcyIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLFNBQVNDLE9BQVQsUUFBd0IsY0FBeEI7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjs7QUFFQSxJQUFNQyxRQUFRSCxnQkFDWjtBQUFBLE1BQUdJLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLE9BQVYsUUFBVUEsT0FBVjtBQUFBLFNBQXlCO0FBQ3ZCQyxXQUFPRCxVQUFVRCxNQUFNRyxLQUFoQixHQUF3QkgsTUFBTUksSUFEZDtBQUV2QjtBQUNBQyxrQkFBY0wsTUFBTU0sTUFIRztBQUl2QkMsY0FBVVAsTUFBTVEsTUFKTztBQUt2QkMsYUFBUyxjQUxjO0FBTXZCLGFBQVM7QUFDUEMsZUFBUyxDQURGO0FBRVBDLGVBQVM7QUFGRixLQU5jO0FBVXZCQyxhQUFTO0FBQ1BWLGFBQU9ELFVBQVVELE1BQU1hLE1BQWhCLEdBQXlCYixNQUFNYztBQUQvQjtBQVZjLEdBQXpCO0FBQUEsQ0FEWSxFQWVaO0FBQUEsTUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBYUMsU0FBYixTQUFhQSxTQUFiO0FBQUEsTUFBMkJDLENBQTNCOztBQUFBLFNBQ0U7QUFBQyxXQUFEO0FBQUEsZUFBUyxJQUFHLEdBQVosRUFBZ0IsV0FBV25CLEdBQUdrQixTQUFILEVBQWMsa0JBQWQsQ0FBM0IsSUFBa0VDLENBQWxFO0FBQ0dGO0FBREgsR0FERjtBQUFBLENBZlksRUFvQlo7QUFBQSxNQUFHZCxPQUFILFNBQUdBLE9BQUg7QUFBQSxNQUFZaUIsVUFBWixTQUFZQSxVQUFaO0FBQUEsTUFBMkJELENBQTNCOztBQUFBLFNBQW1DRSxPQUFPQyxJQUFQLENBQVlILENBQVosQ0FBbkM7QUFBQSxDQXBCWSxDQUFkOztBQXVCQSxJQUFNSSxRQUFRekIsZ0JBQ1o7QUFBQSxNQUFHSSxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkc0IsZ0JBQVksUUFERTtBQUVkQyxjQUFVdkIsTUFBTU0sTUFGRjtBQUdkLFdBQU87QUFDTEsscUJBQWFYLE1BQU1NO0FBRGQ7QUFITyxHQUFoQjtBQUFBLENBRFksRUFRWixLQVJZLEVBU1osQ0FBQyxXQUFELENBVFksQ0FBZDs7QUFZQSxJQUFNa0IsY0FBYzVCLGdCQUNsQjtBQUFBLE1BQUdJLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVVrQixVQUFWLFNBQVVBLFVBQVY7QUFBQSxTQUE0QjtBQUMxQk8sY0FBVSxVQURnQjtBQUUxQkMsd0JBQWtCMUIsTUFBTTBCLFFBQXhCLFlBRjBCO0FBRzFCQyxnQkFBWSxRQUhjO0FBSTFCQyxXQUFPVixhQUFhLE1BQWIsR0FBc0I7QUFKSCxHQUE1QjtBQUFBLENBRGtCLEVBT2xCO0FBQUEsTUFBR0YsU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBY0QsUUFBZCxTQUFjQSxRQUFkO0FBQUEsTUFBMkJjLEtBQTNCOztBQUFBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBV2IsU0FBaEI7QUFDRTtBQUFDLFdBQUQ7QUFBV2EsV0FBWDtBQUFtQmQ7QUFBbkI7QUFERixHQURGO0FBQUEsQ0FQa0IsRUFlbEI7QUFBQSxTQUFLSSxPQUFPQyxJQUFQLENBQVlILENBQVosQ0FBTDtBQUFBLENBZmtCLENBQXBCO0FBaUJBTyxZQUFZTSxXQUFaLEdBQTBCLGNBQTFCO0FBQ0FOLFlBQVlPLFNBQVosR0FBd0I7QUFDdEI7QUFDQTlCLFdBQVNOLFVBQVVxQztBQUZHLENBQXhCO0FBSUFSLFlBQVlTLFlBQVosR0FBMkI7QUFDekJoQyxXQUFTO0FBRGdCLENBQTNCO0FBR0EsZUFBZXVCLFdBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9uYXZiYXIvYnJhbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IEJyYW5kID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgaW52ZXJzZSB9KSA9PiAoe1xuICAgIGNvbG9yOiBpbnZlcnNlID8gdGhlbWUubGlnaHQgOiB0aGVtZS5kYXJrLFxuICAgIC8vIGNlbnRlclk6IHRydWUsXG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjZTMsXG4gICAgcGFkZGluZ1k6IHRoZW1lLnNwYWNlMixcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAnPiBpbWcnOiB7XG4gICAgICBtYXJnaW5ZOiAwLFxuICAgICAgbWFyZ2luWDogMCxcbiAgICB9LFxuICAgIG9uSG92ZXI6IHtcbiAgICAgIGNvbG9yOiBpbnZlcnNlID8gdGhlbWUubGlnaHQyIDogdGhlbWUuZGFyazIsXG4gICAgfSxcbiAgfSksXG4gICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnAgfSkgPT4gKFxuICAgIDxOYXZMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCAnby1uYXYtaXRlbS1icmFuZCcpfSB7Li4ucH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9OYXZMaW5rPlxuICApLFxuICAoeyBpbnZlcnNlLCB2ZXJ0aWNhbGx5LCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgSW5uZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMyxcbiAgICAnPiAqJzoge1xuICAgICAgbWFyZ2luWDogYC0ke3RoZW1lLnNwYWNlM31gLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgWydjbGFzc05hbWUnXSxcbik7XG5cbmNvbnN0IE5hdmJhckJyYW5kID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgdmVydGljYWxseSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGZvbnRTaXplOiBgY2FsYygke3RoZW1lLmZvbnRTaXplfSArIDRweClgLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIGZsb2F0OiB2ZXJ0aWNhbGx5ID8gJ25vbmUnIDogJ2xlZnQnLFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPEJyYW5kIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvQnJhbmQ+XG4gICAgICB7LyogPElubmVyPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC9Jbm5lcj4gKi99XG4gICAgPC9kaXY+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuTmF2YmFyQnJhbmQuZGlzcGxheU5hbWUgPSAnTmF2YmFyLkJyYW5kJztcbk5hdmJhckJyYW5kLnByb3BUeXBlcyA9IHtcbiAgLyoqIGludmVyc2UgdGhlbWUgd2l0aCBwcmltYXJ5LWNvbG9yIGJhY2tncm91bmQgKi9cbiAgaW52ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuTmF2YmFyQnJhbmQuZGVmYXVsdFByb3BzID0ge1xuICBpbnZlcnNlOiBmYWxzZSxcbn07XG5leHBvcnQgZGVmYXVsdCBOYXZiYXJCcmFuZDtcbiJdfQ==
