import React from 'react';
import { createBlockList } from 'olymp-slate';
import Image from './image';
import Label from './label';

export default {
  type: 'imageWithLabel',
  isVoid: false,
  kind: 'inline',
  defaultNodes: () => createBlockList([Image, Label]),
  label: 'Bild mit Text',
  category: 'Medien',
  component: ({ className, children, attributes }) => (
    <div className={className} {...attributes}>
      {children}
    </div>
  ),
};
