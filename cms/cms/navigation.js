'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _olympRouter = require('olymp-router');

var _olympAuth = require('olymp-auth');

var _olympFela = require('olymp-fela');

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

var _faCubes = require('olymp-icons/lib/fa-cubes');

var _faCubes2 = _interopRequireDefault(_faCubes);

var _faPictureO = require('olymp-icons/lib/fa-picture-o');

var _faPictureO2 = _interopRequireDefault(_faPictureO);

var _faSearch = require('olymp-icons/lib/fa-search');

var _faSearch2 = _interopRequireDefault(_faSearch);

var _faPowerOff = require('olymp-icons/lib/fa-power-off');

var _faPowerOff2 = _interopRequireDefault(_faPowerOff);

var _faDatabase = require('olymp-icons/lib/fa-database');

var _faDatabase2 = _interopRequireDefault(_faDatabase);

var _faBarChart = require('olymp-icons/lib/fa-bar-chart');

var _faBarChart2 = _interopRequireDefault(_faBarChart);

var _faUsers = require('olymp-icons/lib/fa-users');

var _faUsers2 = _interopRequireDefault(_faUsers);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var enhance = (0, _recompose.compose)(_olympAuth.getAuth, (0, _reactRedux.connect)(function (_ref) {
  var location = _ref.location,
      auth = _ref.auth;
  return {
    pathname: location.pathname,
    query: location.query,
    user: auth.user,
    isAdmin: auth.user && auth.user.isAdmin
  };
}, function (dispatch) {
  return {
    setQuery: (0, _olympRouter.createReplaceQuery)(dispatch),
    push: (0, _olympRouter.createPushPathname)(dispatch)
  };
}), (0, _recompose.withState)('collapsed', 'setCollapsed', true), (0, _recompose.withState)('searchOpen', 'setSearchOpen', false), (0, _recompose.withState)('searchText', 'setSearchText', ''), (0, _recompose.withHandlers)({
  expand: function expand(_ref2) {
    var setCollapsed = _ref2.setCollapsed;
    return function () {
      return setCollapsed(false);
    };
  },
  collapse: function collapse(_ref3) {
    var setCollapsed = _ref3.setCollapsed;
    return function () {
      return setCollapsed(true);
    };
  },
  handleClick: function handleClick(_ref4) {
    var setQuery = _ref4.setQuery,
        logout = _ref4.logout,
        setCollapsed = _ref4.setCollapsed;
    return function (e) {
      if (e.key === 'logout') {
        logout();
      }
      if (e.key && e.key[0] === '@') {
        var v = e.key.split(',').reduce(function (state, next) {
          var key = next.indexOf('=') !== -1 ? next.split('=')[0] : next;
          var value = next.indexOf('=') !== -1 ? next.split('=')[1] : null;
          return _extends({}, state, _defineProperty({}, key, value));
        }, {});
        setCollapsed(false); // close Menu

        setQuery(v);
      }
    };
  }
}));

var _ref6 = _react2.default.createElement(_faDatabase2.default, null);

var _ref7 = _react2.default.createElement(_faDatabase2.default, null);

var _ref8 = _react2.default.createElement(_olympFela.Logo, { color: true });

var _ref9 = _react2.default.createElement(_faCubes2.default, null);

var _ref10 = _react2.default.createElement(_faPictureO2.default, null);

var _ref11 = _react2.default.createElement(_faUsers2.default, null);

var _ref12 = _react2.default.createElement(_faBarChart2.default, null);

var _ref13 = _react2.default.createElement(_menu2.default.Space, null);

var _ref14 = _react2.default.createElement(_faSearch2.default, null);

var _ref15 = _react2.default.createElement(_faPowerOff2.default, null);

var component = enhance(function (_ref5) {
  var logout = _ref5.logout,
      query = _ref5.query,
      collectionTree = _ref5.collectionTree,
      setQuery = _ref5.setQuery,
      _ref5$user = _ref5.user,
      user = _ref5$user === undefined ? {} : _ref5$user,
      collapsed = _ref5.collapsed,
      setCollapsed = _ref5.setCollapsed,
      searchOpen = _ref5.searchOpen,
      setSearchOpen = _ref5.setSearchOpen,
      children = _ref5.children,
      searchText = _ref5.searchText,
      setSearchText = _ref5.setSearchText;

  var keys = Object.keys(query);

  if (!keys.filter(function (x) {
    return x[0] === '@';
  }).length) {
    keys.push('@home');
  }

  var lists = [];
  var items = [];
  Object.keys(collectionTree).forEach(function (key) {
    return collectionTree[key].length > 1 ? lists.push(_react2.default.createElement(
      _menu2.default.List,
      { title: key, key: key },
      collectionTree[key].map(function (collection, i) {
        return _react2.default.createElement(
          _menu2.default.Item,
          {
            key: collection.id || i,
            icon: collection.specialFields.icon ? _react2.default.createElement(_icon2.default, {
              type: collection.specialFields.icon,
              style: { fontSize: 20 }
            }) : _ref6,
            active: query['@' + collection.name.toLowerCase()] !== undefined,
            onClick: function onClick() {
              return setQuery(_defineProperty({}, '@' + collection.name.toLowerCase(), null));
            }
          },
          (0, _get3.default)(collection, 'specialFields.label', collection.name)
        );
      })
    )) : items.push(_react2.default.createElement(
      _menu2.default.Item,
      {
        key: key,
        icon: collectionTree[key][0].specialFields.icon ? _react2.default.createElement(_icon2.default, {
          type: collectionTree[key][0].specialFields.icon,
          style: { fontSize: 20 }
        }) : _ref7,
        active: query['@' + collectionTree[key][0].name.toLowerCase()] !== undefined,
        onClick: function onClick() {
          return setQuery(_defineProperty({}, '@' + collectionTree[key][0].name.toLowerCase(), null));
        }
      },
      (0, _get3.default)(collectionTree[key][0], 'specialFields.label', collectionTree[key][0].name)
    ));
  });

  var header = _react2.default.createElement(
    _menu2.default.Item,
    {
      large: true,
      key: 'back',
      icon: _ref8,
      onClick: function onClick() {
        return setQuery({});
      }
    },
    'Olymp'
  );

  return _react2.default.createElement(
    _olympFela.Sidebar,
    {
      zIndex: 11,
      collapsed: collapsed,
      overlap: true,
      onMouseEnter: function onMouseEnter() {
        return setCollapsed(false);
      },
      onMouseLeave: function onMouseLeave() {
        return setCollapsed(true);
      },
      menu: _react2.default.createElement(
        _menu2.default,
        { color: 'colorSecondary', inverted: true, header: header },
        _react2.default.createElement(
          _menu2.default.Item,
          {
            active: query['@page'] === null,
            icon: _ref9,
            onClick: function onClick() {
              return setQuery({ '@page': null });
            }
          },
          'Seitenmanager'
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          {
            icon: _ref10,
            active: query['@media'] === null,
            onClick: function onClick() {
              return setQuery({ '@media': null });
            }
          },
          'Mediathek'
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          {
            icon: _ref11,
            active: query['@users'] === null,
            onClick: function onClick() {
              return setQuery({ '@users': null });
            }
          },
          'Benutzer & Gruppen'
        ),
        !!window.ga && _react2.default.createElement(
          _menu2.default.Item,
          {
            icon: _ref12,
            active: query['@analytics'] === null,
            onClick: function onClick() {
              return setQuery({ '@analytics': null });
            }
          },
          'Statistiken'
        ),
        lists.length > 0 && _react2.default.createElement(
          _menu2.default.List,
          { title: 'Collections' },
          items
        ),
        lists,
        _ref13,
        _react2.default.createElement(
          _menu2.default.Item,
          {
            onClick: function onClick() {
              setSearchOpen(true);
              setCollapsed(true);
            },
            icon: _ref14
          },
          'Suche'
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          {
            active: query['@users'] === user.id,
            onClick: function onClick() {
              return setQuery({ '@users': user.id });
            },
            icon: _react2.default.createElement(_olympFela.Avatar, { email: user.email, name: user.name, 'default': 'blank' })
          },
          user.name
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          { onClick: logout, icon: _ref15 },
          'Abmelden'
        )
      )
    },
    children,
    _react2.default.createElement(_menu.Search, {
      placeholder: 'Suche ...',
      value: searchText,
      onChange: setSearchText,
      open: searchOpen,
      header: header,
      results: searchText ? [{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2' }, { id: 3, name: 'Test 3' }] : [],
      onClose: function onClose() {
        setSearchOpen(false);
      }
    })
  );
});

exports.default = component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbXMvbmF2aWdhdGlvbi5lczYiXSwibmFtZXMiOlsiZW5oYW5jZSIsImxvY2F0aW9uIiwiYXV0aCIsInBhdGhuYW1lIiwicXVlcnkiLCJ1c2VyIiwiaXNBZG1pbiIsInNldFF1ZXJ5IiwiZGlzcGF0Y2giLCJwdXNoIiwiZXhwYW5kIiwic2V0Q29sbGFwc2VkIiwiY29sbGFwc2UiLCJoYW5kbGVDbGljayIsImxvZ291dCIsImUiLCJrZXkiLCJ2Iiwic3BsaXQiLCJyZWR1Y2UiLCJzdGF0ZSIsIm5leHQiLCJpbmRleE9mIiwidmFsdWUiLCJjb21wb25lbnQiLCJjb2xsZWN0aW9uVHJlZSIsImNvbGxhcHNlZCIsInNlYXJjaE9wZW4iLCJzZXRTZWFyY2hPcGVuIiwiY2hpbGRyZW4iLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsImtleXMiLCJPYmplY3QiLCJmaWx0ZXIiLCJ4IiwibGVuZ3RoIiwibGlzdHMiLCJpdGVtcyIsImZvckVhY2giLCJtYXAiLCJjb2xsZWN0aW9uIiwiaSIsImlkIiwic3BlY2lhbEZpZWxkcyIsImljb24iLCJmb250U2l6ZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsImhlYWRlciIsIndpbmRvdyIsImdhIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7OztBQUVBLElBQU1BLFVBQVUsNENBRWQseUJBQ0U7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxJQUFiLFFBQWFBLElBQWI7QUFBQSxTQUF5QjtBQUN2QkMsY0FBVUYsU0FBU0UsUUFESTtBQUV2QkMsV0FBT0gsU0FBU0csS0FGTztBQUd2QkMsVUFBTUgsS0FBS0csSUFIWTtBQUl2QkMsYUFBU0osS0FBS0csSUFBTCxJQUFhSCxLQUFLRyxJQUFMLENBQVVDO0FBSlQs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MEM7QUFQUixTQTdDRjtBQXNERTtBQUFBLHlCQUFNLElBQU47QUFBQSxZQUFXLFNBQVNqQyxNQUFwQixFQUE0QixZQUE1QjtBQUFBO0FBQUE7QUF0REY7QUFQSjtBQW1FR2UsWUFuRUg7QUFxRUU7QUFDRSxtQkFBWSxXQURkO0FBRUUsYUFBT0MsVUFGVDtBQUdFLGdCQUFVQyxhQUhaO0FBSUUsWUFBTUosVUFKUjtBQUtFLGNBQVF1QixNQUxWO0FBTUUsZUFDRXBCLGFBQ0ksQ0FDRSxFQUFFYSxJQUFJLENBQU4sRUFBU0ksTUFBTSxRQUFmLEVBREYsRUFFRSxFQUFFSixJQUFJLENBQU4sRUFBU0ksTUFBTSxRQUFmLEVBRkYsRUFHRSxFQUFFSixJQUFJLENBQU4sRUFBU0ksTUFBTSxRQUFmLEVBSEYsQ0FESixHQU1JLEVBYlI7QUFlRSxlQUFTLG1CQUFNO0FBQ2JuQixzQkFBYyxLQUFkO0FBQ0Q7QUFqQkg7QUFyRUYsR0FERjtBQTJGRCxDQTdMZSxDQUFsQjs7a0JBZ01lSixTIiwiZmlsZSI6ImNtcy9jbXMvbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoU3RhdGUsIHdpdGhIYW5kbGVycyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBjcmVhdGVSZXBsYWNlUXVlcnksIGNyZWF0ZVB1c2hQYXRobmFtZSB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnb2x5bXAtYXV0aCc7XG5pbXBvcnQgeyBBdmF0YXIsIExvZ28sIFNpZGViYXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBNZW51LCB7IFNlYXJjaCB9IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQge1xuICBGYUN1YmVzLFxuICBGYVBpY3R1cmVPLFxuICBGYVNlYXJjaCxcbiAgRmFQb3dlck9mZixcbiAgRmFEYXRhYmFzZSxcbiAgRmFCYXJDaGFydCxcbiAgRmFVc2Vycyxcbn0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICBnZXRBdXRoLFxuICBjb25uZWN0KFxuICAgICh7IGxvY2F0aW9uLCBhdXRoIH0pID0+ICh7XG4gICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBxdWVyeTogbG9jYXRpb24ucXVlcnksXG4gICAgICB1c2VyOiBhdXRoLnVzZXIsXG4gICAgICBpc0FkbWluOiBhdXRoLnVzZXIgJiYgYXV0aC51c2VyLmlzQWRtaW4sXG4gICAgfSksXG4gICAgZGlzcGF0Y2ggPT4gKHtcbiAgICAgIHNldFF1ZXJ5OiBjcmVhdGVSZXBsYWNlUXVlcnkoZGlzcGF0Y2gpLFxuICAgICAgcHVzaDogY3JlYXRlUHVzaFBhdGhuYW1lKGRpc3BhdGNoKSxcbiAgICB9KSxcbiAgKSxcbiAgd2l0aFN0YXRlKCdjb2xsYXBzZWQnLCAnc2V0Q29sbGFwc2VkJywgdHJ1ZSksXG4gIHdpdGhTdGF0ZSgnc2VhcmNoT3BlbicsICdzZXRTZWFyY2hPcGVuJywgZmFsc2UpLFxuICB3aXRoU3RhdGUoJ3NlYXJjaFRleHQnLCAnc2V0U2VhcmNoVGV4dCcsICcnKSxcbiAgd2l0aEhhbmRsZXJzKHtcbiAgICBleHBhbmQ6ICh7IHNldENvbGxhcHNlZCB9KSA9PiAoKSA9PiBzZXRDb2xsYXBzZWQoZmFsc2UpLFxuICAgIGNvbGxhcHNlOiAoeyBzZXRDb2xsYXBzZWQgfSkgPT4gKCkgPT4gc2V0Q29sbGFwc2VkKHRydWUpLFxuICAgIGhhbmRsZUNsaWNrOiAoeyBzZXRRdWVyeSwgbG9nb3V0LCBzZXRDb2xsYXBzZWQgfSkgPT4gZSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdsb2dvdXQnKSB7XG4gICAgICAgIGxvZ291dCgpO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ICYmIGUua2V5WzBdID09PSAnQCcpIHtcbiAgICAgICAgY29uc3QgdiA9IGUua2V5LnNwbGl0KCcsJykucmVkdWNlKChzdGF0ZSwgbmV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IG5leHQuaW5kZXhPZignPScpICE9PSAtMSA/IG5leHQuc3BsaXQoJz0nKVswXSA6IG5leHQ7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBuZXh0LmluZGV4T2YoJz0nKSAhPT0gLTEgPyBuZXh0LnNwbGl0KCc9JylbMV0gOiBudWxsO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIHNldENvbGxhcHNlZChmYWxzZSk7IC8vIGNsb3NlIE1lbnVcblxuICAgICAgICBzZXRRdWVyeSh2KTtcbiAgICAgIH1cbiAgICB9LFxuICB9KSxcbik7XG5cbmNvbnN0IGNvbXBvbmVudCA9IGVuaGFuY2UoXG4gICh7XG4gICAgbG9nb3V0LFxuICAgIHF1ZXJ5LFxuICAgIGNvbGxlY3Rpb25UcmVlLFxuICAgIHNldFF1ZXJ5LFxuICAgIHVzZXIgPSB7fSxcbiAgICBjb2xsYXBzZWQsXG4gICAgc2V0Q29sbGFwc2VkLFxuICAgIHNlYXJjaE9wZW4sXG4gICAgc2V0U2VhcmNoT3BlbixcbiAgICBjaGlsZHJlbixcbiAgICBzZWFyY2hUZXh0LFxuICAgIHNldFNlYXJjaFRleHQsXG4gIH0pID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocXVlcnkpO1xuXG4gICAgaWYgKCFrZXlzLmZpbHRlcih4ID0+IHhbMF0gPT09ICdAJykubGVuZ3RoKSB7XG4gICAgICBrZXlzLnB1c2goJ0Bob21lJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdHMgPSBbXTtcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGNvbGxlY3Rpb25UcmVlKS5mb3JFYWNoKFxuICAgICAga2V5ID0+XG4gICAgICAgIGNvbGxlY3Rpb25UcmVlW2tleV0ubGVuZ3RoID4gMVxuICAgICAgICAgID8gbGlzdHMucHVzaChcbiAgICAgICAgICAgIDxNZW51Lkxpc3QgdGl0bGU9e2tleX0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICB7Y29sbGVjdGlvblRyZWVba2V5XS5tYXAoKGNvbGxlY3Rpb24sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICBrZXk9e2NvbGxlY3Rpb24uaWQgfHwgaX1cbiAgICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5pY29uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17Y29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhRGF0YWJhc2UgLz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZT17XG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnlbYEAke2NvbGxlY3Rpb24ubmFtZS50b0xvd2VyQ2FzZSgpfWBdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBzZXRRdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBbYEAke2NvbGxlY3Rpb24ubmFtZS50b0xvd2VyQ2FzZSgpfWBdOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Z2V0KGNvbGxlY3Rpb24sICdzcGVjaWFsRmllbGRzLmxhYmVsJywgY29sbGVjdGlvbi5uYW1lKX1cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvTWVudS5MaXN0PixcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGl0ZW1zLnB1c2goXG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25UcmVlW2tleV1bMF0uc3BlY2lhbEZpZWxkcy5pY29uID8gKFxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e2NvbGxlY3Rpb25UcmVlW2tleV1bMF0uc3BlY2lhbEZpZWxkcy5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEZhRGF0YWJhc2UgLz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGFjdGl2ZT17XG4gICAgICAgICAgICAgICAgICBxdWVyeVtgQCR7Y29sbGVjdGlvblRyZWVba2V5XVswXS5uYW1lLnRvTG93ZXJDYXNlKCl9YF0gIT09XG4gICAgICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICBzZXRRdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgIFtgQCR7Y29sbGVjdGlvblRyZWVba2V5XVswXS5uYW1lLnRvTG93ZXJDYXNlKCl9YF06IG51bGwsXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2dldChcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25UcmVlW2tleV1bMF0sXG4gICAgICAgICAgICAgICAgICAnc3BlY2lhbEZpZWxkcy5sYWJlbCcsXG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uVHJlZVtrZXldWzBdLm5hbWUsXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPixcbiAgICAgICAgICAgICksXG4gICAgKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IChcbiAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgbGFyZ2VcbiAgICAgICAga2V5PVwiYmFja1wiXG4gICAgICAgIGljb249ezxMb2dvIGNvbG9yIC8+fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeSh7fSl9XG4gICAgICA+XG4gICAgICAgIE9seW1wXG4gICAgICA8L01lbnUuSXRlbT5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIHpJbmRleD17MTF9XG4gICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICBvdmVybGFwXG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Q29sbGFwc2VkKGZhbHNlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRDb2xsYXBzZWQodHJ1ZSl9XG4gICAgICAgIG1lbnU9e1xuICAgICAgICAgIDxNZW51IGNvbG9yPVwiY29sb3JTZWNvbmRhcnlcIiBpbnZlcnRlZCBoZWFkZXI9e2hlYWRlcn0+XG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIGFjdGl2ZT17cXVlcnlbYEBwYWdlYF0gPT09IG51bGx9XG4gICAgICAgICAgICAgIGljb249ezxGYUN1YmVzIC8+fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeSh7ICdAcGFnZSc6IG51bGwgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNlaXRlbm1hbmFnZXJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBpY29uPXs8RmFQaWN0dXJlTyAvPn1cbiAgICAgICAgICAgICAgYWN0aXZlPXtxdWVyeVtgQG1lZGlhYF0gPT09IG51bGx9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHsgJ0BtZWRpYSc6IG51bGwgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1lZGlhdGhla1xuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIGljb249ezxGYVVzZXJzIC8+fVxuICAgICAgICAgICAgICBhY3RpdmU9e3F1ZXJ5W2BAdXNlcnNgXSA9PT0gbnVsbH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoeyAnQHVzZXJzJzogbnVsbCB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQmVudXR6ZXIgJiBHcnVwcGVuXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIHshIXdpbmRvdy5nYSAmJiAoXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICBpY29uPXs8RmFCYXJDaGFydCAvPn1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e3F1ZXJ5W2BAYW5hbHl0aWNzYF0gPT09IG51bGx9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoeyAnQGFuYWx5dGljcyc6IG51bGwgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTdGF0aXN0aWtlblxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7bGlzdHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxNZW51Lkxpc3QgdGl0bGU9XCJDb2xsZWN0aW9uc1wiPntpdGVtc308L01lbnUuTGlzdD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7bGlzdHN9XG4gICAgICAgICAgICA8TWVudS5TcGFjZSAvPlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgICBzZXRDb2xsYXBzZWQodHJ1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGljb249ezxGYVNlYXJjaCAvPn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VjaGVcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBhY3RpdmU9e3F1ZXJ5W2BAdXNlcnNgXSA9PT0gdXNlci5pZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoeyAnQHVzZXJzJzogdXNlci5pZCB9KX1cbiAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgPEF2YXRhciBlbWFpbD17dXNlci5lbWFpbH0gbmFtZT17dXNlci5uYW1lfSBkZWZhdWx0PVwiYmxhbmtcIiAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt1c2VyLm5hbWV9XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17bG9nb3V0fSBpY29uPXs8RmFQb3dlck9mZiAvPn0+XG4gICAgICAgICAgICAgIEFibWVsZGVuXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgIDxTZWFyY2hcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN1Y2hlIC4uLlwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9XG4gICAgICAgICAgb25DaGFuZ2U9e3NldFNlYXJjaFRleHR9XG4gICAgICAgICAgb3Blbj17c2VhcmNoT3Blbn1cbiAgICAgICAgICBoZWFkZXI9e2hlYWRlcn1cbiAgICAgICAgICByZXN1bHRzPXtcbiAgICAgICAgICAgIHNlYXJjaFRleHRcbiAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICB7IGlkOiAxLCBuYW1lOiAnVGVzdCAxJyB9LFxuICAgICAgICAgICAgICAgICAgeyBpZDogMiwgbmFtZTogJ1Rlc3QgMicgfSxcbiAgICAgICAgICAgICAgICAgIHsgaWQ6IDMsIG5hbWU6ICdUZXN0IDMnIH0sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgIHNldFNlYXJjaE9wZW4oZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1NpZGViYXI+XG4gICAgKTtcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudDtcbiJdfQ==
