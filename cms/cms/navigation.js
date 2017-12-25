import 'antd/lib/icon/style';
import _Icon2 from 'antd/lib/icon';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
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

var enhance = compose(getAuth, connect(function (_ref) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbXMvbmF2aWdhdGlvbi5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjb21wb3NlIiwid2l0aFN0YXRlIiwid2l0aEhhbmRsZXJzIiwiY3JlYXRlUmVwbGFjZVF1ZXJ5IiwiY3JlYXRlUHVzaFBhdGhuYW1lIiwiZ2V0QXV0aCIsIkF2YXRhciIsIkxvZ28iLCJTaWRlYmFyIiwiTWVudSIsIlNlYXJjaCIsImNvbm5lY3QiLCJlbmhhbmNlIiwibG9jYXRpb24iLCJhdXRoIiwicGF0aG5hbWUiLCJxdWVyeSIsInVzZXIiLCJpc0FkbWluIiwic2V0UXVlcnkiLCJkaXNwYXRjaCIsInB1c2giLCJleHBhbmQiLCJzZXRDb2xsYXBzZWQiLCJjb2xsYXBzZSIsImhhbmRsZUNsaWNrIiwibG9nb3V0IiwiZSIsImtleSIsInYiLCJzcGxpdCIsInJlZHVjZSIsInN0YXRlIiwibmV4dCIsImluZGV4T2YiLCJ2YWx1ZSIsImNvbXBvbmVudCIsImNvbGxlY3Rpb25UcmVlIiwiY29sbGFwc2VkIiwic2VhcmNoT3BlbiIsInNldFNlYXJjaE9wZW4iLCJjaGlsZHJlbiIsInNlYXJjaFRleHQiLCJzZXRTZWFyY2hUZXh0Iiwia2V5cyIsIk9iamVjdCIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJsaXN0cyIsIml0ZW1zIiwiZm9yRWFjaCIsIm1hcCIsImNvbGxlY3Rpb24iLCJpIiwiaWQiLCJzcGVjaWFsRmllbGRzIiwiaWNvbiIsImZvbnRTaXplIiwibmFtZSIsInRvTG93ZXJDYXNlIiwidW5kZWZpbmVkIiwiaGVhZGVyIiwid2luZG93IiwiZ2EiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxTQUFsQixFQUE2QkMsWUFBN0IsUUFBaUQsV0FBakQ7QUFDQSxTQUFTQyxrQkFBVCxFQUE2QkMsa0JBQTdCLFFBQXVELGNBQXZEO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixhQUF4QjtB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QUFTLG1CQUFNO0FBQ2JuQixzQkFBYyxLQUFkO0FBQ0Q7QUFqQkg7QUFyRUYsR0FERjtBQTJGRCxDQTdMZSxDQUFsQjs7QUFnTUEsZUFBZUosU0FBZiIsImZpbGUiOiJjbXMvY21zL25hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFN0YXRlLCB3aXRoSGFuZGxlcnMgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgY3JlYXRlUmVwbGFjZVF1ZXJ5LCBjcmVhdGVQdXNoUGF0aG5hbWUgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ29seW1wLWF1dGgwJztcbmltcG9ydCB7IEF2YXRhciwgTG9nbywgU2lkZWJhciB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IE1lbnUsIHsgU2VhcmNoIH0gZnJvbSAnb2x5bXAtZmVsYS9tZW51JztcbmltcG9ydCB7XG4gIEZhQ3ViZXMsXG4gIEZhUGljdHVyZU8sXG4gIEZhU2VhcmNoLFxuICBGYVBvd2VyT2ZmLFxuICBGYURhdGFiYXNlLFxuICBGYUJhckNoYXJ0LFxuICBGYVVzZXJzLFxufSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIGdldEF1dGgsXG4gIGNvbm5lY3QoXG4gICAgKHsgbG9jYXRpb24sIGF1dGggfSkgPT4gKHtcbiAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBsb2NhdGlvbi5xdWVyeSxcbiAgICAgIHVzZXI6IGF1dGgudXNlcixcbiAgICAgIGlzQWRtaW46IGF1dGgudXNlciAmJiBhdXRoLnVzZXIuaXNBZG1pbixcbiAgICB9KSxcbiAgICBkaXNwYXRjaCA9PiAoe1xuICAgICAgc2V0UXVlcnk6IGNyZWF0ZVJlcGxhY2VRdWVyeShkaXNwYXRjaCksXG4gICAgICBwdXNoOiBjcmVhdGVQdXNoUGF0aG5hbWUoZGlzcGF0Y2gpLFxuICAgIH0pLFxuICApLFxuICB3aXRoU3RhdGUoJ2NvbGxhcHNlZCcsICdzZXRDb2xsYXBzZWQnLCB0cnVlKSxcbiAgd2l0aFN0YXRlKCdzZWFyY2hPcGVuJywgJ3NldFNlYXJjaE9wZW4nLCBmYWxzZSksXG4gIHdpdGhTdGF0ZSgnc2VhcmNoVGV4dCcsICdzZXRTZWFyY2hUZXh0JywgJycpLFxuICB3aXRoSGFuZGxlcnMoe1xuICAgIGV4cGFuZDogKHsgc2V0Q29sbGFwc2VkIH0pID0+ICgpID0+IHNldENvbGxhcHNlZChmYWxzZSksXG4gICAgY29sbGFwc2U6ICh7IHNldENvbGxhcHNlZCB9KSA9PiAoKSA9PiBzZXRDb2xsYXBzZWQodHJ1ZSksXG4gICAgaGFuZGxlQ2xpY2s6ICh7IHNldFF1ZXJ5LCBsb2dvdXQsIHNldENvbGxhcHNlZCB9KSA9PiBlID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ2xvZ291dCcpIHtcbiAgICAgICAgbG9nb3V0KCk7XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgJiYgZS5rZXlbMF0gPT09ICdAJykge1xuICAgICAgICBjb25zdCB2ID0gZS5rZXkuc3BsaXQoJywnKS5yZWR1Y2UoKHN0YXRlLCBuZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gbmV4dC5pbmRleE9mKCc9JykgIT09IC0xID8gbmV4dC5zcGxpdCgnPScpWzBdIDogbmV4dDtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5leHQuaW5kZXhPZignPScpICE9PSAtMSA/IG5leHQuc3BsaXQoJz0nKVsxXSA6IG51bGw7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgW2tleV06IHZhbHVlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgc2V0Q29sbGFwc2VkKGZhbHNlKTsgLy8gY2xvc2UgTWVudVxuXG4gICAgICAgIHNldFF1ZXJ5KHYpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pLFxuKTtcblxuY29uc3QgY29tcG9uZW50ID0gZW5oYW5jZShcbiAgKHtcbiAgICBsb2dvdXQsXG4gICAgcXVlcnksXG4gICAgY29sbGVjdGlvblRyZWUsXG4gICAgc2V0UXVlcnksXG4gICAgdXNlciA9IHt9LFxuICAgIGNvbGxhcHNlZCxcbiAgICBzZXRDb2xsYXBzZWQsXG4gICAgc2VhcmNoT3BlbixcbiAgICBzZXRTZWFyY2hPcGVuLFxuICAgIGNoaWxkcmVuLFxuICAgIHNlYXJjaFRleHQsXG4gICAgc2V0U2VhcmNoVGV4dCxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhxdWVyeSk7XG5cbiAgICBpZiAoIWtleXMuZmlsdGVyKHggPT4geFswXSA9PT0gJ0AnKS5sZW5ndGgpIHtcbiAgICAgIGtleXMucHVzaCgnQGhvbWUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0cyA9IFtdO1xuICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgT2JqZWN0LmtleXMoY29sbGVjdGlvblRyZWUpLmZvckVhY2goXG4gICAgICBrZXkgPT5cbiAgICAgICAgY29sbGVjdGlvblRyZWVba2V5XS5sZW5ndGggPiAxXG4gICAgICAgICAgPyBsaXN0cy5wdXNoKFxuICAgICAgICAgICAgPE1lbnUuTGlzdCB0aXRsZT17a2V5fSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgIHtjb2xsZWN0aW9uVHJlZVtrZXldLm1hcCgoY29sbGVjdGlvbiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17Y29sbGVjdGlvbi5pZCB8fCBpfVxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmljb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHMuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFEYXRhYmFzZSAvPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYWN0aXZlPXtcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeVtgQCR7Y29sbGVjdGlvbi5uYW1lLnRvTG93ZXJDYXNlKCl9YF0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldFF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgQCR7Y29sbGVjdGlvbi5uYW1lLnRvTG93ZXJDYXNlKCl9YF06IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtnZXQoY29sbGVjdGlvbiwgJ3NwZWNpYWxGaWVsZHMubGFiZWwnLCBjb2xsZWN0aW9uLm5hbWUpfVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9NZW51Lkxpc3Q+LFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogaXRlbXMucHVzaChcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvblRyZWVba2V5XVswXS5zcGVjaWFsRmllbGRzLmljb24gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT17Y29sbGVjdGlvblRyZWVba2V5XVswXS5zcGVjaWFsRmllbGRzLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8RmFEYXRhYmFzZSAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWN0aXZlPXtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5W2BAJHtjb2xsZWN0aW9uVHJlZVtrZXldWzBdLm5hbWUudG9Mb3dlckNhc2UoKX1gXSAhPT1cbiAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHNldFF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgW2BAJHtjb2xsZWN0aW9uVHJlZVtrZXldWzBdLm5hbWUudG9Mb3dlckNhc2UoKX1gXTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2V0KFxuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvblRyZWVba2V5XVswXSxcbiAgICAgICAgICAgICAgICAgICdzcGVjaWFsRmllbGRzLmxhYmVsJyxcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25UcmVlW2tleV1bMF0ubmFtZSxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+LFxuICAgICAgICAgICAgKSxcbiAgICApO1xuXG4gICAgY29uc3QgaGVhZGVyID0gKFxuICAgICAgPE1lbnUuSXRlbVxuICAgICAgICBsYXJnZVxuICAgICAgICBrZXk9XCJiYWNrXCJcbiAgICAgICAgaWNvbj17PExvZ28gY29sb3IgLz59XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHt9KX1cbiAgICAgID5cbiAgICAgICAgT2x5bXBcbiAgICAgIDwvTWVudS5JdGVtPlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNpZGViYXJcbiAgICAgICAgekluZGV4PXsxMX1cbiAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XG4gICAgICAgIG92ZXJsYXBcbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRDb2xsYXBzZWQoZmFsc2UpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldENvbGxhcHNlZCh0cnVlKX1cbiAgICAgICAgbWVudT17XG4gICAgICAgICAgPE1lbnUgY29sb3I9XCJjb2xvclNlY29uZGFyeVwiIGludmVydGVkIGhlYWRlcj17aGVhZGVyfT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgYWN0aXZlPXtxdWVyeVtgQHBhZ2VgXSA9PT0gbnVsbH1cbiAgICAgICAgICAgICAgaWNvbj17PEZhQ3ViZXMgLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHsgJ0BwYWdlJzogbnVsbCB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2VpdGVubWFuYWdlclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIGljb249ezxGYVBpY3R1cmVPIC8+fVxuICAgICAgICAgICAgICBhY3RpdmU9e3F1ZXJ5W2BAbWVkaWFgXSA9PT0gbnVsbH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoeyAnQG1lZGlhJzogbnVsbCB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTWVkaWF0aGVrXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgaWNvbj17PEZhVXNlcnMgLz59XG4gICAgICAgICAgICAgIGFjdGl2ZT17cXVlcnlbYEB1c2Vyc2BdID09PSBudWxsfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeSh7ICdAdXNlcnMnOiBudWxsIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCZW51dHplciAmIEdydXBwZW5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgeyEhd2luZG93LmdhICYmIChcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgIGljb249ezxGYUJhckNoYXJ0IC8+fVxuICAgICAgICAgICAgICAgIGFjdGl2ZT17cXVlcnlbYEBhbmFseXRpY3NgXSA9PT0gbnVsbH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeSh7ICdAYW5hbHl0aWNzJzogbnVsbCB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN0YXRpc3Rpa2VuXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtsaXN0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPE1lbnUuTGlzdCB0aXRsZT1cIkNvbGxlY3Rpb25zXCI+e2l0ZW1zfTwvTWVudS5MaXN0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtsaXN0c31cbiAgICAgICAgICAgIDxNZW51LlNwYWNlIC8+XG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTZWFyY2hPcGVuKHRydWUpO1xuICAgICAgICAgICAgICAgIHNldENvbGxhcHNlZCh0cnVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaWNvbj17PEZhU2VhcmNoIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWNoZVxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIGFjdGl2ZT17cXVlcnlbYEB1c2Vyc2BdID09PSB1c2VyLmlkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeSh7ICdAdXNlcnMnOiB1c2VyLmlkIH0pfVxuICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGVtYWlsPXt1c2VyLmVtYWlsfSBuYW1lPXt1c2VyLm5hbWV9IGRlZmF1bHQ9XCJibGFua1wiIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXtsb2dvdXR9IGljb249ezxGYVBvd2VyT2ZmIC8+fT5cbiAgICAgICAgICAgICAgQWJtZWxkZW5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgPFNlYXJjaFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3VjaGUgLi4uXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17c2V0U2VhcmNoVGV4dH1cbiAgICAgICAgICBvcGVuPXtzZWFyY2hPcGVufVxuICAgICAgICAgIGhlYWRlcj17aGVhZGVyfVxuICAgICAgICAgIHJlc3VsdHM9e1xuICAgICAgICAgICAgc2VhcmNoVGV4dFxuICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgIHsgaWQ6IDEsIG5hbWU6ICdUZXN0IDEnIH0sXG4gICAgICAgICAgICAgICAgICB7IGlkOiAyLCBuYW1lOiAnVGVzdCAyJyB9LFxuICAgICAgICAgICAgICAgICAgeyBpZDogMywgbmFtZTogJ1Rlc3QgMycgfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICB9XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2VhcmNoT3BlbihmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2lkZWJhcj5cbiAgICApO1xuICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50O1xuIl19
