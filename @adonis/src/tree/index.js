import React, {Component, PropTypes} from 'react';
import Sortable, { sortable } from 'react-anything-sortable';
import './styles.less';


@sortable
class TreeNode extends Component {
  onlyLeftClick = e => {
    if (e.button !== 0) {
      e.stopPropagation();
    } else {
      this.props.onMouseDown(e);
    }
  }
  render() {
    const { children, className, ...rest } = this.props;
    return (
      <div {...rest} className={className.replace('undefined', '').replace('false', '').trim()} onMouseDown={this.onlyLeftClick}>
        {children}
      </div>
    );
  }
}

export default class Tree extends Component {
  static defaultProps = {
    level: 0,
    renderNode: node => <label>{node.name}</label>,
    filter: () => true,
  };

  onSort = children => {
    const { parent, onSort, tree } = this.props;

    if (children.map(x => x.id).join(',') === (parent ? parent.children : tree).map(x => x.id).join(',')){
      return;
    }
    if (onSort) {
      onSort({
        tree: replaceTreeChildren(tree, parent, children),
        children,
        parent,
        oldTree: tree,
      });
    }
  }

  renderNode = node => {
    const { level, renderNode } = this.props;

    const children = node.children && node.children.length > 0
      ? <Tree {...this.props} children={node.children} level={level + 1} parent={node} />
      : null;

    return (
      <TreeNode key={node.id} className={'sortable-tree-node'} sortData={node}>
        {renderNode(node)}
        {children}
      </TreeNode>
    )
  }

  render() {
    const { tree, children, level, filter, ...rest } = this.props;
    const childs = children || tree || [];
    return (
      <div onMouseDown={e => e.stopPropagation()} onDragEnter={e => e.stopPropagation()} onDragStart={e => e.stopPropagation()} onDragOver={e => e.stopPropagation()}>
        <Sortable {...rest} onSort={this.onSort} className={!level ? 'sortable-tree-container' : 'sortable-tree-inner-container'}>
          {childs.filter(filter).map(this.renderNode)}
        </Sortable>
      </div>
    );
  }
}

function replaceTreeChildren(tree, node, newChildren) {
  return !node ? newChildren : tree.map(currentNode => ({
    ...currentNode,
    children: currentNode.id === node.id ? newChildren : replaceTreeChildren(currentNode.children, node, newChildren)
  }));
}
