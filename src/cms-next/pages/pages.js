import React, { Component, PropTypes } from 'react';
import { queryPages, reorderPage, movePage } from './gql';
import { Tree, TreeNode } from './styled';

@reorderPage
@movePage
export class Pages extends Component {
  state = {
    expandedKeys: [],
  };
  onDrop = (info) => {
    const { reorder, move } = this.props;
    const dragNode = info.dragNode;
    const node = info.node;
    const parent = info.dropToGap && node.props.title.props.parent
      ? node.props.title.props.parent
      : node.props.title.props.item;
    const parentId = parent.id;
    const changedParent = parentId !== dragNode.props.title.props.item.parentId;
    const dragId = dragNode.props.title.props.item.id;
    const dragPageId = dragNode.props.title.props.item.pageId || dragId;
    const children = parent.children;
    const childIds = (children || []).map(child => child.id);
    const newIds = childIds.filter(x => x !== dragId);
    newIds.splice(info.dropPosition, 0, dragId);
    if (parentId === dragPageId) return;
    if (changedParent) {
      move({
        variables: {
          id: dragPageId,
          parentId: parentId,
          sorting: newIds.join(','),
        },
      });
    } else {
      // Disallow sort if parent has fixed sorting
      if (parent.sorting && ['+', '-'].includes(parent.sorting[0])) return;
      reorder({
        variables: {
          id: parentId,
          sorting: newIds.join(','),
        },
      });
    }
  }
  render() {
    const { items } = this.props;
    const { expandedKeys } = this.state;
    const loop = (data, parent) => data.map((item) => {
      const inner = <TreeNode item={item} parent={parent}/>;
      if (item.children && item.children.length) {
        return (
          <Tree.TreeNode key={item.id} title={inner}>
            {loop(item.children, item)}
          </Tree.TreeNode>
        );
      } return <Tree.TreeNode key={item.id} title={inner}/>;
    });
    return (
      <Tree
        draggable
        defaultExpandAll
        className="draggable-tree"
        defaultExpandedKeys={expandedKeys}
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
      >
        {loop(items)}
      </Tree>
    );
  }
}
Pages.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
Pages.defaultProps = {
  items: [],
};
export const PagesGql = queryPages(Pages);
