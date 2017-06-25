import React from 'react';
import { H1 as Heading1, H2 as Heading2 } from '../components';

export const GZKH1Block = {
  key: 'GZK.Template.H1BLock',
  label: 'Überschrift groß',
  category: 'Template',
  editable: true,
  component: ({ className, attributes, children }) =>
    (<Heading1 className={className} {...attributes}>
      {children}
    </Heading1>),
  styles: ({ theme }) => ({
    marginTop: theme.space3,
    marginBottom: theme.space2,
  }),
};

export const GZKH2Block = {
  key: 'GZK.Template.H2BLock',
  label: 'Überschrift klein',
  category: 'Template',
  editable: true,
  component: ({ className, attributes, children }) =>
    (<Heading2 className={className} {...attributes}>
      {children}
    </Heading2>),
  styles: ({ theme }) => ({
    marginTop: theme.space3,
    marginBottom: theme.space2,
  }),
};
