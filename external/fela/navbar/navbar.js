'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

var _toggler = require('./toggler');

var _toggler2 = _interopRequireDefault(_toggler);

var _container = require('../container');

var _container2 = _interopRequireDefault(_container);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _sub = require('./sub');

var _sub2 = _interopRequireDefault(_sub);

var _brand = require('./brand');

var _brand2 = _interopRequireDefault(_brand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var renderItem = function renderItem(props) {
  return _react2.default.createElement(_item2.default, props);
};
var renderNav = function renderNav(props) {
  return _react2.default.createElement(_nav2.default, _extends({}, props, { sub: true }));
};
var WithContainer = function WithContainer(_ref) {
  var container = _ref.container,
      rest = _objectWithoutProperties(_ref, ['container']);

  return container ? _react2.default.createElement(_container2.default, rest) : _react2.default.createElement('div', rest);
};

var Inner = (0, _reactFela.createComponent)(function (_ref2) {
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

var _ref5 = _react2.default.createElement(_sub2.default, null);

var Navbar = (0, _reactFela.createComponent)(function (_ref3) {
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

  return _react2.default.createElement(
    'nav',
    { className: className },
    _react2.default.createElement(
      WithContainer,
      { container: container },
      _react2.default.createElement(
        Inner,
        { vertically: vertically },
        brand && _react2.default.createElement(
          _brand2.default,
          { inverse: inverse, vertically: vertically },
          brand
        ),
        pages && !!pages.length ? _react2.default.createElement(
          _toggler2.default,
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
        _react.Children.map(children, function (child) {
          return (0, _react.cloneElement)(child, _extends({}, props, {
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
  brand: _propTypes2.default.node,
  /** render nav vertically instead horizontally */
  vertically: _propTypes2.default.bool,
  /** inverse theme with primary-color background */
  inverse: _propTypes2.default.bool,
  /** full size width without margin */
  full: _propTypes2.default.bool,
  /** nav-items will fill empty space on full length */
  fill: _propTypes2.default.bool
};
Navbar.defaultProps = {
  brand: undefined,
  vertically: false,
  inverse: false,
  full: false,
  fill: false,
  toggled: false
};
exports.default = Navbar;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbmF2YmFyL25hdmJhci5lczYiXSwibmFtZXMiOlsicmVuZGVySXRlbSIsInByb3BzIiwicmVuZGVyTmF2IiwiV2l0aENvbnRhaW5lciIsImNvbnRhaW5lciIsInJlc3QiLCJJbm5lciIsInZlcnRpY2FsbHkiLCJjbGVhcmZpeCIsImhhc0ZsZXgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJpZk1pbmkiLCJOYXZiYXIiLCJ0aGVtZSIsImludmVyc2UiLCJmdWxsIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwic3BhY2UyIiwid2lkdGgiLCJtaW5XaWR0aCIsInNwYWNlMCIsImNsYXNzTmFtZSIsImJyYW5kIiwiY2hpbGRyZW4iLCJwYWdlcyIsInRvZ2dsZWQiLCJvblRvZ2dsZSIsInRvZ2dsZUNvbXBvbmVudCIsImxlbmd0aCIsIm1hcCIsImNoaWxkIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIm5vZGUiLCJib29sIiwiZmlsbCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQVMsOENBQVVDLEtBQVYsQ0FBVDtBQUFBLENBQW5CO0FBQ0EsSUFBTUMsWUFBWSxTQUFaQSxTQUFZO0FBQUEsU0FBUywwREFBU0QsS0FBVCxJQUFnQixTQUFoQixJQUFUO0FBQUEsQ0FBbEI7QUFDQSxJQUFNRSxnQkFBZ0IsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsTUFBaUJDLElBQWpCOztBQUFBLFNBQ25CRCxZQUFZLG1EQUFlQyxJQUFmLENB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QixJQU5GO0FBT2pCO0FBQ0ExQixRQUFNLG9CQUFVMEIsSUFSQztBQVNqQjtBQUNBQyxRQUFNLG9CQUFVRDtBQVZDLENBQW5CO0FBWUE3QixPQUFPK0IsWUFBUCxHQUFzQjtBQUNwQmpCLFNBQU9rQixTQURhO0FBRXBCdkMsY0FBWSxLQUZRO0FBR3BCUyxXQUFTLEtBSFc7QUFJcEJDLFFBQU0sS0FKYztBQUtwQjJCLFFBQU0sS0FMYztBQU1wQmIsV0FBUztBQU5XLENBQXRCO2tCQVFlakIsTSIsImZpbGUiOiJleHRlcm5hbC9mZWxhL25hdmJhci9uYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCBUb2dnbGVyIGZyb20gJy4vdG9nZ2xlcic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbnRhaW5lcic7XG5pbXBvcnQgTmF2IGZyb20gJy4vbmF2JztcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgU3ViIGZyb20gJy4vc3ViJztcbmltcG9ydCBCcmFuZCBmcm9tICcuL2JyYW5kJztcblxuY29uc3QgcmVuZGVySXRlbSA9IHByb3BzID0+IDxJdGVtIHsuLi5wcm9wc30gLz47XG5jb25zdCByZW5kZXJOYXYgPSBwcm9wcyA9PiA8TmF2IHsuLi5wcm9wc30gc3ViIC8+O1xuY29uc3QgV2l0aENvbnRhaW5lciA9ICh7IGNvbnRhaW5lciwgLi4ucmVzdCB9KSA9PlxuICAoY29udGFpbmVyID8gPENvbnRhaW5lciB7Li4ucmVzdH0gLz4gOiA8ZGl2IHsuLi5yZXN0fSAvPik7XG5cbmNvbnN0IElubmVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB2ZXJ0aWNhbGx5IH0pID0+ICh7XG4gICAgY2xlYXJmaXg6IHRydWUsXG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogdmVydGljYWxseSA/ICdjb2x1bW4nIDogJ3JvdycsXG4gICAgICBhbGlnbkl0ZW1zOiB2ZXJ0aWNhbGx5ID8gJ2ZsZXgtc3RhcnQnIDogJ3N0cmV0Y2gnLFxuICAgIH0sXG4gICAgaWZNaW5pOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gIFsnY2xhc3NOYW1lJ10sXG4pO1xuXG5jb25zdCBOYXZiYXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBpbnZlcnNlLCB2ZXJ0aWNhbGx5LCBmdWxsIH0pID0+ICh7XG4gICAgYmFja2dyb3VuZENvbG9yOiBpbnZlcnNlICYmIHRoZW1lLmNvbG9yLFxuICAgIGJhY2tncm91bmQ6IGludmVyc2UgJiYgdGhlbWUuY29sb3IsXG4gICAgYm9yZGVyUmFkaXVzOiAhZnVsbCAmJiB0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgbWFyZ2luOiAhZnVsbCAmJiB0aGVtZS5zcGFjZTIsXG4gICAgd2lkdGg6IGZ1bGwgJiYgJzEwMCUnLFxuICAgIG1pbldpZHRoOiB2ZXJ0aWNhbGx5ICYmIDIwMCxcbiAgICBpZk1pbmk6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2UwLFxuICAgIH0sXG4gIH0pLFxuICAoe1xuICAgIGNsYXNzTmFtZSxcbiAgICBicmFuZCxcbiAgICBjaGlsZHJlbixcbiAgICBwYWdlcyxcbiAgICBjb250YWluZXIsXG4gICAgaW52ZXJzZSxcbiAgICB2ZXJ0aWNhbGx5LFxuICAgIHRvZ2dsZWQsXG4gICAgb25Ub2dnbGUsXG4gICAgdG9nZ2xlQ29tcG9uZW50LFxuICAgIC4uLnByb3BzXG4gIH0pID0+IChcbiAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxXaXRoQ29udGFpbmVyIGNvbnRhaW5lcj17Y29udGFpbmVyfT5cbiAgICAgICAgPElubmVyIHZlcnRpY2FsbHk9e3ZlcnRpY2FsbHl9PlxuICAgICAgICAgIHticmFuZCAmJiAoXG4gICAgICAgICAgICA8QnJhbmQgaW52ZXJzZT17aW52ZXJzZX0gdmVydGljYWxseT17dmVydGljYWxseX0+XG4gICAgICAgICAgICAgIHticmFuZH1cbiAgICAgICAgICAgIDwvQnJhbmQ+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtwYWdlcyAmJiAhIXBhZ2VzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIDxUb2dnbGVyXG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgdG9nZ2xlZD17dG9nZ2xlZH1cbiAgICAgICAgICAgICAgb25Ub2dnbGU9e29uVG9nZ2xlfVxuICAgICAgICAgICAgICB0b2dnbGVDb21wb25lbnQ9e3RvZ2dsZUNvbXBvbmVudH1cbiAgICAgICAgICAgICAgaW52ZXJzZT17aW52ZXJzZX1cbiAgICAgICAgICAgICAgdmVydGljYWxseT17dmVydGljYWxseX1cbiAgICAgICAgICAgICAgcGFnZXM9e3BhZ2VzfVxuICAgICAgICAgICAgICByZW5kZXJJdGVtPXtyZW5kZXJJdGVtfVxuICAgICAgICAgICAgICByZW5kZXJOYXY9e3JlbmRlck5hdn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN1YiAvPlxuICAgICAgICAgICAgPC9Ub2dnbGVyPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT5cbiAgICAgICAgICAgIGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgICAgaW52ZXJzZSxcbiAgICAgICAgICAgICAgdmVydGljYWxseSxcbiAgICAgICAgICAgICAgcmVuZGVySXRlbSxcbiAgICAgICAgICAgICAgcmVuZGVyTmF2LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Jbm5lcj5cbiAgICAgIDwvV2l0aENvbnRhaW5lcj5cbiAgICA8L25hdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5OYXZiYXIuZGlzcGxheU5hbWUgPSAnTmF2YmFyJztcbk5hdmJhci5wcm9wVHlwZXMgPSB7XG4gIC8qKiBub2RlIGFzIGJyYW5kICovXG4gIGJyYW5kOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqIHJlbmRlciBuYXYgdmVydGljYWxseSBpbnN0ZWFkIGhvcml6b250YWxseSAqL1xuICB2ZXJ0aWNhbGx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIGludmVyc2UgdGhlbWUgd2l0aCBwcmltYXJ5LWNvbG9yIGJhY2tncm91bmQgKi9cbiAgaW52ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiBmdWxsIHNpemUgd2lkdGggd2l0aG91dCBtYXJnaW4gKi9cbiAgZnVsbDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiBuYXYtaXRlbXMgd2lsbCBmaWxsIGVtcHR5IHNwYWNlIG9uIGZ1bGwgbGVuZ3RoICovXG4gIGZpbGw6IFByb3BUeXBlcy5ib29sLFxufTtcbk5hdmJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGJyYW5kOiB1bmRlZmluZWQsXG4gIHZlcnRpY2FsbHk6IGZhbHNlLFxuICBpbnZlcnNlOiBmYWxzZSxcbiAgZnVsbDogZmFsc2UsXG4gIGZpbGw6IGZhbHNlLFxuICB0b2dnbGVkOiBmYWxzZSxcbn07XG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXX0=
