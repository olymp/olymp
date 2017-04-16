import React, { Component } from 'react';
import { withAuth, withRouter, styled, Link, withLang } from 'olymp';
import { Menu, Icon, Tooltip, Popover } from 'antd';
import tinycolor from 'tinycolor2';
import CmsButton from './button';

const VerticalMenu = styled(({ deviceWidth, theme }) => ({
  overflow: 'visible',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'inset -10px 0 3px -9px hsla(0,0%,0%,.2)!important',
  background: !deviceWidth
    ? `linear-gradient(0deg, ${theme.colorStart || tinycolor(theme.color).darken(6).spin(-6).toRgbString()}, ${theme.colorEnd || tinycolor(theme.color).lighten(6).spin(12).toRgbString()})`
    : `linear-gradient(0deg, #000000, #232323)`,
  '> li:last-child': {
    marginTop: 'auto',
  },
  '> li.ant-menu-item': {
    paddingX: 20,
    //padding: 5,
    //height: 'initial',
    textAlign: 'center',
    '> a': {
      // backgroundColor: 'white',
      // borderRadius: 500,
      // margin: 2,
    },
    '> a > i.anticon': {
      margin: 0,
      // color: theme.color,
      color: !deviceWidth ? 'white' : '#666',
    },
  },
  '> li.ant-menu-submenu > .ant-menu-submenu-title': {
    paddingX: 20,
    color: !deviceWidth ? 'white' : '#666',
    textAlign: 'center',
    '> i': {
      margin: 0,
    },
  },
  '> li.ant-menu-item.ant-menu-item-selected': {
    backgroundColor: 'transparent',
  },
  '> li.ant-menu-item-selected > a': {
    color: !deviceWidth ? 'white' : theme.color,
  },
}), Menu, p => p);

export default withLang(withAuth(({ auth, lang, className, deviceWidth, children, query, ...rest }) => (
  <VerticalMenu className={className} deviceWidth={deviceWidth}>
    <Menu.Item key="page">
      <Popover placement="right" content={lang.PAGE_MANAGER}>
        <Link to={{ query: { '@page': null, '@deviceWidth': deviceWidth } }}>
          <Icon type="home" />
        </Link>
      </Popover>
    </Menu.Item>
    <Menu.Item key="template">
      <Popover placement="right" content="Template-Liste">
        <Link to={{ query: { '@template': null, '@deviceWidth': deviceWidth } }}>
          <Icon type="appstore-o" />
        </Link>
      </Popover>
    </Menu.Item>
    <Menu.Item key="artikel">
      <Popover placement="right" content="Artikel-Liste">
        <Link to={{ query: { '@artikel': null, '@deviceWidth': deviceWidth } }}>
          <Icon type="calculator" />
        </Link>
      </Popover>
    </Menu.Item>
    <Menu.SubMenu key="device" title={<Icon type="laptop" />}>
      <Menu.Item key="device-no">
        <Link to={{ query: { ...query, '@deviceWidth': undefined } }}>
          <Icon type="laptop" /> Normal
        </Link>
      </Menu.Item>
      <Menu.Item key="device-700">
        <Link to={{ query: { ...query, '@deviceWidth': 700 } }}>
          <Icon type="tablet" /> Tablet
        </Link>
      </Menu.Item>
      <Menu.Item key="device-400">
        <Link to={{ query: { ...query, '@deviceWidth': 400 } }}>
          <Icon type="phone" /> Mobil
        </Link>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.Item key="logoff" title="Abmelden">
      <Popover placement="right" content="Abmelden">
        <a onClick={auth.logout} href="javascript:;">
          <Icon type="poweroff" />
        </a>
      </Popover>
    </Menu.Item>
    {/*<CmsButton {...rest} />*/}
  </VerticalMenu>
)));
