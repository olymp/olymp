'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

require('antd/lib/dropdown/style');

require('antd/lib/menu/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    style1: {
      borderTop: '1px solid ' + theme.dark4
    },
    style2: {
      borderTop: '3px double ' + theme.dark4
    },
    style3: {
      borderTop: '1px dashed ' + theme.dark4
    },
    style4: {
      borderTop: '1px dotted ' + theme.dark4
    },
    style5: {
      backgroundColor: '#fff',
      borderTop: '2px dashed ' + theme.dark4
    },
    style6: {
      backgroundColor: '#fff',
      borderTop: '2px dotted ' + theme.dark4
    },
    style7: {
      borderTop: '1px solid ' + theme.dark4,
      borderBottom: '1px solid #fff'
    },
    style8: {
      borderTop: '1px solid ' + theme.dark4,
      borderBottom: '1px solid #fff',
      onAfter: {
        content: '""',
        display: 'block',
        marginTop: 2,
        borderTop: '1px solid ' + theme.dark4,
        borderBottom: '1px solid #fff'
      }
    },
    style9: {
      borderTop: '1px dashed ' + theme.dark4,
      borderBottom: '1px dashed #fff'
    },
    style10: {
      borderTop: '1px dotted ' + theme.dark4,
      borderBottom: '1px dotted #fff'
    },
    style11: {
      height: 6,
      background: 'url(http://ibrahimjabbari.com/english/images/hr-11.png) repeat-x 0 0',
      border: 0
    },
    style12: {
      height: 6,
      background: 'url(http://ibrahimjabbari.com/english/images/hr-12.png) repeat-x 0 0',
      border: 0
    },
    style13: {
      height: 10,
      border: 0,
      boxShadow: '0 10px 10px -10px ' + theme.dark4 + ' inset'
    },
    style14: {
      border: 0,
      height: 1,
      backgroundImage: 'linear-gradient(left, #f0f0f0, ' + theme.dark4 + ', #f0f0f0)'
    },
    style15: {
      borderTop: '4px double ' + theme.dark4,
      textAlign: 'center',
      onAfter: {
        content: '"\\002665"',
        display: 'inline-block',
        position: 'relative',
        top: -15,
        padding: '0 10px',
        background: '#f0f0f0',
        color: theme.dark4,
        fontSize: 18
      }
    },
    style16: {
      borderTop: '1px dashed ' + theme.dark4,
      onAfter: {
        content: '"\\002702"',
        display: 'inline-block',
        position: 'relative',
        top: -12,
        left: 40,
        padding: '0 3px',
        background: '#f0f0f0',
        color: theme.dark4,
        fontSize: 18
      }
    },
    style17: {
      borderTop: '1px solid ' + theme.dark4,
      textAlign: 'center',
      onAfter: {
        content: '"§"',
        display: 'inline-block',
        position: 'relative',
        top: -14,
        padding: '0 10px',
        background: '#f0f0f0',
        color: theme.dark4,
        fontSize: 18,
        transform: 'rotate(60deg)'
      }
    },
    style18: {
      height: 30,
      borderStyle: 'solid',
      borderColor: theme.dark4,
      borderWidth: '1px 0 0 0',
      borderRadius: 20,
      onBefore: {
        display: 'block',
        content: '""',
        height: 30,
        marginTop: -31,
        borderStyle: 'solid',
        borderColor: theme.dark4,
        borderWidth: '0 0 1px 0',
        borderRadius: 20
      }
    }
  };
};

var component = (0, _olympFela.createComponent)(function (_ref) {
  var getData = _ref.getData,
      theme = _ref.theme;
  return styles(theme)[getData('type', 'style1')];
}, function (_ref2) {
  var attributes = _ref2.attributes,
      className = _ref2.className,
      children = _ref2.children;
  return _react2.default.createElement(
    'span',
    attributes,
    children,
    _react2.default.createElement('hr', { className: className })
  );
}, function (p) {
  return Object.keys(p);
});

var _ref4 = _react2.default.createElement(
  'a',
  null,
  'Stil'
);

exports.default = {
  type: 'Pages.Template.LineBlock',
  isVoid: true,
  kind: 'block',
  label: 'Linie',
  category: 'Layout',
  component: component,
  actions: [{
    type: 'small',
    icon: 'align-left',
    label: 'Stil 1',
    component: function component(_ref3) {
      var setData = _ref3.setData;
      return _react2.default.createElement(
        _dropdown2.default,
        {
          overlay: _react2.default.createElement(
            _menu2.default,
            { style: { minWidth: 200 } },
            Object.keys(styles({})).map(function (key) {
              return _react2.default.createElement(
                _menu2.default.Item,
                { key: key },
                _react2.default.createElement(
                  'span',
                  {
                    onMouseDown: function onMouseDown(e) {
                      setData({ type: key });
                      e.preventDefault();
                    }
                  },
                  key
                )
              );
            })
          )
        },
        _ref4
      );
    },
    toggle: function toggle(_ref5) {
      var setData = _ref5.setData;
      return setData({ type: 'style2' });
    },
    active: function active(_ref6) {
      var type = _ref6.type;
      return false;
    }
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvbGluZS5lczYiXSwibmFtZXMiOlsic3R5bGVzIiwic3R5bGUxIiwiYm9yZGVyVG9wIiwidGhlbWUiLCJkYXJrNCIsInN0eWxlMiIsInN0eWxlMyIsInN0eWxlNCIsInN0eWxlNSIsImJhY2tncm91bmRDb2xvciIsInN0eWxlNiIsInN0eWxlNyIsImJvcmRlckJvdHRvbSIsInN0eWxlOCIsIm9uQWZ0ZXIiLCJjb250ZW50IiwiZGlzcGxheSIsIm1hcmdpblRvcCIsInN0eWxlOSIsInN0eWxlMTAiLCJzdHlsZTExIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsInN0eWxlMTIiLCJzdHlsZTEzIiwiYm94U2hhZG93Iiwic3R5bGUxNCIsImJhY2tncm91bmRJbWFnZSIsInN0eWxlMTUiLCJ0ZXh0QWxpZ24iLCJwb3NpdGlvbiIsInRvcCIsInBhZGRpbmciLCJjb2xvciIsImZvbnRTaXplIiwic3R5bGUxNiIsImxlZnQiLCJzdHlsZTE3IiwidHJhbnNmb3JtIiwic3R5bGUxOCIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsIm9uQmVmb3JlIiwiY29tcG9uZW50IiwiZ2V0RGF0YSIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIk9iamVjdCIsImtleXMiLCJwIiwidHlwZSIsImlzVm9pZCIsImtpbmQiLCJsYWJlbCIsImNhdGVnb3J5IiwiYWN0aW9ucyIsImljb24iLCJzZXREYXRhIiwibWluV2lkdGgiLCJtYXAiLCJrZXkiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGUiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFVO0FBQ3ZCQyxZQUFRO0FBQ05DLGdDQUF3QkMsTUFBTUM7QUFEeEIsS0FEZTtBQUl2QkMsWUFBUTtB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LEdBQWhCO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsaUNBQWEsd0JBQUs7QUFDaEJILDhCQUFRLEVBQUVQLE1BQU1VLEdBQVIsRUFBUjtBQUNBQyx3QkFBRUMsY0FBRjtBQUNEO0FBSkg7QUFNR0Y7QUFOSDtBQURGLGVBRDJCO0FBQUEsYUFBNUI7QUFESDtBQUZKO0FBQUE7QUFBQSxPQURTO0FBQUEsS0FKYjtBQTBCRUcsWUFBUTtBQUFBLFVBQUdOLE9BQUgsU0FBR0EsT0FBSDtBQUFBLGFBQWlCQSxRQUFRLEVBQUVQLE1BQU0sUUFBUixFQUFSLENBQWpCO0FBQUEsS0ExQlY7QUEyQkVjLFlBQVE7QUFBQSxVQUFHZCxJQUFILFNBQUdBLElBQUg7QUFBQSxhQUFjLEtBQWQ7QUFBQTtBQTNCVixHQURPO0FBUEksQyIsImZpbGUiOiJjbXMvcGFnZXMvYmxvY2tzL2xpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRHJvcGRvd24sIE1lbnUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBzdHlsZTE6IHtcbiAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5kYXJrNH1gLFxuICB9LFxuICBzdHlsZTI6IHtcbiAgICBib3JkZXJUb3A6IGAzcHggZG91YmxlICR7dGhlbWUuZGFyazR9YCxcbiAgfSxcbiAgc3R5bGUzOiB7XG4gICAgYm9yZGVyVG9wOiBgMXB4IGRhc2hlZCAke3RoZW1lLmRhcms0fWAsXG4gIH0sXG4gIHN0eWxlNDoge1xuICAgIGJvcmRlclRvcDogYDFweCBkb3R0ZWQgJHt0aGVtZS5kYXJrNH1gLFxuICB9LFxuICBzdHlsZTU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXJUb3A6IGAycHggZGFzaGVkICR7dGhlbWUuZGFyazR9YCxcbiAgfSxcbiAgc3R5bGU2OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyVG9wOiBgMnB4IGRvdHRlZCAke3RoZW1lLmRhcms0fWAsXG4gIH0sXG4gIHN0eWxlNzoge1xuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLmRhcms0fWAsXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNmZmYnLFxuICB9LFxuICBzdHlsZTg6IHtcbiAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5kYXJrNH1gLFxuICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZmZmJyxcbiAgICBvbkFmdGVyOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbWFyZ2luVG9wOiAyLFxuICAgICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUuZGFyazR9YCxcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZmZmJyxcbiAgICB9LFxuICB9LFxuICBzdHlsZTk6IHtcbiAgICBib3JkZXJUb3A6IGAxcHggZGFzaGVkICR7dGhlbWUuZGFyazR9YCxcbiAgICBib3JkZXJCb3R0b206ICcxcHggZGFzaGVkICNmZmYnLFxuICB9LFxuICBzdHlsZTEwOiB7XG4gICAgYm9yZGVyVG9wOiBgMXB4IGRvdHRlZCAke3RoZW1lLmRhcms0fWAsXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IGRvdHRlZCAjZmZmJyxcbiAgfSxcbiAgc3R5bGUxMToge1xuICAgIGhlaWdodDogNixcbiAgICBiYWNrZ3JvdW5kOlxuICAgICAgJ3VybChodHRwOi8vaWJyYWhpbWphYmJhcmkuY29tL2VuZ2xpc2gvaW1hZ2VzL2hyLTExLnBuZykgcmVwZWF0LXggMCAwJyxcbiAgICBib3JkZXI6IDAsXG4gIH0sXG4gIHN0eWxlMTI6IHtcbiAgICBoZWlnaHQ6IDYsXG4gICAgYmFja2dyb3VuZDpcbiAgICAgICd1cmwoaHR0cDovL2licmFoaW1qYWJiYXJpLmNvbS9lbmdsaXNoL2ltYWdlcy9oci0xMi5wbmcpIHJlcGVhdC14IDAgMCcsXG4gICAgYm9yZGVyOiAwLFxuICB9LFxuICBzdHlsZTEzOiB7XG4gICAgaGVpZ2h0OiAxMCxcbiAgICBib3JkZXI6IDAsXG4gICAgYm94U2hhZG93OiBgMCAxMHB4IDEwcHggLTEwcHggJHt0aGVtZS5kYXJrNH0gaW5zZXRgLFxuICB9LFxuICBzdHlsZTE0OiB7XG4gICAgYm9yZGVyOiAwLFxuICAgIGhlaWdodDogMSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQobGVmdCwgI2YwZjBmMCwgJHt0aGVtZS5kYXJrNH0sICNmMGYwZjApYCxcbiAgfSxcbiAgc3R5bGUxNToge1xuICAgIGJvcmRlclRvcDogYDRweCBkb3VibGUgJHt0aGVtZS5kYXJrNH1gLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgb25BZnRlcjoge1xuICAgICAgY29udGVudDogJ1wiXFxcXDAwMjY2NVwiJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0b3A6IC0xNSxcbiAgICAgIHBhZGRpbmc6ICcwIDEwcHgnLFxuICAgICAgYmFja2dyb3VuZDogJyNmMGYwZjAnLFxuICAgICAgY29sb3I6IHRoZW1lLmRhcms0LFxuICAgICAgZm9udFNpemU6IDE4LFxuICAgIH0sXG4gIH0sXG4gIHN0eWxlMTY6IHtcbiAgICBib3JkZXJUb3A6IGAxcHggZGFzaGVkICR7dGhlbWUuZGFyazR9YCxcbiAgICBvbkFmdGVyOiB7XG4gICAgICBjb250ZW50OiAnXCJcXFxcMDAyNzAyXCInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRvcDogLTEyLFxuICAgICAgbGVmdDogNDAsXG4gICAgICBwYWRkaW5nOiAnMCAzcHgnLFxuICAgICAgYmFja2dyb3VuZDogJyNmMGYwZjAnLFxuICAgICAgY29sb3I6IHRoZW1lLmRhcms0LFxuICAgICAgZm9udFNpemU6IDE4LFxuICAgIH0sXG4gIH0sXG4gIHN0eWxlMTc6IHtcbiAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5kYXJrNH1gLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgb25BZnRlcjoge1xuICAgICAgY29udGVudDogJ1wiwqdcIicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdG9wOiAtMTQsXG4gICAgICBwYWRkaW5nOiAnMCAxMHB4JyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZjBmMGYwJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5kYXJrNCxcbiAgICAgIGZvbnRTaXplOiAxOCxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg2MGRlZyknLFxuICAgIH0sXG4gIH0sXG4gIHN0eWxlMTg6IHtcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5kYXJrNCxcbiAgICBib3JkZXJXaWR0aDogJzFweCAwIDAgMCcsXG4gICAgYm9yZGVyUmFkaXVzOiAyMCxcbiAgICBvbkJlZm9yZToge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGhlaWdodDogMzAsXG4gICAgICBtYXJnaW5Ub3A6IC0zMSxcbiAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmRhcms0LFxuICAgICAgYm9yZGVyV2lkdGg6ICcwIDAgMXB4IDAnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IGNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgZ2V0RGF0YSwgdGhlbWUgfSkgPT4gc3R5bGVzKHRoZW1lKVtnZXREYXRhKCd0eXBlJywgJ3N0eWxlMScpXSxcbiAgKHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPHNwYW4gey4uLmF0dHJpYnV0ZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPGhyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSAvPlxuICAgIDwvc3Bhbj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ1BhZ2VzLlRlbXBsYXRlLkxpbmVCbG9jaycsXG4gIGlzVm9pZDogdHJ1ZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdMaW5pZScsXG4gIGNhdGVnb3J5OiAnTGF5b3V0JyxcbiAgY29tcG9uZW50LFxuICBhY3Rpb25zOiBbXG4gICAge1xuICAgICAgdHlwZTogJ3NtYWxsJyxcbiAgICAgIGljb246ICdhbGlnbi1sZWZ0JyxcbiAgICAgIGxhYmVsOiAnU3RpbCAxJyxcbiAgICAgIGNvbXBvbmVudDogKHsgc2V0RGF0YSB9KSA9PiAoXG4gICAgICAgIDxEcm9wZG93blxuICAgICAgICAgIG92ZXJsYXk9e1xuICAgICAgICAgICAgPE1lbnUgc3R5bGU9e3sgbWluV2lkdGg6IDIwMCB9fT5cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHN0eWxlcyh7fSkpLm1hcChrZXkgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoeyB0eXBlOiBrZXkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7a2V5fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8YT5TdGlsPC9hPlxuICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgKSxcbiAgICAgIHRvZ2dsZTogKHsgc2V0RGF0YSB9KSA9PiBzZXREYXRhKHsgdHlwZTogJ3N0eWxlMicgfSksXG4gICAgICBhY3RpdmU6ICh7IHR5cGUgfSkgPT4gZmFsc2UsXG4gICAgfSxcbiAgXSxcbn07XG4iXX0=
