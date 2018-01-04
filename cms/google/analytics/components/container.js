'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactFela = require('react-fela');

exports.default = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    position: 'relative',
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%'
    },
    '> div': {
      flex: '1 1 0%',
      overflow: 'auto'
    },
    '> div:not(:first-of-type)': {
      marginTop: theme.space2
    }
  };
}, 'div', []);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvYW5hbHl0aWNzL2NvbXBvbmVudHMvY29udGFpbmVyLmVzNiJdLCJuYW1lcyI6WyJ0aGVtZSIsInBvc2l0aW9uIiwiaGFzRmxleCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJmbGV4Iiwib3ZlcmZsb3ciLCJtYXJnaW5Ub3AiLCJzcGFjZTIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztrQkFFZSxnQ0FDYjtBQUFBLE1BQUdBLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLGNBQVUsVUFESTtBQUVkQyxhQUFTO0FBQ1BDLGVBQVMsTUFERjtBQUVQQyxxQkFBZSxRQUZSO0FBR1BDLHNCQUFnQixlQUhUO0FBSVBDLGNBQVE7QUFKRCxLQUZLO0FBUWQsYUFBUztBQUNQQyxZQUFNLFFBREM7QUFFUEMsZ0JBQVU7QUFGSCxLQVJLO0FBWWQsaUNBQTZCO0FBQzNCQyxpQkFBV1QsTUFBTVU7QUFEVTtBQVpmLEdBQWhCO0FBQUEsQ0FEYSxFQWlCYixLQWpCYSxFQWtCYixFQWxCYSxDIiwiZmlsZSI6ImNtcy9nb29nbGUvYW5hbHl0aWNzL2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBoYXNGbGV4OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB9LFxuICAgICc+IGRpdic6IHtcbiAgICAgIGZsZXg6ICcxIDEgMCUnLFxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICB9LFxuICAgICc+IGRpdjpub3QoOmZpcnN0LW9mLXR5cGUpJzoge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjZTIsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICBbXVxuKTtcbiJdfQ==
