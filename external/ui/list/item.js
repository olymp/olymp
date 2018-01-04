'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympRouter = require('olymp-router');

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = (0, _olympFela.createComponent)(function (_ref) {
  var color = _ref.color;
  return {
    fontWeight: 'bold',
    color: color
  };
}, 'div', []);

var Content = (0, _olympFela.createComponent)(function (_ref2) {
  var active = _ref2.active,
      disabled = _ref2.disabled,
      theme = _ref2.theme;
  return {
    hasFlex: {
      display: 'flex',
      alignItems: 'center'
    },
    padding: theme.space1,
    width: '100%',
    maxWidth: '100%',
    color: disabled ? theme.dark3 : theme.dark1,
    background: active && 'rgba(0, 0, 0, 0.03)',
    lineHeight: '20px',
    borderBottom: (0, _olympFela.border)(theme),
    cursor: disabled ? 'not-allowed' : 'pointer',
    '> .content': {
      padding: theme.space1,
      maxWidth: '100%',
      hasFlex: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 0%'
      }
    },
    '> .image': {
      opacity: disabled ? 0.667 : 1,
      '> *': {
        borderRadius: '50%'
      }
    },
    '> .icon': {},
    onHover: !active && !disabled && {
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      color: 'rgba(0, 0, 0, 0.85)'
    },
    onActive: {
      color: 'rgba(0, 0, 0, 0.85)'
    },
    onFocus: {
      color: 'rgba(0, 0, 0, 0.85)',
      boxShadow: '0 0 3px 1px rgba(63, 81, 181, 0.19)'
    }
  };
}, function (_ref3) {
  var image = _ref3.image,
      color = _ref3.color,
      label = _ref3.label,
      description = _ref3.description,
      className = _ref3.className,
      disabled = _ref3.disabled,
      icon = _ref3.icon;
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement(
        Header,
        { color: color },
        label
      ),
      description
    ),
    image && _react2.default.createElement(
      'div',
      { className: 'image' },
      image && typeof image === 'string' && _react2.default.createElement('img', { src: image, width: 49, height: 49 }),
      image && typeof image !== 'string' && image
    ),
    !image && !disabled ? _react2.default.createElement(
      'div',
      { className: 'icon' },
      _react2.default.createElement(_icon2.default, { type: icon || 'right' })
    ) : null
  );
}, function (p) {
  return Object.keys(p);
});

exports.default = function (_ref4) {
  var className = _ref4.className,
      image = _ref4.image,
      color = _ref4.color,
      label = _ref4.label,
      description = _ref4.description,
      onClick = _ref4.onClick,
      active = _ref4.active,
      disabled = _ref4.disabled,
      icon = _ref4.icon,
      to = _ref4.to,
      updateQuery = _ref4.updateQuery;
  return onClick || disabled ? _react2.default.createElement(
    'a',
    { className: className, onClick: disabled ? function () {} : onClick },
    _react2.default.createElement(Content, {
      image: image,
      color: color,
      label: label,
      description: description,
      active: active,
      disabled: disabled,
      icon: icon
    })
  ) : _react2.default.createElement(
    _olympRouter.Link,
    {
      className: className,
      to: to,
      updateQuery: updateQuery,
      disabled: disabled
    },
    _react2.default.createElement(Content, {
      image: image,
      color: color,
      label: label,
      description: description,
      active: active,
      disabled: disabled,
      icon: icon
    })
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2xpc3QvaXRlbS5lczYiXSwibmFtZXMiOlsiSGVhZGVyIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiQ29udGVudCIsImFjdGl2ZSIsImRpc2FibGVkIiwidGhlbWUiLCJoYXNGbGV4IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwic3BhY2UxIiwid2lkdGgiLCJtYXhXaWR0aCIsImRhcmszIiwiZGFyazEiLCJiYWNrZ3JvdW5kIiwibGluZUhlaWdodCIsImJvcmRlckJvdHRvbSIsImN1cnNvciIsImZsZXhEaXJlY3Rpb24iLCJmbGV4Iiwib3BhY2l0eSIsImJvcmRlclJhZGl1cyIsIm9uSG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkFjdGl2ZSIsIm9uRm9jdXMiLCJib3hTaGFkb3ciLCJpbWFnZSIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJjbGFzc05hbWUiLCJpY29uIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJvbkNsaWNrIiwidG8iLCJ1cGRhdGVRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUdBLElBQU1BLFNBQVMsZ0NBQ2I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxnQkFBWSxNQURFO0FBRWREO0FBRmMsR0FBaEI7QUFBQSxDQURhLEVBS2IsS0FMYSxFQU1iLEVBTmEsQ0FBZjs7QUFTQSxJQUFNRSxVQUFVLGdDQUNkO0FBQUEsTUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsTUFBV0MsUUFBWCxTQUFXQSxRQUFYO0FBQUEsTUFBcUJDLEtBQXJCLFNBQXFCQSxLQUFyQjtBQUFBLFNBQWtDO0FBQ2hDQyxhQUFTO0FBQ1BDLGVBQVMsTUFERjtBQUVQQyxrQkFBWTtBQUZMLEtBRHVCO0FBS2hDQyxhQUFTSixNQUFNSyxNQUxpQjtBQU1oQ0MsV0FBTyxNQU55QjtBQU9oQ0MsY0FBVSxNQVBzQjtBQVFoQ1osV0FBT0ksV0FBV0Ms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S0UsY0FBUTNCLE1BTFY7QUFNRSxnQkFBVUMsUUFOWjtBQU9FLFlBQU00QjtBQVBSO0FBREYsR0FERixHQWFFO0FBQUE7QUFBQTtBQUNFLGlCQUFXRCxTQURiO0FBRUUsVUFBSU0sRUFGTjtBQUdFLG1CQUFhQyxXQUhmO0FBSUUsZ0JBQVVsQztBQUpaO0FBTUUsa0NBQUMsT0FBRDtBQUNFLGFBQU93QixLQURUO0FBRUUsYUFBTzVCLEtBRlQ7QUFHRSxhQUFPNkIsS0FIVDtBQUlFLG1CQUFhQyxXQUpmO0FBS0UsY0FBUTNCLE1BTFY7QUFNRSxnQkFBVUMsUUFOWjtBQU9FLFlBQU00QjtBQVBSO0FBTkYsR0ExQlc7QUFBQSxDIiwiZmlsZSI6ImV4dGVybmFsL3VpL2xpc3QvaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCwgYm9yZGVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IEhlYWRlciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgY29sb3IgfSkgPT4gKHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgY29sb3IsXG4gIH0pLFxuICAnZGl2JyxcbiAgW10sXG4pO1xuXG5jb25zdCBDb250ZW50ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyBhY3RpdmUsIGRpc2FibGVkLCB0aGVtZSB9KSA9PiAoe1xuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2UxLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBjb2xvcjogZGlzYWJsZWQgPyB0aGVtZS5kYXJrMyA6IHRoZW1lLmRhcmsxLFxuICAgIGJhY2tncm91bmQ6IGFjdGl2ZSAmJiAncmdiYSgwLCAwLCAwLCAwLjAzKScsXG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIGJvcmRlckJvdHRvbTogYm9yZGVyKHRoZW1lKSxcbiAgICBjdXJzb3I6IGRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgICAnPiAuY29udGVudCc6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNlMSxcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICBoYXNGbGV4OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGZsZXg6ICcxIDEgMCUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICc+IC5pbWFnZSc6IHtcbiAgICAgIG9wYWNpdHk6IGRpc2FibGVkID8gMC42NjcgOiAxLFxuICAgICAgJz4gKic6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnPiAuaWNvbic6IHt9LFxuICAgIG9uSG92ZXI6ICFhY3RpdmUgJiZcbiAgICAgICFkaXNhYmxlZCAmJiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wMyknLFxuICAgICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC44NSknLFxuICAgICAgfSxcbiAgICBvbkFjdGl2ZToge1xuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgICB9LFxuICAgIG9uRm9jdXM6IHtcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg1KScsXG4gICAgICBib3hTaGFkb3c6ICcwIDAgM3B4IDFweCByZ2JhKDYzLCA4MSwgMTgxLCAwLjE5KScsXG4gICAgfSxcbiAgfSksXG4gICh7IGltYWdlLCBjb2xvciwgbGFiZWwsIGRlc2NyaXB0aW9uLCBjbGFzc05hbWUsIGRpc2FibGVkLCBpY29uIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8SGVhZGVyIGNvbG9yPXtjb2xvcn0+e2xhYmVsfTwvSGVhZGVyPlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L2Rpdj5cblxuICAgICAge2ltYWdlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgIHtpbWFnZSAmJlxuICAgICAgICAgICAgdHlwZW9mIGltYWdlID09PSAnc3RyaW5nJyAmJiAoXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gd2lkdGg9ezQ5fSBoZWlnaHQ9ezQ5fSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICB7aW1hZ2UgJiYgdHlwZW9mIGltYWdlICE9PSAnc3RyaW5nJyAmJiBpbWFnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7IWltYWdlICYmICFkaXNhYmxlZCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgPEljb24gdHlwZT17aWNvbiB8fCAncmlnaHQnfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgY2xhc3NOYW1lLFxuICBpbWFnZSxcbiAgY29sb3IsXG4gIGxhYmVsLFxuICBkZXNjcmlwdGlvbixcbiAgb25DbGljayxcbiAgYWN0aXZlLFxuICBkaXNhYmxlZCxcbiAgaWNvbixcbiAgdG8sXG4gIHVwZGF0ZVF1ZXJ5LFxufSkgPT5cbiAgb25DbGljayB8fCBkaXNhYmxlZCA/IChcbiAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17ZGlzYWJsZWQgPyAoKSA9PiB7fSA6IG9uQ2xpY2t9PlxuICAgICAgPENvbnRlbnRcbiAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICBhY3RpdmU9e2FjdGl2ZX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBpY29uPXtpY29ufVxuICAgICAgLz5cbiAgICA8L2E+XG4gICkgOiAoXG4gICAgPExpbmtcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgdG89e3RvfVxuICAgICAgdXBkYXRlUXVlcnk9e3VwZGF0ZVF1ZXJ5fVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgID5cbiAgICAgIDxDb250ZW50XG4gICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgYWN0aXZlPXthY3RpdmV9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgIC8+XG4gICAgPC9MaW5rPlxuICApO1xuIl19
