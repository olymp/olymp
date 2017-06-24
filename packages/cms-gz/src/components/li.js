import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ theme }) => ({
    paddingBottom: theme.space2,
    '> a': {
      color: theme.dark2,
      onHover: {
        color: theme.dark1,
      },
    },
    ':last-of-type': {
      paddingBottom: 0,
    },
  }),
  'li',
  p => Object.keys(p)
);
