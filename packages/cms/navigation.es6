import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { withLang } from 'olymp-utils';
import { createReplaceQuery, createPushPathname } from 'olymp-router';
import { createLogout } from 'olymp-auth';
import { Avatar, Logo, Menu, Sidebar, Search } from 'olymp-fela';
import { FaSitemap, FaPictureO, FaSearch, FaSignOut } from 'olymp-icons';
import { Icon } from 'antd';
import { get } from 'lodash';
import { connect } from 'react-redux';

const enhance = compose(
  withLang,
  connect(
    ({ location, auth }) => ({
      pathname: location.pathname,
      query: location.query,
      user: auth.user,
      isAdmin: auth.user && auth.user.isAdmin,
    }),
    dispatch => ({
      setQuery: createReplaceQuery(dispatch),
      logout: createLogout(dispatch),
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
              {collectionTree[key].map(collection => (
                <Menu.Item
                  key={collection.id}
                  icon={
                    <Icon
                      type={get(collection, 'specialFields.icon', 'database')}
                    />
                    }
                  active={query[`@media`] === null}
                  onClick={() =>
                      setQuery({
                        [`@${collection.name.toLowerCase()}`]: 'new',
                      })}
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
                <Icon
                  type={get(
                      collectionTree[key][0],
                      'specialFields.icon',
                      'database',
                    )}
                />
                }
              active={query[`@media`] === null}
              onClick={() =>
                  setQuery({
                    [`@${collectionTree[key][0].name.toLowerCase()}`]: 'new',
                  })}
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
      <Menu.Item large key="back" icon={<Logo />} onClick={() => setQuery({})}>
        Olymp
      </Menu.Item>
    );

    return (
      <Sidebar
        zIndex={5}
        collapsed={collapsed}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        menu={
          <Menu color="colorSecondary" inverted header={header}>
            <Menu.Item
              active={Object.keys(query).length === 0}
              icon={<FaSitemap />}
              onClick={() => setQuery({})}
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
            <Menu.List title="Collections">{items}</Menu.List>
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
            <Menu.Item onClick={logout} icon={<FaSignOut />}>
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
