import React, { Component } from 'react';
import { Tree } from 'antd';
import { Block } from 'slate';
import { sortBy } from 'lodash';
import withBlockTypes from './decorators/with-block-types';

@withBlockTypes
class Blocks extends Component {
  dragStart = type => ev => {
    const schema = this.props.schema;
    return ev.dataTransfer.setData('x-slatemate', type);
  };

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
  getItems = block => {
    const { blockTypes } = this.props;
    const types = Object.keys(blockTypes).map(key => ({
      ...blockTypes[key].slate,
      type: key,
    }));
    const categories = {};
    const menuItems = [];
    sortBy(types, ['category', 'label']).forEach(action => {
      const item = (
        <Tree.TreeNode
          key={action.type}
          title={[
            <a draggable onDragStart={this.dragStart(action.type)} key="link">
              {action.label || action.type}
            </a>,
          ]}
        />
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
        <Tree.TreeNode
          key={key}
          title={[
            <a draggable onDragStart={this.dragStart(key)} key="link">
              {key}
            </a>,
          ]}
        >
          {categories[key]}
        </Tree.TreeNode>
      )),
    ];
  };
  render() {
    return (
      <Tree
        selectedKeys={[]}
        draggable
        className="draggable-tree"
        // defaultExpandedKeys={items.filter((x, i) => i === 0).map(item => item.id || item.pathname)}
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
      >
        {this.getItems()}
      </Tree>
    );
  }
}
export default Blocks;
