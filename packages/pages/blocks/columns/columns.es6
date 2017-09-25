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
  category: 'Template',
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
      toggle: ({ state, onChange, blockTypes, node }) => {
        onChange(addBlock(state, Column, blockTypes, node.key, node.size));
      },
    },
    {
      label: <FaMinus />,
      tooltip: 'Spalte entfernen',
      toggle: ({ state, onChange, node }) => {
        if (node.nodes.last()) {
          onChange(state.change().removeNodeByKey(node.nodes.last().key));
        }
      },
    },
  ],
};
