import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ theme, color = theme.color }) => ({
    width: '100%',
    marginBottom: '1.5rem',
    clearfix: true,
    '& a': {
      color,
      onHover: {
        textDecoration: 'underline',
      },
    },
    ':last-of-type': {
      marginBottom: 0,
    },
  }),
  'div',
  p => Object.keys(p)
);
