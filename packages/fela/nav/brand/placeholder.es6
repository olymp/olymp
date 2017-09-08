import { createComponent } from 'react-fela';

export default createComponent(
  ({ theme }) => ({
    visibility: 'hidden',
    paddingX: theme.space3,
    '> *': {
      marginX: `-${theme.space3}`,
    },
  }),
  'div',
  ['className']
);
