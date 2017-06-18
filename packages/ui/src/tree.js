import React from 'react';
import { Tree as AntTree } from 'antd';
import { createComponent } from 'olymp-fela';

const Tree = createComponent(
  () => ({
    paddingRight: 8,
    paddingLeft: 13,
    paddingY: 0,
    '& .anticon': {
      marginLeft: 3,
    },
    '& li': {
      padding: 0,
      paddingTop: '0.7rem !important',
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
        paddingLeft: 10,
      },
    },
  }),
  AntTree,
  p => Object.keys(p)
);

Tree.Title = createComponent(
  ({ theme, disabled }) => ({
    display: 'flex',
    '> a:first-child': {
      flex: 1,
    },
    '> a': {
      color: disabled ? theme.dark3 : theme.dark1,
    },
  }),
  ({ className, children }) =>
    (<span className={className}>
      {children}
    </span>),
  p => Object.keys(p)
);

Tree.Node = AntTree.TreeNode;

export default Tree;
