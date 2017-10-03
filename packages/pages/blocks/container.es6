import React from 'react';
import { Container } from 'olymp-fela';

export default {
  type: 'container',
  isVoid: false,
  kind: 'block',
  label: 'Container',
  category: 'Template',
  defaultNodes: () => ['paragraph'],
  component: ({ attributes, className, children }) => (
    <Container {...attributes} className={className}>
      {children}
    </Container>
  ),
};
