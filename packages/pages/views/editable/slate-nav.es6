import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'olymp-router';
import { createComponent } from 'olymp-fela';
import { Tree } from 'olymp-ui';
import { Icon, Tooltip } from 'antd';
import immutable from 'olymp-utils/immutable';
import { withBlockTypes } from 'olymp-slate';

const Title = createComponent(
  ({ theme }) => ({
    onHover: {
      '> a': {
        display: 'initial',
      },
    },
  }),
  p => <Tree.Title {...p} />,
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
  ({ className, type, tooltip, onClick }) => (
    <Tooltip title={tooltip}>
      <a href="javascript:;" className={className} onClick={onClick}>
        <Icon type={type} />
      </a>
    </Tooltip>
  ),
  p => Object.keys(p),
);

@withBlockTypes
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

  addBlock = (path) => {
    console.log('ADD', path);
  };

  deleteBlock = (path) => {
    const { onChange, value } = this.props;
    onChange(
      immutable(value)
        .del(`nodes.${path.join('.nodes.')}`)
        .value(),
    );
  };

  getItems = (block, parent, path = []) => {
    const blockTypes = this.props.blockTypes;
    if (!block.nodes || !block.nodes.length) {
      return undefined;
    }
    return block.nodes.map((item, index) => {
      const { query } = this.props;

      const newPath = [...path, index];
      let label;
      if (blockTypes[item.type]) {
        label = (blockTypes[item.type].slate && blockTypes[item.type].slate.label) || item.type;
      } else if (item.type === 'paragraph') {
        label = 'Paragraph';
      } else if (item.kind === 'text') {
        label = 'Text';
      } else {
        label = 'Unbekannt';
      }
      return (
        <Tree.Node
          key={newPath.join('-')}
          item={item}
          parent={parent}
          path={newPath}
          title={
            <Title disabled={false}>
              <a href="javascript:;">{label}</a>
              <Badge onClick={() => this.addBlock(newPath)} type="plus" tooltip="Umwandeln" />
              <Badge onClick={() => this.deleteBlock(newPath)} type="delete" tooltip="Löschen" />
            </Title>
          }
        >
          {this.getItems(item, block, newPath)}
        </Tree.Node>
      );
    });
  };

  render() {
    const { value, selected } = this.props;

    return (
      <Tree
        selectedKeys={selected}
        draggable
        className="draggable-tree"
        // defaultExpandedKeys={items.filter((x, i) => i === 0).map(item => item.id || item.pathname)}
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
      >
        {this.getItems(value)}
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
