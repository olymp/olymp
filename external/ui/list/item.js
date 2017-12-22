import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import React from 'react';
import { Link } from 'olymp-router';
import { createComponent, border } from 'olymp-fela';


var Header = createComponent(function (_ref) {
  var color = _ref.color;
  return {
    fontWeight: 'bold',
    color: color
  };
}, 'div', []);

var Content = createComponent(function (_ref2) {
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
    borderBottom: border(theme),
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
  return React.createElement(
    'div',
    { className: className },
    React.createElement(
      'div',
      { className: 'content' },
      React.createElement(
        Header,
        { color: color },
        label
      ),
      description
    ),
    image && React.createElement(
      'div',
      { className: 'image' },
      image && typeof image === 'string' && React.createElement('img', { src: image, width: 49, height: 49 }),
      image && typeof image !== 'string' && image
    ),
    !image && !disabled ? React.createElement(
      'div',
      { className: 'icon' },
      React.createElement(_Icon, { type: icon || 'right' })
    ) : null
  );
}, function (p) {
  return Object.keys(p);
});

export default (function (_ref4) {
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
  return onClick || disabled ? React.createElement(
    'a',
    { className: className, onClick: disabled ? function () {} : onClick },
    React.createElement(Content, {
      image: image,
      color: color,
      label: label,
      description: description,
      active: active,
      disabled: disabled,
      icon: icon
    })
  ) : React.createElement(
    Link,
    {
      className: className,
      to: to,
      updateQuery: updateQuery,
      disabled: disabled
    },
    React.createElement(Content, {
      image: image,
      color: color,
      label: label,
      description: description,
      active: active,
      disabled: disabled,
      icon: icon
    })
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2xpc3QvaXRlbS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiY3JlYXRlQ29tcG9uZW50IiwiYm9yZGVyIiwiSGVhZGVyIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiQ29udGVudCIsImFjdGl2ZSIsImRpc2FibGVkIiwidGhlbWUiLCJoYXNGbGV4IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwic3BhY2UxIiwid2lkdGgiLCJtYXhXaWR0aCIsImRhcmszIiwiZGFyazEiLCJiYWNrZ3JvdW5kIiwibGluZUhlaWdodCIsImJvcmRlckJvdHRvbSIsImN1cnNvciIsImZsZXhEaXJlY3Rpb24iLCJmbGV4Iiwib3BhY2l0eSIsImJvcmRlclJhZGl1cyIsIm9uSG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkFjdGl2ZSIsIm9uRm9jdXMiLCJib3hTaGFkb3ciLCJpbWFnZSIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJjbGFzc05hbWUiLCJpY29uIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJvbkNsaWNrIiwidG8iLCJ1cGRhdGVRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLFNBQVNDLGVBQVQsRUFBMEJDLE1BQTFCLFFBQXdDLFlBQXhDOzs7QUFHQSxJQUFNQyxTQUFTRixnQkFDYjtBQUFBLE1BQUdHLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLGdCQUFZLE1BREU7QUFFZEQ7QUFGYyxHQUFoQjtBQUFBLENBRGEsRUFLYixLQUxhLEVBTWIsRUFOYSxDQUFmOztBQVNBLElBQU1FLFVBQVVMLGdCQUNkO0FBQUEsTUFBR00sTUFBSCxTQUFHQSxNQUFIO0FBQUEsTUFBV0MsUUFBWCxTQUFXQSxRQUFYO0FBQUEsTUFBcUJDLEtBQXJCLFNBQXFCQSxLQUFyQjtBQUFBLFNBQWtDO0FBQ2hDQyxhQUFTO0FBQ1BDLGVB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VyxZQUFNLENBQUUsQ0FBbkIsR0FBc0JnQyxPQUF4RDtBQUNFLHdCQUFDLE9BQUQ7QUFDRSxhQUFPUixLQURUO0FBRUUsYUFBTzVCLEtBRlQ7QUFHRSxhQUFPNkIsS0FIVDtBQUlFLG1CQUFhQyxXQUpmO0FBS0UsY0FBUTNCLE1BTFY7QUFNRSxnQkFBVUMsUUFOWjtBQU9FLFlBQU00QjtBQVBSO0FBREYsR0FERixHQWFFO0FBQUMsUUFBRDtBQUFBO0FBQ0UsaUJBQVdELFNBRGI7QUFFRSxVQUFJTSxFQUZOO0FBR0UsbUJBQWFDLFdBSGY7QUFJRSxnQkFBVWxDO0FBSlo7QUFNRSx3QkFBQyxPQUFEO0FBQ0UsYUFBT3dCLEtBRFQ7QUFFRSxhQUFPNUIsS0FGVDtBQUdFLGFBQU82QixLQUhUO0FBSUUsbUJBQWFDLFdBSmY7QUFLRSxjQUFRM0IsTUFMVjtBQU1FLGdCQUFVQyxRQU5aO0FBT0UsWUFBTTRCO0FBUFI7QUFORixHQTFCVztBQUFBLENBQWYiLCJmaWxlIjoicGFja2FnZXMvdWkvbGlzdC9pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBib3JkZXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdhbnRkJztcblxuY29uc3QgSGVhZGVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyBjb2xvciB9KSA9PiAoe1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBjb2xvcixcbiAgfSksXG4gICdkaXYnLFxuICBbXSxcbik7XG5cbmNvbnN0IENvbnRlbnQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IGFjdGl2ZSwgZGlzYWJsZWQsIHRoZW1lIH0pID0+ICh7XG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTEsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIGNvbG9yOiBkaXNhYmxlZCA/IHRoZW1lLmRhcmszIDogdGhlbWUuZGFyazEsXG4gICAgYmFja2dyb3VuZDogYWN0aXZlICYmICdyZ2JhKDAsIDAsIDAsIDAuMDMpJyxcbiAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgYm9yZGVyQm90dG9tOiBib3JkZXIodGhlbWUpLFxuICAgIGN1cnNvcjogZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInLFxuICAgICc+IC5jb250ZW50Jzoge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2UxLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIGhhc0ZsZXg6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgZmxleDogJzEgMSAwJScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJz4gLmltYWdlJzoge1xuICAgICAgb3BhY2l0eTogZGlzYWJsZWQgPyAwLjY2NyA6IDEsXG4gICAgICAnPiAqJzoge1xuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICc+IC5pY29uJzoge30sXG4gICAgb25Ib3ZlcjogIWFjdGl2ZSAmJlxuICAgICAgIWRpc2FibGVkICYmIHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjAzKScsXG4gICAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg1KScsXG4gICAgICB9LFxuICAgIG9uQWN0aXZlOiB7XG4gICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC44NSknLFxuICAgIH0sXG4gICAgb25Gb2N1czoge1xuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgICAgIGJveFNoYWRvdzogJzAgMCAzcHggMXB4IHJnYmEoNjMsIDgxLCAxODEsIDAuMTkpJyxcbiAgICB9LFxuICB9KSxcbiAgKHsgaW1hZ2UsIGNvbG9yLCBsYWJlbCwgZGVzY3JpcHRpb24sIGNsYXNzTmFtZSwgZGlzYWJsZWQsIGljb24gfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxIZWFkZXIgY29sb3I9e2NvbG9yfT57bGFiZWx9PC9IZWFkZXI+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7aW1hZ2UgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAge2ltYWdlICYmXG4gICAgICAgICAgICB0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnICYmIChcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSB3aWR0aD17NDl9IGhlaWdodD17NDl9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIHtpbWFnZSAmJiB0eXBlb2YgaW1hZ2UgIT09ICdzdHJpbmcnICYmIGltYWdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHshaW1hZ2UgJiYgIWRpc2FibGVkID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICA8SWNvbiB0eXBlPXtpY29uIHx8ICdyaWdodCd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBjbGFzc05hbWUsXG4gIGltYWdlLFxuICBjb2xvcixcbiAgbGFiZWwsXG4gIGRlc2NyaXB0aW9uLFxuICBvbkNsaWNrLFxuICBhY3RpdmUsXG4gIGRpc2FibGVkLFxuICBpY29uLFxuICB0byxcbiAgdXBkYXRlUXVlcnksXG59KSA9PlxuICBvbkNsaWNrIHx8IGRpc2FibGVkID8gKFxuICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXtkaXNhYmxlZCA/ICgpID0+IHt9IDogb25DbGlja30+XG4gICAgICA8Q29udGVudFxuICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIGFjdGl2ZT17YWN0aXZlfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGljb249e2ljb259XG4gICAgICAvPlxuICAgIDwvYT5cbiAgKSA6IChcbiAgICA8TGlua1xuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB0bz17dG99XG4gICAgICB1cGRhdGVRdWVyeT17dXBkYXRlUXVlcnl9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgPlxuICAgICAgPENvbnRlbnRcbiAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICBhY3RpdmU9e2FjdGl2ZX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBpY29uPXtpY29ufVxuICAgICAgLz5cbiAgICA8L0xpbms+XG4gICk7XG4iXX0=
