import React from 'react';
import { Container, Grid, createComponent } from 'olymp-fela';
import { createBlockList } from 'olymp-slate';
import { FaPlus, FaMinus } from 'olymp-icons';
import Column from './column';

const Ctn = createComponent(
  ({ theme }) => ({
    paddingTop: theme.space2,
    paddingX: theme.space3,
    hasFlex: {
      '> div': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    },
  }),
  p => <Container {...p} />,
  p => Object.keys(p),
);

export default {
  key: 'Pages.Template.Columns',
  label: 'Spalten-Layout',
  category: 'Template',
  editable: true,
  defaultNodes: () => createBlockList([Column, Column, Column, Column]),
  component: ({ className, children, attributes, getData }) => (
    <Ctn {...attributes} className={className}>
      <Grid size={getData('columns', 3)}>{children}</Grid>
    </Ctn>
  ),
  actions: [
    {
      label: <FaPlus />,
      tooltip: 'Spalte hinzufügen',
      toggle: ({ setData, getData }) => {
        const column = getData('column', 4);
        setData({
          column: column < 8 ? column + 1 : 8,
        });
      },
    },
    {
      label: <FaMinus />,
      tooltip: 'Spalte entfernen',
      toggle: ({ setData, getData }) => {
        const column = getData('column', 4);
        setData({
          column: column > 1 ? column - 1 : 1,
        });
      },
    },
  ],
};
