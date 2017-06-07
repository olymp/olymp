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
    '> .ant-tree-switcher': {
      position: 'absolute',
      onAfter: {
        left: -8,
        top: 2,
        position: 'absolute',
      },
    },
    '> .ant-tree-node-content-wrapper': {
      width: '100%',
    },
  },
}), AntTree, p => p);

Tree.Title = styled(({ theme, disabled }) => ({
  display: 'flex',
  '> a:first-child': {
    flex: 1,
  },
  '> a': {
    color: disabled ? theme.dark3 : theme.dark1,
  },
}), ({ className, children }) => (
  <span className={className}>
    {children}
  </span>
), p => p);

Tree.Node = AntTree.TreeNode;

export default Tree;
