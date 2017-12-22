var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'olymp-router';
import { withAuth } from 'olymp-auth';
import { createComponent, Button } from 'olymp-fela';

// todo: withAuth auslagern!

var getPos = function getPos(node) {
  if (node) {
    return node.getBoundingClientRect();
  }

  return {};
};

export default (function (typeProp) {
  return function (WrappedComponent) {
    var EditButton = withRouter(createComponent(function (_ref) {
      var parent = _ref.parent;

      var pos = getPos(_this.button);

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
      return React.createElement(
        'div',
        {
          ref: function ref(button) {
            _this.button = button;
          },
          className: className
        },
        React.createElement(Button.Edit, { updateQuery: _defineProperty({}, '@' + type, id || 'new') })
      );
    }, function (p) {
      return Object.keys(p);
    }));

    var WithEdit = withAuth(createComponent(function (_ref4) {
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
      var pos = getPos(_this.content);

      if (!id || !auth || !auth.user || !type) {
        return React.createElement(WrappedComponent, _extends({ id: id }, p));
      }

      return React.createElement(
        'div',
        {
          className: className,
          ref: function ref(content) {
            _this.content = content;
          }
        },
        React.createElement(WrappedComponent, _extends({ id: id }, p)),
        React.createElement(EditButton, { id: id, type: type, parent: pos })
      );
    }, function (p) {
      return Object.keys(p);
    }));
    WithEdit.propTypes = {
      id: PropTypes.string
    };

    return WithEdit;
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vd2l0aC1lZGl0LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIndpdGhSb3V0ZXIiLCJ3aXRoQXV0aCIsImNyZWF0ZUNvbXBvbmVudCIsIkJ1dHRvbiIsImdldFBvcyIsIm5vZGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJFZGl0QnV0dG9uIiwicGFyZW50IiwicG9zIiwiYnV0dG9uIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsInRyYW5zZm9ybSIsInpJbmRleCIsImNsYXNzTmFtZSIsImlkIiwidHlwZSIsIk9iamVjdCIsImtleXMiLCJwIiwiV2l0aEVkaXQiLCJ0aGVtZSIsImRpc3BsYXkiLCJvbkhvdmVyIiwib25CZWZvcmUiLCJjb250ZW50IiwibGVmdCIsImJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImRhcms1Iiwib25BZnRlciIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyUmlnaHQiLCJjb2xvciIsImF1dGgiLCJsb2dvdXQiLCJ0eXBlUHJvcCIsInVzZXIiLCJwcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxVQUFULFFBQTJCLGNBQTNCO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixZQUF6QjtBQUNBLFNBQVNDLGVBQVQsRUFBMEJDLE1BQTFCLFFBQXdDLFlBQXhDOztBQUVBOztBQUVBLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxPQUFRO0FBQ3JCLE1BQUlDLElBQUosRUFBVTtBQUNSLFdBQU9BLEtBQUtDLHFCQUFMLEVBQVA7QUFDRDs7QUFFRCxTQUFPLEVBQVA7QUFDRCxDQU5EOztBQVFBLGdCQUFlO0FBQUEsU0FBWSw0QkFBb0I7QUFDN0MsUUFBTUMsYUFBYVAsV0FDakJFLGdCQUNFLGdCQUFnQjtBQUFBLFVBQWJNLE1BQWEsUUFBYkEsTUFB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bEIsVUFBVTJDO0FBREssS0FBckI7O0FBSUEsV0FBT3BCLFFBQVA7QUFDRCxHQWxHYztBQUFBLENBQWYiLCJmaWxlIjoicGFja2FnZXMvY29sbGVjdGlvbi93aXRoLWVkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgd2l0aEF1dGggfSBmcm9tICdvbHltcC1hdXRoJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCwgQnV0dG9uIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbi8vIHRvZG86IHdpdGhBdXRoIGF1c2xhZ2VybiFcblxuY29uc3QgZ2V0UG9zID0gbm9kZSA9PiB7XG4gIGlmIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICByZXR1cm4ge307XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlUHJvcCA9PiBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgRWRpdEJ1dHRvbiA9IHdpdGhSb3V0ZXIoXG4gICAgY3JlYXRlQ29tcG9uZW50KFxuICAgICAgKHsgcGFyZW50IH0pID0+IHtcbiAgICAgICAgY29uc3QgcG9zID0gZ2V0UG9zKHRoaXMuYnV0dG9uKTtcblxuICAgICAgICAvKiBjb25zb2xlLmxvZyhwYXJlbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFgpOyAqL1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLyogcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgdG9wOiBwb3MudG9wIDwgcGFyZW50LnRvcCA/IHBhcmVudC50b3AgOiAnNTAlJyxcbiAgICAgICAgICBsZWZ0OiBwYXJlbnQucmlnaHQsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJywgKi9cbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgIHJpZ2h0OiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSg1MCUsIC01MCUpJyxcbiAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgKHsgY2xhc3NOYW1lLCBpZCwgdHlwZSB9KSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e2J1dHRvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvbi5FZGl0IHVwZGF0ZVF1ZXJ5PXt7IFtgQCR7dHlwZX1gXTogaWQgfHwgJ25ldycgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApLFxuICAgICAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbiAgICApLFxuICApO1xuXG4gIGNvbnN0IFdpdGhFZGl0ID0gd2l0aEF1dGgoXG4gICAgY3JlYXRlQ29tcG9uZW50KFxuICAgICAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICc+ICo6bGFzdC1vZi10eXBlJzoge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgfSxcbiAgICAgICAgb25Ib3Zlcjoge1xuICAgICAgICAgIG9uQmVmb3JlOiB7XG4gICAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZGFyazUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkFmdGVyOiB7XG4gICAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgIGJvcmRlclJpZ2h0OiBgMnB4IHNvbGlkICR7dGhlbWUuY29sb3J9YCxcbiAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICB9LFxuICAgICAgICAgICc+ICo6bGFzdC1vZi10eXBlJzoge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICAoeyBjbGFzc05hbWUsIGlkLCBhdXRoLCBsb2dvdXQsIC4uLnAgfSkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlID1cbiAgICAgICAgICB0eXBlb2YgdHlwZVByb3AgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gdHlwZVByb3AoeyBpZCwgYXV0aCwgLi4ucCB9KVxuICAgICAgICAgICAgOiB0eXBlUHJvcDtcbiAgICAgICAgY29uc3QgcG9zID0gZ2V0UG9zKHRoaXMuY29udGVudCk7XG5cbiAgICAgICAgaWYgKCFpZCB8fCAhYXV0aCB8fCAhYXV0aC51c2VyIHx8ICF0eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IGlkPXtpZH0gey4uLnB9IC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgIHJlZj17Y29udGVudCA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IGlkPXtpZH0gey4uLnB9IC8+XG4gICAgICAgICAgICA8RWRpdEJ1dHRvbiBpZD17aWR9IHR5cGU9e3R5cGV9IHBhcmVudD17cG9zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHAgPT4gT2JqZWN0LmtleXMocCksXG4gICAgKSxcbiAgKTtcbiAgV2l0aEVkaXQucHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHJldHVybiBXaXRoRWRpdDtcbn07XG4iXX0=
