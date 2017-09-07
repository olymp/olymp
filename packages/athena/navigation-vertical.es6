import React, { Component, Children } from 'react';
import { withLang, Logo } from 'olymp-utils';
import { Link, withRouter } from 'olymp-router';
import { withAuth } from 'olymp-auth';
import { Menu, Icon } from 'antd';
import { createComponent } from 'olymp-fela';
import { withGateway } from 'olymp-ui';
import { GatewayDest } from 'react-gateway';
import Gravatar from 'react-gravatar';
import { get } from 'lodash';

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
    float: 'left',
    borderRadius: '50%',
    marginY: theme.space2,
    background: `url(https://invatar0.appspot.com/svg/${getInitials(
      name,
    )}.jpg?s=26&bg=${encodeURIComponent(theme.color)}&color=${encodeURIComponent(
      theme.light,
    )}) center center no-repeat, ${theme.color}`,
    onHover: {
      opacity: 0.85,
    },
  }),
  p => <Gravatar {...p} size={30} />,
  p => Object.keys(p),
);

const VerticalMenu = createComponent(
  ({ theme }) => ({
    position: 'relative',
    zIndex: 3,
    backgroundColor: '#404040',
    // boxShadow: 'inset -6px 0 5px -5px rgb(0, 0, 0)',
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    '> ul': {
      zIndex: 3,
      '> .ant-menu-item': {
        paddingLeft: '16px!important',
      },
      '> .ant-menu-submenu-inline > .ant-menu-submenu-title': {
        paddingLeft: '16px!important',
      },
      '> .logo': {
        height: 102,
        backgroundColor: 'rgba(0, 0, 0, 0.13)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.18)',
        '> a': {
          display: 'flex',
          height: '100%',
          '> svg': {
            height: 52,
            width: 66,
            margin: 'auto',
          }
        }
      },
      '> .slim': {
        height: 38,
        '> img': {
          display: 24,
          height: 24,
        }
      }
    },
    ifSmallDown: {
      display: 'none',
    },
  }),
  ({ children, className }) =>
    (<div className={className}>
      {children}
    </div>),
  p => Object.keys(p),
);

const ToolMenu = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.dark,
    '> li': {
      padding: theme.space0,
      '> div > div': {
        padding: theme.space0,
      },
    },
  }),
  p => <Menu {...p} />,
  p => Object.keys(p),
);

const Filler = createComponent(
  ({ theme }) => ({
    flex: '1 1 0%',
  }),
  p => <div {...p} />,
  [],
);

const AntMenu = ({ keys, ...p }) =>
  <Menu theme="dark" selectedKeys={keys} mode="inline" {...p} />;

const AntMenuToolbar = ({ keys, ...p }) =>
  <ToolMenu theme="dark" selectedKeys={keys} mode="vertical" {...p} />;

@withLang
@withAuth
@withRouter
@withGateway('toolbar')
@withGateway('navigation')
class Navigation extends Component {
  handleClick = (e) => {
    const { router, location } = this.props;
    if (e.key && e.key[0] === '@') {
      router.push({ location, query: { [e.key]: null } });
    }
  }
  render() {
    const { auth, setDeviceWidth, query, collectionList, toolbar, navigation, quick } = this.props;
    const keys = Object.keys(query);

    if (!keys.filter(x => x[0] === '@').length) {
      keys.push('@home');
    }

    return (
      <VerticalMenu>
        <AntMenu keys={keys} onClick={this.handleClick}>
          <Menu.Item className="logo">
            <Link to={{ query: {} }}>
              <Logo size={33} margin="0 0 -7px 0" />
            </Link>
          </Menu.Item>

          <Menu.SubMenu
            title={<UserIcon email={auth.user.email} name={auth.user.name} default="blank" />}
          >
            <Menu.Item key="@user">
              <Link to={{ query: { '@user': null } }}>Profil</Link>
            </Menu.Item>
            <Menu.SubMenu title="Ansicht">
              <Menu.Item key="@device-no">
                <a onClick={() => setDeviceWidth()} href="javascript:;">
                  <Icon type="laptop" /> Normal
                </a>
              </Menu.Item>
              <Menu.Item key="@deviceWidth700">
                <a onClick={() => setDeviceWidth(700)} href="javascript:;">
                  <Icon type="tablet" /> Tablet
                </a>
              </Menu.Item>
              <Menu.Item key="@deviceWidth400">
                <a onClick={() => setDeviceWidth(400)} href="javascript:;">
                  <Icon type="phone" /> Mobil
                </a>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="logout">
              <a onClick={auth.logout} href="javascript:;">
              Abmelden
              </a>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item key="@page">
            <Icon type="bars" />
            <span>
              Seiten
            </span>
          </Menu.Item>
          <Menu.Item key="@media">
            <Icon type="picture" />
            <span>
              Medien
            </span>
          </Menu.Item>
          <Menu.SubMenu
            title={
              <span>
                <Icon type="database" />
                <span>
                  Sammlungen
                </span>
              </span>
            }
          >
            {collectionList.map(collection =>
              (<Menu.Item key={`@${collection.name.toLowerCase()}`}>
                <Link
                  to={{
                    query: {
                      [`@${collection.name.toLowerCase()}`]: null,
                    },
                  }}
                >
                  {get(collection, 'decorators.label.value', collection.name)}
                </Link>
              </Menu.Item>),
            )}
          </Menu.SubMenu>
          <Menu.Item key="@analytics">
            <Icon type="line-chart" />
            <span>
              Analytics
            </span>
          </Menu.Item>
          {!!auth.user &&
            auth.user.isAdmin &&
            <Menu.Item key="@users">
              <Icon type="team" />
              <span>
                Benutzer
              </span>
            </Menu.Item>}
        </AntMenu>

        <Filler />

        {!!Children.toArray(toolbar).length &&
          <AntMenuToolbar>
            {toolbar}
          </AntMenuToolbar>}
        {!!Children.toArray(toolbar).length && <Filler />}

        {!!Children.toArray(navigation).length &&
          <AntMenu>
            {navigation}
          </AntMenu>}
        {!!Children.toArray(navigation).length && <Filler />}

        <GatewayDest name="quick" component={AntMenu} />

      </VerticalMenu>
    );
  }
}
export default Navigation;
