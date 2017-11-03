import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withPropsOnChange, withState } from 'recompose';
import { unflatten } from 'olymp-utils';
import { Link, withRouter } from 'olymp-router';
import { createComponent } from 'olymp-fela';
import { Icon, Tooltip, Tree } from 'antd';
import { lowerCase, orderBy, sortBy } from 'lodash';
import { reorderPage } from '../../gql/mutation';
import { queryPages } from '../../gql/query';

const StyledTree = createComponent(
  ({ theme }) => ({
    paddingRight: 8,
    paddingLeft: 13,
    paddingY: 0,
    '& .ant-tree-title': {
      hasFlex: {
        display: 'flex',
        '> a:first-child': {
          flex: '1 1 0%',
        },
      },
      '> a': {
        // color: disabled ? theme.dark3 : theme.dark1,
        color: theme.dark1,
      },
    },
    '& .anticon': {
      marginLeft: 3,
    },
    '& li': {
      padding: 0,
      paddingTop: '0.7rem !important',
      position: 'relative',
      '> .ant-tree-switcher': {
        position: 'absolute',
        left: -10,
        top: 9,
        width: 0,
        zIndex: 1,
      },
      '> .ant-tree-node-content-wrapper': {
        width: '100%',
        paddingLeft: 10,
      },
    },
  }),
  Tree,
  p => Object.keys(p),
);

const Button = createComponent(
  ({ theme }) => ({
    borderRadius: '50%',
    size: 23,
    textAlign: 'center',
    marginLeft: 3,
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
      <a className={className}>
        <Icon type={type} />
      </a>
    </Tooltip>
  ),
  p => Object.keys(p),
);

@withRouter
@reorderPage
@queryPages
@withPropsOnChange(['pageList'], ({ pageList }) => {
  const flatNavigation = [];
  const items = unflatten(pageList, {
    pathProp: 'pathname',
    sort: (children, parent) => orderBy(children, ['order'], ['asc']),
    setPath: (current, { slug, ...rest }) => {
      const pathname = `${current || ''}${slug || ''}`.replace('//', '/');
      flatNavigation.push({ ...rest, slug, pathname });
      return pathname;
    },
  });
  return {
    items,
  };
})
@withState('expandedKeys', 'setExpanded', [])
class Pages extends Component {
  onDrop = info => {
    const { reorder, items } = this.props;
    const page = info.dragNode.props.item;
    let parent =
      info.dropToGap && info.node.props.parent
        ? info.node.props.parent
        : info.node.props.item;
    if (parent && parent.id === page.id) {
      parent = null;
    }

    // Get all IDs of children in order
    const childIds = (parent ? parent.children || [] : items)
      .map(child => child.id)
      .filter(x => x !== page.id);
    childIds.splice(info.dropPosition, 0, page.id);

    // Check if new parent is itself??
    if (parent && parent.sorting && ['+', '-'].includes(parent.sorting[0])) {
      return;
    }
    // parent changed
    reorder({
      variables: {
        ids: childIds,
        parentId: parent ? parent.id : null,
      },
    });
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

  getNodeIcon = item => {
    if (item.sorting && item.sorting[0] === '+') {
      return (
        <Badge key="badge" type="arrow-up" tooltip="Austeigend sortiert" />
      );
    } else if (item.sorting && item.sorting[0] === '-') {
      return (
        <Badge key="badge" type="arrow-down" tooltip="Absteigend sortiert" />
      );
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
    data.map(item => {
      const { query } = this.props;
      const children =
        item.children && item.children.length
          ? this.getItems(item.children, item)
          : undefined;
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
              to={{
                pathname: '/__new',
                query: { '@page': 'form', '@parent': item.id },
              }}
              type="plus"
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
    const { items, selected, expandedKeys, setExpanded } = this.props;

    if (items.length === 0) {
      return null;
    }

    return (
      <StyledTree
        selectedKeys={selected}
        draggable
        className="draggable-tree"
        expandedKeys={expandedKeys}
        onExpand={x => setExpanded(x)}
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
      >
        {this.getItems(items)}
      </StyledTree>
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

/*
items
          .filter((x, i) => i === 0)
          .map(item => item.id || item.pathname)
*/
