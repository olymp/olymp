import React, { Component, Children } from 'react';
import { withLang, Logo, withGateway } from 'olymp-utils';
import { Link } from 'olymp-router';
import { withAuth } from 'olymp-auth';
import { Menu, Icon } from 'antd';
import { createComponent, border } from 'olymp-fela';
import { GatewayDest } from 'react-gateway';
import Gravatar from 'react-gravatar';
import { get } from 'lodash';

const getInitials = name => {
  if (name) {
    const array = name.split(' ');

    switch (array.length) {
      case 1:
        return array[0].charAt(0).toUpperCase();
      default:
        return (
          array[0].charAt(0).toUpperCase() +
          array[array.length - 1].charAt(0).toUpperCase()
        );
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
      name
    )}.jpg?s=26&bg=${encodeURIComponent(
      theme.color
    )}&color=${encodeURIComponent(
      theme.light
    )}) center center no-repeat, ${theme.color}`,
    onHover: {
      opacity: 0.85,
    },
  }),
  p => <Gravatar {...p} size={30} />,
  p => Object.keys(p)
);

const VerticalMenu = createComponent(
  ({ theme }) => ({
    position: 'relative',
    zIndex: 3,
    backgroundColor: '#404040',
    boxShadow: 'inset 0 -10px 10px -10px #000000',
    paddingX: theme.space2,
    hasFlex: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '> ul': {
      zIndex: 3,
      boxShadow: 'inset 0 -10px 10px -10px #000000',
    },
    ifSmallDown: {
      display: 'none',
    },
  }),
  ({ children, className }) =>
    <div className={className}>
      {children}
    </div>,
  p => Object.keys(p)
);

const LeftMenu = createComponent(
  ({ theme }) => ({
    float: 'left',
  }),
  p => <Menu {...p} />,
  p => Object.keys(p)
);

const RightMenu = createComponent(
  () => ({
    float: 'right !important',
    '> ul': {
      right: 0,
      left: 'auto !important',
      '> li > ul': {
        left: 'auto !important',
        marginLeft: '0 !important',
        right: '100%',
        marginRight: 4,
      },
    },
  }),
  p => <Menu.SubMenu {...p} />,
  p => Object.keys(p)
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
  p => <LeftMenu {...p} />,
  p => Object.keys(p)
);

const Filler = createComponent(
  ({ theme }) => ({
    flex: '1 1 0%',
    borderX: border(theme),
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
  }),
  p => <div {...p} />,
  []
);

const AntMenu = ({ keys, ...p }) =>
  <LeftMenu theme="dark" selectedKeys={keys} mode="horizontal" {...p} />;

const AntMenuToolbar = ({ keys, ...p }) =>
  <ToolMenu theme="dark" selectedKeys={keys} mode="horizontal" {...p} />;

const AntSubMenu = ({ keys, title, children, ...p }) =>
  <AntMenu selectedKeys={keys} {...p}>
    <RightMenu selectedKeys={keys} title={title || <Icon type="bars" />}>
      {children}
    </RightMenu>
  </AntMenu>;

@withLang
@withAuth
@withGateway('toolbar')
@withGateway('navigation')
class Navigation extends Component {
  render() {
    const {
      auth,
      setDeviceWidth,
      query,
      collectionList,
      toolbar,
      navigation,
      quick,
    } = this.props;
    const keys = Object.keys(query);
    const short = toolbar && toolbar.length;

    if (!keys.filter(x => x[0] === '@').length) {
      keys.push('@home');
    }

    return (
      <VerticalMenu>
        <AntMenu keys={keys}>
          <Menu.Item>
            <Link to={{ query: {} }}>
              <Logo size={33} margin="0 0 -7px 0" />
            </Link>
          </Menu.Item>

          <Menu.Item key="@page">
            <Link
              to={{
                query: { '@page': null },
              }}
            >
              <Icon type="bars" />
              {!short && ' Seiten'}
            </Link>
          </Menu.Item>
          <Menu.Item key="@media">
            <Link to={{ query: { '@media': null } }}>
              <Icon type="picture" />
              {!short && ' Medien'}
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            title={
              <span>
                <Icon type="database" />
                {!short && ' Sammlungen'}
              </span>
            }
          >
            {collectionList.map(collection =>
              <Menu.Item key={`@${collection.name.toLowerCase()}`}>
                <Link
                  to={{
                    query: {
                      [`@${collection.name.toLowerCase()}`]: null,
                    },
                  }}
                >
                  {get(collection, 'decorators.label.value', collection.name)}
                </Link>
              </Menu.Item>
            )}
          </Menu.SubMenu>
          <Menu.Item key="@analytics">
            <Link to={{ query: { '@analytics': null } }}>
              <Icon type="line-chart" />
              {!short && ' Analytics'}
            </Link>
          </Menu.Item>
          {!!auth.user &&
            auth.user.isAdmin &&
            <Menu.Item key="@users">
              <Link to={{ query: { '@users': null } }}>
                <Icon type="team" />
                {!short && ' Benutzer'}
              </Link>
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

        <AntSubMenu
          title={
            <UserIcon
              email={auth.user.email}
              name={auth.user.name}
              default="blank"
            />
          }
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
        </AntSubMenu>
      </VerticalMenu>
    );
  }
}
export default Navigation;

/*
<Menu.Item key="@template">
  <Popover placement="bottom" content="Template-Liste">
    <Link
      to={{ query: { '@template': null } }}
    >
      <Icon type="appstore-o" />
    </Link>
  </Popover>
</Menu.Item>
<Menu.Item key="@share">
  <Popover placement="bottom" content="Teilen">
    <Link
      to={{ query: { '@share': null } }}
    >
      <Icon type="share-alt" />
    </Link>
  </Popover>
</Menu.Item>
<Menu.Item key="@trash">
  <Popover placement="bottom" content="Papierkorb">
    <Link
      to={{ query: { '@trash': null } }}
    >
      <Icon type="delete" />
    </Link>
  </Popover>
</Menu.Item>
<Menu.Item key="@settings">
  <Popover placement="bottom" content="Einstellungen">
    <Link
      to={{ query: { '@settings': null } }}
    >
      <Icon type="setting" />
    </Link>
  </Popover>
</Menu.Item>
*/
