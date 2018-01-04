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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9pdGVtLmVzNiJdLCJuYW1lcyI6WyJMb2FkZXJDb250YWluZXIiLCJ0aGVtZSIsIndpZHRoIiwiY29sb3IiLCJDb250ZW50IiwiZWxsaXBzaXMiLCJmbGV4R3JvdyIsIm9wYWNpdHkiLCJjb2xsYXBzZWQiLCJ0cmFuc2l0aW9uIiwib3ZlcmZsb3dZIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsInNwYWNlMSIsImludmVydGVkIiwibGlnaHQyIiwiZGFyazIiLCJwcm9wcyIsIk9iamVjdCIsImtleXMiLCJsYXJnZSIsInNtYWxsIiwiYWN0aXZlIiwiaWNvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImhlaWdodCIsInVuZGVmaW5lZCIsImZsZXhTaHJpbmsiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJzcGFjZTMiLCJhbGlnbkl0ZW1zIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiZGFyazQiLCJvbkhvdmVyIiwiY2hpbGRyZW4iLCJzdWJ0aXRsZSIsImV4dHJhIiwiX3JlZiIsImlubmVyUmVmIiwicmVmIiwibG9hZGluZyIsInJlc3QiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLGdDQUN0QjtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLFdBQU8sRUFETztBQUVkLG1CQUFlO0FBQ2JDLGFBQU9GLE1BQU1FO0FBREE7QUFGRCxHQUFoQjtBQUFBLENBRHNCLEVBT3RCLEtBUHNCLENBQXhCOztBQVVBLElBQU1DLFVBQVUsZ0NBQ2Q7QUFBQSxNQUFHSCxLQUFILFNBQUdBLEtBQUg7QUFBQSw2QkFBVUksUUFBVjtBQUFBLE1BQVVBLFFBQVYsa0NBQXFCLElBQXJCO0FBQUEsU0FBaUM7QUFDL0JBLHNCQUQrQjtBQUUvQkMsY0FBVSxDQUZxQjtBQUcvQkMsYUFBU04sTUFB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QSxJQUROO0FBRUUsZUFBU3BCLFdBQVcsWUFBTSxDQUFFLENBQW5CLEdBQXNCRCxPQUZqQztBQUdFLFdBQUtpQixRQUFRQyxRQUFSLElBQW9CQztBQUgzQjtBQUtHLEtBQUMsQ0FBQ3BCLElBQUYsSUFBVTtBQUFBO0FBQUEsUUFBTyxPQUFPSCxLQUFkO0FBQXNCRztBQUF0QixLQUxiO0FBTUU7QUFBQyxhQUFEO0FBQUEsUUFBUyxVQUFVbEIsUUFBbkI7QUFDR2lDLGNBREg7QUFFRyxPQUFDLENBQUNDLFFBQUYsSUFBYztBQUFBO0FBQUE7QUFBUUE7QUFBUjtBQUZqQixLQU5GO0FBVUcsS0FBQyxDQUFDQyxLQUFGLElBQVcsQ0FBQ0ksT0FBWixJQUF1QjtBQUFBO0FBQUEsUUFBTyxXQUFQO0FBQWNKO0FBQWQsS0FWMUI7QUFXR0k7QUFYSCxHQWhCRjtBQUFBLENBdEJhLEVBMERiO0FBQUEsTUFBR3RCLE1BQUgsU0FBR0EsTUFBSDtBQUFBLE1BQWN3QixDQUFkOztBQUFBLFNBQXNCNUIsT0FBT0MsSUFBUCxDQUFZMkIsQ0FBWixDQUF0QjtBQUFBLENBMURhLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9tZW51L2l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5cbmNvbnN0IExvYWRlckNvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICB3aWR0aDogMTQsXG4gICAgJz4gaS5hbnRpY29uJzoge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2Jyxcbik7XG5cbmNvbnN0IENvbnRlbnQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBlbGxpcHNpcyA9IHRydWUgfSkgPT4gKHtcbiAgICBlbGxpcHNpcyxcbiAgICBmbGV4R3JvdzogMSxcbiAgICBvcGFjaXR5OiB0aGVtZS5jb2xsYXBzZWQgPyAwIDogMSxcbiAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAyMDBtcyBlYXNlLW91dCcsXG4gICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcbiAgICAnPiBzbWFsbCc6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBtYXJnaW5Ub3A6IGAtJHt0aGVtZS5zcGFjZTF9YCxcbiAgICAgIGNvbG9yOiB0aGVtZS5pbnZlcnRlZCA/IHRoZW1lLmxpZ2h0MiA6IHRoZW1lLmRhcmsyLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgKHsgZWxsaXBzaXMsIC4uLnByb3BzIH0pID0+IE9iamVjdC5rZXlzKHByb3BzKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGxhcmdlLCBzbWFsbCwgYWN0aXZlLCBpY29uLCBvbkNsaWNrLCBjb2xvciwgZGlzYWJsZWQsIGVsbGlwc2lzIH0pID0+ICh7XG4gICAgaGVpZ2h0OiBlbGxpcHNpcyA9PT0gZmFsc2UgPyB1bmRlZmluZWQgOiAobGFyZ2UgPyA1NCA6IHNtYWxsID8gMzIgOiA0MCksXG4gICAgZmxleFNocmluazogMCxcbiAgICB3aWR0aDogIXRoZW1lLmNvbGxhcHNlZCA/ICcxMDAlJyA6IGxhcmdlID8gNTQgOiBzbWFsbCA/IDMyIDogNDAsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuY29sbGFwc2VkICYmICFsYXJnZSAmJiA3LFxuICAgIHBhZGRpbmdMZWZ0OiAhaWNvbiAmJiB0aGVtZS5zcGFjZTMsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGN1cnNvcjogISFvbkNsaWNrICYmICFkaXNhYmxlZCAmJiAncG9pbnRlcicsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5jb2xsYXBzZWQgPyAnNTAlJyA6IHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICBvcGFjaXR5OiBkaXNhYmxlZCA/IDAuNjcgOiAxLFxuICAgIC8vIGJhY2tncm91bmRDb2xvcjogYWN0aXZlICYmIHRoZW1lLmRhcms0LFxuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgIChjb2xvciA9PT0gdHJ1ZSAmJiB0aGVtZS5jb2xvcikgfHxcbiAgICAgIHRoZW1lW2NvbG9yXSB8fFxuICAgICAgY29sb3IgfHxcbiAgICAgIChhY3RpdmUgJiYgdGhlbWUuZGFyazQpLFxuICAgIG9uSG92ZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogISFvbkNsaWNrICYmICFkaXNhYmxlZCAmJiB0aGVtZS5kYXJrNCxcbiAgICB9LFxuICB9KSxcbiAgKHtcbiAgICBsYXJnZSxcbiAgICBjaGlsZHJlbixcbiAgICBzdWJ0aXRsZSxcbiAgICBpY29uLFxuICAgIGV4dHJhLFxuICAgIF9yZWYsXG4gICAgaW5uZXJSZWYsXG4gICAgcmVmLFxuICAgIGNvbG9yLFxuICAgIGxvYWRpbmcsXG4gICAgb25DbGljayxcbiAgICBkaXNhYmxlZCxcbiAgICBlbGxpcHNpcyxcbiAgICAuLi5yZXN0XG4gIH0pID0+IChcbiAgICA8ZGl2XG4gICAgICB7Li4ucmVzdH1cbiAgICAgIG9uQ2xpY2s9e2Rpc2FibGVkID8gKCkgPT4ge30gOiBvbkNsaWNrfVxuICAgICAgcmVmPXtfcmVmIHx8IGlubmVyUmVmIHx8IHJlZn1cbiAgICA+XG4gICAgICB7ISFpY29uICYmIDxJbWFnZSBsYXJnZT17bGFyZ2V9PntpY29ufTwvSW1hZ2U+fVxuICAgICAgPENvbnRlbnQgZWxsaXBzaXM9e2VsbGlwc2lzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7ISFzdWJ0aXRsZSAmJiA8c21hbGw+e3N1YnRpdGxlfTwvc21hbGw+fVxuICAgICAgPC9Db250ZW50PlxuICAgICAgeyEhZXh0cmEgJiYgIWxvYWRpbmcgJiYgPEltYWdlIGV4dHJhPntleHRyYX08L0ltYWdlPn1cbiAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgPEltYWdlIGV4dHJhPlxuICAgICAgICAgIDxMb2FkZXJDb250YWluZXI+XG4gICAgICAgICAgICA8SWNvbiB0eXBlPVwibG9hZGluZ1wiIC8+XG4gICAgICAgICAgPC9Mb2FkZXJDb250YWluZXI+XG4gICAgICAgIDwvSW1hZ2U+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApLFxuICAoeyBhY3RpdmUsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuIl19
