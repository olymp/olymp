import { createComponent, border } from 'olymp-fela';

export default createComponent(
  ({ theme }) => ({
    width: '100%',
    border: 'none',
    borderTop: border(theme, theme.dark4),
  }),
  'hr',
  [],
);
