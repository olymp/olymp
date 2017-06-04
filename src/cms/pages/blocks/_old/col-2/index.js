import React from 'react';
import { Container } from 'olymp-fela';

export default {
  label: 'Container',
  category: 'Template',
  editable: true,
  component: ({ attributes, children }) => (
    <Container {...attributes}>
      {children}
    </Container>
  ),
  plugin: {
    onKeyDown: (e, data, state) => {
      const { document, selection } = state;
      const { startKey } = selection;
      const startNode = document.getDescendant(startKey);

      if (selection.isAtStartOf(startNode)) {
        const previous = document.getPreviousText(startNode.key);
        const prevBlock = document.getClosestBlock(previous.key);

        if (prevBlock.type === 'Col') {
          e.preventDefault();
          return state;
        }
      }

      if (state.startBlock.type !== 'table-cell') return undefined;
      switch (data.key) {
        case 'backspace': return this.onBackspace(e, state);
        case 'delete': return this.onDelete(e, state);
        case 'enter': return this.onEnter(e, state);
        default: return undefined;
      }
    }
  },
  actions: [{
    type: 'small',
    icon: 'align-left',
    tooltip: 'Linksbündig',
    toggle: ({ setData }) => setData({ alignment: 'left' }),
    active: ({ alignment }) => alignment === 'left',
  }],
};
