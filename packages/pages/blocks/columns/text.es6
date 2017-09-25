import { createComponent } from 'olymp-fela';

const Text = createComponent(
  ({ theme }) => ({
    paddingX: theme.space3,
    paddingY: theme.space2,
  }),
  'div',
  p => Object.keys(p),
);

export default {
  type: 'Pages.Template.Columns.Column.Text',
  isVoid: false,
  kind: 'block',
  label: 'Text',
  component: Text,
};
