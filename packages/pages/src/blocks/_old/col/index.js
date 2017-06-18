import React from 'react';

export default {
  label: 'Spalte',
  category: 'Template',
  editable: true,
  component: ({ attributes, children }) =>
    (<div {...attributes}>
      {children}
    </div>),
};
