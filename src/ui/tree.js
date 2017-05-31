import React from 'react';
import { Tree as AntTree } from 'antd';
import { styled } from 'olymp';

const Tree = styled(() => ({
  paddingRight: 8,
  paddingLeft: 13,
  paddingY: 0,
  '& .anticon': {
    marginLeft: 3,
  },
  '& li': {
    padding: 0,
    '> span.ant-tree-switcher': {
      position: 'relative',
      width: 0,
      onAfter: {
        left: -6,
        top: 1,
        position: 'absolute',
      },
    },
    '> span.ant-tree-switcher:after': {
      left: -10,
      top: -1,
      position: 'absolute',
    },
    '> span.ant-tree-node-content-wrapper': {
      width: '100%',
    },
  },
}), AntTree, p => p);

Tree.Title = styled(({ theme }) => ({
  display: 'flex',
  '> a:first-child': {
    flex: 1,
  },
  '> a': {
    color: theme.dark1,
  },
}), ({ className, children }) => (
  <span className={className}>
    {children}
  </span>
), p => p);

Tree.Node = AntTree.TreeNode;

export default Tree;
