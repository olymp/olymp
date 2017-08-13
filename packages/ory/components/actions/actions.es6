// @flow
import React from 'react';
import { createComponent } from 'olymp-fela';
import Provider from '../provider';
import ToggleEdit from './toggle-edit';
import ToggleInsert from './toggle-insert';
import ToggleLayout from './toggle-layout';
import TogglePreview from './toggle-preview';
import ToggleResize from './toggle-resize';

const Action = createComponent(
  ({ theme }) => ({
    marginTop: theme.space2,
  }),
  'div',
  p => Object.keys(p),
);

export default createComponent(
  ({ theme }) => ({
    position: 'fixed',
    zIndex: 100,
    bottom: 0,
    right: 0,
    padding: 16,
    transition: 'all 200ms ease',
  }),
  ({ className, ...p }) =>
    (<Provider {...p}>
      <div className={className}>
        <Action>
          <ToggleEdit />
        </Action>

        <Action>
          <ToggleInsert />
        </Action>

        <Action>
          <ToggleLayout />
        </Action>

        <Action>
          <ToggleResize />
        </Action>

        <Action>
          <TogglePreview />
        </Action>
      </div>
    </Provider>),
  p => Object.keys(p),
);
