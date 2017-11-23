import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ theme, color }) => ({
    height: 80,
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    fontSize: '120%',
    marginLeft: -9,
    paddingLeft: 9,
    marginRight: -10,
    paddingRight: 10,
    marginTop: `-${theme.space2}`,
    paddingTop: theme.space2,
    marginBottom: theme.space2,
    paddingBottom: theme.space2,
    backgroundColor: (color === true && theme.color) || theme[color] || color,
    '> svg': {
      size: 40,
    },
    '> img': {
      size: 50,
      borderRadius: theme.borderRadius,
    },
  }),
  'div',
);
