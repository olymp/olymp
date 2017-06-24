import React from 'react';
import { createComponent } from 'olymp-fela';
import { createBlockList } from 'olymp-slate';
import { Blocks } from 'olymp-pages';
import Maps from './maps';

const component = createComponent(
  () => ({}),
  ({ className, attributes, children }) =>
    (<div className={className} {...attributes}>
      {children}
    </div>),
  p => Object.keys(p)
);

export default {
  key: 'GZK.Pages.MapsBlock',
  defaultNodes: () => createBlockList([Maps, Blocks.Container]),
  label: 'Karte',
  category: 'Seiten',
  editable: true,
  component,
};
