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

var _de = require('olymp-fela/antd/de');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbXMvY21zLWF1dGguZXM2Il0sIm5hbWVzIjpbIkxBTkciLCJDb250YWluZXIiLCJ0aGVtZSIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsInBvc2l0aW9uIiwiRm9vdGVyIiwicGFkZGluZyIsInNwYWNlMiIsImRhcmsiLCJjb2xvciIsImxpZ2h0IiwidGV4dEFsaWduIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJMb2FkIiwiYXBwIiwibG9hZGluZyIsImVuaGFuY2UiLCJsb2NhdGlvbiIsInF1ZXJ5IiwicGF0aG5hbWUiLCJ1cGRhdGVRdWVyeSIsImRpc3BhdGNoIiwicmVwbGFjZVF1ZXJ5IiwiY29tcG9uZW50IiwicHJvcHMiLCJjb2xsZWN0aW9uTGlzdCIsImNvbGxlY3Rpb25UcmVlIiwidWEiLCJmbGF0TmF2aWdhdGlvbiIsImNvbGxlY3Rpb24iLCJmaWx0ZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJjb2xsZWN0aW9uTmFtZSIsImNvbGxlY3Rpb25JZCIsInByb2Nlc3MiLCJlbnYiLCJIT1RKQVIiLCJtb2RhbCIsInJlc3QiLCJnZXRCcm93c2VyIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFNQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEk7Ozs7Ozs7O0FBRVosSUFBTUMsWUFBWSxnQ0FDaEI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxzQkFDSyw0QkFBWSxFQUFFQSxZQUFGLEVBQVosQ0FETDtBQUVFQyxxQkFBaUIsVUFGbkI7QUFHRUMsWUFBUSxNQUhWO0FBSUUsYUFBUztBQUNQQyxnQkFBVSxVQURIO0FBRVBELGNBQVE7QUFGRDtBQUpYO0FBQUEsQ0FEZ0IsRUFVaEIsS0FWZ0IsRUFXaEIsRUFYZ0Is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S0FBTixLQUFnQixJQUR6QztBQUVFLGtCQUFRO0FBQUEsbUJBQ04sMkRBQ01mLEtBRE47QUFFRSxrQkFBSVcsWUFGTjtBQUdFLHdCQUFVRDtBQUhaLGVBRE07QUFBQTtBQUZWLFVBREY7QUFXRTtBQUNFLGlCQUFPaEIsTUFBTSxRQUFOLE1BQW9CZSxTQUQ3QjtBQUVFLGtCQUFRO0FBQUEsbUJBQU0sc0RBQXFCVCxLQUFyQixDQUFOO0FBQUE7QUFGVixVQVhGO0FBZUU7QUFDRSxpQkFBT04sTUFBTSxZQUFOLE1BQXdCZSxTQURqQztBQUVFLGtCQUFRO0FBQUEsbUJBQU0sbURBQWVULEtBQWYsQ0FBTjtBQUFBO0FBRlYsVUFmRjtBQW1CRTtBQUNFLGlCQUFPTixNQUFNLE9BQU4sTUFBbUJlLFNBRDVCO0FBRUUsa0JBQVE7QUFBQSxtQkFBUSwrREFBbUJPLElBQW5CLEVBQTZCaEIsS0FBN0IsRUFBUjtBQUFBO0FBRlYsVUFuQkY7QUF1QkUsNERBQU8sUUFBUTtBQUFBLG1CQUFRLDREQUFlZ0IsSUFBZixFQUF5QmhCLEtBQXpCLEVBQVI7QUFBQSxXQUFmO0FBdkJGO0FBSkYsS0FwQkY7QUFrREdHLE9BQUdjLFVBQUgsR0FBZ0JWLElBQWhCLEtBQXlCLElBQXpCO0FBbERILEdBREY7QUFnRUQsQ0FqRmlCLENBQWxCOztBQW1GQVIsVUFBVW1CLFdBQVYsR0FBd0IsU0FBeEI7a0JBQ2VuQixTIiwiZmlsZSI6ImNtcy9jbXMvY21zLWF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgU3dpdGNoLFxuICBNYXRjaCxcbiAgY3JlYXRlVXBkYXRlUXVlcnksXG4gIGNyZWF0ZVJlcGxhY2VRdWVyeVxufSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHdpdGhVQSBmcm9tICdvbHltcC11dGlscy91c2VyLWFnZW50JztcbmltcG9ydCBFZGl0YWJsZVJvdXRlIGZyb20gJ29seW1wLXBhZ2VzL2VkaXRhYmxlJztcbmltcG9ydCB3aXRoTG9jYWxlIGZyb20gJ29seW1wLWZlbGEvYW50ZC9kZSc7XG5pbXBvcnQgUGFnZVJvdXRlIGZyb20gJ29seW1wLXBhZ2VzL3JvdXRlJztcbmltcG9ydCB7IFJvdXRlIGFzIENsb3VkaW5hcnlSb3V0ZSwgTGlnaHRib3ggfSBmcm9tICdvbHltcC1jbG91ZGluYXJ5JztcbmltcG9ydCBDb2xsZWN0aW9uUm91dGUgZnJvbSAnb2x5bXAtY29sbGVjdGlvbi92aWV3JztcbmltcG9ydCB7IHdpdGhDb2xsZWN0aW9ucyB9IGZyb20gJ29seW1wLWNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBnZXRBbnRTdHlsZSwgVG9wTG9hZGVyLCBNb2RhbCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgSG90amFyIH0gZnJvbSAnb2x5bXAtdWknO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IEFuYWx5dGljcyBmcm9tICdvbHltcC1nb29nbGUvYW5hbHl0aWNzJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vbmF2aWdhdGlvbic7XG5pbXBvcnQgUHJlZmV0Y2hSb3V0ZXMgZnJvbSAnLi9wcmVmZXRjaC1yb3V0ZXMnO1xuaW1wb3J0ICogYXMgTEFORyBmcm9tICcuL2xhbmcvZGUnO1xuXG5jb25zdCBDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgLi4uZ2V0QW50U3R5bGUoeyB0aGVtZSB9KSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQ2Y1ZjVmNScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgJz4gZGl2Jzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH1cbiAgfSksXG4gICdkaXYnLFxuICBbXVxuKTtcbmNvbnN0IEZvb3RlciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjZTIsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5kYXJrLFxuICAgIGNvbG9yOiB0aGVtZS5saWdodCxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gIH0pLFxuICAnZGl2JyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgTG9hZCA9IGNvbm5lY3QoKHsgYXBwIH0pID0+ICh7XG4gIGxvYWRpbmc6IGFwcC5sb2FkaW5nXG59KSkoVG9wTG9hZGVyKTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhMb2NhbGUoTEFORyksXG4gIHdpdGhVQSxcbiAgd2l0aENvbGxlY3Rpb25zLFxuICBjb25uZWN0KFxuICAgICh7IGxvY2F0aW9uIH0pID0+ICh7XG4gICAgICBxdWVyeTogbG9jYXRpb24ucXVlcnksXG4gICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgICB9KSxcbiAgICBkaXNwYXRjaCA9PiAoe1xuICAgICAgdXBkYXRlUXVlcnk6IGNyZWF0ZVVwZGF0ZVF1ZXJ5KGRpc3BhdGNoKSxcbiAgICAgIHJlcGxhY2VRdWVyeTogY3JlYXRlUmVwbGFjZVF1ZXJ5KGRpc3BhdGNoKVxuICAgIH0pXG4gIClcbik7XG5jb25zdCBjb21wb25lbnQgPSBlbmhhbmNlKHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5LFxuICAgIGNvbGxlY3Rpb25MaXN0LFxuICAgIGNvbGxlY3Rpb25UcmVlLFxuICAgIHVhLFxuICAgIGZsYXROYXZpZ2F0aW9uLFxuICAgIHVwZGF0ZVF1ZXJ5LFxuICAgIHBhdGhuYW1lXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25MaXN0LmZpbHRlcihcbiAgICAoeyBuYW1lIH0pID0+IHF1ZXJ5W2BAJHtuYW1lLnRvTG93ZXJDYXNlKCl9YF0gIT09IHVuZGVmaW5lZFxuICApWzBdO1xuICBjb25zdCBjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvbi5uYW1lO1xuICBjb25zdCBjb2xsZWN0aW9uSWQgPVxuICAgIGNvbGxlY3Rpb25OYW1lICYmIHF1ZXJ5ICYmIHF1ZXJ5W2BAJHtjb2xsZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpfWBdO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxQcmVmZXRjaFJvdXRlcyBmbGF0TmF2aWdhdGlvbj17ZmxhdE5hdmlnYXRpb259IC8+XG4gICAgICA8TG9hZCAvPlxuICAgICAgPExpZ2h0Ym94IC8+XG4gICAgICA8SG90amFyIGlkPXtwcm9jZXNzLmVudi5IT1RKQVJ9IC8+XG4gICAgICA8TW9kYWxcbiAgICAgICAgb3Blbj17ISFjb2xsZWN0aW9uICYmIHF1ZXJ5Lm1vZGFsID09PSBudWxsfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PlxuICAgICAgICAgIHVwZGF0ZVF1ZXJ5KHtcbiAgICAgICAgICAgIFtgQCR7Y29sbGVjdGlvbk5hbWUudG9Mb3dlckNhc2UoKX1gXTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbW9kYWw6IHVuZGVmaW5lZFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPENvbGxlY3Rpb25Sb3V0ZVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICBpZD17Y29sbGVjdGlvbklkfVxuICAgICAgICAgIHR5cGVOYW1lPXtjb2xsZWN0aW9uTmFtZX1cbiAgICAgICAgLz5cbiAgICAgIDwvTW9kYWw+XG4gICAgICA8TmF2aWdhdGlvblxuICAgICAgICBjb2xsZWN0aW9uTGlzdD17Y29sbGVjdGlvbkxpc3R9XG4gICAgICAgIGNvbGxlY3Rpb25UcmVlPXtjb2xsZWN0aW9uVHJlZX1cbiAgICAgID5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8TWF0Y2hcbiAgICAgICAgICAgIG1hdGNoPXshIWNvbGxlY3Rpb24gJiYgcXVlcnkubW9kYWwgIT09IG51bGx9XG4gICAgICAgICAgICByZW5kZXI9eygpID0+IChcbiAgICAgICAgICAgICAgPENvbGxlY3Rpb25Sb3V0ZVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICBpZD17Y29sbGVjdGlvbklkfVxuICAgICAgICAgICAgICAgIHR5cGVOYW1lPXtjb2xsZWN0aW9uTmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWF0Y2hcbiAgICAgICAgICAgIG1hdGNoPXtxdWVyeVsnQG1lZGlhJ10gIT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHJlbmRlcj17KCkgPT4gPENsb3VkaW5hcnlSb3V0ZSB7Li4ucHJvcHN9IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1hdGNoXG4gICAgICAgICAgICBtYXRjaD17cXVlcnlbJ0BhbmFseXRpY3MnXSAhPT0gdW5kZWZpbmVkfVxuICAgICAgICAgICAgcmVuZGVyPXsoKSA9PiA8QW5hbHl0aWNzIHsuLi5wcm9wc30gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWF0Y2hcbiAgICAgICAgICAgIG1hdGNoPXtxdWVyeVsnQHBhZ2UnXSAhPT0gdW5kZWZpbmVkfVxuICAgICAgICAgICAgcmVuZGVyPXtyZXN0ID0+IDxFZGl0YWJsZVJvdXRlIHsuLi5yZXN0fSB7Li4ucHJvcHN9IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1hdGNoIHJlbmRlcj17cmVzdCA9PiA8UGFnZVJvdXRlIHsuLi5yZXN0fSB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvTmF2aWdhdGlvbj5cbiAgICAgIHt1YS5nZXRCcm93c2VyKCkubmFtZSA9PT0gJ0lFJyAmJiAoXG4gICAgICAgIDxGb290ZXI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaXIgZW1wZmVobGVuIGbDvHIgZGllIFZlcndlbmR1bmcgdm9uIE9seW1wICh1bmQgZGFyw7xiZXIgaGluYXVzKSBkaWVcbiAgICAgICAgICAgIFZlcndlbmR1bmcgZGVzIEJyb3dzZXJzeycgJ31cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuZGUvY2hyb21lXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICBDaHJvbWVcbiAgICAgICAgICAgIDwvYT4uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59KTtcblxuY29tcG9uZW50LmRpc3BsYXlOYW1lID0gJ0Ntc0F1dGgnO1xuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50O1xuIl19
