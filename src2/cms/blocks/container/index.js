import React, { Component } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp/cms';

@useGenericBlock({
  label: 'Container',
  category: 'Template',
  resize: {
    coverOnResize: true,
    width: '100%',
    stepX: '10%',
  },
})
export default class GZContainer extends Component {
  render() {
    return (
      <GenericBlock {...this.props} style={{ ...this.props.style, position: 'relative', minHeight: 30, overflow: 'hidden' }} />
    );
  }
}
