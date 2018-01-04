'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondarySidebar = exports.Section1 = exports.Aside2 = exports.Aside1 = exports.Swiper = exports.AsideMobile = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _reactFela = require('react-fela');

var _faBars = require('olymp-icons/lib/fa-bars');

var _faBars2 = _interopRequireDefault(_faBars);

var _faClose = require('olymp-icons/lib/fa-close');

var _faClose2 = _interopRequireDefault(_faClose);

var _Tappable = require('react-tappable/lib/Tappable');

var _Tappable2 = _interopRequireDefault(_Tappable);

var _reactSwipeable = require('react-swipeable');

var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

var _sidebar = require('../../sidebar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ref3 = _react2.default.createElement(_faBars2.default, { size: 20, color: 'white' });

var _ref4 = _react2.default.createElement(_faClose2.default, { size: 20, color: 'white' });

var AsideMobile = exports.AsideMobile = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      collapsed = _ref.collapsed,
      large = _ref.large,
      _ref$absX = _ref.absX,
      absX = _ref$absX === undefined ? 0 : _ref$absX,
      width = _ref.width;
  return {
    transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
    backgroundColor: theme.color,
    paddingTop: large ? 16 : 10,
    paddingRight: large ? 18 : 14,
    paddingLeft: (large ? 18 : 14) + 1000,
    marginLeft: -1000,
    paddingBottom: large ? 8 : 4,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    position: 'absolute',
    top: large ? 10 : 8,
    left: absX || (collapsed ? 0 : width)
  };
}, function (_ref2) {
  var className = _ref2.className,
      onTap = _ref2.onTap,
      collapsed = _ref2.collapsed;
  return _react2.default.createElement(
    _Tappable2.default,
    { onTap: onTap, className: className },
    collapsed ? _ref3 : _ref4
  );
}, function (p) {
  return Object.keys(p);
});

var raf = function raf(func) {
  var options = {
    ticking: false,
    x: 0
  };
  var update = function update() {
    func(options.x, function () {
      options.ticking = false;
    });
  };
  var requestTick = function requestTick(x) {
    options.x = x;
    if (!options.ticking) {
      requestAnimationFrame(update);
    }
    options.ticking = true;
  };
  return requestTick;
};

var enhanceSwiper = (0, _recompose.compose)((0, _recompose.withHandlers)({
  setAbsX: function setAbsX(_ref5) {
    var _setAbsX = _ref5.setAbsX;
    return raf(_setAbsX);
  }
}));
var Swiper = exports.Swiper = enhanceSwiper((0, _reactFela.createComponent)(function (_ref6) {
  var collapsed = _ref6.collapsed,
      zIndex = _ref6.zIndex;
  return {
    transform: 'translateX(0%)',
    ifMediumUp: {
      transform: 'translateX(-100%)'
    },
    transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
    zIndex: zIndex,
    position: 'fixed',
    top: 0,
    height: '100%',
    width: collapsed ? 12 : '100%'
  };
}, function (_ref7) {
  var className = _ref7.className,
      collapsed = _ref7.collapsed,
      width = _ref7.width,
      setCollapsed = _ref7.setCollapsed,
      _ref7$large = _ref7.large,
      large = _ref7$large === undefined ? true : _ref7$large,
      setAbsX = _ref7.setAbsX,
      absX = _ref7.absX;
  return _react2.default.createElement(
    _reactSwipeable2.default,
    {
      className: className,
      onSwipingRight: function onSwipingRight(e, x) {
        return setAbsX(x);
      },
      onSwipedRight: function onSwipedRight() {
        setAbsX(0);
        if (absX > width * 0.33) {
          setCollapsed(false);
        } else {
          setCollapsed(true);
        }
      },
      onSwipingLeft: function onSwipingLeft(e, x) {
        return setAbsX(width - x);
      },
      onSwipedLeft: function onSwipedLeft() {
        setAbsX(0);
        if (absX > width * 0.66) {
          setCollapsed(false);
        } else {
          setCollapsed(true);
        }
      }
    },
    _react2.default.createElement(AsideMobile, { large: large, width: width, absX: absX, collapsed: collapsed, onTap: function onTap() {
        return setCollapsed(!collapsed);
      } })
  );
}, function (p) {
  return Object.keys(p);
}));

var Aside1 = (0, _reactFela.createComponent)(function (_ref8) {
  var collapsed = _ref8.collapsed,
      absX = _ref8.absX,
      zIndex = _ref8.zIndex,
      width = _ref8.width;
  return {
    ifSmallDown: {
      transform: collapsed && !absX ? 'translateX(-100%)' : 'translateX(0%)',
      transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
      width: absX || width
    },
    zIndex: zIndex,
    maxWidth: '80%'
  };
}, function (_ref9) {
  var absX = _ref9.absX,
      width = _ref9.width,
      props = _objectWithoutProperties(_ref9, ['absX', 'width']);

  return _react2.default.createElement(_sidebar.Aside, _extends({}, props, { width: absX || width, collapsed: absX ? false : props.collapsed }));
}, function (p) {
  return Object.keys(p);
});

exports.Aside1 = Aside1;
var Aside2 = exports.Aside2 = (0, _reactFela.createComponent)(function (_ref10) {
  var left = _ref10.left,
      zIndex = _ref10.zIndex;
  return {
    ifSmallDown: {
      left: 0,
      transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
      width: '100%'
    },
    zIndex: zIndex,
    left: left
  };
}, function (props) {
  return _react2.default.createElement(_sidebar.Aside, props);
}, function (p) {
  return Object.keys(p);
});

var Section1 = exports.Section1 = (0, _reactFela.createComponent)(function (_ref11) {
  var left = _ref11.left,
      placeholder = _ref11.placeholder,
      zIndex = _ref11.zIndex;
  return {
    marginLeft: left,
    ifMediumDown: !placeholder && {
      marginLeft: 0,
      transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
      zIndex: zIndex,
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      animationDuration: '200ms',
      animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      animationName: {
        '0%': {
          transform: 'translateX(100%)'
        },
        '100%': {
          transform: 'translateX(0)'
        }
      }
    }
  };
}, function (props) {
  return _react2.default.createElement(_sidebar.Section, props);
}, function (p) {
  return Object.keys(p);
});

var enhance = (0, _recompose.compose)((0, _recompose.withState)('absX', 'setAbsX', 0));
exports.default = enhance(function (_ref12) {
  var collapsed = _ref12.collapsed,
      setCollapsed = _ref12.setCollapsed,
      menu = _ref12.menu,
      children = _ref12.children,
      _ref12$width = _ref12.width,
      width = _ref12$width === undefined ? 240 : _ref12$width,
      absX = _ref12.absX,
      setAbsX = _ref12.setAbsX;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(Swiper, { width: width, absX: absX, setAbsX: setAbsX, zIndex: 5, collapsed: collapsed, setCollapsed: setCollapsed, large: false }),
    _react2.default.createElement(
      Aside1,
      {
        zIndex: 6,
        absX: absX,
        onMouseEnter: function onMouseEnter() {
          return setCollapsed(false);
        },
        onMouseLeave: function onMouseLeave() {
          return setCollapsed(true);
        },
        collapsed: collapsed,
        overlap: true,
        width: width
      },
      menu
    ),
    children
  );
});
var SecondarySidebar = exports.SecondarySidebar = function SecondarySidebar(_ref13) {
  var menu = _ref13.menu,
      children = _ref13.children,
      _ref13$left = _ref13.left,
      left = _ref13$left === undefined ? 72 : _ref13$left,
      _ref13$width = _ref13.width,
      width = _ref13$width === undefined ? 400 : _ref13$width,
      _ref13$hasContent = _ref13.hasContent,
      hasContent = _ref13$hasContent === undefined ? true : _ref13$hasContent,
      _ref13$placeholder = _ref13.placeholder,
      placeholder = _ref13$placeholder === undefined ? null : _ref13$placeholder;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      Aside2,
      {
        left: left,
        width: width,
        zIndex: 4
      },
      menu
    ),
    hasContent ? _react2.default.createElement(
      Section1,
      { zIndex: 7, left: left + width },
      children
    ) : _react2.default.createElement(
      Section1,
      { placeholder: true, left: left + width },
      placeholder
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS90cmlvL2luZGV4LmVzNiJdLCJuYW1lcyI6WyJBc2lkZU1vYmlsZSIsInRoZW1lIiwiY29sbGFwc2VkIiwibGFyZ2UiLCJhYnNYIiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0JvdHRvbSIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJjbGFzc05hbWUiLCJvblRhcCIsIk9iamVjdCIsImtleXMiLCJwIiwicmFmIiwiZnVuYyIsIm9wdGlvbnMiLCJ0aWNraW5nIiwieCIsInVwZGF0ZSIsInJlcXVlc3RUaWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZW5oYW5jZVN3aXBlciIsInNldEFic1giLCJTd2lwZXIiLCJ6SW5kZXgiLCJ0cmFuc2Zvcm0iLCJpZk1lZGl1bVVwIiwiaGVpZ2h0Iiwic2V0Q29sbGFwc2VkIiwiZSIsIkFzaWRlMSIsImlmU21hbGxEb3duIiwibWF4V2lkdGgiLCJwcm9wcyIsIkFzaWRlMiIsIlNlY3Rpb24xIiwicGxhY2Vob2xkZXIiLCJpZk1lZGl1bURvd24iLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uIiwiYW5pbWF0aW9uTmFtZSIsImVuaGFuY2UiLCJtZW51IiwiY2hpbGRyZW4iLCJTZWNvbmRhcnlTaWRlYmFyIiwiaGFzQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1lBbUJtQixrREFBUSxNQUFNLEVBQWQsRUFBa0IsT0FBTSxPQUF4QixHOztZQUFxQyxtREFBUyxNQUFNLEVBQWYsRUFBbUIsT0FBTSxPQUF6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ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoU3RhdGUsIHdpdGhIYW5kbGVycyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IEZhQmFycywgRmFDbG9zZSB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCBUYXBwYWJsZSBmcm9tICdyZWFjdC10YXBwYWJsZS9saWIvVGFwcGFibGUnO1xuaW1wb3J0IFN3aXBlYWJsZSBmcm9tICdyZWFjdC1zd2lwZWFibGUnO1xuaW1wb3J0IHsgQXNpZGUsIFNlY3Rpb24gfSBmcm9tICcuLi8uLi9zaWRlYmFyJztcblxuZXhwb3J0IGNvbnN0IEFzaWRlTW9iaWxlID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgY29sbGFwc2VkLCBsYXJnZSwgYWJzWCA9IDAsIHdpZHRoIH0pID0+ICh7XG4gICAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIHBhZGRpbmdUb3A6IGxhcmdlID8gMTYgOiAxMCxcbiAgICBwYWRkaW5nUmlnaHQ6IGxhcmdlID8gMTggOiAxNCxcbiAgICBwYWRkaW5nTGVmdDogKGxhcmdlID8gMTggOiAxNCkgKyAxMDAwLFxuICAgIG1hcmdpbkxlZnQ6IC0xMDAwLFxuICAgIHBhZGRpbmdCb3R0b206IGxhcmdlID8gOCA6IDQsXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDUsXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDUsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiBsYXJnZSA/IDEwIDogOCxcbiAgICBsZWZ0OiAoYWJzWCB8fCAoY29sbGFwc2VkID8gMCA6IHdpZHRoKSksXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIG9uVGFwLCBjb2xsYXBzZWQgfSkgPT4gKFxuICAgIDxUYXBwYWJsZSBvblRhcD17b25UYXB9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtjb2xsYXBzZWQgPyA8RmFCYXJzIHNpemU9ezIwfSBjb2xvcj1cIndoaXRlXCIgLz4gOiA8RmFDbG9zZSBzaXplPXsyMH0gY29sb3I9XCJ3aGl0ZVwiIC8+fVxuICAgIDwvVGFwcGFibGU+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCByYWYgPSAoZnVuYykgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHRpY2tpbmc6IGZhbHNlLFxuICAgIHg6IDAsXG4gIH07XG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBmdW5jKG9wdGlvbnMueCwgKCkgPT4ge1xuICAgICAgb3B0aW9ucy50aWNraW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHJlcXVlc3RUaWNrID0gKHgpID0+IHtcbiAgICBvcHRpb25zLnggPSB4O1xuICAgIGlmICghb3B0aW9ucy50aWNraW5nKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICB9XG4gICAgb3B0aW9ucy50aWNraW5nID0gdHJ1ZTtcbiAgfTtcbiAgcmV0dXJuIHJlcXVlc3RUaWNrO1xufVxuXG5jb25zdCBlbmhhbmNlU3dpcGVyID0gY29tcG9zZShcbiAgd2l0aEhhbmRsZXJzKCh7XG4gICAgc2V0QWJzWDogKHsgc2V0QWJzWCB9KSA9PiByYWYoc2V0QWJzWCksXG4gIH0pKVxuKVxuZXhwb3J0IGNvbnN0IFN3aXBlciA9IGVuaGFuY2VTd2lwZXIoXG4gIGNyZWF0ZUNvbXBvbmVudChcbiAgICAoeyBjb2xsYXBzZWQsIHpJbmRleCB9KSA9PiAoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAgICAgaWZNZWRpdW1VcDoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgICB9LFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJyxcbiAgICAgIHpJbmRleCxcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOiAwLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aDogY29sbGFwc2VkID8gMTIgOiAnMTAwJScsXG4gICAgfSksXG4gICAgKHsgY2xhc3NOYW1lLCBjb2xsYXBzZWQsIHdpZHRoLCBzZXRDb2xsYXBzZWQsIGxhcmdlID0gdHJ1ZSwgc2V0QWJzWCwgYWJzWCB9KSA9PiAoXG4gICAgICA8U3dpcGVhYmxlXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBvblN3aXBpbmdSaWdodD17KGUsIHgpID0+IHNldEFic1goeCl9XG4gICAgICAgIG9uU3dpcGVkUmlnaHQ9eygpID0+IHtcbiAgICAgICAgICBzZXRBYnNYKDApO1xuICAgICAgICAgIGlmIChhYnNYID4gKHdpZHRoICogMC4zMykpIHtcbiAgICAgICAgICAgIHNldENvbGxhcHNlZChmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldENvbGxhcHNlZCh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uU3dpcGluZ0xlZnQ9eyhlLCB4KSA9PiBzZXRBYnNYKHdpZHRoIC0geCl9XG4gICAgICAgIG9uU3dpcGVkTGVmdD17KCkgPT4ge1xuICAgICAgICAgIHNldEFic1goMCk7XG4gICAgICAgICAgaWYgKGFic1ggPiAod2lkdGggKiAwLjY2KSkge1xuICAgICAgICAgICAgc2V0Q29sbGFwc2VkKGZhbHNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Q29sbGFwc2VkKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEFzaWRlTW9iaWxlIGxhcmdlPXtsYXJnZX0gd2lkdGg9e3dpZHRofSBhYnNYPXthYnNYfSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gb25UYXA9eygpID0+IHNldENvbGxhcHNlZCghY29sbGFwc2VkKX0gLz5cbiAgICAgIDwvU3dpcGVhYmxlPlxuICAgICksXG4gICAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbiAgKVxuKTtcblxuZXhwb3J0IGNvbnN0IEFzaWRlMSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgY29sbGFwc2VkLCBhYnNYLCB6SW5kZXgsIHdpZHRoIH0pID0+ICh7XG4gICAgaWZTbWFsbERvd246IHtcbiAgICAgIHRyYW5zZm9ybTogY29sbGFwc2VkICYmICFhYnNYID8gJ3RyYW5zbGF0ZVgoLTEwMCUpJyA6ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxuICAgICAgd2lkdGg6IGFic1ggfHwgd2lkdGgsXG4gICAgfSxcbiAgICB6SW5kZXgsXG4gICAgbWF4V2lkdGg6ICc4MCUnLFxuICB9KSxcbiAgKHsgYWJzWCwgd2lkdGgsIC4uLnByb3BzIH0pID0+IDxBc2lkZSB7Li4ucHJvcHN9IHdpZHRoPXthYnNYIHx8IHdpZHRofSBjb2xsYXBzZWQ9e2Fic1ggPyBmYWxzZSA6IHByb3BzLmNvbGxhcHNlZH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgY29uc3QgQXNpZGUyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyBsZWZ0LCB6SW5kZXggfSkgPT4gKHtcbiAgICBpZlNtYWxsRG93bjoge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgekluZGV4LFxuICAgIGxlZnQsXG4gIH0pLFxuICBwcm9wcyA9PiA8QXNpZGUgey4uLnByb3BzfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uMSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgbGVmdCwgcGxhY2Vob2xkZXIsIHpJbmRleCB9KSA9PiAoe1xuICAgIG1hcmdpbkxlZnQ6IGxlZnQsXG4gICAgaWZNZWRpdW1Eb3duOiAhcGxhY2Vob2xkZXIgJiYge1xuICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsXG4gICAgICB6SW5kZXgsXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogJzIwMG1zJyxcbiAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsXG4gICAgICBhbmltYXRpb25OYW1lOiB7XG4gICAgICAgICcwJSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcbiAgICAgICAgfSxcbiAgICAgICAgJzEwMCUnOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBwcm9wcyA9PiA8U2VjdGlvbiB7Li4ucHJvcHN9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2Uod2l0aFN0YXRlKCdhYnNYJywgJ3NldEFic1gnLCAwKSlcbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2UoXG4gICh7IGNvbGxhcHNlZCwgc2V0Q29sbGFwc2VkLCBtZW51LCBjaGlsZHJlbiwgd2lkdGggPSAyNDAsIGFic1gsIHNldEFic1ggfSkgPT4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxTd2lwZXIgd2lkdGg9e3dpZHRofSBhYnNYPXthYnNYfSBzZXRBYnNYPXtzZXRBYnNYfSB6SW5kZXg9ezV9IGNvbGxhcHNlZD17Y29sbGFwc2VkfSBzZXRDb2xsYXBzZWQ9e3NldENvbGxhcHNlZH0gbGFyZ2U9e2ZhbHNlfSAvPlxuICAgICAgPEFzaWRlMVxuICAgICAgICB6SW5kZXg9ezZ9XG4gICAgICAgIGFic1g9e2Fic1h9XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Q29sbGFwc2VkKGZhbHNlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRDb2xsYXBzZWQodHJ1ZSl9XG4gICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICBvdmVybGFwXG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgID5cbiAgICAgICAge21lbnV9XG4gICAgICA8L0FzaWRlMT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0ZyYWdtZW50PlxuICApXG4pO1xuXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5U2lkZWJhciA9ICh7IG1lbnUsIGNoaWxkcmVuLCBsZWZ0ID0gNzIsIHdpZHRoID0gNDAwLCBoYXNDb250ZW50ID0gdHJ1ZSwgcGxhY2Vob2xkZXIgPSBudWxsIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxBc2lkZTJcbiAgICAgIGxlZnQ9e2xlZnR9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICB6SW5kZXg9ezR9XG4gICAgPlxuICAgICAge21lbnV9XG4gICAgPC9Bc2lkZTI+XG4gICAge2hhc0NvbnRlbnQgPyAoXG4gICAgICA8U2VjdGlvbjEgekluZGV4PXs3fSBsZWZ0PXtsZWZ0ICsgd2lkdGh9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1NlY3Rpb24xPikgOiAoXG4gICAgICAgIDxTZWN0aW9uMSBwbGFjZWhvbGRlciBsZWZ0PXtsZWZ0ICsgd2lkdGh9PlxuICAgICAgICAgIHtwbGFjZWhvbGRlcn1cbiAgICAgICAgPC9TZWN0aW9uMT5cbiAgICApfVxuICA8L0ZyYWdtZW50PlxuKTtcbiJdfQ==
