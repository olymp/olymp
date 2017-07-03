import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { Link, withLang } from 'olymp';
import { withAuth } from 'olymp-auth';
import { Menu, Icon } from 'antd';
import { createComponent } from 'olymp-fela';
import { GatewayRegistry } from 'react-gateway';
import Gravatar from 'react-gravatar';

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

const getDeviceIcon = (deviceWidth) => {
  switch (deviceWidth) {
    case 400:
      return <Icon type="phone" />;

    case 700:
      return <Icon type="tablet" />;

    default:
      return <Icon type="laptop" />;
  }
};

const IconOnly = createComponent(
  ({ theme }) => ({
    marginRight: '0!important',
  }),
  Icon,
  p => Object.keys(p)
);

const UserIcon = createComponent(
  ({ theme, name }) => ({
    float: 'left',
    borderRadius: '50%',
    marginY: theme.space2,
    // marginRight: '0.75rem',
    background: `url(https://invatar0.appspot.com/svg/${getInitials(
      name
    )}.jpg?s=26&bg=${encodeURIComponent(
      theme.color
    )}&color=${encodeURIComponent(
      theme.light
    )}) center center no-repeat, ${theme.color}`,
  }),
  p => <Gravatar {...p} size={30} />,
  p => Object.keys(p)
);

const VerticalMenu = createComponent(
  ({ theme }) => ({
    zIndex: 3,
    boxShadow: theme.boxShadow,
    borderBottom: 0,
  }),
  Menu,
  p => Object.keys(p)
);

const RightSubMenu = createComponent(
  () => ({
    float: 'right!important',
  }),
  p => <Menu.SubMenu {...p} />,
  p => Object.keys(p)
);

const RightMenuItem = createComponent(
  () => ({
    float: 'right!important',
  }),
  p => <Menu.Item {...p} />,
  p => Object.keys(p)
);

export default withLang(
  withAuth(
    ({ auth, className, deviceWidth, children, query, collectionList }) => {
      const keys = Object.keys(query);
      if (!keys.filter(x => x[0] === '@').length) {
        keys.push('@home');
      }
      return (
        <GatewayDest
          component={VerticalMenu}
          mode="horizontal"
          className={className}
          deviceWidth={deviceWidth}
          selectedKeys={keys}
          name="navigation"
        >
          <Menu.SubMenu title={<IconOnly type="plus" />}>
            {collectionList.map(collection =>
              (<Menu.Item key={`@${collection.name.toLowerCase()}`}>
                <Link
                  to={{
                    query: {
                      [`@${collection.name.toLowerCase()}`]: null,
                    },
                  }}
                >
                  {collection.name}
                </Link>
              </Menu.Item>)
            )}
          </Menu.SubMenu>

          <Menu.Item key="@home">
            <Link to={{ query: { '@deviceWidth': deviceWidth } }}>
              <IconOnly type="home" />
            </Link>
          </Menu.Item>
          <Menu.Item key="@page">
            <Link
              to={{ query: { '@page': null, '@deviceWidth': deviceWidth } }}
            >
              <Icon type="edit" /> Seiten
            </Link>
          </Menu.Item>
          <Menu.Item key="@media">
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
                  {collection.name}
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

          {children}

          <RightMenuItem key="logout">
            <a onClick={auth.logout} href="javascript:;">
              <IconOnly type="poweroff" />
            </a>
          </RightMenuItem>
          <RightSubMenu title={getDeviceIcon(query['@deviceWidth'])}>
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
          </RightSubMenu>
          <RightMenuItem key="@user">
            <Link to={{ query: { '@user': null } }}>
              <UserIcon
                email={auth.user.email}
                name={auth.user.name}
                default="blank"
              />
            </Link>
          </RightMenuItem>
        </GatewayDest>
      );
    }
  )
);

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

class GatewayDest extends Component {
  static contextTypes = {
    gatewayRegistry: PropTypes.instanceOf(GatewayRegistry).isRequired,
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  constructor(props, context) {
    super(props, context);
    this.gatewayRegistry = context.gatewayRegistry;
  }

  state = {
    children: null,
  };

  componentWillMount() {
    this.gatewayRegistry.addContainer(this.props.name, this);
  }

  componentWillUnmount() {
    this.gatewayRegistry.removeContainer(this.props.name, this);
  }

  render() {
    const { component, tagName, children, ...attrs } = this.props;
    delete attrs.name;
    return React.createElement(component || tagName || 'div', attrs, [
      children,
      Children.toArray(this.state.children).reverse(),
    ]);
  }
}
