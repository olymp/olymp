import React from 'react';
import { withAuth, Link, withLang } from 'olymp';
import { Menu, Icon, Popover } from 'antd';
import tinycolor from 'tinycolor2';
import { createComponent } from 'olymp-fela';

const Separator = createComponent(
  ({ theme }) => ({
    borderTop: '1px solid rgba(0, 0, 0, 0.05)',
  }),
  'li'
);
const Filler = createComponent(
  ({ theme }) => ({
    flex: 1,
  }),
  'li'
);
const VerticalMenu = createComponent(
  ({ deviceWidth, theme }) => ({
    overflow: 'visible',
    display: 'flex',
    flexDirection: 'column',
    // boxShadow: 'inset -10px 0 3px -9px hsla(0,0%,0%,.2)!important',
    borderRight: 0,
    boxShadow: `${theme.innerShadow}!important`,
    background: `linear-gradient(0deg, ${theme.colorStart ||
      tinycolor(theme.color)
        .darken(6)
        .spin(-6)
        .toRgbString()}, ${theme.colorEnd ||
      tinycolor(theme.color).lighten(6).spin(12).toRgbString()})`,
    '> li.ant-menu-item': {
      paddingX: 14,
      // padding: 5,
      // height: 'initial',
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
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: '50%',
      },
      ':hover > a > i.anticon': {
        backgroundColor: 'rgba(0,0,0,0.30)',
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
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: '50%',
      },
      ':hover > i.anticon': {
        backgroundColor: 'rgba(0,0,0,0.30)',
      },
    },
    '> li.ant-menu-item.ant-menu-item-selected': {
      backgroundColor: 'transparent',
    },
    '> li.ant-menu-item:active': {
      backgroundColor: 'transparent',
    },
    '> li.ant-menu-item-selected > a > i': {
      backgroundColor: 'rgba(0,0,0,0.30)!important',
    },
    '> li.ant-menu-submenu-selected > div > i': {
      backgroundColor: 'rgba(0,0,0,0.30)!important',
    },
    ifSmallDown: {
      display: 'none',
    },
  }),
  Menu,
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
      (<VerticalMenu
        className={className}
        deviceWidth={deviceWidth}
        selectedKeys={Object.keys(query)}
      >
        <Menu.Item key="@page">
          <Popover placement="right" content={lang.PAGE_MANAGER}>
            <Link
              to={{ query: { '@page': null, '@deviceWidth': deviceWidth } }}
            >
              <Icon type="home" />
            </Link>
          </Popover>
        </Menu.Item>
        <Menu.Item key="@template">
          <Popover placement="right" content="Template-Liste">
            <Link
              to={{ query: { '@template': null, '@deviceWidth': deviceWidth } }}
            >
              <Icon type="appstore-o" />
            </Link>
          </Popover>
        </Menu.Item>
        <Menu.Item key="@media">
          <Popover placement="right" content="Mediathek">
            <Link
              to={{ query: { '@media': null, '@deviceWidth': deviceWidth } }}
            >
              <Icon type="picture" />
            </Link>
          </Popover>
        </Menu.Item>
        {auth.user && auth.user.isAdmin
          ? <Menu.Item key="@users">
            <Popover placement="right" content="Benutzer-Management">
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
          <Popover placement="right" content="Statistiken">
            <Link
              to={{ query: { '@stats': null, '@deviceWidth': deviceWidth } }}
            >
              <Icon type="line-chart" />
            </Link>
          </Popover>
        </Menu.Item>
        <Menu.Item key="@share">
          <Popover placement="right" content="Teilen">
            <Link
              to={{ query: { '@share': null, '@deviceWidth': deviceWidth } }}
            >
              <Icon type="share-alt" />
            </Link>
          </Popover>
        </Menu.Item>
        <Menu.Item key="@trash">
          <Popover placement="right" content="Papierkorb">
            <Link
              to={{ query: { '@trash': null, '@deviceWidth': deviceWidth } }}
            >
              <Icon type="delete" />
            </Link>
          </Popover>
        </Menu.Item>

        <Separator />

        {collectionList.map(collection =>
          (<Menu.Item key={`@${collection.name.toLowerCase()}`}>
            <Popover placement="right" content={`@${collection.name}-Liste`}>
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

        <Filler />

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
        <Menu.Item key="@profile">
          <Popover placement="right" content="Profil">
            <Link
              to={{ query: { '@profile': null, '@deviceWidth': deviceWidth } }}
            >
              <Icon type="user" />
            </Link>
          </Popover>
        </Menu.Item>
        <Menu.Item key="@settings">
          <Popover placement="right" content="Einstellungen">
            <Link
              to={{ query: { '@settings': null, '@deviceWidth': deviceWidth } }}
            >
              <Icon type="setting" />
            </Link>
          </Popover>
        </Menu.Item>
        <Separator />
        <Menu.Item key="logoff" title="Abmelden">
          <Popover placement="right" content="Abmelden">
            <a onClick={auth.logout} href="javascript:;">
              <Icon type="poweroff" />
            </a>
          </Popover>
        </Menu.Item>
      </VerticalMenu>)
  )
);
