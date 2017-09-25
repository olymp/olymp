import React from 'react';
import { Container } from 'olymp-fela';
import Label from './label';
import Text from './text';

export default {
  type: 'accordion',
  isVoid: false,
  kind: 'block',
  label: 'Akkordeon',
  category: 'Text',
  component: ({ className, attributes, children }) => (
    <Container className={className} {...attributes}>
      {children}
    </Container>
  ),
  defaultNodes: () => [Label, Text],
  styles: ({ theme }) => ({
    marginBottom: theme.space3,
  }),
};
