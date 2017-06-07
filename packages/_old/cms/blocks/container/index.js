import React, { Component } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp-slate';

@useGenericBlock({
  label: 'Container',
  category: 'Template',
  resize: {
    coverOnResize: true,
    width: '100%',
    stepX: '10%',
  },
})
export default class ContainerBlock extends Component {
  render() {
    return (
      <GenericBlock {...this.props} style={{ ...this.props.style, position: 'relative', minHeight: 30, overflow: 'hidden' }} />
    );
  }
}
