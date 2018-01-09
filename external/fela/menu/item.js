'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LoaderContainer = (0, _olympFela.createComponent)(function (_ref2) {
  var theme = _ref2.theme;
  return {
    width: 14,
    '> i.anticon': {
      color: theme.color
    }
  };
}, 'div');

var Content = (0, _olympFela.createComponent)(function (_ref3) {
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

var _ref7 = _react2.default.createElement(
  _image2.default,
  { extra: true },
  _react2.default.createElement(
    LoaderContainer,
    null,
    _react2.default.createElement(_icon2.default, { type: 'loading' })
  )
);

exports.default = (0, _olympFela.createComponent)(function (_ref5) {
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
    backgroundColor: color === true && theme.color || theme[color] || color || active && theme.dark5,
    onHover: {
      backgroundColor: !!onClick && !disabled && (color === true && theme.color || theme[color] || color || theme.dark4)
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

  return _react2.default.createElement(
    'div',
    _extends({}, rest, {
      onClick: disabled ? function () {} : onClick,
      ref: _ref || innerRef || ref
    }),
    !!icon && _react2.default.createElement(
      _image2.default,
      { large: large },
      icon
    ),
    _react2.default.createElement(
      Content,
      { ellipsis: ellipsis },
      children,
      !!subtitle && _react2.default.createElement(
        'small',
        null,
        subtitle
      )
    ),
    !!extra && !loading && _react2.default.createElement(
      _image2.default,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9pdGVtLmVzNiJdLCJuYW1lcyI6WyJMb2FkZXJDb250YWluZXIiLCJ0aGVtZSIsIndpZHRoIiwiY29sb3IiLCJDb250ZW50IiwiZWxsaXBzaXMiLCJmbGV4R3JvdyIsIm9wYWNpdHkiLCJjb2xsYXBzZWQiLCJ0cmFuc2l0aW9uIiwib3ZlcmZsb3dZIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsInNwYWNlMSIsImludmVydGVkIiwibGlnaHQyIiwiZGFyazIiLCJwcm9wcyIsIk9iamVjdCIsImtleXMiLCJsYXJnZSIsInNtYWxsIiwiYWN0aXZlIiwiaWNvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImhlaWdodCIsInVuZGVmaW5lZCIsImZsZXhTaHJpbmsiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJzcGFjZTMiLCJhbGlnbkl0ZW1zIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiZGFyazUiLCJvbkhvdmVyIiwiZGFyazQiLCJjaGlsZHJlbiIsInN1YnRpdGxlIiwiZXh0cmEiLCJfcmVmIiwiaW5uZXJSZWYiLCJyZWYiLCJsb2FkaW5nIiwicmVzdCIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsZ0NBQ3RCO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDZEMsV0FBTyxFQURPO0FBRWQsbUJBQWU7QUFDYkMsYUFBT0YsTUFBTUU7QUFEQTtBQUZELEdBQWhCO0FBQUEsQ0FEc0IsRUFPdEIsS0FQc0IsQ0FBeEI7O0FBVUEsSUFBTUMsVUFBVSxnQ0FDZDtBQUFBLE1BQUdILEtBQUgsU0FBR0EsS0FBSDtBQUFBLDZCQUFVSSxRQUFWO0FBQUEsTUFBVUEsUUFBVixrQ0FBcUIsSUFBckI7QUFBQSxTQUFpQztBQUMvQkEsc0JBRCtCO0FBRS9CQyxjQUFVLENBRnFCO0FBRy9CQyxh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QUFBQSxTQWdCRTtBQUFBO0FBQUEsaUJBQ01BLElBRE47QUFFRSxlQUFTckIsV0FBVyxZQUFNLENBQUUsQ0FBbkIsR0FBc0JELE9BRmpDO0FBR0UsV0FBS2tCLFFBQVFDLFFBQVIsSUFBb0JDO0FBSDNCO0FBS0csS0FBQyxDQUFDckIsSUFBRixJQUFVO0FBQUE7QUFBQSxRQUFPLE9BQU9ILEtBQWQ7QUFBc0JHO0FBQXRCLEtBTGI7QUFNRTtBQUFDLGFBQUQ7QUFBQSxRQUFTLFVBQVVsQixRQUFuQjtBQUNHa0MsY0FESDtBQUVHLE9BQUMsQ0FBQ0MsUUFBRixJQUFjO0FBQUE7QUFBQTtBQUFRQTtBQUFSO0FBRmpCLEtBTkY7QUFVRyxLQUFDLENBQUNDLEtBQUYsSUFBVyxDQUFDSSxPQUFaLElBQXVCO0FBQUE7QUFBQSxRQUFPLFdBQVA7QUFBY0o7QUFBZCxLQVYxQjtBQVdHSTtBQVhILEdBaEJGO0FBQUEsQ0FyQ2EsRUF5RWI7QUFBQSxNQUFHdkIsTUFBSCxTQUFHQSxNQUFIO0FBQUEsTUFBY3lCLENBQWQ7O0FBQUEsU0FBc0I3QixPQUFPQyxJQUFQLENBQVk0QixDQUFaLENBQXRCO0FBQUEsQ0F6RWEsQyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL21lbnUvaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdhbnRkJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2ltYWdlJztcblxuY29uc3QgTG9hZGVyQ29udGFpbmVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHdpZHRoOiAxNCxcbiAgICAnPiBpLmFudGljb24nOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JcbiAgICB9XG4gIH0pLFxuICAnZGl2J1xuKTtcblxuY29uc3QgQ29udGVudCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGVsbGlwc2lzID0gdHJ1ZSB9KSA9PiAoe1xuICAgIGVsbGlwc2lzLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIG9wYWNpdHk6IHRoZW1lLmNvbGxhcHNlZCA/IDAgOiAxLFxuICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDIwMG1zIGVhc2Utb3V0JyxcbiAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxuICAgICc+IHNtYWxsJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG1hcmdpblRvcDogYC0ke3RoZW1lLnNwYWNlMX1gLFxuICAgICAgY29sb3I6IHRoZW1lLmludmVydGVkID8gdGhlbWUubGlnaHQyIDogdGhlbWUuZGFyazJcbiAgICB9XG4gIH0pLFxuICAnZGl2JyxcbiAgKHsgZWxsaXBzaXMsIC4uLnByb3BzIH0pID0+IE9iamVjdC5rZXlzKHByb3BzKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoe1xuICAgIHRoZW1lLFxuICAgIGxhcmdlLFxuICAgIHNtYWxsLFxuICAgIGFjdGl2ZSxcbiAgICBpY29uLFxuICAgIG9uQ2xpY2ssXG4gICAgY29sb3IsXG4gICAgZGlzYWJsZWQsXG4gICAgZWxsaXBzaXNcbiAgfSkgPT4gKHtcbiAgICBoZWlnaHQ6IGVsbGlwc2lzID09PSBmYWxzZSA/IHVuZGVmaW5lZCA6IGxhcmdlID8gNTQgOiBzbWFsbCA/IDMyIDogNDAsXG4gICAgZmxleFNocmluazogMCxcbiAgICB3aWR0aDogIXRoZW1lLmNvbGxhcHNlZCA/ICcxMDAlJyA6IGxhcmdlID8gNTQgOiBzbWFsbCA/IDMyIDogNDAsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuY29sbGFwc2VkICYmICFsYXJnZSAmJiA3LFxuICAgIHBhZGRpbmdMZWZ0OiAhaWNvbiAmJiB0aGVtZS5zcGFjZTMsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGN1cnNvcjogISFvbkNsaWNrICYmICFkaXNhYmxlZCAmJiAncG9pbnRlcicsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5jb2xsYXBzZWQgPyAnNTAlJyA6IHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICBvcGFjaXR5OiBkaXNhYmxlZCA/IDAuNjcgOiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgIChjb2xvciA9PT0gdHJ1ZSAmJiB0aGVtZS5jb2xvcikgfHxcbiAgICAgIHRoZW1lW2NvbG9yXSB8fFxuICAgICAgY29sb3IgfHxcbiAgICAgIChhY3RpdmUgJiYgdGhlbWUuZGFyazUpLFxuICAgIG9uSG92ZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgISFvbkNsaWNrICYmXG4gICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAoKGNvbG9yID09PSB0cnVlICYmIHRoZW1lLmNvbG9yKSB8fFxuICAgICAgICAgIHRoZW1lW2NvbG9yXSB8fFxuICAgICAgICAgIGNvbG9yIHx8XG4gICAgICAgICAgdGhlbWUuZGFyazQpXG4gICAgfVxuICB9KSxcbiAgKHtcbiAgICBsYXJnZSxcbiAgICBjaGlsZHJlbixcbiAgICBzdWJ0aXRsZSxcbiAgICBpY29uLFxuICAgIGV4dHJhLFxuICAgIF9yZWYsXG4gICAgaW5uZXJSZWYsXG4gICAgcmVmLFxuICAgIGNvbG9yLFxuICAgIGxvYWRpbmcsXG4gICAgb25DbGljayxcbiAgICBkaXNhYmxlZCxcbiAgICBlbGxpcHNpcyxcbiAgICAuLi5yZXN0XG4gIH0pID0+IChcbiAgICA8ZGl2XG4gICAgICB7Li4ucmVzdH1cbiAgICAgIG9uQ2xpY2s9e2Rpc2FibGVkID8gKCkgPT4ge30gOiBvbkNsaWNrfVxuICAgICAgcmVmPXtfcmVmIHx8IGlubmVyUmVmIHx8IHJlZn1cbiAgICA+XG4gICAgICB7ISFpY29uICYmIDxJbWFnZSBsYXJnZT17bGFyZ2V9PntpY29ufTwvSW1hZ2U+fVxuICAgICAgPENvbnRlbnQgZWxsaXBzaXM9e2VsbGlwc2lzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7ISFzdWJ0aXRsZSAmJiA8c21hbGw+e3N1YnRpdGxlfTwvc21hbGw+fVxuICAgICAgPC9Db250ZW50PlxuICAgICAgeyEhZXh0cmEgJiYgIWxvYWRpbmcgJiYgPEltYWdlIGV4dHJhPntleHRyYX08L0ltYWdlPn1cbiAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgPEltYWdlIGV4dHJhPlxuICAgICAgICAgIDxMb2FkZXJDb250YWluZXI+XG4gICAgICAgICAgICA8SWNvbiB0eXBlPVwibG9hZGluZ1wiIC8+XG4gICAgICAgICAgPC9Mb2FkZXJDb250YWluZXI+XG4gICAgICAgIDwvSW1hZ2U+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApLFxuICAoeyBhY3RpdmUsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocClcbik7XG4iXX0=
