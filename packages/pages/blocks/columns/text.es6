import React from 'react';
import { createComponent } from 'olymp-fela';

const Text = createComponent(
  ({ theme }) => ({
    paddingX: theme.space3,
    paddingY: theme.space2,
  }),
  ({ attributes, className, children }) => (
    <div {...attributes} className={className}>
      {children}
    </div>
  ),
  [],
);

export default {
  type: 'Pages.Template.Columns.Column.Text',
  isVoid: false,
  kind: 'block',
  label: 'Text',
  component: Text,
};
