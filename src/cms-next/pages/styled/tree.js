import React from 'react';
import { Tree as AntTree, Icon } from 'antd';
import { styled, Link } from 'olymp';

export const Tree = styled(({ }) => ({
  '& li': {
    '> span': {
      position: 'relative',
      width: 0,
      onAfter: {
        left: -4,
        top: 1,
        position: 'absolute',
      },
    },
    '> a': {
      width: '100%',
    },
  },
}), AntTree, p => p);
Tree.TreeNode = AntTree.TreeNode;

const getIcon = (item) => {
  if (item.sorting && item.sorting[0] === '+') {
    return <span><Icon type="arrow-up" /> </span>;
  } else if (item.sorting && item.sorting[0] === '-') {
    return <span><Icon type="arrow-down" /> </span>;
  } else if (item.slug === '/') {
    return <span><Icon type="home" /> </span>;
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
    {item.bindingId && <Link to={{ query: { '@artikel': item.bindingId } }}>
      <Icon type="share-alt" />
    </Link>}
    <Link to={{ pathname: item.slug, query: { '@page': item.pageId || item.id } }}>
      <Icon type="edit" />
    </Link>
  </span>
), p => p);
