import React from 'react';
import { createComponent } from 'olymp-fela';
import { withQueryState } from 'olymp-router';

const Text = createComponent(
  ({ theme, isOpen }) => ({
    /* marginY: theme.space3,
    paddingRight: theme.space3, */
    display: !isOpen && 'none',
  }),
  'div',
  ({ isOpen, ...p }) => Object.keys(p),
);

export default {
  type: 'accordionText',
  isVoid: false,
  kind: 'block',
  label: 'Text',
  component: withQueryState(
    'accordion',
  )(({ className, attributes, children, accordion, parent }) => (
    <Text className={className} isOpen={accordion === parent.key} {...attributes}>
      {children}
    </Text>
  )),
};
