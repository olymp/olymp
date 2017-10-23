import Nodes from 'olymp-slate/defaults/nodes';

export default {
  type: 'link',
  styles: ({ theme }) => ({
    color: theme.color,
  }),
  component: Nodes.link,
};
