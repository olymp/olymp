import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ theme }) => ({
    paddingBottom: theme.space2,
    clearfix: true,
    '& a': {
      color: theme.color,
      onHover: {
        textDecoration: 'underline',
      },
    },
    ':last-of-type': {
      paddingBottom: 0,
    },
  }),
  'li',
  p => Object.keys(p)
);
