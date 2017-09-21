import React, { Component } from 'react';
import { withLang, Logo } from 'olymp-utils';
import { Link, createReplaceQuery } from 'olymp-router';
import { createLogout } from 'olymp-auth';
import { Menu, Icon } from 'antd';
import { createComponent, border } from 'olymp-fela';
import Gravatar from 'react-gravatar';
import { get } from 'lodash';
import { connect } from 'react-redux';

const getInitials = (name) => {
  if (name) {
    const array = name.split(' ');

    switch (array.length) {
      case 1:
        return array[0].charAt(0).toUpperCase();
      default:
        return array[0].charAt(0).toUpperCase() + array[array.length - 1].charAt(0).toUpperCase();
    }
  }
  return false;
};

const UserIcon = createComponent(
  ({ theme, name }) => ({
    position: 'absolute',
    centerY: true,
    left: 0,
    marginX: theme.space3,
    borderRadius: '50%',
    background: `url(https://invatar0.appspot.com/svg/${getInitials(
      name,
    )}.jpg?s=26&bg=${encodeURIComponent(theme.color)}&color=${encodeURIComponent(
      theme.light,
    )}) center center no-repeat, ${theme.color}`,
  }),
  p => (
    <i className="anticon">
      <Gravatar {...p} size={30} />
    </i>
  ),
  p => Object.keys(p),
);

const VerticalMenu = createComponent(
  ({ theme }) => ({
    zIndex: 3,
    width: 64,
    // boxShadow: 'inset -6px 0 5px -5px rgb(0, 0, 0)',
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    '> ul.ant-menu-inline-collapsed > li.ant-menu-item.logo': {
      padding: '0 10px',
      marginX: -15,
    },
    '> ul': {
      backgroundColor: '#404040',
      position: 'fixed',
      top: 0,
      bottom: 0,
      maxWidth: 200,
      zIndex: 3,
      overflow: 'hidden',
      '> .ant-menu-item': {
        textAlign: 'left !important',
        '&.logo': {
          height: 102,
          backgroundColor: theme.dark4,
          borderBottom: border(theme, theme.dark4),
          '> a': {
            display: 'flex',
            height: '100%',
            '> svg': {
              height: 52,
              width: 66,
              margin: 'auto',
            },
          },
        },
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

@withLang
@connect(
  ({ location, auth }) => ({
    pathname: location.pathname,
    user: auth.user,
    isAdmin: auth.user && auth.user.isAdmin,
  }),
  dispatch => ({
    setQuery: createReplaceQuery(dispatch),
    logout: createLogout(dispatch),
  }),
)
class Navigation extends Component {
  state = { collapsed: true };

  handleClick = (e) => {
    const { setQuery, logout } = this.props;
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
      this.leave(); // close Menu

      setQuery(v);
    }
  };

  enter = () => {
    this.setState({ collapsed: false });
  };

  leave = () => {
    this.setState({ collapsed: true });
  };

  render() {
    const { logout, setDeviceWidth, query, collectionList, isAdmin, user } = this.props;
    const keys = Object.keys(query);

    if (!keys.filter(x => x[0] === '@').length) {
      keys.push('@home');
    }

    return (
      <VerticalMenu onMouseEnter={this.enter} onMouseLeave={this.leave}>
        <Menu
          theme="dark"
          selectedKeys={keys}
          mode="inline"
          onClick={this.handleClick}
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item className="logo">
            <Link to={{ query: {} }}>
              <Logo size={33} margin="0 0 -7px 0" />
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            title={
              <span>
                <Icon type="plus" />
                <span>Hinzufügen</span>
              </span>
            }
          >
            <Menu.Item key="@page=form">
              <span>Seite</span>
            </Menu.Item>
            {collectionList.map(collection => (
              <Menu.Item key={`@${collection.name.toLowerCase()}`}>
                <span>{get(collection, 'decorators.label.value', collection.name)}</span>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
          <Menu.SubMenu
            title={
              <span>
                <UserIcon email={user.email} name={user.name} default="blank" />
                <span>{user.name}</span>
              </span>
            }
          >
            <Menu.Item key="@user">
              <Link to={{ query: { '@user': null } }}>Profil</Link>
            </Menu.Item>
            <Menu.SubMenu title="Ansicht">
              <Menu.Item key="@device-no">
                <a onClick={() => setDeviceWidth()} href="javascript:;">
                  {/* <Icon type="laptop" /> */}Normal
                </a>
              </Menu.Item>
              <Menu.Item key="@deviceWidth700">
                <a onClick={() => setDeviceWidth(700)} href="javascript:;">
                  {/* <Icon type="tablet" /> */}Tablet
                </a>
              </Menu.Item>
              <Menu.Item key="@deviceWidth400">
                <a onClick={() => setDeviceWidth(400)} href="javascript:;">
                  {/* <Icon type="phone" /> */}Mobil
                </a>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="logout">
              <a onClick={logout} href="javascript:;">
                Abmelden
              </a>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="@page">
            <Icon type="bars" />
            <span>Navigation</span>
          </Menu.Item>
          <Menu.Item key="@media">
            <Icon type="picture" />
            <span>Medien</span>
          </Menu.Item>
          <Menu.SubMenu
            title={
              <span>
                <Icon type="database" />
                <span>Sammlungen</span>
              </span>
            }
          >
            {collectionList.map(collection => (
              <Menu.Item key={`@${collection.name.toLowerCase()}`}>
                {get(collection, 'decorators.label.value', collection.name)}
              </Menu.Item>
            ))}
          </Menu.SubMenu>
          <Menu.Item key="@analytics">
            <Icon type="line-chart" />
            <span>Analytics</span>
          </Menu.Item>
          {isAdmin && (
            <Menu.Item key="@users">
              <Icon type="team" />
              <span>Benutzer</span>
            </Menu.Item>
          )}
        </Menu>
      </VerticalMenu>
    );
  }
}
export default Navigation;
