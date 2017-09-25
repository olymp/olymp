import React from 'react';
import { Grid } from 'olymp-fela';
import Image from './image';
import Text from './text';

export default {
  type: 'Pages.Template.Columns.Column',
  isVoid: false,
  kind: 'block',
  label: 'Spalte',
  styles: ({ theme }) => ({
    '> div': {
      backgroundColor: theme.dark5,
      borderRadius: theme.borderRadius,
      overflow: 'hidden',
      height: '100%',
    },
  }),
  component: ({ getData, setActive, children, attributes, className, image, ...p }) => (
    <Grid.Item
      medium={1}
      padding="0 16px 24px 16px"
      className={className}
      gridSize={getData('columns', 4)}
      {...attributes}
    >
      <div>
        <Image.component getData={getData} setActive={setActive} image={image} />
        <Text.component>{children}</Text.component>
      </div>
    </Grid.Item>
  ),
  // defaultNodes: () => createBlockList([Image, Text]),
};
