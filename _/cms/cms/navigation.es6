import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { createReplaceQuery, createPushPathname } from 'olymp-router';
import { getAuth } from 'olymp-auth';
import { Avatar, Logo, Sidebar } from 'olymp-fela';
import Menu, { Search } from 'olymp-fela/menu';
import {
  FaCubes,
  FaPictureO,
  FaSearch,
  FaPowerOff,
  FaDatabase,
  FaBarChart,
  FaUsers,
} from 'olymp-icons';
import { get } from 'lodash';
import { Icon } from 'antd';
import { connect } from 'react-redux';

const enhance = compose(
  getAuth,
  connect(
    ({ location, auth }) => ({
      pathname: location.pathname,
      query: location.query,
      user: auth.user,
      isAdmin: auth.user && auth.user.isAdmin,
    }),
    dispatch => ({
      setQuery: createReplaceQuery(dispatch),
      push: createPushPathname(dispatch),
    }),
  ),
  withState('collapsed', 'setCollapsed', true),
  withState('searchOpen', 'setSearchOpen', false),
  withState('searchText', 'setSearchText', ''),
  withHandlers({
    expand: ({ setCollapsed }) => () => setCollapsed(false),
    collapse: ({ setCollapsed }) => () => setCollapsed(true),
    handleClick: ({ setQuery, logout, setCollapsed }) => e => {
      if (e.key === 'logout') {
        logout();
      }
      if (e.key && e.key[0] === '@') {
        const v = e.key.split(',').reduce((state, next) => {
          const key = next.indexOf('=') !== -1 ? next.split('=')[0] : next;
          const value = next.indexOf('=') !== -1 ? next.split('=')[1] : null;
          return {
            ...state,
            [key]: value,
          };
        }, {});
        setCollapsed(false); // close Menu

        setQuery(v);
      }
    },
  }),
);

const component = enhance(
  ({
    logout,
    query,
    collectionTree,
    setQuery,
    user = {},
    collapsed,
    setCollapsed,
    searchOpen,
    setSearchOpen,
    children,
    searchText,
    setSearchText,
  }) => {
    const keys = Object.keys(query);

    if (!keys.filter(x => x[0] === '@').length) {
      keys.push('@home');
    }

    const lists = [];
    const items = [];
    Object.keys(collectionTree).forEach(
      key =>
        collectionTree[key].length > 1
          ? lists.push(
            <Menu.List title={key} key={key}>
              {collectionTree[key].map((collection, i) => (
                <Menu.Item
                  key={collection.id || i}
                  icon={
                      collection.specialFields.icon ? (
                        <Icon
                          type={collection.specialFields.icon}
                          style={{ fontSize: 20 }}
                        />
                      ) : (
                        <FaDatabase />
                      )
                    }
                  active={
                      query[`@${collection.name.toLowerCase()}`] !== undefined
                    }
                  onClick={() =>
                      setQuery({
                        [`@${collection.name.toLowerCase()}`]: null,
                      })
                    }
                >
                  {get(collection, 'specialFields.label', collection.name)}
                </Menu.Item>
                ))}
            </Menu.List>,
            )
          : items.push(
            <Menu.Item
              key={key}
              icon={
                  collectionTree[key][0].specialFields.icon ? (
                    <Icon
                      type={collectionTree[key][0].specialFields.icon}
                      style={{ fontSize: 20 }}
                    />
                  ) : (
                    <FaDatabase />
                  )
                }
              active={
                  query[`@${collectionTree[key][0].name.toLowerCase()}`] !==
                  undefined
                }
              onClick={() =>
                  setQuery({
                    [`@${collectionTree[key][0].name.toLowerCase()}`]: null,
                  })
                }
            >
              {get(
                  collectionTree[key][0],
                  'specialFields.label',
                  collectionTree[key][0].name,
                )}
            </Menu.Item>,
            ),
    );

    const header = (
      <Menu.Item
        large
        key="back"
        icon={<Logo color />}
        onClick={() => setQuery({})}
      >
        Olymp
      </Menu.Item>
    );

    return (
      <Sidebar
        zIndex={11}
        collapsed={collapsed}
        overlap
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        menu={
          <Menu color="colorSecondary" inverted header={header}>
            <Menu.Item
              active={query[`@page`] === null}
              icon={<FaCubes />}
              onClick={() => setQuery({ '@page': null })}
            >
              Seitenmanager
            </Menu.Item>
            <Menu.Item
              icon={<FaPictureO />}
              active={query[`@media`] === null}
              onClick={() => setQuery({ '@media': null })}
            >
              Mediathek
            </Menu.Item>
            <Menu.Item
              icon={<FaUsers />}
              active={query[`@users`] === null}
              onClick={() => setQuery({ '@users': null })}
            >
              Benutzer & Gruppen
            </Menu.Item>
            {!!window.ga && (
              <Menu.Item
                icon={<FaBarChart />}
                active={query[`@analytics`] === null}
                onClick={() => setQuery({ '@analytics': null })}
              >
                Statistiken
              </Menu.Item>
            )}
            {lists.length > 0 && (
              <Menu.List title="Collections">{items}</Menu.List>
            )}
            {lists}
            <Menu.Space />
            <Menu.Item
              onClick={() => {
                setSearchOpen(true);
                setCollapsed(true);
              }}
              icon={<FaSearch />}
            >
              Suche
            </Menu.Item>
            <Menu.Item
              active={query[`@users`] === user.id}
              onClick={() => setQuery({ '@users': user.id })}
              icon={
                <Avatar email={user.email} name={user.name} default="blank" />
              }
            >
              {user.name}
            </Menu.Item>
            <Menu.Item onClick={logout} icon={<FaPowerOff />}>
              Abmelden
            </Menu.Item>
          </Menu>
        }
      >
        {children}

        <Search
          placeholder="Suche ..."
          value={searchText}
          onChange={setSearchText}
          open={searchOpen}
          header={header}
          results={
            searchText
              ? [
                  { id: 1, name: 'Test 1' },
                  { id: 2, name: 'Test 2' },
                  { id: 3, name: 'Test 3' },
                ]
              : []
          }
          onClose={() => {
            setSearchOpen(false);
          }}
        />
      </Sidebar>
    );
  },
);

export default component;
