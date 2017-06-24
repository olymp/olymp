import React from 'react';
import { createComponent } from 'olymp-fela';
import { createBlockList } from 'olymp-slate';
import { Blocks } from 'olymp-pages';
import ImagePageBlockImage from './image';

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
  defaultNodes: () => createBlockList([ImagePageBlockImage, Blocks.Container]),
  label: 'Bild',
  category: 'Seiten',
  editable: true,
  component,
};
