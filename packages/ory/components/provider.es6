// @flow
import React from 'react';
import { Provider } from 'react-redux';
import DragDropContext from 'ory-editor-core/lib/components/DragDropContext';

export default ({ editor, children }) =>
  <Provider store={editor.store}>
    <DragDropContext>
      {children}
    </DragDropContext>
  </Provider>;
