import 'antd/lib/message/style';
import _message from 'antd/lib/message';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PageRoute from 'olymp-pages/route';
import { getAuth } from 'olymp-auth0';
import { Lightbox } from 'olymp-cloudinary';
import { lifecycle, compose } from 'recompose';
import { TopLoader } from 'olymp-fela';
import { connect } from 'react-redux';

import PrefetchRoutes from './prefetch-routes';

var enhance = compose(getAuth, lifecycle({
  componentDidMount: function componentDidMount() {
    var _props = this.props,
        push = _props.push,
        login = _props.login;

    var keyDown = function keyDown(e) {
      if (e.altKey) {
        var closeMessage = _message.loading('Gedrückt halten zum Anmelden', 99999);
        var timer = setTimeout(function () {
          // setQuery({ login: null });
          _keyUp();
          login();
        }, 1500);
        var _keyUp = function _keyUp() {
          clearTimeout(timer);
          closeMessage();
          document.removeEventListener('keyup', _keyUp, false);
        };
        document.addEventListener('keyup', _keyUp, false);
      }
    };
    document.addEventListener('keydown', keyDown, false);
    this.unload = function () {
      return document.removeEventListener('keydown', keyDown, false);
    };
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unload();
  }
}), connect(function (_ref) {
  var app = _ref.app,
      location = _ref.location;
  return {
    _isLoading: app.loading,
    showLightbox: !!location.query.lightbox,
    showAuth: location.query.login !== undefined || location.query.register !== undefined || location.query.confirm !== undefined || location.query.forgot !== undefined || location.query.reset !== undefined || location.query.login !== undefined
  };
}));

var _ref3 = React.createElement(Lightbox, { key: 2 });

var component = enhance(function (_ref2) {
  var _isLoading = _ref2._isLoading,
      flatNavigation = _ref2.flatNavigation,
      showLightbox = _ref2.showLightbox,
      showAuth = _ref2.showAuth,
      rest = _objectWithoutProperties(_ref2, ['_isLoading', 'flatNavigation', 'showLightbox', 'showAuth']);

  return [React.createElement(TopLoader, { loading: _isLoading, key: 1 }), showLightbox && _ref3, React.createElement(PageRoute, _extends({ flatNavigation: flatNavigation }, rest, { key: 4 })), React.createElement(PrefetchRoutes, { flatNavigation: flatNavigation, key: 5 })];
});

component.displayName = 'CmsNoAuth';
export default component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Ntcy9jbXMtbm9hdXRoLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBhZ2VSb3V0ZSIsImdldEF1dGgiLCJMaWdodGJveCIsImxpZmVjeWNsZSIsImNvbXBvc2UiLCJUb3BMb2FkZXIiLCJjb25uZWN0IiwiUHJlZmV0Y2hSb3V0ZXMiLCJlbmhhbmNlIiwiY29tcG9uZW50RGlkTW91bnQiLCJwcm9wcyIsInB1c2giLCJsb2dpbiIsImtleURvd24iLCJlIiwiYWx0S2V5IiwiY2xvc2VNZXNzYWdlIiwibG9hZGluZyIsInRpbWVyIiwic2V0VGltZW91dCIsImtleVVwIiwiY2xlYXJUaW1lb3V0IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVubG9hZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiYXBwIiwibG9jYXRpb24iLCJfaXNMb2FkaW5nIiwic2hvd0xpZ2h0Ym94IiwicXVlcnkiLCJsaWdodGJveCIsInNob3dBdXRoIiwidW5kZWZpbmVkIiwicmVnaXN0ZXIiLCJjb25maXJtIiwiZm9yZ290IiwicmVzZXQiLCJjb21wb25lbnQiLCJmbGF0TmF2aWdhdGlvbiIsInJlc3QiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLG1CQUF0QjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGtCQUF6QjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLE9BQXBCLFFBQW1DLFdBQW5DO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixZQUExQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7O0FBRUEsT0FBT0MsY0FBUCxNQUEyQixtQkFBM0I7O0FBRUEsSUFBTUMsVUFBVUosUUFDZEgsT0FEYyxFQUVkRSxVQUFVO0FBQ1JNLG1CQURRLCtCQUNZO0FBQUEsaUJBQ00sS0FBS0MsS0FEWDtBQUFBLFFBQ1ZDLElBRFUsVUFDVkEsSUFEVTtBQUFBLFFBQ0pDLEtBREksVUFDSkEsS0FESTs7QUFFbEIsUUFBTUMsVUFBVSxTQUFWQSxPQUFVLElBQUs7QUFDbkIsVUFBSUMsRUFBRUMsTUFBTixFQUFjO0FBQ1osWUFBTUMsZUFBZSxTQUFRQyxPQUFSLENBQ25CLDhCQURtQixFQUVuQixLQUZtQixDQUFyQjtBQUlBLFlBQU1DLFFBQVFDLFdBQVcsWUFBTTtBQUM3QjtBQUNBQztBQUNBUjtBQUNELFNBSmEsRUFJWCxJQUpXLENBQWQ7QUFLQSxZQUFNUSxTQUFRLFNBQVJBLE1BQVEsR0FBTTtBQUNsQkMsdUJBQWFILEtBQWI7QUFDQUY7QUFDQU0sbUJBQVNDLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDSCxNQUF0QyxFQUE2QyxLQUE3QztBQUNELFNBSkQ7QUFLQUUsaUJBQVNFLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DSixNQUFuQyxFQUEwQyxLQUExQztBQUNEO0FBQ0YsS0FsQkQ7QUFtQkFFLGFBQVNFLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDWCxPQUFyQyxFQUE4QyxLQUE5QztBQUNBLFNBQUtZLE1BQUwsR0FBYztBQUFBLGFBQ1pILFNBQVNDLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDVixPQUF4QyxFQUFpRCxLQUFqRCxDQURZO0FBQUEsS0FBZDtBQUVELEdBekJPO0FBMEJSYSxzQkExQlEsa0NBMEJlO0FBQ3JCLFNBQUtELE1BQUw7QUFDRDtBQTVCTyxDQUFWLENBRmMsRUFnQ2RuQixRQUFRO0FBQUEsTUFBR3FCLEdBQUgsUUFBR0EsR0FBSDtBQUFBLE1BQVFDLFFBQVIsUUFBUUEsUUFBUjtBQUFBLFNBQXdCO0FBQzlCQyxnQkFBWUYsSUFBSVYsT0FEYztBQUU5QmEsa0JBQWMsQ0FBQyxDQUFDRixTQUFTRyxLQUFULENBQWVDLFFBRkQ7QUFHOUJDLGNBQ0VMLFNBQVNHLEtBQVQsQ0FBZW5CLEtBQWYsS0FBeUJzQixTQUF6QixJQUNBTixTQUFTRyxLQUFULENBQWVJLFFBQWYsS0FBNEJELFNBRDVCLElBRUFOLFNBQVNHLEtBQVQsQ0FBZUssT0FBZixLQUEyQkYsU0FGM0IsSUFHQU4sU0FBU0csS0FBVCxDQUFlTSxNQUFmLEtBQTBCSCxTQUgxQixJQUlBTixTQUFTRyxLQUFULENBQWVPLEtBQWYsS0FBeUJKLFNBSnpCLElBS0FOLFNBQVNHLEtBQVQsQ0FBZW5CLEtBQWYsS0FBeUJzQjtBQVRHLEdBQXhCO0FBQUEsQ0FBUixDQWhDYyxDQUFoQjs7WUErQ29CLG9CQUFDLFFBQUQsSUFBVSxLQUFLLENBQWYsRzs7QUFIcEIsSUFBTUssWUFBWS9CLFFBQ2hCO0FBQUEsTUFBR3FCLFVBQUgsU0FBR0EsVUFBSDtBQUFBLE1BQWVXLGNBQWYsU0FBZUEsY0FBZjtBQUFBLE1BQStCVixZQUEvQixTQUErQkEsWUFBL0I7QUFBQSxNQUE2Q0csUUFBN0MsU0FBNkNBLFFBQTdDO0FBQUEsTUFBMERRLElBQTFEOztBQUFBLFNBQXFFLENBQ25FLG9CQUFDLFNBQUQsSUFBVyxTQUFTWixVQUFwQixFQUFnQyxLQUFLLENBQXJDLEdBRG1FLEVBRW5FQyxxQkFGbUUsRUFHbkUsb0JBQUMsU0FBRCxhQUFXLGdCQUFnQlUsY0FBM0IsSUFBK0NDLElBQS9DLElBQXFELEtBQUssQ0FBMUQsSUFIbUUsRUFJbkUsb0JBQUMsY0FBRCxJQUFnQixnQkFBZ0JELGNBQWhDLEVBQWdELEtBQUssQ0FBckQsR0FKbUUsQ0FBckU7QUFBQSxDQURnQixDQUFsQjs7QUFTQUQsVUFBVUcsV0FBVixHQUF3QixXQUF4QjtBQUNBLGVBQWVILFNBQWYiLCJmaWxlIjoicGFja2FnZXMvY21zL2Ntcy1ub2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2VSb3V0ZSBmcm9tICdvbHltcC1wYWdlcy9yb3V0ZSc7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnb2x5bXAtYXV0aDAnO1xuaW1wb3J0IHsgTGlnaHRib3ggfSBmcm9tICdvbHltcC1jbG91ZGluYXJ5JztcbmltcG9ydCB7IGxpZmVjeWNsZSwgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBUb3BMb2FkZXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJlZmV0Y2hSb3V0ZXMgZnJvbSAnLi9wcmVmZXRjaC1yb3V0ZXMnO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgZ2V0QXV0aCxcbiAgbGlmZWN5Y2xlKHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgcHVzaCwgbG9naW4gfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBrZXlEb3duID0gZSA9PiB7XG4gICAgICAgIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGNvbnN0IGNsb3NlTWVzc2FnZSA9IG1lc3NhZ2UubG9hZGluZyhcbiAgICAgICAgICAgICdHZWRyw7xja3QgaGFsdGVuIHp1bSBBbm1lbGRlbicsXG4gICAgICAgICAgICA5OTk5OSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBzZXRRdWVyeSh7IGxvZ2luOiBudWxsIH0pO1xuICAgICAgICAgICAga2V5VXAoKTtcbiAgICAgICAgICAgIGxvZ2luKCk7XG4gICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgY29uc3Qga2V5VXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgY2xvc2VNZXNzYWdlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwLCBmYWxzZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93biwgZmFsc2UpO1xuICAgICAgdGhpcy51bmxvYWQgPSAoKSA9PlxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93biwgZmFsc2UpO1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVubG9hZCgpO1xuICAgIH0sXG4gIH0pLFxuICBjb25uZWN0KCh7IGFwcCwgbG9jYXRpb24gfSkgPT4gKHtcbiAgICBfaXNMb2FkaW5nOiBhcHAubG9hZGluZyxcbiAgICBzaG93TGlnaHRib3g6ICEhbG9jYXRpb24ucXVlcnkubGlnaHRib3gsXG4gICAgc2hvd0F1dGg6XG4gICAgICBsb2NhdGlvbi5xdWVyeS5sb2dpbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBsb2NhdGlvbi5xdWVyeS5yZWdpc3RlciAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBsb2NhdGlvbi5xdWVyeS5jb25maXJtICE9PSB1bmRlZmluZWQgfHxcbiAgICAgIGxvY2F0aW9uLnF1ZXJ5LmZvcmdvdCAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBsb2NhdGlvbi5xdWVyeS5yZXNldCAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBsb2NhdGlvbi5xdWVyeS5sb2dpbiAhPT0gdW5kZWZpbmVkLFxuICB9KSksXG4pO1xuY29uc3QgY29tcG9uZW50ID0gZW5oYW5jZShcbiAgKHsgX2lzTG9hZGluZywgZmxhdE5hdmlnYXRpb24sIHNob3dMaWdodGJveCwgc2hvd0F1dGgsIC4uLnJlc3QgfSkgPT4gW1xuICAgIDxUb3BMb2FkZXIgbG9hZGluZz17X2lzTG9hZGluZ30ga2V5PXsxfSAvPixcbiAgICBzaG93TGlnaHRib3ggJiYgPExpZ2h0Ym94IGtleT17Mn0gLz4sXG4gICAgPFBhZ2VSb3V0ZSBmbGF0TmF2aWdhdGlvbj17ZmxhdE5hdmlnYXRpb259IHsuLi5yZXN0fSBrZXk9ezR9IC8+LFxuICAgIDxQcmVmZXRjaFJvdXRlcyBmbGF0TmF2aWdhdGlvbj17ZmxhdE5hdmlnYXRpb259IGtleT17NX0gLz4sXG4gIF0sXG4pO1xuXG5jb21wb25lbnQuZGlzcGxheU5hbWUgPSAnQ21zTm9BdXRoJztcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudDtcbiJdfQ==
