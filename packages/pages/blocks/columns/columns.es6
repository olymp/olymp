import React from 'react';
import { Container, Grid } from 'olymp-fela';
import { createBlockList } from 'olymp-slate';
import { FaPlus, FaMinus } from 'olymp-icons';
import Column from './column';

export default {
  key: 'Pages.Template.Columns',
  label: 'Spalten-Layout',
  category: 'Template',
  editable: true,
  defaultNodes: () => createBlockList([Column, Column, Column]),
  component: ({ className, children, attributes, getData }) => (
    <Container {...attributes} className={className}>
      <Grid size={getData('columns', 3)}>{children}</Grid>
    </Container>
  ),
  actions: [
    {
      label: <FaPlus />,
      tooltip: 'Spalte hinzufügen',
      toggle: ({ setData, getData }) => {
        const column = getData('column', 3);
        setData({
          column: column < 8 ? column + 1 : 8,
        });
      },
    },
    {
      label: <FaMinus />,
      tooltip: 'Spalte entfernen',
      toggle: ({ setData, getData }) => {
        const column = getData('column', 3);
        setData({
          column: column > 1 ? column - 1 : 1,
        });
      },
    },
  ],
};
