var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'olymp-router';
import { createComponent } from 'react-fela';

var Link = createComponent(function (_ref) {
  var theme = _ref.theme,
      inverse = _ref.inverse;
  return {
    cursor: 'pointer',
    onHover: {
      color: inverse ? theme.light : theme.dark,
      textDecoration: 'underline solid ' + (inverse ? theme.light : theme.color)
    },
    '&.active': {
      textDecoration: 'underline solid ' + (inverse ? theme.light : theme.color)
    }
  };
}, function (_ref2) {
  var inverse = _ref2.inverse,
      onClick = _ref2.onClick,
      LinkComponent = _ref2.renderItemLink,
      rest = _objectWithoutProperties(_ref2, ['inverse', 'onClick', 'renderItemLink']);

  return onClick ? React.createElement('span', _extends({ onClick: onClick }, rest)) : React.createElement(LinkComponent, rest);
}, function (p) {
  return Object.keys(p);
});

var Placeholder = createComponent(function () {
  return {
    cursor: 'default'
  };
}, 'a', function (_ref3) {
  var inverse = _ref3.inverse,
      p = _objectWithoutProperties(_ref3, ['inverse']);

  return Object.keys(p);
});

var NavbarLink = createComponent(function (_ref4) {
  var theme = _ref4.theme,
      inverse = _ref4.inverse;
  return {
    color: inverse ? theme.light2 : theme.dark2,
    display: 'block',
    fontFamily: theme.fontFamily,
    textDecoration: 'none',
    ellipsis: true,
    position: 'relative'
  };
}, function (_ref5) {
  var to = _ref5.to,
      onClick = _ref5.onClick,
      renderItemLink = _ref5.renderItemLink,
      rest = _objectWithoutProperties(_ref5, ['to', 'onClick', 'renderItemLink']);

  return to || onClick ? React.createElement(Link, _extends({
    to: to,
    renderItemLink: renderItemLink,
    onClick: onClick
  }, rest)) : React.createElement(Placeholder, rest);
}, function (p) {
  return Object.keys(p);
});
NavbarLink.displayName = 'Navbar.Link';
NavbarLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func
};
NavbarLink.defaultProps = {
  to: undefined,
  onClick: undefined,
  renderItemLink: function renderItemLink(props) {
    return React.createElement(NavLink, props);
  }
};
export default NavbarLink;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbmF2YmFyL2xpbmsuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTmF2TGluayIsImNyZWF0ZUNvbXBvbmVudCIsIkxpbmsiLCJ0aGVtZSIsImludmVyc2UiLCJjdXJzb3IiLCJvbkhvdmVyIiwiY29sb3IiLCJsaWdodCIsImRhcmsiLCJ0ZXh0RGVjb3JhdGlvbiIsIm9uQ2xpY2siLCJMaW5rQ29tcG9uZW50IiwicmVuZGVySXRlbUxpbmsiLCJyZXN0IiwiT2JqZWN0Iiwia2V5cyIsInAiLCJQbGFjZWhvbGRlciIsIk5hdmJhckxpbmsiLCJsaWdodDIiLCJkYXJrMiIsImRpc3BsYXkiLCJmb250RmFtaWx5IiwiZWxsaXBzaXMiLCJwb3NpdGlvbiIsInRvIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsY0FBeEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDOztBQUVBLElBQU1DLE9BQU9ELGdCQUNYO0FBQUEsTUFBR0UsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsT0FBVixRQUFVQSxPQUFWO0FBQUEsU0FBeUI7QUFDdkJDLFlBQVEsU0FEZTtBQUV2QkMsYUFBUztBQUNQQyxhQUFPSCxVQUFVRCxNQUFNSyxLQUFoQixHQUF3QkwsTUFBTU0sSUFEOUI7QUFFUEMsNENBQW1DTixVQUFVRCxNQUFNSyxLQUFoQixHQUF3QkwsTUFBTUksS0FBakU7QUFGTyxLQUZjO0FBTXZCLGdCQUFZO0FBQ1ZHLDRDQUFtQ04sVUFBVUQsTUFBTUssS0FBaEIsR0FBd0JMLE1BQU1JLEtBQWpFO0FBRFU7QUFOVyxHQUF6QjtBQUFBLENBRFcsRUFXWDtBQUFBLE1BQUdILE9BQUgsU0FBR0EsT0FBSDtBQUFBLE1BQVlPLE9BQVosU0FBWUEsT0FBWjtBQUFBLE1BQXFDQyxhQUFyQyxTQUFxQkMsY0FBckI7QUFBQSxNQUF1REMsSUFBdkQ7O0FBQUEsU0FDRUgsVUFDRSx1Q0FBTSxTQUFTQSxPQUFmLElBQTRCRyxJQUE1QixFQURGLEdBR0Usb0JBQUMsYUFBRCxFQUFtQkEsSUFBbkIsQ0FKSjtBQUFBLENBWFcsRUFpQlg7QUFBQSxTQUFLQyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBakJXLENBQWI7O0FBb0JBLElBQU1DLGNBQWNqQixnQkFDbEI7QUFBQSxTQUFPO0FBQ0xJLFlBQVE7QUFESCxHQUFQO0FBQUEsQ0FEa0IsRUFJbEIsR0FKa0IsRUFLbEI7QUFBQSxNQUFHRCxPQUFILFNBQUdBLE9BQUg7QUFBQSxNQUFlYSxDQUFmOztBQUFBLFNBQXVCRixPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBdkI7QUFBQSxDQUxrQixDQUFwQjs7QUFRQSxJQUFNRSxhQUFhbEIsZ0JBQ2pCO0FBQUEsTUFBR0UsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVUMsT0FBVixTQUFVQSxPQUFWO0FBQUEsU0FBeUI7QUFDdkJHLFdBQU9ILFVBQVVELE1BQU1pQixNQUFoQixHQUF5QmpCLE1BQU1rQixLQURmO0FBRXZCQyxhQUFTLE9BRmM7QUFHdkJDLGdCQUFZcEIsTUFBTW9CLFVBSEs7QUFJdkJiLG9CQUFnQixNQUpPO0FBS3ZCYyxjQUFVLElBTGE7QUFNdkJDLGNBQVU7QUFOYSxHQUF6QjtBQUFBLENBRGlCLEVBU2pCO0FBQUEsTUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsTUFBT2YsT0FBUCxTQUFPQSxPQUFQO0FBQUEsTUFBZ0JFLGNBQWhCLFNBQWdCQSxjQUFoQjtBQUFBLE1BQW1DQyxJQUFuQzs7QUFBQSxTQUNFWSxNQUFNZixPQUFOLEdBQ0Usb0JBQUMsSUFBRDtBQUNFLFFBQUllLEVBRE47QUFFRSxvQkFBZ0JiLGNBRmxCO0FBR0UsYUFBU0Y7QUFIWCxLQUlNRyxJQUpOLEVBREYsR0FRRSxvQkFBQyxXQUFELEVBQWlCQSxJQUFqQixDQVRKO0FBQUEsQ0FUaUIsRUFvQmpCO0FBQUEsU0FBS0MsT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxDQXBCaUIsQ0FBbkI7QUFzQkFFLFdBQVdRLFdBQVgsR0FBeUIsYUFBekI7QUFDQVIsV0FBV1MsU0FBWCxHQUF1QjtBQUNyQkYsTUFBSTNCLFVBQVU4QixNQURPO0FBRXJCbEIsV0FBU1osVUFBVStCO0FBRkUsQ0FBdkI7QUFJQVgsV0FBV1ksWUFBWCxHQUEwQjtBQUN4QkwsTUFBSU0sU0FEb0I7QUFFeEJyQixXQUFTcUIsU0FGZTtBQUd4Qm5CLGtCQUFnQjtBQUFBLFdBQVMsb0JBQUMsT0FBRCxFQUFhb0IsS0FBYixDQUFUO0FBQUE7QUFIUSxDQUExQjtBQUtBLGVBQWVkLFVBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9uYXZiYXIvbGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuY29uc3QgTGluayA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGludmVyc2UgfSkgPT4gKHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBvbkhvdmVyOiB7XG4gICAgICBjb2xvcjogaW52ZXJzZSA/IHRoZW1lLmxpZ2h0IDogdGhlbWUuZGFyayxcbiAgICAgIHRleHREZWNvcmF0aW9uOiBgdW5kZXJsaW5lIHNvbGlkICR7aW52ZXJzZSA/IHRoZW1lLmxpZ2h0IDogdGhlbWUuY29sb3J9YCxcbiAgICB9LFxuICAgICcmLmFjdGl2ZSc6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uOiBgdW5kZXJsaW5lIHNvbGlkICR7aW52ZXJzZSA/IHRoZW1lLmxpZ2h0IDogdGhlbWUuY29sb3J9YCxcbiAgICB9LFxuICB9KSxcbiAgKHsgaW52ZXJzZSwgb25DbGljaywgcmVuZGVySXRlbUxpbms6IExpbmtDb21wb25lbnQsIC4uLnJlc3QgfSkgPT5cbiAgICBvbkNsaWNrID8gKFxuICAgICAgPHNwYW4gb25DbGljaz17b25DbGlja30gey4uLnJlc3R9IC8+XG4gICAgKSA6IChcbiAgICAgIDxMaW5rQ29tcG9uZW50IHsuLi5yZXN0fSAvPlxuICAgICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBQbGFjZWhvbGRlciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKCkgPT4gKHtcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgfSksXG4gICdhJyxcbiAgKHsgaW52ZXJzZSwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IE5hdmJhckxpbmsgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBpbnZlcnNlIH0pID0+ICh7XG4gICAgY29sb3I6IGludmVyc2UgPyB0aGVtZS5saWdodDIgOiB0aGVtZS5kYXJrMixcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLmZvbnRGYW1pbHksXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBlbGxpcHNpczogdHJ1ZSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSksXG4gICh7IHRvLCBvbkNsaWNrLCByZW5kZXJJdGVtTGluaywgLi4ucmVzdCB9KSA9PlxuICAgIHRvIHx8IG9uQ2xpY2sgPyAoXG4gICAgICA8TGlua1xuICAgICAgICB0bz17dG99XG4gICAgICAgIHJlbmRlckl0ZW1MaW5rPXtyZW5kZXJJdGVtTGlua31cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICkgOiAoXG4gICAgICA8UGxhY2Vob2xkZXIgey4uLnJlc3R9IC8+XG4gICAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5OYXZiYXJMaW5rLmRpc3BsYXlOYW1lID0gJ05hdmJhci5MaW5rJztcbk5hdmJhckxpbmsucHJvcFR5cGVzID0ge1xuICB0bzogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuTmF2YmFyTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIHRvOiB1bmRlZmluZWQsXG4gIG9uQ2xpY2s6IHVuZGVmaW5lZCxcbiAgcmVuZGVySXRlbUxpbms6IHByb3BzID0+IDxOYXZMaW5rIHsuLi5wcm9wc30gLz4sXG59O1xuZXhwb3J0IGRlZmF1bHQgTmF2YmFyTGluaztcbiJdfQ==
