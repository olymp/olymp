import React, { Component } from 'react';
import { withLang } from 'olymp-utils';
import { FaExpand, FaCompress, FaPencil } from 'olymp-icons';
import { createReplaceQuery } from 'olymp-router';
import { Icon, Button } from 'antd';
import { Logo, Menu, Drawer } from 'olymp-fela';
import { compose, withState, withHandlers, withPropsOnChange } from 'recompose';
import { sortBy } from 'lodash';
import { connect } from 'react-redux';
import getSchema from './get-schema';

const enhance = compose(
  withState('collapsed', 'setCollapsed', true),
  withHandlers({
    expand: ({ setCollapsed }) => () => setCollapsed(false),
    collapse: ({ setCollapsed }) => () => setCollapsed(true),
  }),
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
@withState('collapsed', 'setCollapsed', true)
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
      <Menu.Item
        key={action.type}
        draggable
        onDragStart={dragStart(action.type)}
      >
        {action.label || action.type}
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
        <Menu.List key={key} title={key}>
          {categories[key]}
        </Menu.List>
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
      setCollapsed,
      full,
      setFull,
      setCode,
      code,
    } = this.props;
    const keys = Object.keys(query);

    if (!keys.filter(x => x[0] === '@').length) {
      keys.push('@home');
    }

    return (
      <Drawer open dim={false} right>
        <Menu
          collapsed={collapsed}
          onMouseEnter={() => setCollapsed(false)}
          onMouseLeave={() => setCollapsed(true)}
          color
          inverted
        >
          <Menu.Item
            active={Object.keys(query).length === 0}
            onClick={() => setFull(!full)}
            icon={<FaExpand />}
          >
            Vollbild
          </Menu.Item>
          <Menu.Item
            active={query[`@media`] === null}
            onClick={() => setCode(!code)}
            icon={<FaPencil />}
          >
            Bearbeiten
          </Menu.Item>
          <Menu.List title="Listen">{items}</Menu.List>
          <Menu.Space />
        </Menu>
      </Drawer>
    );

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
          <Menu.Item className="logo">
            {!full ? (
              <Button
                onClick={() => setCode(!code)}
                type="primary"
                shape="circle"
                size="large"
              >
                <FaPencil size={25} color="white" />
              </Button>
            ) : (
              <Button
                onClick={() => setCode(!code)}
                type="primary"
                shape="circle"
                size="large"
              >
                <FaPencil size={25} color="white" />
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
