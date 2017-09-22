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
  key: 'Pages.Template.Columns.Column.Text',
  label: 'Text',
  component: Text,
  editable: true,
};
