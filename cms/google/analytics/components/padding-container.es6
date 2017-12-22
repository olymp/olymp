import { createComponent } from 'react-fela';

export default createComponent(
  ({ theme }) => ({
    paddingTop: theme.space2,
    paddingBottom: theme.space1,
    paddingX: theme.space3,
    height: '100%',
  }),
  'div',
  []
);
