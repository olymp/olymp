import Nodes from 'olymp-slate/defaults/nodes';

export default {
  type: 'block-quote',
  styles: ({ theme }) => ({
    display: 'block',
    position: 'relative',
    padding: theme.space2,
    paddingLeft: theme.space4,
    marginX: 'auto',
    marginY: theme.space2,
    fontFamily: 'Raleway, sans-serif',
    fontSize: '1.5rem',
    lineHeight: 1.2,
    borderLeft: `3px solid ${theme.color}`,
    color: theme.dark2,
    onBefore: {
      content: '"\\201C"',
      fontFamily: 'Times New Roman',
      fontSize: '3rem',
      fontWeight: 700,
      color: theme.dark3,
      position: 'absolute',
      left: 8,
      top: 0,
    },
  }),
  component: Nodes['block-quote'],
};
