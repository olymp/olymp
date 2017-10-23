import React from 'react';
import { createComponent } from 'olymp-fela';

const component = createComponent(
  ({ theme }) => ({
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: 0,
    width: '100%',
    padding: `${theme.space1} ${theme.space3}`,
    backgroundColor: theme.light2,
    color: theme.dark,
    '> p': {
      padding: 0,
      color: theme.dark2,
    },
    ifSmallDown: {
      position: 'relative',
      padding: theme.space2,
      backgroundColor: theme.dark5,
    },
  }),
  ({ className, children, attributes }) => (
    <div className={className} {...attributes}>
      {children}
    </div>
  ),
  p => Object.keys(p),
);

export default {
  type: 'imageLabel',
  isVoid: false,
  kind: 'block',
  label: 'Titel',
  defaultNodes: ['paragraph'],
  component,
};
