import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ theme }) => ({
    height: 80,
    paddingBottom: theme.space3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
