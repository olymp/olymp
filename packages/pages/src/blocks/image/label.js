import React from 'react';
import { createComponent } from 'olymp-fela';

const component = createComponent(
  ({ theme }) => ({
    position: 'absolute',
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
  ({ className, children }) =>
    (<div className={className}>
      {children}
    </div>),
  p => Object.keys(p)
);

export default {
  key: 'Pages.ImageBlock.Label',
  editable: true,
  component,
};
