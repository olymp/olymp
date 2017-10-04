import React, { Component } from 'react';
import { Tree } from 'antd';
import TRANSFER_TYPES from 'slate-react/lib/constants/transfer-types';
import setTransferData from 'slate-react/lib/utils/set-transfer-data';
import { Inline, Block } from 'slate';
import { sortBy } from 'lodash';
import Base64 from 'slate-base64-serializer';
import withBlockTypes from './decorators/with-block-types';

@withBlockTypes
class Blocks extends Component {
  dragStart = type => (ev) => {
    const blockTypes = this.props.blockTypes;
    const block = blockTypes[type];
    return ev.dataTransfer.setData('x-slatemate', type);
    if (block.kind === 'inline') {
      const encoded = Base64.serializeNode(Inline.create({ type }));
      setTransferData(ev.dataTransfer, TRANSFER_TYPES.FRAGMENT, encoded);
    } else {
      const encoded = Base64.serializeNode(Block.create({ type }));
      setTransferData(ev.dataTransfer, TRANSFER_TYPES.FRAGMENT, encoded);
    }
  };
  getItems = (block) => {
    const { blockTypes } = this.props;
    const types = Object.keys(blockTypes).map(key => ({
      ...blockTypes[key].slate,
      type: key,
    }));
    const categories = {};
    const menuItems = [];
    sortBy(types, ['category', 'label']).forEach((action) => {
      const item = (
        <Tree.TreeNode
          key={action.type}
          title={[
            <a draggable onDragStart={this.dragStart(action.type)} key="link" href="javascript:;">
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
            <a draggable onDragStart={this.dragStart(key)} key="link" href="javascript:;">
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
