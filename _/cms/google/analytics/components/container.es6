import { createComponent } from 'react-fela';

export default createComponent(
  ({ theme }) => ({
    position: 'relative',
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
    '> div': {
      flex: '1 1 0%',
      overflow: 'auto',
    },
    '> div:not(:first-of-type)': {
      marginTop: theme.space2,
    },
  }),
  'div',
  []
);
