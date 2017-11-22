import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { withLang } from 'olymp-utils';
import { createReplaceQuery, createPushPathname } from 'olymp-router';
import { createLogout } from 'olymp-auth';
import { Avatar, Logo, Menu, Drawer } from 'olymp-fela';
import { FaBars, FaPictureO, FaSearch } from 'olymp-icons';
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
    collapse,
    expand,
    query,
    collectionList,
    collectionTree,
    isAdmin,
    setQuery,
    user = {},
    collapsed,
    setCollapsed,
    handleClick,
    push,
    searchOpen,
    setSearchOpen,
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
            <Menu.List title={key}>
              {collectionTree[key].map(collection => (
                <Menu.Item
                  key={key}
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

    return (
      <aside
        style={{
          width: collapsed ? 72 : 240,
          height: '100%',
          position: 'fixed',
          zIndex: 10,
          left: 0,
        }}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
      >
        <Menu
          collapsed={collapsed}
          color="white"
          style={{ height: '100%' }}
          header={
            <Menu.Item large key="back" icon={<Logo color />}>
              Olymp
            </Menu.Item>
          }
        >
          <Menu.Item
            active={Object.keys(query).length === 0}
            icon={<FaBars />}
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
          <Menu.List title="Listen">{items}</Menu.List>
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
            onClick={logout}
            icon={
              <Avatar email={user.email} name={user.name} default="blank" />
            }
          >
            Ausloggen
          </Menu.Item>
        </Menu>
        <Drawer
          color="white"
          open={searchOpen}
          onClose={() => {
            setSearchOpen(false);
          }}
        >
          <Menu
            color="white"
            collapsed
            header={
              <Menu.Item large key="back" icon={<Logo color />}>
                Olymp
              </Menu.Item>
            }
          >
            <Menu.Item onClick={() => setSearchOpen(false)} icon={<FaSearch />}>
              Suche
            </Menu.Item>
          </Menu>
          <div>Test</div>
        </Drawer>
      </aside>
    );
  },
);

export default component;
