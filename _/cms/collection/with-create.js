'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympRouter = require('olymp-router');

var _olympAuth = require('olymp-auth');

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// todo: withAuth auslagern!

exports.default = function (type) {
  return function (WrappedComponent) {
    var CreateButton = (0, _olympRouter.withRouter)((0, _olympFela.createComponent)(function (_ref) {
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
      return _react2.default.createElement(_olympFela.Button.Edit, {
        updateQuery: _defineProperty({}, '@' + type, 'new'),
        className: className
      });
    }, function (p) {
      return Object.keys(p);
    }));

    var _ref6 = _react2.default.createElement(CreateButton, { top: true });

    var _ref7 = _react2.default.createElement(CreateButton, null);

    return (0, _olympAuth.withAuth)((0, _olympFela.createComponent)(function (_ref4) {
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

      return auth && auth.user ? _react2.default.createElement(
        'div',
        { className: className },
        _ref6,
        _react2.default.createElement(WrappedComponent, p),
        _ref7
      ) : _react2.default.createElement(WrappedComponent, p);
    }, function (p) {
      return Object.keys(p);
    }));
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3dpdGgtY3JlYXRlLmVzNiJdLCJuYW1lcyI6WyJDcmVhdGVCdXR0b24iLCJ0b3AiLCJwb3NpdGlvbiIsImxlZnQiLCJib3R0b20iLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJjbGFzc05hbWUiLCJ0eXBlIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJ0aGVtZSIsImRpc3BsYXkiLCJvbkhvdmVyIiwib25CZWZvcmUiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRlbnQiLCJib3JkZXJUb3AiLCJjb2xvciIsIm9uQWZ0ZXIiLCJhdXRoIiwibG9nb3V0IiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQTs7a0JBRWU7QUFBQSxTQUFRLDRCQUFvQjtBQUN6QyxRQUFNQSxlQUFlLDZCQUNuQixnQ0FDRTtBQUFBLFVBQUdDLEdBQUgsUUFBR0EsR0FBSDtBQUFBLGFBQWM7QUFDWkMsa0JBQVUsVUFERTtBQUVaQyxjQUFNLEtBRk07QUFHWkYsYUFBS0EsT0FBTyxDQUhBO0FBSVpHLGdCQUFRLENBQUNILEdBQUQsSUFBUSxDQUpKO0FBS1pJLG1CQUFXSixNQUFNLHVCQUFOLEdBQWdDLHNCQUwvQjtBQU1aSyxnQkFBUTtBQU5JLE9BQWQ7QUFBQSxLQURGLEVBU0U7QUFBQSxVQUFHQyxTQUFILFNBQUdBLFNBQUg7QUFBQSxhQUNFLGdEQUFRLElBQVI7QUFDRSwrQ0FBb0JDLElBQXBCLEVBQTZCLEtBQTdCLENBREY7QUFFRSxtQkFBV0Q7QUFGYixRQURGO0FBQUEsS0FURixFQWVFO0FBQUEsYUFBS0UsT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxLQWZGLENBRG1CLENBQXJCOztBQUR5QyxnQkErRC9CLDhCQUFDLFlBQUQsSUFBYyxTQUFkLEdBL0QrQjs7QUFBQSxnQkFpRS9CLDhCQUFDLFlBQUQsT0FqRStCOztBQXFCekMsV0FBTyx5QkFDTCxnQ0FDRTtBQUFBLFVBQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLGFBQWdCO0FBQ2RWLGtCQUFVLFVBREk7QUFFZCw2QkFBcUI7QUFDbkJXLG1CQUFTO0FBRFUsU0FGUDtBQUtkLDRCQUFvQjtBQUNsQkEsbUJBQVM7QUFEUyxTQUxOO0FBUWRDLGlCQUFTO0FBQ1BDLG9CQUFVO0FBQ1JiLHNCQUFVLFVBREY7QUFFUkQsaUJBQUssQ0FGRztBQUdSRSxrQkFBTSxDQUhFO0FBSVJhLG1CQUFPLE1BSkM7QUFLUkMsb0JBQVEsQ0FMQTtBQU1SQyxxQkFBUyxJQU5EO0FBT1JDLHNDQUF3QlAsTUFBTVEsS0FQdEI7QUFRUmQsb0JBQVE7QUFSQSxXQURIO0FBV1BlLG1CQUFTO0FBQ1BuQixzQkFBVSxVQURIO0FBRVBFLG9CQUFRLENBRkQ7QUFHUEQsa0JBQU0sQ0FIQztBQUlQYSxtQkFBTyxNQUpBO0FBS1BDLG9CQUFRLENBTEQ7QUFNUEMscUJBQVMsSUFORjtBQU9QQyxzQ0FBd0JQLE1BQU1RLEtBUHZCO0FBUVBkLG9CQUFRO0FBUkQsV0FYRjtBQXFCUCwrQkFBcUI7QUFDbkJPLHFCQUFTO0FBRFUsV0FyQmQ7QUF3QlAsOEJBQW9CO0FBQ2xCQSxxQkFBUztBQURTO0FBeEJiO0FBUkssT0FBaEI7QUFBQSxLQURGLEVBc0NFO0FBQUEsVUFBR04sU0FBSCxTQUFHQSxTQUFIO0FBQUEsVUFBY2UsSUFBZCxTQUFjQSxJQUFkO0FBQUEsVUFBb0JDLE1BQXBCLFNBQW9CQSxNQUFwQjtBQUFBLFVBQStCWixDQUEvQjs7QUFBQSxhQUNFVyxRQUFRQSxLQUFLRSxJQUFiLEdBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV2pCLFNBQWhCO0FBQUE7QUFFRSxzQ0FBQyxnQkFBRCxFQUFzQkksQ0FBdEIsQ0FGRjtBQUFBO0FBQUEsT0FERixHQU9FLDhCQUFDLGdCQUFELEVBQXNCQSxDQUF0QixDQVJKO0FBQUEsS0F0Q0YsRUFnREU7QUFBQSxhQUFLRixPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLEtBaERGLENBREssQ0FBUDtBQW9ERCxHQXpFYztBQUFBLEMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vd2l0aC1jcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyB3aXRoQXV0aCB9IGZyb20gJ29seW1wLWF1dGgnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBCdXR0b24gfSBmcm9tICdvbHltcC1mZWxhJztcblxuLy8gdG9kbzogd2l0aEF1dGggYXVzbGFnZXJuIVxuXG5leHBvcnQgZGVmYXVsdCB0eXBlID0+IFdyYXBwZWRDb21wb25lbnQgPT4ge1xuICBjb25zdCBDcmVhdGVCdXR0b24gPSB3aXRoUm91dGVyKFxuICAgIGNyZWF0ZUNvbXBvbmVudChcbiAgICAgICh7IHRvcCB9KSA9PiAoe1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgIHRvcDogdG9wICYmIDEsXG4gICAgICAgIGJvdHRvbTogIXRvcCAmJiAxLFxuICAgICAgICB0cmFuc2Zvcm06IHRvcCA/ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknIDogJ3RyYW5zbGF0ZSgtNTAlLCA1MCUpJyxcbiAgICAgICAgekluZGV4OiAyLFxuICAgICAgfSksXG4gICAgICAoeyBjbGFzc05hbWUgfSkgPT4gKFxuICAgICAgICA8QnV0dG9uLkVkaXRcbiAgICAgICAgICB1cGRhdGVRdWVyeT17eyBbYEAke3R5cGV9YF06ICduZXcnIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIC8+XG4gICAgICApLFxuICAgICAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbiAgICApLFxuICApO1xuXG4gIHJldHVybiB3aXRoQXV0aChcbiAgICBjcmVhdGVDb21wb25lbnQoXG4gICAgICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgJz4gYTpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgfSxcbiAgICAgICAgJz4gYTpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICB9LFxuICAgICAgICBvbkhvdmVyOiB7XG4gICAgICAgICAgb25CZWZvcmU6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6IDIsXG4gICAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgICBib3JkZXJUb3A6IGAycHggc29saWQgJHt0aGVtZS5jb2xvcn1gLFxuICAgICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25BZnRlcjoge1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogMixcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgICAgIGJvcmRlclRvcDogYDJweCBzb2xpZCAke3RoZW1lLmNvbG9yfWAsXG4gICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiBhOmZpcnN0LW9mLXR5cGUnOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gYTpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgICh7IGNsYXNzTmFtZSwgYXV0aCwgbG9nb3V0LCAuLi5wIH0pID0+XG4gICAgICAgIGF1dGggJiYgYXV0aC51c2VyID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgPENyZWF0ZUJ1dHRvbiB0b3AgLz5cbiAgICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wfSAvPlxuICAgICAgICAgICAgPENyZWF0ZUJ1dHRvbiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wfSAvPlxuICAgICAgICApLFxuICAgICAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbiAgICApLFxuICApO1xufTtcbiJdfQ==
