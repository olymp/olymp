import React from 'react';
import { Container } from 'olymp-fela';

export default {
  label: 'Container',
  category: 'Template',
  editable: true,
  component: ({ attributes, className, children }) => (
    <Container {...attributes} className={className}>
      {children}
    </Container>
  ),
  actions: [{
    type: 'small',
    icon: 'align-left',
    tooltip: 'Linksbündig',
    toggle: ({ setData }) => setData({ alignment: 'left' }),
    active: ({ alignment }) => alignment === 'left',
  }],
};
