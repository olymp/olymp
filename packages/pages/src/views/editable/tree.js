import React, { Component, PropTypes } from 'react';
import { withRouter, Link } from 'olymp';
import { createComponent } from 'olymp-fela';
import { Tree } from 'olymp-ui';
import { Icon, Tooltip } from 'antd';
import { queryPages, reorderPage, movePage } from '../../gql';

@withRouter
@reorderPage
@movePage
class Pages extends Component {
  state = {
    expandedKeys: [],
  };

  onDrop = (info) => { // reorder or move nodes on drop
    const { reorder, move } = this.props;
    const parent = info.dropToGap && info.node.props.parent
      ? info.node.props.parent
      : info.node.props.item;
    const page = info.dragNode.props.item;
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
      return <Badge type="arrow-up" tooltip="Austeigend sortiert" />;
    } else if (item.sorting && item.sorting[0] === '-') {
      return <Badge type="arrow-down" tooltip="Absteigend sortiert" />;
    } else if (item.slug === '/') {
      return <Badge type="home" tooltip="Startseite" />;
    } else if (item.type === 'ALIAS') {
      return <Badge type="fork" tooltip="Alias" />;
    } else if (item.type === 'LINK') {
      return <Badge type="link" tooltip="Link" />;
    } else if (item.type === 'PLACEHOLDER') {
      return <Badge type="ellipsis" tooltip="Platzhalter" />;
    } else if (item.type === 'MENU') {
      return <Badge type="bars" tooltip="Menü" />;
    } return null;
  };

  loop = (data, parent) => data.map((item) => {
    const { query } = this.props;
    const children = item.children && item.children.length ? this.loop(item.children, item) : undefined;
    return (
      <Tree.Node
        key={item.id || item.pathname}
        item={item}
        parent={parent}
        title={
          <Tree.Title disabled={item.state === 'DRAFT'}>
            <Link to={{ pathname: item.pathname, query: { ...query, '@page': item.pageId || item.id } }}>
              {item.name}
            </Link>
            {this.getNodeIcon(item)}
            {item.bindingId && (
              <Button
                to={{ query: { ...query, '@page': undefined, [`@${item.binding.split(' ')[0]}`]: item.bindingId } }}
                type="api"
              />
            )}
          </Tree.Title>
        }
      >
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
Pages.WithData = queryPages(Pages);
export default Pages;

const Button = createComponent(({ theme }) => ({
  borderRadius: '50%',
  size: 23,
  textAlign: 'center',
  marginLeft: 3,
  '> i': {
    color: theme.color,
    margin: '0 !important',
  },
  onHover: {
    backgroundColor: theme.color,
    '> i': {
      color: theme.light,
    },
  }
}), ({ className, to, type }) => (
  <Link to={to} className={className}>
    <Icon type={type} />
  </Link>
), p => Object.keys(p));

const Badge = createComponent(({ theme }) => ({
  borderRadius: '50%',
  size: 23,
  textAlign: 'center',
  marginLeft: 3,
  '> i': {
    color: theme.dark3,
    margin: '0 !important',
  },
}), ({ className, type, tooltip }) => (
  <Tooltip title={tooltip}>
    <a href="javascript:;" className={className}>
      <Icon type={type} />
    </a>
  </Tooltip>
), p => Object.keys(p));
