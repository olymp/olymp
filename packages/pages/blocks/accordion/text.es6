import React from 'react';
import { createComponent } from 'olymp-fela';
import { withQueryParam } from 'olymp-router';
import { Text } from 'slate';

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
  defaultText: 'Text',
  component: withQueryParam(
    'accordion',
  )(({ className, attributes, children, accordion, parent }) => (
    <Text className={className} isOpen={accordion === parent.data.get('id')} {...attributes}>
      {children}
    </Text>
  )),
};
