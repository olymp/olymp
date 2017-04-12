import React, { Component } from 'react';
import { queryPages } from './gql';
import { Tree, TreeNode } from './styled';

export class Pages extends Component {
  state = {
    expandedKeys: [],
  };
  render() {
    const { items } = this.props;
    const { expandedKeys } = this.state;
    const loop = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <Tree.TreeNode key={item.id} title={<TreeNode item={item}/>}>{loop(item.children)}</Tree.TreeNode>;
      } return <Tree.TreeNode key={item.id} title={<TreeNode item={item}/>}/>;
    });
    return (
      <Tree
        className="draggable-tree"
        defaultExpandedKeys={expandedKeys}
        draggable
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
