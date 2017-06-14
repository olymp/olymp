import React from 'react';
import { createComponent } from 'olymp-fela';
import { Block } from 'olymp-slate';
export { default as ImageTextImage } from './image';
export { default as ImageTextLabel } from './label';

const ImageContainer = createComponent(({ width, float }) => ({
  width: '100%',
  float,
  position: 'relative',
}), ({ className, attributes, children }) => (
  <div className={className} {...attributes}>
    {children}
  </div>
), p => Object.keys(p));

export const ImageText = {
  defaultNodes: Block.createList([{ type: 'ImageTextImage' }, { type: 'ImageTextLabel' }]),
  // Meta-Data
  label: 'Bild mit Text',
  category: 'Medien',
  editable: true,
  // Component
  component: ImageContainer,
};

