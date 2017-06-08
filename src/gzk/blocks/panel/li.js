import { createComponent } from 'olymp-fela';

export default createComponent(({ theme }) => ({
  paddingBottom: theme.space2,
  ':last-of-type': {
    paddingBottom: 0,
  },
}), 'li', p => Object.keys(p));
