import React, { Component } from 'react';
import { Link, graphql, gql, withAuth, withRouter } from 'olymp';
import { Tree, Tabs, Button, Form, Input, Icon, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import { onEnterFocus, onEnterOk, layout, onError, onSuccess } from 'olymp/ui';
import { Panel } from 'olymp/ui';
import { queryPage, mutatePage, queryPages } from './gql';
import Slate from './editor';

export class Pages extends Component {
  state = {
    expandedKeys: [],
  };
  renderNode = item => {
    return (
      <span>
        <Link to={{ pathname: item.slug }}>
          {item.name}
        </Link>
        <Link to={{ pathname: item.slug, query: { '@page': 'edit' } }}>
          <Icon type="edit" />
        </Link>
      </span>
    );
  }
  render() {
    const { items } = this.props;
    const { expandedKeys } = this.state;
    const loop = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <Tree.TreeNode key={item.id} title={this.renderNode(item)}>{loop(item.children)}</Tree.TreeNode>;
      } return <Tree.TreeNode key={item.id} title={this.renderNode(item)} />;
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
export const PagesGql = queryPages(Pages);
