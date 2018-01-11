import React from 'react';
import ShortID from 'shortid';
import Label from './label';
import Text from './text';

export default {
  type: 'accordion',
  isVoid: false,
  kind: 'block',
  label: 'Akkordeon',
  category: 'Layout',
  component: ({ className, attributes, children }) => (
    <div className={className} {...attributes}>
      {children}
    </div>
  ),
  initNode: node => {
    node.data = { id: ShortID.generate().substr(0, 4) };
    return node;
  },
  defaultNodes: () => [Label, Text],
  styles: ({ theme }) => ({
    marginBottom: theme.space3,
  }),
};
