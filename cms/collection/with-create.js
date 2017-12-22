function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { withRouter } from 'olymp-router';
import { withAuth } from 'olymp-auth';
import { createComponent, Button } from 'olymp-fela';

// todo: withAuth auslagern!

export default (function (type) {
  return function (WrappedComponent) {
    var CreateButton = withRouter(createComponent(function (_ref) {
      var top = _ref.top;
      return {
        position: 'absolute',
        left: '50%',
        top: top && 1,
        bottom: !top && 1,
        transform: top ? 'translate(-50%, -50%)' : 'translate(-50%, 50%)',
        zIndex: 2
      };
    }, function (_ref2) {
      var className = _ref2.className;
      return React.createElement(Button.Edit, {
        updateQuery: _defineProperty({}, '@' + type, 'new'),
        className: className
      });
    }, function (p) {
      return Object.keys(p);
    }));

    var _ref6 = React.createElement(CreateButton, { top: true });

    var _ref7 = React.createElement(CreateButton, null);

    return withAuth(createComponent(function (_ref4) {
      var theme = _ref4.theme;
      return {
        position: 'relative',
        '> a:first-of-type': {
          display: 'none'
        },
        '> a:last-of-type': {
          display: 'none'
        },
        onHover: {
          onBefore: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 2,
            content: '""',
            borderTop: '2px solid ' + theme.color,
            zIndex: 1
          },
          onAfter: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 2,
            content: '""',
            borderTop: '2px solid ' + theme.color,
            zIndex: 1
          },
          '> a:first-of-type': {
            display: 'block'
          },
          '> a:last-of-type': {
            display: 'block'
          }
        }
      };
    }, function (_ref5) {
      var className = _ref5.className,
          auth = _ref5.auth,
          logout = _ref5.logout,
          p = _objectWithoutProperties(_ref5, ['className', 'auth', 'logout']);

      return auth && auth.user ? React.createElement(
        'div',
        { className: className },
        _ref6,
        React.createElement(WrappedComponent, p),
        _ref7
      ) : React.createElement(WrappedComponent, p);
    }, function (p) {
      return Object.keys(p);
    }));
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vd2l0aC1jcmVhdGUuZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwid2l0aFJvdXRlciIsIndpdGhBdXRoIiwiY3JlYXRlQ29tcG9uZW50IiwiQnV0dG9uIiwiQ3JlYXRlQnV0dG9uIiwidG9wIiwicG9zaXRpb24iLCJsZWZ0IiwiYm90dG9tIiwidHJhbnNmb3JtIiwiekluZGV4IiwiY2xhc3NOYW1lIiwidHlwZSIsIk9iamVjdCIsImtleXMiLCJwIiwidGhlbWUiLCJkaXNwbGF5Iiwib25Ib3ZlciIsIm9uQmVmb3JlIiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZW50IiwiYm9yZGVyVG9wIiwiY29sb3IiLCJvbkFmdGVyIiwiYXV0aCIsImxvZ291dCIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixjQUEzQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsWUFBekI7QUFDQSxTQUFTQyxlQUFULEVBQTBCQyxNQUExQixRQUF3QyxZQUF4Qzs7QUFFQTs7QUFFQSxnQkFBZTtBQUFBLFNBQVEsNEJBQW9CO0FBQ3pDLFFBQU1DLGVBQWVKLFdBQ25CRSxnQkFDRTtBQUFBLFVBQUdHLEdBQUgsUUFBR0EsR0FBSDtBQUFBLGFBQWM7QUFDWkMsa0JBQVUsVUFERTtBQUVaQyxjQUFNLEtBRk07QUFHWkYsYUFBS0EsT0FBTyxDQUhBO0FBSVpHLGdCQUFRLENBQUNILEdBQUQsSUFBUSxDQUpKO0FBS1pJLG1CQUFXSixNQUFNLHVCQUFOLEdBQWdDLHNCQUwvQjtBQU1aSyxnQkFBUTtBQU5JLE9BQWQ7QUFBQSxLQURGLEVBU0U7QUFBQSxVQUFHQyxTQUFILFNBQUdBLFNBQUg7QUFBQSxhQUNFLG9CQUFDLE1BQUQsQ0FBUSxJQUFSO0FBQ0UsK0NBQW9CQyxJQUFwQixFQUE2QixLQUE3QixDQURGO0FBRUUsbUJBQVdEO0FBRmIsUUFERjtBQUFBLEtBVEYsRUFlRTtBQUFBLGFBQUtFLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsS0FmRixDQURtQixDQUFyQjs7QUFEeUMsZ0JBK0QvQixvQkFBQyxZQUFELElBQWMsU0FBZCxHQS9EK0I7O0FBQUEsZ0JBaUUvQixvQkFBQyxZQUFELE9BakUrQjs7QUFxQnpDLFdBQU9kLFNBQ0xDLGdCQUNFO0FBQUEsVUFBR2MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsYUFBZ0I7QUFDZFYsa0JBQVUsVUFESTtBQUVkLDZCQUFxQjtBQUNuQlcsbUJBQVM7QUFEVSxTQUZQO0FBS2QsNEJBQW9CO0FBQ2xCQSxtQkFBUztBQURTLFNBTE47QUFRZEMsaUJBQVM7QUFDUEMsb0JBQVU7QUFDUmIsc0JBQVUsVUFERjtBQUVSRCxpQkFBSyxDQUZHO0FBR1JFLGtCQUFNLENBSEU7QUFJUmEsbUJBQU8sTUFKQztBQUtSQyxvQkFBUSxDQUxBO0FBTVJDLHFCQUFTLElBTkQ7QUFPUkMsc0NBQXdCUCxNQUFNUSxLQVB0QjtBQVFSZCxvQkFBUTtBQVJBLFdBREg7QUFXUGUsbUJBQVM7QUFDUG5CLHNCQUFVLFVBREg7QUFFUEUsb0JBQVEsQ0FGRDtBQUdQRCxrQkFBTSxDQUhDO0FBSVBhLG1CQUFPLE1BSkE7QUFLUEMsb0JBQVEsQ0FMRDtBQU1QQyxxQkFBUyxJQU5GO0FBT1BDLHNDQUF3QlAsTUFBTVEsS0FQdkI7QUFRUGQsb0JBQVE7QUFSRCxXQVhGO0FBcUJQLCtCQUFxQjtBQUNuQk8scUJBQVM7QUFEVSxXQXJCZDtBQXdCUCw4QkFBb0I7QUFDbEJBLHFCQUFTO0FBRFM7QUF4QmI7QUFSSyxPQUFoQjtBQUFBLEtBREYsRUFzQ0U7QUFBQSxVQUFHTixTQUFILFNBQUdBLFNBQUg7QUFBQSxVQUFjZSxJQUFkLFNBQWNBLElBQWQ7QUFBQSxVQUFvQkMsTUFBcEIsU0FBb0JBLE1BQXBCO0FBQUEsVUFBK0JaLENBQS9COztBQUFBLGFBQ0VXLFFBQVFBLEtBQUtFLElBQWIsR0FDRTtBQUFBO0FBQUEsVUFBSyxXQUFXakIsU0FBaEI7QUFBQTtBQUVFLDRCQUFDLGdCQUFELEVBQXNCSSxDQUF0QixDQUZGO0FBQUE7QUFBQSxPQURGLEdBT0Usb0JBQUMsZ0JBQUQsRUFBc0JBLENBQXRCLENBUko7QUFBQSxLQXRDRixFQWdERTtBQUFBLGFBQUtGLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsS0FoREYsQ0FESyxDQUFQO0FBb0RELEdBekVjO0FBQUEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL3dpdGgtY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgd2l0aEF1dGggfSBmcm9tICdvbHltcC1hdXRoJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCwgQnV0dG9uIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbi8vIHRvZG86IHdpdGhBdXRoIGF1c2xhZ2VybiFcblxuZXhwb3J0IGRlZmF1bHQgdHlwZSA9PiBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgQ3JlYXRlQnV0dG9uID0gd2l0aFJvdXRlcihcbiAgICBjcmVhdGVDb21wb25lbnQoXG4gICAgICAoeyB0b3AgfSkgPT4gKHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICB0b3A6IHRvcCAmJiAxLFxuICAgICAgICBib3R0b206ICF0b3AgJiYgMSxcbiAgICAgICAgdHJhbnNmb3JtOiB0b3AgPyAndHJhbnNsYXRlKC01MCUsIC01MCUpJyA6ICd0cmFuc2xhdGUoLTUwJSwgNTAlKScsXG4gICAgICAgIHpJbmRleDogMixcbiAgICAgIH0pLFxuICAgICAgKHsgY2xhc3NOYW1lIH0pID0+IChcbiAgICAgICAgPEJ1dHRvbi5FZGl0XG4gICAgICAgICAgdXBkYXRlUXVlcnk9e3sgW2BAJHt0eXBlfWBdOiAnbmV3JyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAvPlxuICAgICAgKSxcbiAgICAgIHAgPT4gT2JqZWN0LmtleXMocCksXG4gICAgKSxcbiAgKTtcblxuICByZXR1cm4gd2l0aEF1dGgoXG4gICAgY3JlYXRlQ29tcG9uZW50KFxuICAgICAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICc+IGE6Zmlyc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgICAgICc+IGE6bGFzdC1vZi10eXBlJzoge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgfSxcbiAgICAgICAgb25Ib3Zlcjoge1xuICAgICAgICAgIG9uQmVmb3JlOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAyLFxuICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICAgICAgYm9yZGVyVG9wOiBgMnB4IHNvbGlkICR7dGhlbWUuY29sb3J9YCxcbiAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQWZ0ZXI6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6IDIsXG4gICAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgICBib3JkZXJUb3A6IGAycHggc29saWQgJHt0aGVtZS5jb2xvcn1gLFxuICAgICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gYTpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICc+IGE6bGFzdC1vZi10eXBlJzoge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICAoeyBjbGFzc05hbWUsIGF1dGgsIGxvZ291dCwgLi4ucCB9KSA9PlxuICAgICAgICBhdXRoICYmIGF1dGgudXNlciA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxDcmVhdGVCdXR0b24gdG9wIC8+XG4gICAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4ucH0gLz5cbiAgICAgICAgICAgIDxDcmVhdGVCdXR0b24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4ucH0gLz5cbiAgICAgICAgKSxcbiAgICAgIHAgPT4gT2JqZWN0LmtleXMocCksXG4gICAgKSxcbiAgKTtcbn07XG4iXX0=
