import { Tree as AntTree } from 'antd';

export const Tree = styled(({ }) => ({
  '> li': {
    display: 'flex',
    '> span': {
      display: 'none',
    },
    '> a': {
      width: '100%',
    },
  },
}), Tree, p => p);
Tree.TreeNode = AntTree.TreeNode;

export const TreeNode = styled(({ }) => ({
  display: 'flex',
  '> a:first-child': {
    flex: 1,
  },
}), ({ className, item }) => (
  <span className={className}>
    <Link to={{ pathname: item.slug }}>
      {item.name}
    </Link>
    <Link to={{ pathname: item.slug, query: { '@page': 'edit' } }}>
      <Icon type="edit" />
    </Link>
  </span>
), p => p);
