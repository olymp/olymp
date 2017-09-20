import React from 'react';
import { createComponent } from 'olymp-fela';
import { withQueryState } from 'olymp-router';

const Text = createComponent(
  ({ theme, isOpen }) => ({
    borderLeft: `3px solid ${theme.color}`,
    marginY: theme.space2,
    paddingLeft: theme.space3,
    display: !isOpen && 'none',
  }),
  'p',
  p => Object.keys(p)
);

export default {
  key: 'Pages.Template.Accordion.Text',
  label: 'Text',
  editable: true,
  component: withQueryState(
    'accordion'
  )(({ className, attributes, children, accordion, parent }) => (
    <Text
      className={className}
      isOpen={accordion === parent.key}
      {...attributes}
    >
      {children}
    </Text>
  )),
};
