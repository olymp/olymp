import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ theme, color = theme.color }) => ({
    marginBottom: '1.5rem',
    clearfix: true,
    '& a': {
      color,
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
