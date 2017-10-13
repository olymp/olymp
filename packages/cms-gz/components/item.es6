import { createComponent } from 'olymp-fela';

export default createComponent(
  ({
    theme,
    color = theme.color,
    top = theme.space3,
    bottom = theme.space3,
  }) => ({
    width: '100%',
    marginTop: top,
    marginBottom: bottom,
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
  ({ top, bottom, ...p }) => Object.keys(p)
);
