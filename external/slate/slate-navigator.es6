import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { createComponent } from 'react-fela';
import { Icon, Dropdown, Menu, Tree } from 'antd';
import { Block, Text } from 'slate';
import { sortBy } from 'lodash';
import Plain from 'slate-plain-serializer';
import getSchema from './get-schema';

const getMenuItems = (schema, prefix) => {
  prefix = prefix ? `${prefix}:` : '';
  const types = Object.keys(schema.nodes).map(key => ({
    ...schema.nodes[key].slate,
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
      <Menu.SubMenu key={key} title={key}>
        {categories[key]}
      </Menu.SubMenu>
    )),
    ...menuItems,
    <Menu.Item key={`${prefix}paragraph`}>Paragraph</Menu.Item>,
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
  ({ className, type, onClick, schema }) => (
    <Dropdown
      overlay={
        <Menu onClick={onClick}>
          <Menu.SubMenu key="sub1" title="Davor einfügen">
            <Menu.Item key="pre">
              <span>Seite</span>
            </Menu.Item>
            {getMenuItems(schema, 'before')}
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" title="Danach einfügen">
            <Menu.Item key="post">
              <span>Seite</span>
            </Menu.Item>
            {getMenuItems(schema, 'after')}
          </Menu.SubMenu>
          <Menu.Divider key="div" />
          {getMenuItems(schema, 'add')}
        </Menu>
      }
    >
      <a className={className} onClick={onClick}>
        <Icon type={type} />
      </a>
    </Dropdown>
  ),
  p => Object.keys(p),
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
  ({ className, type, tooltip, onClick, schema }) => (
    <Dropdown
      overlay={
        <Menu onClick={onClick}>
          <Menu.SubMenu title="Umwandeln">
            {getMenuItems(schema, 'transform')}
          </Menu.SubMenu>
          <Menu.SubMenu title="Einpacken">
            {getMenuItems(schema, 'wrap')}
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
          <Menu.Item key="cut">
            <span>Ausschneiden</span>
          </Menu.Item>
          <Menu.Item key="copy">
            <span>Kopieren</span>
          </Menu.Item>
        </Menu>
      }
    >
      <a className={className} onClick={onClick}>
        <Icon type={type} />
      </a>
    </Dropdown>
  ),
  p => Object.keys(p),
);

@getSchema
@onlyUpdateForKeys(['base64'])
class Pages extends Component {
  onDrop = info => {
    const { value } = this.props;
    const dropNode = info.node.props.node;
    const dragNode = info.dragNode.props.node;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);
    // const dragNodesKeys = info.dragNodesKeys;
    if (info.dropToGap) {
      const parent = value.document.getParent(dropNode.key);
      const dropObjIndex = parent.nodes.indexOf(dropNode);
      if (dropPosition === -1) {
        this.onChange(
          value.change().moveNodeByKey(dragNode.key, parent.key, dropObjIndex),
        );
      } else {
        this.onChange(
          value
            .change()
            .moveNodeByKey(dragNode.key, parent.key, dropObjIndex - 1),
        );
      }
    } else {
      this.onChange(
        value.change().moveNodeByKey(dragNode.key, dropNode.key, 0),
      );
    }
    /* return;
    const { value } = this.props;
    const parent =
      info.dropToGap && info.node.props.parent ? info.node.props.parent : info.node.props.node;
    const node = info.dragNode.props.node;
    const key = node.key; // get real pageId in case of binding

    // Get all IDs of children in order
    const childKeys = (parent.nodes || []).map(child => child.key).filter(x => x !== node.key);
    childKeys.splice(info.dropPosition, 0, node.key);

    // Check if new parent is itself??
    if (parent.key === key) {
    }
    this.onChange(
      value.change().moveNodeByKey(key, parent.key, info.dropPosition < 0 ? 0 : info.dropPosition),
    ); */
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

  onChange = change => this.props.onChange(change.value);

  applyTemplate = type => {
    const { value } = this.props;
    if (type === 'image') {
      this.onChange(
        value
          .change()
          .selectAll()
          .delete()
          .insertNodeByKey(value.document.key, 0, {
            type: 'image',
            kind: 'block',
            isVoid: true,
          })
          .insertNodeByKey(value.document.key, 1, {
            type: 'containerText',
            kind: 'block',
            isVoid: false,
            nodes: [Text.create('Text')],
          })
          .focus(),
      );
    } else if (type === 'banner') {
      this.onChange(
        value
          .change()
          .selectAll()
          .delete()
          .insertNodeByKey(value.document.key, 0, {
            type: 'banner',
            kind: 'block',
            isVoid: false,
            nodes: [
              Block.create({
                type: 'paragraph',
                nodes: [Text.create('Titel')],
              }),
            ],
          })
          .insertNodeByKey(value.document.key, 1, {
            type: 'containerText',
            kind: 'block',
            isVoid: false,
            nodes: [
              Block.create({ type: 'paragraph', nodes: [Text.create('Text')] }),
            ],
          })
          .focus(),
      );
    } else if (type === 'carousel') {
      this.onChange(
        value
          .change()
          .selectAll()
          .delete()
          .insertNodeByKey(value.document.key, 0, {
            type: 'carousel',
            kind: 'block',
            isVoid: true,
          })
          .insertNodeByKey(value.document.key, 1, {
            type: 'banner',
            kind: 'block',
            isVoid: false,
            nodes: [
              Block.create({
                type: 'paragraph',
                nodes: [Text.create('Titel')],
              }),
            ],
          })
          .insertNodeByKey(
            value.document.key,
            2,
            Block.create({ type: 'paragraph' }),
          )
          .insertNodeByKey(value.document.key, 3, {
            type: 'containerText',
            kind: 'block',
            isVoid: false,
            nodes: [Text.create('Text')],
          })
          .focus(),
      );
    }
  };
  action = (node, actionType) => {
    const { value } = this.props;
    if (!actionType) {
      return;
    }
    if (actionType === 'delete') {
      this.onChange(value.change().removeNodeByKey(node.key));
    } else if (actionType === 'cut' || actionType === 'copy') {
      this.onChange(
        value
          .change()
          .moveToRangeOf(node)
          .focus(),
      );
      setTimeout(() => document.execCommand(actionType), 1);
    } else if (actionType.indexOf('wrap:') === 0) {
      this.onChange(
        value
          .change()
          .moveToRangeOf(node)
          .wrapBlock(actionType.split(':')[1]),
      );
    } else if (actionType.indexOf('transform:') === 0) {
      this.onChange(
        value.change().setNodeByKey(node.key, actionType.split(':')[1]),
      );
    } else if (actionType.indexOf('pre:') === 0) {
      this.onChange(
        value.change().insertNodeByKey(node.key, node.nodes.size, {
          type: actionType.split(':')[1],
          kind: 'block',
        }),
      );
    } else if (actionType.indexOf('post:') === 0) {
      this.onChange(
        value.change().insertNodeByKey(node.key, node.nodes.size, {
          type: actionType.split(':')[1],
          kind: 'block',
        }),
      );
    } else if (actionType.indexOf('add:') === 0) {
      this.onChange(
        value.change().insertNodeByKey(node.key, node.nodes.size, {
          type: actionType.split(':')[1],
          kind: 'block',
        }),
      );
    } else if (actionType === 'unwrap') {
      this.onChange(value.change().unwrapBlockByKey(node.key));
    }
  };

  onClick = node => {
    const element = document.querySelector(`[data-key="${node.key}"]`);
    if (element) {
      document.querySelector(`[data-key="${node.key}"]`).scrollIntoView(true);
    }
    const { value } = this.props;
    this.onChange(
      value
        .change()
        .moveToRangeOf(node)
        .focus(),
    );
  };

  getItems = (block, parent) => {
    const { schema } = this.props;
    if (!block || !block.nodes || !block.nodes.size) {
      return undefined;
    }
    const nodes = block.nodes
      .map(item => {
        let label;
        if (schema.nodes[item.type]) {
          label =
            (schema.nodes[item.type].slate &&
              schema.nodes[item.type].slate.label) ||
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
            // return null;
          }
        } else {
          label = 'Unbekannt';
        }
        return (
          <Tree.TreeNode
            key={item.key}
            node={item}
            parent={parent}
            title={[
              <a key="link" onClick={() => this.onClick(item)}>
                {label}
              </a>,
              <ChangeBlock
                key="change1"
                onClick={({ key }) => this.action(item, key)}
                type="down"
                schema={schema}
              />,
              <BlockMenu
                key="change2"
                onClick={({ key }) => this.action(item, key)}
                type="plus"
                schema={schema}
              />,
            ]}
          >
            {this.getItems(item, block)}
          </Tree.TreeNode>
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
    if (!value.document.text) {
      return (
        <Tree>
          <Tree.TreeNode
            key="image"
            title={
              <a key="link" onClick={() => this.applyTemplate('image')}>
                Bild + Text
              </a>
            }
          />
          <Tree.TreeNode
            key="banner"
            title={
              <a key="link" onClick={() => this.applyTemplate('banner')}>
                Banner + Text
              </a>
            }
          />
          <Tree.TreeNode
            key="carousel"
            title={
              <a key="link" onClick={() => this.applyTemplate('carousel')}>
                Bilder-Karusell + Text
              </a>
            }
          />
        </Tree>
      );
    }
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
  value: Plain.deserialize(''),
  items: [],
  selected: [],
};
export default Pages;
