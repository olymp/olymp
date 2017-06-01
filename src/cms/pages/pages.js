import React, { Component, PropTypes } from 'react';
import { withRouter, Link } from 'olymp';
import { Tree } from 'olymp-ui';
import { Icon } from 'antd';
import { queryPages, reorderPage, movePage } from './gql';

@withRouter
@reorderPage
@movePage
export class Pages extends Component {
  state = {
    expandedKeys: [],
  };
  onDrop = (info) => { // reorder or move nodes on drop
    const { reorder, move } = this.props;
    const parent = info.dropToGap && info.node.props.parent
      ? info.node.props.parent
      : info.node.props.item;
    const page = info.dragNode.props.item;
    console.log(page, info.dragNode.props);
    const pageId = page.pageId || page.id; // get real pageId in case of binding

    // Get all IDs of children in order
    const childIds = (parent.children || []).map(child => child.id).filter(x => x !== page.id);
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
  getNodeIcon = (item) => {
    if (item.sorting && item.sorting[0] === '+') {
      return <a href="javascript:;"><Icon type="arrow-up" /></a>;
    } else if (item.sorting && item.sorting[0] === '-') {
      return <a href="javascript:;"><Icon type="arrow-down" /></a>;
    } else if (item.slug === '/') {
      return <a href="javascript:;"><Icon type="home" /></a>;
    } else if (item.type === 'ALIAS') {
      return <a href="javascript:;"><Icon type="copy" /></a>;
    } else if (item.type === 'LINK') {
      return <a href="javascript:;"><Icon type="link" /></a>;
    } else if (item.type === 'PLACEHOLDER') {
      return <a href="javascript:;"><Icon type="pause" /></a>;
    } else if (item.type === 'MENU') {
      return <a href="javascript:;"><Icon type="database" /></a>;
    } return null;
  };
  loop = (data, parent) => data.map((item) => {
    const { query } = this.props;
    const children = item.children && item.children.length ? this.loop(item.children, item) : undefined;
    return (
      <Tree.Node key={item.pathname || item.id} item={item} parent={parent} title={
        <Tree.Title>
          <Link to={{ pathname: item.pathname, query }}>
            {item.name}
          </Link>
          {this.getNodeIcon(item)}
          {item.bindingId && <Link to={{ query: { ...query, '@page': undefined, [`@${item.binding.split(' ')[0]}`]: item.bindingId } }}>
            <Icon type="share-alt" />
          </Link>}
          <Link to={{ pathname: item.pathname, query: { ...query, '@page': item.pageId || item.id } }}>
            <Icon type="edit" />
          </Link>
        </Tree.Title>
      }>
        {children}
      </Tree.Node>
    );
  })
  render() {
    const { items, pathname, query } = this.props;
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
