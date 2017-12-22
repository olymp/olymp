import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'olymp-fela';

import Image from './image';

var LoaderContainer = createComponent(function (_ref2) {
  var theme = _ref2.theme;
  return {
    width: 14,
    '> i.anticon': {
      color: theme.color
    }
  };
}, 'div');

var Content = createComponent(function (_ref3) {
  var theme = _ref3.theme,
      _ref3$ellipsis = _ref3.ellipsis,
      ellipsis = _ref3$ellipsis === undefined ? true : _ref3$ellipsis;
  return {
    ellipsis: ellipsis,
    flexGrow: 1,
    opacity: theme.collapsed ? 0 : 1,
    transition: 'opacity 200ms ease-out',
    overflowY: 'hidden',
    '> small': {
      display: 'block',
      marginTop: '-' + theme.space1,
      color: theme.inverted ? theme.light2 : theme.dark2
    }
  };
}, 'div', function (_ref4) {
  var ellipsis = _ref4.ellipsis,
      props = _objectWithoutProperties(_ref4, ['ellipsis']);

  return Object.keys(props);
});

var _ref7 = React.createElement(
  Image,
  { extra: true },
  React.createElement(
    LoaderContainer,
    null,
    React.createElement(_Icon, { type: 'loading' })
  )
);

export default createComponent(function (_ref5) {
  var theme = _ref5.theme,
      large = _ref5.large,
      small = _ref5.small,
      active = _ref5.active,
      icon = _ref5.icon,
      onClick = _ref5.onClick,
      color = _ref5.color,
      disabled = _ref5.disabled,
      ellipsis = _ref5.ellipsis;
  return {
    height: ellipsis === false ? undefined : large ? 54 : small ? 32 : 40,
    flexShrink: 0,
    width: !theme.collapsed ? '100%' : large ? 54 : small ? 32 : 40,
    marginLeft: theme.collapsed && !large && 7,
    paddingLeft: !icon && theme.space3,
    display: 'flex',
    alignItems: 'center',
    cursor: !!onClick && !disabled && 'pointer',
    borderRadius: theme.collapsed ? '50%' : theme.borderRadius,
    opacity: disabled ? 0.67 : 1,
    // backgroundColor: active && theme.dark4,
    backgroundColor: color === true && theme.color || theme[color] || color || active && theme.dark4,
    onHover: {
      backgroundColor: !!onClick && !disabled && theme.dark4
    }
  };
}, function (_ref6) {
  var large = _ref6.large,
      children = _ref6.children,
      subtitle = _ref6.subtitle,
      icon = _ref6.icon,
      extra = _ref6.extra,
      _ref = _ref6._ref,
      innerRef = _ref6.innerRef,
      ref = _ref6.ref,
      color = _ref6.color,
      loading = _ref6.loading,
      onClick = _ref6.onClick,
      disabled = _ref6.disabled,
      ellipsis = _ref6.ellipsis,
      rest = _objectWithoutProperties(_ref6, ['large', 'children', 'subtitle', 'icon', 'extra', '_ref', 'innerRef', 'ref', 'color', 'loading', 'onClick', 'disabled', 'ellipsis']);

  return React.createElement(
    'div',
    _extends({}, rest, {
      onClick: disabled ? function () {} : onClick,
      ref: _ref || innerRef || ref
    }),
    !!icon && React.createElement(
      Image,
      { large: large },
      icon
    ),
    React.createElement(
      Content,
      { ellipsis: ellipsis },
      children,
      !!subtitle && React.createElement(
        'small',
        null,
        subtitle
      )
    ),
    !!extra && !loading && React.createElement(
      Image,
      { extra: true },
      extra
    ),
    loading && _ref7
  );
}, function (_ref8) {
  var active = _ref8.active,
      p = _objectWithoutProperties(_ref8, ['active']);

  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS9pdGVtLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsIkltYWdlIiwiTG9hZGVyQ29udGFpbmVyIiwidGhlbWUiLCJ3aWR0aCIsImNvbG9yIiwiQ29udGVudCIsImVsbGlwc2lzIiwiZmxleEdyb3ciLCJvcGFjaXR5IiwiY29sbGFwc2VkIiwidHJhbnNpdGlvbiIsIm92ZXJmbG93WSIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJzcGFjZTEiLCJpbnZlcnRlZCIsImxpZ2h0MiIsImRhcmsyIiwicHJvcHMiLCJPYmplY3QiLCJrZXlzIiwibGFyZ2UiLCJzbWFsbCIsImFjdGl2ZSIsImljb24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJoZWlnaHQiLCJ1bmRlZmluZWQiLCJmbGV4U2hyaW5rIiwibWFyZ2luTGVmdCIsInBhZGRpbmdMZWZ0Iiwic3BhY2UzIiwiYWxpZ25JdGVtcyIsImN1cnNvciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImRhcms0Iiwib25Ib3ZlciIsImNoaWxkcmVuIiwic3VidGl0bGUiLCJleHRyYSIsIl9yZWYiLCJpbm5lclJlZiIsInJlZiIsImxvYWRpbmciLCJyZXN0IiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDOztBQUVBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7O0FBRUEsSUFBTUMsa0JBQWtCRixnQkFDdEI7QUFBQSxNQUFHRyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxXQUFPLEVBRE87QUFFZCxtQkFBZTtBQUNiQyxhQUFPRixNQUFNRTtBQURBO0FBRkQsR0FBaEI7QUFBQSxDQURzQixFQU90QixLQVBzQixDQUF4Qjs7QUFVQSxJQUFNQyxVQUFVTixnQkFDZDtBQUFBLE1BQUdHLEtBQUgsU0FBR0EsS0FBSDtBQUFBLDZCQUFVSSxRQUFW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QUFBQSxNQVlFQyxRQVpGLFNBWUVBLFFBWkY7QUFBQSxNQWFFcEIsUUFiRixTQWFFQSxRQWJGO0FBQUEsTUFjS3dDLElBZEw7O0FBQUEsU0FnQkU7QUFBQTtBQUFBLGlCQUNNQSxJQUROO0FBRUUsZUFBU3BCLFdBQVcsWUFBTSxDQUFFLENBQW5CLEdBQXNCRCxPQUZqQztBQUdFLFdBQUtpQixRQUFRQyxRQUFSLElBQW9CQztBQUgzQjtBQUtHLEtBQUMsQ0FBQ3BCLElBQUYsSUFBVTtBQUFDLFdBQUQ7QUFBQSxRQUFPLE9BQU9ILEtBQWQ7QUFBc0JHO0FBQXRCLEtBTGI7QUFNRTtBQUFDLGFBQUQ7QUFBQSxRQUFTLFVBQVVsQixRQUFuQjtBQUNHaUMsY0FESDtBQUVHLE9BQUMsQ0FBQ0MsUUFBRixJQUFjO0FBQUE7QUFBQTtBQUFRQTtBQUFSO0FBRmpCLEtBTkY7QUFVRyxLQUFDLENBQUNDLEtBQUYsSUFBVyxDQUFDSSxPQUFaLElBQXVCO0FBQUMsV0FBRDtBQUFBLFFBQU8sV0FBUDtBQUFjSjtBQUFkLEtBVjFCO0FBV0dJO0FBWEgsR0FoQkY7QUFBQSxDQXRCYSxFQTBEYjtBQUFBLE1BQUd0QixNQUFILFNBQUdBLE1BQUg7QUFBQSxNQUFjd0IsQ0FBZDs7QUFBQSxTQUFzQjVCLE9BQU9DLElBQVAsQ0FBWTJCLENBQVosQ0FBdEI7QUFBQSxDQTFEYSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbWVudS9pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnO1xuXG5jb25zdCBMb2FkZXJDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgd2lkdGg6IDE0LFxuICAgICc+IGkuYW50aWNvbic6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4pO1xuXG5jb25zdCBDb250ZW50ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgZWxsaXBzaXMgPSB0cnVlIH0pID0+ICh7XG4gICAgZWxsaXBzaXMsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgb3BhY2l0eTogdGhlbWUuY29sbGFwc2VkID8gMCA6IDEsXG4gICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMjAwbXMgZWFzZS1vdXQnLFxuICAgIG92ZXJmbG93WTogJ2hpZGRlbicsXG4gICAgJz4gc21hbGwnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbWFyZ2luVG9wOiBgLSR7dGhlbWUuc3BhY2UxfWAsXG4gICAgICBjb2xvcjogdGhlbWUuaW52ZXJ0ZWQgPyB0aGVtZS5saWdodDIgOiB0aGVtZS5kYXJrMixcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IGVsbGlwc2lzLCAuLi5wcm9wcyB9KSA9PiBPYmplY3Qua2V5cyhwcm9wcyksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBsYXJnZSwgc21hbGwsIGFjdGl2ZSwgaWNvbiwgb25DbGljaywgY29sb3IsIGRpc2FibGVkLCBlbGxpcHNpcyB9KSA9PiAoe1xuICAgIGhlaWdodDogZWxsaXBzaXMgPT09IGZhbHNlID8gdW5kZWZpbmVkIDogKGxhcmdlID8gNTQgOiBzbWFsbCA/IDMyIDogNDApLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgd2lkdGg6ICF0aGVtZS5jb2xsYXBzZWQgPyAnMTAwJScgOiBsYXJnZSA/IDU0IDogc21hbGwgPyAzMiA6IDQwLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLmNvbGxhcHNlZCAmJiAhbGFyZ2UgJiYgNyxcbiAgICBwYWRkaW5nTGVmdDogIWljb24gJiYgdGhlbWUuc3BhY2UzLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBjdXJzb3I6ICEhb25DbGljayAmJiAhZGlzYWJsZWQgJiYgJ3BvaW50ZXInLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuY29sbGFwc2VkID8gJzUwJScgOiB0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgb3BhY2l0eTogZGlzYWJsZWQgPyAwLjY3IDogMSxcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZSAmJiB0aGVtZS5kYXJrNCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAoY29sb3IgPT09IHRydWUgJiYgdGhlbWUuY29sb3IpIHx8XG4gICAgICB0aGVtZVtjb2xvcl0gfHxcbiAgICAgIGNvbG9yIHx8XG4gICAgICAoYWN0aXZlICYmIHRoZW1lLmRhcms0KSxcbiAgICBvbkhvdmVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICEhb25DbGljayAmJiAhZGlzYWJsZWQgJiYgdGhlbWUuZGFyazQsXG4gICAgfSxcbiAgfSksXG4gICh7XG4gICAgbGFyZ2UsXG4gICAgY2hpbGRyZW4sXG4gICAgc3VidGl0bGUsXG4gICAgaWNvbixcbiAgICBleHRyYSxcbiAgICBfcmVmLFxuICAgIGlubmVyUmVmLFxuICAgIHJlZixcbiAgICBjb2xvcixcbiAgICBsb2FkaW5nLFxuICAgIG9uQ2xpY2ssXG4gICAgZGlzYWJsZWQsXG4gICAgZWxsaXBzaXMsXG4gICAgLi4ucmVzdFxuICB9KSA9PiAoXG4gICAgPGRpdlxuICAgICAgey4uLnJlc3R9XG4gICAgICBvbkNsaWNrPXtkaXNhYmxlZCA/ICgpID0+IHt9IDogb25DbGlja31cbiAgICAgIHJlZj17X3JlZiB8fCBpbm5lclJlZiB8fCByZWZ9XG4gICAgPlxuICAgICAgeyEhaWNvbiAmJiA8SW1hZ2UgbGFyZ2U9e2xhcmdlfT57aWNvbn08L0ltYWdlPn1cbiAgICAgIDxDb250ZW50IGVsbGlwc2lzPXtlbGxpcHNpc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgeyEhc3VidGl0bGUgJiYgPHNtYWxsPntzdWJ0aXRsZX08L3NtYWxsPn1cbiAgICAgIDwvQ29udGVudD5cbiAgICAgIHshIWV4dHJhICYmICFsb2FkaW5nICYmIDxJbWFnZSBleHRyYT57ZXh0cmF9PC9JbWFnZT59XG4gICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgIDxJbWFnZSBleHRyYT5cbiAgICAgICAgICA8TG9hZGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgPEljb24gdHlwZT1cImxvYWRpbmdcIiAvPlxuICAgICAgICAgIDwvTG9hZGVyQ29udGFpbmVyPlxuICAgICAgICA8L0ltYWdlPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgKHsgYWN0aXZlLCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbiJdfQ==
