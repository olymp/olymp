var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Fragment } from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { createComponent } from 'react-fela';
import FaBars from 'olymp-icons/lib/fa-bars';
import FaClose from 'olymp-icons/lib/fa-close';

import Tappable from 'react-tappable/lib/Tappable';
import Swipeable from 'react-swipeable';
import { Aside, Section } from '../../sidebar';

var _ref3 = React.createElement(FaBars, { size: 20, color: 'white' });

var _ref4 = React.createElement(FaClose, { size: 20, color: 'white' });

export var AsideMobile = createComponent(function (_ref) {
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
  return React.createElement(
    Tappable,
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

var enhanceSwiper = compose(withHandlers({
  setAbsX: function setAbsX(_ref5) {
    var _setAbsX = _ref5.setAbsX;
    return raf(_setAbsX);
  }
}));
export var Swiper = enhanceSwiper(createComponent(function (_ref6) {
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
  return React.createElement(
    Swipeable,
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
    React.createElement(AsideMobile, { large: large, width: width, absX: absX, collapsed: collapsed, onTap: function onTap() {
        return setCollapsed(!collapsed);
      } })
  );
}, function (p) {
  return Object.keys(p);
}));

var Aside1 = createComponent(function (_ref8) {
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

  return React.createElement(Aside, _extends({}, props, { width: absX || width, collapsed: absX ? false : props.collapsed }));
}, function (p) {
  return Object.keys(p);
});

export { Aside1 };
export var Aside2 = createComponent(function (_ref10) {
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
  return React.createElement(Aside, props);
}, function (p) {
  return Object.keys(p);
});

export var Section1 = createComponent(function (_ref11) {
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
  return React.createElement(Section, props);
}, function (p) {
  return Object.keys(p);
});

var enhance = compose(withState('absX', 'setAbsX', 0));
export default enhance(function (_ref12) {
  var collapsed = _ref12.collapsed,
      setCollapsed = _ref12.setCollapsed,
      menu = _ref12.menu,
      children = _ref12.children,
      _ref12$width = _ref12.width,
      width = _ref12$width === undefined ? 240 : _ref12$width,
      absX = _ref12.absX,
      setAbsX = _ref12.setAbsX;
  return React.createElement(
    Fragment,
    null,
    React.createElement(Swiper, { width: width, absX: absX, setAbsX: setAbsX, zIndex: 5, collapsed: collapsed, setCollapsed: setCollapsed, large: false }),
    React.createElement(
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

export var SecondarySidebar = function SecondarySidebar(_ref13) {
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
  return React.createElement(
    Fragment,
    null,
    React.createElement(
      Aside2,
      {
        left: left,
        width: width,
        zIndex: 4
      },
      menu
    ),
    hasContent ? React.createElement(
      Section1,
      { zIndex: 7, left: left + width },
      children
    ) : React.createElement(
      Section1,
      { placeholder: true, left: left + width },
      placeholder
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS90cmlvL2luZGV4LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwiY29tcG9zZSIsIndpdGhTdGF0ZSIsIndpdGhIYW5kbGVycyIsImNyZWF0ZUNvbXBvbmVudCIsIlRhcHBhYmxlIiwiU3dpcGVhYmxlIiwiQXNpZGUiLCJTZWN0aW9uIiwiQXNpZGVNb2JpbGUiLCJ0aGVtZSIsImNvbGxhcHNlZCIsImxhcmdlIiwiYWJzWCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luTGVmdCIsInBhZGRpbmdCb3R0b20iLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiY2xhc3NOYW1lIiwib25UYXAiLCJPYmplY3QiLCJrZXlzIiwicCIsInJhZiIsImZ1bmMiLCJvcHRpb25zIiwidGlja2luZyIsIngiLCJ1cGRhdGUiLCJyZXF1ZXN0VGljayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVuaGFuY2VTd2lwZXIiLCJzZXRBYnNYIiwiU3dpcGVyIiwiekluZGV4IiwidHJhbnNmb3JtIiwiaWZNZWRpdW1VcCIsImhlaWdodCIsInNldENvbGxhcHNlZCIsImUiLCJBc2lkZTEiLCJpZlNtYWxsRG93biIsIm1heFdpZHRoIiwicHJvcHMiLCJBc2lkZTIiLCJTZWN0aW9uMSIsInBsYWNlaG9sZGVyIiwiaWZNZWRpdW1Eb3duIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25UaW1pbmdGdW5jdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJlbmhhbmNlIiwibWVudSIsImNoaWxkcmVuIiwiU2Vjb25kYXJ5U2lkZWJhciIsImhhc0NvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxR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VUFBM0MscUNBQXdELElBQXhEO0FBQUEsa0NBQThEVCxXQUE5RDtBQUFBLE1BQThEQSxXQUE5RCxzQ0FBNEUsSUFBNUU7QUFBQSxTQUM5QjtBQUFDLFlBQUQ7QUFBQTtBQUNFO0FBQUMsWUFBRDtBQUFBO0FBQ0UsY0FBTTdCLElBRFI7QUFFRSxlQUFPYixLQUZUO0FBR0UsZ0JBQVE7QUFIVjtBQUtHZ0Q7QUFMSCxLQURGO0FBUUdHLGlCQUNDO0FBQUMsY0FBRDtBQUFBLFFBQVUsUUFBUSxDQUFsQixFQUFxQixNQUFNdEMsT0FBT2IsS0FBbEM7QUFDR2lEO0FBREgsS0FERCxHQUlHO0FBQUMsY0FBRDtBQUFBLFFBQVUsaUJBQVYsRUFBc0IsTUFBTXBDLE9BQU9iLEtBQW5DO0FBQ0cwQztBQURIO0FBWk4sR0FEOEI7QUFBQSxDQUF6QiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL21lbnUvdHJpby9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZSwgd2l0aEhhbmRsZXJzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgRmFCYXJzLCBGYUNsb3NlIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IFRhcHBhYmxlIGZyb20gJ3JlYWN0LXRhcHBhYmxlL2xpYi9UYXBwYWJsZSc7XG5pbXBvcnQgU3dpcGVhYmxlIGZyb20gJ3JlYWN0LXN3aXBlYWJsZSc7XG5pbXBvcnQgeyBBc2lkZSwgU2VjdGlvbiB9IGZyb20gJy4uLy4uL3NpZGViYXInO1xuXG5leHBvcnQgY29uc3QgQXNpZGVNb2JpbGUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBjb2xsYXBzZWQsIGxhcmdlLCBhYnNYID0gMCwgd2lkdGggfSkgPT4gKHtcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgcGFkZGluZ1RvcDogbGFyZ2UgPyAxNiA6IDEwLFxuICAgIHBhZGRpbmdSaWdodDogbGFyZ2UgPyAxOCA6IDE0LFxuICAgIHBhZGRpbmdMZWZ0OiAobGFyZ2UgPyAxOCA6IDE0KSArIDEwMDAsXG4gICAgbWFyZ2luTGVmdDogLTEwMDAsXG4gICAgcGFkZGluZ0JvdHRvbTogbGFyZ2UgPyA4IDogNCxcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogNSxcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1czogNSxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IGxhcmdlID8gMTAgOiA4LFxuICAgIGxlZnQ6IChhYnNYIHx8IChjb2xsYXBzZWQgPyAwIDogd2lkdGgpKSxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgb25UYXAsIGNvbGxhcHNlZCB9KSA9PiAoXG4gICAgPFRhcHBhYmxlIG9uVGFwPXtvblRhcH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge2NvbGxhcHNlZCA/IDxGYUJhcnMgc2l6ZT17MjB9IGNvbG9yPVwid2hpdGVcIiAvPiA6IDxGYUNsb3NlIHNpemU9ezIwfSBjb2xvcj1cIndoaXRlXCIgLz59XG4gICAgPC9UYXBwYWJsZT5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IHJhZiA9IChmdW5jKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgdGlja2luZzogZmFsc2UsXG4gICAgeDogMCxcbiAgfTtcbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIGZ1bmMob3B0aW9ucy54LCAoKSA9PiB7XG4gICAgICBvcHRpb25zLnRpY2tpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgcmVxdWVzdFRpY2sgPSAoeCkgPT4ge1xuICAgIG9wdGlvbnMueCA9IHg7XG4gICAgaWYgKCFvcHRpb25zLnRpY2tpbmcpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgIH1cbiAgICBvcHRpb25zLnRpY2tpbmcgPSB0cnVlO1xuICB9O1xuICByZXR1cm4gcmVxdWVzdFRpY2s7XG59XG5cbmNvbnN0IGVuaGFuY2VTd2lwZXIgPSBjb21wb3NlKFxuICB3aXRoSGFuZGxlcnMoKHtcbiAgICBzZXRBYnNYOiAoeyBzZXRBYnNYIH0pID0+IHJhZihzZXRBYnNYKSxcbiAgfSkpXG4pXG5leHBvcnQgY29uc3QgU3dpcGVyID0gZW5oYW5jZVN3aXBlcihcbiAgY3JlYXRlQ29tcG9uZW50KFxuICAgICh7IGNvbGxhcHNlZCwgekluZGV4IH0pID0+ICh7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICBpZk1lZGl1bVVwOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyxcbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxuICAgICAgekluZGV4LFxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB0b3A6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiBjb2xsYXBzZWQgPyAxMiA6ICcxMDAlJyxcbiAgICB9KSxcbiAgICAoeyBjbGFzc05hbWUsIGNvbGxhcHNlZCwgd2lkdGgsIHNldENvbGxhcHNlZCwgbGFyZ2UgPSB0cnVlLCBzZXRBYnNYLCBhYnNYIH0pID0+IChcbiAgICAgIDxTd2lwZWFibGVcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIG9uU3dpcGluZ1JpZ2h0PXsoZSwgeCkgPT4gc2V0QWJzWCh4KX1cbiAgICAgICAgb25Td2lwZWRSaWdodD17KCkgPT4ge1xuICAgICAgICAgIHNldEFic1goMCk7XG4gICAgICAgICAgaWYgKGFic1ggPiAod2lkdGggKiAwLjMzKSkge1xuICAgICAgICAgICAgc2V0Q29sbGFwc2VkKGZhbHNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Q29sbGFwc2VkKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgb25Td2lwaW5nTGVmdD17KGUsIHgpID0+IHNldEFic1god2lkdGggLSB4KX1cbiAgICAgICAgb25Td2lwZWRMZWZ0PXsoKSA9PiB7XG4gICAgICAgICAgc2V0QWJzWCgwKTtcbiAgICAgICAgICBpZiAoYWJzWCA+ICh3aWR0aCAqIDAuNjYpKSB7XG4gICAgICAgICAgICBzZXRDb2xsYXBzZWQoZmFsc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRDb2xsYXBzZWQodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QXNpZGVNb2JpbGUgbGFyZ2U9e2xhcmdlfSB3aWR0aD17d2lkdGh9IGFic1g9e2Fic1h9IGNvbGxhcHNlZD17Y29sbGFwc2VkfSBvblRhcD17KCkgPT4gc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpfSAvPlxuICAgICAgPC9Td2lwZWFibGU+XG4gICAgKSxcbiAgICBwID0+IE9iamVjdC5rZXlzKHApLFxuICApXG4pO1xuXG5leHBvcnQgY29uc3QgQXNpZGUxID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyBjb2xsYXBzZWQsIGFic1gsIHpJbmRleCwgd2lkdGggfSkgPT4gKHtcbiAgICBpZlNtYWxsRG93bjoge1xuICAgICAgdHJhbnNmb3JtOiBjb2xsYXBzZWQgJiYgIWFic1ggPyAndHJhbnNsYXRlWCgtMTAwJSknIDogJ3RyYW5zbGF0ZVgoMCUpJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsXG4gICAgICB3aWR0aDogYWJzWCB8fCB3aWR0aCxcbiAgICB9LFxuICAgIHpJbmRleCxcbiAgICBtYXhXaWR0aDogJzgwJScsXG4gIH0pLFxuICAoeyBhYnNYLCB3aWR0aCwgLi4ucHJvcHMgfSkgPT4gPEFzaWRlIHsuLi5wcm9wc30gd2lkdGg9e2Fic1ggfHwgd2lkdGh9IGNvbGxhcHNlZD17YWJzWCA/IGZhbHNlIDogcHJvcHMuY29sbGFwc2VkfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBjb25zdCBBc2lkZTIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IGxlZnQsIHpJbmRleCB9KSA9PiAoe1xuICAgIGlmU21hbGxEb3duOiB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICB6SW5kZXgsXG4gICAgbGVmdCxcbiAgfSksXG4gIHByb3BzID0+IDxBc2lkZSB7Li4ucHJvcHN9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24xID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyBsZWZ0LCBwbGFjZWhvbGRlciwgekluZGV4IH0pID0+ICh7XG4gICAgbWFyZ2luTGVmdDogbGVmdCxcbiAgICBpZk1lZGl1bURvd246ICFwbGFjZWhvbGRlciAmJiB7XG4gICAgICBtYXJnaW5MZWZ0OiAwLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJyxcbiAgICAgIHpJbmRleCxcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMjAwbXMnLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJyxcbiAgICAgIGFuaW1hdGlvbk5hbWU6IHtcbiAgICAgICAgJzAlJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLFxuICAgICAgICB9LFxuICAgICAgICAnMTAwJSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIHByb3BzID0+IDxTZWN0aW9uIHsuLi5wcm9wc30gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZSh3aXRoU3RhdGUoJ2Fic1gnLCAnc2V0QWJzWCcsIDApKVxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZShcbiAgKHsgY29sbGFwc2VkLCBzZXRDb2xsYXBzZWQsIG1lbnUsIGNoaWxkcmVuLCB3aWR0aCA9IDI0MCwgYWJzWCwgc2V0QWJzWCB9KSA9PiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPFN3aXBlciB3aWR0aD17d2lkdGh9IGFic1g9e2Fic1h9IHNldEFic1g9e3NldEFic1h9IHpJbmRleD17NX0gY29sbGFwc2VkPXtjb2xsYXBzZWR9IHNldENvbGxhcHNlZD17c2V0Q29sbGFwc2VkfSBsYXJnZT17ZmFsc2V9IC8+XG4gICAgICA8QXNpZGUxXG4gICAgICAgIHpJbmRleD17Nn1cbiAgICAgICAgYWJzWD17YWJzWH1cbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRDb2xsYXBzZWQoZmFsc2UpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldENvbGxhcHNlZCh0cnVlKX1cbiAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XG4gICAgICAgIG92ZXJsYXBcbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgPlxuICAgICAgICB7bWVudX1cbiAgICAgIDwvQXNpZGUxPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbik7XG5cbmV4cG9ydCBjb25zdCBTZWNvbmRhcnlTaWRlYmFyID0gKHsgbWVudSwgY2hpbGRyZW4sIGxlZnQgPSA3Miwgd2lkdGggPSA0MDAsIGhhc0NvbnRlbnQgPSB0cnVlLCBwbGFjZWhvbGRlciA9IG51bGwgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEFzaWRlMlxuICAgICAgbGVmdD17bGVmdH1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIHpJbmRleD17NH1cbiAgICA+XG4gICAgICB7bWVudX1cbiAgICA8L0FzaWRlMj5cbiAgICB7aGFzQ29udGVudCA/IChcbiAgICAgIDxTZWN0aW9uMSB6SW5kZXg9ezd9IGxlZnQ9e2xlZnQgKyB3aWR0aH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvU2VjdGlvbjE+KSA6IChcbiAgICAgICAgPFNlY3Rpb24xIHBsYWNlaG9sZGVyIGxlZnQ9e2xlZnQgKyB3aWR0aH0+XG4gICAgICAgICAge3BsYWNlaG9sZGVyfVxuICAgICAgICA8L1NlY3Rpb24xPlxuICAgICl9XG4gIDwvRnJhZ21lbnQ+XG4pO1xuIl19
