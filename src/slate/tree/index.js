import React, { Component, PropTypes } from 'react';
import { Tree } from 'olymp-ui';
import { Icon } from 'antd';

export default class SlateTree extends Component {
  state = {
    expandedKeys: [],
  };
  onDrop = (info) => { // reorder or move nodes on drop
    const { reorder, move } = this.props;
    const parent = info.dropToGap && info.node.props.title.props.parent
      ? info.node.props.title.props.parent
      : info.node.props.title.props.item;
    const page = info.dragNode.props.title.props.item;
    const pageId = page.pageId || page.id; // get real pageId in case of binding

    // Get all IDs of children in order
    const childIds = (parent.children || []).map(child => child.id).filter(x => x !== page.id);
    childIds.splice(info.dropPosition, 0, page.id);

    // Check if new parent is itself??
    if (parent.id === pageId) return;
    if (parent.id !== page.parentId) { // parent changed
      move({
        variables: {
          id: pageId,
          parentId: parent.id,
          sorting: childIds.join(','),
        },
      });
    } else { // just moved inside existing parent
      // Disallow sort if parent has fixed sorting
      if (parent.sorting && ['+', '-'].includes(parent.sorting[0])) return;
      reorder({
        variables: {
          id: parent.id,
          sorting: childIds.join(','),
        },
      });
    }
  }
  getTextLength = (node, length = 0) => {
    const text = node.text ? node.text.length : 0;
    const children = node.nodes ? node.nodes.reduce((length, node) => {
      return this.getTextLength(node, length);
    }, 0) : 0;
    const ranges = node.ranges ? node.ranges.reduce((length, node) => {
      return this.getTextLength(node, length);
    }, 0) : 0;
    return length + text + children + ranges;
  }
  loop = (nodes) => {
    const items = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node && node.kind !== 'text') {
        const lastNode = items[items.length - 1];
        const children = node.nodes && node.nodes.length ? this.loop(node.nodes, node) : undefined;
        const length = this.getTextLength(node);
        if (lastNode && lastNode.type === 'line' && node.type === 'line') {
          lastNode.length += length;
        } else {
          items.push({
            length,
            kind: node.kind,
            text: node.type === 'line' ? 'Text' : null,
            type: node.type,
            children: children && children.length ? children : undefined,
          });
        }
      }
    }
    return items.map(({ kind, type, text, length, children }, i) => (
      <Tree.Node key={i} title={(
        <Tree.Title>
          <a href="javascript:;">
            {text || type || kind} {length ? `(${length})` : ''}
          </a>
          {type !== 'line' && <a href="javascript:;"><Icon type="appstore-o" /></a>}
        </Tree.Title>
      )}>
        {children}
      </Tree.Node>
    ));
  }
  render() {
    const { value, pathname, query } = this.props;
    const { expandedKeys } = this.state;
    return (
      <Tree
        selectedKeys={[pathname]}
        draggable
        defaultExpandAll
        className="draggable-tree"
        defaultExpandedKeys={expandedKeys}
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
      >
        {this.loop(value ? value.nodes : [])}
      </Tree>
    );
  }
}
