import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'olymp-fela';
import { Tree } from 'olymp-ui';
import { Icon, Dropdown, Menu } from 'antd';
import immutable from 'olymp-utils/immutable';
import { sortBy } from 'lodash';
import { withBlockTypes } from 'olymp-slate';

const Title = createComponent(
  ({ theme }) => ({
    onHover: {
      '> a': {
        display: 'initial',
      },
    },
  }),
  p => <Tree.Title {...p} />,
  p => Object.keys(p)
);

const getMenuItems = (blockTypes, prefix) => {
  prefix = prefix ? `${prefix}:` : '';
  const types = Object.keys(blockTypes).map(key => ({
    ...blockTypes[key].slate,
    type: key,
  }));
  const categories = {};
  const menuItems = [];
  sortBy(types, ['category', 'label']).forEach(action => {
    const item = (
      <Menu.Item key={`${prefix}${action.type}`}>
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
  return [
    ...Object.keys(categories).map(key => (
      <Menu.SubMenu title={key}>{categories[key]}</Menu.SubMenu>
    )),
    ...menuItems,
  ];
};

const BlockMenu = createComponent(
  ({ theme }) => ({
    borderRadius: '50%',
    size: 23,
    textAlign: 'center',
    marginLeft: 3,
    '> i': {
      color: theme.dark3,
      margin: '0 !important',
    },
  }),
  ({ className, type, tooltip, onClick, blockTypes }) => (
    <Dropdown
      overlay={
        <Menu onClick={onClick}>
          <Menu.SubMenu title="Davor einfügen">
            <Menu.Item key="pre">
              <span>Seite</span>
            </Menu.Item>
            {getMenuItems(blockTypes, 'before')}
          </Menu.SubMenu>
          <Menu.SubMenu title="Danach einfügen">
            <Menu.Item key="post">
              <span>Seite</span>
            </Menu.Item>
            {getMenuItems(blockTypes, 'after')}
          </Menu.SubMenu>
          <Menu.Divider />
          {getMenuItems(blockTypes, 'add')}
        </Menu>
      }
    >
      <a href="javascript:;" className={className} onClick={onClick}>
        <Icon type={type} />
      </a>
    </Dropdown>
  ),
  p => Object.keys(p)
);
const ChangeBlock = createComponent(
  ({ theme }) => ({
    borderRadius: '50%',
    size: 23,
    textAlign: 'center',
    marginLeft: 3,
    '> i': {
      color: theme.dark3,
      margin: '0 !important',
    },
  }),
  ({ className, type, tooltip, onClick, blockTypes }) => (
    <Dropdown
      overlay={
        <Menu onClick={onClick}>
          <Menu.SubMenu title="Umwandeln">
            {getMenuItems(blockTypes, 'transform')}
          </Menu.SubMenu>
          <Menu.Item key="duplicate">
            <span>Duplizieren</span>
          </Menu.Item>
          <Menu.Item key="delete">
            <span>Löschen</span>
          </Menu.Item>
          <Menu.Item key="unwrap">
            <span>Entpacken</span>
          </Menu.Item>
        </Menu>
      }
    >
      <a href="javascript:;" className={className} onClick={onClick}>
        <Icon type={type} />
      </a>
    </Dropdown>
  ),
  p => Object.keys(p)
);

@withBlockTypes
class Pages extends Component {
  onDrop = info => {
    const { reorder, move } = this.props;
    const parent =
      info.dropToGap && info.node.props.parent
        ? info.node.props.parent
        : info.node.props.item;
    const page = info.dragNode.props.item;
    const pageId = page.pageId || page.id; // get real pageId in case of binding

    // Get all IDs of children in order
    const childIds = (parent.children || [])
      .map(child => child.id)
      .filter(x => x !== page.id);
    childIds.splice(info.dropPosition, 0, page.id);

    // Check if new parent is itself??
    if (parent.id === pageId) {
      return;
    }
    if (parent.id !== page.parentId) {
      // parent changed
      move({
        variables: {
          id: pageId,
          parentId: parent.id,
          sorting: childIds,
        },
      });
    } else {
      // just moved inside existing parent
      // Disallow sort if parent has fixed sorting
      if (parent.sorting && ['+', '-'].includes(parent.sorting[0])) {
        return;
      }
      reorder({
        variables: {
          id: parent.id,
          sorting: childIds,
        },
      });
    }
  };

  getParent = (tree, levels) => {
    const level = levels[0];
    const parent = tree[level];
    levels.shift();

    if (level === undefined) {
      return { id: null, children: [] }; // top-level
    } else if (!parent.children.length || !levels.length) {
      return parent;
    }
    return this.getParent(parent.children, levels);
  };

  action = (node, key) => {
    const { onChange, value } = this.props;
    if (key === 'delete') {
      onChange(value.change().removeNodeByKey(node.key));
    } else if (key.indexOf('transform:') === 0) {
      onChange(
        immutable(value)
          .set(`nodes.${path.join('.nodes.')}.type`, key.split(':')[1])
          .value()
      );
    } else if (key.indexOf('add:') === 0) {
      onChange(
        immutable(value)
          .push(`nodes.${path.join('.nodes.')}.nodes`, {
            type: key.split(':')[1],
            kind: 'block',
          })
          .value()
      );
    } else if (key === 'unwrap') {
      onChange(value.change().unwrapBlockByKey(node.key));
    }
  };

  hover = node => {
    const { onChange, value } = this.props;
    onChange(
      value
        .change()
        .moveToRangeOf(node)
        .focus()
    );
    const element = document.querySelector(`[data-key="${node.key}"]`);
    if (element) {
      document.querySelector(`[data-key="${node.key}"]`).scrollIntoView(true);
    }
  };

  getItems = (block, parent) => {
    const blockTypes = this.props.blockTypes;
    if (!block || !block.nodes || !block.nodes.size) {
      return undefined;
    }
    const nodes = block.nodes
      .map((item, index) => {
        let label;
        if (blockTypes[item.type]) {
          label =
            (blockTypes[item.type].slate &&
              blockTypes[item.type].slate.label) ||
            item.type;
        } else if (item.type === 'paragraph') {
          label = 'Paragraph';
        } else if (item.type === 'line') {
          label = 'Zeile';
        } else if (item.type === 'heading-one') {
          label = 'Überschrift 1';
        } else if (item.type === 'heading-two') {
          label = 'Überschrift 2';
        } else if (item.type === 'heading-three') {
          label = 'Überschrift 3';
        } else if (item.type === 'heading-four') {
          label = 'Überschrift 4';
        } else if (item.type === 'heading-five') {
          label = 'Überschrift 5';
        } else if (item.type === 'heading-six') {
          label = 'Überschrift 6';
        } else if (item.type === 'bulleted-list') {
          label = 'Liste';
        } else if (item.type === 'numbered-list') {
          label = 'Nummerierte Liste';
        } else if (
          item.type === 'bulleted-list-item' ||
          item.type === 'numbered-list-item'
        ) {
          label = 'Listenelement';
        } else if (item.kind === 'text') {
          label = 'Text';
          if (!item.text.trim()) {
            return null;
          }
        } else {
          console.log(item.type, item.kind);
          label = 'Unbekannt';
        }
        return (
          <Tree.Node
            key={item.key}
            item={item}
            parent={parent}
            title={
              <Title disabled={false} onMouseEnter={() => this.hover(item)}>
                <a href="javascript:;">{label}</a>
                <ChangeBlock
                  onClick={({ key }) => this.action(item, key)}
                  type="down"
                  blockTypes={blockTypes}
                />
                <BlockMenu
                  onClick={({ key }) => this.action(item, key)}
                  type="plus"
                  blockTypes={blockTypes}
                />
              </Title>
            }
          >
            {this.getItems(item, block)}
          </Tree.Node>
        );
      })
      .filter(x => x);

    if (!nodes.size) {
      return undefined;
    }
    return nodes;
  };

  render() {
    const { value, selected } = this.props;
    return (
      <Tree
        selectedKeys={selected}
        draggable
        className="draggable-tree"
        // defaultExpandedKeys={items.filter((x, i) => i === 0).map(item => item.id || item.pathname)}
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
      >
        {this.getItems(value.document)}
      </Tree>
    );
  }
}
Pages.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.arrayOf(PropTypes.string),
};
Pages.defaultProps = {
  items: [],
  selected: [],
};
export default Pages;
