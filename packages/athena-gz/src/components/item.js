import { createSkeletorComponent } from 'olymp-skeletor';

export default createSkeletorComponent(
  ({
    theme,
    skeletor,
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
    ...skeletor.text(),
  }),
  'div',
  ({ top, bottom, ...p }) => Object.keys(p)
);
