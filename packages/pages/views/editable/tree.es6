import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'olymp-router';
import { createComponent } from 'olymp-fela';
import { Icon, Tooltip, Tree } from 'antd';
import { lowerCase } from 'lodash';
import { reorderPage, movePage } from '../../gql';

const Button = createComponent(
  ({ theme, showOnHover }) => ({
    borderRadius: '50%',
    size: 23,
    textAlign: 'center',
    marginLeft: 3,
    display: showOnHover && 'none',
    '> i': {
      color: theme.color,
      margin: '0 !important',
    },
  }),
  ({ className, to, type }) => (
    <Link to={to} className={className}>
      <Icon type={type} />
    </Link>
  ),
  p => Object.keys(p),
);

const Badge = createComponent(
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
  ({ className, type, tooltip }) => (
    <Tooltip title={tooltip}>
      <a href="javascript:;" className={className}>
        <Icon type={type} />
      </a>
    </Tooltip>
  ),
  p => Object.keys(p),
);

@withRouter
@reorderPage
@movePage
class Pages extends Component {
  onDrop = (info) => {
    const { reorder, move } = this.props;
    const parent =
      info.dropToGap && info.node.props.parent ? info.node.props.parent : info.node.props.item;
    const page = info.dragNode.props.item;
    const pageId = page.pageId || page.id; // get real pageId in case of binding

    // Get all IDs of children in order
    const childIds = (parent.children || []).map(child => child.id).filter(x => x !== page.id);
    childIds.splice(info.dropPosition, 0, page.id);

    // Check if new parent is itself??
    if (parent.id === pageId) {
      return;
    }
    if (parent.id !== page.parentId) {
      // parent changed
      move({
        variables: {
          id: pageId,
          parentId: parent.id,
          sorting: childIds,
        },
      });
    } else {
      // just moved inside existing parent
      // Disallow sort if parent has fixed sorting
      if (parent.sorting && ['+', '-'].includes(parent.sorting[0])) {
        return;
      }
      reorder({
        variables: {
          id: parent.id,
          sorting: childIds,
        },
      });
    }
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

  getNodeIcon = (item) => {
    if (item.sorting && item.sorting[0] === '+') {
      return <Badge key="badge" type="arrow-up" tooltip="Austeigend sortiert" />;
    } else if (item.sorting && item.sorting[0] === '-') {
      return <Badge key="badge" type="arrow-down" tooltip="Absteigend sortiert" />;
    } else if (item.slug === '/') {
      return <Badge key="badge" type="home" tooltip="Startseite" />;
    } else if (item.type === 'ALIAS') {
      return <Badge key="badge" type="fork" tooltip="Alias" />;
    } else if (item.type === 'LINK') {
      return <Badge key="badge" type="link" tooltip="Link" />;
    } else if (item.type === 'PLACEHOLDER') {
      return <Badge key="badge" type="file" tooltip="Platzhalter" />;
    } else if (item.type === 'PAGE') {
      return <Badge key="badge" type="file-text" tooltip="Seite" />;
    } else if (item.type === 'MENU') {
      return <Badge key="badge" type="bars" tooltip="Menü" />;
    }
    return null;
  };

  getItems = (data, parent) =>
    data.map((item) => {
      const { query } = this.props;
      const children =
        item.children && item.children.length ? this.getItems(item.children, item) : undefined;
      const isBinding = item.bindingId && item.binding && item.binding.type;
      const route =
        item.pathname && item.type === 'PAGE'
          ? {
            pathname: item.pathname,
            query: {
              ...query,
              parent: undefined,
            },
          }
          : {
            pathname: `/page_id/${item.pageId || item.id}`,
            query: {
              ...query,
              parent: undefined,
            },
          };
      const bindingRoute = {
        pathname: item.pathname,
        query: {
          ...query,
          parent: undefined,
          modal: null,
          [`@${lowerCase(item.binding && item.binding.type)}`]: item.bindingId,
        },
      };

      return (
        <Tree.TreeNode
          key={item.id || item.pathname}
          item={item}
          parent={parent}
          title={[
            <Link key="link" to={isBinding ? bindingRoute : route}>
              {item.name || 'Kein Name'}
            </Link>,
            <Button
              key="button"
              to={{ pathname: '/__new', query: { '@page': 'form', '@parent': item.id } }}
              type="plus"
              showOnHover
            />,
            isBinding && <Button key="button2" to={route} type="api" />,
            this.getNodeIcon(item),
          ]}
        >
          {children}
        </Tree.TreeNode>
      );
    });

  render() {
    const { items, selected } = this.props;

    if (items.length === 0) {
      return null;
    }

    return (
      <Tree
        selectedKeys={selected}
        draggable
        className="draggable-tree"
        defaultExpandedKeys={items.filter((x, i) => i === 0).map(item => item.id || item.pathname)}
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
      >
        {this.getItems(items)}
      </Tree>
    );
  }
}
Pages.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.arrayOf(PropTypes.string),
};
Pages.defaultProps = {
  items: [],
  selected: [],
};
export default Pages;
