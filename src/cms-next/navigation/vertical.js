import React, { Component } from 'react';
import { withAuth, withRouter, styled, Link, withLang } from 'olymp';
import { Menu, Icon, Tooltip, Popover } from 'antd';
import tinycolor from 'tinycolor2';
import CmsButton from './button';

const Separator = styled(({ theme }) => ({
  // borderTop: '1px solid rgba(0, 0, 0, 0.05)',
}), 'li');
const Filler = styled(({ theme }) => ({
  flex: 1,
}), 'li');
const VerticalMenu = styled(({ deviceWidth, theme }) => ({
  overflow: 'visible',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'inset -10px 0 3px -9px hsla(0,0%,0%,.2)!important',
  background: `linear-gradient(0deg, ${theme.colorStart || tinycolor(theme.color).darken(6).spin(-6).toRgbString()}, ${theme.colorEnd || tinycolor(theme.color).lighten(6).spin(12).toRgbString()})`,
  '> li.ant-menu-item': {
    paddingX: 14,
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
      color: '#FFFFFF',
      padding: 6,
      backgroundColor: 'rgba(0,0,0,0.15)',
      borderRadius: '50%',
    },
    ':hover > a > i.anticon': {
      backgroundColor: 'rgba(0,0,0,0.33)',
    },
  },
  '> li.ant-menu-submenu > .ant-menu-submenu-title': {
    paddingX: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    '> i': {
      margin: 0,
      color: '#FFFFFF',
      padding: 6,
      backgroundColor: 'rgba(0,0,0,0.15)',
      borderRadius: '50%',
    },
    ':hover > i.anticon': {
      backgroundColor: 'rgba(0,0,0,0.33)',
    },
  },
  '> li.ant-menu-item.ant-menu-item-selected': {
    backgroundColor: 'transparent',
  },
  '> li.ant-menu-item-selected > a': {
    color: theme.color,
    '> i': {
      backgroundColor: 'rgba(0,0,0,0.25)!important',
    },
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
    <Menu.Item key="media">
      <Popover placement="right" content="Mediathek">
        <Link to={{ query: { '@mediathek': null } }}>
          <Icon type="picture" />
        </Link>
      </Popover>
    </Menu.Item>
    <Separator />
    <Menu.Item key="artikel">
      <Popover placement="right" content="Artikel-Liste">
        <Link to={{ query: { '@artikel': null, '@deviceWidth': deviceWidth } }}>
          <Icon type="calculator" />
        </Link>
      </Popover>
    </Menu.Item>
    <Filler />
    {auth.user && auth.user.isAdmin ? (
      <Menu.Item key="user">
        <Popover placement="right" content="Benutzer-Management">
          <Link to={{ query: { '@user': null } }}>
            <Icon type="team" />
          </Link>
        </Popover>
      </Menu.Item>
    ) : (
      <Menu.Item key="profile">
        <Popover placement="right" content="Profil">
          <Link to={{ query: { '@profile': null } }}>
            <Icon type="user" />
          </Link>
        </Popover>
      </Menu.Item>
    )}
    <Menu.Item key="settings">
      <Popover placement="right" content="Einstellungen">
        <Link to={{ query: { '@settings': null } }}>
          <Icon type="setting" />
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
    <Separator />
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
