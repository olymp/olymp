// @flow
import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import dragDropContext from 'ory-editor-core/lib/components/DragDropContext';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.DragDropContext = dragDropContext(props.editor.dragDropContext);
  }

  render() {
    const { editor, children = [] } = this.props;
    const DragDropContext = this.DragDropContext;
    return (
      <ReduxProvider store={editor.store}>
        <DragDropContext>{children}</DragDropContext>
      </ReduxProvider>
    );
  }
}

export default Provider;
