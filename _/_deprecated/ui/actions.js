'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _portal = require('olymp-fela/portal');

var _portal2 = _interopRequireDefault(_portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      position = _ref.position;
  return {
    position: 'absolute',
    top: 0,
    right: position === 'left' ? undefined : 0,
    left: position === 'left' ? 60 : undefined,
    zIndex: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '> .ant-btn': {
      backgroundColor: '#404040',
      color: 'white',
      margin: 0,
      marginY: 2,
      borderTopLeftRadius: position === 'left' ? 0 : 5,
      borderBottomLeftRadius: position === 'left' ? 0 : 5,
      borderTopRightRadius: position === 'left' ? 5 : 0,
      borderBottomRightRadius: position === 'left' ? 5 : 0,
      borderLeft: position === 'left' ? 0 : undefined,
      borderRight: position === 'left' ? undefined : 0,
      paddingTop: 8,
      width: 40,
      height: 40
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  return _react2.default.createElement(
    'span',
    { className: className },
    children
  );
}, []);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2FjdGlvbnMuZXM2Il0sIm5hbWVzIjpbInRoZW1lIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsInVuZGVmaW5lZCIsImxlZnQiLCJ6SW5kZXgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm1hcmdpbiIsIm1hcmdpblkiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJMZWZ0IiwiYm9yZGVyUmlnaHQiLCJwYWRkaW5nVG9wIiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7O2tCQUVlLGdDQUNiO0FBQUEsTUFBR0EsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsUUFBVixRQUFVQSxRQUFWO0FBQUEsU0FBMEI7QUFDeEJBLGNBQVUsVUFEYztBQUV4QkMsU0FBSyxDQUZtQjtBQUd4QkMsV0FBT0YsYUFBYSxNQUFiLEdBQXNCRyxTQUF0QixHQUFrQyxDQUhqQjtBQUl4QkMsVUFBTUosYUFBYSxNQUFiLEdBQXNCLEVBQXRCLEdBQTJCRyxTQUpUO0FBS3hCRSxZQUFRLENBTGdCO0FBTXhCQyxhQUFTLE1BTmU7QUFPeEJDLG1CQUFlLFFBUFM7QUFReEJDLGdCQUFZLFFBUlk7QUFTeEIsa0JBQWM7QUFDWkMsdUJBQWlCLFNBREw7QUFFWkMsYUFBTyxPQUZLO0FBR1pDLGNBQVEsQ0FISTtBQUlaQyxlQUFTLENBSkc7QUFLWkMsMkJBQXFCYixhQUFhLE1BQWIsR0FBc0IsQ0FBdEIsR0FBMEIsQ0FMbkM7QUFNWmMsOEJBQXdCZCxhQUFhLE1BQWIsR0FBc0IsQ0FBdEIsR0FBMEIsQ0FOdEM7QUFPWmUsNEJBQXNCZixhQUFhLE1BQWIsR0FBc0IsQ0FBdEIsR0FBMEIsQ0FQcEM7QUFRWmdCLCtCQUF5QmhCLGFBQWEsTUFBYixHQUFzQixDQUF0QixHQUEwQixDQVJ2QztBQVNaaUIsa0JBQVlqQixhQUFhLE1BQWIsR0FBc0IsQ0FBdEIsR0FBMEJHLFNBVDFCO0FBVVplLG1CQUFhbEIsYUFBYSxNQUFiLEdBQXNCRyxTQUF0QixHQUFrQyxDQVZuQztBQVdaZ0Isa0JBQVksQ0FYQTtBQVlaQyxhQUFPLEVBWks7QUFhWkMsY0FBUTtBQWJJO0FBVFUsR0FBMUI7QUFBQSxDQURhLEVBMEJiO0FBQUEsTUFBR0MsU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBY0MsUUFBZCxTQUFjQSxRQUFkO0FBQUEsU0FBNkI7QUFBQTtBQUFBLE1BQU0sV0FBV0QsU0FBakI7QUFBNkJDO0FBQTdCLEdBQTdCO0FBQUEsQ0ExQmEsRUEyQmIsRUEzQmEsQyIsImZpbGUiOiJleHRlcm5hbC91aS9hY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICdvbHltcC1mZWxhL3BvcnRhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiBwb3NpdGlvbiA9PT0gJ2xlZnQnID8gdW5kZWZpbmVkIDogMCxcbiAgICBsZWZ0OiBwb3NpdGlvbiA9PT0gJ2xlZnQnID8gNjAgOiB1bmRlZmluZWQsXG4gICAgekluZGV4OiA1LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAnPiAuYW50LWJ0bic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MDQwNDAnLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBtYXJnaW5ZOiAyLFxuICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogcG9zaXRpb24gPT09ICdsZWZ0JyA/IDAgOiA1LFxuICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogcG9zaXRpb24gPT09ICdsZWZ0JyA/IDAgOiA1LFxuICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHBvc2l0aW9uID09PSAnbGVmdCcgPyA1IDogMCxcbiAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBwb3NpdGlvbiA9PT0gJ2xlZnQnID8gNSA6IDAsXG4gICAgICBib3JkZXJMZWZ0OiBwb3NpdGlvbiA9PT0gJ2xlZnQnID8gMCA6IHVuZGVmaW5lZCxcbiAgICAgIGJvcmRlclJpZ2h0OiBwb3NpdGlvbiA9PT0gJ2xlZnQnID8gdW5kZWZpbmVkIDogMCxcbiAgICAgIHBhZGRpbmdUb3A6IDgsXG4gICAgICB3aWR0aDogNDAsXG4gICAgICBoZWlnaHQ6IDQwLFxuICAgIH0sXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0pID0+IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9zcGFuPixcbiAgW10sXG4pO1xuIl19
