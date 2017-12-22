import React from 'react';
import cn from 'classnames';
import Image from './image';
import Label from './label';

export default {
  type: 'imageWithLabel',
  isVoid: false,
  kind: 'block',
  defaultNodes: () => [Image, Label],
  label: 'Bild mit Text',
  category: 'Bilder',
  styles: () => ({
    position: 'relative',
  }),
  component: ({ className, children, attributes }) => (
    <div className={cn(className, 'image-with-label-block')} {...attributes}>
      {children}
    </div>
  ),
};
