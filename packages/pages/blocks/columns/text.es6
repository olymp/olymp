import React from 'react';
import { createComponent } from 'olymp-fela';

const Text = createComponent(
  ({ theme, parent }) => ({
    paddingX: theme.space3,
    paddingY: parent.data.get('bordered', true) && theme.space2,
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
  defaultNodes: ['paragraph'],
  label: 'Text',
  component: Text,
};
