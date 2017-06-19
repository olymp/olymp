import React from 'react';
import { createComponent } from 'olymp-fela';
import { Block, Raw } from 'olymp-slate';
export { default as ImageTextImage } from './image';
export { default as ImageTextLabel } from './label';

const component = createComponent(
  ({ width, float }) => ({
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

export const ImageText = {
  defaultNodes: Block.createList([
    { type: 'ImageTextImage', isVoid: true },
    {
      type: 'ImageTextLabel',
      nodes: Block.createList([
        Raw.deserializeNode({
          kind: 'block',
          type: 'line',
          nodes: [{ kind: 'text', text: '', ranges: [] }],
        }),
      ]),
    },
  ]),
  // Meta-Data
  label: 'Bild mit Text',
  category: 'Medien',
  editable: true,
  // Component
  component,
};
