'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLogo = function getLogo(x) {
  if (typeof x === 'function') {
    return x();
  }
  return _react2.default.createElement('img', { src: x, alt: 'logo' });
};
var Modal = (0, _reactFela.withTheme)(function (_ref) {
  var className = _ref.className,
      theme = _ref.theme,
      _ref$show = _ref.show,
      show = _ref$show === undefined ? true : _ref$show;
  return show ? _react2.default.createElement(
    'div',
    { className: className },
    theme.logoWhite && _react2.default.createElement(
      'div',
      { className: 'logo' },
      getLogo(theme.logoWhite)
    )
  ) : null;
});

var component = (0, _reactFela.createComponent)(function (_ref2) {
  var theme = _ref2.theme,
      bottomTransparency = _ref2.bottomTransparency,
      topTransparency = _ref2.topTransparency;
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
      backgroundColor: theme.color,
      borderRadius: '100%',
      // padding: 30,
      size: 125,
      center: true,
      animationDuration: '2.5s',
      animationIterationCount: 'infinite',
      animationName: {
        '0%': {
          boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.3)'
        },
        '70%': {
          boxShadow: '0 0 0 20px rgba(255,255,255, 0)'
        },
        '100%': {
          boxShadow: '0 0 0 0 rgba(255,255,255, 0)'
        }
      },
      '> img': {
        height: 75,
        center: true,
        animationDuration: '2.5s',
        animationIterationCount: 'infinite',
        animationName: {
          '0%': {
            opacity: 0.33
          },
          '70%': {
            opacity: 0.45
          },
          '100%': {
            opacity: 0.33
          }
        }
      },
      '> svg': {
        height: 75,
        center: true,
        animationDuration: '2.5s',
        animationIterationCount: 'infinite',
        animationName: {
          '0%': {
            opacity: 0.33
          },
          '70%': {
            opacity: 0.45
          },
          '100%': {
            opacity: 0.33
          }
        }
      }
    }
  };
}, Modal, function (p) {
  return Object.keys(p);
});

exports.default = component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbG9hZGVyL3NjcmVlbi5lczYiXSwibmFtZXMiOlsiZ2V0TG9nbyIsIngiLCJNb2RhbCIsImNsYXNzTmFtZSIsInRoZW1lIiwic2hvdyIsImxvZ29XaGl0ZSIsImNvbXBvbmVudCIsImJvdHRvbVRyYW5zcGFyZW5jeSIsInRvcFRyYW5zcGFyZW5jeSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiekluZGV4IiwiYmFja2dyb3VuZCIsImNvbG9yRW5kIiwiZGFya2VuIiwic3BpbiIsInNldEFscGhhIiwidG9SZ2JTdHJpbmciLCJjb2xvclN0YXJ0IiwibGlnaHRlbiIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJzaXplIiwiY2VudGVyIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImFuaW1hdGlvbk5hbWUiLCJib3hTaGFkb3ciLCJvcGFjaXR5IiwiT2JqZWN0Iiwia2V5cyIsInAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVUsU0FBVkEsT0FBVSxJQUFLO0FBQ25CLE1BQUksT0FBT0MsQ0FBUCxLQUFhLFVBQWpCLEVBQTZCO0FBQzNCLFdBQU9BLEdBQVA7QUFDRDtBQUNELFNBQU8sdUNBQUssS0FBS0EsQ0FBVixFQUFhLEtBQUksTUFBakIsR0FBUDtBQUNELENBTEQ7QUFNQSxJQUFNQyxRQUFRLDBCQUNaO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsTUFBY0MsS0FBZCxRQUFjQSxLQUFkO0FBQUEsdUJBQXFCQyxJQUFyQjtBQUFBLE1BQXFCQSxJQUFyQiw2QkFBNEIsSUFBNUI7QUFBQSxTQUNFQSxPQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVdGLFNBQWhCO0FBQ0dDLFVBQU1FLFNBQU4sSUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLE1BQWY7QUFBdUJOLGNBQVFJLE1BQU1FLFNBQWQ7QUFBdkI7QUFGSixHQURGLEdBTUksSUFQTjtBQUFBLENBRFksQ0FBZDs7QUFXQSxJQUFNQyxZQUFZLGdDQUNoQjtBQUFBLE1BQUdILEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVVJLGtCQUFWLFNBQVVBLGtCQUFWO0FBQUEsTUFBOEJDLGVBQTlCLFNBQThCQSxlQUE5QjtBQUFBLFNBQXFEO0FBQ25EQyxxQkFBaUJOLE1BQU1PLEtBRDRCO0FBRW5EQyxZQUFRLE9BRjJDO0FBR25EQyw0Q0FBcUNULE1BQU1VLFFBQU4sSUFDbkMseUJBQVVWLE1BQU1PLEtBQWhCLEVBQ0dJLE1BREgsQ0FDVSxDQURWLEVBRUdDLElBRkgsQ0FFUSxDQUFDLENBRlQsRUFHR0MsUUFISCxDQUdZVCxzQkFBc0IsQ0FIbEMsRUFJR1UsV0FKSCxFQURGLFlBS3VCZCxNQUFNZSxVQUFOLElBQ3JCLHlCQUFVZixNQUFNTyxLQUFoQixFQUNHUyxPQURILENBQ1csQ0FEWCxFQUVHSixJQUZILENBRVEsRUFGUixFQUdHQyxRQUhILENBR1lSLG1CQUFtQixDQUgvQixFQUlHUyxXQUpILEVBTkYsT0FIbUQ7QUFjbkRHLGNBQVUsT0FkeUM7QUFlbkRDLFNBQUssQ0FmOEM7QUFnQm5EQyxVQUFNLENBaEI2QztBQWlCbkRDLFdBQU8sQ0FqQjRDO0FBa0JuREMsWUFBUSxDQWxCMkM7QUFtQm5EQyxXQUFPLE1BbkI0QztBQW9CbkRDLFlBQVEsTUFwQjJDO0FBcUJuRCxhQUFTO0FBQ1BqQix1QkFBaUJOLE1BQU1PLEtBRGhCO0FBRVBpQixvQkFBYyxNQUZQO0FBR1A7QUFDQUMsWUFBTSxHQUpDO0FBS1BDLGNBQVEsSUFMRDtBQU1QQyx5QkFBbUIsTUFOWjtBQU9QQywrQkFBeUIsVUFQbEI7QUFRUEMscUJBQWU7QUFDYixjQUFNO0FBQ0pDLHFCQUFXO0FBRFAsU0FETztBQUliLGVBQU87QUFDTEEscUJBQVc7QUFETixTQUpNO0FBT2IsZ0JBQVE7QUFDTkEscUJBQVc7QUFETDtBQVBLLE9BUlI7QUFtQlAsZUFBUztBQUNQUCxnQkFBUSxFQUREO0FBRVBHLGdCQUFRLElBRkQ7QUFHUEMsMkJBQW1CLE1BSFo7QUFJUEMsaUNBQXlCLFVBSmxCO0FBS1BDLHVCQUFlO0FBQ2IsZ0JBQU07QUFDSkUscUJBQVM7QUFETCxXQURPO0FBSWIsaUJBQU87QUFDTEEscUJBQVM7QUFESixXQUpNO0FBT2Isa0JBQVE7QUFDTkEscUJBQVM7QUFESDtBQVBLO0FBTFIsT0FuQkY7QUFvQ1AsZUFBUztBQUNQUixnQkFBUSxFQUREO0FBRVBHLGdCQUFRLElBRkQ7QUFHUEMsMkJBQW1CLE1BSFo7QUFJUEMsaUNBQXlCLFVBSmxCO0FBS1BDLHVCQUFlO0FBQ2IsZ0JBQU07QUFDSkUscUJBQVM7QUFETCxXQURPO0FBSWIsaUJBQU87QUFDTEEscUJBQVM7QUFESixXQUpNO0FBT2Isa0JBQVE7QUFDTkEscUJBQVM7QUFESDtBQVBLO0FBTFI7QUFwQ0Y7QUFyQjBDLEdBQXJEO0FBQUEsQ0FEZ0IsRUE2RWhCakMsS0E3RWdCLEVBOEVoQjtBQUFBLFNBQUtrQyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBOUVnQixDQUFsQjs7a0JBaUZlL0IsUyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL2xvYWRlci9zY3JlZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCB3aXRoVGhlbWUgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB0aW55Y29sb3IgZnJvbSAndGlueWNvbG9yMic7XG5cbmNvbnN0IGdldExvZ28gPSB4ID0+IHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHgoKTtcbiAgfVxuICByZXR1cm4gPGltZyBzcmM9e3h9IGFsdD1cImxvZ29cIiAvPjtcbn07XG5jb25zdCBNb2RhbCA9IHdpdGhUaGVtZShcbiAgKHsgY2xhc3NOYW1lLCB0aGVtZSwgc2hvdyA9IHRydWUgfSkgPT5cbiAgICBzaG93ID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHt0aGVtZS5sb2dvV2hpdGUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPntnZXRMb2dvKHRoZW1lLmxvZ29XaGl0ZSl9PC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApIDogbnVsbCxcbik7XG5cbmNvbnN0IGNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGJvdHRvbVRyYW5zcGFyZW5jeSwgdG9wVHJhbnNwYXJlbmN5IH0pID0+ICh7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB6SW5kZXg6IDEwMDAwMDAsXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgwZGVnLCAke3RoZW1lLmNvbG9yRW5kIHx8XG4gICAgICB0aW55Y29sb3IodGhlbWUuY29sb3IpXG4gICAgICAgIC5kYXJrZW4oNilcbiAgICAgICAgLnNwaW4oLTYpXG4gICAgICAgIC5zZXRBbHBoYShib3R0b21UcmFuc3BhcmVuY3kgfHwgMSlcbiAgICAgICAgLnRvUmdiU3RyaW5nKCl9LCAke3RoZW1lLmNvbG9yU3RhcnQgfHxcbiAgICAgIHRpbnljb2xvcih0aGVtZS5jb2xvcilcbiAgICAgICAgLmxpZ2h0ZW4oNilcbiAgICAgICAgLnNwaW4oMTIpXG4gICAgICAgIC5zZXRBbHBoYSh0b3BUcmFuc3BhcmVuY3kgfHwgMSlcbiAgICAgICAgLnRvUmdiU3RyaW5nKCl9KWAsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgJz4gZGl2Jzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcixcbiAgICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxuICAgICAgLy8gcGFkZGluZzogMzAsXG4gICAgICBzaXplOiAxMjUsXG4gICAgICBjZW50ZXI6IHRydWUsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogJzIuNXMnLFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXG4gICAgICBhbmltYXRpb25OYW1lOiB7XG4gICAgICAgICcwJSc6IHtcbiAgICAgICAgICBib3hTaGFkb3c6ICcwIDAgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKScsXG4gICAgICAgIH0sXG4gICAgICAgICc3MCUnOiB7XG4gICAgICAgICAgYm94U2hhZG93OiAnMCAwIDAgMjBweCByZ2JhKDI1NSwyNTUsMjU1LCAwKScsXG4gICAgICAgIH0sXG4gICAgICAgICcxMDAlJzoge1xuICAgICAgICAgIGJveFNoYWRvdzogJzAgMCAwIDAgcmdiYSgyNTUsMjU1LDI1NSwgMCknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICc+IGltZyc6IHtcbiAgICAgICAgaGVpZ2h0OiA3NSxcbiAgICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzIuNXMnLFxuICAgICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogJ2luZmluaXRlJyxcbiAgICAgICAgYW5pbWF0aW9uTmFtZToge1xuICAgICAgICAgICcwJSc6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMzMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnNzAlJzoge1xuICAgICAgICAgICAgb3BhY2l0eTogMC40NSxcbiAgICAgICAgICB9LFxuICAgICAgICAgICcxMDAlJzoge1xuICAgICAgICAgICAgb3BhY2l0eTogMC4zMyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICc+IHN2Zyc6IHtcbiAgICAgICAgaGVpZ2h0OiA3NSxcbiAgICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzIuNXMnLFxuICAgICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogJ2luZmluaXRlJyxcbiAgICAgICAgYW5pbWF0aW9uTmFtZToge1xuICAgICAgICAgICcwJSc6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMzMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnNzAlJzoge1xuICAgICAgICAgICAgb3BhY2l0eTogMC40NSxcbiAgICAgICAgICB9LFxuICAgICAgICAgICcxMDAlJzoge1xuICAgICAgICAgICAgb3BhY2l0eTogMC4zMyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgTW9kYWwsXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG4iXX0=
