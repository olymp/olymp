'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _route = require('olymp-pages/route');

var _route2 = _interopRequireDefault(_route);

var _olympAuth = require('olymp-auth0');

var _olympCloudinary = require('olymp-cloudinary');

var _recompose = require('recompose');

var _olympFela = require('olymp-fela');

var _reactRedux = require('react-redux');

var _prefetchRoutes = require('./prefetch-routes');

var _prefetchRoutes2 = _interopRequireDefault(_prefetchRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var enhance = (0, _recompose.compose)(_olympAuth.getAuth, (0, _recompose.lifecycle)({
  componentDidMount: function componentDidMount() {
    var _props = this.props,
        push = _props.push,
        login = _props.login;

    var keyDown = function keyDown(e) {
      if (e.altKey) {
        var closeMessage = _message3.default.loading('Gedrückt halten zum Anmelden', 99999);
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
}), (0, _reactRedux.connect)(function (_ref) {
  var app = _ref.app,
      location = _ref.location;
  return {
    _isLoading: app.loading,
    showLightbox: !!location.query.lightbox,
    showAuth: location.query.login !== undefined || location.query.register !== undefined || location.query.confirm !== undefined || location.query.forgot !== undefined || location.query.reset !== undefined || location.query.login !== undefined
  };
}));

var _ref3 = _react2.default.createElement(_olympCloudinary.Lightbox, { key: 2 });

var component = enhance(function (_ref2) {
  var _isLoading = _ref2._isLoading,
      flatNavigation = _ref2.flatNavigation,
      showLightbox = _ref2.showLightbox,
      showAuth = _ref2.showAuth,
      rest = _objectWithoutProperties(_ref2, ['_isLoading', 'flatNavigation', 'showLightbox', 'showAuth']);

  return [_react2.default.createElement(_olympFela.TopLoader, { loading: _isLoading, key: 1 }), showLightbox && _ref3, _react2.default.createElement(_route2.default, _extends({ flatNavigation: flatNavigation }, rest, { key: 4 })), _react2.default.createElement(_prefetchRoutes2.default, { flatNavigation: flatNavigation, key: 5 })];
});

component.displayName = 'CmsNoAuth';
exports.default = component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbXMvY21zLW5vYXV0aC5lczYiXSwibmFtZXMiOlsiZW5oYW5jZSIsImNvbXBvbmVudERpZE1vdW50IiwicHJvcHMiLCJwdXNoIiwibG9naW4iLCJrZXlEb3duIiwiZSIsImFsdEtleSIsImNsb3NlTWVzc2FnZSIsImxvYWRpbmciLCJ0aW1lciIsInNldFRpbWVvdXQiLCJrZXlVcCIsImNsZWFyVGltZW91dCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1bmxvYWQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImFwcCIsImxvY2F0aW9uIiwiX2lzTG9hZGluZyIsInNob3dMaWdodGJveCIsInF1ZXJ5IiwibGlnaHRib3giLCJzaG93QXV0aCIsInVuZGVmaW5lZCIsInJlZ2lzdGVyIiwiY29uZmlybSIsImZvcmdvdCIsInJlc2V0IiwiY29tcG9uZW50IiwiZmxhdE5hdmlnYXRpb24iLCJyZXN0IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsNENBRWQsMEJBQVU7QUFDUkMsbUJBRFEsK0JBQ1k7QUFBQSxpQkFDTSxLQUFLQyxLQURYO0FBQUEsUUFDVkMsSUFEVSxVQUNWQSxJQURVO0FBQUEsUUFDSkMsS0FESSxVQUNKQSxLQURJOztBQUVsQixRQUFNQyxVQUFVLFNBQVZBLE9BQVUsSUFBSztBQUNuQixVQUFJQyxFQUFFQyxNQUFOLEVBQWM7QUFDWixZQUFNQyxlQUFlLGtCQUFRQyxPQUFSLENBQ25CLDhCQURtQixFQUVuQixLQUZtQixDQUFyQjtBQUlBLFlBQU1DLFFBQVFDLFdBQVcsWUFBTTtBQUM3QjtBQUNBQztBQUNBUjtBQUNELFNBSmEsRUFJWCxJQUpXLENBQWQ7QUFLQSxZQUFNUSxTQUFRLFNBQVJBLE1BQVEsR0FBTTtBQUNsQkMsdUJBQWFILEtBQWI7QUFDQUY7QUFDQU0sbUJBQVNDLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDSCxNQUF0QyxFQUE2QyxLQUE3QztBQUNELFNBSkQ7QUFLQUUsaUJBQVNFLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DSixNQUFuQyxFQUEwQyxLQUExQztBQUNEO0FBQ0YsS0FsQkQ7QUFtQkFFLGFBQVNFLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDWCxPQUFyQyxFQUE4QyxLQUE5QztBQUNBLFNBQUtZLE1BQUwsR0FBYztBQUFBLGFBQ1pILFNBQVNDLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDVixPQUF4QyxFQUFpRCxLQUFqRCxDQURZO0FBQUEsS0FBZDtBQUVELEdBekJPO0FBMEJSYSxzQkExQlEsa0NBMEJlO0FBQ3JCLFNBQUtELE1BQUw7QUFDRDtBQTVCTyxDQUFWLENBRmMsRUFnQ2QseUJBQVE7QUFBQSxNQUFHRSxHQUFILFFBQUdBLEdBQUg7QUFBQSxNQUFRQyxRQUFSLFFBQVFBLFFBQVI7QUFBQSxTQUF3QjtBQUM5QkMsZ0JBQVlGLElBQUlWLE9BRGM7QUFFOUJhLGtCQUFjLENBQUMsQ0FBQ0YsU0FBU0csS0FBVCxDQUFlQyxRQUZEO0FBRzlCQyxjQUNFTCxTQUFTRyxLQUFULENBQWVuQixLQUFmLEtBQXlCc0IsU0FBekIsSUFDQU4sU0FBU0csS0FBVCxDQUFlSSxRQUFmLEtBQTRCRCxTQUQ1QixJQUVBTixTQUFTRyxLQUFULENBQWVLLE9BQWYsS0FBMkJGLFNBRjNCLElBR0FOLFNBQVNHLEtBQVQsQ0FBZU0sTUFBZixLQUEwQkgsU0FIMUIsSUFJQU4sU0FBU0csS0FBVCxDQUFlTyxLQUFmLEtBQXlCSixTQUp6QixJQUtBTixTQUFTRyxLQUFULENBQWVuQixLQUFmLEtBQXlCc0I7QUFURyxHQUF4QjtBQUFBLENBQVIsQ0FoQ2MsQ0FBaEI7O1lBK0NvQiwyREFBVSxLQUFLLENBQWYsRzs7QUFIcEIsSUFBTUssWUFBWS9CLFFBQ2hCO0FBQUEsTUFBR3FCLFVBQUgsU0FBR0EsVUFBSDtBQUFBLE1BQWVXLGNBQWYsU0FBZUEsY0FBZjtBQUFBLE1BQStCVixZQUEvQixTQUErQkEsWUFBL0I7QUFBQSxNQUE2Q0csUUFBN0MsU0FBNkNBLFFBQTdDO0FBQUEsTUFBMERRLElBQTFEOztBQUFBLFNBQXFFLENBQ25FLHNEQUFXLFNBQVNaLFVBQXBCLEVBQWdDLEtBQUssQ0FBckMsR0FEbUUsRUFFbkVDLHFCQUZtRSxFQUduRSwwREFBVyxnQkFBZ0JVLGNBQTNCLElBQStDQyxJQUEvQyxJQUFxRCxLQUFLLENBQTFELElBSG1FLEVBSW5FLDBEQUFnQixnQkFBZ0JELGNBQWhDLEVBQWdELEtBQUssQ0FBckQsR0FKbUUsQ0FBckU7QUFBQSxDQURnQixDQUFsQjs7QUFTQUQsVUFBVUcsV0FBVixHQUF3QixXQUF4QjtrQkFDZUgsUyIsImZpbGUiOiJjbXMvY21zL2Ntcy1ub2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2VSb3V0ZSBmcm9tICdvbHltcC1wYWdlcy9yb3V0ZSc7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnb2x5bXAtYXV0aDAnO1xuaW1wb3J0IHsgTGlnaHRib3ggfSBmcm9tICdvbHltcC1jbG91ZGluYXJ5JztcbmltcG9ydCB7IGxpZmVjeWNsZSwgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBUb3BMb2FkZXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJlZmV0Y2hSb3V0ZXMgZnJvbSAnLi9wcmVmZXRjaC1yb3V0ZXMnO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgZ2V0QXV0aCxcbiAgbGlmZWN5Y2xlKHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgcHVzaCwgbG9naW4gfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBrZXlEb3duID0gZSA9PiB7XG4gICAgICAgIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGNvbnN0IGNsb3NlTWVzc2FnZSA9IG1lc3NhZ2UubG9hZGluZyhcbiAgICAgICAgICAgICdHZWRyw7xja3QgaGFsdGVuIHp1bSBBbm1lbGRlbicsXG4gICAgICAgICAgICA5OTk5OSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBzZXRRdWVyeSh7IGxvZ2luOiBudWxsIH0pO1xuICAgICAgICAgICAga2V5VXAoKTtcbiAgICAgICAgICAgIGxvZ2luKCk7XG4gICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgY29uc3Qga2V5VXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgY2xvc2VNZXNzYWdlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwLCBmYWxzZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93biwgZmFsc2UpO1xuICAgICAgdGhpcy51bmxvYWQgPSAoKSA9PlxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93biwgZmFsc2UpO1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVubG9hZCgpO1xuICAgIH0sXG4gIH0pLFxuICBjb25uZWN0KCh7IGFwcCwgbG9jYXRpb24gfSkgPT4gKHtcbiAgICBfaXNMb2FkaW5nOiBhcHAubG9hZGluZyxcbiAgICBzaG93TGlnaHRib3g6ICEhbG9jYXRpb24ucXVlcnkubGlnaHRib3gsXG4gICAgc2hvd0F1dGg6XG4gICAgICBsb2NhdGlvbi5xdWVyeS5sb2dpbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBsb2NhdGlvbi5xdWVyeS5yZWdpc3RlciAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBsb2NhdGlvbi5xdWVyeS5jb25maXJtICE9PSB1bmRlZmluZWQgfHxcbiAgICAgIGxvY2F0aW9uLnF1ZXJ5LmZvcmdvdCAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBsb2NhdGlvbi5xdWVyeS5yZXNldCAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBsb2NhdGlvbi5xdWVyeS5sb2dpbiAhPT0gdW5kZWZpbmVkLFxuICB9KSksXG4pO1xuY29uc3QgY29tcG9uZW50ID0gZW5oYW5jZShcbiAgKHsgX2lzTG9hZGluZywgZmxhdE5hdmlnYXRpb24sIHNob3dMaWdodGJveCwgc2hvd0F1dGgsIC4uLnJlc3QgfSkgPT4gW1xuICAgIDxUb3BMb2FkZXIgbG9hZGluZz17X2lzTG9hZGluZ30ga2V5PXsxfSAvPixcbiAgICBzaG93TGlnaHRib3ggJiYgPExpZ2h0Ym94IGtleT17Mn0gLz4sXG4gICAgPFBhZ2VSb3V0ZSBmbGF0TmF2aWdhdGlvbj17ZmxhdE5hdmlnYXRpb259IHsuLi5yZXN0fSBrZXk9ezR9IC8+LFxuICAgIDxQcmVmZXRjaFJvdXRlcyBmbGF0TmF2aWdhdGlvbj17ZmxhdE5hdmlnYXRpb259IGtleT17NX0gLz4sXG4gIF0sXG4pO1xuXG5jb21wb25lbnQuZGlzcGxheU5hbWUgPSAnQ21zTm9BdXRoJztcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudDtcbiJdfQ==
