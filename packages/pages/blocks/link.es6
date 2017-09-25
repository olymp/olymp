import React from 'react';
import { createComponent } from 'olymp-fela';
import { Card } from 'olymp-scrape';

const CardContainer = createComponent(
  ({ theme }) => ({
    width: '100%',
    position: 'relative',
    display: 'block',
  }),
  ({ attributes, className, getData }) => (
    <Card className={className} value={getData('href')} {...attributes} />
  ),
  p => Object.keys(p),
);

export default {
  type: 'Pages.Media.LinkBlock',
  isVoid: true,
  kind: 'block',
  label: 'Link',
  category: 'Medien',
  component: CardContainer,
  actions: [
    {
      type: 'small',
      icon: 'chain',
      label: 'Link',
      toggle: ({ setData }) => {
        const href = window.prompt('Link');
        if (href) {
          setData({ href });
        } else {
          setData({ href: null });
        }
      },
    },
  ],
};
