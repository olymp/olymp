import React from 'react';
import { createComponent } from 'olymp-fela';
import { createBlockList } from 'olymp-slate';
import { Blocks } from 'olymp-pages';
import Header from './header';

const component = createComponent(
  () => ({}),
  ({ className, attributes, children }) =>
    (<div className={className} {...attributes}>
      {children}
    </div>),
  p => Object.keys(p)
);

export default {
  key: 'GZK.Pages.HeaderBlock',
  defaultNodes: () => createBlockList([Header, Blocks.Container]),
  label: 'Überschrift',
  category: 'Seiten',
  editable: true,
  component,
};
