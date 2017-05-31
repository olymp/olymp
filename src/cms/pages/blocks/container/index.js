import React from 'react';
import { Container } from 'olymp-fela';

export default {
  label: 'Container',
  category: 'Template',
  component: ({ attributes, children }) => (
    <Container {...attributes}>
      {children}
    </Container>
  ),
  actions: [],
};
