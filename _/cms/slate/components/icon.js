'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    marginTop: 3,
    marginBottom: -3,
    display: 'block',
    '> svg': {
      fill: theme.light2
    },
    onHover: {
      '> svg': {
        fill: theme.light
      }
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      Icon = _ref2.icon;
  return _react2.default.createElement(
    'span',
    { className: className },
    _react2.default.createElement(Icon, { size: 14, color: '' })
  );
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL2NvbXBvbmVudHMvaWNvbi5lczYiXSwibmFtZXMiOlsidGhlbWUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiZmlsbCIsImxpZ2h0MiIsIm9uSG92ZXIiLCJsaWdodCIsImNsYXNzTmFtZSIsIkljb24iLCJpY29uIiwiT2JqZWN0Iiwia2V5cyIsInAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7a0JBRWUsZ0NBQ2I7QUFBQSxNQUFHQSxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxlQUFXLENBREc7QUFFZEMsa0JBQWMsQ0FBQyxDQUZEO0FBR2RDLGFBQVMsT0FISztBQUlkLGFBQVM7QUFDUEMsWUFBTUosTUFBTUs7QUFETCxLQUpLO0FBT2RDLGFBQVM7QUFDUCxlQUFTO0FBQ1BGLGNBQU1KLE1BQU1PO0FBREw7QUFERjtBQVBLLEdBQWhCO0FBQUEsQ0FEYSxFQWNiO0FBQUEsTUFBR0MsU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBb0JDLElBQXBCLFNBQWNDLElBQWQ7QUFBQSxTQUNHO0FBQUE7QUFBQSxNQUFNLFdBQVdGLFNBQWpCO0FBQ0Msa0NBQUMsSUFBRCxJQUFNLE1BQU0sRUFBWixFQUFnQixPQUFNLEVBQXRCO0FBREQsR0FESDtBQUFBLENBZGEsRUFrQmI7QUFBQSxTQUFLRyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBbEJhLEMiLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvY29tcG9uZW50cy9pY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgbWFyZ2luVG9wOiAzLFxuICAgIG1hcmdpbkJvdHRvbTogLTMsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAnPiBzdmcnOiB7XG4gICAgICBmaWxsOiB0aGVtZS5saWdodDIsXG4gICAgfSxcbiAgICBvbkhvdmVyOiB7XG4gICAgICAnPiBzdmcnOiB7XG4gICAgICAgIGZpbGw6IHRoZW1lLmxpZ2h0LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBpY29uOiBJY29uIH0pID0+XG4gICAgKDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxJY29uIHNpemU9ezE0fSBjb2xvcj1cIlwiIC8+XG4gICAgPC9zcGFuPiksXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG4iXX0=
