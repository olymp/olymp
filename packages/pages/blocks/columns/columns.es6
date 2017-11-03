import React from 'react';
import { Container, Grid, createComponent } from 'olymp-fela';
import { addBlock } from 'olymp-slate';
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
  type: 'Pages.Template.Columns',
  isVoid: false,
  kind: 'block',
  label: 'Spalten-Layout',
  category: 'Layout',
  defaultNodes: () => [Column, Column, Column, Column],
  component: ({ className, children, attributes, getData }) => (
    <Ctn {...attributes} className={className}>
      <Grid size={getData('columns', 3)}>{children}</Grid>
    </Ctn>
  ),
  actions: [
    {
      label: <FaPlus />,
      tooltip: 'Spalte hinzufügen',
      toggle: ({ value, onChange, schema, node }) => {
        onChange(addBlock(value, Column, schema, node.key, node.size));
      },
    },
    {
      label: <FaMinus />,
      tooltip: 'Spalte entfernen',
      toggle: ({ value, onChange, node }) => {
        if (node.nodes.last()) {
          onChange(value.change().removeNodeByKey(node.nodes.last().key));
        }
      },
    },
  ],
};
