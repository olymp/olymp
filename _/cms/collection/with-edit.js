'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _olympRouter = require('olymp-router');

var _olympAuth = require('olymp-auth');

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// todo: withAuth auslagern!

var getPos = function getPos(node) {
  if (node) {
    return node.getBoundingClientRect();
  }

  return {};
};

exports.default = function (typeProp) {
  return function (WrappedComponent) {
    var EditButton = (0, _olympRouter.withRouter)((0, _olympFela.createComponent)(function (_ref) {
      var parent = _ref.parent;

      var pos = getPos(undefined.button);

      /* console.log(parent);
      console.log(window.scrollX, window.scrollX); */

      return {
        /* position: 'fixed',
        top: pos.top < parent.top ? parent.top : '50%',
        left: parent.right,
        transform: 'translate(-50%, -50%)', */
        position: 'absolute',
        top: '50%',
        right: 1,
        transform: 'translate(50%, -50%)',
        zIndex: 2
      };
    }, function (_ref2) {
      var className = _ref2.className,
          id = _ref2.id,
          type = _ref2.type;
      return _react2.default.createElement(
        'div',
        {
          ref: function ref(button) {
            undefined.button = button;
          },
          className: className
        },
        _react2.default.createElement(_olympFela.Button.Edit, { updateQuery: _defineProperty({}, '@' + type, id || 'new') })
      );
    }, function (p) {
      return Object.keys(p);
    }));

    var WithEdit = (0, _olympAuth.withAuth)((0, _olympFela.createComponent)(function (_ref4) {
      var theme = _ref4.theme;
      return {
        position: 'relative',
        '> *:last-of-type': {
          display: 'none'
        },
        onHover: {
          onBefore: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: theme.dark5
          },
          onAfter: {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: 2,
            borderRight: '2px solid ' + theme.color,
            zIndex: 1
          },
          '> *:last-of-type': {
            display: 'block'
          }
        }
      };
    }, function (_ref5) {
      var className = _ref5.className,
          id = _ref5.id,
          auth = _ref5.auth,
          logout = _ref5.logout,
          p = _objectWithoutProperties(_ref5, ['className', 'id', 'auth', 'logout']);

      var type = typeof typeProp === 'function' ? typeProp(_extends({ id: id, auth: auth }, p)) : typeProp;
      var pos = getPos(undefined.content);

      if (!id || !auth || !auth.user || !type) {
        return _react2.default.createElement(WrappedComponent, _extends({ id: id }, p));
      }

      return _react2.default.createElement(
        'div',
        {
          className: className,
          ref: function ref(content) {
            undefined.content = content;
          }
        },
        _react2.default.createElement(WrappedComponent, _extends({ id: id }, p)),
        _react2.default.createElement(EditButton, { id: id, type: type, parent: pos })
      );
    }, function (p) {
      return Object.keys(p);
    }));
    WithEdit.propTypes = {
      id: _propTypes2.default.string
    };

    return WithEdit;
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3dpdGgtZWRpdC5lczYiXSwibmFtZXMiOlsiZ2V0UG9zIiwibm9kZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIkVkaXRCdXR0b24iLCJwYXJlbnQiLCJwb3MiLCJidXR0b24iLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwidHJhbnNmb3JtIiwiekluZGV4IiwiY2xhc3NOYW1lIiwiaWQiLCJ0eXBlIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJXaXRoRWRpdCIsInRoZW1lIiwiZGlzcGxheSIsIm9uSG92ZXIiLCJvbkJlZm9yZSIsImNvbnRlbnQiLCJsZWZ0IiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiZGFyazUiLCJvbkFmdGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJSaWdodCIsImNvbG9yIiwiYXV0aCIsImxvZ291dCIsInR5cGVQcm9wIiwidXNlciIsInByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLE9BQVE7QUFDckIsTUFBSUMsSUFBSixFQUFVO0FBQ1IsV0FBT0EsS0FBS0MscUJBQUwsRUFBUDtBQUNEOztBQUVELFNBQU8sRUFBUDtBQUNELENBTkQ7O2tCQVFlO0FBQUEsU0FBWSw0QkFBb0I7QUFDN0MsUUFBTUMsYUFBYSw2QkFDakIsZ0NBQ0UsZ0JBQWdCO0FBQUEsVUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUNkLFVBQU1DLE1BQU1MLE9BQU8sVUFBS00sTUFBWixDQUFaOztBQUVBOzs7QUFHQSxhQUFPO0FBQ0w7Ozs7QUFJQUMsa0JBQVUsVUFMTDtBQU1MQyxhQUFLLEtBTkE7QUFPTEMsZUFBTyxDQVBGO0FBUUxDLG1CQUFXLHNCQVJOO0FBU0xDLGdCQUFRO0FBVEgsT0FBUDtBQVdELEtBbEJILEVBbUJFO0FBQUEsVUFBR0MsU0FBSCxTQUFHQSxTQUFIO0FBQUEsVUFBY0MsRUFBZCxTQUFjQSxFQUFkO0FBQUEsVUFBa0JDLElBQWxCLFNBQWtCQSxJQUFsQjtBQUFBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsZUFBSyxxQkFBVTtBQUNiLHNCQUFLUixNQUFMLEdBQWNBLE1BQWQ7QUFDRCxXQUhIO0FBSUUscUJBQVdNO0FBSmI7QUFNRSx3REFBUSxJQUFSLElBQWEsdUNBQW9CRSxJQUFwQixFQUE2QkQsTUFBTSxLQUFuQyxDQUFiO0FBTkYsT0FERjtBQUFBLEtBbkJGLEVBNkJFO0FBQUEsYUFBS0UsT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxLQTdCRixDQURpQixDQUFuQjs7QUFrQ0EsUUFBTUMsV0FBVyx5QkFDZixnQ0FDRTtBQUFBLFVBQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLGFBQWdCO0FBQ2RaLGtCQUFVLFVBREk7QUFFZCw0QkFBb0I7QUFDbEJhLG1CQUFTO0FBRFMsU0FGTjtBQUtkQyxpQkFBUztBQUNQQyxvQkFBVTtBQUNSQyxxQkFBUyxJQUREO0FBRVJoQixzQkFBVSxVQUZGO0FBR1JDLGlCQUFLLENBSEc7QUFJUmdCLGtCQUFNLENBSkU7QUFLUkMsb0JBQVEsQ0FMQTtBQU1SaEIsbUJBQU8sQ0FOQztBQU9SaUIsNkJBQWlCUCxNQUFNUTtBQVBmLFdBREg7QUFVUEMsbUJBQVM7QUFDUEwscUJBQVMsSUFERjtBQUVQaEIsc0JBQVUsVUFGSDtBQUdQQyxpQkFBSyxDQUhFO0FBSVBDLG1CQUFPLENBSkE7QUFLUG9CLG9CQUFRLE1BTEQ7QUFNUEMsbUJBQU8sQ0FOQTtBQU9QQyx3Q0FBMEJaLE1BQU1hLEtBUHpCO0FBUVByQixvQkFBUTtBQVJELFdBVkY7QUFvQlAsOEJBQW9CO0FBQ2xCUyxxQkFBUztBQURTO0FBcEJiO0FBTEssT0FBaEI7QUFBQSxLQURGLEVBK0JFLGlCQUEyQztBQUFBLFVBQXhDUixTQUF3QyxTQUF4Q0EsU0FBd0M7QUFBQSxVQUE3QkMsRUFBNkIsU0FBN0JBLEVBQTZCO0FBQUEsVUFBekJvQixJQUF5QixTQUF6QkEsSUFBeUI7QUFBQSxVQUFuQkMsTUFBbUIsU0FBbkJBLE1BQW1CO0FBQUEsVUFBUmpCLENBQVE7O0FBQ3pDLFVBQU1ILE9BQ0osT0FBT3FCLFFBQVAsS0FBb0IsVUFBcEIsR0FDSUEsb0JBQVd0QixNQUFYLEVBQWVvQixVQUFmLElBQXdCaEIsQ0FBeEIsRUFESixHQUVJa0IsUUFITjtBQUlBLFVBQU05QixNQUFNTCxPQUFPLFVBQUt1QixPQUFaLENBQVo7O0FBRUEsVUFBSSxDQUFDVixFQUFELElBQU8sQ0FBQ29CLElBQVIsSUFBZ0IsQ0FBQ0EsS0FBS0csSUFBdEIsSUFBOEIsQ0FBQ3RCLElBQW5DLEVBQXlDO0FBQ3ZDLGVBQU8sOEJBQUMsZ0JBQUQsYUFBa0IsSUFBSUQsRUFBdEIsSUFBOEJJLENBQTlCLEVBQVA7QUFDRDs7QUFFRCxhQUNFO0FBQUE7QUFBQTtBQUNFLHFCQUFXTCxTQURiO0FBRUUsZUFBSyxzQkFBVztBQUNkLHNCQUFLVyxPQUFMLEdBQWVBLE9BQWY7QUFDRDtBQUpIO0FBTUUsc0NBQUMsZ0JBQUQsYUFBa0IsSUFBSVYsRUFBdEIsSUFBOEJJLENBQTlCLEVBTkY7QUFPRSxzQ0FBQyxVQUFELElBQVksSUFBSUosRUFBaEIsRUFBb0IsTUFBTUMsSUFBMUIsRUFBZ0MsUUFBUVQsR0FBeEM7QUFQRixPQURGO0FBV0QsS0FyREgsRUFzREU7QUFBQSxhQUFLVSxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLEtBdERGLENBRGUsQ0FBakI7QUEwREFDLGFBQVNtQixTQUFULEdBQXFCO0FBQ25CeEIsVUFBSSxvQkFBVXlCO0FBREssS0FBckI7O0FBSUEsV0FBT3BCLFFBQVA7QUFDRCxHQWxHYztBQUFBLEMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vd2l0aC1lZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IHdpdGhBdXRoIH0gZnJvbSAnb2x5bXAtYXV0aCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQsIEJ1dHRvbiB9IGZyb20gJ29seW1wLWZlbGEnO1xuXG4vLyB0b2RvOiB3aXRoQXV0aCBhdXNsYWdlcm4hXG5cbmNvbnN0IGdldFBvcyA9IG5vZGUgPT4ge1xuICBpZiAobm9kZSkge1xuICAgIHJldHVybiBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcmV0dXJuIHt9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZVByb3AgPT4gV3JhcHBlZENvbXBvbmVudCA9PiB7XG4gIGNvbnN0IEVkaXRCdXR0b24gPSB3aXRoUm91dGVyKFxuICAgIGNyZWF0ZUNvbXBvbmVudChcbiAgICAgICh7IHBhcmVudCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcyA9IGdldFBvcyh0aGlzLmJ1dHRvbik7XG5cbiAgICAgICAgLyogY29uc29sZS5sb2cocGFyZW50KTtcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxYKTsgKi9cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC8qIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHRvcDogcG9zLnRvcCA8IHBhcmVudC50b3AgPyBwYXJlbnQudG9wIDogJzUwJScsXG4gICAgICAgICAgbGVmdDogcGFyZW50LnJpZ2h0LFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsICovXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICByaWdodDogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoNTAlLCAtNTAlKScsXG4gICAgICAgICAgekluZGV4OiAyLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgICh7IGNsYXNzTmFtZSwgaWQsIHR5cGUgfSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtidXR0b24gPT4ge1xuICAgICAgICAgICAgdGhpcy5idXR0b24gPSBidXR0b247XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b24uRWRpdCB1cGRhdGVRdWVyeT17eyBbYEAke3R5cGV9YF06IGlkIHx8ICduZXcnIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSxcbiAgICAgIHAgPT4gT2JqZWN0LmtleXMocCksXG4gICAgKSxcbiAgKTtcblxuICBjb25zdCBXaXRoRWRpdCA9IHdpdGhBdXRoKFxuICAgIGNyZWF0ZUNvbXBvbmVudChcbiAgICAgICh7IHRoZW1lIH0pID0+ICh7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAnPiAqOmxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgICAgIG9uSG92ZXI6IHtcbiAgICAgICAgICBvbkJlZm9yZToge1xuICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRhcms1LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25BZnRlcjoge1xuICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICBib3JkZXJSaWdodDogYDJweCBzb2xpZCAke3RoZW1lLmNvbG9yfWAsXG4gICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAqOmxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgKHsgY2xhc3NOYW1lLCBpZCwgYXV0aCwgbG9nb3V0LCAuLi5wIH0pID0+IHtcbiAgICAgICAgY29uc3QgdHlwZSA9XG4gICAgICAgICAgdHlwZW9mIHR5cGVQcm9wID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IHR5cGVQcm9wKHsgaWQsIGF1dGgsIC4uLnAgfSlcbiAgICAgICAgICAgIDogdHlwZVByb3A7XG4gICAgICAgIGNvbnN0IHBvcyA9IGdldFBvcyh0aGlzLmNvbnRlbnQpO1xuXG4gICAgICAgIGlmICghaWQgfHwgIWF1dGggfHwgIWF1dGgudXNlciB8fCAhdHlwZSkge1xuICAgICAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCBpZD17aWR9IHsuLi5wfSAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICByZWY9e2NvbnRlbnQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudCBpZD17aWR9IHsuLi5wfSAvPlxuICAgICAgICAgICAgPEVkaXRCdXR0b24gaWQ9e2lkfSB0eXBlPXt0eXBlfSBwYXJlbnQ9e3Bvc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBwID0+IE9iamVjdC5rZXlzKHApLFxuICAgICksXG4gICk7XG4gIFdpdGhFZGl0LnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICByZXR1cm4gV2l0aEVkaXQ7XG59O1xuIl19
