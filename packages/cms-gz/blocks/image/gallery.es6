import React from 'react';
import Block from 'olymp-pages/blocks/gallery';
import { createComponent } from 'olymp-fela';

const component = createComponent(
  ({ theme }) => ({
    ifMediumUp: {
      '> img': {
        borderBottomRightRadius: 60,
      },
    },
  }),
  p => <Block.component {...p} />,
  p => Object.keys(p)
);

export default {
  ...Block,
  component,
};
