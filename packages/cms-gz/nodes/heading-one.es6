import Nodes from 'olymp-slate/defaults/nodes';

export default {
  type: 'heading-one',
  styles: ({ theme }) => ({
    textAlign: 'left',
    position: 'relative',
    marginY: theme.space3,
    onAfter: {
      content: '""',
      bottom: -1,
      display: 'block',
      overflow: 'hidden',
      height: 1,
      left: 0,
      position: 'absolute',
      minWidth: 75,
      width: '100%',
      background: `linear-gradient(to right, ${theme.color}, #FFF)`,
    },
  }),
  component: Nodes['heading-one'],
};
