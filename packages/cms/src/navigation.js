import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { Link, withLang } from 'olymp';
import { withAuth } from 'olymp-auth';
import { Menu, Icon } from 'antd';
import { createComponent, Image } from 'olymp-fela';
import { GatewayRegistry } from 'react-gateway';
import Gravatar from 'react-gravatar';

const IconOnly = createComponent(
  ({ theme }) => ({
    marginRight: '0!important',
  }),
  Icon,
  p => Object.keys(p)
);
const UserIcon = createComponent(
  ({ theme }) => ({
    float: 'left',
    borderRadius: '50%',
    marginTop: theme.space2,
    marginRight: '0.75rem',
  }),
  p => <Gravatar {...p} size={30} />,
  p => Object.keys(p)
);
const VerticalMenu = createComponent(
  ({ deviceWidth, theme }) => ({
    zIndex: 3,
    /* boxShadow: `${theme.innerShadow}!important`,
    background: `linear-gradient(270deg, ${theme.colorStart ||
      tinycolor(theme.color)
        .darken(6)
        .spin(-6)
        .toRgbString()}, ${theme.colorEnd ||
      tinycolor(theme.color).lighten(6).spin(12).toRgbString()})`,
    '> li.ant-menu-item': {
      '> a': {
        color: '#ffffff',
      },
    },*/
  }),
  Menu,
  p => Object.keys(p)
);
const RightMenuItem = createComponent(
  () => ({
    float: 'right!important',
  }),
  p => <Menu.Item {...p} />,
  p => Object.keys(p)
);
const Separator = createComponent(
  ({ theme }) => ({
    borderRight: '1px solid black',
  }),
  RightMenuItem,
  p => Object.keys(p)
);

export default withLang(
  withAuth(
    ({
      auth,
      lang,
      className,
      deviceWidth,
      children,
      query,
      collectionList,
      ...rest
    }) =>
      (<GatewayDest
        component={VerticalMenu}
        mode="horizontal"
        className={className}
        deviceWidth={deviceWidth}
        selectedKeys={[
          ...Object.keys(query),
          ...Object.keys(query).map(x => query[x]),
        ]}
        name="navigation"
      >
        <Menu.Item key="@page">
          <Link to={{ query: { '@page': null, '@deviceWidth': deviceWidth } }}>
            <Icon type="home" /> Seitenmanager
          </Link>
        </Menu.Item>
        <Menu.Item key="@media">
          <Link to={{ query: { '@media': null } }}>
            <Icon type="picture" /> Mediathek
          </Link>
        </Menu.Item>
        <Menu.SubMenu
          title={
            <span>
              <Icon type="file-text" /> Sammlungen
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
        <Menu.Item key="charts">
          <Link to={{ query: { '@charts': null } }}>
            <IconOnly type="line-chart" />
          </Link>
        </Menu.Item>
        <Menu.Item key="settings">
          <Link to={{ query: { '@settings': null } }}>
            <IconOnly type="setting" />
          </Link>
        </Menu.Item>
        {children}
        <RightMenuItem key="plus">
          <Link to={{ query: { '@plus': null } }}>
            <IconOnly type="plus" />
          </Link>
        </RightMenuItem>
        <RightMenuItem key="@user">
          <Link to={{ query: { '@user': null } }}>
            <UserIcon email={auth.user.email} default="mm" />
            {auth.user.name}
          </Link>
        </RightMenuItem>
      </GatewayDest>)
  )
);

/*
<Menu.Item key="@page">
  <Popover placement="bottom" content={lang.PAGE_MANAGER}>
    <Link
      to={{ query: { '@page': null, '@deviceWidth': deviceWidth } }}
    >
      <Icon type="home" />
    </Link>
  </Popover>
</Menu.Item>
<Menu.Item key="@template">
  <Popover placement="bottom" content="Template-Liste">
    <Link
      to={{ query: { '@template': null, '@deviceWidth': deviceWidth } }}
    >
      <Icon type="appstore-o" />
    </Link>
  </Popover>
</Menu.Item>
<Menu.Item key="@media">
  <Popover placement="bottom" content="Mediathek">
    <Link
      to={{ query: { '@media': null, '@deviceWidth': deviceWidth } }}
    >
      <Icon type="picture" />
    </Link>
  </Popover>
</Menu.Item>
{auth.user && auth.user.isAdmin
  ? <Menu.Item key="@users">
    <Popover placement="bottom" content="Benutzer-Management">
      <Link
        to={{
          query: { '@users': null, '@deviceWidth': deviceWidth },
        }}
      >
        <Icon type="team" />
      </Link>
    </Popover>
  </Menu.Item>
  : null}
<Menu.Item key="@stats">
  <Popover placement="bottom" content="Statistiken">
    <Link
      to={{ query: { '@stats': null, '@deviceWidth': deviceWidth } }}
    >
      <Icon type="line-chart" />
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

{collectionList.map(collection =>
  (<Menu.Item key={`@${collection.name.toLowerCase()}`}>
    <Popover placement="bottom" content={`@${collection.name}-Liste`}>
      <Link
        to={{
          query: {
            [`@${collection.name.toLowerCase()}`]: null,
            '@deviceWidth': deviceWidth,
          },
        }}
      >
        <Icon type="file-text" />
      </Link>
    </Popover>
  </Menu.Item>)
)}

<Menu.SubMenu title={<Icon type="laptop" />}>
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
<Menu.Item key="@user">
  <Popover placement="bottom" content="Profil">
    <Link
      to={{ query: { '@user': null, '@deviceWidth': deviceWidth } }}
    >
      <Icon type="user" />
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
<Separator />
<Menu.Item key="logoff" title="Abmelden">
  <Popover placement="bottom" content="Abmelden">
    <a onClick={auth.logout} href="javascript:;">
      <Icon type="poweroff" />
    </a>
  </Popover>
</Menu.Item>

<Menu.Item key="save" title="Speichern">
  <Button onClick={auth.logout} href="javascript:;">
    Speichern
  </Button>
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
