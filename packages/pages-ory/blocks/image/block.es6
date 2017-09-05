import React from 'react';
import { createBlockList } from 'olymp-slate';
import Image from './image';
import Label from './label';

export default {
  key: 'Pages.Media.ImageBlock',
  defaultNodes: () => createBlockList([Image, Label]),
  label: 'Bild mit Text',
  category: 'Medien',
  editable: true,
  component: ({ className, children, attributes }) =>
    <div className={className} {...attributes}>{children}</div>,
};
