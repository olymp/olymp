import Nodes from 'olymp-slate/defaults/nodes';

export default {
  type: 'paragraph',
  styles: ({ theme }) => ({
    marginBottom: theme.space2,
  }),
  component: Nodes.paragraph,
};
