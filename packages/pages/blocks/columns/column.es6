import React from 'react';
import { createComponent, Grid } from 'olymp-fela';
import { createBlockList } from 'olymp-slate';
import Image from './image';
import Text from './text';

const Column = createComponent(
  ({ theme }) => ({
    textAlign: 'center',
    '> h3': {
      color: theme.color,
      marginBottom: theme.space2,
    },
  }),
  ({ getData, setActive, children, attributes, className }) => (
    <Grid.Item medium={1} className={className} gridSize={3} {...attributes}>
      <Image.component getData={getData} setActive={setActive} />
      {children}
    </Grid.Item>
  ),
  p => Object.keys(p)
);

export default {
  key: 'Pages.Template.Columns.Column',
  component: Column,
  editable: true,
  // defaultNodes: () => createBlockList([Image, Text]),
};
