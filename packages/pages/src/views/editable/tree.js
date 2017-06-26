import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'olymp';
import { createComponent } from 'olymp-fela';
import { Tree } from 'olymp-ui';
import { Icon, Tooltip } from 'antd';
import { lowerCase } from 'lodash';
import { reorderPage, movePage } from '../../gql';

@withRouter
@reorderPage
@movePage
class Pages extends Component {
  onDrop = ({ node, dragNode, dropPosition, dropToGap }) => {
    // reorder or move nodes on drop
    const { items, reorder, move } = this.props;
    const pageId = dragNode.props.eventKey;
    const positions = node.props.pos.split('-');
    let childIds = [];
    let parent;
    positions.shift();

    if (dropToGap) {
      const placeBefore =
        dropPosition - Number(positions[positions.length - 1]) === -1;
      const position = !placeBefore
        ? dropPosition
        : Number(positions[positions.length - 1]);
      positions.pop();
      parent = this.getParent(items, positions);
      childIds = parent.children
        .filter(child => child.id !== pageId)
        .map(child => child.id);
      childIds.splice(position, 0, pageId);
    } else {
      parent = this.getParent(items, positions);
      childIds = parent.children
        .filter(child => child.id !== pageId)
        .map(child => child.id);
      childIds.push(pageId);
    }

    if (pageId !== parent.id) {
      move({
        variables: {
          id: pageId,
          parentId: parent.id,
        },
      });
      if (parent.id) {
        reorder({
          variables: {
            id: parent.id,
            sorting: childIds.join(','),
          },
        });
      }
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
      return <Badge type="file" tooltip="Platzhalter" />;
    } else if (item.type === 'PAGE') {
      return <Badge type="file-text" tooltip="Seite" />;
    } else if (item.type === 'MENU') {
      return <Badge type="bars" tooltip="Menü" />;
    }
    return null;
  };

  loop = (data, parent) =>
    data.map((item) => {
      const { query } = this.props;
      const children = item.children && item.children.length
        ? this.loop(item.children, item)
        : undefined;

      return (
        <Tree.Node
          key={item.id || item.pathname}
          item={item}
          parent={parent}
          title={
            <Title disabled={item.state === 'DRAFT'}>
              <Link
                to={{
                  pathname: item.pathname,
                  query: {
                    ...query,
                    '@page': item.pageId || item.id,
                    parent: undefined,
                  },
                }}
              >
                {item.name || 'Kein Name'}
              </Link>
              <Button
                to={{ query: { ...query, '@page': 'new', parent: item.id } }}
                type="plus"
                showOnHover
              />
              {item.bindingId &&
                item.binding &&
                item.binding.type &&
                <Button
                  to={{
                    query: {
                      ...query,
                      '@page': undefined,
                      parent: undefined,
                      [`@${lowerCase(item.binding.type)}`]: item.bindingId,
                    },
                  }}
                  type="api"
                />}
              {this.getNodeIcon(item)}
            </Title>
          }
        >
          {children}
        </Tree.Node>
      );
    });

  render() {
    const { items, selected, pathname, query } = this.props;

    return (
      <Tree
        selectedKeys={selected}
        draggable
        className="draggable-tree"
        defaultExpandedKeys={items.map(item => item.id || item.pathname)}
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
  selected: PropTypes.arrayOf(PropTypes.string),
};
Pages.defaultProps = {
  items: [],
  selected: [],
};
export default Pages;

const Title = createComponent(
  ({ theme }) => ({
    onHover: {
      '> a': {
        display: 'initial',
      },
    },
  }),
  Tree.Title,
  p => Object.keys(p)
);

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
    onHover: {
      backgroundColor: theme.color,
      '> i': {
        color: theme.light,
      },
    },
  }),
  ({ className, to, type }) =>
    (<Link to={to} className={className}>
      <Icon type={type} />
    </Link>),
  p => Object.keys(p)
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
  ({ className, type, tooltip }) =>
    (<Tooltip title={tooltip}>
      <a href="javascript:;" className={className}>
        <Icon type={type} />
      </a>
    </Tooltip>),
  p => Object.keys(p)
);
