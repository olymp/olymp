import React, { Component } from 'react';
import { withLang } from 'olymp-utils';
import { FaExpand, FaCompress } from 'olymp-icons';
import { createReplaceQuery } from 'olymp-router';
import { Menu, Icon, Button } from 'antd';
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
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    '> ul.ant-menu > li.ant-menu-submenu > .ant-menu-submenu-title:hover': {
      color: 'white',
    },
    '> ul.ant-menu .ant-menu-inline.ant-menu-sub': {
      backgroundColor: theme.dark4,
    },
    '> ul.ant-menu > li.ant-menu-item.ant-menu-item-selected': {
      color: 'white',
    },
    '> ul.ant-menu': {
      backgroundColor: theme.color,
      boxShadow: `inset 6px 0 5px -5px ${theme.dark4}`,
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      maxWidth: 200,
      zIndex: 11,
      overflow: 'hidden',
      '> .ant-menu-item': {
        margin: 0,
        textAlign: 'left !important',
        '&.logo': {
          position: 'relative',
          height: 80,
          backgroundColor: theme.dark4,
          borderBottom: border(theme, theme.dark4),
          '> button.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-lg': {
            center: true,
            border: 0,
            backgroundColor: 'transparent',
            opacity: 0.7,
            '> svg': {
              marginTop: 3,
            },
          },
        },
      },
      '> .ant-menu-submenu': {
        '> .ant-menu-submenu-title': {
          margin: 0,
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
  if (key === 'Bilder') {
    return 'picture';
  }
  if (key === 'Daten') {
    return 'database';
  }
  if (key === 'Kacheln') {
    return 'appstore-o';
  }
  if (key === 'Kopf') {
    return 'to-top';
  }
  if (key === 'Layout') {
    return 'file';
  }
  if (key === 'Sonstiges') {
    return 'ellipsis';
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
@withPropsOnChange(['schema'], ({ schema = {} }) => {
  const types = Object.keys(schema.nodes || {}).map(key => ({
    ...schema.nodes[key].slate,
    type: key,
  }));
  const categories = {};
  const menuItems = [];
  sortBy(types, ['category', 'label']).forEach(action => {
    const item = (
      <Menu.Item key={action.type}>
        <span draggable onDragStart={dragStart(action.type)}>
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
      query,
      items,
      collapsed,
      expand,
      collapse,
      full,
      setFull,
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
            {!full ? (
              <Button
                onClick={() => setFull(!full)}
                type="primary"
                shape="circle"
                size="large"
              >
                <FaExpand size={25} color="white" />
              </Button>
            ) : (
              <Button
                onClick={() => setFull(!full)}
                type="primary"
                shape="circle"
                size="large"
              >
                <FaCompress size={25} color="white" />
              </Button>
            )}
          </Menu.Item>
          {items}
        </Menu>
      </CmsToolbar>
    );
  }
}
export default Navigation;
