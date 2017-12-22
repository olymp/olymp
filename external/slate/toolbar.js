import 'antd/lib/menu/style';
import _Menu from 'antd/lib/menu';
import 'antd/lib/tooltip/style';
import _Tooltip from 'antd/lib/tooltip';
import React from 'react';
import Portal from 'olymp-fela/portal';

import { createComponent } from 'react-fela';
import { withPropsOnChange } from 'recompose';

export var Button = createComponent(function (_ref) {
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
  return React.createElement(
    'div',
    { onMouseDown: onMouseDown, className: className },
    React.createElement(
      _Tooltip,
      { placement: 'top', title: tooltip || '' },
      children
    )
  );
}, function (p) {
  return Object.keys(p);
});

var WrappedMenu = createComponent(function (_ref3) {
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
  return React.createElement(_Menu, props);
}, function (p) {
  return Object.keys(p);
});

var enhance = withPropsOnChange(['parentEl'], function (_ref4) {
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
  return React.createElement(
    Portal,
    null,
    React.createElement(
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

var _ref6 = React.createElement('div', null);

export default (function (props) {
  var isOpened = props.isOpened,
      parent = props.parent,
      children = props.children,
      color = props.color;


  if (!isOpened) {
    return _ref6;
  }

  if (parent) {
    return React.createElement(
      ScrollPortal,
      { parentEl: parent, color: color },
      children
    );
  }

  return React.createElement(
    Portal,
    null,
    React.createElement(
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
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3Rvb2xiYXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiUG9ydGFsIiwiY3JlYXRlQ29tcG9uZW50Iiwid2l0aFByb3BzT25DaGFuZ2UiLCJCdXR0b24iLCJ0aGVtZSIsImFjdGl2ZSIsInBhZGRpbmdYIiwiZmlsbCIsImxpZ2h0IiwibGlnaHQyIiwic2l6ZSIsIm1hcmdpbkJvdHRvbSIsIm9uTW91c2VEb3duIiwidG9vbHRpcCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJXcmFwcGVkTWVudSIsImNvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJ6SW5kZXgiLCJsZWZ0IiwidHJhbnNmb3JtIiwiYmFja2dyb3VuZENvbG9yIiwiZGFyayIsInNwYWNlMiIsImJvcmRlckJvdHRvbSIsImhhc0ZsZXgiLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJwYWRkaW5nIiwibGluZUhlaWdodCIsInByb3BzIiwiZW5oYW5jZSIsInBhcmVudEVsIiwicGFyZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9vbHRpcFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2Nyb2xsWSIsIndpbmRvdyIsInVuZGVmaW5lZCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsWCIsInBhZ2VYT2Zmc2V0Iiwib2Zmc2V0V2lkdGgiLCJTY3JvbGxQb3J0YWwiLCJpc09wZW5lZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDO0FBQ0EsU0FBU0MsaUJBQVQsUUFBa0MsV0FBbEM7O0FBRUEsT0FBTyxJQUFNQyxTQUFTRixnQkFDcEI7QUFBQSxNQUFHRyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxNQUFWLFFBQVVBLE1BQVY7QUFBQSxTQUF3QjtBQUN0QkMsY0FBVSxF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TjtBQURILEtBREY7QUFLRDs7QUFFRCxTQUNFO0FBQUMsVUFBRDtBQUFBO0FBQ0U7QUFBQyxpQkFBRDtBQUFBO0FBQ0UsZUFBT00sS0FEVDtBQUVFLHNCQUFjLEVBRmhCO0FBR0UsY0FBSyxZQUhQO0FBSUUsZUFBTTtBQUpSO0FBTUdOO0FBTkg7QUFERixHQURGO0FBWUQsQ0EzQkQiLCJmaWxlIjoicGFja2FnZXMvc2xhdGUvdG9vbGJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJ29seW1wLWZlbGEvcG9ydGFsJztcbmltcG9ydCB7IE1lbnUsIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgd2l0aFByb3BzT25DaGFuZ2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgYWN0aXZlIH0pID0+ICh7XG4gICAgcGFkZGluZ1g6IDIwLFxuICAgICc+IHN2Zyc6IHtcbiAgICAgIGZpbGw6IGFjdGl2ZSA/IHRoZW1lLmxpZ2h0IDogdGhlbWUubGlnaHQyLFxuICAgICAgc2l6ZTogMTYsXG4gICAgICBtYXJnaW5Cb3R0b206IC00LFxuICAgIH0sXG4gICAgJz4gZGl2ID4gc3ZnJzoge1xuICAgICAgZmlsbDogYWN0aXZlID8gdGhlbWUubGlnaHQgOiB0aGVtZS5saWdodDIsXG4gICAgICBzaXplOiAxNixcbiAgICAgIG1hcmdpbkJvdHRvbTogLTQsXG4gICAgfSxcbiAgICAnPiBkaXY+IGRpdiA+IHN2Zyc6IHtcbiAgICAgIGZpbGw6IGFjdGl2ZSA/IHRoZW1lLmxpZ2h0IDogdGhlbWUubGlnaHQyLFxuICAgICAgc2l6ZTogMTYsXG4gICAgICBtYXJnaW5Cb3R0b206IC00LFxuICAgIH0sXG4gICAgJz4gYSA+IHN2Zyc6IHtcbiAgICAgIGZpbGw6IGFjdGl2ZSA/IHRoZW1lLmxpZ2h0IDogdGhlbWUubGlnaHQyLFxuICAgICAgc2l6ZTogMTYsXG4gICAgICBtYXJnaW5Cb3R0b206IC00LFxuICAgIH0sXG4gIH0pLFxuICAoeyBvbk1vdXNlRG93biwgdG9vbHRpcCwgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiAoXG4gICAgPGRpdiBvbk1vdXNlRG93bj17b25Nb3VzZURvd259IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPXt0b29sdGlwIHx8ICcnfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Ub29sdGlwPlxuICAgIDwvZGl2PlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgV3JhcHBlZE1lbnUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBjb2xvciB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogLTIsXG4gICAgekluZGV4OiAxMDAsXG4gICAgbGVmdDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgLy8gd2lkdGg6ICcxMDAlJyxcbiAgICAvLyBib3hTaGFkb3c6IHRoZW1lLmJveFNoYWRvdyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yID09PSB0cnVlID8gdGhlbWUuY29sb3IgOiB0aGVtZS5kYXJrLFxuICAgIGNvbG9yOiB0aGVtZS5saWdodCxcbiAgICBwYWRkaW5nWDogdGhlbWUuc3BhY2UyLFxuICAgIGJvcmRlckJvdHRvbTogMCxcbiAgICBoYXNGbGV4OiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgfSxcbiAgICAnPiBsaSc6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAnPiBkaXYnOiB7XG4gICAgICAgIHBhZGRpbmdYOiA1LFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMjVweCcsXG4gICAgICAgICc+IGRpdic6IHtcbiAgICAgICAgICBwYWRkaW5nWDogNSxcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjVweCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBwcm9wcyA9PiA8TWVudSB7Li4ucHJvcHN9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgZW5oYW5jZSA9IHdpdGhQcm9wc09uQ2hhbmdlKFsncGFyZW50RWwnXSwgKHsgcGFyZW50RWwgfSkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudEVsKTtcbiAgaWYgKCFwYXJlbnQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB0b29sdGlwUG9zaXRpb24gPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHNjcm9sbFkgPVxuICAgIHdpbmRvdy5zY3JvbGxZICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2Nyb2xsWSA6IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgY29uc3Qgc2Nyb2xsWCA9XG4gICAgd2luZG93LnNjcm9sbFggIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JvbGxYIDogd2luZG93LnBhZ2VYT2Zmc2V0O1xuICBjb25zdCB0b3AgPSBzY3JvbGxZICsgdG9vbHRpcFBvc2l0aW9uLnRvcDtcbiAgY29uc3QgbGVmdCA9IHNjcm9sbFggKyB0b29sdGlwUG9zaXRpb24ubGVmdDtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBsZWZ0ICsgcGFyZW50Lm9mZnNldFdpZHRoIC8gMixcbiAgICB0b3AsXG4gIH07XG59KTtcbmNvbnN0IFNjcm9sbFBvcnRhbCA9IGVuaGFuY2UoKHsgY2hpbGRyZW4sIHRvcCwgbGVmdCwgY29sb3IsIGRpc3BsYXkgfSkgPT4gKFxuICA8UG9ydGFsPlxuICAgIDxXcmFwcGVkTWVudVxuICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBkaXNwbGF5LFxuICAgICAgICBsZWZ0LFxuICAgICAgICAvLyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNTAlLCAtMTAwJSwgMHB4KScsXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKC01MCUsICR7dG9wIC0gMjZ9cHgsIDBweClgLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIH19XG4gICAgICBzZWxlY3RlZEtleXM9e1tdfVxuICAgICAgbW9kZT1cImhvcml6b250YWxcIlxuICAgICAgdGhlbWU9XCJkYXJrXCJcbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9XcmFwcGVkTWVudT5cbiAgPC9Qb3J0YWw+XG4pKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICBjb25zdCB7IGlzT3BlbmVkLCBwYXJlbnQsIGNoaWxkcmVuLCBjb2xvciB9ID0gcHJvcHM7XG5cbiAgaWYgKCFpc09wZW5lZCkge1xuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9XG5cbiAgaWYgKHBhcmVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2Nyb2xsUG9ydGFsIHBhcmVudEVsPXtwYXJlbnR9IGNvbG9yPXtjb2xvcn0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvU2Nyb2xsUG9ydGFsPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQb3J0YWw+XG4gICAgICA8V3JhcHBlZE1lbnVcbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICBzZWxlY3RlZEtleXM9e1tdfVxuICAgICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgIHRoZW1lPVwiZGFya1wiXG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvV3JhcHBlZE1lbnU+XG4gICAgPC9Qb3J0YWw+XG4gICk7XG59O1xuIl19
