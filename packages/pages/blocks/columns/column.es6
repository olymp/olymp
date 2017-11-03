import React from 'react';
import { Grid } from 'olymp-fela';
import { FaSquare } from 'olymp-icons';
import Image from '../image/image';

export default {
  type: 'Pages.Template.Columns.Column',
  isVoid: false,
  kind: 'block',
  label: 'Spalte',
  defaultNodes: () => [Image, 'paragraph'],
  styles: ({ theme }) => ({
    '> div': {
      paddingY: 10,
      '& .image-block': {
        marginTop: -10,
      },
      '> [data-key]': {
        paddingX: 10,
      },
      '> [data-slate-void]': {
        paddingX: 0,
      },
      backgroundColor: theme.dark5,
      borderRadius: theme.borderRadius,
      overflow: 'hidden',
      height: '100%',
    },
  }),
  component: ({ node, children, attributes, className }) => (
    <Grid.Item
      medium={1}
      padding={node.data.get('bordered', true) ? '0 16px 24px 16px' : 0}
      className={className}
      gridSize={4}
      {...attributes}
    >
      <div>{children}</div>
    </Grid.Item>
  ),
  actions: [
    {
      label: <FaSquare />,
      tooltip: 'Rahmen/Rahmenlos',
      toggle: ({ node, onChange, value }) => {
        onChange(
          value.change().setNodeByKey(node.key, {
            data: node.data.set(
              'bordered',
              node.data.get('bordered') === false,
            ),
          }),
        );
      },
    },
  ],
};
