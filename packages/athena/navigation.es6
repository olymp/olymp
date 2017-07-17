import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { withLang, Logo } from 'olymp-utils';
import { Link } from 'olymp-router';
import { withAuth } from 'olymp-auth';
import { Menu, Icon } from 'antd';
import { createComponent } from 'olymp-fela';
import { GatewayDest, GatewayRegistry } from 'react-gateway';
import Gravatar from 'react-gravatar';
import { get } from 'lodash';

const getInitials = (name) => {
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
    (<div className={className}>
      {children}
    </div>),
  p => Object.keys(p)
);

const LeftMenu = createComponent(
  ({ theme }) => ({
    float: 'left',
  }),
  p => <Menu {...p} />,
  p => Object.keys(p)
);

const Filler = createComponent(
  ({ theme }) => ({
    flex: '1 1 0%',
  }),
  p => <div {...p} />,
  p => Object.keys(p)
);

const RightMenu = createComponent(
  ({ theme }) => ({
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

const AntMenu = ({ keys, ...p }) =>
  <LeftMenu theme="dark" selectedKeys={keys} mode="horizontal" {...p} />;

const AntSubMenu = ({ keys, title, children, ...p }) =>
  (<AntMenu {...p}>
    <RightMenu title={title || <Icon type="bars" />}>
      {children}
    </RightMenu>
  </AntMenu>);

@withLang
@withAuth
class Navigation extends Component {
  static contextTypes = {
    gatewayRegistry: PropTypes.instanceOf(GatewayRegistry).isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.gatewayRegistry = context.gatewayRegistry;
  }

  state = {
    children: null,
  };

  componentWillMount() {
    this.gatewayRegistry.addContainer('toolbar', this);
  }

  componentWillUnmount() {
    this.gatewayRegistry.removeContainer('toolbar', this);
  }

  render() {
    const { auth, deviceWidth, query, collectionList } = this.props;
    const { children } = this.state;
    const keys = Object.keys(query);
    if (!keys.filter(x => x[0] === '@').length) {
      keys.push('@home');
    }
    return (
      <VerticalMenu>
        <AntMenu keys={keys}>
          <Menu.Item>
            <Link to={{ query: { '@deviceWidth': deviceWidth } }}>
              <Logo size={33} margin="0 0 -7px 0" />
            </Link>
          </Menu.Item>

          <Menu.Item key="@page">
            <Link
              to={{
                query: { '@page': null, '@deviceWidth': deviceWidth },
              }}
            >
              <Icon type="bars" /> Seiten
            </Link>
          </Menu.Item>
          <Menu.Item key="@ zzmedia">
            <Link to={{ query: { '@media': null } }}>
              <Icon type="picture" /> Medien
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            title={
              <span>
                <Icon type="database" /> Sammlungen
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
                  <Icon type="api" />{' '}
                  {get(collection, 'decorators.label.value', collection.name)}
                </Link>
              </Menu.Item>)
            )}
          </Menu.SubMenu>
          <Menu.Item key="@analytics">
            <Link to={{ query: { '@analytics': null } }}>
              <Icon type="line-chart" /> Analytics
            </Link>
          </Menu.Item>
          {!!auth.user &&
            auth.user.isAdmin &&
            <Menu.Item key="@users">
              <Link to={{ query: { '@users': null } }}>
                <Icon type="team" /> Benutzer
              </Link>
            </Menu.Item>}
        </AntMenu>

        <Filler />
        {/* createElement(AntMenu, {}, children)*/}

        <GatewayDest name="quick" component={AntMenu} />

        <div>
          <GatewayDest
            name="navigation"
            component={children && children.length ? AntSubMenu : AntMenu}
          />

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
              <Link to={{ query: { '@user': null } }}>
                <Icon type="user" /> Profil
              </Link>
            </Menu.Item>
            <Menu.SubMenu
              title={
                <span>
                  <Icon type="laptop" /> Ansicht
                </span>
              }
            >
              <Menu.Item key="@device-no">
                <Link to={{ query: { ...query, '@deviceWidth': undefined } }}>
                  <Icon type="laptop" /> Normal
                </Link>
              </Menu.Item>
              <Menu.Item key="@deviceWidth700">
                <Link to={{ query: { ...query, '@deviceWidth': 700 } }}>
                  <Icon type="tablet" /> Tablet
                </Link>
              </Menu.Item>
              <Menu.Item key="@deviceWidth400">
                <Link to={{ query: { ...query, '@deviceWidth': 400 } }}>
                  <Icon type="phone" /> Mobil
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="logout">
              <a onClick={auth.logout} href="javascript:;">
                <Icon type="poweroff" /> Abmelden
              </a>
            </Menu.Item>
          </AntSubMenu>
        </div>
      </VerticalMenu>
    );
  }
}
export default Navigation;

/*
<Menu.Item key="@template">
  <Popover placement="bottom" content="Template-Liste">
    <Link
      to={{ query: { '@template': null, '@deviceWidth': deviceWidth } }}
    >
      <Icon type="appstore-o" />
    </Link>
  </Popover>
</Menu.Item>
<Menu.Item key="@share">
  <Popover placement="bottom" content="Teilen">
    <Link
      to={{ query: { '@share': null, '@deviceWidth': deviceWidth } }}
    >
      <Icon type="share-alt" />
    </Link>
  </Popover>
</Menu.Item>
<Menu.Item key="@trash">
  <Popover placement="bottom" content="Papierkorb">
    <Link
      to={{ query: { '@trash': null, '@deviceWidth': deviceWidth } }}
    >
      <Icon type="delete" />
    </Link>
  </Popover>
</Menu.Item>
<Menu.Item key="@settings">
  <Popover placement="bottom" content="Einstellungen">
    <Link
      to={{ query: { '@settings': null, '@deviceWidth': deviceWidth } }}
    >
      <Icon type="setting" />
    </Link>
  </Popover>
</Menu.Item>
*/
