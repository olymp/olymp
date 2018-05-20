import React, { Component } from 'react';
import {
  useBlockBase,
  useGenericBlock,
  useBlockToolbar,
  GenericBlock,
  Block,
} from 'olymp/slate';

@useGenericBlock({
  label: 'Kontainer',
  editable: true,
  /*resize: {
    coverOnResize: true,
  },*/
  actions: props => [
    {
      icon: 'heading',
      type: 'set-title',
      toggle: () => {
        const { setData, getData } = props;
        const title = window.prompt('Titel', getData('title'));
        setData({ title });
      },
    },
  ],
})
export default class GZContainer extends Component {
  render() {
    return (
      <GenericBlock
        {...this.props}
        className="container"
        style={{ position: 'relative', minHeight: 30, overflow: 'hidden' }}
      />
    );
  }
}
