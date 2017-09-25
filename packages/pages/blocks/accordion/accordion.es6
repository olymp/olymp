import React from 'react';
import { Container } from 'olymp-fela';
import { createBlockList } from 'olymp-slate';
import Label from './label';
import Text from './text';

export default {
  type: 'Pages.Template.Accordion',
  isVoid: false,
  kind: 'block',
  label: 'Akkordeon',
  category: 'Text',
  component: ({ className, attributes, children }) => (
    <Container className={className} {...attributes}>
      {children}
    </Container>
  ),
  defaultNodes: () => createBlockList([Label, Text]),
  styles: ({ theme }) => ({
    marginBottom: theme.space3,
  }),
};
