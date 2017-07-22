import React from 'react';
import { FaSquare } from 'olymp-icons';
import { Container } from 'olymp-fela';
import { v4 } from 'uuid';

export default ({ defaultPlugin }) => ({
  Component: ({ children }) =>
    <Container>
      {children}
    </Container>,
  name: 'olymp/layout/container',
  version: '0.0.1',
  IconComponent: <FaSquare />,
  text: 'Container',
  description: 'Ein responsiver Container für Inhalte aller Art',

  createInitialChildren: () => ({
    id: v4(),
    rows: [
      {
        id: v4(),
        cells: [
          {
            content: {
              plugin: defaultPlugin,
              state: defaultPlugin.createInitialState(),
            },
            id: v4(),
          },
        ],
      },
    ],
  }),

  handleFocusNextHotKey: () => Promise.reject(),
  handleFocusPreviousHotKey: () => Promise.reject(),
});
