'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _portal = require('./portal');

var _portal2 = _interopRequireDefault(_portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = _react2.default.createElement(
  'div',
  null,
  'Offline'
);

var _ref3 = _react2.default.createElement(
  'div',
  null,
  'Server Offline'
);

var Modal = function Modal(_ref) {
  var className = _ref.className,
      logo = _ref.logo,
      isOffline = _ref.isOffline,
      isServerDown = _ref.isServerDown;
  return isOffline ? _react2.default.createElement(
    _portal2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: className },
      _ref2
    )
  ) : isServerDown ? _react2.default.createElement(
    _portal2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: className },
      _ref3
    )
  ) : null;
};

var component = (0, _reactFela.createComponent)(function (_ref4) {
  var theme = _ref4.theme,
      bottomTransparency = _ref4.bottomTransparency,
      topTransparency = _ref4.topTransparency;
  return {
    backgroundColor: theme.color,
    zIndex: 1000000,
    background: 'linear-gradient(0deg, ' + (theme.colorEnd || (0, _tinycolor2.default)(theme.color).darken(6).spin(-6).setAlpha(bottomTransparency || 1).toRgbString()) + ', ' + (theme.colorStart || (0, _tinycolor2.default)(theme.color).lighten(6).spin(12).setAlpha(topTransparency || 1).toRgbString()) + ')',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    '> div': {
      color: 'white',
      fontSize: 30,
      fontWeight: 200,
      height: 300,
      width: 300,
      lineHeight: '240px',
      textAlign: 'center',
      backgroundColor: theme.color,
      borderRadius: '100%',
      padding: 30,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate3d(-50%,-50%,0)',
      animationDuration: '2.5s',
      animationIterationCount: 'infinite',
      animationName: {
        '0%': {
          boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)'
        },
        '70%': {
          boxShadow: '0 0 0 20px rgba(255,255,255, 0)'
        },
        '100%': {
          boxShadow: '0 0 0 0 rgba(255,255,255, 0)'
        }
      }
    }
  };
}, Modal, function (p) {
  return Object.keys(p);
});

exports.default = component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvb2ZmbGluZS5lczYiXSwibmFtZXMiOlsiTW9kYWwiLCJjbGFzc05hbWUiLCJsb2dvIiwiaXNPZmZsaW5lIiwiaXNTZXJ2ZXJEb3duIiwiY29tcG9uZW50IiwidGhlbWUiLCJib3R0b21UcmFuc3BhcmVuY3kiLCJ0b3BUcmFuc3BhcmVuY3kiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInpJbmRleCIsImJhY2tncm91bmQiLCJjb2xvckVuZCIsImRhcmtlbiIsInNwaW4iLCJzZXRBbHBoYSIsInRvUmdiU3RyaW5nIiwiY29sb3JTdGFydCIsImxpZ2h0ZW4iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsInRleHRBbGlnbiIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJ0cmFuc2Zvcm0iLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYW5pbWF0aW9uTmFtZSIsImJveFNoYWRvdyIsIk9iamVjdCIsImtleXMiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztZQU1RO0FBQUE7QUFBQTtBQUFBO0FBQUEsQzs7WUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEM7O0FBVlIsSUFBTUEsUUFBUSxTQUFSQSxLQUFRO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsTUFBY0MsSUFBZCxRQUFjQSxJQUFkO0FBQUEsTUFBb0JDLFNBQXBCLFFBQW9CQSxTQUFwQjtBQUFBLE1BQStCQyxZQUEvQixRQUErQkEsWUFBL0I7QUFBQSxTQUNaRCxZQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVdGLFNBQWhCO0FBQUE7QUFBQTtBQURGLEdBREYsR0FNSUcsZUFDRjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFXSCxTQUFoQjtBQUFBO0FBQUE7QUFERixHQURFLEdBTUEsSUFiUTtBQUFBLENBQWQ7O0FBZUEsSUFBTUksWUFBWSxnQ0FDaEI7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFVQyxrQkFBVixTQUFVQSxrQkFBVjtBQUFBLE1BQThCQyxlQUE5QixTQUE4QkEsZUFBOUI7QUFBQSxTQUFxRDtBQUNuREMscUJBQWlCSCxNQUFNSSxLQUQ0QjtBQUVuREMsWUFBUSxPQUYyQztBQUduREMsNENBQXFDTixNQUFNTyxRQUFOLElBQ25DLHlCQUFVUCxNQUFNSSxLQUFoQixFQUNHSSxNQURILENBQ1UsQ0FEVixFQUVHQyxJQUZILENBRVEsQ0FBQyxDQUZULEVBR0dDLFFBSEgsQ0FHWVQsc0JBQXNCLENBSGxDLEVBSUdVLFdBSkgsRUFERixZQUt1QlgsTUFBTVksVUFBTixJQUNyQix5QkFBVVosTUFBTUksS0FBaEIsRUFDR1MsT0FESCxDQUNXLENBRFgsRUFFR0osSUFGSCxDQUVRLEVBRlIsRUFHR0MsUUFISCxDQUdZUixtQkFBbUIsQ0FIL0IsRUFJR1MsV0FKSCxFQU5GLE9BSG1EO0FBY25ERyxjQUFVLE9BZHlDO0FBZW5EQyxTQUFLLENBZjhDO0FBZ0JuREMsVUFBTSxDQWhCNkM7QUFpQm5EQyxXQUFPLENBakI0QztBQWtCbkRDLFlBQVEsQ0FsQjJDO0FBbUJuREMsV0FBTyxNQW5CNEM7QUFvQm5EQyxZQUFRLE1BcEIyQztBQXFCbkQsYUFBUztBQUNQaEIsYUFBTyxPQURBO0FBRVBpQixnQkFBVSxFQUZIO0FBR1BDLGtCQUFZLEdBSEw7QUFJUEYsY0FBUSxHQUpEO0FBS1BELGFBQU8sR0FMQTtBQU1QSSxrQkFBWSxPQU5MO0FBT1BDLGlCQUFXLFFBUEo7QUFRUHJCLHVCQUFpQkgsTUFBTUksS0FSaEI7QUFTUHFCLG9CQUFjLE1BVFA7QUFVUEMsZUFBUyxFQVZGO0FBV1BaLGdCQUFVLFVBWEg7QUFZUEMsV0FBSyxLQVpFO0FBYVBDLFlBQU0sS0FiQztBQWNQVyxpQkFBVywwQkFkSjtBQWVQQyx5QkFBbUIsTUFmWjtBQWdCUEMsK0JBQXlCLFVBaEJsQjtBQWlCUEMscUJBQWU7QUFDYixjQUFNO0FBQ0pDLHFCQUFXO0FBRFAsU0FETztBQUliLGVBQU87QUFDTEEscUJBQVc7QUFETixTQUpNO0FBT2IsZ0JBQVE7QUFDTkEscUJBQVc7QUFETDtBQVBLO0FBakJSO0FBckIwQyxHQUFyRDtBQUFBLENBRGdCLEVBb0RoQnJDLEtBcERnQixFQXFEaEI7QUFBQSxTQUFLc0MsT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxDQXJEZ0IsQ0FBbEI7O2tCQXdEZW5DLFMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9vZmZsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9wb3J0YWwnO1xuXG5jb25zdCBNb2RhbCA9ICh7IGNsYXNzTmFtZSwgbG9nbywgaXNPZmZsaW5lLCBpc1NlcnZlckRvd24gfSkgPT5cbiAgaXNPZmZsaW5lID8gKFxuICAgIDxQb3J0YWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPGRpdj5PZmZsaW5lPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BvcnRhbD5cbiAgKSA6IGlzU2VydmVyRG93biA/IChcbiAgICA8UG9ydGFsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxkaXY+U2VydmVyIE9mZmxpbmU8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUG9ydGFsPlxuICApIDogbnVsbDtcblxuY29uc3QgY29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgYm90dG9tVHJhbnNwYXJlbmN5LCB0b3BUcmFuc3BhcmVuY3kgfSkgPT4gKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIHpJbmRleDogMTAwMDAwMCxcbiAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDBkZWcsICR7dGhlbWUuY29sb3JFbmQgfHxcbiAgICAgIHRpbnljb2xvcih0aGVtZS5jb2xvcilcbiAgICAgICAgLmRhcmtlbig2KVxuICAgICAgICAuc3BpbigtNilcbiAgICAgICAgLnNldEFscGhhKGJvdHRvbVRyYW5zcGFyZW5jeSB8fCAxKVxuICAgICAgICAudG9SZ2JTdHJpbmcoKX0sICR7dGhlbWUuY29sb3JTdGFydCB8fFxuICAgICAgdGlueWNvbG9yKHRoZW1lLmNvbG9yKVxuICAgICAgICAubGlnaHRlbig2KVxuICAgICAgICAuc3BpbigxMilcbiAgICAgICAgLnNldEFscGhhKHRvcFRyYW5zcGFyZW5jeSB8fCAxKVxuICAgICAgICAudG9SZ2JTdHJpbmcoKX0pYCxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAnPiBkaXYnOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGZvbnRTaXplOiAzMCxcbiAgICAgIGZvbnRXZWlnaHQ6IDIwMCxcbiAgICAgIGhlaWdodDogMzAwLFxuICAgICAgd2lkdGg6IDMwMCxcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNDBweCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcixcbiAgICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxuICAgICAgcGFkZGluZzogMzAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKScsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogJzIuNXMnLFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXG4gICAgICBhbmltYXRpb25OYW1lOiB7XG4gICAgICAgICcwJSc6IHtcbiAgICAgICAgICBib3hTaGFkb3c6ICcwIDAgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KScsXG4gICAgICAgIH0sXG4gICAgICAgICc3MCUnOiB7XG4gICAgICAgICAgYm94U2hhZG93OiAnMCAwIDAgMjBweCByZ2JhKDI1NSwyNTUsMjU1LCAwKScsXG4gICAgICAgIH0sXG4gICAgICAgICcxMDAlJzoge1xuICAgICAgICAgIGJveFNoYWRvdzogJzAgMCAwIDAgcmdiYSgyNTUsMjU1LDI1NSwgMCknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgTW9kYWwsXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudDtcbiJdfQ==
