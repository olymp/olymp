'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

require('antd/lib/menu/style');

require('antd/lib/tooltip/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _portal = require('olymp-fela/portal');

var _portal2 = _interopRequireDefault(_portal);

var _reactFela = require('react-fela');

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = exports.Button = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      active = _ref.active;
  return {
    paddingX: 20,
    '> svg': {
      fill: active ? theme.light : theme.light2,
      size: 16,
      marginBottom: -4
    },
    '> div > svg': {
      fill: active ? theme.light : theme.light2,
      size: 16,
      marginBottom: -4
    },
    '> div> div > svg': {
      fill: active ? theme.light : theme.light2,
      size: 16,
      marginBottom: -4
    },
    '> a > svg': {
      fill: active ? theme.light : theme.light2,
      size: 16,
      marginBottom: -4
    }
  };
}, function (_ref2) {
  var onMouseDown = _ref2.onMouseDown,
      tooltip = _ref2.tooltip,
      children = _ref2.children,
      className = _ref2.className;
  return _react2.default.createElement(
    'div',
    { onMouseDown: onMouseDown, className: className },
    _react2.default.createElement(
      _tooltip2.default,
      { placement: 'top', title: tooltip || '' },
      children
    )
  );
}, function (p) {
  return Object.keys(p);
});

var WrappedMenu = (0, _reactFela.createComponent)(function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return {
    position: 'fixed',
    top: -2,
    zIndex: 100,
    left: '50%',
    transform: 'translateX(-50%)',
    // width: '100%',
    // boxShadow: theme.boxShadow,
    backgroundColor: color === true ? theme.color : theme.dark,
    color: theme.light,
    paddingX: theme.space2,
    borderBottom: 0,
    hasFlex: {
      justifyContent: 'center',
      display: 'flex'
    },
    '> li': {
      padding: 0,
      '> div': {
        paddingX: 5,
        lineHeight: '25px',
        '> div': {
          paddingX: 5,
          lineHeight: '25px'
        }
      }
    }
  };
}, function (props) {
  return _react2.default.createElement(_menu2.default, props);
}, function (p) {
  return Object.keys(p);
});

var enhance = (0, _recompose.withPropsOnChange)(['parentEl'], function (_ref4) {
  var parentEl = _ref4.parentEl;

  var parent = document.querySelector(parentEl);
  if (!parent) {
    return null;
  }
  var tooltipPosition = parent.getBoundingClientRect();
  var scrollY = window.scrollY !== undefined ? window.scrollY : window.pageYOffset;
  var scrollX = window.scrollX !== undefined ? window.scrollX : window.pageXOffset;
  var top = scrollY + tooltipPosition.top;
  var left = scrollX + tooltipPosition.left;
  return {
    left: left + parent.offsetWidth / 2,
    top: top
  };
});
var ScrollPortal = enhance(function (_ref5) {
  var children = _ref5.children,
      top = _ref5.top,
      left = _ref5.left,
      color = _ref5.color,
      display = _ref5.display;
  return _react2.default.createElement(
    _portal2.default,
    null,
    _react2.default.createElement(
      WrappedMenu,
      {
        color: color,
        style: {
          top: 0,
          display: display,
          left: left,
          // transform: 'translate3d(-50%, -100%, 0px)',
          transform: 'translate3d(-50%, ' + (top - 26) + 'px, 0px)',
          position: 'absolute'
        },
        selectedKeys: [],
        mode: 'horizontal',
        theme: 'dark'
      },
      children
    )
  );
});

var _ref6 = _react2.default.createElement('div', null);

exports.default = function (props) {
  var isOpened = props.isOpened,
      parent = props.parent,
      children = props.children,
      color = props.color;


  if (!isOpened) {
    return _ref6;
  }

  if (parent) {
    return _react2.default.createElement(
      ScrollPortal,
      { parentEl: parent, color: color },
      children
    );
  }

  return _react2.default.createElement(
    _portal2.default,
    null,
    _react2.default.createElement(
      WrappedMenu,
      {
        color: color,
        selectedKeys: [],
        mode: 'horizontal',
        theme: 'dark'
      },
      children
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3Rvb2xiYXIuZXM2Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInRoZW1lIiwiYWN0aXZlIiwicGFkZGluZ1giLCJmaWxsIiwibGlnaHQiLCJsaWdodDIiLCJzaXplIiwibWFyZ2luQm90dG9tIiwib25Nb3VzZURvd24iLCJ0b29sdGlwIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJPYmplY3QiLCJrZXlzIiwicCIsIldyYXBwZWRNZW51IiwiY29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInpJbmRleCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXJrIiwic3BhY2UyIiwiYm9yZGVyQm90dG9tIiwiaGFzRmxleCIsImp1c3RpZnlDb250ZW50IiwiZGlzcGxheSIsInBhZGRpbmciLCJsaW5lSGVpZ2h0IiwicHJvcHMiLCJlbmhhbmNlIiwicGFyZW50RWwiLCJwYXJlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b29sdGlwUG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY3JvbGxZIiwid2luZG93IiwidW5kZWZpbmVkIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxYIiwicGFnZVhPZmZzZXQiLCJvZmZzZXRXaWR0aCIsIlNjcm9sbFBvcnRhbCIsImlzT3BlbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBRU8sSUFBTUEsMEJBQVMsZ0NBQ3BCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsTUFBVixRQUFVQSxNQUFWO0FBQUEsU0FBd0I7QUFDdEJDLGNBQVUsRUFEWTtBQUV0QixhQUFTO0FBQ1BDLFlBQU1GLFNBQVNELE1BQU1JLEtBQWYsR0FBdUJKLE1BQU1LLE1BRDVCO0FBRVBDLFlBQU0sRUFGQztBQUdQQyxvQkFBYyxDQUFDO0FBSFIsS0FGYTtBQU90QixtQkFBZTtBQUNiSixZQUFNRixT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RCxDIiwiZmlsZSI6ImV4dGVybmFsL3NsYXRlL3Rvb2xiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICdvbHltcC1mZWxhL3BvcnRhbCc7XG5pbXBvcnQgeyBNZW51LCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IHdpdGhQcm9wc09uQ2hhbmdlIH0gZnJvbSAncmVjb21wb3NlJztcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGFjdGl2ZSB9KSA9PiAoe1xuICAgIHBhZGRpbmdYOiAyMCxcbiAgICAnPiBzdmcnOiB7XG4gICAgICBmaWxsOiBhY3RpdmUgPyB0aGVtZS5saWdodCA6IHRoZW1lLmxpZ2h0MixcbiAgICAgIHNpemU6IDE2LFxuICAgICAgbWFyZ2luQm90dG9tOiAtNCxcbiAgICB9LFxuICAgICc+IGRpdiA+IHN2Zyc6IHtcbiAgICAgIGZpbGw6IGFjdGl2ZSA/IHRoZW1lLmxpZ2h0IDogdGhlbWUubGlnaHQyLFxuICAgICAgc2l6ZTogMTYsXG4gICAgICBtYXJnaW5Cb3R0b206IC00LFxuICAgIH0sXG4gICAgJz4gZGl2PiBkaXYgPiBzdmcnOiB7XG4gICAgICBmaWxsOiBhY3RpdmUgPyB0aGVtZS5saWdodCA6IHRoZW1lLmxpZ2h0MixcbiAgICAgIHNpemU6IDE2LFxuICAgICAgbWFyZ2luQm90dG9tOiAtNCxcbiAgICB9LFxuICAgICc+IGEgPiBzdmcnOiB7XG4gICAgICBmaWxsOiBhY3RpdmUgPyB0aGVtZS5saWdodCA6IHRoZW1lLmxpZ2h0MixcbiAgICAgIHNpemU6IDE2LFxuICAgICAgbWFyZ2luQm90dG9tOiAtNCxcbiAgICB9LFxuICB9KSxcbiAgKHsgb25Nb3VzZURvd24sIHRvb2x0aXAsIGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4gKFxuICAgIDxkaXYgb25Nb3VzZURvd249e29uTW91c2VEb3dufSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17dG9vbHRpcCB8fCAnJ30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVG9vbHRpcD5cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IFdyYXBwZWRNZW51ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgY29sb3IgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IC0yLFxuICAgIHpJbmRleDogMTAwLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxuICAgIC8vIHdpZHRoOiAnMTAwJScsXG4gICAgLy8gYm94U2hhZG93OiB0aGVtZS5ib3hTaGFkb3csXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvciA9PT0gdHJ1ZSA/IHRoZW1lLmNvbG9yIDogdGhlbWUuZGFyayxcbiAgICBjb2xvcjogdGhlbWUubGlnaHQsXG4gICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMixcbiAgICBib3JkZXJCb3R0b206IDAsXG4gICAgaGFzRmxleDoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gICAgJz4gbGknOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgJz4gZGl2Jzoge1xuICAgICAgICBwYWRkaW5nWDogNSxcbiAgICAgICAgbGluZUhlaWdodDogJzI1cHgnLFxuICAgICAgICAnPiBkaXYnOiB7XG4gICAgICAgICAgcGFkZGluZ1g6IDUsXG4gICAgICAgICAgbGluZUhlaWdodDogJzI1cHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgcHJvcHMgPT4gPE1lbnUgey4uLnByb3BzfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IGVuaGFuY2UgPSB3aXRoUHJvcHNPbkNoYW5nZShbJ3BhcmVudEVsJ10sICh7IHBhcmVudEVsIH0pID0+IHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnRFbCk7XG4gIGlmICghcGFyZW50KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgdG9vbHRpcFBvc2l0aW9uID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBzY3JvbGxZID1cbiAgICB3aW5kb3cuc2Nyb2xsWSAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNjcm9sbFkgOiB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIGNvbnN0IHNjcm9sbFggPVxuICAgIHdpbmRvdy5zY3JvbGxYICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2Nyb2xsWCA6IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgY29uc3QgdG9wID0gc2Nyb2xsWSArIHRvb2x0aXBQb3NpdGlvbi50b3A7XG4gIGNvbnN0IGxlZnQgPSBzY3JvbGxYICsgdG9vbHRpcFBvc2l0aW9uLmxlZnQ7XG4gIHJldHVybiB7XG4gICAgbGVmdDogbGVmdCArIHBhcmVudC5vZmZzZXRXaWR0aCAvIDIsXG4gICAgdG9wLFxuICB9O1xufSk7XG5jb25zdCBTY3JvbGxQb3J0YWwgPSBlbmhhbmNlKCh7IGNoaWxkcmVuLCB0b3AsIGxlZnQsIGNvbG9yLCBkaXNwbGF5IH0pID0+IChcbiAgPFBvcnRhbD5cbiAgICA8V3JhcHBlZE1lbnVcbiAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgZGlzcGxheSxcbiAgICAgICAgbGVmdCxcbiAgICAgICAgLy8gdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTUwJSwgLTEwMCUsIDBweCknLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgtNTAlLCAke3RvcCAtIDI2fXB4LCAwcHgpYCxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB9fVxuICAgICAgc2VsZWN0ZWRLZXlzPXtbXX1cbiAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICAgIHRoZW1lPVwiZGFya1wiXG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvV3JhcHBlZE1lbnU+XG4gIDwvUG9ydGFsPlxuKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcbiAgY29uc3QgeyBpc09wZW5lZCwgcGFyZW50LCBjaGlsZHJlbiwgY29sb3IgfSA9IHByb3BzO1xuXG4gIGlmICghaXNPcGVuZWQpIHtcbiAgICByZXR1cm4gPGRpdiAvPjtcbiAgfVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNjcm9sbFBvcnRhbCBwYXJlbnRFbD17cGFyZW50fSBjb2xvcj17Y29sb3J9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1Njcm9sbFBvcnRhbD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UG9ydGFsPlxuICAgICAgPFdyYXBwZWRNZW51XG4gICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgc2VsZWN0ZWRLZXlzPXtbXX1cbiAgICAgICAgbW9kZT1cImhvcml6b250YWxcIlxuICAgICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1dyYXBwZWRNZW51PlxuICAgIDwvUG9ydGFsPlxuICApO1xufTtcbiJdfQ==
