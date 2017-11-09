import React from 'react';
import { createComponent } from 'olymp-fela';
import { Card } from 'olymp-scrape';

const CardContainer = createComponent(
  ({ theme }) => ({
    width: '100%',
    position: 'relative',
    display: 'block',
  }),
  ({ attributes, className, node, children }) => (
    <Card
      {...attributes}
      className={className}
      xy={console.log(node.data.get('value'))}
      value={node.data.get('value')}
    >
      {children}
    </Card>
  ),
  p => Object.keys(p),
);

export default {
  type: 'cardLink',
  isVoid: true,
  kind: 'block',
  label: 'Meta-Link',
  category: 'Sonstiges',
  component: CardContainer,
  actions: [
    {
      type: 'small',
      icon: 'chain',
      label: 'Link',
      toggle: ({ onChange, value, node }) => {
        const href = window.prompt('Link');
        if (href) {
          onChange(
            value.change().setNodeByKey(node.key, {
              data: node.data.set('value', href),
            }),
          );
        } else {
          onChange(
            value.change().setNodeByKey(node.key, {
              data: node.data.set('value', null),
            }),
          );
        }
      },
    },
  ],
};
