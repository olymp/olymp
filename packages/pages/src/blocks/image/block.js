import React from 'react';
import { createComponent } from 'olymp-fela';
import { createBlockList } from 'olymp-slate';
import Image from './image';
import Label from './label';

const component = createComponent(
  ({ float }) => ({
    width: '100%',
    float,
    position: 'relative',
  }),
  ({ className, attributes, children }) =>
    (<div className={className} {...attributes}>
      {children}
    </div>),
  p => Object.keys(p)
);

export default {
  key: 'Pages.Media.ImageBlock',
  defaultNodes: () => createBlockList([Image, Label]),
  label: 'Bild mit Text',
  category: 'Medien',
  editable: true,
  component,
};