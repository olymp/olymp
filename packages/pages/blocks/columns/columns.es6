import React from 'react';
import { Container, Grid } from 'olymp-fela';
import { createBlockList } from 'olymp-slate';
import Column from './column';

export default {
  key: 'Pages.Template.Columns',
  label: '3-Spalten-Layout',
  category: 'Template',
  editable: true,
  defaultNodes: () => createBlockList([Column, Column, Column]),
  component: ({ className, children, attributes }) => (
    <Container {...attributes} className={className}>
      <Grid size={3}>{children}</Grid>
    </Container>
  ),
};
