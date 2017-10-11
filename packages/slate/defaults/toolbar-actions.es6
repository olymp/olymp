import React from 'react';
import { FaLink, FaAlignCenter } from 'olymp-icons';
import I from '../components/icon';

export default [
  {
    type: 'link', // ['link', 'link-page', 'link-media'],
    label: <I icon={FaLink} />,
    description: 'Link', // ['Extern', 'Intern', 'Datei'],
    onClick: ({ state, onChange }, isActive) => {
      if (isActive) {
        onChange(state.change().unwrapInline('link'));
      } else {
        let href = window.prompt('URL');
        if (href) {
          if (href.indexOf('mailto') === 0) {
          } else if (href.indexOf('tel') === 0) {
          } else if (href.indexOf('/') === 0) {
          } else if (href.indexOf('http') !== 0 && href.indexOf('.') !== -1) {
            href = `http://${href}`;
          }
          onChange(
            state
              .change()
              .wrapInline({
                type: 'link',
                data: { href, target: '_blank' },
              })
              .collapseToEnd(),
          );
        }
      }
    },
    isActive: ({ state }) => state && state.inlines.some(inline => inline.type === 'link'),
  },
  {
    type: 'center',
    label: <I icon={FaAlignCenter} />,
    description: 'Center',
    onClick: ({ state, onChange }, isActive) => {
      if (isActive) {
        onChange(state.change().unwrapBlock('center'));
      } else {
        onChange(
          state
            .change()
            .wrapBlock({ type: 'center' })
            .collapseToEnd(),
        );
      }
    },
    isActive: ({ state }) => state && state.inlines.some(inline => inline.type === 'link'),
  },
];
