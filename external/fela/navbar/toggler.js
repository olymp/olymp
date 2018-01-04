'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createComponent = require('../utils/create-component');

var _createComponent2 = _interopRequireDefault(_createComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Div = function Div(_ref) {
  var toggled = _ref.toggled,
      onToggle = _ref.onToggle,
      props = _objectWithoutProperties(_ref, ['toggled', 'onToggle']);

  return _react2.default.createElement('div', _extends({}, props, { onClick: onToggle }));
};

var _ref4 = _react2.default.createElement('span', null);

var _ref5 = _react2.default.createElement('span', null);

var _ref6 = _react2.default.createElement('span', null);

var _ref7 = _react2.default.createElement('span', null);

var Button = (0, _createComponent2.default)(function (_ref2) {
  var theme = _ref2.theme,
      toggled = _ref2.toggled,
      inverse = _ref2.inverse,
      _ref2$size = _ref2.size,
      size = _ref2$size === undefined ? 20 : _ref2$size;
  return {
    position: 'absolute',
    top: theme.space4,
    right: theme.space4,
    // float: 'right',
    // padding: theme.space2,
    // margin: theme.space3,
    width: Math.round(size * 1.3),
    height: size,
    cursor: 'pointer',
    ifSmallUp: {
      display: 'none'
    },
    '> span': {
      display: 'block',
      position: 'absolute',
      height: Math.round(size / 6),
      borderRadius: Math.round(size / 6),
      width: '100%',
      background: inverse ? theme.light : theme.color,
      left: 0,
      transform: 'rotate(0deg)',
      transition: '.25s ease-in-out',
      ':nth-child(1)': {
        top: toggled ? Math.round(size / 3) : 0,
        width: toggled && '0%',
        left: toggled && '50%'
      },
      ':nth-child(2)': {
        top: Math.round(size / 3),
        transform: toggled && 'rotate(45deg)'
      },
      ':nth-child(3)': {
        top: Math.round(size / 3),
        transform: toggled && 'rotate(-45deg)'
      },
      ':nth-child(4)': {
        top: toggled ? Math.round(size / 3) : Math.round(size / 3) * 2,
        width: toggled && '0%',
        left: toggled && '50%'
      }
    }
  };
}, function (_ref3) {
  var className = _ref3.className,
      onToggle = _ref3.onToggle,
      toggled = _ref3.toggled,
      Comp = _ref3.toggleComponent;
  return _react2.default.createElement(
    Comp,
    { className: className, onToggle: onToggle, toggled: toggled },
    _ref4,
    _ref5,
    _ref6,
    _ref7
  );
}, function (p) {
  return Object.keys(p);
});

var Container = (0, _createComponent2.default)(function (_ref8) {
  var toggled = _ref8.toggled;
  return {
    width: '100%',
    ifMini: {
      '> div:nth-child(2)': {
        clear: 'both',
        transform: toggled ? 'scaleY(1)' : 'scaleY(0)',
        maxHeight: toggled ? 500 : 0,
        overflow: 'auto',
        transformOrigin: 'top',
        transition: 'all 0.25s ease-in-out'
      }
    }
  };
}, 'div', []);

var Toggler = function Toggler(_ref9) {
  var className = _ref9.className,
      children = _ref9.children,
      toggled = _ref9.toggled,
      toggleComponent = _ref9.toggleComponent,
      onToggle = _ref9.onToggle,
      props = _objectWithoutProperties(_ref9, ['className', 'children', 'toggled', 'toggleComponent', 'onToggle']);

  return _react2.default.createElement(
    Container,
    { className: (0, _classnames2.default)(className, 'o-nav-toggle'), toggled: toggled },
    _react2.default.createElement(Button, {
      toggled: toggled,
      toggleComponent: toggleComponent,
      onToggle: onToggle
    }),
    _react.Children.map(children, function (child) {
      return (0, _react.cloneElement)(child, props);
    })
  );
};
Toggler.propTypes = {
  // toggleComponent: PropTypes.node,
  onToggle: _propTypes2.default.func,
  toggled: _propTypes2.default.bool
};
Toggler.defaultProps = {
  toggleComponent: Div,
  onToggle: undefined,
  toggled: false
};
Toggler.displayName = 'Toggler';
exports.default = Toggler;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbmF2YmFyL3RvZ2dsZXIuZXM2Il0sIm5hbWVzIjpbIkRpdiIsInRvZ2dsZWQiLCJvblRvZ2dsZSIsInByb3BzIiwiQnV0dG9uIiwidGhlbWUiLCJpbnZlcnNlIiwic2l6ZSIsInBvc2l0aW9uIiwidG9wIiwic3BhY2U0IiwicmlnaHQiLCJ3aWR0aCIsIk1hdGgiLCJyb3VuZCIsImhlaWdodCIsImN1cnNvciIsImlmU21hbGxVcCIsImRpc3BsYXkiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwibGlnaHQiLCJjb2xvciIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwiY2xhc3NOYW1lIiwiQ29tcCIsInRvZ2dsZUNvbXBvbmVudCIsIk9iamVjdCIsImtleXMiLCJwIiwiQ29udGFpbmVyIiwiaWZNaW5pIiwiY2xlYXIiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsInRyYW5zZm9ybU9yaWdpbiIsIlRvZ2dsZXIiLCJjaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwicHJvcFR5cGVzIiwiZnVuYyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU07QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZQyxRQUFaLFFBQVlBLFFBQVo7QUFBQSxNQUF5QkMsS0FBekI7O0FBQUEsU0FDVixrREFBU0EsS0FBVCxJQUFnQixTQUFTRCxRQUF6QixJQURVO0FBQUEsQ0FBWjs7WUFrRE0sMkM7O1lBQ0EsMkM7O1lBQ0EsMkM7O1lBQ0EsMkM7O0FBakROLElBQU1FLFNBQVMsK0JBQ2I7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFVSixPQUFWLFNBQVVBLE9BQVY7QUFBQSxNQUFtQkssT0FBbkIsU0FBbUJBLE9BQW5CO0FB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Vzs7QUFBQSxTQVFkO0FBQUMsYUFBRDtBQUFBLE1BQVcsV0FBVywwQkFBR3VCLFNBQUgsRUFBYyxjQUFkLENBQXRCLEVBQXFELFNBQVN6QixPQUE5RDtBQUNFLGtDQUFDLE1BQUQ7QUFDRSxlQUFTQSxPQURYO0FBRUUsdUJBQWlCMkIsZUFGbkI7QUFHRSxnQkFBVTFCO0FBSFosTUFERjtBQU1HLG9CQUFTc0MsR0FBVCxDQUFhRCxRQUFiLEVBQXVCO0FBQUEsYUFBUyx5QkFBYUUsS0FBYixFQUFvQnRDLEtBQXBCLENBQVQ7QUFBQSxLQUF2QjtBQU5ILEdBUmM7QUFBQSxDQUFoQjtBQWlCQW1DLFFBQVFJLFNBQVIsR0FBb0I7QUFDbEI7QUFDQXhDLFlBQVUsb0JBQVV5QyxJQUZGO0FBR2xCMUMsV0FBUyxvQkFBVTJDO0FBSEQsQ0FBcEI7QUFLQU4sUUFBUU8sWUFBUixHQUF1QjtBQUNyQmpCLG1CQUFpQjVCLEdBREk7QUFFckJFLFlBQVU0QyxTQUZXO0FBR3JCN0MsV0FBUztBQUhZLENBQXZCO0FBS0FxQyxRQUFRUyxXQUFSLEdBQXNCLFNBQXRCO2tCQUNlVCxPIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvbmF2YmFyL3RvZ2dsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlQ29tcG9uZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZS1jb21wb25lbnQnO1xuXG5jb25zdCBEaXYgPSAoeyB0b2dnbGVkLCBvblRvZ2dsZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8ZGl2IHsuLi5wcm9wc30gb25DbGljaz17b25Ub2dnbGV9IC8+XG4pO1xuXG5jb25zdCBCdXR0b24gPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCB0b2dnbGVkLCBpbnZlcnNlLCBzaXplID0gMjAgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IHRoZW1lLnNwYWNlNCxcbiAgICByaWdodDogdGhlbWUuc3BhY2U0LFxuICAgIC8vIGZsb2F0OiAncmlnaHQnLFxuICAgIC8vIHBhZGRpbmc6IHRoZW1lLnNwYWNlMixcbiAgICAvLyBtYXJnaW46IHRoZW1lLnNwYWNlMyxcbiAgICB3aWR0aDogTWF0aC5yb3VuZChzaXplICogMS4zKSxcbiAgICBoZWlnaHQ6IHNpemUsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgaWZTbWFsbFVwOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgICAnPiBzcGFuJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKHNpemUgLyA2KSxcbiAgICAgIGJvcmRlclJhZGl1czogTWF0aC5yb3VuZChzaXplIC8gNiksXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZDogaW52ZXJzZSA/IHRoZW1lLmxpZ2h0IDogdGhlbWUuY29sb3IsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyxcbiAgICAgIHRyYW5zaXRpb246ICcuMjVzIGVhc2UtaW4tb3V0JyxcbiAgICAgICc6bnRoLWNoaWxkKDEpJzoge1xuICAgICAgICB0b3A6IHRvZ2dsZWQgPyBNYXRoLnJvdW5kKHNpemUgLyAzKSA6IDAsXG4gICAgICAgIHdpZHRoOiB0b2dnbGVkICYmICcwJScsXG4gICAgICAgIGxlZnQ6IHRvZ2dsZWQgJiYgJzUwJScsXG4gICAgICB9LFxuICAgICAgJzpudGgtY2hpbGQoMiknOiB7XG4gICAgICAgIHRvcDogTWF0aC5yb3VuZChzaXplIC8gMyksXG4gICAgICAgIHRyYW5zZm9ybTogdG9nZ2xlZCAmJiAncm90YXRlKDQ1ZGVnKScsXG4gICAgICB9LFxuICAgICAgJzpudGgtY2hpbGQoMyknOiB7XG4gICAgICAgIHRvcDogTWF0aC5yb3VuZChzaXplIC8gMyksXG4gICAgICAgIHRyYW5zZm9ybTogdG9nZ2xlZCAmJiAncm90YXRlKC00NWRlZyknLFxuICAgICAgfSxcbiAgICAgICc6bnRoLWNoaWxkKDQpJzoge1xuICAgICAgICB0b3A6IHRvZ2dsZWQgPyBNYXRoLnJvdW5kKHNpemUgLyAzKSA6IE1hdGgucm91bmQoc2l6ZSAvIDMpICogMixcbiAgICAgICAgd2lkdGg6IHRvZ2dsZWQgJiYgJzAlJyxcbiAgICAgICAgbGVmdDogdG9nZ2xlZCAmJiAnNTAlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgb25Ub2dnbGUsIHRvZ2dsZWQsIHRvZ2dsZUNvbXBvbmVudDogQ29tcCB9KSA9PiAoXG4gICAgPENvbXAgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uVG9nZ2xlPXtvblRvZ2dsZX0gdG9nZ2xlZD17dG9nZ2xlZH0+XG4gICAgICA8c3BhbiAvPlxuICAgICAgPHNwYW4gLz5cbiAgICAgIDxzcGFuIC8+XG4gICAgICA8c3BhbiAvPlxuICAgIDwvQ29tcD5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IENvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdG9nZ2xlZCB9KSA9PiAoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaWZNaW5pOiB7XG4gICAgICAnPiBkaXY6bnRoLWNoaWxkKDIpJzoge1xuICAgICAgICBjbGVhcjogJ2JvdGgnLFxuICAgICAgICB0cmFuc2Zvcm06IHRvZ2dsZWQgPyAnc2NhbGVZKDEpJyA6ICdzY2FsZVkoMCknLFxuICAgICAgICBtYXhIZWlnaHQ6IHRvZ2dsZWQgPyA1MDAgOiAwLFxuICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AnLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzIGVhc2UtaW4tb3V0JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICBbXSxcbik7XG5cbmNvbnN0IFRvZ2dsZXIgPSAoe1xuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxuICB0b2dnbGVkLFxuICB0b2dnbGVDb21wb25lbnQsXG4gIG9uVG9nZ2xlLFxuICAuLi5wcm9wc1xufSkgPT4gKFxuICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCAnby1uYXYtdG9nZ2xlJyl9IHRvZ2dsZWQ9e3RvZ2dsZWR9PlxuICAgIDxCdXR0b25cbiAgICAgIHRvZ2dsZWQ9e3RvZ2dsZWR9XG4gICAgICB0b2dnbGVDb21wb25lbnQ9e3RvZ2dsZUNvbXBvbmVudH1cbiAgICAgIG9uVG9nZ2xlPXtvblRvZ2dsZX1cbiAgICAvPlxuICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IGNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpKX1cbiAgPC9Db250YWluZXI+XG4pO1xuVG9nZ2xlci5wcm9wVHlwZXMgPSB7XG4gIC8vIHRvZ2dsZUNvbXBvbmVudDogUHJvcFR5cGVzLm5vZGUsXG4gIG9uVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdG9nZ2xlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuVG9nZ2xlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRvZ2dsZUNvbXBvbmVudDogRGl2LFxuICBvblRvZ2dsZTogdW5kZWZpbmVkLFxuICB0b2dnbGVkOiBmYWxzZSxcbn07XG5Ub2dnbGVyLmRpc3BsYXlOYW1lID0gJ1RvZ2dsZXInO1xuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlcjtcbiJdfQ==
