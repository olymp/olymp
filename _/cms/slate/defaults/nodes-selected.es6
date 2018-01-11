import React from 'react';
import { createComponent } from 'react-fela';
import nodes from './nodes';

const getOutlinedOnSelected = Wrapped =>
  createComponent(
    ({ isSelected, theme }) => ({
      outline: isSelected && `2px solid ${theme.color}`,
    }),
    p => <Wrapped {...p} />,
    p => Object.keys(p),
  );

export default Object.keys(nodes).reduce(
  (result, key) => ({
    ...result,
    [key]: getOutlinedOnSelected(nodes[key]),
  }),
  {},
);
