'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympRouter = require('olymp-router');

var _userAgent = require('olymp-utils/user-agent');

var _userAgent2 = _interopRequireDefault(_userAgent);

var _editable = require('olymp-pages/editable');

var _editable2 = _interopRequireDefault(_editable);

var _de = require('olymp-locale/de');

var _de2 = _interopRequireDefault(_de);

var _route = require('olymp-pages/route');

var _route2 = _interopRequireDefault(_route);

var _olympCloudinary = require('olymp-cloudinary');

var _view = require('olymp-collection/view');

var _view2 = _interopRequireDefault(_view);

var _olympCollection = require('olymp-collection');

var _olympFela = require('olymp-fela');

var _olympUi = require('olymp-ui');

var _reactRedux = require('react-redux');

var _recompose = require('recompose');

var _analytics = require('olymp-google/analytics');

var _analytics2 = _interopRequireDefault(_analytics);

var _navigation = require('./navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _prefetchRoutes = require('./prefetch-routes');

var _prefetchRoutes2 = _interopRequireDefault(_prefetchRoutes);

var _de3 = require('./lang/de');

var LANG = _interopRequireWildcard(_de3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Container = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return _extends({}, (0, _olympFela.getAntStyle)({ theme: theme }), {
    backgroundColor: '#Cf5f5f5',
    height: '100%',
    '> div': {
      position: 'relative',
      height: '100%'
    }
  });
}, 'div', []);
var Footer = (0, _olympFela.createComponent)(function (_ref2) {
  var theme = _ref2.theme;
  return {
    padding: theme.space2,
    backgroundColor: theme.dark,
    color: theme.light,
    textAlign: 'center'
  };
}, 'div', function (p) {
  return Object.keys(p);
});

var Load = (0, _reactRedux.connect)(function (_ref3) {
  var app = _ref3.app;
  return {
    loading: app.loading
  };
})(_olympFela.TopLoader);

var enhance = (0, _recompose.compose)((0, _de2.default)(LANG), _userAgent2.default, _olympCollection.withCollections, (0, _reactRedux.connect)(function (_ref4) {
  var location = _ref4.location;
  return {
    query: location.query,
    pathname: location.pathname
  };
}, function (dispatch) {
  return {
    updateQuery: (0, _olympRouter.createUpdateQuery)(dispatch),
    replaceQuery: (0, _olympRouter.createReplaceQuery)(dispatch)
  };
}));

var _ref6 = _react2.default.createElement(Load, null);

var _ref7 = _react2.default.createElement(_olympCloudinary.Lightbox, null);

var _ref8 = _react2.default.createElement(
  Footer,
  null,
  _react2.default.createElement(
    'p',
    null,
    'Wir empfehlen f\xFCr die Verwendung von Olymp (und dar\xFCber hinaus) die Verwendung des Browsers',
    ' ',
    _react2.default.createElement(
      'a',
      { href: 'https://www.google.de/chrome', rel: 'noopener noreferrer' },
      'Chrome'
    ),
    '.'
  )
);

var component = enhance(function (props) {
  var query = props.query,
      collectionList = props.collectionList,
      collectionTree = props.collectionTree,
      ua = props.ua,
      flatNavigation = props.flatNavigation,
      updateQuery = props.updateQuery,
      pathname = props.pathname;

  var collection = collectionList.filter(function (_ref5) {
    var name = _ref5.name;
    return query['@' + name.toLowerCase()] !== undefined;
  })[0];
  var collectionName = collection && collection.name;
  var collectionId = collectionName && query && query['@' + collectionName.toLowerCase()];

  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(_prefetchRoutes2.default, { flatNavigation: flatNavigation }),
    _ref6,
    _ref7,
    _react2.default.createElement(_olympUi.Hotjar, { id: process.env.HOTJAR }),
    _react2.default.createElement(
      _olympFela.Modal,
      {
        open: !!collection && query.modal === null,
        onClose: function onClose() {
          var _updateQuery;

          return updateQuery((_updateQuery = {}, _defineProperty(_updateQuery, '@' + collectionName.toLowerCase(), undefined), _defineProperty(_updateQuery, 'modal', undefined), _updateQuery));
        }
      },
      _react2.default.createElement(_view2.default, _extends({}, props, {
        id: collectionId,
        typeName: collectionName
      }))
    ),
    _react2.default.createElement(
      _navigation2.default,
      {
        collectionList: collectionList,
        collectionTree: collectionTree
      },
      _react2.default.createElement(
        _olympRouter.Switch,
        null,
        _react2.default.createElement(_olympRouter.Match, {
          match: !!collection && query.modal !== null,
          render: function render() {
            return _react2.default.createElement(_view2.default, _extends({}, props, {
              id: collectionId,
              typeName: collectionName
            }));
          }
        }),
        _react2.default.createElement(_olympRouter.Match, {
          match: query['@media'] !== undefined,
          render: function render() {
            return _react2.default.createElement(_olympCloudinary.Route, props);
          }
        }),
        _react2.default.createElement(_olympRouter.Match, {
          match: query['@analytics'] !== undefined,
          render: function render() {
            return _react2.default.createElement(_analytics2.default, props);
          }
        }),
        _react2.default.createElement(_olympRouter.Match, {
          match: query['@page'] !== undefined,
          render: function render(rest) {
            return _react2.default.createElement(_editable2.default, _extends({}, rest, props));
          }
        }),
        _react2.default.createElement(_olympRouter.Match, { render: function render(rest) {
            return _react2.default.createElement(_route2.default, _extends({}, rest, props));
          } })
      )
    ),
    ua.getBrowser().name === 'IE' && _ref8
  );
});

component.displayName = 'CmsAuth';
exports.default = component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbXMvY21zLWF1dGguZXM2Il0sIm5hbWVzIjpbIkxBTkciLCJDb250YWluZXIiLCJ0aGVtZSIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsInBvc2l0aW9uIiwiRm9vdGVyIiwicGFkZGluZyIsInNwYWNlMiIsImRhcmsiLCJjb2xvciIsImxpZ2h0IiwidGV4dEFsaWduIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJMb2FkIiwiYXBwIiwibG9hZGluZyIsImVuaGFuY2UiLCJsb2NhdGlvbiIsInF1ZXJ5IiwicGF0aG5hbWUiLCJ1cGRhdGVRdWVyeSIsImRpc3BhdGNoIiwicmVwbGFjZVF1ZXJ5IiwiY29tcG9uZW50IiwicHJvcHMiLCJjb2xsZWN0aW9uTGlzdCIsImNvbGxlY3Rpb25UcmVlIiwidWEiLCJmbGF0TmF2aWdhdGlvbiIsImNvbGxlY3Rpb24iLCJmaWx0ZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJjb2xsZWN0aW9uTmFtZSIsImNvbGxlY3Rpb25JZCIsInByb2Nlc3MiLCJlbnYiLCJIT1RKQVIiLCJtb2RhbCIsInJlc3QiLCJnZXRCcm93c2VyIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFNQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEk7Ozs7Ozs7O0FBRVosSUFBTUMsWUFBWSxnQ0FDaEI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxzQkFDSyw0QkFBWSxFQUFFQSxZQUFGLEVBQVosQ0FETDtBQUVFQyxxQkFBaUIsVUFGbkI7QUFHRUMsWUFBUSxNQUhWO0FBSUUsYUFBUztBQUNQQyxnQkFBVSxVQURIO0FBRVBELGNBQVE7QUFGRDtBQUpYO0FBQUEsQ0FEZ0IsRUFVaEIsS0FWZ0IsRUFXaEIsRUFYZ0Is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S0FBTixLQUFnQixJQUR6QztBQUVFLGtCQUFRO0FBQUEsbUJBQ04sMkRBQ01mLEtBRE47QUFFRSxrQkFBSVcsWUFGTjtBQUdFLHdCQUFVRDtBQUhaLGVBRE07QUFBQTtBQUZWLFVBREY7QUFXRTtBQUNFLGlCQUFPaEIsTUFBTSxRQUFOLE1BQW9CZSxTQUQ3QjtBQUVFLGtCQUFRO0FBQUEsbUJBQU0sc0RBQXFCVCxLQUFyQixDQUFOO0FBQUE7QUFGVixVQVhGO0FBZUU7QUFDRSxpQkFBT04sTUFBTSxZQUFOLE1BQXdCZSxTQURqQztBQUVFLGtCQUFRO0FBQUEsbUJBQU0sbURBQWVULEtBQWYsQ0FBTjtBQUFBO0FBRlYsVUFmRjtBQW1CRTtBQUNFLGlCQUFPTixNQUFNLE9BQU4sTUFBbUJlLFNBRDVCO0FBRUUsa0JBQVE7QUFBQSxtQkFBUSwrREFBbUJPLElBQW5CLEVBQTZCaEIsS0FBN0IsRUFBUjtBQUFBO0FBRlYsVUFuQkY7QUF1QkUsNERBQU8sUUFBUTtBQUFBLG1CQUFRLDREQUFlZ0IsSUFBZixFQUF5QmhCLEtBQXpCLEVBQVI7QUFBQSxXQUFmO0FBdkJGO0FBSkYsS0FwQkY7QUFrREdHLE9BQUdjLFVBQUgsR0FBZ0JWLElBQWhCLEtBQXlCLElBQXpCO0FBbERILEdBREY7QUFnRUQsQ0FqRmlCLENBQWxCOztBQW1GQVIsVUFBVW1CLFdBQVYsR0FBd0IsU0FBeEI7a0JBQ2VuQixTIiwiZmlsZSI6ImNtcy9jbXMvY21zLWF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgU3dpdGNoLFxuICBNYXRjaCxcbiAgY3JlYXRlVXBkYXRlUXVlcnksXG4gIGNyZWF0ZVJlcGxhY2VRdWVyeSxcbn0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB3aXRoVUEgZnJvbSAnb2x5bXAtdXRpbHMvdXNlci1hZ2VudCc7XG5pbXBvcnQgRWRpdGFibGVSb3V0ZSBmcm9tICdvbHltcC1wYWdlcy9lZGl0YWJsZSc7XG5pbXBvcnQgd2l0aExvY2FsZSBmcm9tICdvbHltcC1sb2NhbGUvZGUnO1xuaW1wb3J0IFBhZ2VSb3V0ZSBmcm9tICdvbHltcC1wYWdlcy9yb3V0ZSc7XG5pbXBvcnQgeyBSb3V0ZSBhcyBDbG91ZGluYXJ5Um91dGUsIExpZ2h0Ym94IH0gZnJvbSAnb2x5bXAtY2xvdWRpbmFyeSc7XG5pbXBvcnQgQ29sbGVjdGlvblJvdXRlIGZyb20gJ29seW1wLWNvbGxlY3Rpb24vdmlldyc7XG5pbXBvcnQgeyB3aXRoQ29sbGVjdGlvbnMgfSBmcm9tICdvbHltcC1jb2xsZWN0aW9uJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCwgZ2V0QW50U3R5bGUsIFRvcExvYWRlciwgTW9kYWwgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IEhvdGphciB9IGZyb20gJ29seW1wLXVpJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCBBbmFseXRpY3MgZnJvbSAnb2x5bXAtZ29vZ2xlL2FuYWx5dGljcyc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL25hdmlnYXRpb24nO1xuaW1wb3J0IFByZWZldGNoUm91dGVzIGZyb20gJy4vcHJlZmV0Y2gtcm91dGVzJztcbmltcG9ydCAqIGFzIExBTkcgZnJvbSAnLi9sYW5nL2RlJztcblxuY29uc3QgQ29udGFpbmVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIC4uLmdldEFudFN0eWxlKHsgdGhlbWUgfSksXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0NmNWY1ZjUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgICc+IGRpdic6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICBbXSxcbik7XG5jb25zdCBGb290ZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2UyLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZGFyayxcbiAgICBjb2xvcjogdGhlbWUubGlnaHQsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgfSksXG4gICdkaXYnLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgTG9hZCA9IGNvbm5lY3QoKHsgYXBwIH0pID0+ICh7XG4gIGxvYWRpbmc6IGFwcC5sb2FkaW5nLFxufSkpKFRvcExvYWRlcik7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoTG9jYWxlKExBTkcpLFxuICB3aXRoVUEsXG4gIHdpdGhDb2xsZWN0aW9ucyxcbiAgY29ubmVjdChcbiAgICAoeyBsb2NhdGlvbiB9KSA9PiAoe1xuICAgICAgcXVlcnk6IGxvY2F0aW9uLnF1ZXJ5LFxuICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgIH0pLFxuICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICB1cGRhdGVRdWVyeTogY3JlYXRlVXBkYXRlUXVlcnkoZGlzcGF0Y2gpLFxuICAgICAgcmVwbGFjZVF1ZXJ5OiBjcmVhdGVSZXBsYWNlUXVlcnkoZGlzcGF0Y2gpLFxuICAgIH0pLFxuICApLFxuKTtcbmNvbnN0IGNvbXBvbmVudCA9IGVuaGFuY2UocHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgcXVlcnksXG4gICAgY29sbGVjdGlvbkxpc3QsXG4gICAgY29sbGVjdGlvblRyZWUsXG4gICAgdWEsXG4gICAgZmxhdE5hdmlnYXRpb24sXG4gICAgdXBkYXRlUXVlcnksXG4gICAgcGF0aG5hbWUsXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25MaXN0LmZpbHRlcihcbiAgICAoeyBuYW1lIH0pID0+IHF1ZXJ5W2BAJHtuYW1lLnRvTG93ZXJDYXNlKCl9YF0gIT09IHVuZGVmaW5lZCxcbiAgKVswXTtcbiAgY29uc3QgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uICYmIGNvbGxlY3Rpb24ubmFtZTtcbiAgY29uc3QgY29sbGVjdGlvbklkID1cbiAgICBjb2xsZWN0aW9uTmFtZSAmJiBxdWVyeSAmJiBxdWVyeVtgQCR7Y29sbGVjdGlvbk5hbWUudG9Mb3dlckNhc2UoKX1gXTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8UHJlZmV0Y2hSb3V0ZXMgZmxhdE5hdmlnYXRpb249e2ZsYXROYXZpZ2F0aW9ufSAvPlxuICAgICAgPExvYWQgLz5cbiAgICAgIDxMaWdodGJveCAvPlxuICAgICAgPEhvdGphciBpZD17cHJvY2Vzcy5lbnYuSE9USkFSfSAvPlxuICAgICAgPE1vZGFsXG4gICAgICAgIG9wZW49eyEhY29sbGVjdGlvbiAmJiBxdWVyeS5tb2RhbCA9PT0gbnVsbH1cbiAgICAgICAgb25DbG9zZT17KCkgPT5cbiAgICAgICAgICB1cGRhdGVRdWVyeSh7XG4gICAgICAgICAgICBbYEAke2NvbGxlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCl9YF06IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1vZGFsOiB1bmRlZmluZWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8Q29sbGVjdGlvblJvdXRlXG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIGlkPXtjb2xsZWN0aW9uSWR9XG4gICAgICAgICAgdHlwZU5hbWU9e2NvbGxlY3Rpb25OYW1lfVxuICAgICAgICAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxOYXZpZ2F0aW9uXG4gICAgICAgIGNvbGxlY3Rpb25MaXN0PXtjb2xsZWN0aW9uTGlzdH1cbiAgICAgICAgY29sbGVjdGlvblRyZWU9e2NvbGxlY3Rpb25UcmVlfVxuICAgICAgPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxNYXRjaFxuICAgICAgICAgICAgbWF0Y2g9eyEhY29sbGVjdGlvbiAmJiBxdWVyeS5tb2RhbCAhPT0gbnVsbH1cbiAgICAgICAgICAgIHJlbmRlcj17KCkgPT4gKFxuICAgICAgICAgICAgICA8Q29sbGVjdGlvblJvdXRlXG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgIGlkPXtjb2xsZWN0aW9uSWR9XG4gICAgICAgICAgICAgICAgdHlwZU5hbWU9e2NvbGxlY3Rpb25OYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNYXRjaFxuICAgICAgICAgICAgbWF0Y2g9e3F1ZXJ5WydAbWVkaWEnXSAhPT0gdW5kZWZpbmVkfVxuICAgICAgICAgICAgcmVuZGVyPXsoKSA9PiA8Q2xvdWRpbmFyeVJvdXRlIHsuLi5wcm9wc30gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWF0Y2hcbiAgICAgICAgICAgIG1hdGNoPXtxdWVyeVsnQGFuYWx5dGljcyddICE9PSB1bmRlZmluZWR9XG4gICAgICAgICAgICByZW5kZXI9eygpID0+IDxBbmFseXRpY3Mgey4uLnByb3BzfSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNYXRjaFxuICAgICAgICAgICAgbWF0Y2g9e3F1ZXJ5WydAcGFnZSddICE9PSB1bmRlZmluZWR9XG4gICAgICAgICAgICByZW5kZXI9e3Jlc3QgPT4gPEVkaXRhYmxlUm91dGUgey4uLnJlc3R9IHsuLi5wcm9wc30gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWF0Y2ggcmVuZGVyPXtyZXN0ID0+IDxQYWdlUm91dGUgey4uLnJlc3R9IHsuLi5wcm9wc30gLz59IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9OYXZpZ2F0aW9uPlxuICAgICAge3VhLmdldEJyb3dzZXIoKS5uYW1lID09PSAnSUUnICYmIChcbiAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdpciBlbXBmZWhsZW4gZsO8ciBkaWUgVmVyd2VuZHVuZyB2b24gT2x5bXAgKHVuZCBkYXLDvGJlciBoaW5hdXMpIGRpZVxuICAgICAgICAgICAgVmVyd2VuZHVuZyBkZXMgQnJvd3NlcnN7JyAnfVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5kZS9jaHJvbWVcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIENocm9tZVxuICAgICAgICAgICAgPC9hPi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRm9vdGVyPlxuICAgICAgKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn0pO1xuXG5jb21wb25lbnQuZGlzcGxheU5hbWUgPSAnQ21zQXV0aCc7XG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG4iXX0=
