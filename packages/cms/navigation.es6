import React from 'react';
import { withLang } from 'olymp-utils';
import { Link, createReplaceQuery } from 'olymp-router';
import { createLogout } from 'olymp-auth';
import { Menu, Icon } from 'antd';
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
    '> ul.ant-menu > li.ant-menu-item:first-child': {
      padding: `0 ${theme.space1} !important`,
      height: 80,
      backgroundColor: theme.dark4,
      borderBottom: border(theme, theme.dark4),
      '> a': {
        '> svg': {
          padding: theme.space2,
        },
      },
    },
    '> ul.ant-menu': {
      boxShadow: `inset -6px 0 5px -5px #333`,
      backgroundColor: '#404040',
      position: 'fixed',
      top: 0,
      bottom: 0,
      maxWidth: 240,
      zIndex: 11,
      overflow: 'hidden',
      '> .ant-menu-item': {
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
      '> .slim': {
        height: 38,
        '> img': {
          display: 24,
          height: 24,
        },
      },
    },
    ifSmallDown: {
      display: 'none',
    },
  }),
  ({ children, className, ...rest }) => (
    <div className={className} {...rest}>
      {children}
    </div>
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
    user = {},
    collapsed,
    handleClick,
  }) => {
    const keys = Object.keys(query);

    if (!keys.filter(x => x[0] === '@').length) {
      keys.push('@home');
    }

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
              <Menu.Item key={`@${collection.name.toLowerCase()}`}>
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
                      key={`@${collection.name.toLowerCase()}`}
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
                  key={`@${collectionTree[key][0].name.toLowerCase()}`}
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
