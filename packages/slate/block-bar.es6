import React, { Component } from 'react';
import { withLang } from 'olymp-utils';
import { Link, createReplaceQuery } from 'olymp-router';
import { FaEdit } from 'olymp-icons';
import { Menu, Icon } from 'antd';
import { createComponent, border } from 'olymp-fela';
import { compose, withState, withHandlers, withPropsOnChange } from 'recompose';
import { sortBy } from 'lodash';
import { connect } from 'react-redux';
import getSchema from 'olymp-slate/get-schema';

const enhance = compose(
  withState('collapsed', 'setCollapsed', true),
  withHandlers({
    expand: ({ setCollapsed }) => () => setCollapsed(false),
    collapse: ({ setCollapsed }) => () => setCollapsed(true),
  }),
);

const CmsToolbar = createComponent(
  ({ theme }) => ({
    zIndex: 11,
    width: 64,
    // boxShadow: 'inset -6px 0 5px -5px rgb(0, 0, 0)',
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    '> ul.ant-menu > li.ant-menu-submenu > .ant-menu-submenu-title:hover': {
      color: 'white',
    },
    '> ul.ant-menu .ant-menu-inline.ant-menu-sub': {
      background: theme.color,
    },
    '> ul.ant-menu > li.ant-menu-item.ant-menu-item-selected': {
      color: 'white',
    },
    '> ul.ant-menu-inline-collapsed > li.ant-menu-item.logo': {
      padding: '0 10px',
      marginX: -15,
      '> a': {
        '> svg': {
          width: 45,
        },
      },
    },
    '> ul': {
      backgroundColor: theme.color,
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      maxWidth: 200,
      zIndex: 11,
      overflow: 'hidden',
      '> .ant-menu-item': {
        textAlign: 'left !important',
        '&.logo': {
          height: 80,
          backgroundColor: theme.dark4,
          borderBottom: border(theme, theme.dark4),
          '> a': {
            display: 'flex',
            height: '100%',
            '> svg': {
              width: 75,
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

const dragStart = type => ev => {
  ev.dataTransfer.setData('text', `x-slate:${type}`);
};

const getIcon = key => {
  console.log(key);
  if (key === 'Bilder') {
    return 'picture';
  }
  if (key === 'Daten') {
    return 'database';
  }
  if (key === 'Kacheln') {
    return 'database';
  }
  if (key === 'Kopf') {
    return 'database';
  }
  if (key === 'Layout') {
    return 'database';
  }
  if (key === 'Sonstiges') {
    return 'database';
  }
  return 'plus';
};

@withLang
@connect(
  ({ location }) => ({
    pathname: location.pathname,
    query: location.query,
  }),
  dispatch => ({
    setQuery: createReplaceQuery(dispatch),
  }),
)
@enhance
@getSchema
@withPropsOnChange(['schema'], ({ schema }) => {
  const types = Object.keys(schema.nodes).map(key => ({
    ...schema.nodes[key].slate,
    type: key,
  }));
  const categories = {};
  const menuItems = [];
  sortBy(types, ['category', 'label']).forEach(action => {
    const item = (
      <Menu.Item type="database" key={action.type}>
        <span draggable onDragStart={dragStart(action.type)}>
          <Icon type="database" />
          <span>{action.label || action.type}</span>
        </span>
      </Menu.Item>
    );
    if (action.category) {
      if (!categories[action.category]) {
        categories[action.category] = [];
      }
      categories[action.category].push(item);
    } else {
      menuItems.push(item);
    }
  });
  return {
    items: [
      ...Object.keys(categories).map(key => (
        <Menu.SubMenu
          key={key}
          title={
            <span>
              <Icon type={getIcon(key)} />
              <span>{key}</span>
            </span>
          }
        >
          {categories[key]}
        </Menu.SubMenu>
      )),
    ],
  };
})
class Navigation extends Component {
  render() {
    const {
      logout,
      setDeviceWidth,
      query,
      collectionList,
      isAdmin,
      user = {},
      items,
      collapsed,
      expand,
      collapse,
    } = this.props;
    const keys = Object.keys(query);

    if (!keys.filter(x => x[0] === '@').length) {
      keys.push('@home');
    }

    return (
      <CmsToolbar onMouseEnter={expand} onMouseLeave={collapse}>
        <Menu
          theme="dark"
          selectedKeys={keys}
          mode="inline"
          inlineCollapsed={collapsed}
        >
          <Menu.Item className="logo">
            <Link to={{ query: {} }}>
              <FaEdit color size={28} />
            </Link>
          </Menu.Item>
          {items}
        </Menu>
      </CmsToolbar>
    );
  }
}
export default Navigation;
