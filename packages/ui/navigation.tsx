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
  ({ theme, padding }) => ({
    position: 'relative',
    zIndex: 3,
    backgroundColor: '#404040',
    boxShadow: 'inset 0 -10px 10px -10px #000000',
    paddingX: theme.space2,
    display: 'flex',
    justifyContent: 'space-between',
    '> ul': {
      zIndex: 3,
      boxShadow: 'inset 0 -10px 10px -10px #000000',
    },
    '> ul > li.ant-menu-item-selected.ant-menu-item': {
      backgroundColor: theme.color,
      '> a': {
        color: theme.light,
      },
    },
    ifSmallDown: {
      display: 'none',
    },
    padding,
  }),
  'div',
  ({ padding, ...p }) => Object.keys(p)
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
  <AntMenu {...p}>
    <RightMenu title={title || <Icon type="bars" />}>
      {children}
    </RightMenu>
  </AntMenu>;

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

  componentWillMount() {
    this.gatewayRegistry.addContainer('toolbar', this);
  }

  componentWillUnmount() {
    this.gatewayRegistry.removeContainer('toolbar', this);
  }

  render() {
    const {
      auth,
      padding,
      query = {},
      pathname,
      children,
      keys = [pathname],
    } = this.props;
    return (
      <VerticalMenu padding={padding}>
        <AntMenu keys={keys}>
          <Menu.Item>
            <Link to={{ pathname }}>
              <Logo size={33} margin="0 0 -7px 0" />
            </Link>
          </Menu.Item>
          {children}
        </AntMenu>
        <Filler />
        <GatewayDest name="quick" component={AntMenu} />
        <div>
          <GatewayDest name="navigation" component={AntMenu} />
          {get(auth, 'user') &&
            <AntSubMenu
              title={
                <UserIcon
                  email={auth.user.email}
                  name={auth.user.name}
                  default="blank"
                />
              }
            >
              <Menu.Item key="logout">
                <a onClick={auth.logout} href="javascript:;">
                  <Icon type="poweroff" /> Abmelden
                </a>
              </Menu.Item>
            </AntSubMenu>}
        </div>
      </VerticalMenu>
    );
  }
}

Navigation.Item = Menu.Item;
export default Navigation;
