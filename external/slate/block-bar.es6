import React, { Component } from 'react';
import { FaExpand, FaCode, FaCompress, FaCube } from 'olymp-icons';
import { createReplaceQuery } from 'olymp-router';
import Menu from 'olymp-fela/menu';
import { Drawer } from 'olymp-fela';
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
        onClick={() => null}
        onDragStart={dragStart(action.type)}
        // icon={<Icon type={getIcon(action.category)} />}
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
      collapsed,
      setCollapsed,
      full,
      setFull,
      setCode,
      code,
      items,
      children,
    } = this.props;
    const keys = Object.keys(query);

    if (!keys.filter(x => x[0] === '@').length) {
      keys.push('@home');
    }

    return (
      <Drawer
        open
        collapsed={collapsed}
        dim={false}
        right
        width={collapsed ? 72 : 240}
      >
        <Menu
          collapsed={collapsed}
          onMouseEnter={() => setCollapsed(false)}
          onMouseLeave={() => setCollapsed(true)}
          headerColor
          headerInverted
          header={
            <Menu.Item icon={<FaCube />} large>
              Seite bearbeiten
            </Menu.Item>
          }
        >
          {children}
          <Menu.Item
            active={full}
            onClick={() => setFull(!full)}
            icon={full ? <FaCompress /> : <FaExpand />}
          >
            {full ? 'Vollbild beenden' : 'Vollbild'}
          </Menu.Item>
          <Menu.Item
            active={code}
            onClick={() => setCode(!code)}
            icon={<FaCode />}
          >
            Code anzeigen
          </Menu.Item>
          <Menu.Divider />
          {items}
          <Menu.Space />
        </Menu>
      </Drawer>
    );
  }
}
export default Navigation;
