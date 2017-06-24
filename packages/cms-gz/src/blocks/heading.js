import React from 'react';
import { H1 as Heading1, H2 as Heading2 } from '../components';

export const H1 = {
  key: 'GZK.Template.H1BLock',
  label: 'Überschrift groß',
  category: 'Template',
  editable: true,
  component: ({ attributes, children }) =>
    (<Heading1 {...attributes}>
      {children}
    </Heading1>),
  styles: ({ theme }) => ({
    paddingY: theme.space2,
  }),
};

export const H2 = {
  key: 'GZK.Template.H2BLock',
  label: 'Überschrift klein',
  category: 'Template',
  editable: true,
  component: ({ attributes, children }) =>
    (<Heading2 {...attributes}>
      {children}
    </Heading2>),
  styles: ({ theme }) => ({
    paddingY: theme.space2,
  }),
};
