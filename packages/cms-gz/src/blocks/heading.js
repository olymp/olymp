import React from 'react';
import { H1 as Heading1, H2 as Heading2 } from '../components';

export const H1 = {
  label: 'Überschrift groß',
  category: 'Template',
  editable: true,
  component: ({ attributes, children }) =>
    (<Heading1 {...attributes}>
      {children}
    </Heading1>),
};

export const H2 = {
  label: 'Überschrift klein',
  category: 'Template',
  editable: true,
  component: ({ attributes, children }) =>
    (<Heading2 {...attributes}>
      {children}
    </Heading2>),
};
