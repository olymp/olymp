import React from 'react';
import { Tree as AntTree, Icon } from 'antd';
import { styled, Link } from 'olymp';

export const Tree = styled(({ }) => ({
  '& li': {
    '> .ant-tree-switcher': {
      position: 'relative',
      width: 0,
      onAfter: {
        left: -4,
        top: 1,
        position: 'absolute',
      },
    },
    '> .ant-tree-switcher:after': {
      left: -4,
      top: 1,
      position: 'absolute',
    },
    '> .ant-tree-node-content-wrapper': {
      width: '100%',
    },
  },
}), AntTree, p => p);
Tree.TreeNode = AntTree.TreeNode;

const getIcon = (item) => {
  if (item.sorting && item.sorting[0] === '+') {
    return <a href="javascript:;"><Icon type="arrow-up" /></a>;
  } else if (item.sorting && item.sorting[0] === '-') {
    return <a href="javascript:;"><Icon type="arrow-down" /></a>;
  } else if (item.slug === '/') {
    return <a href="javascript:;"><Icon type="home" /></a>;
  } else if (item.aliasId) {
    return <a href="javascript:;"><Icon type="copy" /></a>;
  } else if (item.href) {
    return <a href="javascript:;"><Icon type="link" /></a>;
  } return null;
};
export const TreeNode = styled(({ }) => ({
  display: 'flex',
  '> a:first-child': {
    flex: 1,
  },
}), ({ className, item, query }) => (
  <span className={className}>
    <Link to={{ pathname: item.slug, query }}>
      {item.name}
    </Link>
    {getIcon(item)}
    {item.bindingId && <Link to={{ query: { ...query, '@page': undefined, [`@${item.binding.split(' ')[0]}`]: item.bindingId } }}>
      <Icon type="share-alt" />
    </Link>}
    <Link to={{ pathname: item.slug, query: { ...query, '@page': item.pageId || item.id } }}>
      <Icon type="edit" />
    </Link>
  </span>
), p => p);
