import React from 'react';
import { Container } from 'olymp-fela';
import { createBlockList } from 'olymp-slate';
import Label from './label';
import Text from './text';

export default {
  key: 'Pages.Template.Accordion',
  label: 'Akkordeon',
  category: 'Text',
  editable: true,
  component: ({ className, attributes, children }) => (
    <Container className={className} {...attributes}>
      {children}
    </Container>
  ),
  defaultNodes: () => createBlockList([Label, Text]),
};
