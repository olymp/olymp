import React, { Component, PropTypes } from 'react';
import { withRouter } from 'olymp';
import { queryPages, reorderPage, movePage } from './gql';
import { Tree, TreeNode } from './styled';

@withRouter
@reorderPage
@movePage
export class Pages extends Component {
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
  loop = (data, parent) => data.map((item) => {
    const inner = <TreeNode item={item} parent={parent} {...this.props.location}/>;
    if (item.children && item.children.length) {
      return (
        <Tree.TreeNode key={item.slug || item.id} title={inner}>
          {this.loop(item.children, item)}
        </Tree.TreeNode>
      );
    } return <Tree.TreeNode key={item.slug || item.id} title={inner}/>;
  })
  render() {
    const { items, pathname } = this.props;
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
        {this.loop(items)}
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
