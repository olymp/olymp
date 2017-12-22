var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'olymp-fela';
import { ThemeProvider } from 'react-fela';
import useTheme from './theme';
import Header from './header';
import Divider from './divider';
import Image from './image';
import List from './list';
import Item from './item';
import Title from './title';
import Space from './space';
import Extra from './extra';

var Inner = createComponent(function () {
  return {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    overflowY: 'auto',
    overflowX: 'hidden'
    // justifyContent: 'space-between',
  };
}, 'div');

var Menu = createComponent(function (_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      _ref$paddingX = _ref.paddingX,
      paddingX = _ref$paddingX === undefined ? 9 : _ref$paddingX,
      _ref$paddingY = _ref.paddingY,
      paddingY = _ref$paddingY === undefined ? theme.space2 : _ref$paddingY;
  return {
    display: 'flex',
    flexGrow: theme.collapsed ? 0 : 1,
    flexDirection: 'column',
    width: theme.collapsed ? 72 : theme.width,
    height: '100%',
    color: theme.inverted ? theme.light1 : theme.dark1,
    backgroundColor: color,
    paddingY: paddingY,
    paddingX: paddingX,
    overflowY: 'auto',
    overflowX: 'hidden',
    transition: 'width 200ms ease-out'
  };
}, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      color = _ref2.color,
      inverted = _ref2.inverted,
      header = _ref2.header,
      headerColor = _ref2.headerColor,
      headerInverted = _ref2.headerInverted,
      p = _objectWithoutProperties(_ref2, ['className', 'children', 'color', 'inverted', 'header', 'headerColor', 'headerInverted']);

  return React.createElement(
    'div',
    _extends({ className: className }, p),
    header && React.createElement(
      Header,
      {
        color: headerColor || color,
        inverted: headerInverted || inverted
      },
      header
    ),
    React.createElement(
      Inner,
      null,
      children
    )
  );
}, function (_ref3) {
  var paddingY = _ref3.paddingY,
      paddingX = _ref3.paddingX,
      p = _objectWithoutProperties(_ref3, ['paddingY', 'paddingX']);

  return Object.keys(p);
});

var Component = useTheme(function (_ref4) {
  var inverted = _ref4.inverted,
      color = _ref4.color,
      collapsed = _ref4.collapsed,
      theme = _ref4.theme,
      width = _ref4.width,
      props = _objectWithoutProperties(_ref4, ['inverted', 'color', 'collapsed', 'theme', 'width']);

  return React.createElement(
    ThemeProvider,
    { theme: theme },
    React.createElement(Menu, _extends({ color: color, inverted: inverted }, props))
  );
});

Component.Header = Header;
Component.Divider = Divider;
Component.Item = Item;
Component.List = List;
Component.Title = Title;
Component.Image = Image;
Component.Space = Space;
Component.Extra = Extra;
export default Component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS9tZW51LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsIlRoZW1lUHJvdmlkZXIiLCJ1c2VUaGVtZSIsIkhlYWRlciIsIkRpdmlkZXIiLCJJbWFnZSIsIkxpc3QiLCJJdGVtIiwiVGl0bGUiLCJTcGFjZSIsIkV4dHJhIiwiSW5uZXIiLCJkaXNwbGF5IiwiZmxleEdyb3ciLCJmbGV4RGlyZWN0aW9uIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwiTWVudSIsInRoZW1lIiwiY29sb3IiLCJwYWRkaW5nWCIsInBhZGRpbmdZIiwic3BhY2UyIiwiY29sbGFwc2VkIiwid2lkdGgiLCJoZWlnaHQiLCJpbnZlcnRlZCIsImxpZ2h0MSIsImRhcmsxIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiaGVhZGVyIiwiaGVhZGVyQ29sb3IiLCJoZWFkZXJJbnZlcnRlZCIsInAiLCJPYmplY3QiLCJrZXlzIiwiQ29tcG9uZW50IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLFNBQVNDLGFBQVQsUUFBOEIsWUFBOUI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLFNBQXJCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixVQUFuQjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsV0FBcEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLFNBQWxCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLFNBQWxCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixTQUFsQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7O0FBRUEsSUFBTUMsUUFBUVgsZ0JBQ1o7QUFBQSxTQUFPO0FBQ0xZLGFBQVMsTUFESjtB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bWVudS9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4vdGhlbWUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuL2RpdmlkZXInO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0JztcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi90aXRsZSc7XG5pbXBvcnQgU3BhY2UgZnJvbSAnLi9zcGFjZSc7XG5pbXBvcnQgRXh0cmEgZnJvbSAnLi9leHRyYSc7XG5cbmNvbnN0IElubmVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoKSA9PiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4R3JvdzogMSxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgIC8vIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0pLFxuICAnZGl2Jyxcbik7XG5cbmNvbnN0IE1lbnUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBjb2xvciwgcGFkZGluZ1ggPSA5LCBwYWRkaW5nWSA9IHRoZW1lLnNwYWNlMiB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4R3JvdzogdGhlbWUuY29sbGFwc2VkID8gMCA6IDEsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6IHRoZW1lLmNvbGxhcHNlZCA/IDcyIDogdGhlbWUud2lkdGgsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgY29sb3I6IHRoZW1lLmludmVydGVkID8gdGhlbWUubGlnaHQxIDogdGhlbWUuZGFyazEsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICBwYWRkaW5nWSxcbiAgICBwYWRkaW5nWCxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgIHRyYW5zaXRpb246ICd3aWR0aCAyMDBtcyBlYXNlLW91dCcsXG4gIH0pLFxuICAoe1xuICAgIGNsYXNzTmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBjb2xvcixcbiAgICBpbnZlcnRlZCxcbiAgICBoZWFkZXIsXG4gICAgaGVhZGVyQ29sb3IsXG4gICAgaGVhZGVySW52ZXJ0ZWQsXG4gICAgLi4ucFxuICB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnB9PlxuICAgICAge2hlYWRlciAmJiAoXG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBjb2xvcj17aGVhZGVyQ29sb3IgfHwgY29sb3J9XG4gICAgICAgICAgaW52ZXJ0ZWQ9e2hlYWRlckludmVydGVkIHx8IGludmVydGVkfVxuICAgICAgICA+XG4gICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICApfVxuICAgICAgPElubmVyPntjaGlsZHJlbn08L0lubmVyPlxuICAgIDwvZGl2PlxuICApLFxuICAoeyBwYWRkaW5nWSwgcGFkZGluZ1gsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBDb21wb25lbnQgPSB1c2VUaGVtZShcbiAgKHsgaW52ZXJ0ZWQsIGNvbG9yLCBjb2xsYXBzZWQsIHRoZW1lLCB3aWR0aCwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8TWVudSBjb2xvcj17Y29sb3J9IGludmVydGVkPXtpbnZlcnRlZH0gey4uLnByb3BzfSAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKSxcbik7XG5cbkNvbXBvbmVudC5IZWFkZXIgPSBIZWFkZXI7XG5Db21wb25lbnQuRGl2aWRlciA9IERpdmlkZXI7XG5Db21wb25lbnQuSXRlbSA9IEl0ZW07XG5Db21wb25lbnQuTGlzdCA9IExpc3Q7XG5Db21wb25lbnQuVGl0bGUgPSBUaXRsZTtcbkNvbXBvbmVudC5JbWFnZSA9IEltYWdlO1xuQ29tcG9uZW50LlNwYWNlID0gU3BhY2U7XG5Db21wb25lbnQuRXh0cmEgPSBFeHRyYTtcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiJdfQ==
