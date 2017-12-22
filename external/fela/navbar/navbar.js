var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import Toggler from './toggler';
import Container from '../container';
import Nav from './nav';
import Item from './item';
import Sub from './sub';
import Brand from './brand';

var renderItem = function renderItem(props) {
  return React.createElement(Item, props);
};
var renderNav = function renderNav(props) {
  return React.createElement(Nav, _extends({}, props, { sub: true }));
};
var WithContainer = function WithContainer(_ref) {
  var container = _ref.container,
      rest = _objectWithoutProperties(_ref, ['container']);

  return container ? React.createElement(Container, rest) : React.createElement('div', rest);
};

var Inner = createComponent(function (_ref2) {
  var vertically = _ref2.vertically;
  return {
    clearfix: true,
    hasFlex: {
      display: 'flex',
      flexDirection: vertically ? 'column' : 'row',
      alignItems: vertically ? 'flex-start' : 'stretch'
    },
    ifMini: {
      flexDirection: 'column'
    }
  };
}, 'div', ['className']);

var _ref5 = React.createElement(Sub, null);

var Navbar = createComponent(function (_ref3) {
  var theme = _ref3.theme,
      inverse = _ref3.inverse,
      vertically = _ref3.vertically,
      full = _ref3.full;
  return {
    backgroundColor: inverse && theme.color,
    background: inverse && theme.color,
    borderRadius: !full && theme.borderRadius,
    margin: !full && theme.space2,
    width: full && '100%',
    minWidth: vertically && 200,
    ifMini: {
      margin: theme.space0
    }
  };
}, function (_ref4) {
  var className = _ref4.className,
      brand = _ref4.brand,
      children = _ref4.children,
      pages = _ref4.pages,
      container = _ref4.container,
      inverse = _ref4.inverse,
      vertically = _ref4.vertically,
      toggled = _ref4.toggled,
      onToggle = _ref4.onToggle,
      toggleComponent = _ref4.toggleComponent,
      props = _objectWithoutProperties(_ref4, ['className', 'brand', 'children', 'pages', 'container', 'inverse', 'vertically', 'toggled', 'onToggle', 'toggleComponent']);

  return React.createElement(
    'nav',
    { className: className },
    React.createElement(
      WithContainer,
      { container: container },
      React.createElement(
        Inner,
        { vertically: vertically },
        brand && React.createElement(
          Brand,
          { inverse: inverse, vertically: vertically },
          brand
        ),
        pages && !!pages.length ? React.createElement(
          Toggler,
          _extends({}, props, {
            toggled: toggled,
            onToggle: onToggle,
            toggleComponent: toggleComponent,
            inverse: inverse,
            vertically: vertically,
            pages: pages,
            renderItem: renderItem,
            renderNav: renderNav
          }),
          _ref5
        ) : null,
        Children.map(children, function (child) {
          return cloneElement(child, _extends({}, props, {
            inverse: inverse,
            vertically: vertically,
            renderItem: renderItem,
            renderNav: renderNav
          }));
        })
      )
    )
  );
}, function (p) {
  return Object.keys(p);
});
Navbar.displayName = 'Navbar';
Navbar.propTypes = {
  /** node as brand */
  brand: PropTypes.node,
  /** render nav vertically instead horizontally */
  vertically: PropTypes.bool,
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool,
  /** full size width without margin */
  full: PropTypes.bool,
  /** nav-items will fill empty space on full length */
  fill: PropTypes.bool
};
Navbar.defaultProps = {
  brand: undefined,
  vertically: false,
  inverse: false,
  full: false,
  fill: false,
  toggled: false
};
export default Navbar;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbmF2YmFyL25hdmJhci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDaGlsZHJlbiIsImNsb25lRWxlbWVudCIsIlByb3BUeXBlcyIsImNyZWF0ZUNvbXBvbmVudCIsIlRvZ2dsZXIiLCJDb250YWluZXIiLCJOYXYiLCJJdGVtIiwiU3ViIiwiQnJhbmQiLCJyZW5kZXJJdGVtIiwicHJvcHMiLCJyZW5kZXJOYXYiLCJXaXRoQ29udGFpbmVyIiwiY29udGFpbmVyIiwicmVzdCIsIklubmVyIiwidmVydGljYWxseSIsImNsZWFyZml4IiwiaGFzRmxleCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImlmTWluaSIsIk5hdmJhciIsInRoZW1lIiwiaW52ZXJzZSIsImZ1bGwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJzcGFjZTIiLCJ3aWR0aCIsIm1pbldpZHRoIiwic3BhY2UwIiwiY2xhc3NOYW1lIiwiYnJhbmQiLCJjaGlsZHJlbiIsInBhZ2VzIiwidG9nZ2xlZCIsIm9uVG9nZ2xlIiwidG9nZ2xlQ29tcG9uZW50IiwibGVuZ3RoIiwibWFwIiwiY2hpbGQiLCJPYmplY3QiLCJrZXlzIiwicCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwibm9kZSIsImJvb2wiLCJmaWxsIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsRUFBMEJDLFlBQTFCLFFBQThDLE9BQTlDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLFdBQXBCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixjQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsT0FBaEI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixPQUFoQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7O0FBRUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhO0FBQUEsU0FBUyxvQkFBQyxJQUFELEVBQVVDLEtBQVYsQ0FBVDtBQUFBLENBQW5CO0FBQ0EsSUFBTUMsWUFBWSxTQUFaQSxTQUFZO0FBQUEsU0FBUyxvQkFBQyxHQUFELGVBQVNELEtBQVQsSUFBZ0IsU0FBaEIsSUFBVDtBQUFBLENBQWxCO0FBQ0EsSUFBTUUsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLE1BQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLE1BQWlCQyxJQUFqQjs7QUFBQSxTQUNuQkQsWUFBWSxvQkFBQyxTQUFELEVBQWVDLElBQWYsQ0FBWixHQUFzQywyQkFBU0EsSUFBVCxDQURuQjtBQUFBLENBQXRCOztBQUdBLElBQU1DLFFBQVFiLGdCQUNaO0FBQUEsTUFBR2MsVUFBSCxTQUFHQSxVQUFIO0FBQUEsU0FBcUI7QUFDbkJDLGNBQVUsSUFEUztBQUVuQkMsYUFBUztBQUNQQyxlQUFTLE1BREY7QUFFUEMscUJBQWVKLGFBQWEsUUFBYixHQUF3QixLQUZoQztBQUdQSyxrQkFBWUwsYUFBYSxZQUFiLEdBQTRCO0FBSGpDLEtBRlU7QUFPbkJNLFlBQVE7QUFDTkYscUJBQWU7QUFEVDtBQVBXLEdBQXJCO0FBQUEsQ0FEWSxFQVlaLEtBWlksRUFhWixDQUFDLFdBQUQsQ0FiWSxDQUFkOztZQThEYyxvQkFBQyxHQUFELE87O0FBOUNkLElBQU1HLFNBQVNyQixnQkFDYjtBQUFBLE1BQUdzQixLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFVQyxPQUFWLFNBQVVBLE9BQVY7QUFBQSxNQUFtQlQsVUFBbkIsU0FBbUJBLFVBQW5CO0FBQUEsTUFBK0JVLElBQS9CLFNBQStCQSxJQUEvQjtBQUFBLFNBQTJDO0FBQ3pDQyxxQkFBaUJGLFdBQVdELE1BQU1JLEtBRE87QUFFekNDLGdCQUFZSixXQUFXRCxNQUFNSSxLQUZZO0FBR3pDRSxrQkFBYyxDQUFDSixJQUFELElBQVNGLE1BQU1NLFlBSFk7QUFJekNDLFlBQVEsQ0FBQ0wsSUFBRCxJQUFTRixNQUFNUSxNQUprQjtBQUt6Q0MsV0FBT1AsUUFBUSxNQUwwQjtBQU16Q1EsY0FBVWxCLGNBQWMsR0FOaUI7QUFPekNNLFlBQVE7QUFDTlMsY0FBUVAsTUFBTVc7QUFEUjtBQVBpQyxHQUEzQztBQUFBLENBRGEsRUFZYjtBQUFBLE1BQ0VDLFNBREYsU0FDRUEsU0FERjtBQUFBLE1BRUVDLEtBRkYsU0FFRUEsS0FGRjtBQUFBLE1BR0VDLFFBSEYsU0FHRUEsUUFIRjtBQUFBLE1BSUVDLEtBSkYsU0FJRUEsS0FKRjtBQUFBLE1BS0UxQixTQUxGLFNBS0VBLFNBTEY7QUFBQSxNQU1FWSxPQU5GLFNBTUVBLE9BTkY7QUFBQSxNQU9FVCxVQVBGLFNBT0VBLFVBUEY7QUFBQSxNQVFFd0IsT0FSRixTQVFFQSxPQVJGO0FBQUEsTUFTRUMsUUFURixTQVNFQSxRQVRGO0FBQUEsTUFVRUMsZUFWRixTQVVFQSxlQVZGO0FBQUEsTUFXS2hDLEtBWEw7O0FBQUEsU0FhRTtBQUFBO0FBQUEsTUFBSyxXQUFXMEIsU0FBaEI7QUFDRTtBQUFDLG1CQUFEO0FBQUEsUUFBZSxXQUFXdkIsU0FBMUI7QUFDRTtBQUFDLGFBQUQ7QUFBQSxVQUFPLFlBQVlHLFVBQW5CO0FBQ0dxQixpQkFDQztBQUFDLGVBQUQ7QUFBQSxZQUFPLFNBQVNaLE9BQWhCLEVBQXlCLFlBQVlULFVBQXJDO0FBQ0dxQjtBQURILFNBRko7QUFPR0UsaUJBQVMsQ0FBQyxDQUFDQSxNQUFNSSxNQUFqQixHQUNDO0FBQUMsaUJBQUQ7QUFBQSx1QkFDTWpDLEtBRE47QUFFRSxxQkFBUzhCLE9BRlg7QUFHRSxzQkFBVUMsUUFIWjtBQUlFLDZCQUFpQkMsZUFKbkI7QUFLRSxxQkFBU2pCLE9BTFg7QUFNRSx3QkFBWVQsVUFOZDtBQU9FLG1CQUFPdUIsS0FQVDtBQVFFLHdCQUFZOUIsVUFSZDtBQVNFLHVCQUFXRTtBQVRiO0FBQUE7QUFBQSxTQURELEdBY0csSUFyQk47QUF1QkdaLGlCQUFTNkMsR0FBVCxDQUFhTixRQUFiLEVBQXVCO0FBQUEsaUJBQ3RCdEMsYUFBYTZDLEtBQWIsZUFDS25DLEtBREw7QUFFRWUsNEJBRkY7QUFHRVQsa0NBSEY7QUFJRVAsa0NBSkY7QUFLRUU7QUFMRixhQURzQjtBQUFBLFNBQXZCO0FBdkJIO0FBREY7QUFERixHQWJGO0FBQUEsQ0FaYSxFQStEYjtBQUFBLFNBQUttQyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBL0RhLENBQWY7QUFpRUF6QixPQUFPMEIsV0FBUCxHQUFxQixRQUFyQjtBQUNBMUIsT0FBTzJCLFNBQVAsR0FBbUI7QUFDakI7QUFDQWIsU0FBT3BDLFVBQVVrRCxJQUZBO0FBR2pCO0FBQ0FuQyxjQUFZZixVQUFVbUQsSUFKTDtBQUtqQjtBQUNBM0IsV0FBU3hCLFVBQVVtRCxJQU5GO0FBT2pCO0FBQ0ExQixRQUFNekIsVUFBVW1ELElBUkM7QUFTakI7QUFDQUMsUUFBTXBELFVBQVVtRDtBQVZDLENBQW5CO0FBWUE3QixPQUFPK0IsWUFBUCxHQUFzQjtBQUNwQmpCLFNBQU9rQixTQURhO0FBRXBCdkMsY0FBWSxLQUZRO0FBR3BCUyxXQUFTLEtBSFc7QUFJcEJDLFFBQU0sS0FKYztBQUtwQjJCLFFBQU0sS0FMYztBQU1wQmIsV0FBUztBQU5XLENBQXRCO0FBUUEsZUFBZWpCLE1BQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9uYXZiYXIvbmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgVG9nZ2xlciBmcm9tICcuL3RvZ2dsZXInO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb250YWluZXInO1xuaW1wb3J0IE5hdiBmcm9tICcuL25hdic7XG5pbXBvcnQgSXRlbSBmcm9tICcuL2l0ZW0nO1xuaW1wb3J0IFN1YiBmcm9tICcuL3N1Yic7XG5pbXBvcnQgQnJhbmQgZnJvbSAnLi9icmFuZCc7XG5cbmNvbnN0IHJlbmRlckl0ZW0gPSBwcm9wcyA9PiA8SXRlbSB7Li4ucHJvcHN9IC8+O1xuY29uc3QgcmVuZGVyTmF2ID0gcHJvcHMgPT4gPE5hdiB7Li4ucHJvcHN9IHN1YiAvPjtcbmNvbnN0IFdpdGhDb250YWluZXIgPSAoeyBjb250YWluZXIsIC4uLnJlc3QgfSkgPT5cbiAgKGNvbnRhaW5lciA/IDxDb250YWluZXIgey4uLnJlc3R9IC8+IDogPGRpdiB7Li4ucmVzdH0gLz4pO1xuXG5jb25zdCBJbm5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdmVydGljYWxseSB9KSA9PiAoe1xuICAgIGNsZWFyZml4OiB0cnVlLFxuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246IHZlcnRpY2FsbHkgPyAnY29sdW1uJyA6ICdyb3cnLFxuICAgICAgYWxpZ25JdGVtczogdmVydGljYWxseSA/ICdmbGV4LXN0YXJ0JyA6ICdzdHJldGNoJyxcbiAgICB9LFxuICAgIGlmTWluaToge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICBbJ2NsYXNzTmFtZSddLFxuKTtcblxuY29uc3QgTmF2YmFyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgaW52ZXJzZSwgdmVydGljYWxseSwgZnVsbCB9KSA9PiAoe1xuICAgIGJhY2tncm91bmRDb2xvcjogaW52ZXJzZSAmJiB0aGVtZS5jb2xvcixcbiAgICBiYWNrZ3JvdW5kOiBpbnZlcnNlICYmIHRoZW1lLmNvbG9yLFxuICAgIGJvcmRlclJhZGl1czogIWZ1bGwgJiYgdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgIG1hcmdpbjogIWZ1bGwgJiYgdGhlbWUuc3BhY2UyLFxuICAgIHdpZHRoOiBmdWxsICYmICcxMDAlJyxcbiAgICBtaW5XaWR0aDogdmVydGljYWxseSAmJiAyMDAsXG4gICAgaWZNaW5pOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNlMCxcbiAgICB9LFxuICB9KSxcbiAgKHtcbiAgICBjbGFzc05hbWUsXG4gICAgYnJhbmQsXG4gICAgY2hpbGRyZW4sXG4gICAgcGFnZXMsXG4gICAgY29udGFpbmVyLFxuICAgIGludmVyc2UsXG4gICAgdmVydGljYWxseSxcbiAgICB0b2dnbGVkLFxuICAgIG9uVG9nZ2xlLFxuICAgIHRvZ2dsZUNvbXBvbmVudCxcbiAgICAuLi5wcm9wc1xuICB9KSA9PiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8V2l0aENvbnRhaW5lciBjb250YWluZXI9e2NvbnRhaW5lcn0+XG4gICAgICAgIDxJbm5lciB2ZXJ0aWNhbGx5PXt2ZXJ0aWNhbGx5fT5cbiAgICAgICAgICB7YnJhbmQgJiYgKFxuICAgICAgICAgICAgPEJyYW5kIGludmVyc2U9e2ludmVyc2V9IHZlcnRpY2FsbHk9e3ZlcnRpY2FsbHl9PlxuICAgICAgICAgICAgICB7YnJhbmR9XG4gICAgICAgICAgICA8L0JyYW5kPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7cGFnZXMgJiYgISFwYWdlcy5sZW5ndGggPyAoXG4gICAgICAgICAgICA8VG9nZ2xlclxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgIHRvZ2dsZWQ9e3RvZ2dsZWR9XG4gICAgICAgICAgICAgIG9uVG9nZ2xlPXtvblRvZ2dsZX1cbiAgICAgICAgICAgICAgdG9nZ2xlQ29tcG9uZW50PXt0b2dnbGVDb21wb25lbnR9XG4gICAgICAgICAgICAgIGludmVyc2U9e2ludmVyc2V9XG4gICAgICAgICAgICAgIHZlcnRpY2FsbHk9e3ZlcnRpY2FsbHl9XG4gICAgICAgICAgICAgIHBhZ2VzPXtwYWdlc31cbiAgICAgICAgICAgICAgcmVuZGVySXRlbT17cmVuZGVySXRlbX1cbiAgICAgICAgICAgICAgcmVuZGVyTmF2PXtyZW5kZXJOYXZ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdWIgLz5cbiAgICAgICAgICAgIDwvVG9nZ2xlcj5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+XG4gICAgICAgICAgICBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICAgIGludmVyc2UsXG4gICAgICAgICAgICAgIHZlcnRpY2FsbHksXG4gICAgICAgICAgICAgIHJlbmRlckl0ZW0sXG4gICAgICAgICAgICAgIHJlbmRlck5hdixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICl9XG4gICAgICAgIDwvSW5uZXI+XG4gICAgICA8L1dpdGhDb250YWluZXI+XG4gICAgPC9uYXY+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuTmF2YmFyLmRpc3BsYXlOYW1lID0gJ05hdmJhcic7XG5OYXZiYXIucHJvcFR5cGVzID0ge1xuICAvKiogbm9kZSBhcyBicmFuZCAqL1xuICBicmFuZDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKiByZW5kZXIgbmF2IHZlcnRpY2FsbHkgaW5zdGVhZCBob3Jpem9udGFsbHkgKi9cbiAgdmVydGljYWxseTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiBpbnZlcnNlIHRoZW1lIHdpdGggcHJpbWFyeS1jb2xvciBiYWNrZ3JvdW5kICovXG4gIGludmVyc2U6IFByb3BUeXBlcy5ib29sLFxuICAvKiogZnVsbCBzaXplIHdpZHRoIHdpdGhvdXQgbWFyZ2luICovXG4gIGZ1bGw6IFByb3BUeXBlcy5ib29sLFxuICAvKiogbmF2LWl0ZW1zIHdpbGwgZmlsbCBlbXB0eSBzcGFjZSBvbiBmdWxsIGxlbmd0aCAqL1xuICBmaWxsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5OYXZiYXIuZGVmYXVsdFByb3BzID0ge1xuICBicmFuZDogdW5kZWZpbmVkLFxuICB2ZXJ0aWNhbGx5OiBmYWxzZSxcbiAgaW52ZXJzZTogZmFsc2UsXG4gIGZ1bGw6IGZhbHNlLFxuICBmaWxsOiBmYWxzZSxcbiAgdG9nZ2xlZDogZmFsc2UsXG59O1xuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl19
