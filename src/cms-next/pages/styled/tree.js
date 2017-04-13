import React from 'react';
import { Tree as AntTree, Icon } from 'antd';
import { styled, Link } from 'olymp';

export const Tree = styled(({ }) => ({
  '& li': {
    position: 'relative',
    // display: 'flex',
    '> span': {
      left: -4,
      top: 11,
      display: 'none',
      position: 'absolute',
    },
    '> a': {
      width: '100%',
    },
  },
}), AntTree, p => p);
Tree.TreeNode = AntTree.TreeNode;

const getIcon = (item) => {
  if (item.bindingId) {
    return <span><Icon type="share-alt" /> </span>;
  } else if (item.sorting && item.sorting[0] === '+') {
    return <span><Icon type="arrow-up" /> </span>;
  } else if (item.sorting && item.sorting[0] === '-') {
    return <span><Icon type="arrow-down" /> </span>;
  } return null;
}
export const TreeNode = styled(({ }) => ({
  display: 'flex',
  '> a:first-child': {
    flex: 1,
  },
}), ({ className, item }) => (
  <span className={className}>
    <Link to={{ pathname: item.slug }}>
      {getIcon(item)}{item.name}
    </Link>
    <Link to={{ pathname: item.slug, query: { '@page': 'edit' } }}>
      <Icon type="edit" />
    </Link>
  </span>
), p => p);
