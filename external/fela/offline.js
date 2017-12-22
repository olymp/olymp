import React from 'react';
import { createComponent } from 'react-fela';
import tinycolor from 'tinycolor2';
import Portal from './portal';

var _ref2 = React.createElement(
  'div',
  null,
  'Offline'
);

var _ref3 = React.createElement(
  'div',
  null,
  'Server Offline'
);

var Modal = function Modal(_ref) {
  var className = _ref.className,
      logo = _ref.logo,
      isOffline = _ref.isOffline,
      isServerDown = _ref.isServerDown;
  return isOffline ? React.createElement(
    Portal,
    null,
    React.createElement(
      'div',
      { className: className },
      _ref2
    )
  ) : isServerDown ? React.createElement(
    Portal,
    null,
    React.createElement(
      'div',
      { className: className },
      _ref3
    )
  ) : null;
};

var component = createComponent(function (_ref4) {
  var theme = _ref4.theme,
      bottomTransparency = _ref4.bottomTransparency,
      topTransparency = _ref4.topTransparency;
  return {
    backgroundColor: theme.color,
    zIndex: 1000000,
    background: 'linear-gradient(0deg, ' + (theme.colorEnd || tinycolor(theme.color).darken(6).spin(-6).setAlpha(bottomTransparency || 1).toRgbString()) + ', ' + (theme.colorStart || tinycolor(theme.color).lighten(6).spin(12).setAlpha(topTransparency || 1).toRgbString()) + ')',
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

export default component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvb2ZmbGluZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb21wb25lbnQiLCJ0aW55Y29sb3IiLCJQb3J0YWwiLCJNb2RhbCIsImNsYXNzTmFtZSIsImxvZ28iLCJpc09mZmxpbmUiLCJpc1NlcnZlckRvd24iLCJjb21wb25lbnQiLCJ0aGVtZSIsImJvdHRvbVRyYW5zcGFyZW5jeSIsInRvcFRyYW5zcGFyZW5jeSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiekluZGV4IiwiYmFja2dyb3VuZCIsImNvbG9yRW5kIiwiZGFya2VuIiwic3BpbiIsInNldEFscGhhIiwidG9SZ2JTdHJpbmciLCJjb2xvclN0YXJ0IiwibGlnaHRlbiIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInRyYW5zZm9ybSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJhbmltYXRpb25OYW1lIiwiYm94U2hhZG93IiwiT2JqZWN0Iiwia2V5cyIsInAiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7O1lBTVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDOztZQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUEsQzs7QUFWUixJQUFNQyxRQUFRLFNBQVJBLEtBQVE7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxNQUFjQyxJQUFkLFFBQWNBLElBQWQ7QUFBQSxNQUFvQkMsU0FBcEIsUUFBb0JBLFNBQXBCO0FBQUEsTUFBK0JDLFlBQS9CLFFBQStCQSxZQUEvQjtBQUFBLFNBQ1pELFlBQ0U7QUFBQyxVQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFXRixTQUFoQjtBQUFBO0FBQUE7QUFERixHQURGLEdBTUlHLGVBQ0Y7QUFBQyxVQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFXSCxTQUFoQjtBQUFBO0FBQUE7QUFERixHQURFLEdBTUEsSUFiUTtBQUFBLENBQWQ7O0FBZUEsSUFBTUksWUFBWVIsZ0JBQ2hCO0FBQUEsTUFBR1MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVUMsa0JBQVYsU0FBVUEsa0JBQVY7QUFBQSxNQUE4QkMsZUFBOUIsU0FBOEJBLGVBQTlCO0FBQUEsU0FBcUQ7QUFDbkRDLHFCQUFpQkgsTUFBTUksS0FENEI7QUFFbkRDLFlBQVEsT0FGMkM7QUFHbkRDLDRDQUFxQ04sTUFBTU8sUUFBTixJQUNuQ2YsVUFBVVEsTUFBTUksS0FBaEIsRUFDR0ksTUFESCxDQUNVLENBRFYsRUFFR0MsSUFGSCxDQUVRLENBQUMsQ0FGVCxFQUdHQyxRQUhILENBR1lULHNCQUFzQixDQUhsQyxFQUlHVSxXQUpILEVBREYsWUFLdUJYLE1BQU1ZLFVBQU4sSUFDckJwQixVQUFVUSxNQUFNSSxLQUFoQixFQUNHUyxPQURILENBQ1csQ0FEWCxFQUVHSixJQUZILENBRVEsRUFGUixFQUdHQyxRQUhILENBR1lSLG1CQUFtQixDQUgvQixFQUlHUyxXQUpILEVBTkYsT0FIbUQ7QUFjbkRHLGNBQVUsT0FkeUM7QUFlbkRDLFNBQUssQ0FmOEM7QUFnQm5EQyxVQUFNLENBaEI2QztBQWlCbkRDLFdBQU8sQ0FqQjRDO0FBa0JuREMsWUFBUSxDQWxCMkM7QUFtQm5EQyxXQUFPLE1BbkI0QztBQW9CbkRDLFlBQVEsTUFwQjJDO0FBcUJuRCxhQUFTO0FBQ1BoQixhQUFPLE9BREE7QUFFUGlCLGdCQUFVLEVBRkg7QUFHUEMsa0JBQVksR0FITDtBQUlQRixjQUFRLEdBSkQ7QUFLUEQsYUFBTyxHQUxBO0FBTVBJLGtCQUFZLE9BTkw7QUFPUEMsaUJBQVcsUUFQSjtBQVFQckIsdUJBQWlCSCxNQUFNSSxLQVJoQjtBQVNQcUIsb0JBQWMsTUFUUDtBQVVQQyxlQUFTLEVBVkY7QUFXUFosZ0JBQVUsVUFYSDtBQVlQQyxXQUFLLEtBWkU7QUFhUEMsWUFBTSxLQWJDO0FBY1BXLGlCQUFXLDBCQWRKO0FBZVBDLHlCQUFtQixNQWZaO0FBZ0JQQywrQkFBeUIsVUFoQmxCO0FBaUJQQyxxQkFBZTtBQUNiLGNBQU07QUFDSkMscUJBQVc7QUFEUCxTQURPO0FBSWIsZUFBTztBQUNMQSxxQkFBVztBQUROLFNBSk07QUFPYixnQkFBUTtBQUNOQSxxQkFBVztBQURMO0FBUEs7QUFqQlI7QUFyQjBDLEdBQXJEO0FBQUEsQ0FEZ0IsRUFvRGhCckMsS0FwRGdCLEVBcURoQjtBQUFBLFNBQUtzQyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBckRnQixDQUFsQjs7QUF3REEsZUFBZW5DLFNBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9vZmZsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9wb3J0YWwnO1xuXG5jb25zdCBNb2RhbCA9ICh7IGNsYXNzTmFtZSwgbG9nbywgaXNPZmZsaW5lLCBpc1NlcnZlckRvd24gfSkgPT5cbiAgaXNPZmZsaW5lID8gKFxuICAgIDxQb3J0YWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPGRpdj5PZmZsaW5lPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BvcnRhbD5cbiAgKSA6IGlzU2VydmVyRG93biA/IChcbiAgICA8UG9ydGFsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxkaXY+U2VydmVyIE9mZmxpbmU8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUG9ydGFsPlxuICApIDogbnVsbDtcblxuY29uc3QgY29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgYm90dG9tVHJhbnNwYXJlbmN5LCB0b3BUcmFuc3BhcmVuY3kgfSkgPT4gKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIHpJbmRleDogMTAwMDAwMCxcbiAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDBkZWcsICR7dGhlbWUuY29sb3JFbmQgfHxcbiAgICAgIHRpbnljb2xvcih0aGVtZS5jb2xvcilcbiAgICAgICAgLmRhcmtlbig2KVxuICAgICAgICAuc3BpbigtNilcbiAgICAgICAgLnNldEFscGhhKGJvdHRvbVRyYW5zcGFyZW5jeSB8fCAxKVxuICAgICAgICAudG9SZ2JTdHJpbmcoKX0sICR7dGhlbWUuY29sb3JTdGFydCB8fFxuICAgICAgdGlueWNvbG9yKHRoZW1lLmNvbG9yKVxuICAgICAgICAubGlnaHRlbig2KVxuICAgICAgICAuc3BpbigxMilcbiAgICAgICAgLnNldEFscGhhKHRvcFRyYW5zcGFyZW5jeSB8fCAxKVxuICAgICAgICAudG9SZ2JTdHJpbmcoKX0pYCxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAnPiBkaXYnOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGZvbnRTaXplOiAzMCxcbiAgICAgIGZvbnRXZWlnaHQ6IDIwMCxcbiAgICAgIGhlaWdodDogMzAwLFxuICAgICAgd2lkdGg6IDMwMCxcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNDBweCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcixcbiAgICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxuICAgICAgcGFkZGluZzogMzAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKScsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogJzIuNXMnLFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXG4gICAgICBhbmltYXRpb25OYW1lOiB7XG4gICAgICAgICcwJSc6IHtcbiAgICAgICAgICBib3hTaGFkb3c6ICcwIDAgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KScsXG4gICAgICAgIH0sXG4gICAgICAgICc3MCUnOiB7XG4gICAgICAgICAgYm94U2hhZG93OiAnMCAwIDAgMjBweCByZ2JhKDI1NSwyNTUsMjU1LCAwKScsXG4gICAgICAgIH0sXG4gICAgICAgICcxMDAlJzoge1xuICAgICAgICAgIGJveFNoYWRvdzogJzAgMCAwIDAgcmdiYSgyNTUsMjU1LDI1NSwgMCknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgTW9kYWwsXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudDtcbiJdfQ==
