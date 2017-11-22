import React from 'react';
import { withLang } from 'olymp-utils';
import { Link, createReplaceQuery, createPushPathname } from 'olymp-router';
import { createLogout } from 'olymp-auth';
import { ContentLoader, Menu, DndList, StackedMenu } from 'olymp-fela';
import { FaHome, FaBars, FaPictureO } from 'olymp-icons';
import { Icon } from 'antd';
import { createComponent, border, Avatar, Logo } from 'olymp-fela';
import { compose, withState, withHandlers } from 'recompose';
import { get } from 'lodash';
import { connect } from 'react-redux';

export const UserPic = createComponent(
  ({ theme }) => ({
    position: 'absolute',
    centerY: true,
    left: 0,
    marginX: theme.space3,
  }),
  p => <Avatar {...p} />,
  p => Object.keys(p),
);

const VerticalMenu = createComponent(
  ({ theme }) => ({
    zIndex: 11,
    width: 64,
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    '> ul.ant-menu .ant-menu-inline.ant-menu-sub': {
      backgroundColor: theme.dark3,
    },
    '> ul.ant-menu': {
      backgroundColor: theme.dark,
      // boxShadow: `inset -6px 0 5px -5px #333`,
      position: 'fixed',
      top: 0,
      bottom: 0,
      maxWidth: 240,
      zIndex: 11,
      overflow: 'hidden',
      '> li.ant-menu-item:first-child': {
        padding: `0 ${theme.space1} !important`,
        height: 80,
        backgroundColor: theme.dark4,
        borderBottom: border(theme, theme.dark4),
        '> a': {
          '> svg': {
            paddingX: theme.space2,
            paddingY: theme.space3,
          },
        },
      },
      '> .ant-menu-item': {
        margin: 0,
        textAlign: 'left',
        '& .anticon': {
          fontSize: 16,
          marginRight: 8,
          '& + span': {
            paddingLeft: theme.space2,
            paddingRight: theme.space3,
          },
        },
      },
      '> .ant-menu-submenu': {
        '> .ant-menu-submenu-title': {
          margin: 0,
          paddingRight: theme.space4,
          textAlign: 'left !important',
          '& .anticon': {
            fontSize: 16,
            marginRight: 8,
            '& + span': {
              paddingLeft: theme.space2,
              paddingRight: theme.space3,
            },
          },
        },
      },
    },
    ifSmallDown: {
      display: 'none',
    },
  }),
  ({ children, className, ...rest }) => (
    <nav className={className} {...rest}>
      {children}
    </nav>
  ),
  p => Object.keys(p),
);

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
  }) => {
    const keys = Object.keys(query);

    if (!keys.filter(x => x[0] === '@').length) {
      keys.push('@home');
    }

    const lists = [];
    const items = [];
    Object.keys(collectionTree).forEach(
      key =>
        collectionTree[key].length > 1 ? lists.push(
          <Menu.List title={key}>
            {collectionTree[key].map(collection => (
              <Menu.Item
                key={key}
                icon={
                  <Icon
                    type={get(
                      collection,
                      'specialFields.icon',
                      'database',
                    )}
                  />
                }
                active={query[`@media`] === null}
                onClick={() =>
                  setQuery({[`@${collection.name.toLowerCase()}`]: 'new'})}
              >
                {get(collection, 'specialFields.label', collection.name)}
              </Menu.Item>
            ))}
          </Menu.List>
        ) : items.push(
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
              setQuery({[`@${collectionTree[key][0].name.toLowerCase()}`]: 'new'})}
          >
            {get(
              collectionTree[key][0],
              'specialFields.label',
              collectionTree[key][0].name,
            )}
          </Menu.Item>
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
          inverted
          color="colorSecondary"
          style={{ height: '100%' }}
          header={
            <Menu.Item large key="back" icon={<Logo color="white" />}>
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
          <Menu.List
            title="Listen"
          >
            {items}
          </Menu.List>
          {lists}
          <Menu.Space />
        </Menu>
      </aside>
    );
    return (
      <VerticalMenu onMouseEnter={expand} onMouseLeave={collapse}>
        <Menu
          theme="dark"
          selectedKeys={keys}
          mode="inline"
          onClick={handleClick}
          inlineCollapsed={collapsed}
        >
          <Menu.Item>
            <Link replaceQuery={{}}>
              <Logo width="100%" />
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            title={
              <span>
                <i className="anticon">
                  <UserPic
                    email={user.email}
                    name={user.name}
                    default="blank"
                  />
                </i>
                <span>{user.name}</span>
              </span>
            }
          >
            <Menu.Item key="@user">
              <Link to={{ query: { '@user': null } }}>Profil</Link>
            </Menu.Item>
            <Menu.Item key="logout">
              <a onClick={logout}>Abmelden</a>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            title={
              <span>
                <Icon type="plus" />
                <span>Hinzufügen</span>
              </span>
            }
          >
            <Menu.Item key="@page=form">
              <Link to={{ pathname: '/__new', query: { '@page': 'form' } }}>
                Seite
              </Link>
            </Menu.Item>
            {collectionList.map(collection => (
              <Menu.Item key={`@${collection.name.toLowerCase()}=new`}>
                <span>
                  {get(collection, 'specialFields.label', collection.name)}
                </span>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
          <Menu.Item key="@page">
            <Icon type="bars" />
            <span>Seitenmanager</span>
          </Menu.Item>
          <Menu.Item key="@media">
            <Icon type="picture" />
            <span>Medien</span>
          </Menu.Item>
          {isAdmin && (
            <Menu.Item key="@users">
              <Icon type="team" />
              <span>Benutzer</span>
            </Menu.Item>
          )}
          {/* <Menu.Item key="@analytics">
            <Icon type="line-chart" />
            <span>Statistiken</span>
        </Menu.Item> */}
          {Object.keys(collectionTree).map(
            key =>
              collectionTree[key].length > 1 ? (
                <Menu.SubMenu
                  key={key}
                  title={
                    <span>
                      <Icon type="database" />
                      <span>{key}</span>
                    </span>
                  }
                >
                  {collectionTree[key].map(collection => (
                    <Menu.Item
                      type="database"
                      key={`@${collection.name.toLowerCase()}=new`}
                    >
                      <Icon
                        type={get(collection, 'specialFields.icon', 'database')}
                      />
                      <span>
                        {get(
                          collection,
                          'specialFields.label',
                          collection.name,
                        )}
                      </span>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item
                  type="database"
                  key={`@${collectionTree[key][0].name.toLowerCase()}=new`}
                >
                  <Icon
                    type={get(
                      collectionTree[key][0],
                      'specialFields.icon',
                      'database',
                    )}
                  />
                  <span>
                    {get(
                      collectionTree[key][0],
                      'specialFields.label',
                      collectionTree[key][0].name,
                    )}
                  </span>
                </Menu.Item>
              ),
          )}
        </Menu>
      </VerticalMenu>
    );
  },
);

export default component;
