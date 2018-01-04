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

var _olympAuth = require('olymp-auth0');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbXMvbmF2aWdhdGlvbi5lczYiXSwibmFtZXMiOlsiZW5oYW5jZSIsImxvY2F0aW9uIiwiYXV0aCIsInBhdGhuYW1lIiwicXVlcnkiLCJ1c2VyIiwiaXNBZG1pbiIsInNldFF1ZXJ5IiwiZGlzcGF0Y2giLCJwdXNoIiwiZXhwYW5kIiwic2V0Q29sbGFwc2VkIiwiY29sbGFwc2UiLCJoYW5kbGVDbGljayIsImxvZ291dCIsImUiLCJrZXkiLCJ2Iiwic3BsaXQiLCJyZWR1Y2UiLCJzdGF0ZSIsIm5leHQiLCJpbmRleE9mIiwidmFsdWUiLCJjb21wb25lbnQiLCJjb2xsZWN0aW9uVHJlZSIsImNvbGxhcHNlZCIsInNlYXJjaE9wZW4iLCJzZXRTZWFyY2hPcGVuIiwiY2hpbGRyZW4iLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsImtleXMiLCJPYmplY3QiLCJmaWx0ZXIiLCJ4IiwibGVuZ3RoIiwibGlzdHMiLCJpdGVtcyIsImZvckVhY2giLCJtYXAiLCJjb2xsZWN0aW9uIiwiaSIsImlkIiwic3BlY2lhbEZpZWxkcyIsImljb24iLCJmb250U2l6ZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsImhlYWRlciIsIndpbmRvdyIsImdhIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7OztBQUVBLElBQU1BLFVBQVUsNENBRWQseUJBQ0U7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxJQUFiLFFBQWFBLElBQWI7QUFBQSxTQUF5QjtBQUN2QkMsY0FBVUYsU0FBU0UsUUFESTtBQUV2QkMsV0FBT0gsU0FBU0csS0FGTztBQUd2QkMsVUFBTUgsS0FBS0csSUFIWTtBQUl2QkMsYUFBU0osS0FBS0csSUFBTCxJQUFhSCxLQUFLRyxJQUFMLENBQVVDO0FBSlQs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MEM7QUFQUixTQTdDRjtBQXNERTtBQUFBLHlCQUFNLElBQU47QUFBQSxZQUFXLFNBQVNqQyxNQUFwQixFQUE0QixZQUE1QjtBQUFBO0FBQUE7QUF0REY7QUFQSjtBQW1FR2UsWUFuRUg7QUFxRUU7QUFDRSxtQkFBWSxXQURkO0FBRUUsYUFBT0MsVUFGVDtBQUdFLGdCQUFVQyxhQUhaO0FBSUUsWUFBTUosVUFKUjtBQUtFLGNBQVF1QixNQUxWO0FBTUUsZUFDRXBCLGFBQ0ksQ0FDRSxFQUFFYSxJQUFJLENBQU4sRUFBU0ksTUFBTSxRQUFmLEVBREYsRUFFRSxFQUFFSixJQUFJLENBQU4sRUFBU0ksTUFBTSxRQUFmLEVBRkYsRUFHRSxFQUFFSixJQUFJLENBQU4sRUFBU0ksTUFBTSxRQUFmLEVBSEYsQ0FESixHQU1JLEVBYlI7QUFlRSxlQUFTLG1CQUFNO0FBQ2JuQixzQkFBYyxLQUFkO0FBQ0Q7QUFqQkg7QUFyRUYsR0FERjtBQTJGRCxDQTdMZSxDQUFsQjs7a0JBZ01lSixTIiwiZmlsZSI6ImNtcy9jbXMvbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoU3RhdGUsIHdpdGhIYW5kbGVycyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBjcmVhdGVSZXBsYWNlUXVlcnksIGNyZWF0ZVB1c2hQYXRobmFtZSB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnb2x5bXAtYXV0aDAnO1xuaW1wb3J0IHsgQXZhdGFyLCBMb2dvLCBTaWRlYmFyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgTWVudSwgeyBTZWFyY2ggfSBmcm9tICdvbHltcC1mZWxhL21lbnUnO1xuaW1wb3J0IHtcbiAgRmFDdWJlcyxcbiAgRmFQaWN0dXJlTyxcbiAgRmFTZWFyY2gsXG4gIEZhUG93ZXJPZmYsXG4gIEZhRGF0YWJhc2UsXG4gIEZhQmFyQ2hhcnQsXG4gIEZhVXNlcnMsXG59IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgZ2V0QXV0aCxcbiAgY29ubmVjdChcbiAgICAoeyBsb2NhdGlvbiwgYXV0aCB9KSA9PiAoe1xuICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgcXVlcnk6IGxvY2F0aW9uLnF1ZXJ5LFxuICAgICAgdXNlcjogYXV0aC51c2VyLFxuICAgICAgaXNBZG1pbjogYXV0aC51c2VyICYmIGF1dGgudXNlci5pc0FkbWluLFxuICAgIH0pLFxuICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICBzZXRRdWVyeTogY3JlYXRlUmVwbGFjZVF1ZXJ5KGRpc3BhdGNoKSxcbiAgICAgIHB1c2g6IGNyZWF0ZVB1c2hQYXRobmFtZShkaXNwYXRjaCksXG4gICAgfSksXG4gICksXG4gIHdpdGhTdGF0ZSgnY29sbGFwc2VkJywgJ3NldENvbGxhcHNlZCcsIHRydWUpLFxuICB3aXRoU3RhdGUoJ3NlYXJjaE9wZW4nLCAnc2V0U2VhcmNoT3BlbicsIGZhbHNlKSxcbiAgd2l0aFN0YXRlKCdzZWFyY2hUZXh0JywgJ3NldFNlYXJjaFRleHQnLCAnJyksXG4gIHdpdGhIYW5kbGVycyh7XG4gICAgZXhwYW5kOiAoeyBzZXRDb2xsYXBzZWQgfSkgPT4gKCkgPT4gc2V0Q29sbGFwc2VkKGZhbHNlKSxcbiAgICBjb2xsYXBzZTogKHsgc2V0Q29sbGFwc2VkIH0pID0+ICgpID0+IHNldENvbGxhcHNlZCh0cnVlKSxcbiAgICBoYW5kbGVDbGljazogKHsgc2V0UXVlcnksIGxvZ291dCwgc2V0Q29sbGFwc2VkIH0pID0+IGUgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnbG9nb3V0Jykge1xuICAgICAgICBsb2dvdXQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChlLmtleSAmJiBlLmtleVswXSA9PT0gJ0AnKSB7XG4gICAgICAgIGNvbnN0IHYgPSBlLmtleS5zcGxpdCgnLCcpLnJlZHVjZSgoc3RhdGUsIG5leHQpID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBuZXh0LmluZGV4T2YoJz0nKSAhPT0gLTEgPyBuZXh0LnNwbGl0KCc9JylbMF0gOiBuZXh0O1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbmV4dC5pbmRleE9mKCc9JykgIT09IC0xID8gbmV4dC5zcGxpdCgnPScpWzFdIDogbnVsbDtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBba2V5XTogdmFsdWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xuICAgICAgICBzZXRDb2xsYXBzZWQoZmFsc2UpOyAvLyBjbG9zZSBNZW51XG5cbiAgICAgICAgc2V0UXVlcnkodik7XG4gICAgICB9XG4gICAgfSxcbiAgfSksXG4pO1xuXG5jb25zdCBjb21wb25lbnQgPSBlbmhhbmNlKFxuICAoe1xuICAgIGxvZ291dCxcbiAgICBxdWVyeSxcbiAgICBjb2xsZWN0aW9uVHJlZSxcbiAgICBzZXRRdWVyeSxcbiAgICB1c2VyID0ge30sXG4gICAgY29sbGFwc2VkLFxuICAgIHNldENvbGxhcHNlZCxcbiAgICBzZWFyY2hPcGVuLFxuICAgIHNldFNlYXJjaE9wZW4sXG4gICAgY2hpbGRyZW4sXG4gICAgc2VhcmNoVGV4dCxcbiAgICBzZXRTZWFyY2hUZXh0LFxuICB9KSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHF1ZXJ5KTtcblxuICAgIGlmICgha2V5cy5maWx0ZXIoeCA9PiB4WzBdID09PSAnQCcpLmxlbmd0aCkge1xuICAgICAga2V5cy5wdXNoKCdAaG9tZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RzID0gW107XG4gICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhjb2xsZWN0aW9uVHJlZSkuZm9yRWFjaChcbiAgICAgIGtleSA9PlxuICAgICAgICBjb2xsZWN0aW9uVHJlZVtrZXldLmxlbmd0aCA+IDFcbiAgICAgICAgICA/IGxpc3RzLnB1c2goXG4gICAgICAgICAgICA8TWVudS5MaXN0IHRpdGxlPXtrZXl9IGtleT17a2V5fT5cbiAgICAgICAgICAgICAge2NvbGxlY3Rpb25UcmVlW2tleV0ubWFwKChjb2xsZWN0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtjb2xsZWN0aW9uLmlkIHx8IGl9XG4gICAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHMuaWNvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e2NvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYURhdGFiYXNlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhY3RpdmU9e1xuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5W2BAJHtjb2xsZWN0aW9uLm5hbWUudG9Mb3dlckNhc2UoKX1gXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0UXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgW2BAJHtjb2xsZWN0aW9uLm5hbWUudG9Mb3dlckNhc2UoKX1gXTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2dldChjb2xsZWN0aW9uLCAnc3BlY2lhbEZpZWxkcy5sYWJlbCcsIGNvbGxlY3Rpb24ubmFtZSl9XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L01lbnUuTGlzdD4sXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBpdGVtcy5wdXNoKFxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uVHJlZVtrZXldWzBdLnNwZWNpYWxGaWVsZHMuaWNvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtjb2xsZWN0aW9uVHJlZVtrZXldWzBdLnNwZWNpYWxGaWVsZHMuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxGYURhdGFiYXNlIC8+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhY3RpdmU9e1xuICAgICAgICAgICAgICAgICAgcXVlcnlbYEAke2NvbGxlY3Rpb25UcmVlW2tleV1bMF0ubmFtZS50b0xvd2VyQ2FzZSgpfWBdICE9PVxuICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc2V0UXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICBbYEAke2NvbGxlY3Rpb25UcmVlW2tleV1bMF0ubmFtZS50b0xvd2VyQ2FzZSgpfWBdOiBudWxsLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtnZXQoXG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uVHJlZVtrZXldWzBdLFxuICAgICAgICAgICAgICAgICAgJ3NwZWNpYWxGaWVsZHMubGFiZWwnLFxuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvblRyZWVba2V5XVswXS5uYW1lLFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L01lbnUuSXRlbT4sXG4gICAgICAgICAgICApLFxuICAgICk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSAoXG4gICAgICA8TWVudS5JdGVtXG4gICAgICAgIGxhcmdlXG4gICAgICAgIGtleT1cImJhY2tcIlxuICAgICAgICBpY29uPXs8TG9nbyBjb2xvciAvPn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoe30pfVxuICAgICAgPlxuICAgICAgICBPbHltcFxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2lkZWJhclxuICAgICAgICB6SW5kZXg9ezExfVxuICAgICAgICBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cbiAgICAgICAgb3ZlcmxhcFxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldENvbGxhcHNlZChmYWxzZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0Q29sbGFwc2VkKHRydWUpfVxuICAgICAgICBtZW51PXtcbiAgICAgICAgICA8TWVudSBjb2xvcj1cImNvbG9yU2Vjb25kYXJ5XCIgaW52ZXJ0ZWQgaGVhZGVyPXtoZWFkZXJ9PlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBhY3RpdmU9e3F1ZXJ5W2BAcGFnZWBdID09PSBudWxsfVxuICAgICAgICAgICAgICBpY29uPXs8RmFDdWJlcyAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoeyAnQHBhZ2UnOiBudWxsIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZWl0ZW5tYW5hZ2VyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgaWNvbj17PEZhUGljdHVyZU8gLz59XG4gICAgICAgICAgICAgIGFjdGl2ZT17cXVlcnlbYEBtZWRpYWBdID09PSBudWxsfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeSh7ICdAbWVkaWEnOiBudWxsIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNZWRpYXRoZWtcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBpY29uPXs8RmFVc2VycyAvPn1cbiAgICAgICAgICAgICAgYWN0aXZlPXtxdWVyeVtgQHVzZXJzYF0gPT09IG51bGx9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHsgJ0B1c2Vycyc6IG51bGwgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJlbnV0emVyICYgR3J1cHBlblxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICB7ISF3aW5kb3cuZ2EgJiYgKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgaWNvbj17PEZhQmFyQ2hhcnQgLz59XG4gICAgICAgICAgICAgICAgYWN0aXZlPXtxdWVyeVtgQGFuYWx5dGljc2BdID09PSBudWxsfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHsgJ0BhbmFseXRpY3MnOiBudWxsIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3RhdGlzdGlrZW5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2xpc3RzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8TWVudS5MaXN0IHRpdGxlPVwiQ29sbGVjdGlvbnNcIj57aXRlbXN9PC9NZW51Lkxpc3Q+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2xpc3RzfVxuICAgICAgICAgICAgPE1lbnUuU3BhY2UgLz5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNlYXJjaE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0Q29sbGFwc2VkKHRydWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpY29uPXs8RmFTZWFyY2ggLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Y2hlXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgYWN0aXZlPXtxdWVyeVtgQHVzZXJzYF0gPT09IHVzZXIuaWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHsgJ0B1c2Vycyc6IHVzZXIuaWQgfSl9XG4gICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgIDxBdmF0YXIgZW1haWw9e3VzZXIuZW1haWx9IG5hbWU9e3VzZXIubmFtZX0gZGVmYXVsdD1cImJsYW5rXCIgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlci5uYW1lfVxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e2xvZ291dH0gaWNvbj17PEZhUG93ZXJPZmYgLz59PlxuICAgICAgICAgICAgICBBYm1lbGRlblxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdWNoZSAuLi5cIlxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTZWFyY2hUZXh0fVxuICAgICAgICAgIG9wZW49e3NlYXJjaE9wZW59XG4gICAgICAgICAgaGVhZGVyPXtoZWFkZXJ9XG4gICAgICAgICAgcmVzdWx0cz17XG4gICAgICAgICAgICBzZWFyY2hUZXh0XG4gICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgeyBpZDogMSwgbmFtZTogJ1Rlc3QgMScgfSxcbiAgICAgICAgICAgICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdUZXN0IDInIH0sXG4gICAgICAgICAgICAgICAgICB7IGlkOiAzLCBuYW1lOiAnVGVzdCAzJyB9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTZWFyY2hPcGVuKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9TaWRlYmFyPlxuICAgICk7XG4gIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG4iXX0=
