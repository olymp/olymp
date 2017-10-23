import Nodes from 'olymp-slate/defaults/nodes';

export default {
  type: 'bulleted-list-item',
  styles: ({ theme }) => ({
    marginY: theme.space2,
    onBefore: {
      content: '"■"',
      color: theme.color,
      position: 'absolute',
      left: `-${theme.space2}`,
    },
  }),
  component: Nodes['bulleted-list-item'],
};
