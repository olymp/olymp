import 'antd/lib/icon/style';
import _Icon2 from 'antd/lib/icon';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { withLang } from 'olymp-utils';
import { createReplaceQuery, createPushPathname } from 'olymp-router';
import { getAuth } from 'olymp-auth0';
import { Avatar, Logo, Sidebar } from 'olymp-fela';
import Menu, { Search } from 'olymp-fela/menu';
import FaCubes from 'olymp-icons/lib/fa-cubes';
import FaPictureO from 'olymp-icons/lib/fa-picture-o';
import FaSearch from 'olymp-icons/lib/fa-search';
import FaPowerOff from 'olymp-icons/lib/fa-power-off';
import FaDatabase from 'olymp-icons/lib/fa-database';
import FaBarChart from 'olymp-icons/lib/fa-bar-chart';
import FaUsers from 'olymp-icons/lib/fa-users';

import { connect } from 'react-redux';

var enhance = compose(withLang, getAuth, connect(function (_ref) {
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
    setQuery: createReplaceQuery(dispatch),
    push: createPushPathname(dispatch)
  };
}), withState('collapsed', 'setCollapsed', true), withState('searchOpen', 'setSearchOpen', false), withState('searchText', 'setSearchText', ''), withHandlers({
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

var _ref6 = React.createElement(FaDatabase, null);

var _ref7 = React.createElement(FaDatabase, null);

var _ref8 = React.createElement(Logo, { color: true });

var _ref9 = React.createElement(FaCubes, null);

var _ref10 = React.createElement(FaPictureO, null);

var _ref11 = React.createElement(FaUsers, null);

var _ref12 = React.createElement(FaBarChart, null);

var _ref13 = React.createElement(Menu.Space, null);

var _ref14 = React.createElement(FaSearch, null);

var _ref15 = React.createElement(FaPowerOff, null);

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
    return collectionTree[key].length > 1 ? lists.push(React.createElement(
      Menu.List,
      { title: key, key: key },
      collectionTree[key].map(function (collection, i) {
        return React.createElement(
          Menu.Item,
          {
            key: collection.id || i,
            icon: collection.specialFields.icon ? React.createElement(_Icon, {
              type: collection.specialFields.icon,
              style: { fontSize: 20 }
            }) : _ref6,
            active: query['@' + collection.name.toLowerCase()] !== undefined,
            onClick: function onClick() {
              return setQuery(_defineProperty({}, '@' + collection.name.toLowerCase(), null));
            }
          },
          _get(collection, 'specialFields.label', collection.name)
        );
      })
    )) : items.push(React.createElement(
      Menu.Item,
      {
        key: key,
        icon: collectionTree[key][0].specialFields.icon ? React.createElement(_Icon2, {
          type: collectionTree[key][0].specialFields.icon,
          style: { fontSize: 20 }
        }) : _ref7,
        active: query['@' + collectionTree[key][0].name.toLowerCase()] !== undefined,
        onClick: function onClick() {
          return setQuery(_defineProperty({}, '@' + collectionTree[key][0].name.toLowerCase(), null));
        }
      },
      _get(collectionTree[key][0], 'specialFields.label', collectionTree[key][0].name)
    ));
  });

  var header = React.createElement(
    Menu.Item,
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

  return React.createElement(
    Sidebar,
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
      menu: React.createElement(
        Menu,
        { color: 'colorSecondary', inverted: true, header: header },
        React.createElement(
          Menu.Item,
          {
            active: query['@page'] === null,
            icon: _ref9,
            onClick: function onClick() {
              return setQuery({ '@page': null });
            }
          },
          'Seitenmanager'
        ),
        React.createElement(
          Menu.Item,
          {
            icon: _ref10,
            active: query['@media'] === null,
            onClick: function onClick() {
              return setQuery({ '@media': null });
            }
          },
          'Mediathek'
        ),
        React.createElement(
          Menu.Item,
          {
            icon: _ref11,
            active: query['@users'] === null,
            onClick: function onClick() {
              return setQuery({ '@users': null });
            }
          },
          'Benutzer & Gruppen'
        ),
        !!window.ga && React.createElement(
          Menu.Item,
          {
            icon: _ref12,
            active: query['@analytics'] === null,
            onClick: function onClick() {
              return setQuery({ '@analytics': null });
            }
          },
          'Statistiken'
        ),
        lists.length > 0 && React.createElement(
          Menu.List,
          { title: 'Collections' },
          items
        ),
        lists,
        _ref13,
        React.createElement(
          Menu.Item,
          {
            onClick: function onClick() {
              setSearchOpen(true);
              setCollapsed(true);
            },
            icon: _ref14
          },
          'Suche'
        ),
        React.createElement(
          Menu.Item,
          {
            active: query['@users'] === user.id,
            onClick: function onClick() {
              return setQuery({ '@users': user.id });
            },
            icon: React.createElement(Avatar, { email: user.email, name: user.name, 'default': 'blank' })
          },
          user.name
        ),
        React.createElement(
          Menu.Item,
          { onClick: logout, icon: _ref15 },
          'Abmelden'
        )
      )
    },
    children,
    React.createElement(Search, {
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

export default component;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Ntcy9uYXZpZ2F0aW9uLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbXBvc2UiLCJ3aXRoU3RhdGUiLCJ3aXRoSGFuZGxlcnMiLCJ3aXRoTGFuZyIsImNyZWF0ZVJlcGxhY2VRdWVyeSIsImNyZWF0ZVB1c2hQYXRobmFtZSIsImdldEF1dGgiLCJBdmF0YXIiLCJMb2dvIiwiU2lkZWJhciIsIk1lbnUiLCJTZWFyY2giLCJjb25uZWN0IiwiZW5oYW5jZSIsImxvY2F0aW9uIiwiYXV0aCIsInBhdGhuYW1lIiwicXVlcnkiLCJ1c2VyIiwiaXNBZG1pbiIsInNldFF1ZXJ5IiwiZGlzcGF0Y2giLCJwdXNoIiwiZXhwYW5kIiwic2V0Q29sbGFwc2VkIiwiY29sbGFwc2UiLCJoYW5kbGVDbGljayIsImxvZ291dCIsImUiLCJrZXkiLCJ2Iiwic3BsaXQiLCJyZWR1Y2UiLCJzdGF0ZSIsIm5leHQiLCJpbmRleE9mIiwidmFsdWUiLCJjb21wb25lbnQiLCJjb2xsZWN0aW9uVHJlZSIsImNvbGxhcHNlZCIsInNlYXJjaE9wZW4iLCJzZXRTZWFyY2hPcGVuIiwiY2hpbGRyZW4iLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsImtleXMiLCJPYmplY3QiLCJmaWx0ZXIiLCJ4IiwibGVuZ3RoIiwibGlzdHMiLCJpdGVtcyIsImZvckVhY2giLCJtYXAiLCJjb2xsZWN0aW9uIiwiaSIsImlkIiwic3BlY2lhbEZpZWxkcyIsImljb24iLCJmb250U2l6ZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsImhlYWRlciIsIndpbmRvdyIsImdhIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsU0FBbEIsRUFBNkJDLFlBQTdCLFFBQWlELFdBQWpEO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixhQUF6QjtBQUNBLFNBQVNDLGtCQUFULEVBQTZCQyxrQkFB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QUFFSixJQUFJLENBQU4sRUFBU0ksTUFBTSxRQUFmLEVBSEYsQ0FESixHQU1JLEVBYlI7QUFlRSxlQUFTLG1CQUFNO0FBQ2JuQixzQkFBYyxLQUFkO0FBQ0Q7QUFqQkg7QUFyRUYsR0FERjtBQTJGRCxDQTdMZSxDQUFsQjs7QUFnTUEsZUFBZUosU0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jbXMvbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoU3RhdGUsIHdpdGhIYW5kbGVycyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyB3aXRoTGFuZyB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCB7IGNyZWF0ZVJlcGxhY2VRdWVyeSwgY3JlYXRlUHVzaFBhdGhuYW1lIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdvbHltcC1hdXRoMCc7XG5pbXBvcnQgeyBBdmF0YXIsIExvZ28sIFNpZGViYXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBNZW51LCB7IFNlYXJjaCB9IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQge1xuICBGYUN1YmVzLFxuICBGYVBpY3R1cmVPLFxuICBGYVNlYXJjaCxcbiAgRmFQb3dlck9mZixcbiAgRmFEYXRhYmFzZSxcbiAgRmFCYXJDaGFydCxcbiAgRmFVc2Vycyxcbn0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoTGFuZyxcbiAgZ2V0QXV0aCxcbiAgY29ubmVjdChcbiAgICAoeyBsb2NhdGlvbiwgYXV0aCB9KSA9PiAoe1xuICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgcXVlcnk6IGxvY2F0aW9uLnF1ZXJ5LFxuICAgICAgdXNlcjogYXV0aC51c2VyLFxuICAgICAgaXNBZG1pbjogYXV0aC51c2VyICYmIGF1dGgudXNlci5pc0FkbWluLFxuICAgIH0pLFxuICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICBzZXRRdWVyeTogY3JlYXRlUmVwbGFjZVF1ZXJ5KGRpc3BhdGNoKSxcbiAgICAgIHB1c2g6IGNyZWF0ZVB1c2hQYXRobmFtZShkaXNwYXRjaCksXG4gICAgfSksXG4gICksXG4gIHdpdGhTdGF0ZSgnY29sbGFwc2VkJywgJ3NldENvbGxhcHNlZCcsIHRydWUpLFxuICB3aXRoU3RhdGUoJ3NlYXJjaE9wZW4nLCAnc2V0U2VhcmNoT3BlbicsIGZhbHNlKSxcbiAgd2l0aFN0YXRlKCdzZWFyY2hUZXh0JywgJ3NldFNlYXJjaFRleHQnLCAnJyksXG4gIHdpdGhIYW5kbGVycyh7XG4gICAgZXhwYW5kOiAoeyBzZXRDb2xsYXBzZWQgfSkgPT4gKCkgPT4gc2V0Q29sbGFwc2VkKGZhbHNlKSxcbiAgICBjb2xsYXBzZTogKHsgc2V0Q29sbGFwc2VkIH0pID0+ICgpID0+IHNldENvbGxhcHNlZCh0cnVlKSxcbiAgICBoYW5kbGVDbGljazogKHsgc2V0UXVlcnksIGxvZ291dCwgc2V0Q29sbGFwc2VkIH0pID0+IGUgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnbG9nb3V0Jykge1xuICAgICAgICBsb2dvdXQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChlLmtleSAmJiBlLmtleVswXSA9PT0gJ0AnKSB7XG4gICAgICAgIGNvbnN0IHYgPSBlLmtleS5zcGxpdCgnLCcpLnJlZHVjZSgoc3RhdGUsIG5leHQpID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBuZXh0LmluZGV4T2YoJz0nKSAhPT0gLTEgPyBuZXh0LnNwbGl0KCc9JylbMF0gOiBuZXh0O1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbmV4dC5pbmRleE9mKCc9JykgIT09IC0xID8gbmV4dC5zcGxpdCgnPScpWzFdIDogbnVsbDtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBba2V5XTogdmFsdWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSwge30pO1xuICAgICAgICBzZXRDb2xsYXBzZWQoZmFsc2UpOyAvLyBjbG9zZSBNZW51XG5cbiAgICAgICAgc2V0UXVlcnkodik7XG4gICAgICB9XG4gICAgfSxcbiAgfSksXG4pO1xuXG5jb25zdCBjb21wb25lbnQgPSBlbmhhbmNlKFxuICAoe1xuICAgIGxvZ291dCxcbiAgICBxdWVyeSxcbiAgICBjb2xsZWN0aW9uVHJlZSxcbiAgICBzZXRRdWVyeSxcbiAgICB1c2VyID0ge30sXG4gICAgY29sbGFwc2VkLFxuICAgIHNldENvbGxhcHNlZCxcbiAgICBzZWFyY2hPcGVuLFxuICAgIHNldFNlYXJjaE9wZW4sXG4gICAgY2hpbGRyZW4sXG4gICAgc2VhcmNoVGV4dCxcbiAgICBzZXRTZWFyY2hUZXh0LFxuICB9KSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHF1ZXJ5KTtcblxuICAgIGlmICgha2V5cy5maWx0ZXIoeCA9PiB4WzBdID09PSAnQCcpLmxlbmd0aCkge1xuICAgICAga2V5cy5wdXNoKCdAaG9tZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RzID0gW107XG4gICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhjb2xsZWN0aW9uVHJlZSkuZm9yRWFjaChcbiAgICAgIGtleSA9PlxuICAgICAgICBjb2xsZWN0aW9uVHJlZVtrZXldLmxlbmd0aCA+IDFcbiAgICAgICAgICA/IGxpc3RzLnB1c2goXG4gICAgICAgICAgICA8TWVudS5MaXN0IHRpdGxlPXtrZXl9IGtleT17a2V5fT5cbiAgICAgICAgICAgICAge2NvbGxlY3Rpb25UcmVlW2tleV0ubWFwKChjb2xsZWN0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtjb2xsZWN0aW9uLmlkIHx8IGl9XG4gICAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHMuaWNvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e2NvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYURhdGFiYXNlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhY3RpdmU9e1xuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5W2BAJHtjb2xsZWN0aW9uLm5hbWUudG9Mb3dlckNhc2UoKX1gXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0UXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgW2BAJHtjb2xsZWN0aW9uLm5hbWUudG9Mb3dlckNhc2UoKX1gXTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2dldChjb2xsZWN0aW9uLCAnc3BlY2lhbEZpZWxkcy5sYWJlbCcsIGNvbGxlY3Rpb24ubmFtZSl9XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L01lbnUuTGlzdD4sXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBpdGVtcy5wdXNoKFxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uVHJlZVtrZXldWzBdLnNwZWNpYWxGaWVsZHMuaWNvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtjb2xsZWN0aW9uVHJlZVtrZXldWzBdLnNwZWNpYWxGaWVsZHMuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxGYURhdGFiYXNlIC8+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhY3RpdmU9e1xuICAgICAgICAgICAgICAgICAgcXVlcnlbYEAke2NvbGxlY3Rpb25UcmVlW2tleV1bMF0ubmFtZS50b0xvd2VyQ2FzZSgpfWBdICE9PVxuICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc2V0UXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICBbYEAke2NvbGxlY3Rpb25UcmVlW2tleV1bMF0ubmFtZS50b0xvd2VyQ2FzZSgpfWBdOiBudWxsLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtnZXQoXG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uVHJlZVtrZXldWzBdLFxuICAgICAgICAgICAgICAgICAgJ3NwZWNpYWxGaWVsZHMubGFiZWwnLFxuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvblRyZWVba2V5XVswXS5uYW1lLFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L01lbnUuSXRlbT4sXG4gICAgICAgICAgICApLFxuICAgICk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSAoXG4gICAgICA8TWVudS5JdGVtXG4gICAgICAgIGxhcmdlXG4gICAgICAgIGtleT1cImJhY2tcIlxuICAgICAgICBpY29uPXs8TG9nbyBjb2xvciAvPn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoe30pfVxuICAgICAgPlxuICAgICAgICBPbHltcFxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2lkZWJhclxuICAgICAgICB6SW5kZXg9ezExfVxuICAgICAgICBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cbiAgICAgICAgb3ZlcmxhcFxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldENvbGxhcHNlZChmYWxzZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0Q29sbGFwc2VkKHRydWUpfVxuICAgICAgICBtZW51PXtcbiAgICAgICAgICA8TWVudSBjb2xvcj1cImNvbG9yU2Vjb25kYXJ5XCIgaW52ZXJ0ZWQgaGVhZGVyPXtoZWFkZXJ9PlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBhY3RpdmU9e3F1ZXJ5W2BAcGFnZWBdID09PSBudWxsfVxuICAgICAgICAgICAgICBpY29uPXs8RmFDdWJlcyAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoeyAnQHBhZ2UnOiBudWxsIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZWl0ZW5tYW5hZ2VyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgaWNvbj17PEZhUGljdHVyZU8gLz59XG4gICAgICAgICAgICAgIGFjdGl2ZT17cXVlcnlbYEBtZWRpYWBdID09PSBudWxsfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeSh7ICdAbWVkaWEnOiBudWxsIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNZWRpYXRoZWtcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBpY29uPXs8RmFVc2VycyAvPn1cbiAgICAgICAgICAgICAgYWN0aXZlPXtxdWVyeVtgQHVzZXJzYF0gPT09IG51bGx9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHsgJ0B1c2Vycyc6IG51bGwgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJlbnV0emVyICYgR3J1cHBlblxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICB7ISF3aW5kb3cuZ2EgJiYgKFxuICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgaWNvbj17PEZhQmFyQ2hhcnQgLz59XG4gICAgICAgICAgICAgICAgYWN0aXZlPXtxdWVyeVtgQGFuYWx5dGljc2BdID09PSBudWxsfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHsgJ0BhbmFseXRpY3MnOiBudWxsIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3RhdGlzdGlrZW5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2xpc3RzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8TWVudS5MaXN0IHRpdGxlPVwiQ29sbGVjdGlvbnNcIj57aXRlbXN9PC9NZW51Lkxpc3Q+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2xpc3RzfVxuICAgICAgICAgICAgPE1lbnUuU3BhY2UgLz5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNlYXJjaE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0Q29sbGFwc2VkKHRydWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpY29uPXs8RmFTZWFyY2ggLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Y2hlXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgYWN0aXZlPXtxdWVyeVtgQHVzZXJzYF0gPT09IHVzZXIuaWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHsgJ0B1c2Vycyc6IHVzZXIuaWQgfSl9XG4gICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgIDxBdmF0YXIgZW1haWw9e3VzZXIuZW1haWx9IG5hbWU9e3VzZXIubmFtZX0gZGVmYXVsdD1cImJsYW5rXCIgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlci5uYW1lfVxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e2xvZ291dH0gaWNvbj17PEZhUG93ZXJPZmYgLz59PlxuICAgICAgICAgICAgICBBYm1lbGRlblxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdWNoZSAuLi5cIlxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTZWFyY2hUZXh0fVxuICAgICAgICAgIG9wZW49e3NlYXJjaE9wZW59XG4gICAgICAgICAgaGVhZGVyPXtoZWFkZXJ9XG4gICAgICAgICAgcmVzdWx0cz17XG4gICAgICAgICAgICBzZWFyY2hUZXh0XG4gICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgeyBpZDogMSwgbmFtZTogJ1Rlc3QgMScgfSxcbiAgICAgICAgICAgICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdUZXN0IDInIH0sXG4gICAgICAgICAgICAgICAgICB7IGlkOiAzLCBuYW1lOiAnVGVzdCAzJyB9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTZWFyY2hPcGVuKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9TaWRlYmFyPlxuICAgICk7XG4gIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG4iXX0=
