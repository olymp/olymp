import React from 'react';
import { createComponent, Grid } from 'olymp-fela';
// import { createBlockList } from 'olymp-slate';
import Image from './image';
import Text from './text';

const Inner = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.dark5,
    borderRadius: theme.borderRadius,
    overflow: 'hidden',
  }),
  'div',
  p => Object.keys(p),
);

export default {
  key: 'Pages.Template.Columns.Column',
  label: 'Spalte',
  component: ({ getData, setActive, children, attributes, className, image, ...p }) => (
    <Grid.Item
      medium={1}
      padding="6"
      className={className}
      gridSize={getData('columns', 3)}
      {...attributes}
      {...p}
    >
      <Inner>
        <Image.component getData={getData} setActive={setActive} image={image} />
        <Text.component>{children}</Text.component>
      </Inner>
    </Grid.Item>
  ),
  editable: true,
  // defaultNodes: () => createBlockList([Image, Text]),
};
