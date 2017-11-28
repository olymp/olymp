import React from 'react';
import { createComponent } from 'olymp-fela';

export default createComponent(
  () => ({
    overflow: 'scroll',
  }),
  'div',
  p => Object.keys(p),
);
