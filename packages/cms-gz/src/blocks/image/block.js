import React from 'react';
import { createComponent } from 'olymp-fela';
import { createBlockList } from 'olymp-slate';
import { Blocks } from 'olymp-pages';
import ImageText from './image';

const component = createComponent(
  () => ({}),
  ({ className, attributes, children }) =>
    (<div className={className} {...attributes}>
      {children}
    </div>),
  p => Object.keys(p)
);

export default {
  key: 'GZK.Pages.ImageBlock',
  defaultNodes: () => {
    console.log(createBlockList([ImageText, Blocks.Container]));
    return createBlockList([ImageText, Blocks.Container]);
  },
  label: 'Bild',
  category: 'Seiten',
  editable: true,
  component,
};
